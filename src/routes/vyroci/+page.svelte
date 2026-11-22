<script lang="ts">
	import { anniversaries } from '$lib/data/anniversaries';

	let selectedType = $state<string>('Všechna');
	let selectedYear = $state<string>('Všechny');

	const types = ['Všechna', 'Narození', 'Úmrtí', 'Premiéry'];
	const years = [
		{ label: 'Všechny roky', value: 'Všechny' },
		{ label: '2026 (Aktuální kalendárium)', value: '2026' },
		{ label: '2025 (Výročí Linka & Ryby)', value: '2025' },
		{ label: '2024 (Rok české hudby – Smetana 200 & Suk 150)', value: '2024' }
	];

	let filteredAnniversaries = $derived(
		anniversaries.filter((item) => {
			const matchesType =
				selectedType === 'Všechna' ||
				item.type === selectedType ||
				(selectedType === 'Premiéry' && item.type === 'Premiéra');
			const matchesYear =
				selectedYear === 'Všechny' ||
				String(item.celebrationYear) === selectedYear;
			return matchesType && matchesYear;
		})
	);
</script>

<svelte:head>
	<title>Výročí a kalendárium | Čeští skladatelé</title>
	<meta
		name="description"
		content="Významná kulatá výročí narození, úmrtí a premiér českých hudebních skladatelů – Smetana, Dvořák, Suk, Ryba, Linek, Brentner a Kopřiva."
	/>
</svelte:head>

