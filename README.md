# philosophy (view as [web page](https://dumbphilosophy.com/))

Make a mistake in mathematics and you start again. Make a mistake in software, it's a bug. Make a
mistake in philosophy and the world has to hear about it endlessly. This site compounds the
problem.

This repository is the source for [dumbphilosophy.com](https://dumbphilosophy.com/), where famous
arguments are quoted in their authors' own words and then taken apart. Each page also quotes the
author's replies to critics, and says what the author got right.

## Rebukes

- [The Chinese Room](https://dumbphilosophy.com/chinese-room.html). Searle, 1980. The book that could do the job would be bigger than a great many universes, and nobody has intuitions about those.
- [The Gödel Argument](https://dumbphilosophy.com/godel.html). Lucas, 1961, and Penrose, 1989 and 1994. Lucas dropped the theorem's "if". Penrose replaced it with a premise that contradicts itself.
- [Gödel Proves Whatever You Like](https://dumbphilosophy.com/godel-abuse.html). A theorem about arithmetic, cited as an authority on Lenin's tomb, God, poetry and the end of physics.
- [The Orangutan Argument](https://dumbphilosophy.com/orangutan.html). LeCun, 2019 to the present. A machine doesn't have to want power. It only has to want something for which power is useful.
- [Mary's Room](https://dumbphilosophy.com/marys-room.html). Jackson, 1982. "It seems just obvious" is the whole argument, and its author no longer finds it obvious.
- [Just Predicting the Next Token](https://dumbphilosophy.com/next-token.html). Bender, Chomsky, Marcus, Chiang, LeCun, Kambhampati. For any algorithm there is a corpus whose best next-token predictor is that algorithm, so the premise rules nothing out.
- [The Tao of Physics](https://dumbphilosophy.com/tao-of-physics.html). Capra, 1975. He tied a religion to one theory of particle physics, and the other one won.
- [Machines Can't Do Abduction](https://dumbphilosophy.com/abduction.html). Larson, 2021; Fodor, 2000. A forty-line program recovers Kepler's third law from six numbers, and the formal literature appears in the defendant's book as two endnotes.

## Adding a rebuke

The site is plain static HTML in `docs/`, served by GitHub Pages at the domain root. Copy an
existing page, add a card to the list in `docs/index.html`, and add a link to the Rebukes dropdown
in the header. The header is one block, byte-identical on every page
(see `~/github/style/site_conventions.md`), so paste the updated block into every page and run
`node docs/header-check.js` before committing.

Sourced quotations for pages written and unwritten are in `notes/`.
