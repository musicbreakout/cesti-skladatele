<script lang="ts">
	import { places } from '$lib/data/places';
	import type { Place } from '$lib/types';

	interface Props {
		selectedComposerSlug?: string;
		onPlaceSelect?: (place: Place) => void;
	}

	let { selectedComposerSlug = '', onPlaceSelect }: Props = $props();

	//  Active place in map preview
	let activePlaceId = $state<string>('litomysl');

	let filteredPlaces = $derived(
		selectedComposerSlug
			? places.filter((p) => p.composerSlug === selectedComposerSlug)
			: places
	);

	let activePlace = $derived(
		places.find((p) => p.id === activePlaceId) || places[0]
	);

	function selectPlace(place: Place) {
		activePlaceId = place.id;
		if (onPlaceSelect) {
			onPlaceSelect(place);
		}
	}
</script>

<div class="map-interactive-wrapper">
	<!-- Map Container with SVG -->
	<div class="map-stage">
		<svg
			viewBox="0 0 900 520"
			class="czech-map-svg"
			xmlns="http:// www.w3.org/2000/svg"
			aria-label="Interaktivní mapa míst spojených s českými skladateli"
		>
			<defs>
				<!-- Subtle parchment gradient for map area -->
				<linearGradient id="mapBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stop-color="#FAF6F0" stop-opacity="0.95"/>
					<stop offset="100%" stop-color="#EDE4D6" stop-opacity="0.95"/>
				</linearGradient>
				<filter id="mapShadow" x="-10%" y="-10%" width="120%" height="120%">
					<feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#182E28" flood-opacity="0.08"/>
				</filter>
			</defs>

			<!-- Stylized stylized contour of Czech Republic -->
			<path
				d="M 120 230 
				   C 110 180, 160 130, 240 120 
				   C 290 115, 340 70, 420 80 
				   C 490 88, 540 140, 620 130 
				   C 680 120, 750 160, 810 200 
				   C 860 230, 850 290, 800 320 
				   C 760 350, 740 400, 680 430 
				   C 600 470, 520 440, 450 420 
				   C 380 400, 310 440, 230 420 
				   C 150 400, 90 350, 80 290 
				   Z"
				fill="url(#mapBgGrad)"
				stroke="#8C775E"
				stroke-width="2"
				stroke-dasharray="6 3"
				filter="url(#mapShadow)"
			/>

			<!-- Historical Bohemia / Moravia soft region division line -->
			<path
				d="M 520 120 Q 510 270 540 430"
				fill="none"
				stroke="#CBD5C0"
				stroke-width="2"
				stroke-dasharray="4 4"
				opacity="0.6"
			/>

			<!-- Dotted journey trail connecting composer hometowns -->
			<path
				d="M 387 176 L 405 234 L 342 322 L 567 270 L 558 312 L 756 327"
				fill="none"
				stroke="#C27845"
				stroke-width="2.5"
				stroke-dasharray="5 5"
				opacity="0.65"
			/>

			<!-- Major rivers (Vltava & Labe stylized) -->
			<path
				d="M 342 420 Q 370 330 405 234 Q 390 170 395 120"
				fill="none"
				stroke="#9CB3A8"
				stroke-width="2"
				opacity="0.5"
			/>

			<!-- Interactive Place Markers -->
			{#each filteredPlaces as place}
				{@const isCurrent = activePlaceId === place.id}
				{@const cx = (place.coordinates.mapX / 100) * 900}
				{@const cy = (place.coordinates.mapY / 100) * 520}

				<g
					class="map-pin-group"
					class:active={isCurrent}
					onclick={() => selectPlace(place)}
					role="button"
					tabindex="0"
					onkeydown={(e) => e.key === 'Enter' && selectPlace(place)}
				>
					<!-- Pulse ring if active -->
					{#if isCurrent}
						<circle cx={cx} cy={cy} r="22" fill="#C27845" opacity="0.2">
							<animate attributeName="r" values="16;28;16" dur="2s" repeatCount="indefinite" />
							<animate attributeName="opacity" values="0.3;0.05;0.3" dur="2s" repeatCount="indefinite" />
						</circle>
					{/if}

					<!-- Outer marker ring -->
					<circle
						cx={cx}
						cy={cy}
						r={isCurrent ? "12" : "9"}
						fill={isCurrent ? "#C27845" : "#182E28"}
						stroke="#FAF6F0"
						stroke-width="2.5"
						class="pin-circle"
					/>

					<!-- Inner core dot -->
					<circle
						cx={cx}
						cy={cy}
						r="4"
						fill="#FAF6F0"
					/>

					<!-- Label -->
					<text
						x={cx}
						y={cy - (isCurrent ? 16 : 13)}
						text-anchor="middle"
						class="pin-label"
						class:active-label={isCurrent}
					>
						{place.name.split('–')[0].trim()}
					</text>
				</g>
			{/each}
		</svg>
	</div>

	<!-- Detail vybraného místa -->
	<aside class="selected-place-card card">
		<div class="card-thumb">
			<img
				src={activePlace.image}
				alt={activePlace.name}
				onerror={(e) => {
					const target = e.currentTarget as HTMLImageElement;
					if (target.src.endsWith('.jpg')) {
						target.src = target.src.replace('.jpg', '.svg');
					}
				}}
			/>
			<span class="composer-chip">{activePlace.composerName}</span>
		</div>
		<div class="card-details">
			<h4 class="place-title">{activePlace.name}</h4>
			<p class="place-subtitle">{activePlace.subtitle}</p>

			<div class="distance-badge-row">
				<span class="distance-item">📍 {activePlace.distanceFromPragueKm} km z Prahy</span>
				<span class="distance-item">⏱ {activePlace.driveTimeHours}</span>
			</div>

			<p class="place-snippet">{activePlace.description.slice(0, 140)}...</p>

			<div class="card-actions">
				<a href={`/mista/${activePlace.slug}`} class="btn btn-primary btn-sm w-full">
					Zobrazit detail výletu →
				</a>
			</div>
		</div>
	</aside>
</div>

<style>
	.map-interactive-wrapper {
		display: grid;
		grid-template-columns: 1fr 340px;
		gap: 2rem;
		align-items: center;
		background: linear-gradient(135deg, rgba(250, 246, 240, 0.7) 0%, rgba(232, 236, 226, 0.5) 100%);
		border: 1px solid rgba(140, 119, 94, 0.25);
		border-radius: var(--radius-lg);
		padding: 1.75rem;
		box-shadow: var(--shadow-md);
	}

	.map-stage {
		position: relative;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.czech-map-svg {
		width: 100%;
		height: auto;
		max-height: 480px;
		filter: drop-shadow(0 6px 12px rgba(24, 46, 40, 0.05));
	}

	.map-pin-group {
		cursor: pointer;
		outline: none;
		transition: transform 0.2s ease;
	}

	.map-pin-group:hover .pin-circle {
		fill: var(--color-warm-ochre);
		transform: scale(1.2);
		transform-origin: center;
	}

	.pin-circle {
		transition: all 0.25s ease;
		filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25));
	}

	.pin-label {
		font-family: var(--font-sans);
		font-size: 13px;
		font-weight: 700;
		fill: var(--color-deep-spruce);
		paint-order: stroke;
		stroke: #FAF6F0;
		stroke-width: 3px;
		stroke-linecap: round;
		stroke-linejoin: round;
		letter-spacing: 0.02em;
		transition: all 0.2s ease;
	}

	.pin-label.active-label {
		font-size: 15px;
		fill: var(--color-warm-ochre);
		font-weight: 800;
	}

	/* Location card */
	.selected-place-card {
		background-color: var(--color-parchment-soft);
		border: 1px solid rgba(140, 119, 94, 0.3);
		border-radius: var(--radius-md);
		overflow: hidden;
		box-shadow: var(--shadow-sm);
	}

	.card-thumb {
		position: relative;
		height: 160px;
		overflow: hidden;
	}

	.card-thumb img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.composer-chip {
		position: absolute;
		bottom: 10px;
		left: 10px;
		background: rgba(24, 46, 40, 0.9);
		color: var(--color-parchment);
		font-size: 0.75rem;
		font-weight: 600;
		padding: 0.25rem 0.65rem;
		border-radius: var(--radius-full);
	}

	.card-details {
		padding: 1.25rem;
	}

	.place-title {
		font-size: 1.35rem;
		color: var(--color-deep-spruce);
		margin-bottom: 0.25rem;
	}

	.place-subtitle {
		font-size: 0.85rem;
		color: var(--color-warm-ochre);
		font-weight: 600;
		margin-bottom: 0.85rem;
	}

	.distance-badge-row {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		font-size: 0.8rem;
		color: var(--color-slate-gray);
		margin-bottom: 0.85rem;
		background: rgba(24, 46, 40, 0.04);
		padding: 0.5rem 0.75rem;
		border-radius: var(--radius-sm);
	}

	.place-snippet {
		font-size: 0.85rem;
		color: var(--color-slate-gray);
		line-height: 1.5;
		margin-bottom: 1.25rem;
	}

	.w-full {
		width: 100%;
	}

	.btn-sm {
		padding: 0.6rem 1rem;
		font-size: 0.875rem;
	}

	@media (max-width: 900px) {
		.map-interactive-wrapper {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
	}

	@media (max-width: 600px) {
		.map-interactive-wrapper {
			padding: 1rem 0.75rem;
		}
		.pin-label {
			font-size: 11px;
		}
		.pin-label.active-label {
			font-size: 13px;
		}
	}
</style>
