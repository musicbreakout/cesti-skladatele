<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<div class="site-app">
	<Header />
	<main class="main-content">
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	.site-app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: var(--color-parchment);
		background-image: 
			radial-gradient(rgba(140, 119, 94, 0.08) 1px, transparent 1px),
			radial-gradient(rgba(24, 46, 40, 0.04) 1px, transparent 1px);
		background-size: 40px 40px, 80px 80px;
		background-position: 0 0, 20px 20px;
	}

	.main-content {
		flex: 1 0 auto;
	}
</style>
