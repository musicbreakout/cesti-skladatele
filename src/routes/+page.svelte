<script lang="ts">
	import { composers } from '$lib/data/composers';
	import { articles } from '$lib/data/articles';
	import { anniversaries } from '$lib/data/anniversaries';
	import ComposerCard from '$lib/components/ComposerCard.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import MapInteractive from '$lib/components/MapInteractive.svelte';

	//  Featured composers for homepage
	const featuredComposers = composers.slice(0, 4);

	// Featured articles for homepage
	const featuredArticles = articles.slice(0, 4);

	// Featured anniversaries
	const featuredAnniversaries = anniversaries.slice(0, 3);
</script>

<svelte:head>
	<title>Čeští skladatelé | Příběhy, hudba, místa</title>
</svelte:head>

<!-- HERO SECTION -->
<section class="hero-section">
	<div class="container hero-container">
		<div class="hero-content">
			<span class="hero-badge badge badge-ochre">Kulturní dědictví České republiky</span>
			<h1 class="hero-title">
				Příběhy, hudba, místa.
			</h1>
			<p class="hero-subtitle">
				Objevte génie české hudební kultury, poznejte jejich dramatické osudy, mistrovská díla a vydejte se po jejich autentických stopách.
			</p>
			<div class="hero-actions">
				<a href="/blog" class="btn btn-primary">
					<span>Prozkoumat blog</span>
					<span class="arrow">→</span>
				</a>
				<a href="/skladatele" class="btn btn-outline">
					<span>Seznam skladatelů</span>
				</a>
			</div>
			<div class="hero-stats">
				<div class="stat-item">
					<span class="stat-num">200+</span>
					<span class="stat-lbl">let tradice</span>
				</div>
				<div class="stat-sep">/</div>
				<div class="stat-item">
					<span class="stat-num">50+</span>
					<span class="stat-lbl">památných míst</span>
				</div>
				<div class="stat-sep">/</div>
				<div class="stat-item">
					<span class="stat-num">100%</span>
					<span class="stat-lbl">volně k výuce</span>
				</div>
			</div>
		</div>

		<div class="hero-visual">
			<div class="visual-card-wrap">
				<img
					src="/images/hero-vltava-prague.jpg"
					alt="Pohled na Vltavu a Pražský hrad ze Smetanova nábřeží v Praze"
					class="hero-img"
				/>
				<div class="hero-caption">
					<span class="clef-mini">𝄞</span>
					<span>Smetanovo nábřeží a Vltava v Praze • Foto: Daniel Baránek (CC BY-SA 3.0)</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- COMPOSERS HIGHLIGHT GRID -->
