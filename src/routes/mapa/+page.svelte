<script lang="ts">
	import { places } from '$lib/data/places';
	import { composers } from '$lib/data/composers';
	import { trips } from '$lib/data/trips';
	import type { Place } from '$lib/types';
	import MapInteractive from '$lib/components/MapInteractive.svelte';

	let selectedComposerFilter = $state<string>('');
	let selectedPlace = $state<Place>(places[0]);

	let filteredPlaces = $derived(
		selectedComposerFilter
			? places.filter((p) => p.composerSlug === selectedComposerFilter)
			: places
	);

	let filteredTrips = $derived(
		selectedComposerFilter
			? trips.filter((t) => t.composerSlug === selectedComposerFilter)
			: trips
	);

	function handlePlaceSelect(place: Place) {
		selectedPlace = place;
	}
</script>

<svelte:head>
	<title>Mapa výletů po stopách skladatelů | Čeští skladatelé</title>
	<meta name="description" content="Interaktivní průvodce a tipy na výlety do rodných domů, památníků a naučných stezek Antonína Dvořáka, Bedřicha Smetany a dalších mistrů." />
</svelte:head>

<div class="map-page section">
	<div class="container">
		<div class="page-header text-center">
			<span class="badge badge-sage">Turistika & Kultura</span>
			<h1 class="page-title">Mapa výletů po stopách skladatelů</h1>
			<p class="page-subtitle">
				Navštivte autentická místa, rodné domy, zámecké parky a naučné stezky, kde vznikala nejslavnější česká hudební díla.
			</p>
		</div>

		<!-- Two-column trip layout -->
		<div class="map-layout">
			<!-- Main Interactive Map Area -->
			<div class="map-main-area">
				<MapInteractive
					selectedComposerSlug={selectedComposerFilter}
					onPlaceSelect={handlePlaceSelect}
				/>
			</div>

			<!-- Right Sidebar: Filters & Places List -->
			<aside class="places-sidebar">
				<div class="sidebar-box card">
					<h3 class="filter-heading">Filtrovat podle skladatele</h3>
					<div class="filter-chips">
						<button
							class="chip-btn"
							class:active={selectedComposerFilter === ''}
							onclick={() => (selectedComposerFilter = '')}
						>
							Všichni skladatelé
						</button>
						{#each composers as c}
							<button
								class="chip-btn"
								class:active={selectedComposerFilter === c.slug}
								onclick={() => (selectedComposerFilter = c.slug)}
							>
								{c.name.split(' ').slice(-1)[0]}
							</button>
						{/each}
					</div>

					<div class="places-list-section">
						<h4 class="places-list-title">Památná místa ({filteredPlaces.length})</h4>
						<ul class="places-nav-list">
							{#each filteredPlaces as pl}
								<li>
									<button
										class="place-nav-item"
										class:selected={selectedPlace.id === pl.id}
										onclick={() => handlePlaceSelect(pl)}
									>
										<img
											src={pl.image}
											alt={pl.name}
											class="nav-thumb"
											onerror={(e) => {
												const target = e.currentTarget as HTMLImageElement;
												if (target.src.endsWith('.jpg')) {
													target.src = target.src.replace('.jpg', '.svg');
												}
											}}
										/>
										<div class="nav-text">
											<span class="place-nav-name">{pl.name}</span>
											<span class="place-nav-comp">{pl.composerName}</span>
										</div>
									</button>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</aside>
		</div>

		<!-- Section for Recommended Hiking / Educational Trips -->
		{#if filteredTrips.length > 0}
			<div class="trips-showcase-section">
				<div class="section-title-wrap">
					<span class="badge badge-ochre">Kulturní turistika</span>
					<h2>Doporučené výletní trasy a stezky</h2>
					<p class="section-intro">
						Staticky připravené trasy se skutečnými zastávkami a kilometráží, ověřené přímo z pramenů.
					</p>
				</div>

				<div class="trips-grid">
					{#each filteredTrips as trip}
						<article class="trip-grid-card card">
							<div class="trip-img-wrap">
								<img src={trip.coverImage} alt={trip.title} />
								<div class="trip-badge-overlay">
									<span class="badge badge-sage">{trip.lengthKm} km</span>
									<span class="badge badge-ochre">{trip.difficulty}</span>
								</div>
							</div>
							<div class="trip-card-body">
								<span class="trip-comp-name">{trip.composerName}</span>
								<h3>{trip.title}</h3>
								<p class="trip-sub">{trip.subtitle}</p>
								<p class="trip-desc-short">{trip.description}</p>

								<div class="trip-stops-preview">
									<strong>Klíčové zastávky ({trip.waypoints.length}):</strong>
									<ol>
										{#each trip.waypoints.slice(0, 3) as wp}
											<li>{wp.name}</li>
										{/each}
										{#if trip.waypoints.length > 3}
											<li class="more-stops">... a další {trip.waypoints.length - 3} zastavení</li>
										{/if}
									</ol>
								</div>

								<div class="trip-card-actions">
									<a
										href={trip.mapyCzUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="btn btn-primary"
									>
										<span>Otevřít na Mapy.cz</span>
										<span>↗</span>
									</a>
									<a href={`/skladatele/${trip.composerSlug}`} class="btn btn-outline">
										Profil skladatele →
									</a>
								</div>
							</div>
						</article>
					{/each}
				</div>
			</div>
		{/if}
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

	.map-layout {
		display: grid;
		grid-template-columns: 1fr 340px;
		gap: 2.5rem;
		align-items: start;
		margin-bottom: 4rem;
	}

	.places-sidebar {
		display: flex;
		flex-direction: column;
	}

	.sidebar-box {
		padding: 1.5rem;
		background: #FFF;
	}

	.filter-heading {
		font-size: 1.15rem;
		color: var(--color-deep-spruce);
		margin-bottom: 1rem;
	}

	.filter-chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 2rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid rgba(140, 119, 94, 0.2);
	}

	.chip-btn {
		padding: 0.35rem 0.85rem;
		font-size: 0.82rem;
		border-radius: var(--radius-full);
		border: 1px solid rgba(140, 119, 94, 0.3);
		background: var(--color-parchment-soft);
		color: var(--color-slate-gray);
		font-family: var(--font-sans);
		font-weight: 500;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.chip-btn:hover {
		background: var(--color-parchment-deep);
		color: var(--color-deep-spruce);
	}

	.chip-btn.active {
		background: var(--color-deep-spruce);
		color: var(--color-parchment);
		border-color: var(--color-deep-spruce);
	}

	.places-list-title {
		font-size: 1.05rem;
		color: var(--color-deep-spruce);
		margin-bottom: 1rem;
	}

	.places-nav-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		max-height: 480px;
		overflow-y: auto;
	}

	.place-nav-item {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.5rem;
		background: none;
		border: 1px solid transparent;
		border-radius: var(--radius-sm);
		cursor: pointer;
		text-align: left;
		transition: all 0.2s ease;
	}

	.place-nav-item:hover {
		background: rgba(24, 46, 40, 0.04);
	}

	.place-nav-item.selected {
		background: rgba(194, 120, 69, 0.1);
		border-color: var(--color-warm-ochre);
	}

	.nav-thumb {
		width: 48px;
		height: 48px;
		border-radius: 4px;
		object-fit: cover;
		flex-shrink: 0;
	}

	.nav-text {
		display: flex;
		flex-direction: column;
	}

	.place-nav-name {
		font-family: var(--font-serif);
		font-weight: 700;
		font-size: 0.95rem;
		color: var(--color-deep-spruce);
	}

	.place-nav-comp {
		font-size: 0.8rem;
		color: var(--color-slate-gray);
	}

	/* Trips Showcase */
	.trips-showcase-section {
		border-top: 1px solid rgba(140, 119, 94, 0.2);
		padding-top: 3.5rem;
	}

	.section-title-wrap {
		margin-bottom: 2rem;
	}

	.section-title-wrap h2 {
		font-size: 1.8rem;
		color: var(--color-deep-spruce);
		margin-top: 0.35rem;
		margin-bottom: 0.25rem;
	}

	.section-intro {
		color: var(--color-slate-gray);
		font-size: 1.05rem;
	}

	.trips-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
		gap: 2rem;
	}

	.trip-grid-card {
		background: #FFF;
		border: 1px solid rgba(140, 119, 94, 0.2);
		border-radius: var(--radius-md);
		overflow: hidden;
		display: flex;
		flex-direction: column;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.trip-grid-card:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow-md);
	}

	.trip-img-wrap {
		position: relative;
		height: 180px;
	}

	.trip-img-wrap img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.trip-badge-overlay {
		position: absolute;
		top: 12px;
		right: 12px;
		display: flex;
		gap: 0.5rem;
	}

	.trip-card-body {
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.trip-comp-name {
		font-size: 0.8rem;
		text-transform: uppercase;
		font-weight: 700;
		color: var(--color-warm-ochre);
		letter-spacing: 0.05em;
		margin-bottom: 0.25rem;
	}

	.trip-card-body h3 {
		font-size: 1.25rem;
		color: var(--color-deep-spruce);
		margin-bottom: 0.35rem;
	}

	.trip-sub {
		font-size: 0.88rem;
		color: var(--color-slate-gray);
		margin-bottom: 0.75rem;
		line-height: 1.4;
	}

	.trip-desc-short {
		font-size: 0.92rem;
		line-height: 1.5;
		color: var(--color-charcoal);
		margin-bottom: 1.25rem;
	}

	.trip-stops-preview {
		background: var(--color-parchment-soft);
		padding: 1rem;
		border-radius: var(--radius-sm);
		font-size: 0.88rem;
		margin-bottom: 1.5rem;
	}

	.trip-stops-preview ol {
		margin: 0.35rem 0 0 1.2rem;
		padding: 0;
	}

	.trip-stops-preview li {
		margin-bottom: 0.2rem;
	}

	.more-stops {
		color: var(--color-slate-gray);
		font-style: italic;
	}

	.trip-card-actions {
		display: flex;
		gap: 0.75rem;
		margin-top: auto;
		flex-wrap: wrap;
	}

	@media (max-width: 1024px) {
		.map-layout {
			grid-template-columns: 1fr;
		}
		.trips-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
