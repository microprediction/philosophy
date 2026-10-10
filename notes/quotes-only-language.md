# "It only deals in language" (internal notes)

Collected 2026-10-09 by a research agent. Unless a block is marked NOT VERIFIED or SECONDARY, every
quotation below was found by text search in the source fetched from the URL given (PDFs converted
with pdftotext; web pages stripped of markup) and copied from that text. Typos are the authors'.
Page numbers are printed page numbers. Podcast wording is from transcripts, not from the audio.

The claim on this page: a system that deals only in language cannot think, understand or be
intelligent, because language is too thin a medium. It differs from the two pages already up:
- docs/stochastic-parrot.html is Bender and Koller: form alone cannot yield meaning.
- docs/next-token.html is about the training objective, and already uses LeCun's (1-e)^n slide and
  one Lex #416 line ("if you assume, which is a very strong assumption ... independent").
  Nothing below repeats those.
- notes/quotes-lecun.md is the orangutan/dominance material. No overlap.

## Cautions

- Lex Fridman #258 (Jan 2022) has no official transcript. The wording below is from Karpathy's
  Lexicap, a Whisper machine transcript, read in a Wayback copy. It writes "psych project" for
  Cyc and "GPT 5000". Check the audio near 57:55-58:57 before quoting on the page.
- Lex Fridman #416 (Mar 2024) is the official lexfridman.com transcript. It has transcription
  slips: "10 to 15 bytes" (he means 10 to the 15), "optical nerve carry", "as a pass towards".
- LeCun's optic-nerve figure is not stable. 2023-24: 20 MB/s, 10^15 bytes, "50 times more data".
  2025-26: 2 MB/s, 10^14 bytes, "about the same". Quote the date with the number.
- His 9 March 2024 post says "16 million times" on X and "1.6 million times" on LinkedIn. His own
  figures (20 MB/s over 12 bytes/s) give 1.67 million. The LinkedIn version is the corrected one.
- Fedorenko, Piantadosi and Gibson (2024) draw no conclusion about whether language models can
  think. The paper mentions them twice (below). Riley's conclusion is his, not theirs.
- Mahowald et al. (2024) say in terms that they do not argue functional competence is out of
  reach for language-based models. Do not cite them for the "cannot" claim.
- The GPT-4 answer to LeCun's table question is from an anonymous blog (May 2023). I found no
  paper or first-party demonstration, and no reply from LeCun. Better to re-run the prompt and
  log it, as the parrot page did.
- Helen Keller cuts both ways. She had touch, smell and taste, and LeCun's post concedes vision
  and hearing but not touch. Use her for "language, arriving through one narrow channel, was what
  made thought", not for "no senses needed".
- The web-search budget ran out before Gary Marcus and Bedny's "sparkle" paper were fetched.
  Both are listed under NOT VERIFIED at the end.

## Defendants

### Browning and LeCun, "AI And The Limits Of Language", Noema, 23 August 2022

https://www.noemamag.com/ai-and-the-limits-of-language/
(Jacob Browning and Yann LeCun. Page metadata: datePublished 2022-08-23. No page numbers;
paragraph numbers are mine, counting body paragraphs.)

Pull quote and para 24 (the line Peter remembered, exact):
"A system trained on language alone will never approximate human intelligence, even if trained from now until the heat death of the universe."

Para 24 in full context:
"This doesn’t make these machines stupid, but it also suggests there are intrinsic limits concerning how smart they can be. A system trained on language alone will never approximate human intelligence, even if trained from now until the heat death of the universe. This is just the wrong kind of knowledge for developing awareness or being a person. But they will undoubtedly seem to approximate it if we stick to the surface."

Para 4 (thesis):
"The underlying problem isn’t the AI. The problem is the limited nature of language. Once we abandon old assumptions about the connection between thought and language, it is clear that these systems are doomed to a shallow understanding that will never approximate the full-bodied thinking we see in humans. In short, despite being among the most impressive AI systems on the planet, these AI systems will never be much like us."

Para 7:
"This is because language doesn’t exhaust knowledge; on the contrary, it is only a highly specific, and deeply limited, kind of knowledge representation."
"But there is a massive difference between reading a musical score and listening to a recording of the music, and a further difference from having the skill to play it."

Para 8:
"The representational schema of language struggles with more concrete information, such as describing irregular shapes, the motion of objects, the functioning of a complex mechanism or the nuanced brushwork of a painting — much less the finicky, context-specific movements needed for surfing a wave."

