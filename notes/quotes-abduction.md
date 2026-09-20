# "Machines can't originate / can't do abduction": sources (internal notes)

Started 2026-09-20. Page published as docs/abduction.html.

The full research pack (Larson, Fodor, Peirce, Pinker, MacKay, the hypothesis-generating machines,
and the attribution checks) is the agent report in this session's tool-results directory,
file toolu_015CrKHkYYEotiMSJ4k7hM27.txt. Key points carried onto the page:

- Larson's thesis: "The abductive inference that Peirce proposed long ago does, but we don't know
  how to program it." (p. 190), immediately followed by "at least, not yet".
- Larson's entire treatment of formalised abduction is two endnotes; he calls Bayesian abduction
  "abduction in name only". The words Solomonoff, Kolmogorov, minimum description, symbolic
  regression and Eureqa do not occur in the book (agent grepped the OCR: 0 hits each). "Occam"
  occurs once, to deny that Kepler's ELLIPSE was an Occam's-razor inference. That is the first law,
  not the third; the page says so explicitly rather than claiming a direct refutation.
- Fodor's qualification: "I'm quite prepared to admit that it may yet turn out that all cognitive
  processes reduce to local ones ... But nothing of the sort is currently on offer."
- Pinker's line: "as if the real title of the book was We Don't Understand Everything About the
  Mind Yet."
- MacKay: "Coherent inference (as embodied by Bayesian probability) automatically embodies Occam's
  razor, quantitatively."
- PRINT-CHECK ADVISED on all Larson and Fodor quotes: read from archive.org OCR, not print.
- CORRECTION to an earlier note here: the Wired line "the Google machine made a move that no human
  ever would" is from a DIFFERENT Metz piece (16 March 2016). Fan Hui's own words are in "The
  Sadness and Beauty of Watching Google's AI Play Go", 11 March 2016, and are verbatim:
  "It's not a human move. I've never seen a human play this move," he says. "So beautiful."
- Turing quotes Lovelace WITHOUT "whatever" (confirmed against a facsimile of the original Mind
  printing, p. 450). King et al. 2009 quote Turing's version rather than hers.

## The ancestor: Lovelace's objection

Ada Lovelace, Note G to her translation of Menabrea (1843). RAW, from
https://www.fourmilab.ch/babbage/sketch.html

"The Analytical Engine has no pretensions whatever to originate anything. It can do whatever we
know how to order it to perform. It can follow analysis; but it has no power of anticipating any
analytical relations or truths. Its province is to assist us in making available what we are
already acquainted with."

FLAG: Turing quotes this WITHOUT the word "whatever", as "The Analytical Engine has no pretensions
to originate anything." The original has "whatever". Quote whichever source you name.

## Turing's reply, 1950, section 6, "Lady Lovelace's Objection"

RAW, from https://courses.cs.umbc.edu/471/papers/turing.pdf

The burden-of-proof point: "It will be noticed that he does not assert that the machines in
question had not got the property, but rather that the evidence available to Lady Lovelace did not
encourage her to believe that they had it."

The universality answer, which is the same move as the next-token page's theorem: "It is quite
possible that the machines in question had in a sense got this property. For suppose that some
discrete-state machine has the property. The Analytical Engine was a universal digital computer,
so that, if its storage capacity and speed were adequate, it could by suitable programming be made
to mimic the machine in question."

On originality: "A variant of Lady Lovelace's objection states that a machine can 'never do
anything really new.' This may be parried for a moment with the saw, 'There is nothing new under
the sun.' Who can be certain that 'original work' that he has done was not simply the growth of
the seed planted in him by teaching, or the effect of following well-known general principles."

On surprise: "A better variant of the objection says that a machine can never 'take us by
surprise.' This statement is a more direct challenge and can be met directly. Machines take me by
surprise with great frequency."

## The popular modern form

Nick Cave, The Red Hand Files (January 2023). RAW, from
https://www.theredhandfiles.com/chat-gpt-what-do-you-think/
"... in time create a song that is, on the surface, indistinguishable from an original, but it
will always be a replication, a kind of burlesque. Songs arise out of suffering, by which I mean
they are predicated upon the complex, internal human struggle of creation and, well, as far as I
know, algorithms don't feel. Data doesn't suffer. ChatGPT has no inner being, it has been nowhere,
it has endured nothing, it has not had the audacity to reach beyond its limitations, and hence it
doesn't have the capacity for a shared transcendent experience."