<section class="section composers-section">
	<div class="container">
		<div class="section-title-wrap flex-between">
			<div>
				<span class="badge badge-sage">Osobnosti</span>
				<h2>Přední čeští skladatelé</h2>
				<p class="section-subtitle">
					Tvůrci, kteří definovali národní hudební identitu a dobyli přední světová pódia.
				</p>
			</div>
			<a href="/skladatele" class="btn btn-outline hide-mobile">
				Všichni skladatelé →
			</a>
		</div>

		<div class="grid-4">
			{#each featuredComposers as composer}
				<ComposerCard {composer} />
			{/each}
		</div>

		<div class="center-cta show-mobile">
			<a href="/skladatele" class="btn btn-primary">
				Všichni skladatelé →
			</a>
		</div>
	</div>
</section>

<!-- AKTUÁLNĚ NA BLOGU -->
<section class="section blog-section">
	<div class="container">
		<div class="section-title-wrap flex-between">
			<div>
				<span class="badge badge-ochre">Články a zajímavosti</span>
				<h2>Aktuálně na blogu</h2>
				<p class="section-subtitle">
					Příběhy vzniku slavných děl, zajímavosti z archivů i tipy na víkendové hudební výlety.
				</p>
			</div>
			<a href="/blog" class="btn btn-outline hide-mobile">
				Všechny články →
			</a>
		</div>

		<div class="grid-4">
			{#each featuredArticles as article}
				<BlogCard {article} />
			{/each}
		</div>

		<div class="center-cta show-mobile">
			<a href="/blog" class="btn btn-primary">
				Všechny články →
			</a>
		</div>
	</div>
</section>

<!-- PO STOPÁCH ČESKÝCH SKLADATELŮ (MAP SECTION) -->
<section class="section map-section">
	<div class="container">
		<div class="section-title-wrap flex-between">
			<div>
				<span class="badge badge-sage">Interaktivní mapa výletů</span>
				<h2>Po stopách českých skladatelů</h2>
				<p class="section-subtitle">
					Vydejte se do rodných domů, na zámky, do mysliven i do přírody, kde vznikala nesmrtelná česká hudba.
				</p>
			</div>
			<a href="/mapa" class="btn btn-primary hide-mobile">
				Otevřít velkou mapu →
			</a>
		</div>

		<!-- Interactive Map Component -->
		<MapInteractive />
	</div>
</section>

<!-- VÝROČÍ A KALENDÁRIUM -->
<section class="section anniversaries-section">
	<div class="container">
		<div class="anniversaries-box">
			<div class="anniversaries-header">
				<span class="badge badge-gold">Kalendárium & Výročí</span>
				<h2>Připomínáme si významná výročí</h2>
				<p>Oslavy kulatých výročí narození, úmrtí a premiér z české hudební historie.</p>
			</div>

			<div class="anniversaries-timeline">
				{#each featuredAnniversaries as item}
					<div class="anniversary-tile">
						<div class="anniversary-date-col">
							<span class="anniversary-date-pill">{item.day}</span>
							<span class="anniversary-year">{item.year}</span>
						</div>
						<div class="anniversary-avatar">
							<img src={item.portrait} alt={item.composerName} />
						</div>
						<div class="anniversary-text">
							<h4>{item.title}</h4>
							<p class="anniversary-sub">{item.composerName} ({item.yearsRange})</p>
						</div>
						<div class="anniversary-link-col">
							<a href={`/blog/${item.articleSlug}`} class="anniversary-link">
								Přečíst článek →
							</a>
						</div>
					</div>
				{/each}
			</div>

			<div class="anniversaries-footer">
				<a href="/vyroci" class="btn btn-outline">
					Zobrazit celý kalendář výročí →
				</a>
			</div>
		</div>
	</div>
</section>

<!-- INTERAKTIVNÍ HUDEBNÍ KVÍZY TEASER -->
<section class="section edu-teaser-section">
	<div class="container">
		<div class="edu-banner">
			<div class="edu-banner-content">
				<span class="badge badge-ochre">Interaktivní kvízy</span>
				<h2>Otestujte si své hudební znalosti</h2>
				<p>
					Připravili jsme pro žáky, studenty, učitele i milovníky klasické hudby interaktivní znalostní kvízy s okamžitým vyhodnocením a vysvětlením historických souvislostí.
				</p>
				<div class="edu-features">
					<div class="edu-feat-item">
						<span class="edu-icon">𝄞</span>
						<span>Kvízy o Dvořákovi, Smetanovi i venkovských kantorech</span>
					</div>
					<div class="edu-feat-item">
						<span class="edu-icon">✓</span>
						<span>Okamžité odpovědi a vysvětlení historických reálií</span>
					</div>
					<div class="edu-feat-item">
						<span class="edu-icon">💡</span>
						<span>Vhodné pro výuku na ZŠ, ZUŠ i zábavné ověření znalostí</span>
					</div>
				</div>
				<div class="edu-banner-cta">
					<a href="/vzdelavani" class="btn btn-ochre">
						Spustit hudební kvízy →
					</a>
				</div>
			</div>
			<div class="edu-banner-badge">
				<div class="clef-circle">
					<span>𝄞</span>
				</div>
				<span class="badge-sub">Interaktivní kvízy</span>
			</div>
		</div>
	</div>
</section>

<style>
	/* Hero Section */
	.hero-section {
		padding-top: 4.5rem;
		padding-bottom: 4rem;
		border-bottom: 1px solid rgba(140, 119, 94, 0.2);
		background: radial-gradient(circle at 80% 30%, rgba(203, 213, 192, 0.3) 0%, transparent 60%);
	}

	.hero-container {
		display: grid;
		grid-template-columns: 1.15fr 1fr;
		gap: 3.5rem;
		align-items: center;
	}

	.hero-badge {
		margin-bottom: 1.25rem;
	}

	.hero-title {
		font-size: clamp(2.75rem, 5.5vw, 4.2rem);
		color: var(--color-deep-spruce);
		line-height: 1.15;
		margin-bottom: 1.25rem;
	}

	.hero-subtitle {
		font-size: 1.2rem;
		color: var(--color-slate-gray);
		line-height: 1.6;
		margin-bottom: 2rem;
		max-width: 540px;
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 2.75rem;
	}

	.hero-stats {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid rgba(140, 119, 94, 0.25);
	}

	.stat-item {
		display: flex;
		flex-direction: column;
	}

	.stat-num {
		font-family: var(--font-serif);
		font-size: 1.6rem;
		font-weight: 700;
		color: var(--color-deep-spruce);
		line-height: 1;
	}

	.stat-lbl {
		font-size: 0.8rem;
		color: var(--color-slate-gray);
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.stat-sep {
		color: rgba(140, 119, 94, 0.4);
		font-size: 1.5rem;
		font-weight: 300;
	}

	.hero-visual {
		display: flex;
		justify-content: center;
	}

	.visual-card-wrap {
		width: 100%;
		max-width: 540px;
		background: #FAF6F0;
		border: 1px solid rgba(140, 119, 94, 0.3);
		border-radius: var(--radius-lg);
		padding: 1rem;
		box-shadow: var(--shadow-lg);
		position: relative;
	}

	.hero-img {
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 10;
		object-fit: cover;
		border-radius: var(--radius-md);
		border: 1px solid rgba(140, 119, 94, 0.2);
	}

	.hero-caption {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		margin-top: 0.85rem;
		font-family: var(--font-serif);
		font-size: 0.92rem;
		font-style: italic;
		color: var(--color-slate-gray);
		justify-content: center;
	}

	.clef-mini {
		font-size: 1.3rem;
		color: var(--color-warm-ochre);
		font-style: normal;
	}

	/* Helpers */
	.flex-between {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		gap: 1.5rem;
	}

	.hide-mobile {
		display: inline-flex;
	}

	.show-mobile {
		display: none;
	}

	.center-cta {
		margin-top: 2rem;
		text-align: center;
	}

	/* Anniversaries Box */
	.anniversaries-box {
		background-color: var(--color-parchment-soft);
		border: 1px solid rgba(140, 119, 94, 0.3);
		border-radius: var(--radius-lg);
		padding: 3rem 2.5rem;
		box-shadow: var(--shadow-md);
	}

	.anniversaries-header {
		text-align: center;
		max-width: 600px;
		margin: 0 auto 2.5rem;
	}

	.anniversaries-header h2 {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.anniversaries-timeline {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		max-width: 800px;
		margin: 0 auto 2.5rem;
	}

	.anniversary-tile {
		display: grid;
		grid-template-columns: 110px 60px 1fr auto;
		gap: 1.5rem;
		align-items: center;
		background: #FFF;
		border: 1px solid rgba(140, 119, 94, 0.2);
		border-radius: var(--radius-md);
		padding: 1rem 1.5rem;
		transition: all 0.2s ease;
	}

	.anniversary-tile:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-sm);
		border-color: var(--color-warm-ochre);
	}

	.anniversary-date-col {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.anniversary-date-pill {
		font-family: var(--font-serif);
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--color-deep-spruce);
		line-height: 1.1;
	}

	.anniversary-year {
		font-size: 0.85rem;
		color: var(--color-warm-ochre);
		font-weight: 600;
	}

	.anniversary-avatar img {
		width: 52px;
		height: 52px;
		border-radius: var(--radius-full);
		object-fit: cover;
		border: 2px solid var(--color-antique-gold);
	}

	.anniversary-text h4 {
		font-size: 1.15rem;
		color: var(--color-deep-spruce);
		margin-bottom: 0.2rem;
	}

	.anniversary-sub {
		font-size: 0.85rem;
		color: var(--color-slate-gray);
	}

	.anniversary-link {
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--color-warm-ochre);
		white-space: nowrap;
	}

	.anniversary-link:hover {
		color: var(--color-deep-spruce);
	}

	.anniversaries-footer {
		text-align: center;
	}

	/* Edu Teaser Banner */
	.edu-banner {
		background: linear-gradient(135deg, var(--color-deep-spruce) 0%, var(--color-deep-spruce-dark) 100%);
		color: var(--color-parchment);
		border-radius: var(--radius-lg);
		padding: 3.5rem;
		display: grid;
		grid-template-columns: 1.8fr 1fr;
		gap: 3rem;
		align-items: center;
		box-shadow: var(--shadow-lg);
		border: 2px solid var(--color-antique-gold);
	}

	.edu-banner-content h2 {
		color: var(--color-parchment);
		margin-top: 0.65rem;
		margin-bottom: 1rem;
	}

	.edu-banner-content p {
		color: rgba(245, 239, 230, 0.8);
		font-size: 1.05rem;
		line-height: 1.6;
		margin-bottom: 1.75rem;
	}

	.edu-features {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-bottom: 2rem;
	}

	.edu-feat-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.95rem;
		color: var(--color-parchment-soft);
	}

	.edu-banner-badge {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.clef-circle {
		width: 120px;
		height: 120px;
		border-radius: var(--radius-full);
		border: 3px solid var(--color-warm-ochre);
		background: rgba(245, 239, 230, 0.08);
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: var(--font-serif);
		font-size: 4.5rem;
		color: var(--color-warm-ochre);
		margin-bottom: 1rem;
	}

	.badge-sub {
		font-family: var(--font-serif);
		font-size: 1.15rem;
		font-style: italic;
		color: var(--color-warm-ochre-light);
	}

	@media (max-width: 900px) {
		.hero-container {
			grid-template-columns: 1fr;
			gap: 2.5rem;
			text-align: center;
		}
		.hero-actions {
			justify-content: center;
		}
		.hero-stats {
			justify-content: center;
		}
		.hero-subtitle {
			margin-left: auto;
			margin-right: auto;
		}
		.hide-mobile {
			display: none;
		}
		.show-mobile {
			display: block;
		}
		.flex-between {
			flex-direction: column;
			align-items: flex-start;
		}
		.anniversary-tile {
			grid-template-columns: 90px 1fr;
			gap: 1rem;
		}
		.anniversary-avatar, .anniversary-link-col {
			display: none;
		}
		.edu-banner {
			grid-template-columns: 1fr;
			padding: 2.5rem 1.75rem;
		}
		.edu-banner-badge {
			display: none;
		}
	}
</style>
