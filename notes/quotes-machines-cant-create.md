# "Machines can't create anything new" (internal notes)

Collected 2026-10-11 by a research agent for docs/machines-cant-create.html. Unless marked
OWNER PASTE, SECONDARY or NOT VERIFIED, every quotation below was found by text search in the
source fetched from the URL given in this session (PDFs via pdftotext; web pages stripped of
markup) and copied from that text.

## Credit

- Bernd Johannes Wuebben (Global Head, Fixed Income Systematic Investing), "Beyond the Convex
  Hull: AI and the Nature of Human Creativity", LinkedIn article, 10 October 2026.
  https://lnkd.in/p/gpSYdpUq . OWNER PASTE: text supplied by the site owner; LinkedIn not
  fetched (needs login). Quotes used:
  - "A criticism of AI that I hear increasingly often is that it cannot really create anything
    original ... unable to venture genuinely beyond them."
  - "But why should the space of ideas have such a geometry? What would it even mean to take a
    weighted average of algebraic geometry and quantum field theory, or to combine thirty percent
    of topology with seventy percent of number theory?"
  - "More importantly, combining mathematical structures is not the same as averaging them."
  - "When a mathematician spends years absorbing the literature, developing intuition,
    recognizing analogies, and eventually discovering an unexpected connection, we celebrate the
    result as a creative insight. When AI produces an unexpected mathematical argument, we are
    often tempted to dismiss it as statistical pattern matching or recombination." (not used on
    the page after the owner's Rebuke 1 replaced the recombination section)
  - "Nor should we confuse an impressive-looking argument with a correct proof, or a correct proof
    with a conceptual breakthrough."
  - Examples paraphrased from his article: Atiyah-Bott, Donaldson, Scholze. Wiles (modularity + Galois representations) is the owner's addition, not Wuebben's.
- Rebuke 1 ("every result is a mashup, so the word distinguishes nothing") is the owner's own
  framing, deliberately not credited to anyone.

## Defendants

### Ted Chiang, "ChatGPT Is a Blurry JPEG of the Web", New Yorker, 9 Feb 2023
https://www.newyorker.com/tech/annals-of-technology/chatgpt-is-a-blurry-jpeg-of-the-web
(datePublished 2023-02-09 in page JSON). Full text present in the curl'd HTML.
- "When an image program is displaying a photo ... the location between them." (para. on
  interpolation)
- "starting with a blurry copy of unoriginal work isn't a good way to create original work."
- "In the meantime, it's reasonable to ask, What use is there in having something that rephrases
  the Web?" (final paragraph)
- "If and when we start seeing models producing output that's as good as their input, then the
  analogy of lossy compression will no longer be applicable." (para. on training on model output)
- "a major breakthrough" from "(I suspect that such an outcome would require a major
  breakthrough in the techniques used to build these models.)"

### Ted Chiang, "Why A.I. Isn't Going to Make Art", New Yorker, 31 Aug 2024
https://www.newyorker.com/culture/the-weekend-essay/why-ai-isnt-going-to-make-art
- "One is to take an average of the choices that other writers have made ... often really bland."
- "Some individuals have defended large language models by saying that most of what human beings
  say or write isn't particularly original. That is true, but it's also irrelevant."
- Willison's "money laundering for copyrighted data" is quoted by Chiang in this essay (used as
  "Chiang quotes Simon Willison"); Willison's original not fetched.
- Fairness: Chiang says "It's not impossible that one day we will have computer programs that can
  do anything a human being can do" and the 2023 essay allows a future AI "capable of writing good
  prose based on nothing but its own experience". His "can't" is about current systems and art.
  The page convicts the interpolation/averaging/rephrasing description, not the art argument.

### Chomsky, Roberts and Watumull, "The False Promise of ChatGPT", NYT, 8 Mar 2023
https://www.nytimes.com/2023/03/08/opinion/noam-chomsky-chatgpt-ai.html
Fetched via Wayback: http://web.archive.org/web/2023id_/https://www.nytimes.com/2023/03/08/opinion/noam-chomsky-chatgpt-ai.html
- "a lumbering statistical engine for pattern matching" / "extrapolating the most likely
  conversational response"
- "For this reason, the predictions of machine learning systems will always be superficial and
  dubious."
- "by a kind of super-autocomplete" and "plagiarism and apathy and obviation" (about one ChatGPT
  answer on the morality of terraforming Mars)
- "In short, ChatGPT and its brethren are constitutionally unable to balance creativity with
  constraint."
- Caution: the op-ed's main claim is about explanation, not creativity. The page uses only the
  "always" and "constitutionally unable" lines as the permanent-limit claim.

