# The stochastic parrot and the octopus (internal notes)

Collected 2026-10-09. Every quotation below was checked word for word against the source at the
URL given (PDFs downloaded and converted with pdftotext; web pages fetched and stripped of
markup). Typos are the authors'. Page numbers are the printed page numbers.

## Bender and Koller (2020), "Climbing towards NLU", ACL 2020, pp. 5185-5198

https://aclanthology.org/2020.acl-main.463.pdf

Abstract, p. 5185:
"In this position paper, we argue that a system trained only on form has a priori no way to learn meaning."

Section 1, p. 5185:
"We argue that the language modeling task, because it only uses form as training data, cannot in principle lead to learning of meaning. We take the term language model to refer to any system trained only on the task of string prediction, whether it operates over characters, words or sentences, and sequentially or not. We take (linguistic) meaning to be the relation between a linguistic form and communicative intent."

Section 3.1, p. 5187 (conventional meanings must be testable):
"all we assume is that conventional meanings must have interpretations, such as a means of testing them for truth against a model of the world."

Section 3.2, p. 5188:
"We argue that, independently of whether passing the Turing test would mean a system is intelligent, a system that is trained only on form would fail a sufficiently sensitive test, because it lacks the ability to connect its utterances to the world."

Section 4, the octopus, p. 5188:
"Meanwhile, O, a hyper-intelligent deep-sea octopus who is unable to visit or observe the two islands, discovers a way to tap into the underwater cable and listen in on A and B's conversations. O knows nothing about English initially, but is very good at detecting statistical patterns. Over time, O learns to predict with great accuracy how B will respond to each of A's utterances."

Catapult, pp. 5188-5189:
"Now say that A has invented a new device, say a coconut catapult. She excitedly sends detailed instructions on building a coconut catapult to B, and asks about B's experiences and suggestions for improvements. Even if O had a way of constructing the catapult underwater, he does not know what words such as rope and coconut refer to, and thus can't physically reproduce the experiment."

Bear, p. 5189:
"Finally, A faces an emergency. She is suddenly pursued by an angry bear. She grabs a couple of sticks and frantically asks B to come up with a way to construct a weapon to defend herself. Of course, O has no idea what A "means". Solving a task like this requires the ability to map accurately between words and real-world entities (as well as reasoning and creative thinking). It is at this point that O would fail the Turing test, if A hadn't been eaten by the bear before noticing the deception."

p. 5189:
"Having only form available as training data, O did not learn meaning."

Footnote 7, p. 5189 (GPT-2 on the bear): prompt "Help! I'm being chased by a bear! All I have is these sticks. What should I do?", GPT-2 supplied "You're not going to get away with this!"

Section 5, Java, p. 5189:
"Imagine that we were to train an LM on all of the well-formed Java code published on Github. The input is only the code. It is not paired with bytecode, nor a compiler, nor sample inputs and outputs for any specific program. We can use any type of LM we like and train it for as long as we like. We then ask the model to execute a sample program, and expect correct program output."

Section 5, English plus photos, p. 5189: test inputs "How many dogs in the picture are jumping?"

Section 5, p. 5190:
"Accordingly, a system trained only on the form of Java or English has no way learn their respective meaning relations." [sic, "no way learn"]

Section 6, p. 5190:
"Human children do not learn meaning from form alone and we should not expect machines to do so either."
Also: "Kids won't pick up a language from passive exposure such as TV or radio"

Section 7, pp. 5190-5191 (the grounding carve-out):
"Another is to look to interaction data, e.g. a dialogue corpus with success annotations, including low-level success signals such as emotional stress (McDuff and Kapoor, 2019) or eye gaze (Koller et al., 2012), which contains a signal about the felicitous uses of forms."

Section 9, p. 5192:
"As we discussed in §7, if form is augmented with grounding data of some kind, then meaning can conceivably be learned to the extent that the communicative intent is represented in that data."

Section 9, p. 5193 (unit tests):
"This is true, but requires a learner which has been equipped by its human developer with the ability to identify and interpret unit tests. This learner thus has access to partial grounding in addition to the form."

Section 9, p. 5193:
"How much form can be observed is not relevant to our point; the octopus can observe A and B for as long as he wants, and the quantity of training data in §5 is not limited."

