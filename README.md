# philosophy (view as [web page](https://dumbphilosophy.com/))

**Philosophy is Mostly F#@king Dumb.** It's supposed to be profound ... but mostly it is trivially defused.
Classic philosophical arguments, stated fairly and then taken apart.

The site is plain static HTML in `docs/`, served by GitHub Pages at the domain root. To add a
rebuke, copy `docs/chinese-room.html`, add a card to the list in `docs/index.html`, and add a link
to the Rebukes dropdown in the header. The header is one block, byte-identical on every page
(see `~/github/style/site_conventions.md`), so paste the updated block into every page and run
`node docs/header-check.js` before committing.