### Chomsky, "high-tech plagiarism" (EduKitchen, 2023) -- NOT USED
SECONDARY only: Open Culture (https://www.openculture.com/2023/02/noam-chomsky-on-chatgpt.html)
reports "basically high-tech plagiarism" and "a way of avoiding learning". Context is students
using ChatGPT to write essays, not whether AI can create. Not verified against the video
(youtube IgxzcOugvEI) and off-topic, so dropped.

### Precedent
Lovelace (1843) and Turing (1950) are on docs/abduction.html; linked, not repeated.

## Rebuke sources

- Balestriero, Pesenti, LeCun (2021), arXiv:2110.09485, abstract via arXiv API: "We empirically
  and theoretically argue against those two points and demonstrate that on any high-dimensional
  ($>$100) dataset, interpolation almost surely never happens." Exponential-sample claim: PDF
  lines "unless the number of dataset samples grows exponentially with d" and intrinsic-dimension
  versions (Sec. 2).
- Demo: demos/convex_hull.py, seed 0, n=1000, 200 test points per d, scipy linprog (HiGHS). Output
  2: 199/200, 5: 165/200, 10: 53/200, 20: 0/200, 50: 0/200; sanity asserts pass; ~43 s wall.
- Fawzi et al., Nature 610, 47-53 (2022), https://www.nature.com/articles/s41586-022-05172-4 .
  Abstract quote "Particularly relevant is the case of 4 x 4 matrices in a finite field ... 50
  years ago". Body: "AlphaTensor finds an algorithm for multiplying 4 x 4 matrices using 47
  multiplications in Z_2, thereby outperforming Strassen's two-level algorithm, which involves
  7^2 = 49 multiplications."
- Romera-Paredes et al., Nature 625, 468-475 (2023), https://www.nature.com/articles/s41586-023-06924-6 .
  "This demonstrates that it is possible to make a scientific discovery—a new piece of verifiable
  knowledge about a notorious scientific problem—using an LLM." "the largest improvement in 20
  years to the asymptotic lower bound". Cap set 512 in n=8, "larger cap set than what was
  previously known". Capacity 2.2180 (ref. 38) -> 2.2202. "best-shot prompting": "we sample best
  performing programs and feed them back into prompts". Program skeleton supplied by humans.
  Previous n=8 record (496) is in a figure, not checked in text: not stated on the page.
- Novikov et al. (2025), AlphaEvolve, arXiv:2506.13131, PDF Sec. 3.1: "For 56 years, designing an
  algorithm with rank less than 49 over any field with characteristic 0 was an open problem.
  AlphaEvolve is the first method to find a rank-48 algorithm to multiply two 4 x 4
  complex-valued matrices." Footnote 3: "There exist algorithms using fewer than 49
  multiplications, but they do not correspond to decompositions of the matrix multiplication
  tensor, and they cannot be applied recursively to multiplying larger matrices." Figure 1:
  "Human defines “What?”" / "AlphaEvolve figures out “How?”".
- Dumas, Pernet, Sedoglavic (2025), arXiv:2506.13242, posted 2025-06-16 08:42 UTC (AlphaEvolve
  06:37 UTC same day). Abstract: rational-coefficient 48-multiplication algorithm "obtained by
  identifying an isotropy that projects the previously known complex-valued decomposition onto the
  field of rational numbers".
- Gunasekar et al. (2023), phi-1, arXiv:2306.11644 abstract: "synthetically generated textbooks
  and exercises with GPT-3.5 (1B tokens)".
- Shumailov et al. (2023), arXiv:2305.17493 abstract: model collapse, "tails of the original
  content distribution disappear".
- Move 37: docs/abduction.html ("It's not a human move").

## Barnette episode (Problem 180)

- OpenAI repo https://github.com/openai/math , created 2026-10-06T21:47Z, initial commit
  21:58Z. README: "This collection includes results at different stages of verification. Not all
  have accompanying Lean formalizations." Catalogue now says 719 manuscripts (Wuebben says 722;
  the 7 Oct history withdraws 3 for a sign error, which may explain it). Not stated on page.
- CONTENTS.md: "180. Barnette's Hamiltonian-cycle conjecture ... ([Lean](lean/docs/180.md))";
  paper "Paired states and Hamiltonian cycles in cubic bipartite planar graphs".
- CONFLICT: lean/docs/180.md (initial commit) says "The formalization proves this statement for
  every such graph." ComparatorChallenges/BarnetteHamiltonian.json points to solution module
  OAI.Combinatorics.Hamiltonian.Main. I downloaded the 31 files in lean/OAI/Combinatorics/
  Hamiltonian/ (8,936 lines): no `sorry`, `admit` or `axiom`. Not compiled; other dependencies
  not checked. Boggan (HN, 7 Oct 02:36 UTC) wrote "There's no Lean proof for this one", and
  Wuebben says a complete machine-verified proof was not available at release. The page says the
  repo lists a formalisation, that I have not compiled it, and that the paper is unrefereed.
- openai.com/index/sharing-ai-progress-in-mathematics/ returned 403; not verified directly. HN
  story 49984923 links it, posted 2026-10-06T22:17Z.
- Boggan, HN item 49987367 (2026-10-07 02:36 UTC): "But it's supposedly proven here - problem
  180. I don't know what to think exactly." Also "On the surface it looks like an approach I
  considered 24 years ago and abandoned."
- Boggan, HN item 49994671 (2026-10-07 16:00 UTC): "some clever partition function sums which are
  intellectually tractable but simply too far out of anything I'd seen before".
- "I never lost a single hour thinking about this problem. Those were all hours that I gained."
  (quoted by Wuebben) NOT FOUND in Boggan's HN comments retrieved; not used.

## Open cautions

- No prominent person found stating the explicit "convex hull" version; Wuebben reports hearing
  it. Chiang's "two points in lexical space ... the location between them" is the nearest verified
  statement. Gary Marcus (arXiv:1801.00631, "training space") and Chollet ("continuous,
  interpolative kind of database", Substack 2023) were checked and not used: both are hedged and
  would not be convictions.
- Web-search budget was exhausted; Chomsky EduKitchen video not checked.