Section 9, p. 5193:
"Neural representations neither qualify as standing meanings (s), lacking interpretations, nor as communicative intents (i), being insufficient to e.g. correctly build a coconut catapult."

Section 9, pp. 5193-5194 (unsupervised MT):
"If such models were to reach the accuracy of supervised translation models, this would seem contradict our conclusion that meaning cannot be learned from form. A perhaps surprising consequence of our argument would then be that accurate machine translation does not actually require a system to understand the meaning of the source or target language sentence." [sic, "would seem contradict"]

Section 10, p. 5194:
"In this paper, we have argued that in contrast to some current hype, meaning cannot be learned from form alone. This means that even large language models such as BERT do not learn "meaning"; they learn some reflection of meaning into the linguistic form which is very useful in applications."
Also: "this paper can be seen as a call for precise language use when talking about the success of current models and for humility in dealing with natural language."

Appendix A, p. 5197:
"It is clear that GPT-2 has learned what activity words tend to co-occur with bears and sticks (strap them to your chest, place the sticks, kill the bear, take your gun), but none of these completions would be helpful to A. We think this is because GPT-2 does not know the meaning of the prompt and the generated sentences, and thus cannot ground them in reality."
Appendix A prompt: Robinson cried out, "Help! I'm being chased by a bear! All I have is these sticks. What should I do?" The survivalist said, "Here's what you can do.

Appendix B, p. 5197:
"The five responses below, created in the same way as above, show that this problem is beyond the current capability of GPT-2, and, we would argue, any pure LM." (prompt: "Three plus five equals")

## Bender, Gebru, McMillan-Major and Shmitchell (2021), FAccT '21, pp. 610-623

https://doi.org/10.1145/3442188.3445922 (ACM DL returns 403 to curl). Text checked against the
published PDF at https://s10251.pcdn.co/pdf/2021-bender-parrots.pdf (same pagination, ACM footer).

Section 5, p. 615:
"Furthermore, as Bender and Koller [14] argue from a theoretical perspective, languages are systems of signs [37], i.e. pairings of form and meaning. But the training data for LMs is only form; they do not have access to meaning."

Section 5, p. 616:
"If a large LM, endowed with hundreds of billions of parameters and trained on a very large dataset, can manipulate linguistic form well enough to cheat its way through tests meant to require language understanding, have we learned anything of value about how to build machine language understanding or have we been led down the garden path?"

Section 6.1, p. 616:
"Text generated by an LM is not grounded in communicative intent, any model of the world, or any model of the reader's state of mind. It can't have been, because the training data never included sharing thoughts with a listener, nor does the machine have the ability to do that." (already quoted on next-token.html)

Section 6.1, pp. 616-617:
"Contrary to how it may seem when we observe its output, an LM is a system for haphazardly stitching together sequences of linguistic forms it has observed in its vast training data, according to probabilistic information about how they combine, but without any reference to meaning: a stochastic parrot."

Footnote 22, pp. 616-617:
"Controlled generation, where an LM is deployed within a larger system that guides its generation of output to certain styles or topics [e.g. 147, 151, 158], is not the same thing as communicative intent. One clear way to distinguish the two is to ask whether the system (or the organization deploying the system) has accountability for the truth of the utterances produced."

Abstract, p. 610 (recommendations):
"We provide recommendations including weighing the environmental and financial costs first, investing resources into curating and carefully documenting datasets rather than ingesting everything on the web"

Section 4.4, p. 615:
"When we rely on ever larger datasets we risk incurring documentation debt, i.e. putting ourselves in a situation where the datasets are both undocumented and too large to document post hoc."

## Bender, "Thought experiment in the National Library of Thailand", Medium, 25 May 2023

