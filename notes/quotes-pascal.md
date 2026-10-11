# Pascal's Wager (docs/pascal.html): quotation log

Checked 2026-10-11 by a research agent. Every quotation on the page was matched character-for-character
(modulo curly quotes) against a source downloaded in that session.

## Primary text
- Pascal, Pensées §233, Trotter translation, Project Gutenberg #18269 (Dutton 1958 edition with T. S. Eliot intro).
  https://www.gutenberg.org/cache/epub/18269/pg18269.txt (lines ~3703-3860 of the .txt)
  - "God is, or He is not." But to which side shall we incline? Reason can decide nothing here.
  - Yes; but you must wager. It is not optional. You are embarked.
  - Let us weigh the gain and the loss ... Wager, then, without hesitation that He is.
  - But there is here an infinity of an infinitely happy life to gain ... you must give all.
  - This is demonstrable; and if men are capable of any truths, this is one.
  - "adds nothing"; "The finite is annihilated in the presence of the infinite."
  - I am forced to wager, and am not free. I am not released, and am so made that I cannot believe. What, then, would you have me do?
  - Follow the way by which they began; ... and deaden your acuteness.
  - "faithful, honest, humble, grateful, generous"; "gain in this life" (from "The end of this discourse").
  Note: the SEP quotes the end-of-discourse list without "honest"; Gutenberg has it. Page follows Gutenberg.

## SEP: Hájek, "Pascal's Wager", revision of 11 Sep 2022
https://plato.stanford.edu/entries/pascal-wager/
- §5.4 hamburger passage (verbatim); "All hell breaks loose: anything you might do is maximally good by expected utility lights!"
- §5.4 summaries of Duff 1986 (Antony Duff), Hájek 2003, Monton 2011, Robertson 2012, Easwaran & Monton 2012 (idealisation "surely not physically realizable" is SEP's wording, paraphrased on page, not quoted), Hájek 2018 reformulations.
- §5.1 Diderot (1746): "An Imam could reason just as well this way" (SEP's translation). Cargile 1966 real-number gods. Schlesinger 1994 tie-break principle; SEP: "not found in the Wager itself". Bartha 2012.
- §5.5 "vous abêtira" / "will make you a beast" (SEP's literal rendering). Voltaire 1778: "that notion of gambling, of losses and winnings, does not suit the gravity of the subject".
- §1 Hacking 1972: "two pieces of paper covered on both sides by handwriting going in all directions, full of erasures, corrections, insertions, and afterthoughts" (via SEP).
- Opening: "used here for almost the first time in history".
- §6 "superduperdominance" (Hájek 2018).

## Others
- James, The Will to Believe, §II. Gutenberg #26659, https://www.gutenberg.org/cache/epub/26659/pg26659.txt (line ~597). "We feel that a faith in masses ... from their infinite reward." Verbatim.
- Bostrom, "Pascal's mugging", Analysis 69(3) 443-445, 2009. https://nickbostrom.com/papers/pascal.pdf (pdftotext). Closing lines "Mugger: I assure you ... Your wallet, please! / Pascal hands over his wallet." Numbers: credence 1 in 10 quadrillion; offer 1,000 quadrillion days; "nearly 100 Utils" surplus. Footnote credits Yudkowsky with the name.
- Yudkowsky, "Pascal's Mugging: Tiny Probabilities of Vast Utilities", LessWrong 19 Oct 2007. https://www.lesswrong.com/posts/a5JAiTdytou3Jg749/ . "Give me five dollars, or I'll use my magic powers from outside the Matrix to run a Turing machine that simulates and kills 3^^^^3 people." and "dominated by whatever tiny differentials existed in the various tiny probabilities" (original has emphasis on "overwhelmingly"; quoted fragment omits that word).
- Thornley, "AI safety can be a Pascal's mugging even if p(doom) is high", LessWrong 25 Apr 2026. https://www.lesswrong.com/posts/Hq6SJnh5maYtDAZ56/ . "So when people say that AI safety is a Pascal's mugging, you can't just reply that p(doom) is high. You have to argue that p(you avert doom) is high." He goes on to argue p(you avert doom) is high enough; page says so.
- The Simpsons, "Homer the Heretic" (1992): "And what if we picked the wrong religion? Every week, we're just making God madder and madder!" Confirmed in the fan-maintained episode capsule https://www.simpsonsarchive.com/episodes/9F01.html (credits George Meyer as writer). Not checked against broadcast; page labels it as from a fan capsule.

## Worked numbers (checked in Python)
p = 1e-6, c = 1000, R = 1e12: q(pR - c) = 999,000 / 166,500 (q=1/6) / 9,990 (q=0.01).
Two gods, pA = 2e-6, pB = 1e-6: E(A) = 999,000, E(B) = -1,001,000.
Bostrom: 1e-16 * 1e18 - 1 = 99.
Bounded utility B = 1e6, c = 1000: need p > 1e-3.

## Dropped or not used
- Hitchens (God Is Not Great ch. 15) and Dawkins (God Delusion) lines: book text not fetched; not used.
- Hossenfelder video: not used.

## Open cautions
- "418 in Lafuma's numbering" is from general knowledge, not from a fetched source (Gutenberg and SEP use Brunschvicg 233). Correct to my knowledge; check a Lafuma concordance.
- Dates 1662 (death) and 1670 (publication): Wikipedia raw text and SEP bibliography respectively.
