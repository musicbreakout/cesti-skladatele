import type { Composer } from '$lib/types';

export const composers: Composer[] = [
	{
		id: 'dvorak',
		slug: 'antonin-dvorak',
		name: 'Antonín Dvořák',
		birthYear: 1841,
		deathYear: 1904,
		period: 'Romantismus',
		tagline: 'Světoznámý mistr symfonie, melodie a českého hudebního romantismu',
		portrait: '/images/composers/dvorak.jpg',
		coverImage: '/images/places/vysoka.jpg',
		quote: {
			text: '„Bůh, příroda a má vlast – to jsou tři pilíře, na nichž spočívá veškeré mé umění.“',
			source: 'Antonín Dvořák'
		},
		quickFacts: {
			birthPlace: 'Nelahozeves u Kralup nad Vltavou (8. září 1841)',
			deathPlace: 'Praha (1. května 1904)',
			restingPlace: 'Vyšehradský hřbitov – hrobka Slavín v Praze',
			primaryInstrument: 'Viola, housle, varhany, klavír',
			teachers: [
				'Antonín Liehmann (kantor ve Zlonicích – housle, varhany, klavír, harmonie)',
				'Karel František Pitsch a František Blažek (Varhanická škola v Praze)'
			],
			associates: [
				'Johannes Brahms (celoživotní přítel, mecenáš a rádce)',
				'Fritz Simrock (berlínský nakladatel, vydavatel Slovanských tanců)',
				'Bedřich Smetana (kapelník Prozatímního divadla, v jehož orchestru Dvořák hrál)',
				'Josef Suk (nejnadanější žák v mistrovské třídě a posléze zeť)'
			]
		},
		bio: [
			'Antonín Dvořák se narodil 8. září 1841 v Nelahozevsi na břehu Vltavy v rodině řezníka a hostinského Františka Dvořáka. Na přání rodičů se nejprve vyučil řeznickému řemeslu, ale jeho mimořádné hudební nadání se projevovalo od raného dětství. V letech 1853–1856 pobýval ve Zlonicích u strýce a vstoupil do učení k tamnímu významnému venkovskému kantorovi a varhaníkovi Antonínu Liehmannovi. Ten chlapce vyučoval hře na klavír, varhany, housle i základům kontrapunktu a zásadně přesvědčil Dvořákova otce, aby syna nechal studovat hudbu.',
			'V letech 1857–1859 Dvořák absolvoval pražskou Varhanickou školu. Po jejím dokončení nastoupil jako violista do slavné kapely Karla Komzáka a v roce 1862 přešel do nově ustaveného orchestru Prozatímního divadla, který od roku 1866 řídil sám Bedřich Smetana. Během deseti let divadelní praxe Dvořák získal dokonalý přehled o světovém operním a orchestrálním repertoáru a ve volném čase neúnavně komponoval rozsáhlá díla.',
			'Zásadní životní zlom nastal v roce 1874, kdy Dvořák zvítězil v soutěži o rakouské státní stipendium pro mladé chudé umělce ve Vídni, a to především zásluhou svých Moravských dvojzpěvů. Členem poroty byl slavný Johannes Brahms, kterého Dvořákova svěží melodika a harmonická čistota uchvátila. Z obou skladatelů se stali celoživotní blízcí přátelé. Brahms Dvořáka vřele doporučil svému berlínskému nakladateli Fritzi Simrockovi. Když Simrock roku 1878 vydal první řadu Slovanských tanců pro čtyřruční klavír (a záhy v orchestrální verzi), stal se Antonín Dvořák doslova přes noc mezinárodní hvězdou.',
			'V 80. letech následovala mimořádně úspěšná pozvání do Velké Británie (Londýn, Birmingham, Leeds). Dvořák v Anglii osobně řídil svá monumentální oratoria a kantáty – Stabat Mater, Svatou Ludmilu či Rekviem. Anglické publikum ho bezmezně obdivovalo a cambridgeská univerzita mu roku 1891 udělila čestný doktorát hudby.',
			'V letech 1892–1895 přijal Dvořák velkorysou nabídku mecenášky Jeannette Thurberové a ujal se prestižního místa ředitele Národní hudební konzervatoře v New Yorku. Pobyt v Americe znamenal vrchol jeho tvůrčí syntézy: hluboce jej oslovily černošské spirituály a melodie původních obyvatel. V New Yorku a během letního pobytu v české komunitě ve Spillville (Iowa) zkomponoval svá nejhranější díla – Symfonii č. 9 e moll „Z Nového světa“, Smyčcový kvartet F dur „Americký“ a monumentální Violoncellový koncert h moll.',
			'Po návratu do vlasti se Dvořák vrátil na Pražskou konzervatoř jako profesor kompozice a od roku 1901 její ředitel. Vychoval novou skladatelskou generaci v čele s Josefem Sukem a Vítězslavem Novákem. Každé léto trávil na svém venkovském sídle ve Vysoké u Příbrami, kde v obklopení brdských lesů a u Rusalčina jezírka složil symfonické básně podle balad Karla Jaromíra Erbena a opery Čert a Káča, Jakobín a nesmrtelnou Rusalku. Antonín Dvořák zemřel nečekaně 1. května 1904 v Praze a s poctami byl uložen do hrobky na vyšehradském Slavíně.'
		],
		famousWorks: [
			{
				title: 'Symfonie č. 9 e moll „Z Nového světa“, op. 95',
				year: '1893',
				genre: 'Symfonie',
				description: 'Jedna z nejhranějších a nejslavnějších symfonií všech dob. Syntéza amerických inspirací, indiánských rytmů, černošského spirituálu a nehasnoucí touhy po českém domově. Druhou větu Largo vzala posádka Apolla 11 s sebou na povrch Měsíce.'
			},
			{
				title: 'Rusalka, op. 114',
				year: '1900',
				genre: 'Lyrická pohádka o 3 dějstvích (opera)',
				description: 'Klenot české i světové operní literatury na libreto Jaroslava Kvapila, zkomponovaný na Vysoké u Příbrami. Dojemná árie Měsíčku na nebi hlubokém patří k nejkrásnějším sopránovým scénám hudební historie.'
			},
			{
				title: 'Slovanské tance, op. 46 a op. 72',
				year: '1878, 1886',
				genre: 'Orchestrální cyklus',
				description: 'Dvě řady po osmi strhujících tancích (furianty, sousedské, skočné, polky i dumky), které Dvořákovi otevřely brány do předních evropských a světových koncertních síní.'
			},
			{
				title: 'Violoncellový koncert h moll, op. 104',
				year: '1895',
				genre: 'Koncert pro violoncello a orchestr',
				description: 'Nedostižný vrchol světového violoncellového repertoáru. Vznikl na sklonku pobytu v New Yorku a je prodchnut hlubokou melancholií a steskem po domově.'
			},
			{
				title: 'Čtveřice symfonických básní podle K. J. Erbena, op. 107–110',
				year: '1896',
				genre: 'Symfonická báseň',
				description: 'Mistrovské hudební ztvárnění Erbenových balad ze sbírky Kytice: Vodník, Polednice, Zlatý kolovrat a Holoubek. Dvořák zhudebnil verše s neuvěřitelnou zvukomalebností a dramatickou plastičností.'
			},
			{
				title: 'Moravské dvojzpěvy, op. 20, 29, 32',
				year: '1875–1877',
				genre: 'Vokální dueta s doprovodem klavíru',
				description: 'Svěží dvojzpěvy na texty moravské lidové poezie, které Dvořákovi vynesly stipendium ve Vídni a zaujaly Johannese Brahmse.'
			},
			{
				title: 'Klavírní trio č. 4 e moll „Dumky“, op. 90',
				year: '1891',
				genre: 'Komorní hudba',
				description: 'Unikátní šestivěté dílo střídající melancholické dumky s divokými tanečními rytmy.'
			},
			{
				title: 'Stabat Mater, op. 58',
				year: '1877',
				genre: 'Duchovní oratorium',
				description: 'Monumentální a dojemné zpracování středověkého textu o bolesti matky pod křížem, zkomponované v reakci na tragické úmrtí tří vlastních dětí.'
			},
			{
				title: 'Jakobín, op. 84 a Čert a Káča, op. 112',
				year: '1888, 1899',
				genre: 'Opery',
				description: 'Oblíbené české národní opery plné humoru, lidových postav, kantorské tradice (učitel Benda v Jakobínovi) a vtipného ztvárnění pekla.'
			}
		],
		trivia: [
			'Vášeň pro železnici a parní lokomotivy: Dvořák byl celoživotním nadšeným obdivovatelem technického pokroku. Pravidelně chodil na pražské Masarykovo (tehdy Františkovo) nádraží sledovat odjezdy a příjezdy vlaků, zapisoval si čísla lokomotiv a znal jízdní řády nazpaměť. Jednou prohlásil: „Všechny své symfonie bych dal za to, kdybych byl vynalezl lokomotivu!“',
			'Chov holubů ve Vysoké u Příbrami: Na svém venkovském sídle na Vysoké choval několik desítek ušlechtilých holubů. Každé ráno je chodil osobně krmit a tvrdil, že ranní ševelení křídel v zámeckém parku mu dodává nejhlubší inspiraci a klid k zápisu partitur.',
			'Hudba na Měsíci: Nahrávku druhé věty Largo z Dvořákovy Novosvětské symfonie vzal americký astronaut Neil Armstrong s sebou na palubu kosmické lodi Apollo 11 při historickém prvním přistání člověka na Měsíci v červenci 1969.',
			'Dvořákova kulinářská hrdost: Ačkoliv se stal světoznámým profesorem a doktorem hudby z Cambridge i Prahy, s oblibou hostům připomínal své řemeslo: pyšnil se tím, že stále dokáže dokonale naporcovat hovězí maso a že dobré řemeslo vyžaduje stejnou poctivost jako komponování symfonie.',
			'Zlonické zvony: Svou úplně první symfonii c moll věnoval městečku Zlonice, kde prožil svá jinošská léta. Partitura byla dlouho považována za ztracenou a byla znovuobjevena až po Dvořákově smrti.',
			'Denní režim ranního ptáčete: Skladatel vstával neobyčejně brzy – v létě na Vysoké již kolem páté hodiny ranní. Před snídaní chodil na dlouhé procházky do lesů k Rusalčinu jezírku a hlavní penzum kompoziční práce měl hotovo ještě před polednem.'
		],
		anniversaryNote: '185 let od narození (1841)',
		tripSlugs: [
			'dvorakova-stezka-kralupy-nelahozeves',
			'okruh-vysoka-u-pribrami'
		],
		places: [
			{
				name: 'Nelahozeves – Rodný dům',
				slug: 'nelahozeves',
				relation: 'Místo narození a dětství, nová moderní expozice',
				image: '/images/places/nelahozeves.jpg'
			},
			{
				name: 'Zámek Nelahozeves',
				slug: 'nelahozeves-zamek',
				relation: 'Lobkowiczký zámek nad rodným domem skladatele',
				image: '/images/places/nelahozeves-zamek.jpg'
			},
			{
				name: 'Vysoká u Příbrami – Památník',
				slug: 'vysoka-u-pribrami',
				relation: 'Letní sídlo, vila Rusalka a vznik nejslavnějších děl',
				image: '/images/places/vysoka.jpg'
			},
			{
				name: 'Rusalčino jezírko ve Vysoké',
				slug: 'rusalcino-jezirko',
				relation: 'Tiché lesní zátiší, inspirace opery Rusalka',
				image: '/images/places/rusalcino-jezirko.jpg'
			},
			{
				name: 'Zlonice – Památník A. Dvořáka',
				slug: 'zlonice',
				relation: 'Hudební studia u kantora Antonína Liehmanna',
				image: '/images/places/zlonice.jpg'
			},
			{
				name: 'Městské muzeum v Kralupech',
				slug: 'kralupy-muzeum',
				relation: 'Výchozí bod Dvořákovy stezky podél řeky Vltavy',
				image: '/images/places/kralupy-muzeum.jpg'
			},
			{
				name: 'Praha – Rudolfinum',
				slug: 'praha-rudolfinum',
				relation: 'Dvořákova síň České filharmonie, zahajovací koncert 1896',
				image: '/images/places/rudolfinum.jpg'
			},
			{
				name: 'Praha – Vyšehrad a Slavín',
				slug: 'praha-vysehrad',
				relation: 'Místo posledního odpočinku v arkádách Slavína',
				image: '/images/places/vysehrad.jpg'
			}
		]
	},
	{
		id: 'smetana',
		slug: 'bedrich-smetana',
		name: 'Bedřich Smetana',
		birthYear: 1824,
		deathYear: 1884,
		period: 'Romantismus',
		tagline: 'Otec české národní hudby, tvůrce Mé vlasti a Prodané nevěsty',
		portrait: '/images/composers/smetana.jpg',
		coverImage: '/images/places/litomysl.jpg',
		quote: {
			text: '„V hudbě je život Čechů. Mé srdce bije pro vlast, pro její lid, pro její krásy.“',
			source: 'Bedřich Smetana'
		},
		quickFacts: {
			birthPlace: 'Litomyšl – zámecký pivovar (2. března 1824)',
			deathPlace: 'Praha (12. května 1884)',
			restingPlace: 'Vyšehradský hřbitov v Praze',
			primaryInstrument: 'Klavír',
			teachers: ['Josef Proksch (Praha – klavír a kompozice)', 'Jan Antonín Chládek (Litomyšl)'],
			associates: [
				'Franz Liszt (vzor, mecenáš a rádce)',
				'Karel Sabina a Eliška Krásnohorská (libretisté)',
				'Žofie Schwarzová (dcera, u níž žil v Jabkenicích)'
			]
		},
		bio: [
			'Bedřich Smetana se narodil 2. března 1824 v Litomyšli v rodině sládka zámeckého pivovaru Františka Smetany jako jedenácté dítě a vytoužený první syn. Již v raném dětství projevoval zázračné hudební nadání: v pěti letech hrál na housle a v šesti letech poprvé veřejně vystoupil s klavírním koncertem v Litomyšli. Gymnaziální studia absolvoval v Jindřichově Hradci, Jihlavě, Německém Brodě, Plzni a Praze.',
			'V Praze působil jako domácí učitel hudby u hraběcí rodiny Thunů (na zámku Bon Repos a v Benátkách nad Jizerou) a vzdělával se v kompozici u vynikajícího pedagoga Josefa Proksche. V roce 1848 otevřel vlastní klavírní školu v Praze, k čemuž mu finančně dopomohl slavný Franz Liszt.',
			'V letech 1856–1861 přijal nabídku stát se hudebním ředitelem Filharmonické společnosti ve švédském Göteborgu, kde působil jako dirigent, klavírista i pedagog. Rodinný život však zasáhly kruté rány: v polovině 50. let mu zemřely tři ze čtyř dcer (Gabriela, Bedřiška a Kateřina; naživu zůstala pouze Žofie). Smrt nadané čtyřleté Bedřišky jej inspirovala k sepsání srdceryvného Klavírního tria g moll. Krátce nato podlehla tuberkulóze i jeho první manželka Kateřina Kolářová. Později se oženil s Bettinou Ferdinandiovou.',
			'Po návratu do Prahy se stal kapelníkem Prozatímního divadla a zkomponoval pilíře českého národního repertoáru – opery Braniboři v Čechách, Prodaná nevěsta, Dalibor a slavnostní operu Libuše určenou pro otevření Národního divadla.',
			'Na podzim roku 1874 jej postihla definitivní oboustranná hluchota. Přesto se nevzdal: uchýlil se k dceři Žofii do myslivny v Jabkenicích u Mladé Boleslavi. V absolutním tichu zde vytvořil své nejgeniálnější kompozice: cyklus šesti symfonických básní Má vlast (včetně Vltavy a Vyšehradu), smyčcový kvartet Z mého života a opery Hubička, Tajemství a Čertova stěna. Zemřel 12. května 1884 v Praze a je pochován na Vyšehradě.'
		],
		famousWorks: [
			{ title: 'Má vlast', year: '1874–1879', genre: 'Cyklus šesti symfonických básní', description: 'Monumentální epopej: Vyšehrad, Vltava, Šárka, Z českých luhů a hájů, Tábor, Blaník. Skladatel ji vytvořil v naprostém tichu po ztrátě sluchu.' },
			{ title: 'Prodaná nevěsta', year: '1866', genre: 'Komická národní opera', description: 'Nejslavnější česká opera plná jiskrného humoru, tanců (polka, furiant, skočná) a mistrovských árií Jeníka a Mařenky.' },
			{ title: 'Libuše', year: '1872', genre: 'Slavnostní zpěvohra', description: 'Vlastenecké proroctví kněžny Libuše o budoucnosti českého národa („Můj drahý národ český neskoná!“), složené pro otevření Národního divadla.' },
			{ title: 'Z mého života', year: '1876', genre: 'Smyčcový kvartet č. 1 e moll', description: 'Hluboce osobní autobiografické dílo: ve finále zaznívá pronikavý vysoký tón E znázorňující osudné pískání v uších před ztrátou sluchu.' },
			{ title: 'Klavírní trio g moll, op. 15', year: '1855', genre: 'Komorní hudba', description: 'Jedno z nejemotivnějších děl romantismu, zkomponované v hlubokém žalu po smrti čtyřleté dcery Bedřišky.' }
		],
		trivia: [
			'Dětství v pivovaru: Narodil se v přízemí zámeckého pivovaru v Litomyšli. Otec František byl natolik šťastný z narození syna po deseti dcerách, že nechal na zámeckém nádvoří vyvalit sudy piva pro všechny měšťany zdarma.',
			'Tvorba v naprostém tichu: Více než polovinu svého životního díla – včetně symfonické básně Vltava, opery Hubička a kvartetu Z mého života – složil Bedřich Smetana ve stavu totální hluchoty v lesním tichu myslivny v Jabkenicích.',
			'Přátelství s Lisztem: Když Smetana roku 1848 poslal Franzi Lisztovi svou první skladbu s prosbou o posouzení a pomoc, Liszt odpověděl s obdivem, pomohl mu najít nakladatele a navštívil jej v Praze.'
		],
		anniversaryNote: '200 let od narození (1824–2024)',
		tripSlugs: [
			'jabkenicka-prochazka',
			'litomyslsky-okruh'
		],
		places: [
			{
				name: 'Litomyšl – Zámecký pivovar',
				slug: 'litomysl',
				relation: 'Místo narození v rodném bytě sládka a dětská léta',
				image: '/images/places/litomysl.jpg'
			},
			{
				name: 'Jabkenice – Památník Bedřicha Smetany',
				slug: 'jabkenice',
				relation: 'Myslivna rodiny dcery Žofie, vznik Vltavy a Hubičky',
				image: '/images/places/jabkenice.jpg'
			},
			{
				name: 'Praha – Vyšehradský hřbitov',
				slug: 'praha-vysehrad',
				relation: 'Místo posledního odpočinku v srdci národního Slavína',
				image: '/images/places/vysehrad.jpg'
			}
		]
	},
	{
		id: 'ryba',
		slug: 'jakub-jan-ryba',
		name: 'Jakub Jan Ryba',
		birthYear: 1765,
		deathYear: 1815,
		period: 'Klasicismus',
		tagline: 'Osvícenský venkovský kantor, humanista a autor nesmrtelné České mše vánoční',
		portrait: '/images/composers/ryba.jpg',
		coverImage: '/images/places/stary-rozmital.jpg',
		quote: {
			text: '„K tomu, aby mládež všechna prospěšná učení v paměti podržela, nejoučinlivější prostředek podle vlastní mé zkušenosti jest zpěv mezi školní cvičení uvedený.“',
			source: 'Jakub Jan Ryba – školní deník'
		},
		quickFacts: {
			birthPlace: 'Přeštice u Plzně (pokřtěn 26. října 1765)',
			deathPlace: 'Voltuš u Rožmitálu pod Třemšínem (8. dubna 1815)',
			restingPlace: 'Starý Rožmitál – hřbitov u kostela Povýšení sv. Kříže',
			primaryInstrument: 'Varhany, housle, violoncello',
			teachers: ['Jan Vaněček (strýc, kněz a hudebník v Praze)', 'Josef Seger a Jan Antonín Koželuh'],
			associates: ['Rožmitálští žáci, měšťané a chrámový sbor', 'Farnost Starý Rožmitál']
		},
		bio: [
			'Jakub Jan Ryba se narodil 26. října 1765 v Přešticích v rodině učitele. Díky svému strýci, hudebníkovi a knězi Janu Vaněčkovi, odešel studovat do Prahy. Zdokonalil se v němčině, navštěvoval piaristické gymnázium a v pražských chrámech naslouchal slavným varhaníkům (Koželuh, Seger, Kuchař). Osvojil si kontrapunkt a začal plodně komponovat.',
			'V 19 letech však musel na naléhání rodičů studia předčasně ukončit a odejít z Prahy, ač velmi nerad. Na přání rodičů měl vzít místo učitele v Nepomuku, které však bylo nečekaně obsazeno někým jiným. Po krátkém působení v Mníšku pod Brdy zakotvil roku 1788 jako regenschori a učitel v Rožmitále pod Třemšínem, kde působil až do své smrti.',
			'V Rožmitále vedl neúnavný zápas za osvětu, čistotu a moderní pedagogiku. Uplatňoval sokratovskou metodu dialogu a podněcoval žáky k samostatnému úsudku. Často narážel na nepochopení konzervativních rodičů i vrchnosti. Přesto vychoval stovky žáků a zanechal ohromné hudební dílo čítající přes 1 300 kompozic.',
			'O Vánocích roku 1796 poprvé zazněla na kůru kostela Povýšení sv. Kříže ve Starém Rožmitále jeho slavná Česká mše vánoční („Hej mistře“), napsaná na vlastní český text s radostným pastýřským námětem.',
			'Vyčerpán existenčními starostmi, podlomeným zdravím a ústrky ukončil 8. dubna 1815 svůj život v lese u Voltuše. Jako sebevrah byl původně pochován na morovém hřbitově u Nového rybníka, až v roce 1855 byly jeho ostatky s úctou přeneseny na hřbitov ve Starém Rožmitále.'
		],
		famousWorks: [
			{ title: 'Česká mše vánoční („Hej mistře“)', year: '1796', genre: 'Duchovní pastýřská mše', description: 'Nejpopulárnější české vánoční dílo zkomponované pro kůr kostela ve Starém Rožmitále s varhanami z roku 1750.' },
			{ title: 'Stabat Mater in c', year: '1790', genre: 'Duchovní kantáta', description: 'Hluboké duchovní dílo předjímající dramatický klasicistní styl.' },
			{ title: 'Soudný den', year: '1801', genre: 'Kantáta', description: 'Dramatická skladba s bohatou instrumentací a sborovou prací.' },
			{ title: 'Spi, spi, neviňátko', year: '1795', genre: 'Vánoční ukolébavka', description: 'Oblíbená pastorální ukolébavka pro sólový soprán a komorní orchestr.' }
		],
		trivia: [
			'Sokratovská metoda: Při výuce dětí kladl promyšlené otázky a vedl žáky k tomu, aby sami dospěli ke správnému poznání a logickému úsudku.',
			'Hygiena a jalovec: Měl mimořádný smysl pro hygienu tříd. Vyžadoval čerstvý vzduch a v zimním období nechával školní světnice vykuřovat jalovcem pro dezinfekci.',
			'První očkování v Rožmitále: Jeho syn Václav Ryba (*1800) byl vůbec prvním dítětem v Rožmitále pod Třemšínem očkovaným proti pravým neštovicím.',
			'Rybovo mravní heslo: Do ochozu kůru kostela sv. Jana Nepomuckého v Rožmitále byla zasazena deska s jeho osobním krédem: „Pozoruj denně tvé činy a zkoumej je.“'
		],
		anniversaryNote: '260 let od narození (1765)',
		tripSlugs: ['rozmitalsky-okruh-ryba'],
		places: [
			{
				name: 'Starý Rožmitál – Kostel Povýšení sv. Kříže',
				slug: 'stary-rozmital',
				relation: 'Místo premiéry České mše vánoční (varhany 1750) a hrob',
				image: '/images/places/stary-rozmital.jpg'
			},
			{
				name: 'Rožmitál pod Třemšínem – Zámek a muzeum',
				slug: 'rozmital-zamek',
				relation: 'Zámek s arcibiskupskou správou a Podbrdské muzeum',
				image: '/images/places/rozmital-zamek.jpg'
			}
		]
	},
	{
		id: 'brentner',
		slug: 'jan-josef-ignac-brentner',
		name: 'Jan Josef Ignác Brentner',
		birthYear: 1689,
		deathYear: 1742,
		period: 'Baroko',
		tagline: 'Významný mistr českého baroka, jehož hudba zněla v Evropě i v Jižní Americe',
		portrait: '/images/composers/brentner.jpg',
		coverImage: '/images/places/dobrany.jpg',
		quote: {
			text: '„Harmonie a zbožná melodie jsou nebeským darem povznášejícím lidskou mysl k věčnosti.“',
			source: 'Z předmluvy k Harmonica duodecatomeria (1720)'
		},
		quickFacts: {
			birthPlace: 'Dobřany u Plzně (pokřtěn 3. listopadu 1689)',
			deathPlace: 'Dobřany (28. června 1742)',
			restingPlace: 'Dobřany – hřbitov u kostela sv. Víta',
			primaryInstrument: 'Skladba, housle, varhany',
			teachers: ['Pravděpodobně jezuité a pražští varhaníci'],
			associates: ['Jezuitské bratrstvo u sv. Mikuláše na Malé Straně', 'Premonstráti v klášteře Teplá']
		},
		bio: [
			'Jan Josef Ignác Brentner se narodil v Dobřanech u Plzně v rodině purkmistra. Pobýval v Praze na Malé Straně, kde působil jako plodný a vysoce ceněný skladatel duchovní i komorní hudby.',
			'Svá moteta věnoval jezuitskému bratrstvu sv. Františka Xaverského při chrámu sv. Mikuláše na Malé Straně, ofertoria dedikoval opatovi premonstrátského kláštera v Teplé.',
			'Brentnerova hudba vynikala nevšední melodickou invencí a odrážela vlivy moderní italské barokní hudby (např. Antonia Vivaldiho). Díky jezuitskému řádu se jeho skladby šířily nejen po celé střední Evropě, ale jezuitští misionáři je zavezli až do Jižní Ameriky (do domorodých redukcí v Bolívii v oblasti Chiquitos a Moxos), kde se dochovaly v unikátních dobových opisech.',
			'Zemřel 28. června 1742 v Dobřanech, kde za nevyjasněných okolností utonul v řece Radbuze.'
		],
		famousWorks: [
			{ title: 'Harmonica duodecatomeria ecclesiastica, op. 1', year: '1720', genre: 'Duchovní moteta', description: 'Sbírka dvanácti latinských motet s doprovodem smyčců a bassa continua vydaná tiskem v Praze.' },
			{ title: 'Horae pomeridianae seu Concertus cammerales sex, op. 4', year: '1720', genre: 'Instrumentální koncerty', description: 'Šest komorních instrumentálních koncertů představujících vrchol české instrumentální hudby vrcholného baroka.' },
			{ title: 'Hymnodia divina, op. 3', year: '1718', genre: 'Duchovní hymny', description: 'Soubor duchovních árií a hymnů šířený jezuitskými misiemi.' }
		],
		trivia: [
			'Hudba v bolivijském pralese: V 80. letech 20. století objevili muzikologové v archivech jezuitských misií v Bolívii (Chiquitos) desítky partitur Brentnerových děl, které tamní domorodí indiáni hráli po generace.',
			'Brentnerovy sady: V rodných Dobřanech na břehu řeky Radbuzy byly zřízeny Brentnerovy sady s památníkem skladatele a plovoucím vyhlídkovým molem.',
			'Tematický katalog: Odborníci z Ústavu dějin umění Akademie věd ČR zpracovali kompletní vědecký tematický katalog Brentnerova hudebního odkazu.'
		],
		anniversaryNote: '335 let od narození (1689)',
		tripSlugs: ['martinske-steny-dobrany'],
		places: [
			{
				name: 'Dobřany – Památník a Brentnerovy sady',
				slug: 'dobrany',
				relation: 'Rodné město, náměstí TGM, památník v sadech a Martinské stěny',
				image: '/images/places/dobrany.jpg'
			}
		]
	},
	{
		id: 'linek',
		slug: 'jiri-ignac-linek',
		name: 'Jiří Ignác Linek',
		birthYear: 1725,
		deathYear: 1791,
		period: 'Raný klasicismus',
		tagline: 'Venkovský kantor v Bakově nad Jizerou a mistr půvabných českých pastorel',
		portrait: '/images/composers/linek.jpg',
		coverImage: '/images/places/bakov.jpg',
		quote: {
			text: '„Hej, hej, Lojzo, poslouchej, co já tobě povím, jakou novinu já vím!“',
			source: 'Jiří Ignác Linek – Vánoční pastorela'
		},
		quickFacts: {
			birthPlace: 'Bakov nad Jizerou (21. ledna 1725)',
			deathPlace: 'Bakov nad Jizerou (30. prosince 1791)',
			restingPlace: 'Bakov nad Jizerou – hřbitov u kostela sv. Bartoloměje',
			primaryInstrument: 'Varhany, cembalo, zpěv',
			teachers: ['Piaristé v Kosmonosích', 'Kolej v Mladé Boleslavi'],
			associates: ['Bakovští muzikanti a chrámový sbor u sv. Bartoloměje']
		},
		bio: [
			'Jiří Ignác Linek se narodil 21. ledna 1725 v Bakově nad Jizerou v rodině místního měšťana a hudebníka. Studoval u piaristů v Kosmonosích a posléze na gymnaziální koleji v Mladé Boleslavi, kde získal důkladné hudební vzdělání.',
			'Téměř celý život spojil se svým rodným městem. Od roku 1747 působil nepřetržitě přes čtyři desetiletí jako učitel a ředitel kůru (regenschori) v chrámu sv. Bartoloměje v Bakově nad Jizerou.',
			'Linek byl neobyčejně plodným autorem. Pro potřeby venkovských kostelů zkomponoval stovky skladeb – především proslulé české vánoční pastorely, sepolcra (velkopáteční pašijové hry pro Boží hrob), mše a instrumentální koncerty pro trubku.',
			'Zemřel 30. prosince 1791 v Bakově nad Jizerou na tuberkulózu a jeho odkaz je symbolem zlatého věku české kantorské muzikality.'
		],
		famousWorks: [
			{ title: 'Vánoční pastorely (např. Hej, hej, Lojzo!)', year: 'polovina 18. stol.', genre: 'Vánoční lidová pastorela', description: 'Půvabné dialogické pastorální scény zachycující prostou radost českých pastýřů spěchajících k Betlému.' },
			{ title: 'Koncert pro trubku a orchestr C dur', year: 'kolem 1770', genre: 'Instrumentální koncert', description: 'Slavnostní a technicky náročný barokně-klasicistní koncert pro clarinu (vysokou barokní trubku).' },
			{ title: 'Korunovační intráda', year: '1791', genre: 'Slavnostní fanfára', description: 'Zkomponováno pro pražskou korunovaci císaře Leopolda II.' }
		],
		trivia: [
			'Odkaz v Bakově: Bakovští rodáci dodnes ctí jeho památku na Mírovém náměstí a v kostele sv. Bartoloměje, kde je umístěna pamětní deska.',
			'Kantorská stezka: Mezi Bakovem nad Jizerou a Kosmonosy vede značená 8km turistická trasa spojující Linkovo rodiště s piaristickým klášterem v Kosmonosích.'
		],
		anniversaryNote: '300 let od narození (1725–2025)',
		tripSlugs: ['linkova-stezka-bakov-kosmonosy'],
		places: [
			{
				name: 'Bakov nad Jizerou – Kostel sv. Bartoloměje',
				slug: 'bakov-nad-jizerou',
				relation: 'Mírové náměstí, kostel sv. Bartoloměje a působiště',
				image: '/images/places/bakov.jpg'
			},
			{
				name: 'Kosmonosy – Piaristický klášter a Loreta',
				slug: 'kosmonosy',
				relation: 'Místo Linkových studií u piaristů v klášterním areálu',
				image: '/images/places/kosmonosy.jpg'
			}
		]
	},
	{
		id: 'suk',
		slug: 'josef-suk',
		name: 'Josef Suk',
		birthYear: 1874,
		deathYear: 1935,
		period: 'Romantismus',
		tagline: 'Básník tónů, člen Českého kvarteta, autor monumentálního Asraele a olympijský medailista',
		portrait: '/images/composers/suk.jpg',
		coverImage: '/images/places/krecovice.jpg',
		quote: {
			text: '„Cesta z Křečovic do Sedlčan, cesta ze Sedlčan k Svatému Jánu by mohla mnoho vyprávět, jak povstávalo a jak vyrůstalo moje dílo.“',
			source: 'Josef Suk na sklonku života'
		},
		quickFacts: {
			birthPlace: 'Křečovice u Sedlčan (4. ledna 1874)',
			deathPlace: 'Benešov (29. května 1935)',
			restingPlace: 'Křečovice – hřbitov u kostela sv. Lukáše',
			primaryInstrument: 'Housle, klavír',
			teachers: ['Antonín Bennewitz (housle)', 'Karel Stecker a Antonín Dvořák (skladba)'],
			associates: ['Karel Hoffmann, Oskar Nedbal, Otto Berger (České kvarteto)', 'Otilka Suková (rozená Dvořáková)']
		},
		bio: [
			'Josef Suk se narodil 4. ledna 1874 v Křečovicích v rodině učitele a ředitele kůru. V letech 1885 až 1892 studoval na Pražské konzervatoři hru na housle u Antonína Bennewitze a skladbu nejprve u Karla Steckera a posléze v mistrovské třídě Antonína Dvořáka, jehož se stal nejmilejším žákem.',
			'Společně se třemi spolužáky z konzervatoře (Karlem Hoffmannem, Oskarem Nedbalem a Ottou Bergerem) založil roku 1892 legendární České kvarteto. Toto těleso dosáhlo světového věhlasu a položilo základy moderní české komorní interpretace. Suk v něm působil jako druhý houslista více než 40 let až do roku 1933 a absolvoval s ním přes 4 000 koncertů po celém světě.',
			'Roku 1898 se oženil s milovanou dcerou Antonína Dvořáka Otilkou. V roce 1901 se jim narodil syn Josef. V letech 1904 a 1905 však Suka stihla dvojí osudová tragédie: nejprve zemřel jeho tchán a učitel Antonín Dvořák a o rok později i mladá manželka Otilka ve věku pouhých 27 let. Z této hluboké bolesti vyrostlo jeho vrcholné symfonické dílo – smuteční symfonie Asrael.',
			'Od roku 1922 působil jako profesor skladby na Pražské konzervatoři a byl čtyřikrát zvolen jejím rektorem. Mezi jeho žáky patřili Bohuslav Martinů, Jaroslav Ježek, Klement Slavický či Pavel Bořkovec. Zemřel 29. května 1935 v Benešově a je pohřben v rodných Křečovicích.'
		],
		famousWorks: [
			{ title: 'Asrael, op. 27', year: '1906', genre: 'Symfonie pro velký orchestr', description: 'Monumentální smuteční symfonie věnovaná památce Antonína Dvořáka a Otilky Sukové. Jedno z nejpůsobivějších děl hudby 20. století.' },
			{ title: 'Radúz a Mahulena, op. 16 (Pohádka)', year: '1898', genre: 'Scénická hudba / orchestrální suita', description: 'Lyrická scénická hudba k pohádkovému dramatu Julia Zeyera plná vroucí něhy a lásky k Otilce.' },
			{ title: 'Praga, op. 26', year: '1904', genre: 'Symfonická báseň', description: 'Vlastenecký hold královskému městu Praze a jeho husitské i královské minulosti.' },
			{ title: 'Pochod „V nový život“, op. 35c', year: '1919', genre: 'Sokolský slavnostní pochod', description: 'Vítězný sokolský pochod, který získal stříbrnou medaili na olympijských hrách v Los Angeles roku 1932.' }
		],
		trivia: [
			'Olympijská medaile: V roce 1932 získal Josef Suk na X. olympijských hrách v Los Angeles stříbrnou medaili v uměleckých soutěžích za svůj sokolský pochod V nový život.',
			'První housličky: Městské muzeum v Sedlčanech uchovává v expozici první malé dětské housličky, na které malý Josífek v Křečovicích začínal hrát.',
			'Klavír Bösendorfer: V muzeu v Benešově se nachází Sukův mistrovský salonní klavír Bösendorfer, na kterém komponoval svá vrcholná pozdní díla.',
			'Sukova stezka: Cesta mezi Křečovicemi a Sedlčany podél potoka Mastníka nese název Sukova stezka a měří 12 km.'
		],
		anniversaryNote: '150 let od narození (1874–2024)',
		tripSlugs: [
			'sukuv-krecovicky-okruh',
			'sukova-stezka-krecovice-sedlcany'
		],
		places: [
			{
				name: 'Křečovice – Památník Josefa Suka',
				slug: 'krecovice',
				relation: 'Rodný dům, památník skladatele a hrob u kostela sv. Lukáše',
				image: '/images/places/krecovice.jpg'
			}
		]
	},
	{
		id: 'kopriva',
		slug: 'karel-blazej-kopriva',
		name: 'Karel Blažej Kopřiva',
		birthYear: 1756,
		deathYear: 1785,
		period: 'Raný klasicismus',
		tagline: 'Geniální varhaník z Cítolib, mistr fug a předčasně zesnulý talent raného klasicismu',
		portrait: '/images/composers/kopriva.jpg',
		coverImage: '/images/places/citoliby.jpg',
		quote: {
			text: '„Hudba je nejčistším vyjádřením ducha, jehož zákony jsou vryty do varhanních píšťal.“',
			source: 'Cítolibská hudební tradice'
		},
		quickFacts: {
			birthPlace: 'Cítoliby u Loun (9. února 1756)',
			deathPlace: 'Cítoliby (15. května 1785)',
			restingPlace: 'Cítoliby – hřbitov u kostela sv. Jakuba Většího',
			primaryInstrument: 'Varhany, cembalo',
			teachers: ['Václav Jan Kopřiva (otec)', 'Josef Ferdinand Norbert Seger (Praha)'],
			associates: ['Hrabě Arnošt Karel Pachta (mecenáš)', 'Josef Deboeuf (obchodník a podporovatel)']
		},
		bio: [
			'Karel Blažej Kopřiva se narodil 9. února 1756 v Cítolibech na Lounsku ve slavné hudebnické rodině kantora Václava Jana Kopřivy. Vyrůstal v jedinečném prostředí cítolibské skladatelské školy, kterou na svém panství velkoryse pěstoval hrabě Arnošt Karel Pachta s proslulou zámeckou kapelou a sochařskou výzdobou z dílny Matyáše Bernarda Brauna.',
			'Odešel studovat do Prahy k přednímu českému varhaníkovi a komponistovi Josefu Ferdinandu Norbertu Segerovi, kde dosáhl fenomenálního varhanního mistrovství v kontrapunktu a improvizaci.',
			'Po návratu do Cítolib se potýkal s nepříliš utěšenými existenčními podmínkami hudebníka v hraběcích službách. Působil jako varhaník v zámeckém i farním kostele sv. Jakuba Většího a vyučoval hře na klávesové nástroje.',
			'Napsal 12 symfonií (bohužel nedochovaných), 8 varhanních koncertů (z nichž se dochoval jediný v Es dur), 7 mší, Requiem in C a řadu offertorií, árií, preludií a mistrovských fug. Jeho oslnivou dráhu předčasně ukončila tuberkulóza 15. května 1785 ve věku pouhých 29 let.'
		],
		famousWorks: [
			{ title: 'Fuga Debefe (na kryptogram Josefa Deboeufa)', year: 'kolem 1780', genre: 'Varhanní fuga', description: 'Fascinující varhanní kompozice postavená na tónech D-Es-B-Es-F-Es (kryptogram jména lounského mecenáše Josefa Deboeufa).' },
			{ title: 'Koncert pro varhany a orchestr Es dur', year: 'kolem 1778', genre: 'Varhanní koncert', description: 'Jediný v úplnosti dochovaný varhanní koncert z původních osmi, doklad vrcholného klasicistního mistrovství.' },
			{ title: 'Requiem in C', year: 'kolem 1782', genre: 'Chrámové rekviem', description: 'Hluboce procítěné smuteční dílo s bohatým vokálním i dechovým obsazením.' }
		],
		trivia: [
			'Kryptogram Debefe: Podobně jako J. S. Bach tvořil témata na tóny B-A-C-H, vytvořil Kopřiva geniální fugu na jméno svého mecenáše Josefa Deboeufa (D-E-B-E-F-E).',
			'Zámek Cítoliby: Zámek s parkem plným soch M. B. Brauna nedávno získal nového majitele a připravuje kulturní a divadelní program na rok 2027.',
			'Naučná stezka Cítoliby: Začíná na Zemětské ulici u úřadu městyse (GPS 50.3336, 13.8101) a na trase cca 3 km nabízí 12 tematických zastavení o cítolibské hudbě a památkách.'
		],
		anniversaryNote: '270 let od narození (1756–2026)',
		tripSlugs: ['naucna-stezka-citoliby'],
		places: [
			{
				name: 'Cítoliby na Lounsku – Kostel sv. Jakuba',
				slug: 'citoliby',
				relation: 'Zámek, kostel sv. Jakuba Většího s historickými varhanami',
				image: '/images/places/citoliby.jpg'
			}
		]
	}
];

export function getComposerBySlug(slug: string): Composer | undefined {
	return composers.find((c) => c.slug === slug);
}
