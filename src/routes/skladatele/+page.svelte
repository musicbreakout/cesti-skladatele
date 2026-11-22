<script lang="ts">
	import { composers } from '$lib/data/composers';
	import type { MusicalPeriod } from '$lib/types';
	import ComposerCard from '$lib/components/ComposerCard.svelte';

	let searchQuery = $state('');
	let selectedPeriod = $state<string>('Všechna');
	let currentPage = $state(1);
	const itemsPerPage = 12;

	const periods: string[] = ['Všechna', 'Baroko', 'Raný klasicismus', 'Klasicismus', 'Romantismus', '20. století'];

	let filteredComposers = $derived(
		composers.filter((c) => {
			const matchesSearch =
				c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				c.tagline.toLowerCase().includes(searchQuery.toLowerCase());
			const matchesPeriod = selectedPeriod === 'Všechna' || c.period === selectedPeriod;
			return matchesSearch && matchesPeriod;
		})
	);

	let totalPages = $derived(Math.max(1, Math.ceil(filteredComposers.length / itemsPerPage)));

	let paginatedComposers = $derived(
		filteredComposers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
	);

	function setPeriod(p: string) {
		selectedPeriod = p;
		currentPage = 1;
	}

	function handleSearchInput() {
		currentPage = 1;
	}

	function goToPage(p: number) {
		if (p >= 1 && p <= totalPages) {
			currentPage = p;
			if (typeof window !== 'undefined') {
				window.scrollTo({ top: 320, behavior: 'smooth' });
			}
		}
	}
</script>

<svelte:head>
	<title>Skladatelé | Čeští skladatelé</title>
	<meta name="description" content="Seznam významných českých hudebních skladatelů – Antonín Dvořák, Bedřich Smetana, Jakub Jan Ryba, Josef Suk a další mistři české klasické hudby." />
</svelte:head>

<div class="page-container section">
	<div class="container">
		<!-- Page Header -->
		<div class="page-header text-center">
			<span class="badge badge-sage">Katalog osobností</span>
			<h1 class="page-title">Čeští skladatelé</h1>
			<p class="page-subtitle">
				Poznejte jejich příběhy, vrcholná díla i fascinující zajímavosti. Objevte hudební génie české kultury.
			</p>
		</div>

		<!-- Search Bar & Filters -->
		<div class="filter-bar-wrap">
			<div class="search-box">
				<span class="search-icon">🔍</span>
				<input
					type="text"
					placeholder="Hledat skladatele podle jména nebo díla..."
					bind:value={searchQuery}
					oninput={handleSearchInput}
					class="search-input"
				/>
				{#if searchQuery}
					<button class="clear-search" onclick={() => { searchQuery = ''; currentPage = 1; }} aria-label="Vymazat hledání">✕</button>
				{/if}
			</div>

			<div class="filter-pills justify-center">
				{#each periods as period}
					<button
						class="filter-pill"
						class:active={selectedPeriod === period}
						onclick={() => setPeriod(period)}
					>
						{period}
					</button>
				{/each}
			</div>
		</div>

		<!-- Results count -->
		<div class="results-info">
			<span>Nalezeno {filteredComposers.length} {filteredComposers.length === 1 ? 'skladatel' : filteredComposers.length < 5 ? 'skladatelé' : 'skladatelů'}</span>
			{#if totalPages > 1}
				<span class="page-indicator-text">• Stránka {currentPage} z {totalPages}</span>
			{/if}
		</div>

		<!-- Composer Cards Grid -->
		{#if paginatedComposers.length > 0}
			<div class="grid-3 composer-grid">
				{#each paginatedComposers as composer}
					<ComposerCard {composer} />
				{/each}
			</div>
		{:else}
			<div class="empty-state card">
				<span class="empty-icon">𝄞</span>
				<h3>Žádný skladatel neodpovídá zadání</h3>
				<p>Zkuste upravit vyhledávací dotaz nebo vybrat jiné hudební období.</p>
				<button
					class="btn btn-outline"
					onclick={() => {
						searchQuery = '';
						selectedPeriod = 'Všechna';
						currentPage = 1;
					}}
				>
					Obnovit všechny filtry
				</button>
			</div>
		{/if}

		<!-- Functional Pagination -->
		{#if totalPages > 1}
			<nav class="pagination" aria-label="Stránkování skladatelů">
				<button
					class="page-btn"
					class:disabled={currentPage === 1}
					disabled={currentPage === 1}
					onclick={() => goToPage(currentPage - 1)}
					aria-label="Předchozí stránka"
				>
					‹
				</button>

				{#each Array.from({ length: totalPages }, (_, i) => i + 1) as pageNum}
					<button
						class="page-btn"
						class:active={currentPage === pageNum}
						onclick={() => goToPage(pageNum)}
						aria-label={`Přejít na stránku ${pageNum}`}
					>
						{pageNum}
					</button>
				{/each}

				<button
					class="page-btn"
					class:disabled={currentPage === totalPages}
					disabled={currentPage === totalPages}
					onclick={() => goToPage(currentPage + 1)}
					aria-label="Následující stránka"
				>
					›
				</button>
			</nav>
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
		line-height: 1.6;
	}

	.filter-bar-wrap {
		max-width: 720px;
		margin: 0 auto 2rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.search-box {
		position: relative;
		display: flex;
		align-items: center;
	}

	.search-icon {
		position: absolute;
		left: 1.25rem;
		font-size: 1.1rem;
		opacity: 0.6;
	}

	.search-input {
		width: 100%;
		padding: 0.85rem 3rem 0.85rem 3.25rem;
		font-size: 1rem;
		font-family: var(--font-sans);
		border-radius: var(--radius-full);
		border: 1px solid rgba(140, 119, 94, 0.35);
		background: #FFF;
		box-shadow: var(--shadow-sm);
		outline: none;
		transition: border-color 0.2s ease, box-shadow 0.2s ease;
	}

	.search-input:focus {
		border-color: var(--color-warm-ochre);
		box-shadow: 0 0 0 3px rgba(194, 120, 69, 0.15);
	}

	.clear-search {
		position: absolute;
		right: 1.25rem;
		background: none;
		border: none;
		cursor: pointer;
		font-size: 1rem;
		color: var(--color-slate-gray);
	}

	.justify-center {
		justify-content: center;
	}

	.results-info {
		font-size: 0.875rem;
		color: var(--color-slate-gray);
		margin-bottom: 1.5rem;
		text-align: right;
	}

	.composer-grid {
		margin-bottom: 3.5rem;
	}

	.empty-state {
		text-align: center;
		padding: 4rem 2rem;
		background: #FFF;
		border-radius: var(--radius-lg);
		margin-bottom: 3rem;
	}

	.empty-icon {
		font-family: var(--font-serif);
		font-size: 3.5rem;
		color: var(--color-warm-ochre);
		display: block;
		margin-bottom: 1rem;
	}

	.empty-state h3 {
		margin-bottom: 0.5rem;
	}

	.empty-state p {
		margin-bottom: 1.5rem;
	}

	/* Pagination */
	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	.page-btn {
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--radius-full);
		border: 1px solid rgba(140, 119, 94, 0.3);
		background: #FFF;
		color: var(--color-deep-spruce);
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.page-btn:hover:not(.disabled) {
		border-color: var(--color-warm-ochre);
		color: var(--color-warm-ochre);
	}

	.page-btn.active {
		background-color: var(--color-deep-spruce);
		color: var(--color-parchment);
		border-color: var(--color-deep-spruce);
	}

	.page-btn.disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}
</style>
