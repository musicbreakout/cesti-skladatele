<script lang="ts">
	const pillars = [
		{ icon: '🎓', title: 'Vzdělávání', desc: 'Přinášíme moderní didaktické podklady a interaktivní kvízy pro žáky, studenty i pedagogy zdarma a přehlednou formou.' },
		{ icon: '🏛️', title: 'Kultura', desc: 'Uchováváme a oslavujeme odkaz českých skladatelů, kteří zapsali českou zemi na mapu světové hudby.' },
		{ icon: '✨', title: 'Inspirace', desc: 'Propojujeme hudbu s reálnou krajinou, rodnými městy, architekturou a příběhy lidské vytrvalosti.' },
		{ icon: '🤝', title: 'Komunita', desc: 'Vytváříme otevřenou platformu pro studenty, pedagogy, turisty i všechny milovníky klasické hudby.' }
	];

	let feedbackSent = $state(false);
	let nameInput = $state('');
	let emailInput = $state('');
	let msgInput = $state('');

	function handleContact(e: SubmitEvent) {
		e.preventDefault();
		feedbackSent = true;
	}
</script>

<svelte:head>
	<title>O projektu | Čeští skladatelé</title>
	<meta name="description" content="Poslání projektu Čeští skladatelé – popularizace české klasické hudby, vzdělávací materiály a kulturní turistika." />
</svelte:head>

