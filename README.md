# AMP Brand Concierge: integration pack for the AMP site

This pack adds the Lifetime Boost concierge to the AMP site in the two places Kyle's design asks for. It follows the same delivery
pattern as other Brand Concierge customers: the Adobe Web SDK, the Brand Concierge web client, one styling file and a mount point.
Nothing here needs access to AMP's codebase. Reece places the files and snippets.

## What goes where

1. Embedded component: the Lifetime Boost landing page, in a block directly under the hero banner (above "Super's Boost-kept
   secret is out"). There is one variant for new customers and one for existing customers.
2. Floating component: every page. A dark bar fixed at the bottom with a chat box and two suggestion chips. It switches itself off
   on a page that already has the embedded component.

## What is in the folder

| Path | What it is | Where it goes |
|---|---|---|
| `new-customer/index.html` and `new-customer/styleConfigurations.js` | Reference page and styling file for the new customer concierge | Copy the marked parts of the page into the template. Host the styling file on the AMP site |
| `existing-customer/index.html` and `existing-customer/styleConfigurations.js` | The same for the existing customer concierge | Same |
| `amp-bc-overrides.css` | Font and colour rules for the embedded component (Hurme Geometric Sans heading, Open Sans body) | Add to the site stylesheet |
| `amp-bc-floating.js`, `amp-bc-floating.css`, `floating.html` | The floating bar and panel, plus a reference page | Host on the AMP site and load on every page |

## Steps for the embedded component (do once per variant)

1. The page needs the Adobe Web SDK (`alloy`). If the AMP site already loads it under another instance name, change `instanceName`
   in the bootstrap call. If not, use the base code and the `alloy.min.js` line from `index.html`.
2. Call `alloy("configure", ...)` once, with the datastream ID and AMP's org ID (see "Values to fill in"). The configure call must include `conversation: { region: "aus5" }`, which routes Brand Concierge to the Australian region, and the page must load Web SDK 2.35.1 or later (the reference pages use 2.35.1).
3. Load that variant's `styleConfigurations.js`, then the Brand Concierge web client:
   `https://experience.adobe.net/solutions/experience-platform-brand-concierge-web-agent/static-assets/main.js`
4. Add the mount element where the concierge should appear, inside the wrapper: `<section class="amp-bc-section"><div id="amp-bc-mount"></div></section>`. The wrapper gives the block its background and spacing.
5. Call the bootstrap after it:
   `window.adobe.concierge.bootstrap({ instanceName: "alloy", stylingConfigurations: window.styleConfiguration, selector: "#amp-bc-mount", stickySession: false });`
6. Add `amp-bc-overrides.css` to the site stylesheet.

## Steps for the floating component

1. On every page, after the Web SDK, a `styleConfigurations.js` and `main.js`, load `amp-bc-floating.css` and `amp-bc-floating.js`.
2. Nothing else. The script adds the bar and opens the panel when a visitor asks a question or taps a chip.
3. Add `?amp-bc-open` to a page URL to open the panel straight away when testing.

## New and existing customers

Only one Lifetime Boost concierge exists today ("AMP - Lifetime Boost - New Customer - PoC v1.0"), so both variants use it and the
same datastream ID. The two folders are identical apart from their names, so the page structure is ready. Once the Existing Customer
concierge is created, Adobe will give you its own datastream ID, and only the `datastreamId` line in `existing-customer/index.html`
changes. Please tell us how the site tells the two audiences apart (for example signed in, a different page, or a cookie), because
Kyle's sheet lists the same page for both. Concierges can also be tied to pages by rule (domain and path, up to 10 rules per
concierge) in Deployments, Surface Config. Adobe will set those once the pages are agreed.

## Values already filled in

| Value | Where | Notes |
|---|---|---|
| Datastream ID `09688f37-1fb3-4085-8d12-1ddf16422fe3` | `alloy("configure", ...)` in every `index.html` and `floating.html` | The datastream AMP's UAT site uses, and the same value Composer's deploy script uses |
| Org ID `11BA6EA55322342B0A490D44@AdobeOrg` | same | AMP SERVICES LIMITED |
| `conversation: { region: "aus5" }` | same | Routes Brand Concierge to the Australian region. Keep it |
| Web SDK 2.35.1 | script tag | Use 2.35.1 or later |

The Existing Customer concierge does not exist yet, so both variants use the New Customer concierge for now. When it is created,
only the datastream binding in Composer changes. The page files stay as they are.

## Known issue on Adobe's side (read before testing)

At the time of writing, Brand Concierge answers with "Datastream config not found" when a page asks a question, so the chat
shows "I'm sorry, something went wrong". The welcome screen, cards, fonts and layout all work. Adobe is fixing the datastream
registration for the concierge in AMP's Australian region and will tell you when to retest. You do not need to change anything in
the files for this. If you see that message, it is the known issue and not an integration mistake.

## Fonts

Hurme Geometric Sans (SemiBold, 44px headings) and Open Sans (Regular, 18px body) are already loaded on the AMP site, so nothing is
uploaded to Brand Concierge. The CSS refers to them by the same names the site uses. If those names differ on the live pages, change
them in `amp-bc-overrides.css`. On mobile the heading drops to 28px and body copy to 16px.

## Still to be confirmed with Kyle

- The suggestions: cards 2 to 4 and the two floating chips (marked TBC in the design) use Adobe's suggestions for now.
- The fine print: the design text has typos ("if subject", "desitive") and the phrase "AI responses are not your Content". The
  pack uses corrected wording without that phrase. The Privacy Policy is `https://www.amp.com.au/privacy`. The link named
  "Generative AI Terms" points to Adobe's generative AI guidelines. Kyle should confirm that or give an AMP page.
- Whether suggestions should differ by page. In this pack they are the same everywhere.

## Testing on UAT

1. Load the Lifetime Boost page in UAT. The block should show the title, subheading, four cards, the input and the fine print.
2. Ask "What is Lifetime Boost?" and confirm an answer with links.
3. Open any other UAT page. The floating bar should appear, and typing a question should open the panel with an answer.
4. Check the fonts on desktop and at phone width.