<div class="anniversaries-page section">
	<div class="container">
		<div class="page-header text-center">
			<span class="badge badge-gold">Česká hudební historie</span>
			<h1 class="page-title">Výročí & Kalendárium</h1>
			<p class="page-subtitle">
				Připomínáme významná výročí narození, úmrtí, premiér a klíčových událostí, které formovaly českou kulturní paměť.
			</p>
		</div>

		<!-- Filters & Year Selector -->
		<div class="filters-row">
			<div class="filter-pills">
				{#each types as type}
					<button
						class="filter-pill"
						class:active={selectedType === type}
						onclick={() => (selectedType = type)}
					>
						{type}
					</button>
				{/each}
			</div>

			<div class="year-selector">
				<label for="year-select" class="year-label">Rok výročí:</label>
				<select id="year-select" bind:value={selectedYear} class="year-dropdown">
					{#each years as y}
						<option value={y.value}>{y.label}</option>
					{/each}
				</select>
			</div>
		</div>

		<!-- Counter badge -->
		<div class="results-meta">
			<span>Nalezeno {filteredAnniversaries.length} {filteredAnniversaries.length === 1 ? 'výročí' : filteredAnniversaries.length < 5 ? 'výročí' : 'výročí'}</span>
			{#if selectedYear !== 'Všechny' || selectedType !== 'Všechna'}
				<button
					class="reset-filter-btn"
					onclick={() => {
						selectedType = 'Všechna';
						selectedYear = 'Všechny';
					}}
				>
					Zrušit filtry ✕
				</button>
			{/if}
		</div>

		<!-- Timeline listing -->
		{#if filteredAnniversaries.length > 0}
			<div class="timeline-container">
				{#each filteredAnniversaries as item}
					<article class="timeline-item card">
						<div class="date-badge-box">
							<span class="date-number">{item.day}</span>
							<span class="date-year">{item.year}</span>
							<span class="badge badge-sage type-tag">{item.type}</span>
						</div>

						<div class="avatar-box">
							<img src={item.portrait} alt={item.composerName} />
						</div>

						<div class="content-box">
							<h3 class="event-title">{item.title}</h3>
							<p class="composer-meta">
								<a href={`/skladatele/${item.composerSlug}`} class="composer-link">
									{item.composerName}
								</a>
								<span class="range">({item.yearsRange})</span>
							</p>
							<p class="years-ago-note">
								Slavíme v roce <strong>{item.celebrationYear}</strong> (před {item.yearsAgo} lety)
							</p>
						</div>

						<div class="action-box">
							<a href={`/blog/${item.articleSlug}`} class="btn btn-outline btn-sm">
								Přečíst článek →
							</a>
						</div>
					</article>
				{/each}
			</div>
		{:else}
			<div class="empty-state card text-center">
				<span class="empty-icon">𝄞</span>
				<h3>Pro zvolenou kombinaci filtrů nebyla nalezena žádná výročí</h3>
				<p>Zkuste zvolit jiné období nebo zobrazit všechny roky.</p>
				<button
					class="btn btn-primary"
					onclick={() => {
						selectedType = 'Všechna';
						selectedYear = 'Všechny';
					}}
				>
					Zobrazit všechna výročí
				</button>
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
		font-size: clamp(2.2rem, 4vw, 3rem);
		color: var(--color-deep-spruce);
	}

	.page-subtitle {
		font-size: 1.15rem;
		color: var(--color-slate-gray);
		line-height: 1.6;
	}

	.filters-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 1.5rem;
		margin-bottom: 1.5rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid rgba(140, 119, 94, 0.2);
	}

	.year-selector {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.year-label {
		font-weight: 600;
		font-size: 0.95rem;
		color: var(--color-slate-gray);
	}

	.year-dropdown {
		padding: 0.6rem 1.25rem;
		border-radius: var(--radius-sm);
		border: 1px solid rgba(140, 119, 94, 0.35);
		background: #FFF;
		font-family: var(--font-sans);
		font-size: 0.92rem;
		font-weight: 600;
		color: var(--color-deep-spruce);
		cursor: pointer;
		outline: none;
		transition: border-color 0.2s ease, box-shadow 0.2s ease;
	}

	.year-dropdown:focus {
		border-color: var(--color-warm-ochre);
		box-shadow: 0 0 0 3px rgba(194, 120, 69, 0.15);
	}

	.results-meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
		font-size: 0.92rem;
		color: var(--color-slate-gray);
		font-weight: 500;
	}

	.reset-filter-btn {
		background: none;
		border: none;
		color: var(--color-warm-ochre);
		font-weight: 600;
		cursor: pointer;
		font-size: 0.88rem;
		text-decoration: underline;
		padding: 0;
	}

	.reset-filter-btn:hover {
		color: var(--color-deep-spruce);
	}

	.timeline-container {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		max-width: 920px;
		margin: 0 auto;
	}

	.timeline-item {
		display: grid;
		grid-template-columns: 100px 75px 1fr auto;
		align-items: center;
		gap: 1.75rem;
		padding: 1.5rem 2rem;
		background: #FFF;
		border: 1px solid rgba(140, 119, 94, 0.2);
		border-radius: var(--radius-md);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.timeline-item:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
		border-color: var(--color-warm-ochre);
	}

	.date-badge-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		border-right: 1px solid rgba(140, 119, 94, 0.2);
		padding-right: 1.25rem;
	}

	.date-number {
		font-family: var(--font-serif);
		font-size: 1.45rem;
		font-weight: 700;
		color: var(--color-warm-ochre);
		line-height: 1.1;
	}

	.date-year {
		font-size: 0.88rem;
		color: var(--color-slate-gray);
		margin-bottom: 0.35rem;
	}

	.type-tag {
		font-size: 0.72rem;
		padding: 0.15rem 0.45rem;
	}

	.avatar-box {
		width: 72px;
		height: 72px;
		border-radius: var(--radius-sm);
		overflow: hidden;
		flex-shrink: 0;
		border: 1px solid rgba(140, 119, 94, 0.25);
	}

	.avatar-box img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.content-box {
		flex: 1;
	}

	.event-title {
		font-size: 1.18rem;
		font-family: var(--font-serif);
		color: var(--color-deep-spruce);
		margin-bottom: 0.3rem;
		line-height: 1.35;
	}

	.composer-meta {
		font-size: 0.92rem;
		color: var(--color-slate-gray);
		margin-bottom: 0.25rem;
	}

	.composer-link {
		color: var(--color-deep-spruce);
		font-weight: 600;
		text-decoration: underline;
		text-underline-offset: 2px;
	}

	.composer-link:hover {
		color: var(--color-warm-ochre);
	}

	.range {
		margin-left: 0.4rem;
		opacity: 0.75;
	}

	.years-ago-note {
		font-size: 0.85rem;
		color: var(--color-antique-gold);
		font-style: italic;
	}

	.empty-state {
		padding: 3rem 2rem;
		margin: 2rem auto;
		max-width: 600px;
	}

	.empty-icon {
		font-size: 2.5rem;
		color: var(--color-warm-ochre);
		display: block;
		margin-bottom: 1rem;
	}

	@media (max-width: 768px) {
		.timeline-item {
			grid-template-columns: 80px 60px 1fr;
			gap: 1rem;
			padding: 1.25rem;
		}

		.action-box {
			grid-column: 1 / -1;
			margin-top: 0.5rem;
		}

		.action-box .btn {
			width: 100%;
			text-align: center;
		}
	}
</style>
