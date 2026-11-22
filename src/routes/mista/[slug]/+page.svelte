<script lang="ts">
	import { page } from '$app/state';
	import { places, getPlaceBySlug } from '$lib/data/places';
	import { getComposerBySlug } from '$lib/data/composers';
	import { getTripBySlug } from '$lib/data/trips';

	let place = $derived(
		getPlaceBySlug(page.params.slug || '') || places[0]
	);

	let composer = $derived(
		getComposerBySlug(place.composerSlug)
	);

	let relatedTrip = $derived(
		place.tripSlug ? getTripBySlug(place.tripSlug) : undefined
	);
</script>

<svelte:head>
	<title>{place.name} | {place.subtitle} | Čeští skladatelé</title>
	<meta name="description" content={`${place.name} – ${place.subtitle}. Tipy na výlet, památník, vzdálenost a historie.`} />
</svelte:head>

<div class="place-detail-page section">
	<div class="container">
		<!-- Breadcrumbs -->
		<nav class="breadcrumb-trail" aria-label="Drobečková navigace">
			<a href="/mapa">← Zpět na Mapu výletů</a>
			<span class="sep">/</span>
			<span>{place.name}</span>
		</nav>

		<div class="place-card-main card">
			<!-- Header / Title -->
			<div class="place-header">
				<span class="badge badge-ochre">{place.composerName}</span>
				<h1 class="place-name">{place.name}</h1>
				<p class="place-sub">{place.subtitle}</p>
			</div>

			<!-- Visual Image Banner -->
			<div class="place-banner">
				<img
					src={place.image}
					alt={place.name}
					onerror={(e) => {
						const target = e.currentTarget as HTMLImageElement;
						if (target.src.endsWith('.jpg')) {
							target.src = target.src.replace('.jpg', '.svg');
						}
					}}
				/>
			</div>

			<!-- Travel Badges Info -->
			<div class="travel-badges-bar">
				<div class="travel-item">
					<span class="t-icon">🚗</span>
					<span><strong>Vzdálenost:</strong> {place.distanceFromPragueKm} km z Prahy</span>
				</div>
				<div class="travel-sep">•</div>
				<div class="travel-item">
					<span class="t-icon">⏱</span>
					<span><strong>Doba jízdy:</strong> {place.driveTimeHours}</span>
				</div>
				<div class="travel-sep">•</div>
				<div class="travel-item">
					<span class="t-icon">📍</span>
					<span><strong>Souřadnice:</strong> {place.coordinates.lat.toFixed(3)}° N, {place.coordinates.lng.toFixed(3)}° E</span>
				</div>
			</div>

			<!-- Description Content -->
			<div class="place-content">
				<div class="place-story">
					<h2>O místě a hudební historii</h2>
					<p>{place.description}</p>

					<!-- Navigation CTAs -->
					<div class="maps-cta-row">
						<a
							href={`https://mapy.cz/turisticka?q=${place.coordinates.lat},${place.coordinates.lng}`}
							target="_blank"
							rel="noopener noreferrer"
							class="btn btn-primary"
						>
							<span>Otevřít na Mapy.cz</span>
							<span>↗</span>
						</a>
						<a
							href={`https://www.google.com/maps?q=${place.coordinates.lat},${place.coordinates.lng}`}
							target="_blank"
							rel="noopener noreferrer"
							class="btn btn-outline"
						>
							<span>Google Maps</span>
							<span>↗</span>
						</a>
						{#if composer}
							<a href={`/skladatele/${composer.slug}`} class="btn btn-outline">
								Více o skladateli ({composer.name}) →
							</a>
						{/if}
					</div>
				</div>

				<!-- Tips for Trip -->
				<div class="trip-tips-box card">
					<h3>Tipy na výlet a prohlídku</h3>
					<ul class="tips-list">
						{#each place.tips as tip}
							<li>
								<span class="tip-bullet">◆</span>
								<span>{tip}</span>
							</li>
						{/each}
					</ul>

					{#if relatedTrip}
						<div class="connected-trip-box">
							<h4>Doporučená trasa v okolí:</h4>
							<p><strong>{relatedTrip.title}</strong> ({relatedTrip.lengthKm} km, {relatedTrip.durationHours})</p>
							<a
								href={relatedTrip.mapyCzUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="btn btn-sm btn-ochre mt-2"
							>
								Otevřít trasu na Mapy.cz ↗
							</a>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.breadcrumb-trail {
		font-size: 0.9rem;
		margin-bottom: 2rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--color-slate-gray);
	}

	.breadcrumb-trail a {
		font-weight: 600;
		color: var(--color-deep-spruce);
	}

	.breadcrumb-trail a:hover {
		color: var(--color-warm-ochre);
	}

	.sep {
		color: rgba(140, 119, 94, 0.4);
	}

	.place-card-main {
		background: #FFF;
		border: 1px solid rgba(140, 119, 94, 0.25);
		border-radius: var(--radius-lg);
		padding: 2.5rem;
		box-shadow: var(--shadow-md);
	}

	.place-header {
		margin-bottom: 1.5rem;
	}

	.place-name {
		font-size: clamp(2rem, 4vw, 3rem);
		color: var(--color-deep-spruce);
		margin-top: 0.5rem;
		margin-bottom: 0.25rem;
	}

	.place-sub {
		font-size: 1.15rem;
		color: var(--color-warm-ochre);
		font-weight: 600;
	}

	.place-banner {
		width: 100%;
		height: 380px;
		border-radius: var(--radius-md);
		overflow: hidden;
		margin-bottom: 1.5rem;
		box-shadow: var(--shadow-sm);
	}

	.place-banner img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.travel-badges-bar {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
		background: var(--color-parchment-soft);
		border: 1px solid rgba(140, 119, 94, 0.2);
		border-radius: var(--radius-sm);
		padding: 0.85rem 1.25rem;
		margin-bottom: 2.5rem;
		font-size: 0.92rem;
		color: var(--color-deep-spruce);
	}

	.travel-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.travel-sep {
		color: var(--color-antique-gold);
	}

	.place-content {
		display: grid;
		grid-template-columns: 1.6fr 1fr;
		gap: 3rem;
		align-items: start;
	}

	.place-story h2 {
		margin-bottom: 1rem;
	}

	.place-story p {
		font-size: 1.05rem;
		line-height: 1.75;
		margin-bottom: 2rem;
	}

	.maps-cta-row {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.trip-tips-box {
		padding: 1.75rem;
		background: var(--color-parchment-soft);
		border: 1px solid rgba(140, 119, 94, 0.25);
	}

	.trip-tips-box h3 {
		font-size: 1.25rem;
		color: var(--color-deep-spruce);
		margin-bottom: 1.25rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid rgba(140, 119, 94, 0.2);
	}

	.tips-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.95rem;
	}

	.tips-list li {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		font-size: 0.95rem;
		color: var(--color-classic-black);
		line-height: 1.5;
	}

	.connected-trip-box {
		margin-top: 1.5rem;
		padding-top: 1.25rem;
		border-top: 1px dashed rgba(140, 119, 94, 0.35);
	}

	.connected-trip-box h4 {
		font-size: 1.05rem;
		color: var(--color-warm-ochre);
		margin-bottom: 0.35rem;
	}

	.connected-trip-box p {
		font-size: 0.92rem;
		color: var(--color-slate-gray);
		margin-bottom: 0.75rem;
	}

	.mt-2 {
		margin-top: 0.5rem;
	}

	.tip-bullet {
		color: var(--color-warm-ochre);
		font-size: 0.8rem;
		margin-top: 0.2rem;
	}

	@media (max-width: 900px) {
		.place-content {
			grid-template-columns: 1fr;
		}
		.place-card-main {
			padding: 1.5rem;
		}
		.place-banner {
			height: 240px;
		}
	}
</style>
