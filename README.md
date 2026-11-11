# AMP Brand Concierge: integration pack for the AMP site

This pack adds the Lifetime Boost concierge to the AMP site. It carries no styling of its own. The look, wording, welcome message,
prompt cards, input placeholder and fine print all come from the concierge in Composer, through one file per concierge:
`styleConfigurations.js`, which is the Composer export, unchanged. The floating bar reads its colours and fonts from that same file.

## What is in the folder

| Path | What it is | Where it goes |
|---|---|---|
| `new-customer/index.html`, `new-customer/styleConfigurations.js` | Reference page and Composer export for the New Customer concierge | Copy the marked parts of the page into the template. Host the config file on the AMP site |
| `existing-customer/index.html`, `existing-customer/styleConfigurations.js` | The same for the Existing Customer concierge | Same |
| `amp-bc-floating.js`, `amp-bc-floating.css`, `floating.html` | The floating bar and panel, plus a reference page | Host on the AMP site and load on every page |
| `AUTHORING-GUIDE.md` | How a page loads the right concierge | Reference |

There is no stylesheet for the embedded component. Nothing is added to the site CSS.

## How a change in Composer reaches the AMP site (manual route, agreed with the product team)

1. In Composer, open the concierge, Deployments, Style Configuration, and choose Download style configuration.
2. Replace the matching `styleConfigurations.js` on the AMP site with the downloaded file (New Customer file for the New Customer concierge, Existing Customer file for the other).
3. Reload the page. The embedded component and the floating bar both show the new look and wording.

Answers, instructions, guardrails, suggestions and knowledge are not in this file. They run in Brand Concierge and change on the site
straight away when edited in Composer, with no file to replace.

## Steps for the embedded component (once per variant)

1. The page needs the Adobe Web SDK (`alloy`). If the AMP site loads it under another instance name, change `instanceName` in the bootstrap call. Otherwise use the base code and the `alloy.min.js` line from `index.html` (Web SDK 2.35.1 or later).
2. Call `alloy("configure", ...)` once, with the datastream ID and org ID (see below). Keep `conversation: { region: "aus5" }`.
3. Load that variant's `styleConfigurations.js`, then the Brand Concierge web client:
   `https://experience.adobe.net/solutions/experience-platform-brand-concierge-web-agent/static-assets/main.js`
4. Add the mount element where the concierge should appear: `<div id="amp-bc-mount"></div>`
5. Call the bootstrap after it:
   `window.adobe.concierge.bootstrap({ instanceName: "alloy", stylingConfigurations: window.styleConfiguration, selector: "#amp-bc-mount", stickySession: false });`

## Steps for the floating component

1. On every page, after the Web SDK, `styleConfigurations.js` and `main.js`, load `amp-bc-floating.css` and `amp-bc-floating.js`.
2. Nothing else. The script adds the bar and opens the panel when a visitor asks a question or taps a chip. It stays off pages that have the embedded component.
3. The bar's colours, fonts, corner radius, input size and button colours come from the `theme` section of `styleConfigurations.js`, and its placeholder from `text["input.placeholder"]`. The two chips ("What is Lifetime Boost?", "Am I eligible for Lifetime Boost?") are set at the top of `amp-bc-floating.js` until Kyle confirms them.
4. Add `?amp-bc-open` to a page URL to open the panel straight away when testing.

## Values already filled in

| Value | Where | Notes |
|---|---|---|
| Datastream ID `6943a42a-d5c6-4361-9266-469e59d4d01c` | `alloy("configure", ...)` in every page | AMP's UAT datastream with Brand Concierge enabled. One datastream serves both concierges |
| Org ID `11BA6EA55322342B0A490D44@AdobeOrg` | same | AMP SERVICES LIMITED |
| `conversation: { region: "aus5" }` | same | Routes Brand Concierge to the Australian region. Keep it |
| Web SDK 2.35.1 | script tag | 2.35.1 or later |

## Which concierge answers on which page

A concierge answers only on pages that match its page rules in Composer (Deployments, Surface Config Management). The New Customer
concierge has a rule for the whole AMP UAT domain, `ampau-uat.aem-saas.digital-np.ampaws.com.au` with any path, so any UAT page that loads this code answers.
If a page shows "I'm sorry, something went wrong", check first that the page's domain and path match a rule. Other messages: "Datastream config not found" means
the page uses a different datastream (for example the DEV one); "Concierge not found" means the datastream has no concierge linked.
Please do not edit the page rules or the datastream in Composer without telling Adobe first, because saving page rules can clear the datastream link.

## Fonts

The font comes from the `--font-family` value in the Composer style configuration (Hurme Geometric Sans, with a generic fallback). The font is already loaded on the AMP
site, so nothing is uploaded to Brand Concierge. On a page that does not load it, the browser falls back to a generic sans-serif.

## Still to be confirmed with Kyle

- The suggestions: the four cards and the two floating chips use Adobe's suggestions for now.
- The fine print in Composer: its text ends with the placeholder `{Terms}` while the link is named "Terms of Use", so the page shows `{Terms}` as plain text. The placeholder in the text must match the link name exactly.
- The privacy notice in Composer still holds template wording ("YourBrand"). It shows in the chat as saved, so it needs AMP's wording.
- The input placeholder reads "Any any question" in Composer.

## Testing on UAT

1. Load the Lifetime Boost page in UAT. The block shows the title, subheading, four cards, the input and the fine print as in the Composer preview.
2. Ask "What is Lifetime Boost?" and confirm an answer with sources.
3. Open any other UAT page. The floating bar should appear, and typing a question should open the panel with an answer.
4. After any change in Composer, download the style configuration, replace the file, and reload to confirm the page matches.
