<script lang="ts">
	import { page } from '$app/state';
	import { articles, getArticleBySlug } from '$lib/data/articles';
	import { getComposerBySlug } from '$lib/data/composers';

	let article = $derived(
		getArticleBySlug(page.params.slug || '') || articles[0]
	);

	let composer = $derived(
		article.composerSlug ? getComposerBySlug(article.composerSlug) : undefined
	);

	let otherArticles = $derived(
		articles.filter((a) => a.id !== article.id).slice(0, 2)
	);
</script>

<svelte:head>
	<title>{article.title} | Čeští skladatelé</title>
	<meta name="description" content={article.excerpt} />
</svelte:head>

<article class="article-reading-page section">
	<div class="container article-container">
		<!-- Back link -->
		<a href="/blog" class="back-link">← Zpět na všechny články</a>

		<!-- Article Header -->
		<header class="article-header">
			<span class="badge badge-ochre">{article.category}</span>
			<h1 class="article-title">{article.title}</h1>
			<div class="article-meta">
				<span>📅 {article.date}</span>
				<span class="sep">•</span>
				<span>⏱ {article.readTime}</span>
				{#if article.composerName}
					<span class="sep">•</span>
					<span>👤 {article.composerName}</span>
				{/if}
			</div>
		</header>

		<!-- Main Banner Image -->
		<div class="article-hero-banner card">
			<img
				src={article.image}
				alt={article.title}
				onerror={(e) => {
					const target = e.currentTarget as HTMLImageElement;
					if (target.src.endsWith('.jpg')) {
						target.src = target.src.replace('.jpg', '.svg');
					}
				}}
			/>
		</div>

		<!-- Lead Excerpt -->
		<p class="article-lead">{article.excerpt}</p>

		<!-- Article Body Content -->
		<div class="article-body">
			{#if article.content}
				{#each article.content as p}
					<p>{p}</p>
				{/each}
			{:else}
				<p>Kompletní článek zkoumá historický kontext vzniku této skladby, reflexi dobové kritiky i trvalý odkaz pro moderní interprety a posluchače.</p>
			{/if}
		</div>

		{#if composer}
			<!-- Composer bio card at bottom of article -->
			<div class="composer-author-box card">
				<img src={composer.portrait} alt={composer.name} class="author-portrait" />
				<div>
					<span class="author-sub">O skladateli</span>
					<h3>{composer.name} ({composer.birthYear}–{composer.deathYear})</h3>
					<p>{composer.tagline}</p>
					<a href={`/skladatele/${composer.slug}`} class="author-link">
						Zobrazit kompletní profil skladatele →
					</a>
				</div>
			</div>
		{/if}

		<!-- Other articles recommendation -->
		<div class="more-articles-section">
			<h3>Další doporučené články</h3>
			<div class="grid-2">
				{#each otherArticles as other}
					<div class="card mini-card">
						<h4>{other.title}</h4>
						<p>{other.excerpt.slice(0, 100)}...</p>
						<a href={`/blog/${other.slug}`} class="mini-link">Číst dále →</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
</article>

<style>
	.article-container {
		max-width: 820px;
	}

	.back-link {
		display: inline-block;
		font-weight: 600;
		color: var(--color-deep-spruce);
		margin-bottom: 2rem;
		transition: transform 0.2s ease;
	}

	.back-link:hover {
		transform: translateX(-3px);
		color: var(--color-warm-ochre);
	}

	.article-header {
		margin-bottom: 2rem;
	}

	.article-title {
		font-size: clamp(2.2rem, 4.5vw, 3.2rem);
		color: var(--color-deep-spruce);
		line-height: 1.2;
		margin-top: 0.75rem;
		margin-bottom: 1rem;
	}

	.article-meta {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.9rem;
		color: var(--color-slate-gray);
	}

	.sep {
		color: var(--color-antique-gold);
	}

	.article-hero-banner {
		height: 380px;
		overflow: hidden;
		margin-bottom: 2.5rem;
	}

	.article-hero-banner img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.article-lead {
		font-size: 1.25rem;
		font-family: var(--font-serif);
		font-style: italic;
		color: var(--color-deep-spruce);
		line-height: 1.7;
		margin-bottom: 2rem;
		padding-left: 1.25rem;
		border-left: 3px solid var(--color-warm-ochre);
	}

	.article-body p {
		font-size: 1.125rem;
		line-height: 1.85;
		color: var(--color-classic-black);
		margin-bottom: 1.5rem;
	}

	.composer-author-box {
		margin-top: 3.5rem;
		padding: 2rem;
		display: flex;
		gap: 1.5rem;
		align-items: center;
		background: #FFF;
	}

	.author-portrait {
		width: 80px;
		height: 95px;
		border-radius: var(--radius-sm);
		object-fit: cover;
		border: 2px solid var(--color-antique-gold);
	}

	.author-sub {
		font-size: 0.75rem;
		text-transform: uppercase;
		font-weight: 700;
		color: var(--color-warm-ochre);
		letter-spacing: 0.05em;
	}

	.author-link {
		display: inline-block;
		margin-top: 0.5rem;
		font-weight: 600;
		color: var(--color-warm-ochre);
	}

	.more-articles-section {
		margin-top: 4rem;
		padding-top: 2.5rem;
		border-top: 1px solid rgba(140, 119, 94, 0.25);
	}

	.more-articles-section h3 {
		margin-bottom: 1.5rem;
	}

	.mini-card {
		padding: 1.5rem;
		background: #FFF;
	}

	.mini-card h4 {
		margin-bottom: 0.5rem;
	}

	.mini-card p {
		font-size: 0.9rem;
		margin-bottom: 1rem;
	}

	.mini-link {
		font-weight: 600;
		color: var(--color-warm-ochre);
	}

	@media (max-width: 640px) {
		.composer-author-box {
			flex-direction: column;
			text-align: center;
		}
		.article-hero-banner {
			height: 220px;
		}
	}
</style>