## Move 37

Cade Metz, Wired, March 2016. RAW, from
https://www.wired.com/2016/03/two-moves-alphago-lee-sedol-redefined-future/
"In Game Two, the Google machine made a move that no human ever would. And it was beautiful."
"That's a very strange move," said one commentator, himself a nine dan Go player, the highest rank
there is. "I thought it was a mistake," said the other.
Fan Hui's often-quoted "It's not a human move ... So beautiful" is NOT in this page; treat as
unverified until a source is found.

## Already sourced elsewhere and reusable here
- Chomsky, Roberts and Watumull (NYT 2023): "The crux of machine learning is description and
  prediction; it does not posit any causal mechanisms or physical laws." (see quotes-lecun.md area
  / next-token page)
- FunSearch, Nature 625 (2023/24): "This demonstrates that it is possible to make a scientific
  discovery - a new piece of verifiable knowledge about a notorious scientific problem - using an
  LLM." Caveat: FunSearch is an LLM paired with "a systematic evaluator"; the LLM alone tends "to
  confabulate or ultimately fall short of going beyond existing results."
- Solomonoff, via Scholarpedia "Algorithmic probability": the universal predictor "would thus, in
  some sense, be the perfect universal prediction algorithm, if only it were computable."
- Malach (ICML 2024) and the trace construction on the next-token page: the training scheme
  excludes no computable behaviour.

## The working demonstration (built 2026-09-20)

`demos/abduce.py` and `docs/abduce.js` are the same algorithm, verified to agree exactly.

Given Kepler's six planets as (a, T) pairs, it enumerates expressions in a and T smallest
first and keeps any that is (i) near-constant on the data and (ii) NOT constant on random
data. Condition (ii) is the "matter of course" clause in Peirce's schema: an expression that
comes out constant whatever the data explains nothing.

Real output, both implementations, identical:

    (a*(a*(a/(T*T))))      = 1.000109   spread 1.39e-03   varies on random data: 2.7
    (T/(a*(a*(a/T))))      = 0.999891   spread 1.39e-03   varies on random data: 6.1

    2 law(s), 5 leaves, after 120,082 candidates

Both survivors are Kepler's third law, one the reciprocal of the other. Nothing smaller fits,
so simplicity alone picks the law out. Python runs in about 1.6 seconds.

Check on the data: a^3/T^2 is 1.00036, 0.99982, 1.00000, 0.99992, 1.00097, 0.99958 for
Mercury through Saturn. Relative spread 1.39e-3.

Honest scope for the page: the space searched is tiny (two variables, four operators, at most
five leaves). Real abduction searches a space that is not tiny. That is an argument about cost,
which is an engineering problem, not an argument about possibility.

## Corrections applied 2026-09-20 (issues 18-25)
- The demo is a toy instance of ONE formalisable component (search a hypothesis language, score
  candidates). It is not general abduction and does not answer Fodor or Larson on relevance,
  background knowledge or open-ended search. The page now says so twice.
- "Simplicity alone" is grammar-relative: leaf count, this operator set, this tolerance. The
  120,082 are generated trees, not distinct hypotheses.
- Scoring is not generating. Bayes/MDL rank a supplied class; Solomonoff is not computable. The
  page concedes Larson has a real objection available, and faults what he does with it.
- Schmidt and Lipson's "no prior physics" is disputed: Hillar and Sommer (arXiv:1210.7273) argue
  the fitness criterion encodes Hamiltonian and Newtonian structure.
- The AI co-scientist case is a held-out match, not a prospective prediction later confirmed. The
  lab had the answer and had not published it.
- Negative search claims are now stated as searches of the scanned text, not as facts about the
  book. Larson and Fodor quotes remain OCR-sourced and print-unchecked.
- demos/abduce.py and docs/abduce.js now share a checked-in CONTROL table instead of two different
  PRNGs, so both report identical figures. Verified: both give 2.7 and 6.1.
