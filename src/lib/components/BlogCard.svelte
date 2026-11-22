<script lang="ts">
	import type { Article } from '$lib/types';

	interface Props {
		article: Article;
	}

	let { article }: Props = $props();
</script>

<article class="blog-card card">
	<a href={`/blog/${article.slug}`} class="card-inner-link">
		<div class="image-wrapper">
			<img
				src={article.image}
				alt={article.title}
				class="article-img"
				loading="lazy"
				onerror={(e) => {
					const target = e.currentTarget as HTMLImageElement;
					if (target.src.endsWith('.jpg')) {
						target.src = target.src.replace('.jpg', '.svg');
					}
				}}
			/>
			<span class="category-badge badge badge-ochre">{article.category}</span>
		</div>
		<div class="card-body">
			<div class="meta-row">
				<span class="meta-date">{article.date}</span>
				<span class="meta-dot">•</span>
				<span class="meta-time">{article.readTime}</span>
			</div>
			<h3 class="article-title">{article.title}</h3>
			<p class="article-excerpt">{article.excerpt}</p>
			<div class="card-footer-action">
				<span class="read-more">Číst článek</span>
				<span class="arrow">→</span>
			</div>
		</div>
	</a>
</article>

<style>
	.blog-card {
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: var(--color-parchment-soft);
	}

	.card-inner-link {
		display: flex;
		flex-direction: column;
		height: 100%;
		text-decoration: none;
		color: inherit;
	}

	.image-wrapper {
		position: relative;
		aspect-ratio: 16 / 10;
		overflow: hidden;
		background: #E8ECE2;
	}

	.article-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.35s ease;
	}

	.blog-card:hover .article-img {
		transform: scale(1.03);
	}

	.category-badge {
		position: absolute;
		top: 12px;
		left: 12px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
	}

	.card-body {
		padding: 1.35rem;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	.meta-row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.8rem;
		color: var(--color-slate-gray-light);
		margin-bottom: 0.65rem;
	}

	.meta-dot {
		color: var(--color-antique-gold);
	}

	.article-title {
		font-size: 1.25rem;
		color: var(--color-deep-spruce);
		line-height: 1.35;
		margin-bottom: 0.75rem;
	}

	.article-excerpt {
		font-size: 0.9rem;
		color: var(--color-slate-gray);
		line-height: 1.55;
		margin-bottom: 1.25rem;
		flex-grow: 1;
		line-clamp: 3;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.card-footer-action {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-warm-ochre);
		border-top: 1px solid rgba(140, 119, 94, 0.18);
		padding-top: 0.85rem;
		transition: all 0.2s ease;
	}

	.blog-card:hover .card-footer-action {
		color: var(--color-deep-spruce);
		gap: 0.65rem;
	}

	.arrow {
		font-size: 1.1rem;
	}
</style>
