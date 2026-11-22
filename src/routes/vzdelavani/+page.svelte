<script lang="ts">
	import { quizTopics } from '$lib/data/quizzes';
	import type { QuizTopic, QuizQuestion } from '$lib/types';

	let selectedTopicId = $state<string>(quizTopics[0].id);

	let currentTopic = $derived(
		quizTopics.find((t) => t.id === selectedTopicId) || quizTopics[0]
	);

	// Quiz playing state
	let currentQuestionIndex = $state<number>(0);
	let selectedAnswer = $state<number | null>(null);
	let isAnswerSubmitted = $state<boolean>(false);
	let userScore = $state<number>(0);
	let isQuizFinished = $state<boolean>(false);
	let userAnswers = $state<{ questionId: string; selected: number; isCorrect: boolean }[]>([]);

	let currentQuestion = $derived<QuizQuestion>(
		currentTopic.questions[currentQuestionIndex]
	);

	function selectTopic(topicId: string) {
		selectedTopicId = topicId;
		resetQuiz();
	}

	function handleChooseOption(index: number) {
		if (isAnswerSubmitted) return;
		selectedAnswer = index;
		isAnswerSubmitted = true;

		const isCorrect = index === currentQuestion.correctAnswer;
		if (isCorrect) {
			userScore += 1;
		}

		userAnswers = [
			...userAnswers,
			{
				questionId: currentQuestion.id,
				selected: index,
				isCorrect
			}
		];
	}

	function handleNextQuestion() {
		if (currentQuestionIndex < currentTopic.questions.length - 1) {
			currentQuestionIndex += 1;
			selectedAnswer = null;
			isAnswerSubmitted = false;
		} else {
			isQuizFinished = true;
		}
	}

	function resetQuiz() {
		currentQuestionIndex = 0;
		selectedAnswer = null;
		isAnswerSubmitted = false;
		userScore = 0;
		isQuizFinished = false;
		userAnswers = [];
	}
</script>

<svelte:head>
	<title>Interaktivní hudební kvízy | Čeští skladatelé</title>
	<meta
		name="description"
		content="Zábavné a plně funkční interaktivní kvízy o českých skladatelích. Prověřte své znalosti o Dvořákovi, Smetanovi, Rybovi a dalších mistrech."
	/>
</svelte:head>

