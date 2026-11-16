# Authoring guide: setting up a new Brand Concierge on the AMP site

Purpose: show how simple it is to add a new concierge once the first one is in place. The guide separates what Adobe did once
(one-time setup, already done for the pilot) from what is repeated for every new concierge (about six steps, no code changes).

## At a glance

| | One-time setup (done) | Repeat for each new concierge |
|---|---|---|
| Site | Web SDK, Brand Concierge client script, floating bar files, datastream with Brand Concierge enabled, region setting | Nothing |
| Composer | Organisation access, datastream linked | Create concierge, write instructions and knowledge, set page rules, style it, download the style file |
| Page | Mount element and bootstrap block added to the page template | Add one `styleConfigurations.js` file for the new concierge and point the page at it |
| Code changes | Written once, reused | None |

## Part 1: One-time setup (already done by Adobe for the pilot)

1. **Web SDK on the page.** Adobe Web SDK 2.35.1 (`alloy`), with one `configure` call holding the datastream ID, org ID and `conversation: { region: "aus5" }`. This is in the site template, so every page has it.
2. **Datastream.** One AMP UAT datastream with Brand Concierge enabled. Every concierge shares it, so a new concierge does not need a new datastream.
3. **Brand Concierge client script.** The `main.js` from Adobe's CDN, loaded once in the template.
4. **Mount block.** `<div id="amp-bc-mount"></div>` where the concierge should sit on the page, followed by the bootstrap call:
   `window.adobe.concierge.bootstrap({ instanceName: "alloy", stylingConfigurations: window.styleConfiguration, selector: "#amp-bc-mount", stickySession: false })`
5. **Floating bar.** `amp-bc-floating.css` and `amp-bc-floating.js` loaded on every page. It stays off pages that have the embedded block. It takes its colours and fonts from the same style file, so no styling lives in the page code.
6. **Fonts.** AMP's font is already loaded on the AMP site. Nothing is uploaded to Brand Concierge.

None of this is touched again when a new concierge is added.

## Part 2: Repeat for each new concierge

1. **Create the concierge in Composer.** Name it, then add its instructions, skills and knowledge sources. Answers, guardrails and suggestions run on Adobe's side and are live as soon as they are saved.
2. **Link the datastream.** Deployments, Datastream Config: enter the shared AMP datastream ID. Check it is still there after any later save.
3. **Set page rules.** Deployments, Surface Config Management: add the domain and path of each page where this concierge should answer (up to 10 rules). A concierge answers only on pages that match its rules. A page that matches no rule shows "I'm sorry, something went wrong". If two concierges both match a page, give each a distinct path so there is no overlap.
4. **Style it.** Deployments, Edit JSON Config: set the welcome heading, prompt cards, placeholder, fine print and colours. Fine print links use a placeholder in braces, for example `{Terms}`, and the text inside the braces must match the link name exactly.
5. **Download the style file.** Deployments, Download style configuration. Save it as `styleConfigurations.js` in a new folder for that concierge, next to the existing `new-customer` and `existing-customer` folders.
6. **Point the page at it.** On the pages for that concierge, load its `styleConfigurations.js` before `main.js`. Nothing else on the page changes.

Then test: open a page that matches the rules, ask a question, and confirm the look, the cards and the fine print match the Composer preview.

## What authors change without code

| Change | Where | Does the site file need replacing? |
|---|---|---|
| Answers, instructions, guardrails, suggestions, knowledge | Composer | No. Live straight away |
| Look and wording (heading, cards, placeholder, fine print, colours, fonts) | Composer, then download the style file | Yes, replace that concierge's `styleConfigurations.js` |
| Which pages a concierge appears on | Composer page rules | No |
| Which concierge a page uses | Page rules, or the page loading a different style file | Only if the page's style file changes |

## Which concierge answers on a page

- The concierge is chosen by the page rules in Composer. The datastream is shared, so it does not decide this.
- Each concierge has its own list of paths. The pilot lists are in the README. When a new concierge is added, give it paths that no other concierge uses, and remove any catch-all rule from the first concierge so the two do not overlap.
- Messages to know: "Datastream config not found" means the page uses a different datastream. "Concierge not found" means the datastream has no concierge linked.

## Notes

- The embedded block and the floating bar both read the same style file, so a change in Composer reaches both once the file is replaced.
- Please do not edit page rules or the datastream in Composer without telling Adobe first, because saving page rules can clear the datastream link.
