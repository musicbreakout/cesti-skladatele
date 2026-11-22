<script lang="ts">
	import type { Composer } from '$lib/types';

	interface Props {
		composer: Composer;
	}

	let { composer }: Props = $props();
</script>

<article class="composer-card card">
	<a href={`/skladatele/${composer.slug}`} class="card-inner-link">
		<div class="portrait-wrapper">
			<img
				src={composer.portrait}
				alt={composer.name}
				class="portrait-img"
				loading="lazy"
				onerror={(e) => {
					//  Fallback to svg if jpg was requested
					const target = e.currentTarget as HTMLImageElement;
					if (target.src.endsWith('.jpg')) {
						target.src = target.src.replace('.jpg', '.svg');
					}
				}}
			/>
			<span class="period-badge badge badge-sage">{composer.period}</span>
		</div>
		<div class="card-body">
			<h3 class="composer-name">{composer.name}</h3>
			<p class="composer-years">{composer.birthYear} – {composer.deathYear}</p>
			<p class="composer-tagline">{composer.tagline}</p>
			<div class="card-footer-action">
				<span class="link-label">Přečíst profil</span>
				<span class="link-arrow">→</span>
			</div>
		</div>
	</a>
</article>

<style>
	.composer-card {
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

	.portrait-wrapper {
		position: relative;
		aspect-ratio: 4 / 3.4;
		overflow: hidden;
		background: #EDE4D6;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.portrait-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.4s ease;
	}

	.composer-card:hover .portrait-img {
		transform: scale(1.04);
	}

	.period-badge {
		position: absolute;
		top: 12px;
		right: 12px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
	}

	.card-body {
		padding: 1.25rem 1.35rem 1.35rem;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	.composer-name {
		font-size: 1.25rem;
		color: var(--color-deep-spruce);
		margin-bottom: 0.25rem;
		line-height: 1.3;
	}

	.composer-years {
		font-family: var(--font-sans);
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--color-warm-ochre);
		letter-spacing: 0.04em;
		margin-bottom: 0.65rem;
	}

	.composer-tagline {
		font-size: 0.875rem;
		color: var(--color-slate-gray);
		line-height: 1.45;
		margin-bottom: 1.25rem;
		flex-grow: 1;
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
		transition: gap 0.2s ease, color 0.2s ease;
	}

	.composer-card:hover .card-footer-action {
		color: var(--color-deep-spruce);
		gap: 0.65rem;
	}

	.link-arrow {
		font-size: 1.1rem;
		transition: transform 0.2s ease;
	}

	.composer-card:hover .link-arrow {
		transform: translateX(3px);
	}
</style>
