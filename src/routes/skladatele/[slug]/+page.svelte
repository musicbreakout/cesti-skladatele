<script lang="ts">
	import { page } from '$app/state';
	import { composers, getComposerBySlug } from '$lib/data/composers';
	import { places } from '$lib/data/places';
	import { getTripsByComposerSlug } from '$lib/data/trips';

	let composer = $derived(
		getComposerBySlug(page.params.slug || '') || composers[0]
	);

	let activeTab = $state<'zivotopis' | 'dilo' | 'mista'>(
		(page.url.searchParams.get('tab') as 'zivotopis' | 'dilo' | 'mista') || 'zivotopis'
	);

	// Associated places
	let relatedPlaces = $derived(
		places.filter((p) => p.composerSlug === composer.slug)
	);

	// Associated hiking/educational trips
	let composerTrips = $derived(
		getTripsByComposerSlug(composer.slug)
	);
</script>

<svelte:head>
	<title>{composer.name} ({composer.birthYear}–{composer.deathYear}) | Čeští skladatelé</title>
	<meta name="description" content={`${composer.name} – ${composer.tagline}. Životopis, nejznámější díla, zajímavosti, výletní trasy a památná místa.`} />
</svelte:head>

<div class="composer-detail-page">
	<!-- Hero Banner -->
	<div class="composer-hero">
		<div class="container hero-inner">
			<div class="hero-card">
				<div class="hero-portrait-wrapper">
					<div class="hero-portrait">
						<img
							src={composer.portrait}
							alt={composer.name}
							onerror={(e) => {
								const target = e.currentTarget as HTMLImageElement;
								if (target.src.endsWith('.jpg')) {
									target.src = target.src.replace('.jpg', '.svg');
								}
							}}
						/>
					</div>
					{#if composer.id === 'dvorak'}
						<span class="portrait-credit">Foto: Jan Mulač (1901) • Public Domain</span>
					{/if}
				</div>
				<div class="hero-info">
					<span class="badge badge-ochre">{composer.period}</span>
					<h1 class="composer-name">{composer.name}</h1>
					<p class="composer-years-line">
						<span class="years">{composer.birthYear} – {composer.deathYear}</span>
						<span class="sep">•</span>
						<span class="anniv">{composer.anniversaryNote || 'Česká hudební tradice'}</span>
					</p>
					<p class="composer-tagline">{composer.tagline}</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Navigation Tabs -->
	<div class="tabs-bar">
		<div class="container">
			<nav class="tabs-nav" aria-label="Sekce profilu skladatele">
				<button
					class="tab-btn"
					class:active={activeTab === 'zivotopis'}
					onclick={() => (activeTab = 'zivotopis')}
				>
					Životopis
				</button>
				<button
					class="tab-btn"
					class:active={activeTab === 'dilo'}
					onclick={() => (activeTab = 'dilo')}
				>
					Dílo ({composer.famousWorks.length})
				</button>
				<button
					class="tab-btn"
					class:active={activeTab === 'mista'}
					onclick={() => (activeTab = 'mista')}
				>
					Místa a výlety ({composer.places.length + composerTrips.length})
				</button>
			</nav>
		</div>
	</div>

	<!-- Main Content Area with Sidebar -->
	<div class="container content-grid section">
		<!-- Left Main Column -->
		<div class="main-column">
			<!-- Quote Block (shown permanently as centerpiece) -->
			<div class="quote-box">
				<p>{composer.quote.text}</p>
				{#if composer.quote.source}
					<span class="quote-author">— {composer.quote.source}</span>
				{/if}
			</div>

			{#if activeTab === 'zivotopis'}
				<section class="tab-panel">
					<h2>Životní příběh a tvůrčí cesta</h2>
					{#each composer.bio as paragraph}
						<p class="bio-text">{paragraph}</p>
					{/each}
				</section>
			{:else if activeTab === 'dilo'}
				<section class="tab-panel">
					<h2>Významná díla a kompozice</h2>
					<p class="section-intro">Přehled stěžejních děl, která formovala českou i světovou hudební historii.</p>
					<div class="works-list">
						{#each composer.famousWorks as work}
							<div class="work-item card">
								<div class="work-header">
									<div>
										<h4>{work.title}</h4>
										<span class="work-genre">{work.genre}</span>
									</div>
									{#if work.year}
										<span class="work-year badge badge-sage">{work.year}</span>
									{/if}
								</div>
								{#if work.description}
									<p class="work-desc">{work.description}</p>
								{/if}
							</div>
						{/each}
					</div>
				</section>
			{:else if activeTab === 'mista'}
				<section class="tab-panel">
					{#if composerTrips.length > 0}
						<div class="trips-section">
							<div class="section-title-wrap">
								<span class="badge badge-ochre">Kulturní turistika</span>
								<h2>Doporučené výletní trasy a stezky</h2>
								<p class="section-intro">Vydejte se do autentické krajiny, která skladatele přímo inspirovala k tvorbě.</p>
							</div>

							<div class="trips-list">
								{#each composerTrips as trip}
									<article class="trip-full-card card">
										<div class="trip-card-head">
											<div class="trip-card-meta">
												<span class="badge badge-sage">Trasa {trip.lengthKm} km</span>
												<span class="badge badge-outline">⏱ {trip.durationHours}</span>
												<span class="badge badge-outline">Převýšení: {trip.elevationGainM} m</span>
												<span class="badge badge-ochre">Náročnost: {trip.difficulty}</span>
											</div>
											<h3>{trip.title}</h3>
											<p class="trip-sub">{trip.subtitle}</p>
											<p class="trip-desc">{trip.description}</p>
										</div>

										<div class="trip-waypoints-block">
											<h4>Zastávky na trase:</h4>
											<ol class="waypoints-timeline">
												{#each trip.waypoints as wp}
													<li class="waypoint-item">
														<div class="wp-badge">{wp.order}</div>
														<div class="wp-body">
															<div class="wp-head">
																<strong>{wp.name}</strong>
																{#if wp.highlight}
																	<span class="wp-highlight badge badge-sage">{wp.highlight}</span>
																{/if}
															</div>
															<p class="wp-desc">{wp.description}</p>
															{#if wp.image}
																<div class="wp-img-wrap">
																	<img src={wp.image} alt={wp.name} />
																</div>
															{/if}
														</div>
													</li>
												{/each}
											</ol>
										</div>

										{#if trip.tips && trip.tips.length > 0}
											<div class="trip-tips-inline">
												<strong>Tipy pro návštěvníky:</strong>
												<ul>
													{#each trip.tips as tip}
														<li>{tip}</li>
													{/each}
												</ul>
											</div>
										{/if}

										<div class="trip-card-footer">
											<a
												href={trip.mapyCzUrl}
												target="_blank"
												rel="noopener noreferrer"
												class="btn btn-primary"
											>
												<span>Otevřít trasu na Mapy.cz</span>
												<span>↗</span>
											</a>
											<a href="/mapa" class="btn btn-outline">
												Zobrazit na interaktivní mapě webu →
											</a>
										</div>
									</article>
								{/each}
							</div>
						</div>

						<div class="section-divider"></div>
					{/if}

					<h2>Památná místa spojená se skladatelem</h2>
					<p class="section-intro">Rodné domy, zámky, letní vily a pietní místa v České republice.</p>
					<div class="places-grid">
						{#each composer.places as place}
							<div class="place-card card">
								<div class="place-img-wrap">
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
								<div class="place-body">
									<h4>{place.name}</h4>
									<p class="place-rel">{place.relation}</p>
									<a href={`/mista/${place.slug}`} class="place-link">
										Podrobný profil místa a mapa →
									</a>
								</div>
							</div>
						{/each}
					</div>
				</section>
			{/if}
		</div>

		<!-- Right Sidebar: Rychlá fakta & Nejznámější díla -->
		<aside class="sidebar">
			{#if composer.quickFacts}
				<div class="sidebar-card card quick-facts-card">
					<div class="sidebar-header">
						<span class="sidebar-badge">Faktografie</span>
						<h3>Rychlá fakta</h3>
					</div>
					<dl class="quick-facts-list">
						<div class="fact-row">
							<dt>Narození:</dt>
							<dd>{composer.quickFacts.birthPlace}</dd>
						</div>
						<div class="fact-row">
							<dt>Úmrtí:</dt>
							<dd>{composer.quickFacts.deathPlace}</dd>
						</div>
						<div class="fact-row">
							<dt>Místo odpočinku:</dt>
							<dd>{composer.quickFacts.restingPlace}</dd>
						</div>
						<div class="fact-row">
							<dt>Hlavní nástroj:</dt>
							<dd>{composer.quickFacts.primaryInstrument}</dd>
						</div>
						{#if composer.quickFacts.teachers && composer.quickFacts.teachers.length > 0}
							<div class="fact-row">
								<dt>Učitelé:</dt>
								<dd>
									<ul class="sub-list">
										{#each composer.quickFacts.teachers as teacher}
											<li>{teacher}</li>
										{/each}
									</ul>
								</dd>
							</div>
						{/if}
						{#if composer.quickFacts.associates && composer.quickFacts.associates.length > 0}
							<div class="fact-row">
								<dt>Osobnosti a přátelé:</dt>
								<dd>
									<ul class="sub-list">
										{#each composer.quickFacts.associates as assoc}
											<li>{assoc}</li>
										{/each}
									</ul>
								</dd>
							</div>
						{/if}
					</dl>
				</div>
			{/if}

			<div class="sidebar-card card">
				<div class="sidebar-header">
					<span class="sidebar-badge">Repertoár</span>
					<h3>Nejznámější díla</h3>
				</div>
				<ul class="sidebar-works-list">
					{#each composer.famousWorks.slice(0, 5) as work}
						<li class="sidebar-work-item">
							<span class="note-bullet">♪</span>
							<div>
								<span class="work-name">{work.title}</span>
								<span class="work-sub">{work.genre}</span>
							</div>
						</li>
					{/each}
				</ul>
				<div class="sidebar-cta">
					<a href="/vzdelavani" class="btn btn-primary w-full">
						Vyzkoušet hudební kvíz →
					</a>
				</div>
			</div>

			<!-- Back link -->
			<div class="back-link-box">
				<a href="/skladatele" class="btn btn-outline w-full">
					← Zpět na seznam skladatelů
				</a>
			</div>
		</aside>
	</div>
</div>

<style>
	/* Hero */
	.composer-hero {
		background: linear-gradient(135deg, var(--color-deep-spruce) 0%, var(--color-deep-spruce-dark) 100%);
		color: var(--color-parchment);
		padding-top: 3.5rem;
		padding-bottom: 3.5rem;
		border-bottom: 3px solid var(--color-warm-ochre);
	}

	.hero-card {
		display: flex;
		align-items: center;
		gap: 3rem;
	}

	.hero-portrait-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.hero-portrait {
		width: 190px;
		height: 240px;
		flex-shrink: 0;
		border-radius: var(--radius-md);
		overflow: hidden;
		border: 3px solid var(--color-antique-gold);
		box-shadow: var(--shadow-lg);
		background: #FFF;
	}

	.hero-portrait img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.portrait-credit {
		font-size: 0.72rem;
		color: rgba(245, 239, 230, 0.7);
		text-align: center;
		max-width: 190px;
	}

	.composer-name {
		color: var(--color-parchment);
		font-size: clamp(2rem, 4vw, 3.2rem);
		margin-top: 0.5rem;
		margin-bottom: 0.25rem;
	}

	.composer-years-line {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 1.1rem;
		color: var(--color-warm-ochre-light);
		margin-bottom: 0.75rem;
	}

	.years {
		font-weight: 700;
	}

	.composer-tagline {
		font-size: 1.15rem;
		color: rgba(245, 239, 230, 0.9);
		font-style: italic;
		font-family: var(--font-serif);
		max-width: 650px;
		line-height: 1.5;
	}

	/* Tabs */
	.tabs-bar {
		background: var(--color-parchment-soft);
		border-bottom: 1px solid rgba(140, 119, 94, 0.25);
		position: sticky;
		top: 72px;
		z-index: 50;
	}

	.tabs-nav {
		display: flex;
		gap: 0.5rem;
		overflow-x: auto;
		padding: 0.5rem 0;
	}

	.tab-btn {
		background: none;
		border: none;
		padding: 0.75rem 1.25rem;
		font-family: var(--font-sans);
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--color-slate-gray);
		border-radius: var(--radius-full);
		cursor: pointer;
		white-space: nowrap;
		transition: all 0.2s ease;
	}

	.tab-btn:hover {
		color: var(--color-deep-spruce);
		background: rgba(24, 46, 40, 0.05);
	}

	.tab-btn.active {
		color: var(--color-parchment);
		background: var(--color-deep-spruce);
	}

	/* Content Grid */
	.content-grid {
		display: grid;
		grid-template-columns: 1fr 350px;
		gap: 3rem;
	}

	/* Quote box */
	.quote-box {
		background: #FFF;
		border-left: 4px solid var(--color-warm-ochre);
		padding: 1.5rem 2rem;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
		margin-bottom: 2.5rem;
		font-family: var(--font-serif);
		font-style: italic;
		font-size: 1.15rem;
		color: var(--color-deep-spruce);
		line-height: 1.6;
	}

	.quote-author {
		display: block;
		margin-top: 0.75rem;
		font-size: 0.9rem;
		font-style: normal;
		font-family: var(--font-sans);
		color: var(--color-slate-gray);
		text-align: right;
		font-weight: 600;
	}

	/* Tab panel general */
	.tab-panel h2 {
		font-size: 1.8rem;
		margin-bottom: 0.5rem;
		color: var(--color-deep-spruce);
	}

	.tab-panel h3 {
		font-size: 1.4rem;
		margin-top: 2rem;
		margin-bottom: 1rem;
		color: var(--color-deep-spruce);
	}

	.section-intro {
		color: var(--color-slate-gray);
		margin-bottom: 2rem;
		font-size: 1.05rem;
	}

	.bio-text {
		font-size: 1.05rem;
		line-height: 1.8;
		margin-bottom: 1.25rem;
		color: var(--color-charcoal);
	}

	.section-divider {
		height: 1px;
		background: rgba(140, 119, 94, 0.2);
		margin: 2.5rem 0;
	}

	/* Works */
	.works-list {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.work-item {
		padding: 1.5rem;
		background: #FFF;
	}

	.work-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 0.5rem;
	}

	.work-header h4 {
		margin: 0;
		font-size: 1.15rem;
		color: var(--color-deep-spruce);
	}

	.work-genre {
		font-size: 0.85rem;
		color: var(--color-slate-gray);
		display: block;
		margin-top: 0.2rem;
	}

	.work-desc {
		margin: 0.5rem 0 0;
		color: var(--color-charcoal);
		line-height: 1.6;
		font-size: 0.95rem;
	}

	/* Trips Section */
	.trips-section {
		margin-bottom: 3rem;
	}

	.trip-full-card {
		background: #FFF;
		border: 1px solid rgba(140, 119, 94, 0.25);
		padding: 2rem;
		margin-bottom: 2rem;
		border-radius: var(--radius-md);
	}

	.trip-card-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 0.75rem;
	}

	.trip-card-head h3 {
		font-size: 1.5rem;
		color: var(--color-deep-spruce);
		margin-bottom: 0.25rem;
	}

	.trip-sub {
		color: var(--color-warm-ochre);
		font-weight: 600;
		font-size: 0.95rem;
		margin-bottom: 1rem;
	}

	.trip-desc {
		line-height: 1.65;
		color: var(--color-charcoal);
		margin-bottom: 1.5rem;
	}

	/* Waypoints timeline */
	.trip-waypoints-block {
		background: var(--color-parchment-soft);
		border-radius: var(--radius-md);
		padding: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.trip-waypoints-block h4 {
		color: var(--color-deep-spruce);
		margin-bottom: 1.25rem;
	}

	.waypoints-timeline {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.waypoint-item {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
	}

	.wp-badge {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: var(--color-deep-spruce);
		color: var(--color-parchment);
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		font-size: 0.9rem;
	}

	.wp-body {
		flex: 1;
	}

	.wp-head {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		flex-wrap: wrap;
		margin-bottom: 0.25rem;
	}

	.wp-head strong {
		color: var(--color-deep-spruce);
	}

	.wp-desc {
		font-size: 0.92rem;
		color: var(--color-charcoal);
		margin: 0;
		line-height: 1.5;
	}

	.wp-img-wrap {
		margin-top: 0.75rem;
		max-width: 260px;
		height: 140px;
		border-radius: var(--radius-sm);
		overflow: hidden;
		border: 1px solid rgba(140, 119, 94, 0.2);
	}

	.wp-img-wrap img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.trip-tips-inline {
		background: #FFF;
		border-left: 3px solid var(--color-sage-green);
		padding: 1rem 1.25rem;
		margin-bottom: 1.5rem;
		font-size: 0.92rem;
	}

	.trip-tips-inline ul {
		margin: 0.5rem 0 0 1.25rem;
		padding: 0;
	}

	.trip-tips-inline li {
		margin-bottom: 0.25rem;
	}

	.trip-card-footer {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	/* Places Grid */
	.places-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 1.5rem;
	}

	.place-card {
		overflow: hidden;
		background: #FFF;
		border: 1px solid rgba(140, 119, 94, 0.2);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.place-card:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow-md);
	}

	.place-img-wrap {
		height: 160px;
	}

	.place-img-wrap img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.place-body {
		padding: 1.25rem;
	}

	.place-body h4 {
		margin-bottom: 0.25rem;
		font-size: 1.05rem;
		color: var(--color-deep-spruce);
	}

	.place-rel {
		font-size: 0.85rem;
		color: var(--color-slate-gray);
		margin-bottom: 0.75rem;
		line-height: 1.4;
	}

	.place-link {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-warm-ochre);
	}

	/* Sidebar */
	.sidebar-card {
		padding: 1.5rem;
		background: #FFF;
		border: 1px solid rgba(140, 119, 94, 0.25);
		margin-bottom: 1.5rem;
	}

	.quick-facts-card {
		background: var(--color-parchment-soft);
	}

	.sidebar-header {
		margin-bottom: 1.25rem;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid rgba(140, 119, 94, 0.2);
	}

	.sidebar-badge {
		font-size: 0.75rem;
		text-transform: uppercase;
		font-weight: 700;
		color: var(--color-warm-ochre);
		letter-spacing: 0.05em;
	}

	.quick-facts-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin: 0;
	}

	.fact-row dt {
		font-weight: 700;
		font-size: 0.82rem;
		text-transform: uppercase;
		letter-spacing: 0.03em;
		color: var(--color-deep-spruce);
		margin-bottom: 0.15rem;
	}

	.fact-row dd {
		margin: 0;
		font-size: 0.92rem;
		color: var(--color-charcoal);
		line-height: 1.4;
	}

	.sub-list {
		list-style: none;
		padding: 0;
		margin: 0.25rem 0 0;
	}

	.sub-list li {
		margin-bottom: 0.25rem;
		font-size: 0.88rem;
		color: var(--color-charcoal);
		position: relative;
		padding-left: 0.75rem;
	}

	.sub-list li::before {
		content: "•";
		position: absolute;
		left: 0;
		color: var(--color-warm-ochre);
	}

	.sidebar-works-list {
		list-style: none;
		padding: 0;
		margin: 0 0 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.sidebar-work-item {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
	}

	.note-bullet {
		color: var(--color-warm-ochre);
		font-size: 1.2rem;
		line-height: 1;
	}

	.work-name {
		font-family: var(--font-serif);
		font-weight: 700;
		font-size: 1rem;
		color: var(--color-deep-spruce);
		display: block;
	}

	.work-sub {
		font-size: 0.8rem;
		color: var(--color-slate-gray);
		display: block;
	}

	.w-full {
		width: 100%;
	}

	@media (max-width: 900px) {
		.hero-card {
			flex-direction: column;
			text-align: center;
			gap: 1.5rem;
		}
		.composer-years-line {
			justify-content: center;
		}
		.content-grid {
			grid-template-columns: 1fr;
		}
		.places-grid {
			grid-template-columns: 1fr;
		}
		.trip-card-footer {
			flex-direction: column;
		}
	}
</style>
