# FixIt: report an issue in your city

A small civic reporting site built as a teaching demo for Mission X.
Open `index.html` in a browser (or use the VS Code Live Server extension) and click through the report flow.

## Who owns what
| Page | Owner | Reviewer |
|---|---|---|
| index.html (step 1: issue type) | Aroha | Sam |
| details.html (step 2: description and photo) | Aroha | Sam |
| location.html (step 3: location) | Sam | Aroha |
| contact.html (step 4: contact choice) | Sam | Aroha |
| review.html (check your report) | Aroha | Sam |
| confirmation.html (report received) | Sam | Aroha |
| my-reports.html (list of sent reports) | Aroha | Sam |
| urgent-contacts.html (emergency info) | Sam | Aroha |
| privacy.html (how details are used) | Aroha | Sam |

Every page has one owner and one reviewer. The owner builds it, the reviewer checks it before it is merged.

## Folder structure
```
fixit-demo/
  index.html          <- pages live at the root, in flow order
  details.html
  location.html
  contact.html
  review.html
  confirmation.html
  my-reports.html     <- supporting pages linked from the flow
  urgent-contacts.html
  privacy.html
  css/
    tokens.css        <- design tokens: colours, type, spacing (matches Figma variables)
    base.css          <- resets and default element styles
    layout.css        <- page structure, grids, breakpoints
    components.css    <- reusable pieces: buttons, cards, form fields
  js/
    main.js           <- interactions (one clearly commented section per feature)
  assets/
    images/           <- photos and illustrations
    icons/            <- svg icons
  README.md           <- you are here: how the project works
  _teaching/          <- demo-only files, not part of the site
```

## House rules (our conventions)
1. **Files and folders:** lowercase, words joined with hyphens. `thank-you.html`, not `Thank You.html`.
2. **Never hard-code a colour, font size or spacing value.** Use a token from `tokens.css`, e.g. `var(--color-primary)`.
3. **Class names describe what the thing is, not how it looks.** `.btn-primary`, not `.blue-button`.
4. **Reuse before you create.** Check `components.css` for an existing class before writing a new one.
5. **Mobile first.** Write the small-screen styles first, then add `@media (min-width: 768px)` for bigger screens.
6. **Comments explain why, not what.** Label bug fixes with `FIX:` and a short note.
7. **Every change goes through a pull request** and gets reviewed by the page reviewer before merging to `main`.
8. **Indentation:** 2 spaces (set by `.editorconfig`). Format on save with Prettier.

## Git workflow
1. Pull the latest `main`.
2. Create a branch: `feature/photo-file-name` or `fix/nav-contrast`.
3. Commit small and often with clear messages: `Show chosen photo file name on details page`.
4. Push and open a pull request. Fill in the template.
5. Reviewer leaves at least one comment, then approves.
6. Merge, delete the branch, pull `main` again.
