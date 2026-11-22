<script lang="ts">
	import { page } from '$app/state';

	let isMobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
	}

	const navLinks = [
		{ label: 'Skladatelé', href: '/skladatele' },
		{ label: 'Výročí', href: '/vyroci' },
		{ label: 'Mapa výletů', href: '/mapa' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'Vzdělávání', href: '/vzdelavani' },
		{ label: 'O projektu', href: '/o-projektu' }
	];
</script>

<header class="site-header">
	<div class="container header-container">
		<!-- Brand Logo -->
		<a href="/" class="brand-logo" onclick={closeMobileMenu}>
			<span class="clef-icon">𝄞</span>
			<span class="brand-text">
				<span class="brand-main">Čeští skladatelé</span>
			</span>
		</a>

		<!-- Desktop Navigation -->
		<nav class="desktop-nav" aria-label="Hlavní navigace">
			<ul class="nav-list">
				{#each navLinks as link}
					<li>
						<a
							href={link.href}
							class="nav-link"
							class:active={page.url.pathname === link.href || (link.href !== '/' && page.url.pathname.startsWith(link.href))}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- Header Actions -->
		<div class="header-actions">
			<a href="/skladatele" class="btn btn-primary btn-sm header-cta">
				<span>Prozkoumat</span>
				<span class="arrow">→</span>
			</a>

			<!-- Mobile Hamburger Toggle -->
			<button
				class="mobile-toggle"
				onclick={toggleMobileMenu}
				aria-label={isMobileMenuOpen ? 'Zavřít menu' : 'Otevřít menu'}
				aria-expanded={isMobileMenuOpen}
			>
				<span class="hamburger-bar" class:open={isMobileMenuOpen}></span>
				<span class="hamburger-bar" class:open={isMobileMenuOpen}></span>
				<span class="hamburger-bar" class:open={isMobileMenuOpen}></span>
			</button>
		</div>
	</div>

	<!-- Mobile Drawer Menu -->
	{#if isMobileMenuOpen}
		<div class="mobile-drawer" role="dialog" aria-modal="true">
			<div class="mobile-drawer-header">
				<span class="brand-logo small">
					<span class="clef-icon">𝄞</span>
					<span class="brand-main">Čeští skladatelé</span>
				</span>
				<button class="close-btn" onclick={closeMobileMenu} aria-label="Zavřít">✕</button>
			</div>
			<nav class="mobile-nav">
				<ul>
					<li>
						<a href="/" class="mobile-nav-link" onclick={closeMobileMenu}>Úvodní stránka</a>
					</li>
					{#each navLinks as link}
						<li>
							<a
								href={link.href}
								class="mobile-nav-link"
								class:active={page.url.pathname.startsWith(link.href)}
								onclick={closeMobileMenu}
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
			<div class="mobile-drawer-footer">
				<a href="/skladatele" class="btn btn-ochre w-full" onclick={closeMobileMenu}>
					Objevte skladatele →
				</a>
			</div>
		</div>
		<div
			class="backdrop"
			onclick={closeMobileMenu}
			onkeydown={(e) => e.key === 'Escape' && closeMobileMenu()}
			role="button"
			tabindex="0"
			aria-label="Zavřít pozadí"
		></div>
	{/if}
</header>

<style>
	.site-header {
		background-color: var(--color-parchment-soft);
		border-bottom: 1px solid rgba(140, 119, 94, 0.22);
		position: sticky;
		top: 0;
		z-index: 100;
		backdrop-filter: blur(8px);
		background-color: rgba(250, 246, 240, 0.94);
		transition: all 0.25s ease;
	}

	.header-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 72px;
	}

	.brand-logo {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		text-decoration: none;
		color: var(--color-deep-spruce);
	}

	.brand-logo.small {
		font-size: 0.9rem;
	}

	.clef-icon {
		font-family: var(--font-serif);
		font-size: 2.1rem;
		color: var(--color-warm-ochre);
		line-height: 1;
		font-weight: 700;
	}

	.brand-main {
		font-family: var(--font-serif);
		font-size: 1.45rem;
		font-weight: 700;
		letter-spacing: -0.01em;
		color: var(--color-deep-spruce);
	}

	.desktop-nav {
		display: flex;
		align-items: center;
	}

	.nav-list {
		display: flex;
		list-style: none;
		gap: 1.75rem;
		margin: 0;
		padding: 0;
	}

	.nav-link {
		font-family: var(--font-sans);
		font-size: 0.95rem;
		font-weight: 500;
		color: var(--color-slate-gray);
		text-decoration: none;
		position: relative;
		padding: 0.4rem 0;
		transition: color 0.2s ease;
	}

	.nav-link:hover {
		color: var(--color-deep-spruce);
	}

	.nav-link.active {
		color: var(--color-deep-spruce);
		font-weight: 600;
	}

	.nav-link.active::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		right: 0;
		height: 2px;
		background-color: var(--color-warm-ochre);
		border-radius: 2px;
	}

	.header-actions {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.btn-sm {
		padding: 0.5rem 1.15rem;
		font-size: 0.875rem;
	}

	.mobile-toggle {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
		flex-direction: column;
		gap: 5px;
		padding: 6px;
	}

	.hamburger-bar {
		width: 24px;
		height: 2px;
		background-color: var(--color-deep-spruce);
		transition: transform 0.2s ease, opacity 0.2s ease;
	}

	/* Mobile drawer */
	.mobile-drawer {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		width: 290px;
		background-color: var(--color-parchment-soft);
		z-index: 200;
		box-shadow: -4px 0 24px rgba(24, 46, 40, 0.15);
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
		animation: slideIn 0.25s ease forwards;
	}

	@keyframes slideIn {
		from { transform: translateX(100%); }
		to { transform: translateX(0); }
	}

	.mobile-drawer-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 2rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid rgba(140, 119, 94, 0.2);
	}

	.close-btn {
		background: none;
		border: none;
		font-size: 1.25rem;
		cursor: pointer;
		color: var(--color-deep-spruce);
	}

	.mobile-nav ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.mobile-nav-link {
		display: block;
		padding: 0.65rem 0.5rem;
		font-size: 1.1rem;
		font-family: var(--font-serif);
		color: var(--color-deep-spruce);
		border-radius: var(--radius-sm);
	}

	.mobile-nav-link:hover, .mobile-nav-link.active {
		color: var(--color-warm-ochre);
		background-color: rgba(194, 120, 69, 0.08);
	}

	.mobile-drawer-footer {
		margin-top: auto;
		padding-top: 1.5rem;
	}

	.w-full {
		width: 100%;
	}

	.backdrop {
		position: fixed;
		inset: 0;
		background-color: rgba(24, 46, 40, 0.4);
		z-index: 150;
	}

	@media (max-width: 900px) {
		.desktop-nav, .header-cta {
			display: none;
		}
		.mobile-toggle {
			display: flex;
		}
	}
</style>