<div class="about-page section">
	<div class="container">
		<!-- Header -->
		<div class="page-header text-center">
			<span class="badge badge-sage">Mise & Příběh</span>
			<h1 class="page-title">O projektu Čeští skladatelé</h1>
			<p class="page-subtitle">
				Hudba je nejuniverzálnějším jazykem národa. Náš projekt vznikl s cílem otevřít bohatství české klasické hudby všem generacím.
			</p>
		</div>

		<!-- Story Section -->
		<div class="story-grid card p-8 mb-12">
			<div class="story-text">
				<span class="badge badge-ochre mb-2">Proč Čeští skladatelé?</span>
				<h2>Hudba, která překonala hranice i staletí</h2>
				<p>
					Česká země byla po staletí nazývána „konzervatoří Evropy“. Jména jako Bedřich Smetana, Antonín Dvořák, Jakub Jan Ryba, Josef Suk, Jiří Ignác Linek, Jan Josef Ignác Brentner či Karel Blažej Kopřiva nejsou jen položkami ve slovnících – jsou to fascinující lidské osudy plné vášně, tvůrčí vytrvalosti a lásky k rodnému kraji.
				</p>
				<p>
					Tento portál propojuje životopisná fakta, významná hudební díla, interaktivní vzdělávací kvízy a mapu památných míst a výletních tras. Věříme, že nejlepším způsobem, jak porozumět slavným skladbám, je stanout na břehu Vltavy, u Dvořákova památníku na Vysoké, v rožmitálském Podbrdsku nebo v malebných zákoutích Citolib a Křečovic.
				</p>
			</div>
			<div class="story-clef-box">
				<div class="clef-giant">𝄞</div>
				<p class="clef-motto">„V hudbě je život Čechů.“</p>
				<span class="clef-author">— Bedřich Smetana</span>
			</div>
		</div>

		<!-- 4 Pillars Grid -->
		<div class="pillars-section mb-12">
			<h2 class="text-center mb-8">Čtyři pilíře našeho projektu</h2>
			<div class="grid-4">
				{#each pillars as pillar}
					<div class="pillar-card card">
						<span class="pillar-icon">{pillar.icon}</span>
						<h3>{pillar.title}</h3>
						<p>{pillar.desc}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Contact Form -->
		<div id="kontakt" class="contact-box card p-8">
			<div class="contact-header text-center max-w-600 mx-auto">
				<span class="badge badge-ochre mb-2">Napište nám</span>
				<h2>Máte nápad, dotaz nebo tip na výlet?</h2>
				<p class="text-slate mb-6">Budeme rádi za vaše podněty, spolupráci se školami, orchestry i muzei.</p>
			</div>

			{#if feedbackSent}
				<div class="feedback-success text-center">
					<span class="success-icon">✓</span>
					<h3>Děkujeme za vaši zprávu!</h3>
					<p>Rádi se vám ozveme zpět.</p>
				</div>
			{:else}
				<form class="contact-form max-w-600 mx-auto" onsubmit={handleContact}>
					<div class="form-group">
						<label for="name">Vaše jméno a příjmení</label>
						<input type="text" id="name" bind:value={nameInput} required placeholder="Jan Novák" />
					</div>
					<div class="form-group">
						<label for="email">E-mailová adresa</label>
						<input type="email" id="email" bind:value={emailInput} required placeholder="jan.novak@example.cz" />
					</div>
					<div class="form-group">
						<label for="msg">Zpráva nebo podnět</label>
						<textarea id="msg" rows="4" bind:value={msgInput} required placeholder="Dobrý den, rád bych navrhl..."></textarea>
					</div>
					<button type="submit" class="btn btn-primary w-full">
						Odeslat zprávu →
					</button>
				</form>
			{/if}
		</div>
	</div>
</div>

<style>
	.text-center {
		text-align: center;
	}

	.page-header {
		max-width: 680px;
		margin: 0 auto 3rem;
	}

	.page-title {
		margin-top: 0.5rem;
		margin-bottom: 0.75rem;
	}

	.page-subtitle {
		font-size: 1.15rem;
		color: var(--color-slate-gray);
	}

	.story-grid {
		display: grid;
		grid-template-columns: 1.8fr 1fr;
		gap: 3rem;
		align-items: center;
		background: #FFF;
	}

	.story-text h2 {
		margin-top: 0.5rem;
		margin-bottom: 1rem;
	}

	.story-text p {
		font-size: 1.05rem;
		line-height: 1.75;
		margin-bottom: 1rem;
	}

	.story-clef-box {
		background: var(--color-parchment-soft);
		border: 2px solid var(--color-antique-gold);
		border-radius: var(--radius-lg);
		padding: 2.5rem 1.5rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.clef-giant {
		font-family: var(--font-serif);
		font-size: 5rem;
		line-height: 1;
		color: var(--color-warm-ochre);
		margin-bottom: 0.5rem;
	}

	.clef-motto {
		font-family: var(--font-serif);
		font-size: 1.25rem;
		font-style: italic;
		color: var(--color-deep-spruce);
		margin-bottom: 0.25rem;
	}

	.clef-author {
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--color-warm-ochre);
	}

	.pillar-card {
		padding: 2rem 1.5rem;
		text-align: center;
		background: #FFF;
	}

	.pillar-icon {
		font-size: 2.5rem;
		display: block;
		margin-bottom: 1rem;
	}

	.pillar-card h3 {
		font-size: 1.25rem;
		color: var(--color-deep-spruce);
		margin-bottom: 0.5rem;
	}

	.pillar-card p {
		font-size: 0.9rem;
		line-height: 1.55;
	}

	/* Contact form */
	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		text-align: left;
	}

	.form-group label {
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--color-deep-spruce);
	}

	.form-group input, .form-group textarea {
		padding: 0.85rem 1rem;
		border-radius: var(--radius-sm);
		border: 1px solid rgba(140, 119, 94, 0.35);
		background: #FFF;
		font-family: var(--font-sans);
		font-size: 1rem;
		outline: none;
	}

	.form-group input:focus, .form-group textarea:focus {
		border-color: var(--color-warm-ochre);
	}

	.feedback-success {
		padding: 2.5rem;
		background: rgba(203, 213, 192, 0.3);
		border-radius: var(--radius-md);
		max-width: 500px;
		margin: 0 auto;
	}

	.success-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		border-radius: var(--radius-full);
		background: #28a745;
		color: #FFF;
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	.p-8 {
		padding: 2.5rem;
	}

	.mb-12 {
		margin-bottom: 3.5rem;
	}

	.mb-8 {
		margin-bottom: 2rem;
	}

	.mb-6 {
		margin-bottom: 1.5rem;
	}

	.mb-2 {
		margin-bottom: 0.5rem;
	}

	.max-w-600 {
		max-width: 600px;
	}

	.mx-auto {
		margin-left: auto;
		margin-right: auto;
	}

	.w-full {
		width: 100%;
	}

	.text-slate {
		color: var(--color-slate-gray);
	}

	@media (max-width: 900px) {
		.story-grid {
			grid-template-columns: 1fr;
		}
		.p-8 {
			padding: 1.5rem;
		}
	}
</style>