<div class="edu-page section">
	<div class="container">
		<!-- Header -->
		<div class="page-header text-center">
			<span class="badge badge-ochre">Znalostní testy pro školy i veřejnost</span>
			<h1 class="page-title">Hudební kvízy</h1>
			<p class="page-subtitle">
				Otestujte si své znalosti o životech, vrcholných dílech a historických kuriozitách českých skladatelů v našich interaktivních testech.
			</p>
		</div>

		<!-- Topic Selector Tabs -->
		<div class="quiz-topic-nav">
			<div class="filter-pills justify-center">
				{#each quizTopics as topic}
					<button
						class="filter-pill"
						class:active={selectedTopicId === topic.id}
						onclick={() => selectTopic(topic.id)}
					>
						{topic.badge}
					</button>
				{/each}
			</div>
		</div>

		<!-- Active Quiz Area -->
		<div class="quiz-container">
			{#if !isQuizFinished}
				<!-- Quiz In-Progress Card -->
				<article class="quiz-card card">
					<div class="quiz-card-header">
						<div>
							<span class="badge badge-sage">{currentTopic.badge}</span>
							<h2 class="quiz-topic-title">{currentTopic.title}</h2>
							<p class="quiz-topic-sub">{currentTopic.subtitle}</p>
						</div>

						<div class="quiz-progress-indicator">
							<span class="progress-counter">
								Otázka <strong>{currentQuestionIndex + 1}</strong> z {currentTopic.questions.length}
							</span>
							<div class="progress-bar-bg" aria-hidden="true">
								<div
									class="progress-bar-fill"
									style={`width: ${((currentQuestionIndex + 1) / currentTopic.questions.length) * 100}%`}
								></div>
							</div>
						</div>
					</div>

					<div class="question-body">
						<h3 class="question-text">
							{currentQuestion.question}
						</h3>

						<!-- Options list -->
						<div class="options-grid" role="radiogroup" aria-label="Možnosti odpovědi">
							{#each currentQuestion.options as option, optIdx}
								{@const isSelected = selectedAnswer === optIdx}
								{@const isCorrect = currentQuestion.correctAnswer === optIdx}
								<button
									class="option-btn"
									class:selected={isSelected}
									class:correct={isAnswerSubmitted && isCorrect}
									class:wrong={isAnswerSubmitted && isSelected && !isCorrect}
									class:disabled={isAnswerSubmitted}
									disabled={isAnswerSubmitted}
									onclick={() => handleChooseOption(optIdx)}
								>
									<span class="opt-letter">
										{String.fromCharCode(65 + optIdx)}
									</span>
									<span class="opt-text">{option}</span>
									{#if isAnswerSubmitted && isCorrect}
										<span class="status-icon success-icon" aria-label="Správně">✓</span>
									{:else if isAnswerSubmitted && isSelected && !isCorrect}
										<span class="status-icon wrong-icon" aria-label="Špatně">✕</span>
									{/if}
								</button>
							{/each}
						</div>

						<!-- Immediate Explanation Box -->
						{#if isAnswerSubmitted}
							<div
								class="explanation-box"
								class:box-success={selectedAnswer === currentQuestion.correctAnswer}
								class:box-wrong={selectedAnswer !== currentQuestion.correctAnswer}
							>
								<div class="explanation-title">
									{#if selectedAnswer === currentQuestion.correctAnswer}
										<span class="badge badge-sage">✓ Správná odpověď!</span>
									{:else}
										<span class="badge badge-ochre">✕ Pozor, správná odpověď je {String.fromCharCode(65 + currentQuestion.correctAnswer)}</span>
									{/if}
								</div>
								<p class="explanation-desc">{currentQuestion.explanation}</p>
								<div class="explanation-action">
									<button class="btn btn-primary" onclick={handleNextQuestion}>
										{currentQuestionIndex < currentTopic.questions.length - 1 ? 'Další otázka →' : 'Zobrazit vyhodnocení →'}
									</button>
								</div>
							</div>
						{/if}
					</div>
				</article>
			{:else}
				<!-- Quiz Results Card -->
				<article class="quiz-card card results-card text-center">
					<div class="result-badge-wrap">
						<span class="result-icon">𝄞</span>
					</div>
					<h2 class="result-title">Kvíz dokončen!</h2>
					<p class="result-sub">Téma: <strong>{currentTopic.title}</strong></p>

					<div class="score-circle">
						<span class="score-number">{userScore}</span>
						<span class="score-total">z {currentTopic.questions.length}</span>
					</div>

					<div class="evaluation-message">
						{#if userScore === currentTopic.questions.length}
							<p class="eval-text gold-text">
								<strong>Excelentní výsledek! (100 %)</strong><br />
								Máte mimořádné znalosti české hudební kultury a historie.
							</p>
						{:else if userScore >= currentTopic.questions.length / 2}
							<p class="eval-text">
								<strong>Velmi dobrá práce! ({Math.round((userScore / currentTopic.questions.length) * 100)} %)</strong><br />
								Většinu historických souvislostí a děl znáte spolehlivě.
							</p>
						{:else}
							<p class="eval-text">
								<strong>Dobrý pokus! ({Math.round((userScore / currentTopic.questions.length) * 100)} %)</strong><br />
								Projděte si profily skladatelů na webu a zkuste si kvíz znovu.
							</p>
						{/if}
					</div>

					<!-- Detailed Summary of Questions -->
					<div class="answers-review">
						<h3>Přehled odpovědí:</h3>
						<ul class="review-list">
							{#each currentTopic.questions as q, qIdx}
								{@const ans = userAnswers.find((a) => a.questionId === q.id)}
								<li class="review-item" class:review-correct={ans?.isCorrect} class:review-wrong={!ans?.isCorrect}>
									<span class="review-icon">{ans?.isCorrect ? '✓' : '✕'}</span>
									<div class="review-content">
										<strong>{qIdx + 1}. {q.question}</strong>
										<p class="review-expl">{q.explanation}</p>
									</div>
								</li>
							{/each}
						</ul>
					</div>

					<div class="result-actions">
						<button class="btn btn-primary" onclick={resetQuiz}>
							Zkusit tento kvíz znovu ↺
						</button>
						<a href="/skladatele" class="btn btn-outline">
							Prozkoumat profily skladatelů →
						</a>
					</div>
				</article>
			{/if}
		</div>

		<!-- List of Available Quizzes -->
		<div class="available-topics-section">
			<div class="section-title-wrap text-center">
				<span class="badge badge-sage">Katalog témat</span>
				<h2>Vyberte si další kvíz</h2>
				<p class="section-intro">Připravené testy zaměřené na jednotlivé skladatele i celková hudební období.</p>
			</div>

			<div class="topics-grid">
				{#each quizTopics as topic}
					<button
						class="topic-card card"
						class:active={selectedTopicId === topic.id}
						onclick={() => selectTopic(topic.id)}
					>
						<div class="topic-card-head">
							<span class="badge badge-ochre">{topic.badge}</span>
							<span class="questions-count">{topic.questions.length} otázek</span>
						</div>
						<h3>{topic.title}</h3>
						<p>{topic.description}</p>
						<div class="topic-card-cta">
							<span class="play-label">Spustit tento kvíz</span>
							<span class="play-arrow">→</span>
						</div>
					</button>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.text-center {
		text-align: center;
	}

	.page-header {
		max-width: 680px;
		margin: 0 auto 2.5rem;
	}

	.page-title {
		margin-top: 0.5rem;
		margin-bottom: 0.75rem;
		font-size: clamp(2.2rem, 4vw, 3rem);
		color: var(--color-deep-spruce);
	}

	.page-subtitle {
		font-size: 1.15rem;
		color: var(--color-slate-gray);
		line-height: 1.6;
	}

	/* Topic Selector */
	.quiz-topic-nav {
		margin-bottom: 2.5rem;
	}

	/* Quiz Card */
	.quiz-container {
		max-width: 860px;
		margin: 0 auto 4rem;
	}

	.quiz-card {
		background: #FFF;
		border: 1px solid rgba(140, 119, 94, 0.25);
		border-radius: var(--radius-lg);
		padding: 2.5rem;
		box-shadow: var(--shadow-md);
	}

	.quiz-card-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1.5rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid rgba(140, 119, 94, 0.2);
		margin-bottom: 2rem;
		flex-wrap: wrap;
	}

	.quiz-topic-title {
		font-size: 1.6rem;
		color: var(--color-deep-spruce);
		margin-top: 0.35rem;
		margin-bottom: 0.25rem;
	}

	.quiz-topic-sub {
		color: var(--color-slate-gray);
		font-size: 0.95rem;
		margin: 0;
	}

	.quiz-progress-indicator {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.5rem;
		min-width: 170px;
	}

	.progress-counter {
		font-size: 0.9rem;
		color: var(--color-slate-gray);
	}

	.progress-bar-bg {
		width: 100%;
		height: 8px;
		background: var(--color-parchment-soft);
		border-radius: var(--radius-full);
		overflow: hidden;
		border: 1px solid rgba(140, 119, 94, 0.2);
	}

	.progress-bar-fill {
		height: 100%;
		background: linear-gradient(90deg, var(--color-warm-ochre), var(--color-antique-gold));
		transition: width 0.3s ease;
	}

	/* Question */
	.question-text {
		font-size: 1.35rem;
		color: var(--color-deep-spruce);
		line-height: 1.5;
		margin-bottom: 1.75rem;
	}

	.options-grid {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.option-btn {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 1.25rem;
		padding: 1.15rem 1.5rem;
		background: var(--color-parchment-soft);
		border: 2px solid rgba(140, 119, 94, 0.2);
		border-radius: var(--radius-md);
		cursor: pointer;
		text-align: left;
		font-family: var(--font-sans);
		font-size: 1.05rem;
		color: var(--color-charcoal);
		transition: all 0.2s ease;
		position: relative;
	}

	.option-btn:hover:not(:disabled) {
		background: #FFF;
		border-color: var(--color-warm-ochre);
		transform: translateX(4px);
		box-shadow: var(--shadow-sm);
	}

	.opt-letter {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: #FFF;
		border: 1px solid rgba(140, 119, 94, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 0.9rem;
		color: var(--color-deep-spruce);
		flex-shrink: 0;
	}

	.opt-text {
		flex: 1;
		line-height: 1.4;
	}

	.status-icon {
		font-weight: 700;
		font-size: 1.25rem;
		flex-shrink: 0;
	}

	/* State classes */
	.option-btn.correct {
		background: #E8F5E9;
		border-color: #2E7D32;
		color: #1B5E20;
		font-weight: 600;
	}

	.option-btn.correct .opt-letter {
		background: #2E7D32;
		color: #FFF;
		border-color: #2E7D32;
	}

	.success-icon {
		color: #2E7D32;
	}

	.option-btn.wrong {
		background: #FFEBEE;
		border-color: #C62828;
		color: #B71C1C;
	}

	.option-btn.wrong .opt-letter {
		background: #C62828;
		color: #FFF;
		border-color: #C62828;
	}

	.wrong-icon {
		color: #C62828;
	}

	.option-btn.disabled {
		cursor: default;
	}

	/* Explanation Box */
	.explanation-box {
		padding: 1.75rem;
		border-radius: var(--radius-md);
		animation: fadeIn 0.3s ease;
	}

	.explanation-box.box-success {
		background: #F1F8E9;
		border-left: 4px solid #388E3C;
	}

	.explanation-box.box-wrong {
		background: #FFF3E0;
		border-left: 4px solid var(--color-warm-ochre);
	}

	.explanation-title {
		margin-bottom: 0.75rem;
	}

	.explanation-desc {
		font-size: 1rem;
		line-height: 1.6;
		color: var(--color-charcoal);
		margin-bottom: 1.5rem;
	}

	.explanation-action {
		display: flex;
		justify-content: flex-end;
	}

	/* Results */
	.results-card {
		padding: 3.5rem 2.5rem;
	}

	.result-badge-wrap {
		width: 72px;
		height: 72px;
		border-radius: 50%;
		background: var(--color-parchment-soft);
		border: 2px solid var(--color-warm-ochre);
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1.25rem;
	}

	.result-icon {
		font-size: 2.5rem;
		color: var(--color-deep-spruce);
	}

	.result-title {
		font-size: 2.2rem;
		color: var(--color-deep-spruce);
		margin-bottom: 0.25rem;
	}

	.result-sub {
		color: var(--color-slate-gray);
		font-size: 1.1rem;
		margin-bottom: 2rem;
	}

	.score-circle {
		width: 140px;
		height: 140px;
		border-radius: 50%;
		background: var(--color-deep-spruce);
		color: var(--color-parchment);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 auto 2rem;
		box-shadow: var(--shadow-md);
	}

	.score-number {
		font-size: 3rem;
		font-weight: 700;
		line-height: 1;
		font-family: var(--font-serif);
	}

	.score-total {
		font-size: 0.95rem;
		opacity: 0.85;
	}

	.evaluation-message {
		max-width: 520px;
		margin: 0 auto 2.5rem;
		font-size: 1.1rem;
		line-height: 1.6;
	}

	.eval-text.gold-text {
		color: var(--color-deep-spruce);
	}

	/* Review */
	.answers-review {
		text-align: left;
		margin-top: 2.5rem;
		padding-top: 2.5rem;
		border-top: 1px solid rgba(140, 119, 94, 0.2);
	}

	.answers-review h3 {
		font-size: 1.25rem;
		color: var(--color-deep-spruce);
		margin-bottom: 1.25rem;
	}

	.review-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.review-item {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		padding: 1rem 1.25rem;
		border-radius: var(--radius-sm);
		background: var(--color-parchment-soft);
	}

	.review-icon {
		font-weight: 700;
		font-size: 1.2rem;
		flex-shrink: 0;
		margin-top: 0.1rem;
	}

	.review-item.review-correct .review-icon {
		color: #2E7D32;
	}

	.review-item.review-wrong .review-icon {
		color: #C62828;
	}

	.review-content strong {
		color: var(--color-deep-spruce);
		display: block;
		margin-bottom: 0.25rem;
	}

	.review-expl {
		font-size: 0.9rem;
		color: var(--color-slate-gray);
		margin: 0;
		line-height: 1.4;
	}

	.result-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
		margin-top: 2.5rem;
		flex-wrap: wrap;
	}

	/* Available Topics */
	.available-topics-section {
		border-top: 1px solid rgba(140, 119, 94, 0.2);
		padding-top: 3.5rem;
	}

	.section-title-wrap {
		margin-bottom: 2.5rem;
	}

	.section-title-wrap h2 {
		font-size: 1.8rem;
		color: var(--color-deep-spruce);
		margin-top: 0.35rem;
		margin-bottom: 0.25rem;
	}

	.topics-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 1.5rem;
	}

	.topic-card {
		background: #FFF;
		border: 1px solid rgba(140, 119, 94, 0.2);
		border-radius: var(--radius-md);
		padding: 1.75rem;
		text-align: left;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		transition: all 0.2s ease;
		font-family: var(--font-sans);
	}

	.topic-card:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow-md);
		border-color: var(--color-warm-ochre);
	}

	.topic-card.active {
		border-color: var(--color-deep-spruce);
		background: var(--color-parchment-soft);
	}

	.topic-card-head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	.questions-count {
		font-size: 0.8rem;
		color: var(--color-slate-gray);
		font-weight: 600;
	}

	.topic-card h3 {
		font-size: 1.15rem;
		color: var(--color-deep-spruce);
		margin-bottom: 0.5rem;
	}

	.topic-card p {
		font-size: 0.9rem;
		color: var(--color-charcoal);
		line-height: 1.5;
		margin-bottom: 1.25rem;
		flex: 1;
	}

	.topic-card-cta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 0.9rem;
		font-weight: 700;
		color: var(--color-warm-ochre);
		padding-top: 0.75rem;
		border-top: 1px solid rgba(140, 119, 94, 0.15);
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(6px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 768px) {
		.quiz-card {
			padding: 1.5rem;
		}
		.quiz-card-header {
			flex-direction: column;
		}
		.quiz-progress-indicator {
			align-items: flex-start;
			width: 100%;
		}
		.option-btn {
			padding: 1rem;
			font-size: 0.95rem;
		}
	}
</style>
