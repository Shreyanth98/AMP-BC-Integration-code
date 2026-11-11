/*
 * AMP Brand Concierge: floating component (reference implementation for Reece).
 *
 * What it is: a bar fixed at the bottom of the page with a chat box and two suggestion chips, as in Kyle's
 * "Brand Concierge floating Component" design. Typing a question or tapping a chip opens a panel and starts the same
 * concierge with that first message.
 *
 * Look: this file has no colours or fonts of its own. It reads them from the Composer style configuration
 * (window.styleConfiguration.theme) and applies the same CSS variables to the bar, so the bar always matches the main
 * chat. The placeholder text also comes from the configuration. When Kyle changes the look in Composer, replace
 * styleConfigurations.js with the new download and the bar follows.
 *
 * Brand Concierge has no built-in floating launcher, so this bar and panel are host-side. Only the panel's inside is
 * Brand Concierge (loaded through the same window.adobe.concierge.bootstrap call as the embedded component).
 *
 * Use: load AFTER the Web SDK snippet, styleConfigurations.js and main.js, together with amp-bc-floating.css.
 * It does nothing on a page that already has the embedded concierge (#amp-bc-mount), so the two never compete.
 */
(function () {
  "use strict";

  // The two chips are TBC in Kyle's design spec. Change them here when he confirms them.
  var SUGGESTIONS = ["What is Lifetime Boost?", "Am I eligible for Lifetime Boost?"];
  var INSTANCE_NAME = "alloy";

  // Wording and look come from the Composer style configuration.
  var CFG = window.styleConfiguration || {};
  var TEXT = CFG.text || {};
  var THEME = CFG.theme || {};
  var PLACEHOLDER = TEXT["input.placeholder"] || "Ask a question";
  var SEND_LABEL = TEXT["input.send.aria"] || "Send message";

  if (document.getElementById("amp-bc-mount")) return;          // embedded page: no floating bar
  if (document.getElementById("amp-bc-floating")) return;       // already added

  var started = false;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  var root = el("div", "amp-bc-float");
  root.id = "amp-bc-floating";
  Object.keys(THEME).forEach(function (name) {          // same CSS variables the main chat uses
    if (name.indexOf("--") === 0) root.style.setProperty(name, THEME[name]);
  });

  // Bar: chat box + chips
  var bar = el("div", "amp-bc-float__bar");
  var form = el("form", "amp-bc-float__form");
  var input = el("input", "amp-bc-float__input");
  input.type = "text";
  input.placeholder = PLACEHOLDER;
  input.setAttribute("aria-label", PLACEHOLDER);
  var send = el("button", "amp-bc-float__send");
  send.type = "submit";
  send.setAttribute("aria-label", SEND_LABEL);
  send.innerHTML = "&#10148;";
  form.appendChild(input);
  form.appendChild(send);
  bar.appendChild(form);

  var chips = el("div", "amp-bc-float__chips");
  SUGGESTIONS.forEach(function (s) {
    var chip = el("button", "amp-bc-float__chip", s);
    chip.type = "button";
    chip.addEventListener("click", function () { open(s); });
    chips.appendChild(chip);
  });
  bar.appendChild(chips);

  // Panel: close button + concierge mount
  var panel = el("div", "amp-bc-float__panel");
  panel.hidden = true;
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-label", "AMP Brand Concierge");
  var close = el("button", "amp-bc-float__close");
  close.type = "button";
  close.setAttribute("aria-label", "Close chat");
  close.innerHTML = "&times;";
  close.addEventListener("click", function () { panel.hidden = true; bar.hidden = false; });
  var mount = el("div", "amp-bc-float__mount");
  mount.id = "amp-bc-float-mount";
  panel.appendChild(close);
  panel.appendChild(mount);

  root.appendChild(bar);
  root.appendChild(panel);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var q = input.value.trim();
    if (q) open(q);
  });

  function open(firstMessage) {
    bar.hidden = true;
    panel.hidden = false;
    if (started) return;                       // the conversation is already running in the panel
    started = true;
    if (firstMessage) mount.setAttribute("data-initial-message", firstMessage);
    window.adobe.concierge.bootstrap({
      instanceName: INSTANCE_NAME,
      stylingConfigurations: CFG,
      selector: "#amp-bc-float-mount",
      stickySession: true                      // keep the conversation when the visitor changes page
    });
  }

  function mountBar() {
    document.body.appendChild(root);
    if (/[?&]amp-bc-open\b/.test(window.location.search)) open("What is Lifetime Boost?");   // QA helper only
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mountBar);
  else mountBar();
})();
