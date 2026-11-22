<script lang="ts">
	import { articles } from '$lib/data/articles';
	import BlogCard from '$lib/components/BlogCard.svelte';

	let searchQuery = $state('');
	let selectedCategory = $state<string>('Vše');
	let currentPage = $state(1);
	const itemsPerPage = 6;

	const categories = ['Vše', 'Skladatelé', 'Výročí', 'Místa', 'Vzdělávání'];

	let filteredArticles = $derived(
		articles.filter((art) => {
			const matchesCat = selectedCategory === 'Vše' || art.category === selectedCategory;
			const matchesQuery =
				art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
			return matchesCat && matchesQuery;
		})
	);

	let totalPages = $derived(Math.max(1, Math.ceil(filteredArticles.length / itemsPerPage)));

	let paginatedArticles = $derived(
		filteredArticles.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
	);

	function setCategory(cat: string) {
		selectedCategory = cat;
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
	<title>Blog a články | Čeští skladatelé</title>
	<meta name="description" content="Příběhy, zajímavosti ze života skladatelů, rozbory děl a tipy na kulturní výlety po stopách české hudby." />
</svelte:head>

<div class="blog-page section">
	<div class="container">
		<div class="page-header text-center">
			<span class="badge badge-ochre">Příběhy & Analýzy</span>
			<h1 class="page-title">Blog a články</h1>
			<p class="page-subtitle">
				Příběhy, zajímavosti, rozbory děl i partitur a tipy na výlety do míst spojených s velikány české hudby.
			</p>
		</div>

		<!-- Filter Bar -->
		<div class="filter-bar-wrap">
			<div class="filter-pills justify-center">
				{#each categories as cat}
					<button
						class="filter-pill"
						class:active={selectedCategory === cat}
						onclick={() => setCategory(cat)}
					>
						{cat}
					</button>
				{/each}
			</div>

			<div class="search-box">
				<span class="search-icon">🔍</span>
				<input
					type="text"
					placeholder="Hledat články..."
					bind:value={searchQuery}
					oninput={() => (currentPage = 1)}
					class="search-input"
				/>
				{#if searchQuery}
					<button class="clear-search" onclick={() => { searchQuery = ''; currentPage = 1; }}>✕</button>
				{/if}
			</div>
		</div>

		<!-- Articles Grid -->
		{#if paginatedArticles.length > 0}
			<div class="grid-3 blog-grid">
				{#each paginatedArticles as article}
					<BlogCard {article} />
				{/each}
			</div>
		{:else}
			<div class="empty-box card text-center">
				<p>Pro zadaná kritéria nebyl nalezen žádný článek.</p>
				<button
					class="btn btn-outline"
					onclick={() => {
						searchQuery = '';
						selectedCategory = 'Vše';
						currentPage = 1;
					}}
				>
					Zobrazit všechny články
				</button>
			</div>
		{/if}

		<!-- Functional Pagination -->
		{#if totalPages > 1}
			<nav class="pagination" aria-label="Stránkování blogu">
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
	}

	.filter-bar-wrap {
		max-width: 760px;
		margin: 0 auto 3rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.justify-center {
		justify-content: center;
	}

	.search-box {
		position: relative;
		display: flex;
		align-items: center;
	}

	.search-icon {
		position: absolute;
		left: 1.25rem;
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
	}

	.search-input:focus {
		border-color: var(--color-warm-ochre);
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

	.blog-grid {
		margin-bottom: 3.5rem;
	}

	.empty-box {
		padding: 4rem 2rem;
		margin-bottom: 3rem;
		background: #FFF;
	}

	.empty-box p {
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