Para 9 (bandwidth; "littleinformation" is run together in the page's HTML):
"One way of grasping what is distinctive about the linguistic representational schema — and how it is limited — is recognizing how littleinformation it passes along on its own. Language is a very low-bandwidth method for transmitting information: isolated words or sentences, shorn of context, convey little."

Para 13 (they grant "understanding", then call it shallow):
"While some balk at using the term “understanding” in this context or calling LLMs “intelligent,” it isn’t clear what semantic gatekeeping is buying anyone these days. But critics are right to accuse these systems of being engaged in a kind of mimicry. This is because LLMs’ understanding of language, while impressive, is shallow."

Para 14: "LLMs have acquired this kind of shallow understanding about everything."

Para 16 (a testable claim, dated 2022):
"The system can explain how to perform long division without being able to perform it or explain what words are offensive and should not be said while then blithely going on to say them."

Para 18 (another dated, testable claim):
"Once we scratch beneath the surface, it is easier to see how limited these systems really are: they have the attention span and memory of roughly a paragraph."

Para 23 (the mirror):
"This explains why a machine trained on language can know so much and yet so little. It is acquiring a small part of human knowledge through a tiny bottleneck. But that small part of human knowledge can be about anything, whether it be love or astrophysics. It is thus a bit akin to a mirror: it gives the illusion of depth and can reflect almost anything, but it is only a centimeter thick. If we try to explore its depths, we bump our heads."

Para 25:
"Language may be a helpful component which extends our understanding of the world, but language doesn’t exhaust intelligence, as is evident from many species, such as corvids, octopi and primates."

Para 26 (close):
"LLMs have no stable body or abiding world to be sentient of—so their knowledge begins and ends with more words and their common-sense is always skin-deep."
"There is no way to approximate this deep understanding solely through language; it’s just the wrong kind of thing. Dealing with LLMs at any length makes apparent just how little can be known from language alone."

Note for the page: the essay's premise is conditional on "trained on language alone". It concedes
(para 15) "This brings with it some genuine understanding" and that the skills "allow the machine
to explain how something complicated works, simplify difficult concepts, rephrase and retell
stories".

### LeCun (2022), "A Path Towards Autonomous Machine Intelligence", version 0.9.2, 27 June 2022

https://openreview.net/pdf?id=BZ5a1r-kVsf (read via a Wayback copy; openreview returned 403 to curl)

Section 8.2.2, p. 45:
"For example, Large language models (LLMs) seem to possess a surprisingly large amount of background knowledge extracted from written text. But much of human common-sense knowledge is not represented in any text and results from our interaction with the physical world. Because LLMs have no direct experience with an underlying reality, the type of common-sense knowledge they exhibit is very shallow and can be disconnected from reality."

Section 8.3.1, "Scaling is not enough", pp. 45-46:
"Large Language Models (LLMs), and more generally, large-scale transformer architectures trained with a form of generative self-supervised learning, have been astonishingly successful at capturing knowledge present in text. This has led to a debate in the AI community as to whether human-level AI can be attained by scaling up these architectures. My position in this debate is that I do not believe that scaling is enough for two main reasons."
(The two reasons given are tokenized generative training being unsuited to video, and "very limited forms of reasoning". Neither is a bandwidth argument. The paper has no bytes-per-second arithmetic.)

### LeCun on Lex Fridman Podcast #258, published 22 January 2022 (the table and GPT-5000)

Episode page: https://lexfridman.com/yann-lecun-2/ (datePublished 2022-01-22; no transcript there)
Transcript read: Karpathy's Lexicap (Whisper, large model),
https://web.archive.org/web/20230929060025/https://karpathy.ai/lexicap/0258-large.html
MACHINE TRANSCRIPT. Timestamps are Lexicap's.

00:57:38 to 00:58:07:
"And I also think that that ability to learn how the world works from a sort of high throughput channel like vision is a necessary step towards sort of real artificial intelligence. In other words, I believe in grounded intelligence. I don't think we can train a machine to be intelligent purely from text. Because I think the amount of information about the world that's contained in text is tiny compared to what we need to know."

00:58:11 to 00:58:57:
"So for example, and people have attempted to do this for 30 years, the psych project and things like that, basically kind of writing down all the facts that are known and hoping that some sort of common sense will emerge. I think it's basically hopeless. But let me take an example. You take an object, I describe a situation to you. I take an object, I put it on the table and I push the table. It's completely obvious to you that the object will be pushed with the table, because it's sitting on it. There's no text in the world, I believe, that explains this. And so if you train a machine as powerful as it could be, your GPT 5000 or whatever it is, it's never gonna learn about this. That information is just not present in any text."

("psych project" is Whisper's hearing of Cyc.)

### LeCun on Lex Fridman Podcast #416, transcript posted 7 March 2024

https://lexfridman.com/yann-lecun-3-transcript/ (official transcript; timestamps as given there)

(00:02:47):
"LLMs can do none of those or they can only do them in a very primitive way and they don’t really understand the physical world. They don’t really have persistent memory. They can’t really reason and they certainly can’t plan."
"That is not to say that autoregressive LLMs are not useful. They’re certainly useful, that they’re not interesting, that we can’t build a whole ecosystem of applications around them. Of course we can, but as a pass towards human-level intelligence, they’re missing essential components." [sic, "pass"]

(00:04:08) to (00:05:12), the arithmetic:
"Those LLMs are trained on enormous amounts of texts, basically, the entirety of all publicly available texts on the internet, right? That’s typically on the order of 10 to the 13 tokens. Each token is typically two bytes, so that’s two 10 to the 13 bytes as training data. It would take you or me 170,000 years to just read through this at eight hours a day. So it seems like an enormous amount of knowledge that those systems can accumulate, but then you realize it’s really not that much data. If you talk to developmental psychologists and they tell you a four-year-old has been awake for 16,000 hours in his or her life, and the amount of information that has reached the visual cortex of that child in four years is about 10 to 15 bytes."
"And you can compute this by estimating that the optical nerve carry about 20 megabytes per second roughly, and so 10 to the 15 bytes for a four-year-old versus two times 10 to the 13 bytes for 170,000 years worth of reading. What that tells you is that through sensory input, we see a lot more information than we do through language, and that despite our intuition, most of what we learn and most of our knowledge is through our observation and interaction with the real world, not through language. Everything that we learn in the first few years of life, and certainly everything that animals learn has nothing to do with language."

(00:05:57) Fridman puts the rebuttal to him:
"Somebody might argue your comparison between sensory data versus language, that language is already very compressed. It already contains a lot more information than the bytes it takes to store them if you compare it to visual data."

(00:06:56) LeCun's answer:
"So it’s a big debate among philosophers and also cognitive scientists, like whether intelligence needs to be grounded in reality. I’m clearly in the camp that yes, intelligence cannot appear without some grounding in some reality. It doesn’t need to be physical reality. It could be simulated, but the environment is just much richer than what you can express in language. Language is a very approximate representation or percepts and/or mental models." [sic]

(00:17:58):
"So can you build this first of all by prediction, and the answer is probably yes. Can you build it by predicting words? And the answer is most probably no, because language is very poor in terms of weak or low bandwidth if you want, there’s just not enough information there."

(00:32:57), his concession on compression:
"Language might represent more information really, because it’s already compressed. You’re right about that, but that means it’s also less redundant, and so self-supervision, you will not work as well." [sic]

(00:10:00) Fridman: "Can a large language model construct a world model that does know how to drive and does know how to fill a dishwasher, but just doesn’t know how to deal with visual data at this time, so it can operate in a space of concepts?"
(00:10:17) LeCun: "So yeah, that’s what a lot of people are working on. So the short answer is no"

### LeCun's posts, in date order (the numbers)

LinkedIn, 6 March 2021.
https://www.linkedin.com/posts/yann-lecun_language-is-an-imperfect-incomplete-and-activity-6774067803830984704-LBeH
Whole post:
"Language is an imperfect, incomplete, and low-bandwidth serialization protocol for the internal data structures we call thoughts."

LinkedIn, 23 November 2023.
https://www.linkedin.com/posts/yann-lecun_animals-and-humans-get-very-smart-very-quickly-activity-7133567569684238336-szrF
"Current LLMs are trained on text data that would take 20,000 years for a human to read."
"The salvation is in using sensory data, e.g. video, which has higher bandwidth and more internal structure."
"The total amount of visual data seen by a 2 year-old is larger than the amount of data used to train LLMs, but still pretty reasonable.
2 years = 2x365x12x3600 or roughly 32 million seconds.
We have 2 million optical nerve fibers, carrying roughly ten bytes per second each.
That's a total of 6E14 bytes. The volume of data for LLM training is typically 1E13 tokens, which is about 2E13 bytes.
It's a factor of 30."

LinkedIn, 26 January 2024.
https://www.linkedin.com/posts/yann-lecun_ive-made-that-point-before-llm-1e13-activity-7156484065603280896-QH63
"I've made that point before:
- LLM: 1E13 tokens x 0.75 word/token x 2 bytes/token = 1E13 bytes.
- 4 year old child: 16k wake hours x 3600 s/hour x 1E6 optical nerve fibers x 2 eyes x 10 bytes/s = 1E15 bytes.

In 4 years, a child has seen 50 times more data than the biggest LLMs.

1E13 tokens is pretty much all the quality text publicly available on the Internet. It would take 170k years for a human to read  (8 h/day, 250 word/minute).

Text is simply too low bandwidth and too scarce a modality to learn how the world works.

Video is more redundant, but redundancy is precisely what you need for Self-Supervised Learning to work well.

Incidentally, 16k hours of video is about 30 minutes of YouTube uploads."
(Arithmetic slips in the original: the first line's product is 1.5E13 by its own factors, and
1E15 over 1E13 would be 100, not 50. The other posts use 2E13 bytes, which gives 50.)

LinkedIn, 9 March 2024 (the fullest statement).
https://www.linkedin.com/posts/yann-lecun_parm-prmshra-on-x-activity-7172266619103080448-iqvP
"* Language is low bandwidth: less than 12 bytes/second. A person can read 270 words/minutes, or 4.5 words/second, which is 12 bytes/s (assuming 2 bytes per token and 0.75 words per token). A modern LLM is typically trained with 1x10^13 two-byte tokens, which is 2x10^13 bytes. This would take about 100,000 years for a person to read (at 12 hours a day).

* Vision is much higher bandwidth: about 20MB/s. Each of the two optical nerves has 1 million nerve fibers, each carrying about 10 bytes per second. A 4 year-old child has been awake a total 16,000 hours, which translates into 1x10^15 bytes.

In other words:
- The data bandwidth of visual perception is roughly 1.6 million times higher than the data bandwidth of written (or spoken) language.
- In a mere 4 years, a child has seen 50 times more data than the biggest LLMs trained on all the text publicly available on the internet.

This tells us three things:
1. Yes, text is redundant, and visual signals in the optical nerves are even more redundant (despite being 100x compressed versions of the photoreceptor outputs in the retina). But redundancy in data is *precisely* what we need for Self-Supervised Learning to capture the structure of the data. The more redundancy, the better for SSL.
2. Most of human knowledge (and almost all of animal knowledge) comes from our sensory experience of the physical world. Language is the icing on the cake. We need the cake to support the icing.
3. There is *absolutely no way in hell* we will ever reach human-level AI without getting machines to learn from high-bandwidth sensory inputs, such as vision.

Yes, humans can get smart without vision, even pretty smart without vision and audition. But not without touch. Touch is pretty high bandwidth, too."

Same post on X, 9 March 2024, https://x.com/ylecun/status/1766498677751787723 (read through the
api.fxtwitter.com mirror, not x.com itself). Identical except one line:
"- The data bandwidth of visual perception is roughly 16 million times higher than the data bandwidth of written (or spoken) language."

X, 3 October 2026, reply. https://x.com/ylecun/status/2106468673737093232 (read through the
api.fxtwitter.com mirror):
"1. 10^14 bytes in 16,000 hours is at 2 MB/second. It's already compressed, same as your typical Netflix movie.
2. A child gets these 10^14 bytes in 4 years. It would take you at least 400,000 years to read through 10^14 bytes of text."

