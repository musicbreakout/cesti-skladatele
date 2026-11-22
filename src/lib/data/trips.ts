import type { TripRoute } from '$lib/types';

export const trips: TripRoute[] = [
	{
		id: 'dvorakova-stezka-kralupy-nelahozeves',
		slug: 'dvorakova-stezka-kralupy-nelahozeves',
		title: 'Dvořákova stezka z Kralup do Nelahozevsi',
		subtitle: 'Po stopách dětství a hudebních počátků z Kralup nad Vltavou k rodnému domu a renesančnímu zámku',
		composerSlug: 'antonin-dvorak',
		composerName: 'Antonín Dvořák',
		lengthKm: 4.2,
		durationHours: '1,5 hodiny pěšky',
		difficulty: 'Lehká',
		elevationGainM: 45,
		mapyCzUrl: 'https://mapy.cz/turisticka?q=Dvo%C5%99%C3%A1kova+stezka+Kralupy+Nelahozeves',
		coverImage: '/images/places/nelahozeves.jpg',
		description: 'Jedna z nejvýznamnějších hudebně-vlastivědných stezek v České republice. Vychází od Městského muzea v Kralupech nad Vltavou, stoupá na vyhlídkový pískovcový vrch Hostibejk, pokračuje malebným skalním kaňonem podél toku Vltavy k železniční stanici Nelahozeves s dvořákovským infocentrem a kavárnou, a končí u skladatelova rodného domu a zámku v Nelahozevsi.',
		waypoints: [
			{
				order: 1,
				name: 'Městské muzeum v Kralupech nad Vltavou',
				description: 'Výchozí bod trasy. Muzeum uchovává cenné regionální fondy a stálou expozici o památkách Kralupska a Dvořákově mládí.',
				lat: 50.2412,
				lng: 14.3112,
				image: '/images/places/kralupy-muzeum.jpg',
				highlight: 'Začátek trasy a informační materiály'
			},
			{
				order: 2,
				name: 'Vyhlídkový vrch Hostibejk',
				description: 'Pískovcový masiv s dalekým výhledem na údolí Vltavy a železnici. Zde mladý Antonín naslouchal hukotu prvních parních vlaků, k nimž měl celoživotní obdiv.',
				lat: 50.2435,
				lng: 14.3055,
				highlight: 'Panoramatický rozhled na meandr Vltavy'
			},
			{
				order: 3,
				name: 'Dvořákova stezka podél Vltavy',
				description: 'Romantická přírodní cesta vedená přímo pod pískovcovými a opukovými stěnami na břehu řeky, která Dvořáka inspirovala svou klidnou venkovskou atmosférou.',
				lat: 50.252,
				lng: 14.301,
				highlight: 'Přírodní kaňon Vltavy'
			},
			{
				order: 4,
				name: 'Železniční zastávka Nelahozeves – infocentrum a kavárna',
				description: 'Nádražní budova s moderním turistickým infocentrem a stylovou kavárnou věnovanou skladateli a železniční historii.',
				lat: 50.2605,
				lng: 14.302,
				highlight: 'Kavárna s dvořákovskými motivy'
			},
			{
				order: 5,
				name: 'Rodný dům Antonína Dvořáka',
				description: 'Autentický venkovský dům pod zámkem s moderní zážitkovou expozicí. Zde se Dvořák narodil do rodiny řezníka a hostinského a prožil formativní léta.',
				lat: 50.2612,
				lng: 14.3015,
				image: '/images/places/nelahozeves.jpg',
				highlight: 'Expozice Dvořákova dětství'
			},
			{
				order: 6,
				name: 'Zámek Nelahozeves',
				description: 'Majestátní renesanční lobkowiczký zámek. V zámecké kapele a tanečních sálech malý Antonín poprvé hrál se svou housličkovou kapelou před publikem.',
				lat: 50.2608,
				lng: 14.3038,
				image: '/images/places/nelahozeves-zamek.jpg',
				highlight: 'Lobkowiczké umělecké sbírky'
			}
		],
		tips: [
			'Trasa je ideální pro celoroční výlet vlakem (přímé spojení z Prahy Masarykova nádraží za 30 minut).',
			'V infocentru u zastávky v Nelahozevsi je k dispozici turistické razítko a pamětní materiály.',
			'V rodném domě je možná prohlídka s interaktivním tabletem uzpůsobená i školním skupinám.'
		]
	},
	{
		id: 'okruh-vysoka-u-pribrami',
		slug: 'okruh-vysoka-u-pribrami',
		title: 'Dvořákův okruh ve Vysoké u Příbrami',
		subtitle: 'Lesním královstvím k zámečku hraběte Kounice, vile Rusalka a pohádkovému Rusalčinu jezírku',
		composerSlug: 'antonin-dvorak',
		composerName: 'Antonín Dvořák',
		lengthKm: 3.0,
		durationHours: '1 hodina pěšky',
		difficulty: 'Lehká',
		elevationGainM: 35,
		mapyCzUrl: 'https://mapy.cz/turisticka?q=Pam%C3%A1tn%C3%ADk+Anton%C3%ADna+Dvo%C5%99%C3%A1ka+Vysok%C3%A1+u+P%C5%99%C3%ADbram%C4%9B',
		coverImage: '/images/places/vysoka.jpg',
		description: 'Vysoká u Příbrami představovala pro Antonína Dvořáka po více než dvacet let ztělesnění domova a nejhlubší tvůrčí inspirace. Na letním sídle svého švagra hraběte Václava Kounice a ve své vile Rusalka nalezl klid k tvorbě nejvýznamnějších kompozic. Okruh vás provede zámeckým parkem, lesní alejí až k tichému Rusalčinu jezírku, jež dalo vzniknout nesmrtelné opeře Rusalka.',
		waypoints: [
			{
				order: 1,
				name: 'Památník Antonína Dvořáka – zámeček Vysoká',
				description: 'Novorenesanční zámeček z roku 1878 postavený hrabětem Kounicem. Dnes sídlo stálé hudební a scénografické expozice.',
				lat: 49.6382,
				lng: 13.9405,
				image: '/images/places/vysoka.jpg',
				highlight: 'Stálá muzejní expozice a zámecký park'
			},
			{
				order: 2,
				name: 'Zámecký anglický park se dvěma jezírky',
				description: 'Rozsáhlý park s památnými stromy, altány a vodními plochami, kde Dvořák každé ráno rozjímal před zahájením komponování.',
				lat: 49.6375,
				lng: 13.939,
				highlight: 'Dvořákovo místo ranních procházek'
			},
			{
				order: 3,
				name: 'Vila Rusalka (Dvořákův zahradní dům)',
				description: 'Bývalá správcovská budova s chovem holubů, kterou Dvořák zakoupil v roce 1884 a s láskou ji zveleboval až do konce života.',
				lat: 49.636,
				lng: 13.937,
				highlight: 'Autentické letní sídlo a holubník'
			},
			{
				order: 4,
				name: 'Rusalčino jezírko v lese',
				description: 'Romantické lesní jezírko skryté v tichu brdských hvozdů. Přírodní scenerie přímo podnítila vznik libreta a Dvořákovy slavné árie Měsíčku na nebi hlubokém.',
				lat: 49.6325,
				lng: 13.9315,
				image: '/images/places/rusalcino-jezirko.jpg',
				highlight: 'Inspirace pro operu Rusalka'
			}
		],
		tips: [
			'Památník na Vysoké nabízí i venkovní poslechové lavičky v parku s Dvořákovými skladbami.',
			'V okolí se nachází také hrobka hraběcí rodiny Kouniců a poutní kostelík na vrchu Slivice.',
			'Procházka lesem k jezírku je nenáročná a přístupná i s kočárkem.'
		]
	},
	{
		id: 'jabkenicka-prochazka',
		slug: 'jabkenicka-prochazka',
		title: 'Smetanova stezka v Jabkenicích',
		subtitle: 'Lesním tichem jabkenické obory k rybníkům Vidlák a Štičí a k památnému Smetanovu dubu',
		composerSlug: 'bedrich-smetana',
		composerName: 'Bedřich Smetana',
		lengthKm: 3.5,
		durationHours: '1 hodina pěšky',
		difficulty: 'Lehká',
		elevationGainM: 25,
		mapyCzUrl: 'https://mapy.cz/turisticka?q=Pam%C3%A1tn%C3%ADk+Bed%C5%99icha+Smetany+Jabkenice',
		coverImage: '/images/places/jabkenice.jpg',
		description: 'V lesním tichu myslivny v Jabkenicích prožil Bedřich Smetana po ztrátě sluchu téměř deset let svého života v rodině dcery Žofie a jejího chotě lesmistra Josefa Schwarze. Zde složil svá nejhlubší díla. Trasa prochází rozlehlou historickou oborou s chovem daňků, kolem kaskády lesních rybníků Vidlák a Štičí až k mohutnému památnému Smetanovu dubu, pod nímž skladatel s oblibou sedával s notovým zápisníkem.',
		waypoints: [
			{
				order: 1,
				name: 'Myslivna Jabkenice – Památník Bedřicha Smetany',
				description: 'Historická budova lesního úřadu, kde Smetana žil a tvořil v letech 1875–1884. Dochována jeho pracovna, klavír i rukopisy.',
				lat: 50.3242,
				lng: 15.0125,
				image: '/images/places/jabkenice.jpg',
				highlight: 'Autentická pracovna skladatele a expozice'
			},
			{
				order: 2,
				name: 'Jabkenická obora',
				description: 'Rozlehlá obora založená již v 18. století pány z Valdštejna. Smetana v ní denně nacházel klid pro vnitřní slyšení melodií.',
				lat: 50.3255,
				lng: 15.016,
				highlight: 'Staleté dubové aleje a daňčí zvěř'
			},
			{
				order: 3,
				name: 'Rybníky Vidlák a Štičí',
				description: 'Soustava lesních rybníků s vodními lekníny, kde vznikaly motivy pro operu Hubička i Tajemství.',
				lat: 50.328,
				lng: 15.021,
				highlight: 'Klidná vodní hladina s labutěmi'
			},
			{
				order: 4,
				name: 'Památný Smetanův dub',
				description: 'Více než 400 let starý mohutný dub, pod kterým skladatel odpočíval a skicoval motivy k cyklu Má vlast.',
				lat: 50.3295,
				lng: 15.025,
				highlight: 'Památný strom českých dějin'
			}
		],
		tips: [
			'Památník v myslivně spravuje Národní muzeum – České muzeum hudby.',
			'V oboře je zachován klidový režim pro lesní zvěř, pohybujte se po vyznačených cestách.',
			'Ideální spojení s výletem do nedalekých Benátek nad Jizerou či na zámek Loučeň.'
		]
	},
	{
		id: 'litomyslsky-okruh',
		slug: 'litomyslsky-okruh',
		title: 'Smetanův renesanční okruh v Litomyšli',
		subtitle: 'Od rodného zámeckého pivovaru přes Klášterní zahrady až na Smetanovo náměstí',
		composerSlug: 'bedrich-smetana',
		composerName: 'Bedřich Smetana',
		lengthKm: 2.5,
		durationHours: '1 hodina pěšky',
		difficulty: 'Lehká',
		elevationGainM: 20,
		mapyCzUrl: 'https://mapy.cz/turisticka?q=Litomy%C5%A1l+z%C3%A1meck%C3%BD+pivovar',
		coverImage: '/images/places/litomysl.jpg',
		description: 'Litomyšl je městem, kde se Bedřich Smetana 2. března 1824 narodil jako vytoužený syn sládka Františka Smetany. Trasa spojuje renesanční zámek UNESCO se zámeckým pivovarem a rodným bytem, stoupá do vyhlídkových Klášterních zahrad se sochami Olbrama Zoubka a prochází malebným podloubím Smetanova náměstí k jeho monumentálnímu pomníku.',
		waypoints: [
			{
				order: 1,
				name: 'Rodný byt Bedřicha Smetany v zámeckém pivovaru',
				description: 'Přízemí pivovaru, kde se Smetana narodil a kde poprvé vnímal hudbu z domácího muzicírování svého otce.',
				lat: 49.8732,
				lng: 16.3135,
				image: '/images/places/litomysl.jpg',
				highlight: 'Interaktivní expozice Smetanova dětství'
			},
			{
				order: 2,
				name: 'Státní zámek Litomyšl (památka UNESCO)',
				description: 'Renesanční klenot se sgrafitovou výzdobou a zámeckým divadlem, dějiště mezinárodního operního festivalu Smetanova Litomyšl.',
				lat: 49.8735,
				lng: 16.3125,
				highlight: 'Památka světového dědictví UNESCO'
			},
			{
				order: 3,
				name: 'Klášterní zahrady a chrám Nalezení sv. Kříže',
				description: 'Zahrady na návrší s bazénem, sochami Olbrama Zoubka a panoramatickým rozhledem na město a věže.',
				lat: 49.8722,
				lng: 16.3115,
				highlight: 'Sochy Olbrama Zoubka a výhled'
			},
			{
				order: 4,
				name: 'Smetanovo náměstí a pomník Bedřicha Smetany',
				description: 'Goticko-renesanční náměstí s téměř 500 metrů dlouhým podloubím a bronzovým pomníkem skladatele od Jana Štursy.',
				lat: 49.8705,
				lng: 16.3125,
				highlight: 'Pomník skladatele od sochaře Štursy'
			}
		],
		tips: [
			'Každé léto se v zámeckém nádvoří koná prestižní festival Smetanova Litomyšl.',
			'V rodném bytě si můžete vyzkoušet interaktivní prvky a poslechnout první Smetanovy skladbičky.',
			'Město je dokonale přívětivé pro pěší i cyklisty.'
		]
	},
	{
		id: 'rozmitalsky-okruh-ryba',
		slug: 'rozmitalsky-okruh-ryba',
		title: 'Naučný okruh Jakuba Jana Ryby v Rožmitále pod Třemšínem',
		subtitle: 'Po stopách vzniku České mše vánoční, učitelského působení a osudových míst osvícenského kantora',
		composerSlug: 'jakub-jan-ryba',
		composerName: 'Jakub Jan Ryba',
		lengthKm: 4.5,
		durationHours: '1,5 hodiny pěšky',
		difficulty: 'Lehká',
		elevationGainM: 30,
		mapyCzUrl: 'https://mapy.cz/turisticka?q=Star%C3%BD+Ro%C5%BEmit%C3%A1l+kostel+Pov%C3%BD%C5%A1en%C3%AD+svat%C3%A9ho+K%C5%99%C3%AD%C5%BEe',
		coverImage: '/images/places/stary-rozmital.jpg',
		description: 'Podrobná okružní trasa sestavená přesně podle archivních podkladů. Vychází od rožmitálského renesančního zámku, vede lipovou alejí královny Johanky z Rožmitálu přes historické Cvokařské muzeum do Starého Rožmitálu ke kostelu Povýšení sv. Kříže s unikátními varhanami z roku 1750, kde poprvé zazněla Česká mše vánoční. Pokračuje po cyklotrase 8244 k bývalému morovému hřbitovu a Rybovou cestou kolem Podzámeckého rybníka zpět na náměstí.',
		waypoints: [
			{
				order: 1,
				name: 'Renesanční zámek Rožmitál pod Třemšínem',
				description: 'Výchozí bod okruhu. V Rybově době zde sídlila správa arcibiskupského panství, s níž vedl skladatel řadu sporů o podporu chudých žáků a školy.',
				lat: 49.6015,
				lng: 13.864,
				image: '/images/places/rozmital-zamek.jpg',
				highlight: 'Sídlo arcibiskupské správy panství'
			},
			{
				order: 2,
				name: 'Alej Johanky z Rožmitálu a Cvokařské muzeum',
				description: 'Chráněná staletá lipová alej podél rybníka vedoucí do Starého Rožmitálu. V uličce stojí unikátní Cvokařské muzeum připomínající brdské řemeslo.',
				lat: 49.603,
				lng: 13.856,
				highlight: 'Staletá lipová alej a lidová architektura'
			},
			{
				order: 3,
				name: 'Farní kostel Povýšení sv. Kříže ve Starém Rožmitále',
				description: 'Srdce Rybova působení. Zde na unikátní varhany z roku 1750 hrál jako regenschori a o Vánocích 1796 zde poprvé zazněla Česká mše vánoční. Na přilehlém hřbitově má hrob se svým synem.',
				lat: 49.6052,
				lng: 13.851,
				image: '/images/places/stary-rozmital.jpg',
				highlight: 'Varhany z r. 1750, premiéra mše a hrob'
			},
			{
				order: 4,
				name: 'Bývalý morový hřbitov u Nového rybníka (kovový kříž)',
				description: 'Místo, kde byl Jakub Jan Ryba po své sebevraždě 8. dubna 1815 původně bez církevních poct pohřben u zdi morového hřbitova. Dnes zde stojí pamětní kovový kříž.',
				lat: 49.6085,
				lng: 13.858,
				highlight: 'Pietní místo s kovovým křížem'
			},
			{
				order: 5,
				name: 'Rybova cesta podél Podzámeckého rybníka',
				description: 'Příjemná pěšina vinoucí se kolem břehů rybníka zpět k městu kolem budovy ZUŠ J. J. Ryby.',
				lat: 49.6035,
				lng: 13.862,
				highlight: 'Výhledy na zámek a vodní hladinu'
			},
			{
				order: 6,
				name: 'Náměstí, kostel sv. Jana Nepomuckého a Podbrdské muzeum',
				description: 'Centrální náměstí. Na kůru kostela je zasazena litinová deska s Rybovým heslem: „Pozoruj denně své činy a zkoumej je.“ V muzeu je rozsáhlá expozice věnovaná Rybovi a sbírka historických vozů.',
				lat: 49.601,
				lng: 13.865,
				highlight: 'Litinová pamětní deska s Rybovým heslem'
			}
		],
		tips: [
			'V období adventu a Vánoc zaznívá Česká mše vánoční přímo na kůru ve Starém Rožmitále každoročně na Štědrý den od 22:00.',
			'Prohlídky kostela s odborným výkladem a ukázkou hry na Rybovy varhany zajišťuje Římskokatolická farnost ve spolupráci se Společností J. J. Ryby.',
			'V Podbrdském muzeu můžete vidět i faksimile Rybova vlastnoručního školního deníku a notových zápisů.'
		]
	},
	{
		id: 'martinske-steny-dobrany',
		slug: 'martinske-steny-dobrany',
		title: 'Naučná stezka Martinské stěny a Brentnerovy sady v Dobřanech',
		subtitle: 'Po stopách barokního génia Jana Josefa Ignáce Brentnera k řece Radbuze a skalním stěnám',
		composerSlug: 'jan-josef-ignac-brentner',
		composerName: 'Jan Josef Ignác Brentner',
		lengthKm: 3.0,
		durationHours: '1 hodina pěšky',
		difficulty: 'Lehká',
		elevationGainM: 35,
		mapyCzUrl: 'https://mapy.cz/turisticka?q=Dob%C5%99any+kostel+svat%C3%A9ho+Mikul%C3%A1%C5%A1e',
		coverImage: '/images/places/dobrany.jpg',
		description: 'Dobřany na Plzeňsku jsou rodištěm nejvýznamnějšího skladatele českého vrcholného baroka Jana Josefa Ignáce Brentnera. Okruh začíná na náměstí T. G. Masaryka u barokního kostela sv. Mikuláše a unikátního oválného kostela sv. Víta, pokračuje do nově vybudovaných Brentnerových sadů na nábřeží řeky Radbuzy s památníkem skladatele a plovoucím molem, a stoupá naučnou stezkou Martinské stěny se 14 zastaveními světců a vyhlídkami do Dobřánek.',
		waypoints: [
			{
				order: 1,
				name: 'Náměstí T. G. Masaryka – kostel sv. Mikuláše a sv. Víta',
				description: 'Historické jádro Dobřan. V kostele sv. Mikuláše byl Brentner pokřtěn a z kůru poprvé zněly jeho moteta. Kostel sv. Víta je unikátní barokní stavbou s dvojitým oltářem.',
				lat: 49.6548,
				lng: 13.293,
				image: '/images/places/dobrany.jpg',
				highlight: 'Barokní chrámy a rodiště skladatele'
			},
			{
				order: 2,
				name: 'Brentnerovy sady s památníkem a plovoucím molem',
				description: 'Přírodní park na břehu řeky Radbuzy věnovaný památce skladatele, který v řece roku 1742 za záhadných okolností utonul. Molo nabízí klidné posezení u vody.',
				lat: 49.653,
				lng: 13.291,
				highlight: 'Památník skladatele a plovoucí molo'
			},
			{
				order: 3,
				name: 'Naučná stezka Martinské stěny (14 zastavení)',
				description: 'Přírodně-historická stezka vedoucí po skalním masivu nad údolím řeky. 14 zastavení připomíná světce, barokní tradice a geologii Plzeňska.',
				lat: 49.651,
				lng: 13.287,
				highlight: 'Skalní vyhlídky a 14 zastavení'
			},
			{
				order: 4,
				name: 'Dobřánky a návrat k náměstí',
				description: 'Malebná část Dobřan s venkovskou zástavbou a návratem kolem řeky zpět na historické náměstí.',
				lat: 49.6535,
				lng: 13.289,
				highlight: 'Vyhlídka na údolí řeky Radbuzy'
			}
		],
		tips: [
			'V Dobřanech doporučujeme navštívit také místní minipivovar na náměstí.',
			'Ústav dějin umění AV ČR zpracoval kompletní vědecký katalog Brentnerova hudebního díla.',
			'Stezka je vhodná pro příjemnou rodinnou procházku v každém ročním období.'
		]
	},
	{
		id: 'linkova-stezka-bakov-kosmonosy',
		slug: 'linkova-stezka-bakov-kosmonosy',
		title: 'Linkova kantorská stezka: Bakov nad Jizerou – Kosmonosy',
		subtitle: 'Z rodiště skladatele podél toku Jizery ke studijnímu klášteru piaristů v Kosmonosích',
		composerSlug: 'jiri-ignac-linek',
		composerName: 'Jiří Ignác Linek',
		lengthKm: 8.0,
		durationHours: '2,5 hodiny pěšky',
		difficulty: 'Střední',
		elevationGainM: 65,
		mapyCzUrl: 'https://mapy.cz/turisticka?q=Bakov+nad+Jizerou+kostel+svat%C3%A9ho+Bartolom%C4%9Bje',
		coverImage: '/images/places/bakov.jpg',
		description: 'Podrobná a malebná trasa zkomponovaná přesně podle vaší terénní dokumentace. Spojuje dvě klíčová místa Linkova života: rodný Bakov nad Jizerou, kde přes 40 let působil jako kantor u kostela sv. Bartoloměje, a Kosmonosy s monumentálním piaristickým klášterem, kde získal své hudební vzdělání. Vede po červené Svatojakubské cestě, Jungmannovou ulicí po Zlaté stezce Českého ráje podél Jizery, přes Bradlec a rybník Toťák až k piaristickému areálu.',
		waypoints: [
			{
				order: 1,
				name: 'Bakov nad Jizerou – Mírové náměstí a kostel sv. Bartoloměje',
				description: 'Výchozí bod. Chrám sv. Bartoloměje, kde Linek celý život působil jako kantor a ředitel kůru a kde poprvé zazněly jeho vánoční pastorely a koncerty pro trubku.',
				lat: 50.4828,
				lng: 14.9415,
				image: '/images/places/bakov.jpg',
				highlight: 'Působiště kantora a červená TZ'
			},
			{
				order: 2,
				name: 'Jungmannova ulice a Zlatá stezka Českého ráje',
				description: 'Trasa odbočuje doleva kolem stadionu a Husova pomníku k Rybímu dolu a napojuje se na břeh řeky Jizery.',
				lat: 50.478,
				lng: 14.938,
				highlight: 'Husův pomník a Rybí důl'
			},
			{
				order: 3,
				name: 'Stezka podél toku Jizery do Bradlece',
				description: 'Krásný přírodní úsek podél řeky. V Bradleci pokračuje ulicí Chudopleskou, od křížení s Bezdězskou stoupá ulicí Strmou k ulici U hřiště.',
				lat: 50.458,
				lng: 14.932,
				highlight: 'Meandry řeky Jizery'
			},
			{
				order: 4,
				name: 'Rybník Toťák a zahrádkářská kolonie',
				description: 'Odbočka doprava kolem školy a rybníka Toťák, napojení na modrou turistickou značku pod koupalištěm a biotopem.',
				lat: 50.448,
				lng: 14.931,
				highlight: 'Rybník Toťák a biotop'
			},
			{
				order: 5,
				name: 'Kosmonosy – Piaristický klášter a kostel Nalezení sv. Kříže',
				description: 'Cíl cesty v ulici Lípy. Barokní areál piaristického kláštera a gymnázia, kde mladý Jiří Ignác Linek studoval a získal mistrovské hudební základy.',
				lat: 50.4395,
				lng: 14.9285,
				image: '/images/places/kosmonosy.jpg',
				highlight: 'Barokní klášter piaristů a Loretánská kaple'
			}
		],
		tips: [
			'Z Kosmonos je možné pohodlně pokračovat městskou dopravou do Mladé Boleslavi na vlak.',
			'V Kosmonosích doporučujeme navštívit také slavnou Loretu s klenotnicí přímo naproti klášteru.',
			'Trasa je zčásti vedena po cyklostezkách a je sjízdná i na trekovém kole.'
		]
	},
	{
		id: 'sukuv-krecovicky-okruh',
		slug: 'sukuv-krecovicky-okruh',
		title: 'Sukův malý okruh v Křečovicích',
		subtitle: 'Od Sukova rybníka k rodnému památníku, kostelu sv. Lukeše a mohyle v aleji',
		composerSlug: 'josef-suk',
		composerName: 'Josef Suk',
		lengthKm: 2.5,
		durationHours: '1 hodina pěšky',
		difficulty: 'Lehká',
		elevationGainM: 30,
		mapyCzUrl: 'https://mapy.cz/turisticka?q=Pam%C3%A1tn%C3%ADk+Josefa+Suka+K%C5%99e%C4%8Dovice',
		coverImage: '/images/places/krecovice.jpg',
		description: 'Křečovice u Sedlčan byly pro Josefa Suka celoživotním bezpečným přístavem. Zde se narodil, sem se vracel ze světových turné Českého kvarteta a zde nalezl po boku milované Otilky věčný odpočinek. Krátký okruh vás provede Sukovým kopcem k rybníku, do autentického rodného domku (dnes Památník Josefa Suka), ke kostelu sv. Lukeše, k přírodní památce Křečovický rybník a Stezkou lesního muže k Sukově aleji s mohylou.',
		waypoints: [
			{
				order: 1,
				name: 'Sukův kopec a Sukův rybník',
				description: 'Výchozí návrší jihozápadně od obce s výhledem na křečovické údolí a tichý rybník pojmenovaný po skladateli.',
				lat: 49.718,
				lng: 14.475,
				highlight: 'Panoramatický rozhled na Křečovice'
			},
			{
				order: 2,
				name: 'Památník Josefa Suka (skladatelův rodný domek)',
				description: 'Domek čp. 3, kde Suk prožil dětství a vytvořil svá vrcholná díla včetně Asraele. Autentický interiér, klavír, diplomy i olympijské ocenění.',
				lat: 49.7215,
				lng: 14.4795,
				image: '/images/places/krecovice.jpg',
				highlight: 'Pobočka Českého muzea hudby'
			},
			{
				order: 3,
				name: 'Kostel sv. Lukeše a rodinná hrobka',
				description: 'Goticko-barokní kostel, kde Sukův otec působil jako varhaník a malý Josef zde poprvé hrál. Na hřbitově odpočívá Josef Suk i jeho žena Otilka Dvořáková.',
				lat: 49.723,
				lng: 14.481,
				highlight: 'Hrob Josefa Suka a Otilky'
			},
			{
				order: 4,
				name: 'Přírodní památka Křečovický rybník',
				description: 'Chráněná vodní a mokřadní plocha s výskytem vzácných ptáků a obojživelníků, která inspirovala Sukovu lyrickou komorní hudbu.',
				lat: 49.7255,
				lng: 14.483,
				highlight: 'Přírodní památka v údolí potoka'
			},
			{
				order: 5,
				name: 'Stezka lesního muže podél silnice č. 105',
				description: 'Lesní pěšina vedoucí podél silnice k aleji Josefa Suka a pamětní mohyle (bývalá zastávka Křečovice dráha).',
				lat: 49.728,
				lng: 14.485,
				highlight: 'Alej Josefa Suka a mohyla'
			}
		],
		tips: [
			'Památník v Křečovicích je otevřen sezónně od května do října pod správou Národního muzea.',
			'Křečovice prosluly také jako filmová vesnička z legendárního filmu Vesničko má středisková.',
			'V obci je příjemná možnost občerstvení a turistické infocentrum.'
		]
	},
	{
		id: 'sukova-stezka-krecovice-sedlcany',
		slug: 'sukova-stezka-krecovice-sedlcany',
		title: 'Sukova dálková stezka: Křečovice – Sedlčany',
		subtitle: 'Historická turistická cesta podél potoka Mastníka, jak o ní Suk vyprávěl na sklonku života',
		composerSlug: 'josef-suk',
		composerName: 'Josef Suk',
		lengthKm: 12.0,
		durationHours: '3,5 hodiny pěšky',
		difficulty: 'Střední',
		elevationGainM: 110,
		mapyCzUrl: 'https://mapy.cz/turisticka?q=K%C5%99e%C4%8Dovice+Sedl%C4%8Dany+Sukova+stezka',
		coverImage: '/images/places/krecovice.jpg',
		description: '„Cesta z Křečovic do Sedlčan, cesta ze Sedlčan k Svatému Jánu by mohla mnoho vyprávět, jak povstávalo a jak vyrůstalo moje dílo,“ svěřil se mistr. Vyznačili ji turisté již ve 30. letech 20. století. Vede z Křečovic přes malebné osady Zhorný a Paseky podél toku potoka Mastníka až do Sedlčan k Městskému muzeu, které opatruje Sukovy první malé dětské housličky.',
		waypoints: [
			{
				order: 1,
				name: 'Křečovice – výchozí bod stezky',
				description: 'Start u památníku Josefa Suka a kostela sv. Lukeše v Křečovicích.',
				lat: 49.7215,
				lng: 14.4795,
				highlight: 'Rodiště Josefa Suka'
			},
			{
				order: 2,
				name: 'Zhorný a Paseky',
				description: 'Půvabné osady na pomezí polí a lesů s dalekými výhledy do sedlčanské krajiny, kde Suk při chůzi komponoval.',
				lat: 49.702,
				lng: 14.495,
				highlight: 'Krajinné scenerie středního Povltaví'
			},
			{
				order: 3,
				name: 'Údolí potoka Mastníka',
				description: 'Romantický meandrující úsek podél lesnatého břehu Mastníka s lávkami a lučními zákrutami.',
				lat: 49.678,
				lng: 14.512,
				highlight: 'Přírodní koryto potoka Mastníka'
			},
			{
				order: 4,
				name: 'Sedlčany – Městské muzeum',
				description: 'Cíl trasy na náměstí v Sedlčanech. V hudební expozici jsou vystaveny první dětské housle, na které Suk v dětství začínal.',
				lat: 49.6585,
				lng: 14.532,
				highlight: 'První housličky Josefa Suka v muzeu'
			}
		],
		tips: [
			'Trasa je řádně turisticky vyznačena a je jednou z nejstarších hudebních stezek v Česku.',
			'Ze Sedlčan jezdí pravidelné autobusové i vlakové spoje zpět směr Benešov a Praha.',
			'Doporučujeme pevnou turistickou obuv pro lesní úseky podél Mastníka.'
		]
	},
	{
		id: 'naucna-stezka-citoliby',
		slug: 'naucna-stezka-citoliby',
		title: 'Naučná stezka Citoliby – kolébka raného klasicismu',
		subtitle: '12 zastavení o citolibské skladatelské škole, zámku s Braunovými sochami a varhanách Karla Blažeje Kopřivy',
		composerSlug: 'karel-blazej-kopriva',
		composerName: 'Karel Blažej Kopřiva',
		lengthKm: 3.0,
		durationHours: '1 hodina pěšky',
		difficulty: 'Lehká',
		elevationGainM: 15,
		mapyCzUrl: 'https://mapy.cz/turisticka?q=Citoliby+nau%C4%8Dn%C3%A1+stezka',
		coverImage: '/images/places/citoliby.jpg',
		description: 'Naučná stezka m針stysem Citoliby na Lounsku vás seznámí s unikátní kapitolou české hudební historie – slavnou citolibskou skladatelskou školou 18. století. Vychází od úřadu městyse v Zemětské ulici (GPS 50.3336, 13.8101), prochází Tyršovým náměstím kolem kostela Narození Panny Marie se vzácnými varhanami, kolem pachtovského zámku se sochami M. B. Brauna, k výklenkové kapli Na Plevně a končí u kříže v historické bažantnici.',
		waypoints: [
			{
				order: 1,
				name: 'Úřad městyse Citoliby – Zemětská ulice',
				description: 'Výchozí bod stezky (GPS 50.3336, 13.8101) s úvodní informační tabulí o dějinách a hudební tradici Citolib.',
				lat: 50.3336,
				lng: 13.8101,
				highlight: 'Úvodní zastavení naučné stezky'
			},
			{
				order: 2,
				name: 'Tyršovo náměstí a kostel Narození Panny Marie',
				description: 'Barokní kostel, kde Karel Blažej Kopřiva působil jako virtuózní varhaník. V interiéru se dochovaly vzácné varhany a hrobka mecenášů Pachtů.',
				lat: 50.3325,
				lng: 13.812,
				highlight: 'Barokní varhany a působiště Kopřivy'
			},
			{
				order: 3,
				name: 'Barokní zámek Citoliby se sochami M. B. Brauna',
				description: 'Sídlo hraběte Arnošta Karla Pachty, který vydržoval slavnou zámeckou kapelu. V zámeckém parku stojí unikátní soubor soch Matyáše Bernarda Brauna.',
				lat: 50.3315,
				lng: 13.814,
				image: '/images/places/citoliby.jpg',
				highlight: 'Zámek s Braunovými sochami'
			},
			{
				order: 4,
				name: 'Výklenková kaple v ulici Na Plevně',
				description: 'Dochovaná drobná sakrální stavba z 18. století dokládající barokní krajinnou kompozici městyse.',
				lat: 50.3305,
				lng: 13.817,
				highlight: 'Historická výklenková kaplička'
			},
			{
				order: 5,
				name: 'Bažantnice a kříž východně od obce',
				description: 'Přírodní zakončení stezky v historické panské bažantnici s památným křížem a klidným lesním zákoutím.',
				lat: 50.329,
				lng: 13.822,
				highlight: 'Závěr stezky u kříže v bažantnici'
			}
		],
		tips: [
			'Zámek Citoliby má nového majitele a připravuje kulturní i divadelní akce na rok 2027.',
			'Naučná stezka má celkem 12 zastavení a je přístupná celoročně pro pěší i cyklisty.',
			'Pouhých 19 km od Citolib se nachází zámek Chrámce u Loun.'
		]
	}
];

export function getTripsByComposerSlug(composerSlug: string): TripRoute[] {
	return trips.filter((t) => t.composerSlug === composerSlug);
}

export function getTripBySlug(slug: string): TripRoute | undefined {
	return trips.find((t) => t.slug === slug);
}