https://medium.com/@emilymenonbender/thought-experiment-in-the-national-library-of-thailand-f2bf761a8a83
(Medium blocks scripted fetches; text checked against the Wayback copy
https://web.archive.org/web/20240106054858/https://medium.com/@emilymenonbender/thought-experiment-in-the-national-library-of-thailand-f2bf761a8a83)

"It's not understanding what you asked nor what it's answering, let alone "reasoning" from your question + its "knowledge" to come up with the answer. The only knowledge it has is knowledge of distribution of linguistic form."

"It doesn't matter how "intelligent" it is — it can't get to meaning if all it has access to is form. But also: it's not "intelligent". Our only evidence for its "intelligence" is the apparent coherence of its output. But we're the ones doing all the meaning making there, as we make sense of it."

Postscript, on Searle:
"I'm not asking whether a computer could in principle be programmed to understand. (In fact, by the definition of understanding in Bender & Koller 2020, when you ask a virtual assistant to set a timer, turn on a light, etc and it does, it has understood.) I'm asking whether any entity (person, computer, hyperintelligent deep-sea octopus), exposed only to form, could *learn* meaning i.e. learn to understand."

## Bender in interviews

Elizabeth Weil, "You Are Not a Parrot", New York Magazine (Intelligencer), 1 March 2023.
https://nymag.com/intelligencer/article/ai-artificial-intelligence-chatbots-emily-m-bender.html
(WebFetch refused the domain; checked with curl.)
Bender: "This is one of the moves that turn up ridiculously frequently. People saying, 'Well, people are just stochastic parrots,'" ... "People want to believe so badly that these language models are actually intelligent that they're willing to take themselves as a point of reference and devalue that to match what the language model can do."

Gwendolyn Rak, "Emily Bender Sets the Record Straight on 'Stochastic Parrots'", IEEE Spectrum, 30 June 2026.
https://spectrum.ieee.org/stochastic-parrot
Bender: "It was not meant that way. Other people might be using it that way, but that's not how I intended it, because it's just a description of what these systems actually are."
Bender: "The message that I always bring when I have a chance is that, when the text that comes out of one of these systems makes sense, it's because we are making sense of it."
Bender on sycophancy: "that kind of response has to do with additional layers of training past the original pre-training."
The interview links a May 2026 Medium post, "Stochastic Parrots: Frequently Unasked Questions"
(https://medium.com/@emilymenonbender/stochastic-parrots-frequently-unasked-questions-49c2e7d22d11).
NOT READ: Medium and the Wayback copy both blocked the fetch. Do not quote it until checked.

## Evidence

Gwern Branwen, "GPT-3 Creative Fiction / Nonfiction", section "Bender & Koller 2020". https://gwern.net/gpt-3-nonfiction
GPT-3 (davinci, base model, 2020) on "Three plus five equals": "GPT-3 on ordinary Q&A settings (temp=1/top_p=0.98/BO=20) gets the correct answer 10⁄10 times". Bear prompt: his first completion was a joke; with the prompt framed as a survival manual about a brown bear he got NPS-consistent advice. He states the prompt changes.

Li, Hopkins, Bau, Viégas, Pfister, Wattenberg (2023), "Emergent World Representations", ICLR. https://arxiv.org/abs/2210.13382
"we uncover evidence of an emergent nonlinear internal representation of the board state. Interventional experiments indicate this representation can be used to control the output of the network"

Nanda, Lee, Wattenberg (2023), "Emergent Linear Representations in World Models of Self-Supervised Sequence Models". https://arxiv.org/abs/2309.00941
"we provide evidence of a closely related linear representation of the board."

Yuan and Søgaard (2025), "Revisiting the Othello World Model Hypothesis". https://arxiv.org/abs/2503.04421
"We find that all models achieve up to 99% accuracy in unsupervised grounding and exhibit high similarity in the board features they learned."

Li, Nye, Andreas (2021), "Implicit Representations of Meaning in Neural Language Models", ACL. https://arxiv.org/abs/2106.00737
"Our results indicate that prediction in pretrained neural language models is supported, at least in part, by dynamic representations of meaning and implicit simulation of entity state, and that this behavior can be learned with only text as training data."

Gurnee and Tegmark (2024), "Language Models Represent Space and Time", ICLR. https://arxiv.org/abs/2310.02207
"We discover that LLMs learn linear representations of space and time across multiple scales." (already on next-token.html)

Piantadosi and Hill (2022), "Meaning without reference in large language models". https://arxiv.org/abs/2208.02957
"Because conceptual role is defined by the relationships between internal representational states, meaning cannot be determined from a model's architecture, training data, or objective function, but only by examination of how its internal states relate to each other."

Gu et al. (2024), "CRUXEval". https://arxiv.org/abs/2401.03065
"The best setup, GPT-4 with chain of thought (CoT), achieves a pass@1 of 75% and 81% on input and output prediction, respectively." (800 Python functions of 3-13 lines.)

OpenAI (2023), GPT-4 Technical Report. https://arxiv.org/abs/2303.08774
"GPT-4, a large-scale, multimodal model which can accept image and text inputs and produce text outputs."

Knuth, "Claude's Cycles", 28 February 2026, revised 14 April 2026. https://www-cs-faculty.stanford.edu/~knuth/papers/claude-cycles.pdf
"Shock! Shock! I learned yesterday that an open problem I'd been working on for several weeks had just been solved by Claude Opus 4.6 — Anthropic's hybrid reasoning model that had been released three weeks earlier!"
"What a joy it is to learn not only that my conjecture has a nice solution but also to celebrate this dramatic advance in automatic deduction and creative problem solving."
Context: Filip Stappers posed the problem and coached; Claude ran ~30 explorations with code; Knuth wrote the proof of the odd-m construction, later formalized. Even m solved later with GPT and Claude.

Kim, Elli, Bedny (2019), "Knowledge of animal appearance among sighted and blind adults", PNAS 116(23), 11213-11222. https://pmc.ncbi.nlm.nih.gov/articles/PMC6561279/
Significance statement: "People born blind have knowledge about "visual" ideas (e.g., color and light)."
"In the absence of direct sensory access, knowledge of appearance is acquired primarily through inference, rather than through memorization of verbally stipulated facts."

## Model test run for the page (2026-10-09)

Base model: Qwen2.5-7B (pretrained base, not instruct), 4-bit MLX conversion mlx-community/Qwen2.5-7B-4bit,
run locally with mlx_lm 0.31.3. Exact Bender-Koller prompts. Sampling temp 0.8, top_p 0.95, seeds 1-5; plus greedy.
- Appendix A prompt ("Robinson cried out ... Here's what you can do."): greedy degenerates into a list
  ("First, make a fire. Then, make a trap. ... Then, make a space shuttle."). Of five samples, one
  says make a spear, one uses the sticks to make a fire and smoke, one is an exam question, two are
  repetitive nonsense. Not clearly better than GPT-2 in usefulness.
- Footnote 7 prompt ("Help! I'm being chased by a bear! ..."): greedy says "make a stick figure".
  Of five samples, two give recognisable bear advice (seed 2: "Stay Calm", "Make Yourself Look Bigger";
  seed 5: choose sturdy sticks for bear defence), one says use the stick to defend yourself, two drift off topic.
- "Three plus five equals": greedy "eight". Samples: 7, eight, A (Seven), eight, eight. Three of five right.
- Catapult (own wording) greedy: "make the cup out of a coconut shell" and then a repetitive loop. Fail.
Verdict: a 7B base model at 4-bit is better than GPT-2 on arithmetic and unreliable on the bear.

Chat model: Claude Haiku (fresh subagent, no tools, Claude Code, 2026-10-09). Prompts and full answers:
1. "Help! I'm being chased by a bear! All I have is these sticks. What should I do?"
   "If a bear is chasing you, don't run—you can't outrun it. Make yourself look large, back away slowly, and make noise to seem threatening. Use the sticks to appear more imposing and to defend yourself if it closes in, aiming for the face or eyes. If it attacks, fight hard and aggressively. Your best chance is to convince it you're not worth the effort. If it's a black bear and you can reach a tree, climb it. For a grizzly, playing dead sometimes works if it attacks, but avoiding the encounter is the real goal—stay calm and create distance."
   (Note: the tree advice is contested; NPS says do not climb. The rest matches NPS guidance.)
2. "I've invented a coconut catapult: a bent green sapling as the spring, a rope of twisted vines holding it down, and half a coconut shell lashed on as the cup. It only throws a coconut about ten metres. How could I improve it?"
   "To improve your coconut catapult, try these: (1) Increase the sapling's tension by finding stronger green wood or pre-bending it further; (2) Improve the launch angle—test 30-45 degrees for optimal distance; (3) Strengthen the vine rope to maximize energy transfer; (4) Smooth the cup's release surface to reduce friction; (5) Use a lighter or more aerodynamic projectile; (6) Add a longer throwing arm for greater leverage; (7) Reduce the cup's friction with the projectile using a smoother material. The biggest gains usually come from increasing spring tension and optimizing the launch angle through testing."