SECONDARY, talk not located. OfficeChai, "Yann LeCun Explains Why Text Data Alone Will Never Create Human-Level AI", 13 March 2025.
https://officechai.com/ai/yann-lecun-explains-why-text-data-alone-will-never-create-human-level-ai/
The article quotes a talk it does not name. As printed there:
"A typical large language model is trained with something on the order of 20 trillion tokens— 20 thousand billion tokens. The token is like a word, more or less. The token typically is represented in three bytes. So 20 or 30 trillion tokens, each in three bytes—that’s about 10 to the 14 bytes"
"The amount of information getting to the brain through the optic nerve is about 2 megabytes per second. Do the calculation and that’s about 10 to the 14 bytes. It’s about the same. In four years a young child has seen as much information or data as the biggest LLMs."
"we’re never going to get to human-level AI by just training on text."
The 2026 X post above confirms the 2 MB/s and 10^14 figures in his own hand.

### LeCun, "off-ramp ... dead end", London, April 2024

SECONDARY (journalist's report of a live event; no recording or transcript found).
Thomas Macaulay, "Meta’s AI chief: LLMs will never reach human-level intelligence", The Next Web, 10 April 2024.
https://thenextweb.com/news/meta-yann-lecun-ai-behind-human-intelligence
Event: "an event on Tuesday in London" (Tuesday 9 April 2024). Quotes as TNW prints them:
"We’re easily fooled into thinking they are intelligent because of their fluency with language, but really, their understanding of reality is very superficial"
"They’re useful, there’s no question about that. But on the path towards human-level intelligence, an LLM is basically an off-ramp, a distraction, a dead end."
"Most of human knowledge is actually not language so those systems can never reach human-level intelligence — unless you change the architecture"
TNW's paraphrase: "In LeCun’s view, they’re severely restricted by their reliance on one form of human knowledge: text."
(The article byline was not captured in my text extraction; confirm the author's name on the page.)

SECONDARY. The Decoder, 23 May 2024, quoting a LeCun post and the Financial Times:
https://the-decoder.com/metas-lecun-says-students-interested-in-next-gen-ai-shouldnt-bother-with-llms/
"If you are a student interested in building the next generation of AI systems, don't work on LLMs"
The original X post was not fetched.

### Fedorenko, Piantadosi and Gibson (2024), "Language is primarily a tool for communication rather than thought", Nature 630, 575-586 (Perspective), published online 19 June 2024

https://www.nature.com/articles/s41586-024-07522-w (abstract only without a subscription)
Full text read in the copy at https://gwern.net/doc/psychology/linguistics/2024-fedorenko.pdf
doi 10.1038/s41586-024-07522-w

Abstract, p. 575:
"Here we bring recent evidence from neuroscience and allied disciplines to argue that in modern humans, language is a tool for communication, contrary to a prominent view that we use language for thinking."
"We conclude that although the emergence of language has unquestionably transformed human culture, language does not appear to be a prerequisite for complex thought, including symbolic thought. Instead, language is a powerful tool for the transmission of cultural knowledge; it plausibly co-evolved with our thinking and reasoning capacities, and only reflects, rather than gives rise to, the signature sophistication of human cognition."

Aphasia, p. 578:
"The evidence is unequivocal—there are many cases of individuals with severe linguistic impairments, affecting both lexical and syntactic abilities, who nevertheless exhibit intact abilities to engage in many forms of thought—they can solve mathematical problems51,52, perform executive planning and follow non-verbal instructions53, engage in diverse forms of reasoning, including formal logical reasoning, causal reasoning about the world and scientific reasoning54–58, to understand what another person believes or thinks and perform pragmatic inference53,56,59–62, to navigate in the world63, and to make semantic judgements about objects and events64–70 (Fig. 1b)."
(superscript reference numbers are run into the text by pdftotext; strip them when quoting)

p. 578-579:
"Despite losing their linguistic ability, some individuals with severe aphasia are able to perform all tested forms of thinking and reasoning, as evidenced by their intact performance on diverse cognitive tasks. They simply cannot map those thoughts onto linguistic expressions"

fMRI, p. 579:
"Responses in this network to diverse non-linguistic inputs and tasks have been examined, and the evidence demonstrates that all regions of the language network are largely ‘silent’ during all tested forms of thought, including mathematical reasoning77–79, formal logical reasoning80,81, performing demanding executive function tasks such as working memory or cognitive control tasks 77, understanding computer code82,83, thinking about others’ mental states84–86, and making semantic judgments about objects or events69,70,87."
Their own hedge, same page:
"It remains possible that future work will uncover some thinking tasks that will engage language areas and that will prove challenging for patients with aphasia, but no such tasks have been found so far."

The other half of the dissociation, p. 580:
"In other words, having an intact language system does not bring with it ‘for free’ an ability to think: thinking capacities can be impaired in the presence of intact language (see ref. 120 for related arguments from large language models)."
(ref. 120 is Mahowald et al. 2024.)

Conclusions, p. 582:
"Evidence from aphasia research suggests that all tested forms of thought are possible in the absence of language, and fMRI evidence suggests that engaging in diverse forms of thinking and reasoning does not recruit the language network"
"Together, this evidence suggests that language is unlikely to be a critical substrate for any form of thought."
"Language is uncontroversially a tremendously useful tool for knowledge transmission."

WHAT THE AUTHORS SAY ABOUT LANGUAGE MODELS. A search of the full text for "language model",
"LLM", "artificial" and "machine" finds two passages outside the reference list:
1. the parenthesis on p. 580 quoted above;
2. Box 3, "Open questions", p. 579:
"Recent advances in artificial intelligence—the development of neural network models that excel at language201—have provided language researchers with a suite of powerful tools to probe the neural codes of linguistic processing48,202–205 (reviewed in ref. 206)."
Neither says a language model cannot think. The paper's claim is about the human brain: the
language network is not where human thinking happens. It is silent on what a network trained on
text computes internally. (Piantadosi is also co-author of "Meaning without reference in large
language models", already in notes/quotes-stochastic-parrot.md.)

### Mahowald, Ivanova, Blank, Kanwisher, Tenenbaum and Fedorenko (2024), "Dissociating language and thought in large language models", Trends in Cognitive Sciences 28(6), 517-540

https://arxiv.org/abs/2301.06627 (read: arXiv v3, 23 March 2024, preprint dated April 14, 2024;
section names below, no journal page numbers)

Abstract:
"Here, we evaluate LLMs using a distinction between formal linguistic competence—knowledge of linguistic rules and patterns—and functional linguistic competence—understanding and using language in the world. We ground this distinction in human neuroscience, which has shown that formal and functional competence rely on different neural mechanisms. Although LLMs are surprisingly good at formal competence, their performance on functional competence tasks remains spotty and often requires specialized fine-tuning and/or coupling with external modules."

"The language-thought conflation":
"One fallacy is that an entity (be it a human or a machine) that is good at language must also be good at thinking. If an entity generates long coherent stretches of text, it must possess rich knowledge and reasoning capacities. Let’s call this the “good at language -> good at thought” fallacy."
"Therefore, we posit that the next-word prediction objective allows a model to master formal but not necessarily functional linguistic competence."
"As a result, language models acquire a variety of non-linguistic capacities. But the ultimate ceiling for functional competence depends on important open questions about the information contained in the linguistic signal and the mechanisms used to leverage that information, as we discuss."

Section "Language input can bootstrap functional competence capabilities" (the carve-out):
"Coupled with the fact that language inputs contain vast quantities of information about the world, and that language is both a crucial data source and representational substrate for much of people’s world knowledge, this evidence suggests that, in principle, a model trained exclusively on language input could acquire much of functional linguistic competence."
"Thus, we do not argue that functional linguistic competence is out of reach for language-based models; our main goals are (1) to highlight the conceptual distinction between formal and functional linguistic competence—which in the human brain draw on separate neural circuits, and (2) to demonstrate the gulf between LLMs’ formal and functional linguistic abilities."

Closing section:
"The failures of LLMs on non-linguistic tasks do not undermine their utility as models of language processing. After all, the brain areas that support language processing in humans also cannot do math, solve logical problems, or even track the meaning of a story across sentences or paragraphs."
"To those who criticize LLMs for their inability to do complex arithmetic or to reason about the world, we say, give language models a break"
"more promising solutions will come in the form of modular architectures—built-in or emergent—that, like the human brain, integrate language processing with additional systems that carry out perception, reasoning, and action."

Outstanding Questions box:
"How much functional competence can be acquired from the linguistic signal? Humans use language as a substrate for knowledge, and so LLMs acquire non-linguistic information from the linguistic signal. How much information in this signal can be used to bootstrap functional competence? Are there aspects of functional competence that cannot be learned from language at all?"

### Benjamin Riley, "Large language mistake", The Verge, 25 November 2025

https://www.theverge.com/ai-artificial-intelligence/827820/large-language-models-ai-intelligence-neuroscience-problems
(Page metadata: author Benjamin Riley, datePublished 2025-11-25T12:00:00. Footer: "Benjamin Riley is the founder of Cognitive Resonance ... Portions of this essay initially appeared on the Cognitive Resonance Substack.")

"For all the alleged complexity of generative AI, at their core they really are models of language."

"The problem is that according to current neuroscience, human thinking is largely independent of human language — and we have little reason to believe ever more sophisticated modeling of language will create a form of intelligence that meets or surpasses our own."

"We use language to think, but that does not make language the same as thought."

The strongest sentence:
"But this theory is seriously scientifically flawed. LLMs are simply tools that emulate the communicative function of language, not the separate and distinct cognitive process of thinking and reasoning, no matter how many data centers we build."

On Fedorenko:
"Last year, three scientists published a commentary in the journal Nature titled, with admirable clarity, “Language is primarily a tool for communication rather than thought.”"
"I repeat: Taking away language does not take away our ability to think."

He anticipates the reply and answers it with the bicycle:
"An AI enthusiast might argue that human-level intelligence doesn’t need to necessarily function in the same way as human cognition."
"Maybe! But there’s no obvious reason to think we can get to general intelligence — not improving narrowly defined tasks —through text-based training. After all, humans possess all sorts of knowledge that is not easily encapsulated in linguistic data — and if you doubt this, think about how you know how to ride a bike."

Close:
"It will be forever trapped in the vocabulary we’ve encoded in our data and trained it upon — a dead-metaphor machine."

The inference to flag: from "in humans, the language network is not where thinking happens" to
"a network trained on language can only emulate the communicative function". The first is about
which human tissue does what. The second is about what a different system computes. Fedorenko
et al. do not make that step, and Mahowald et al. (with Fedorenko as last author) decline it.

### Fei-Fei Li, "From Words to Worlds: Spatial Intelligence is AI’s Next Frontier", Substack, 10 November 2025

https://drfeifei.substack.com/p/from-words-to-worlds-spatial-intelligence

"Today, leading AI technology such as large language models (LLMs) have begun to transform how we access and work with abstract knowledge. Yet they remain wordsmiths in the dark; eloquent but inexperienced, knowledgeable but ungrounded."

"Yet the candid truth is that AI’s spatial capabilities remain far from human level. And the limits reveal themselves quickly. State-of-the-art MLLM models rarely perform better than chance on estimating distance, orientation, and size—or “mentally” rotating objects by regenerating them from new angles. They can’t navigate mazes, recognize shortcuts, or predict basic physics."

"Building spatially intelligent AI requires something even more ambitious than LLMs: world models"

Note: Li's is the mild form. She says current systems lack spatial ability, concedes multimodal
models "have introduced some basics of spatial awareness", and does not say language-trained
systems cannot think. She is also founding a world-model company (World Labs), as LeCun is.

### Mitchell and Krakauer (2023), "The debate over understanding in AI's large language models", PNAS 120(13) e2215907120

https://arxiv.org/abs/2210.13966 (arXiv text read; already cited on next-token.html)
Useful as a neutral statement of the defendants' position, and for the survey:
"Those on the other side of this debate argue that large pretrained models such as GPT-3 or LaMDA—however fluent their linguistic output—cannot possess understanding because they have no experience or mental models of the world; their training in predicting words in vast collections of text has taught them the form of language but not the meaning"
"One survey item asked if the respondent agreed with the following statement about whether LLMs could ever, in principle, understand language: “Some generative model [i.e., language model] trained only on text, given enough data and computational resources, could understand natural language in some non-trivial sense.” Of 480 people responding, essentially half (51%) agreed, and the other half (49%) disagreed"
(The survey is Michael et al. 2022, "What do NLP researchers believe?"; not fetched.)

## Evidence

### a. Text-only models encode perceptual structure

Abdou, Kulmizev, Hershcovich, Frank, Pavlick and Søgaard (2021), "Can Language Models Encode Perceptual Structure Without Grounding? A Case Study in Color", CoNLL 2021, pp. 109-132.
https://aclanthology.org/2021.conll-1.9.pdf
Abstract, p. 109:
"Namely, we employ a dataset of monolexemic color terms and color chips represented in CIELAB, a color space with a perceptually meaningful distance metric. Using two methods of evaluating the structural alignment of colors in this space with text-derived color term representations, we find significant correspondence."
"we find that warmer colors are, on average, better aligned to the perceptual color space than cooler ones"
p. 110:
"We also show that part of this distributional signal is learnable by simple models — e.g. models based on pointwise mutual information (PMI) statistics — although large-scale language model pretraining (e.g., BERT) encodes the topology markedly better."
(No single headline correlation was extracted; the results are per-model tables. Use the abstract.)

Patel and Pavlick (2022), "Mapping Language Models to Grounded Conceptual Spaces", ICLR 2022.
https://openreview.net/forum?id=gJcEM8sxHK (PDF read via a Wayback copy)
Abstract, p. 1:
"We investigate a range of generative language models of varying sizes (including GPT-2 and GPT-3), and see that although the smaller models struggle to perform this mapping, the largest model can not only learn to ground the concepts that it is explicitly taught, but appears to generalise to several instances of unseen concepts as well. Our results suggest an alternative means of building grounded language models: rather than learning grounded representations “from scratch”, it is possible that large text-only models learn a sufficiently rich conceptual structure that could allow them to be grounded in a data-efficient way."
Introduction, p. 1:
"In principle, it is therefore possible for a text-only model’s conceptual space to be isomorphic to the “true” (i.e., grounded) conceptual space (Merrill et al., 2021)."
Their concession, p. 1: "While it is indisputable that text-only models do not learn representations of concepts that are grounded in the non-text world"

Merullo, Castricato, Eickhoff and Pavlick (2023), "Linearly Mapping from Image to Text Space", ICLR 2023.
https://arxiv.org/abs/2209.15162 (v3)
Abstract, p. 1:
"We test a stronger hypothesis: that the conceptual representations learned by frozen text-only models and vision-only models are similar enough that this can be achieved with a linear map. We show that the image representations from vision models can be transferred as continuous prompts to frozen LMs by training only a single linear projection."
"Our results indicate that LMs encode conceptual information structurally similarly to vision-based models, even those that are solely trained on images."
(BEIT is the encoder trained with "no linguistic information".)

Huh, Cheung, Wang and Isola (2024), "The Platonic Representation Hypothesis", ICML 2024, PMLR 235.
https://arxiv.org/abs/2405.07987 (v5, 25 July 2024)
Abstract, p. 1:
"Next, we demonstrate convergence across data modalities: as vision models and language models get larger, they measure distance between datapoints in a more and more alike way. We hypothesize that this convergence is driving toward a shared statistical model of reality, akin to Plato’s concept of an ideal reality."
Hypothesis box, p. 1:
"Neural networks, trained with different objectives on different data and modalities, are converging to a shared statistical model of reality in their representation spaces."
Section 2 (cross-modal result):
"Using this analysis, we find that the better an LLM is at language modeling, the more it tends to aligns with vision models, as shown in Figure 3. The converse effect also holds: the better a vision models is, the more it tends to align with LLMs." [sic]
Figure 3 caption: "The results show a linear relationship between language-vision alignment and language modeling score, where a general trend is that more capable language models align better with more capable vision models."
Section 6, in the defendants' favour, p. 10:
"For example, in Figure 3, alignment clearly increases but only reaches a score of 0.16, according to our mutual nearest-neighbor metric. The maximum theoretical value for this metric is 1. Is a score of 0.16 indicative of strong alignment with the remaining gap being “noise” or does it signify poor alignment with major differences left to explain? We leave this as an open question."
"Two different models cannot converge to the same representation if they have access to fundamentally different information."
"the lower-information representation will only align with the higher-information one up to a level capped by the mutual information between the input signals and by the capacity of each model. This cap might or might not be practically important."
And their practical advice, Section 5: "if you want to build the best LLM, you should also train on image data."

Marjieh, Sucholutsky, van Rijn, Jacoby and Griffiths (2024), "Large language models predict human sensory judgments across six modalities", Scientific Reports 14, 21445, 13 September 2024.
https://www.nature.com/articles/s41598-024-72071-1
(Author list is from the citation, not re-checked name by name on the page.)
Abstract:
"We show that state-of-the-art large language models can unlock new insights into this problem by providing a lower bound on the amount of perceptual information that can be extracted from language. Specifically, we elicit pairwise similarity judgments from GPT models across six psychophysical datasets. We show that the judgments are significantly correlated with human data across all domains, recovering well-known representations like the color wheel and pitch spiral. Surprisingly, we find that a model (GPT-4) co-trained on vision and language does not necessarily lead to improvements specific to the visual modality, and provides highly correlated predictions with human data irrespective of whether direct visual input is provided or purely textual descriptors."
Results (the page renders "r=.92" in LaTeX; numbers copied from the text):
pitch r = .92 (GPT-4), loudness r = .89 (GPT-3.5), colors r = .84 (GPT-4), consonants r = .57 (GPT-4), taste r = .54 (GPT-3.5), timbre r = .42 (GPT-3.5).
"The IRRs for pitch and consonants were r=.95 (95% CI [.94, .96]) and r=.63 (95% CI [.53, .73]), respectively, suggesting that the performance of GPT-4 is on par with human performance"
"suggesting that this improvement is driven by richer textual training in GPT-4 rather than the possibility of its inclusion of images in its training set."
Colour with images versus text: "r=.77 for direct images" (the sentence continues with the text-only conditions at .79 and below; the rest was cut off in my extract, re-read before quoting the second number).
Discussion:
"In particular, our findings further support recent research suggesting that people that lack direct sensory experiences (e.g., congenitally blind individuals) could still possess a rich understanding of perceptual concepts through language"
Their caveat (Introduction): "It is a lower bound in the sense that human linguistic experience cannot be simply reduced into written text ... More broadly, humans have direct access to the sensory world and can actively interact with the environment and one another. This kind of experience is absent from LLMs."
(the ellipsis is mine)

Already in notes/quotes-stochastic-parrot.md and usable here without re-fetching: Li et al. 2023
(Othello), Gurnee and Tegmark 2024 ("LLMs learn linear representations of space and time"),
Li, Nye and Andreas 2021 ("this behavior can be learned with only text as training data").

### b. Humans who got the world through language

Helen Keller, The Story of My Life (1903). Project Gutenberg #2397.
https://www.gutenberg.org/ebooks/2397
Chapter IV (the well-house, 1887; she was six):
"As the cool stream gushed over one hand she spelled into the other the word water, first slowly, then rapidly. I stood still, my whole attention fixed upon the motions of her fingers. Suddenly I felt a misty consciousness as of something forgotten--a thrill of returning thought; and somehow the mystery of language was revealed to me. I knew then that "w-a-t-e-r" meant the wonderful cool something that was flowing over my hand. That living word awakened my soul, gave it light, hope, joy, set it free!"
"I left the well-house eager to learn. Everything had a name, and each name gave birth to a new thought."
Chapter VI:
"Miss Sullivan touched my forehead and spelled with decided emphasis, "Think."
In a flash I knew that the word was the name of the process that was going on in my head. This was my first conscious perception of an abstract idea."
(Note the well-house scene is itself grounding: the word arrives with the water on her hand.)

Helen Keller, The World I Live In (1908). Project Gutenberg #27683.
https://www.gutenberg.org/ebooks/27683
Chapter XI, "Before the Soul Dawn":
"BEFORE my teacher came to me, I did not know that I am. I lived in a world that was a no-world. I cannot hope to describe adequately that unconscious, yet conscious time of nothingness."
"When I learned the meaning of "I" and "me" and found that I was something, I began to think. Then consciousness first existed for me. Thus it was not the sense of touch that brought me knowledge. It was the awakening of my soul that first rendered my senses their value, their cognizance of objects, names, qualities, and properties."
Chapter X, "Analogies in Sense Perception" (colour without sight):
"I understand how scarlet can differ from crimson because I know that the smell of an orange is not the smell of a grape-fruit. I can also conceive that colours have shades, and guess what shades are."
"I make use of analogies like these to enlarge my conceptions of colours."
Chapter VIII, "The Five-Sensed World":
"The bulk of the world's knowledge is an imaginary construction. History is but a mode of imagining, of making us see civilizations that no longer appear upon the earth."
Against over-reading her, Chapter I, "The Seeing Hand":
"My world is built of touch-sensations, devoid of physical colour and sound; but without colour and sound it breathes and throbs with life."
"My hand is to me what your hearing and sight together are to you."
Bandwidth point for the page: everything Keller learned from other people after 1887 came
through finger-spelling into one palm and later Braille, a channel far slower than LeCun's
12 bytes per second for reading. (That comparison is mine; no rate for finger-spelling was sourced.)

Kim, Elli and Bedny (2019), PNAS 116(23), 11213-11222. Already in notes/quotes-stochastic-parrot.md
and on the parrot page (animal appearance; blind adults infer rather than memorise). Cross-reference only.

Kim, Aheimer, Montané Manrara and Bedny (2021), "Shared understanding of color among sighted and blind adults", PNAS 118(33) e2020192118.
https://pmc.ncbi.nlm.nih.gov/articles/PMC8379969/
(Authors' names are from memory of the citation; the title, journal, volume and doi were read on the PMC page. Check the author list before printing.)
Significance statement:
"A wedge into this puzzle was suggested by empiricist philosophers, who hypothesized that people born blind would lack deep knowledge of “visual” phenomena such as color. We find that, contrary to this prediction, congenitally blind and sighted individuals share in-depth understanding of object color."
"Living among people who talk about color is sufficient for color understanding, highlighting the efficiency of linguistic communication as a source of knowledge."
Abstract:
"Contrary to this intuition, we find that blind and sighted adults share causal understanding of color, despite not always agreeing about arbitrary color facts. Relative to sighted people, blind individuals are less likely to generate “yellow” for banana and “red” for stop sign but make similar generative inferences about real and novel objects’ colors, and provide similar causal explanations."
"People develop intuitive and inferentially rich “theories” of color regardless of visual experience. Linguistic communication is more effective at aligning intuitive theories than knowledge of arbitrary facts."
(In the defendants' favour: the blind were worse on the arbitrary facts.)

### c. The bandwidth argument checked

LeCun's arithmetic, from the posts above:
- Text: 1e13 tokens at 2 bytes = 2e13 bytes. Reading at 250 words/min, 8 h/day: 170,000 years.
  Check: 1e13 tokens x 0.75 = 7.5e12 words; 250 x 480 x 365 = 4.38e7 words a year; 171,000 years. Consistent.
- Vision: 2e6 optic nerve fibres x 10 bytes/s = 20 MB/s; 16,000 h x 3600 s = 5.76e7 s; product 1.15e15 bytes. Consistent.
- Ratio 1e15 / 2e13 = 50. Rate ratio 2e7 / 12 = 1.67 million.
- Later version (2025-26): 2 MB/s, 1e14 bytes, against 1e14 bytes of text. Ratio 1.
So on his own later numbers a four-year-old and a large model have seen the same number of bytes,
and the argument rests on the kind of data, not the amount.

Zheng and Meister (2025), "The unbearable slowness of being: Why do we live at 10 bits/s?", Neuron 113(2), 192-204 (online 17 December 2024). doi 10.1016/j.neuron.2024.11.008
Author manuscript: https://pmc.ncbi.nlm.nih.gov/articles/PMC11758279/ ; arXiv 2408.10234
Abstract (superscript lost in extraction; "109" is 10^9):
"This article is about the neural conundrum behind the slowness of human behavior. The information throughput of a human being is about 10 bits/s. In comparison, our sensory systems gather data at ∼ 10^9 bits/s. The stark contrast between these numbers remains unexplained and touches on fundamental aspects of brain function"
Body:
"Humans operate at an information throughput rate of about 10 bits/s, and the rates of sensory perception and motor output appear evenly matched."
Table 1, "The information rate of human behaviors" (bits/s): Reading (English) 28 – 45; Listening comprehension (English) ∼13; Speech in 17 languages 39; Typing (English) 10; Object recognition 30 – 50; StarCraft (e-athlete) 10.
On the eye:
"one human cone photoreceptor can transmit information at ≈ 270 bits/s. The population of 6 million cones in one eye has a capacity of about 1.6 gigabits/s. From that enormous bitstream, the brain of the typist sifts out just the 10 bits/s needed to perform the behavioral task correctly."
"the output of the eye consists of 1 million axons from retinal ganglion cells22. With particularly strong stimuli one can drive them at an average rate of 50 Hz. So the capacity of the optic nerve is about 100 megabits/s or less."
"even if we stay awake during the show, our brain will never extract more than 10 bits/s of that giant bitstream."
Section 6.4, on prostheses for the blind (language as the efficient channel):
"At the same time, we know that humans never extract more than about 10 bits/s from the visual scene. So one could instead convey to the user only the important results of visual processing, such as the identity and location of objects and people in the scene. This can be done comfortably using natural language"

How the numbers line up:
- Zheng and Meister's optic nerve capacity, 100 megabits/s per eye "or less", is 12.5 MB/s. LeCun's
  20 MB/s for two eyes is the same order. His raw figure is fair as a capacity. His later 2 MB/s is lower.
- What a person takes from that stream is about 10 bits/s. Reading delivers 28 to 45 bits/s by the
  same paper's table. On throughput, text is not the thin channel; it is at or above the rate at
  which humans take anything in.
- LeCun's 12 bytes/s for reading is 96 bits/s of raw characters; the 28 to 45 figure is information
  after allowing for the redundancy of English. Do not mix the two on the page.
- Zheng and Meister do not discuss language models or LeCun. The application is ours.
- LeCun's own reply to "text is compressed" is the redundancy point (Lex #416, 00:32:57, above):
  compressed data is worse for self-supervised learning. That is a claim about a learning method,
  not about what the medium can carry.

### d. LeCun's prediction and the test

The prediction: Lex #258, 22 January 2022, quoted above ("your GPT 5000 or whatever it is, it's never gonna learn about this").

A demonstration, third-party. "The Ignorance of Professors", As An AI... (asanai.net), posted 19 May 2023 by "TheWarOnEntropy" (pseudonymous blog).
https://www.asanai.net/2023/05/19/the-ignorance-of-professors/ (read via a Wayback copy)
Prompt as printed: "I put an object on the table and I push the table. What happens to the object?"
Reply as printed, labelled GPT4:
"When you push the table, the object on the table will also move with the table, assuming the friction between the object and the table is high enough. This is due to Newton’s First Law of Motion, also known as the Law of Inertia."
"However, if the push is sudden or strong enough, the friction might not be sufficient to keep the object stationary relative to the table, and the object might slide or even topple over, depending on the object’s stability and the strength of the push."
Status: a blog post with no model version, date of run or log. GPT-4 in May 2023 had been trained
with images, so strictly it is not a text-only model, though the question and answer are text.
The same post transcribes the Lex #258 passage by ear ("Relevant part is around 57:40") and agrees
with Lexicap on the key sentences, with "GPT-5000" hyphenated and "This information is just not in any text."
NONE FOUND: a paper, a first-party demonstration, a GPT-3.5 run with a log, or any response from
LeCun on this example. Suggest running the prompt on a base model and logging it, as on the parrot page.

Other dated, checkable claims by the defendants, with no test located by me:
- Browning and LeCun, Aug 2022: "they have the attention span and memory of roughly a paragraph".
- Browning and LeCun, Aug 2022: "The system can explain how to perform long division without being able to perform it".
- LeCun, Nov 2023: "they haven't learned that if A is the same as B, then B is the same as A" (the reversal-curse result; a real finding, Berglund et al. 2023, not fetched).

### e. Frontier "LLMs" are multimodal

Covered on docs/stochastic-parrot.html (GPT-4 Technical Report: "a large-scale, multimodal model
which can accept image and text inputs and produce text outputs"). Relevant here because the
defendants' premise is "trained on language alone". Browning and LeCun's sentence is conditional
on that premise and is untouched by a model trained on images too; Riley's is not conditional
("at their core they really are models of language"). Li (2025) and Huh et al. (2024) both note
that current systems train on images. Marjieh et al. found GPT-4's gains were not specific to colour.

## In the defendants' favour

- The Fedorenko dissociation is real and well supported: aphasia with preserved reasoning, and a
  language network "largely ‘silent’" during mathematics, logic, code and theory of mind (quotes above).
  What does not follow is any claim about artificial systems.
- Mahowald et al. document a real gap in 2023-24 models between formal and functional competence,
  and report that scale alone had not closed it.
- Spatial and perceptual benchmarks, multimodal models:
  Yang, Yang, Gupta, Han, Fei-Fei and Xie (2024), "Thinking in Space: How Multimodal Large Language Models See, Remember, and Recall Spaces" (VSI-Bench). https://arxiv.org/abs/2412.14171
  (Author list from memory of the citation; check.) Abstract: "We present a novel video-based visual-spatial intelligence benchmark (VSI-Bench) of over 5,000 question-answer pairs, and find that MLLMs exhibit competitive - though subhuman - visual-spatial intelligence."
  Section 4.2: "human evaluators achieve 79% average accuracy on our benchmark, outperforming the best model by 33%."
  "However, the majority of open-source models (7/12) perform below the chance level baseline, indicating significant limitations in their visual-spatial intelligence."
  Also from the abstract, against the defendants: "local world models and spatial awareness do emerge within these models."
  Fu et al. (2024), "BLINK: Multimodal Large Language Models Can See but Not Perceive", ECCV 2024. https://arxiv.org/abs/2404.12390
  (Abstract page only; subtitle and first author from memory.) "While humans get 95.70% accuracy on average, Blink is surprisingly challenging for existing multimodal LLMs: even the best-performing GPT-4V and Gemini achieve accuracies of 51.26% and 45.72%, only 13.17% and 7.63% higher than random guessing"
  Both are 2024 results on 2024 models and both test vision, not text-only reasoning. No later scores were checked.
- Platonic Representation Hypothesis: vision-language alignment "only reaches a score of 0.16" of a possible 1, and the authors grant that a lower-information modality is capped.
- Kim et al. (2021): blind adults were less likely to know arbitrary colour facts (banana yellow, stop sign red).
- Marjieh et al.: taste r = .54 and timbre r = .42 are moderate, and the authors call the whole result a lower bound.
- Keller had touch. LeCun's 9 March 2024 post anticipates her: "humans can get smart without vision, even pretty smart without vision and audition. But not without touch."
- Half of NLP researchers surveyed in 2022 (49% of 480) disagreed that a text-only model could understand language "in some non-trivial sense" (via Mitchell and Krakauer).
- LeCun's raw optic-nerve figure is of the right order by Zheng and Meister's estimate.

## NOT VERIFIED

- Gary Marcus: nothing fetched. No quote from him on this point is recorded here. (Search budget exhausted.)
- Bedny, Koster-Hale, Elli, Yazzolino and Saxe (2019), "There's more to 'sparkle' than meets the eye: Knowledge of vision and light verbs among congenitally blind and sighted individuals", Cognition 189. Citation from memory, paper not fetched, no quote.
- LeCun, "off-ramp ... dead end" (London, 9 April 2024): wording is The Next Web's report only.
- LeCun, 2025 talk with "2 megabytes per second ... about the same": wording is OfficeChai's transcription of an unnamed talk. The figures themselves are confirmed by his X post of 3 October 2026.
- LeCun, "If you are a student ... don't work on LLMs" (May 2024): The Decoder's quotation of an X post not fetched.
- Lex #258 wording: machine transcript (Whisper) plus one blogger's by-ear transcript. Audio not checked.
- GPT-4 answer to the table question: pseudonymous blog, no log.
- Michael et al. (2022) survey numbers: read in Mitchell and Krakauer, not in the survey paper.
- Berglund et al. (2023), reversal curse: named from memory, not fetched.
- Marjieh et al.: the text-only colour correlations following "r=.77 for direct images" were truncated in my extract.
- Author lists marked "from memory" above (Kim et al. 2021; VSI-Bench; BLINK; Marjieh et al.).
- Mahowald et al. journal page numbers (quotes are from the arXiv v3 preprint; the TiCS text may differ slightly).
