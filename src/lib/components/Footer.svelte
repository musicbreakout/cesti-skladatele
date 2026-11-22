<script lang="ts">
	const currentYear = new Date().getFullYear();
</script>

<footer class="site-footer">
	<div class="container footer-container">
		<!-- Top section -->
		<div class="footer-top">
			<div class="footer-brand">
				<div class="brand-line">
					<span class="clef-icon">𝄞</span>
					<span class="brand-title">Čeští skladatelé</span>
				</div>
				<p class="brand-description">
					Nezávislý kulturně-vzdělávací projekt mapující život, díla a památná místa velikánů české klasické hudby.
				</p>
				<span class="quote-tagline">„Kde domov můj, tam zní má hudba.“</span>
			</div>

			<div class="footer-nav-col">
				<h4 class="col-title">Navigace</h4>
				<ul class="col-links">
					<li><a href="/">Úvodní stránka</a></li>
					<li><a href="/skladatele">Skladatelé</a></li>
					<li><a href="/vyroci">Výročí a kalendárium</a></li>
					<li><a href="/mapa">Mapa hudebních výletů</a></li>
					<li><a href="/blog">Blog a články</a></li>
				</ul>
			</div>

			<div class="footer-nav-col">
				<h4 class="col-title">Projekty & Vzdělávání</h4>
				<ul class="col-links">
					<li><a href="/vzdelavani">Hudební kvízy a testy</a></li>
					<li><a href="/o-projektu">O projektu a mise</a></li>
					<li><a href="/skladatele">Medailonky skladatelů</a></li>
					<li><a href="/mapa">Výlety a stezky</a></li>
				</ul>
			</div>

			<div class="footer-nav-col">
				<h4 class="col-title">Památná místa</h4>
				<ul class="col-links">
					<li><a href="/mista/litomysl">Litomyšl – B. Smetana</a></li>
					<li><a href="/mista/nelahozeves">Nelahozeves – A. Dvořák</a></li>
					<li><a href="/mista/rozmital-pod-tremsinem">Rožmitál – J. J. Ryba</a></li>
					<li><a href="/mista/krecovice">Křečovice – J. Suk</a></li>
				</ul>
			</div>
		</div>

		<!-- Bottom bar -->
		<div class="footer-bottom">
			<p class="copyright">
				© {currentYear} Čeští skladatelé. Všechna práva vyhrazena.
			</p>
			<p class="footer-motto">
				<span>Hudba nás spojuje</span>
			</p>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		background-color: var(--color-deep-spruce);
		color: var(--color-parchment);
		padding-top: 4rem;
		padding-bottom: 2rem;
		margin-top: auto;
		border-top: 3px solid var(--color-warm-ochre);
	}

	.footer-top {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1.2fr;
		gap: 3rem;
		margin-bottom: 3.5rem;
	}

	.brand-line {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		margin-bottom: 1rem;
	}

	.clef-icon {
		font-family: var(--font-serif);
		font-size: 2.3rem;
		color: var(--color-warm-ochre);
		line-height: 1;
	}

	.brand-title {
		font-family: var(--font-serif);
		font-size: 1.55rem;
		font-weight: 700;
		color: var(--color-parchment);
	}

	.brand-description {
		color: rgba(245, 239, 230, 0.75);
		font-size: 0.92rem;
		line-height: 1.6;
		margin-bottom: 1.25rem;
		max-width: 380px;
	}

	.quote-tagline {
		font-family: var(--font-serif);
		font-style: italic;
		font-size: 0.95rem;
		color: var(--color-warm-ochre-light);
		opacity: 0.85;
	}

	.col-title {
		font-family: var(--font-serif);
		font-size: 1.15rem;
		color: var(--color-parchment);
		margin-bottom: 1.25rem;
		letter-spacing: 0.02em;
	}

	.col-links {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.col-links a {
		color: rgba(245, 239, 230, 0.72);
		font-size: 0.92rem;
		transition: color 0.2s ease, transform 0.2s ease;
		display: inline-block;
	}

	.col-links a:hover {
		color: var(--color-warm-ochre-light);
		transform: translateX(3px);
	}

	.footer-bottom {
		border-top: 1px solid rgba(245, 239, 230, 0.12);
		padding-top: 1.75rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 0.875rem;
		color: rgba(245, 239, 230, 0.6);
	}

	.footer-motto {
		font-family: var(--font-serif);
		font-style: italic;
		color: var(--color-warm-ochre-light);
	}

	@media (max-width: 900px) {
		.footer-top {
			grid-template-columns: 1fr 1fr;
			gap: 2rem;
		}
	}

	@media (max-width: 600px) {
		.footer-top {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		.footer-bottom {
			flex-direction: column;
			gap: 0.75rem;
			text-align: center;
		}
	}
</style>
