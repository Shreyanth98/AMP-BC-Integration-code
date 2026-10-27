# Authoring guide: loading the right Brand Concierge on each page

Question from the pilot check-in: does the concierge work like a component that can load the right concierge for each page?

Short answer: yes. The concierge is a small, reusable block (a mount element plus a few scripts). Which concierge answers on a page is decided by the datastream that page passes to the Web SDK, and optionally by page rules set in Composer.

## How a page picks its concierge

1. **Datastream.** In Composer, each concierge has a Datastream Config (Deployments tab). When a page calls `alloy("configure", { datastreamId: ... })`, Brand Concierge answers with the concierge bound to that datastream.
2. **Page rules (optional).** The Surface Config Management dialog on each concierge takes page rules (domain and path, up to 10 per concierge). Use these when you want one concierge on some pages and another on others.
3. **Region.** `alloy("configure", { conversation: { region: "aus5" } })` sends calls to the Australian region. Keep it on every page.

For AMP, both audiences use the New Customer concierge for now. When the Existing Customer concierge exists, give the existing customer pages that concierge's datastream binding (or a page rule), and change nothing else.

## What an AEM component needs

One reusable component or experience fragment is enough:

| Part | What it holds | Author controls |
|---|---|---|
| Mount element | `<section class="amp-bc-section"><div id="amp-bc-mount"></div></section>` | Where it sits on the page (under the hero banner) |
| Scripts (page head or component) | Web SDK 2.35.1, the Brand Concierge `main.js`, `styleConfigurations.js` | Nothing. Same for every page |
| Configure call | Datastream ID, org ID, `conversation.region` | Which datastream, if a page needs a different concierge |
| Bootstrap call | `window.adobe.concierge.bootstrap({ instanceName: "alloy", stylingConfigurations: window.styleConfiguration, selector: "#amp-bc-mount", stickySession: false })` | Nothing |
| Styling | `amp-bc-overrides.css` in the site stylesheet | Fonts and colours, changed in one place |

The floating bar (`amp-bc-floating.js` and `.css`) is separate. It loads on every page and stays off pages that have the embedded block.

## What authors can change without code

Copy (title, subheading, prompt cards, placeholder, fine print) lives in `styleConfigurations.js`. Changing a card or the title is an edit to that one file. Fonts and colours are in `amp-bc-overrides.css`. Answers and behaviour are edited in Composer, not on the page.

## What is not confirmed yet

- Whether the Existing Customer concierge needs its own datastream or can share the New Customer one. Adobe will confirm when it is created.
- The chat itself: it currently returns "Datastream config not found" and is with the Brand Concierge team.
