import type { Place } from '$lib/types';

export const places: Place[] = [
	{
		id: 'nelahozeves',
		slug: 'nelahozeves',
		name: 'Nelahozeves – Rodný dům',
		subtitle: 'Rodný dům Antonína Dvořáka pod renesančním zámkem',
		composerSlug: 'antonin-dvorak',
		composerName: 'Antonín Dvořák',
		image: '/images/places/nelahozeves.jpg',
		distanceFromPragueKm: 35,
		driveTimeHours: '35 minut autem / 30 minut vlakem',
		description: 'V malebné vsi na břehu Vltavy se 8. září 1841 narodil Antonín Dvořák. Jeho otec František zde provozoval hostinec a řeznictví. V nedávno nově zrekonstruovaném rodném domě čeká návštěvníky moderní zážitková expozice zachycující dětství hudebního génia, venkovský život 19. století, jeho první houslové pokusy a počátky celoživotní fascinace železnicí.',
		tripSlug: 'dvorakova-stezka-kralupy-nelahozeves',
		tips: [
			'Zcela nově otevřený Rodný dům Antonína Dvořáka s interaktivní zážitkovou expozicí',
			'Renesanční zámek Nelahozeves s lobkowiczkými uměleckými sbírkami',
			'Kostel sv. Ondřeje, kde byl Dvořák pokřtěn a poprvé zpíval na kůru',
			'Dvořákova stezka podél Vltavy z Kralup nad Vltavou'
		],
		coordinates: {
			lat: 50.2612,
			lng: 14.3015,
			mapX: 43,
			mapY: 34
		}
	},
	{
		id: 'nelahozeves-zamek',
		slug: 'nelahozeves-zamek',
		name: 'Zámek Nelahozeves',
		subtitle: 'Renesanční lobkowiczký zámek nad rodným domem skladatele',
		composerSlug: 'antonin-dvorak',
		composerName: 'Antonín Dvořák',
		image: '/images/places/nelahozeves-zamek.jpg',
		distanceFromPragueKm: 35,
		driveTimeHours: '35 minut autem',
		description: 'Monumentální renesanční zámek tyčící se na skále nad Vltavou přímo nad Dvořákovým rodným domem. Malý Antonín zde jako chlapec poprvé vystupoval se svou kapelou před zámeckým publikem. Dnes zámek spravuje rodina Lobkowiczů a nabízí unikátní umělecké sbírky i historické hudební nástroje.',
		tripSlug: 'dvorakova-stezka-kralupy-nelahozeves',
		tips: [
			'Stálá expozice Pohled do šlechtického interiéru rodiny Lobkowiczů',
			'Hudební sál a kaple sv. Rocha',
			'Zámecká zahrada s vyhlídkou na Vltavu a rodný dům'
		],
		coordinates: {
			lat: 50.2608,
			lng: 14.3038,
			mapX: 43,
			mapY: 34
		}
	},
	{
		id: 'vysoka-u-pribrami',
		slug: 'vysoka-u-pribrami',
		name: 'Vysoká u Příbrami – Památník',
		subtitle: 'Památník Antonína Dvořáka v novorenesančním zámečku',
		composerSlug: 'antonin-dvorak',
		composerName: 'Antonín Dvořák',
		image: '/images/places/vysoka.jpg',
		distanceFromPragueKm: 65,
		driveTimeHours: '50 minut autem',
		description: 'Vysoká u Příbrami byla Dvořákovým milovaným letním útočištěm po více než dvacet let. V novorenesančním zámečku hraběte Václava Kounice (skladatelova švagra) a ve své vile Rusalka nalezl hluboký tvůrčí klid. Zde zkomponoval opery Rusalka, Čert a Káča, Jakobín, Armida a části Novosvětské symfonie.',
		tripSlug: 'okruh-vysoka-u-pribrami',
		tips: [
			'Památník Antonína Dvořáka v novorenesančním zámečku s rozsáhlým anglickým parkem',
			'Stálá expozice věnovaná tvorbě na Vysoké a scénografii Rusalky',
			'Vila Rusalka – skladatelův vlastní venkovský dům s holubníkem',
			'Naučná stezka okolními brdskými lesy'
		],
		coordinates: {
			lat: 49.6382,
			lng: 13.9405,
			mapX: 38,
			mapY: 62
		}
	},
	{
		id: 'rusalcino-jezirko',
		slug: 'rusalcino-jezirko',
		name: 'Rusalčino jezírko ve Vysoké',
		subtitle: 'Pohádkové lesní jezírko, které inspirovalo slavnou operu Rusalka',
		composerSlug: 'antonin-dvorak',
		composerName: 'Antonín Dvořák',
		image: '/images/places/rusalcino-jezirko.jpg',
		distanceFromPragueKm: 66,
		driveTimeHours: '50 minut autem + 15 minut lesní chůze',
		description: 'Tiché lesní jezírko obklopené vysokými stromy a travinami uprostřed brdských lesů nedaleko památníku ve Vysoké. Právě zde skladatel čerpal autentickou atmosféru pro básnický svět vodních bytostí a nesmrtelnou árii Měsíčku na nebi hlubokém.',
		tripSlug: 'okruh-vysoka-u-pribrami',
		tips: [
			'Romantické lesní zátiší ideální pro tiché rozjímání a poslech hudby v přírodě',
			'Dostupné po značené stezce od zámečku (cca 1,2 km pohodlné chůze)',
			'Vhodné pro návštěvu v každém ročním období, zejména v podzimním zbarvení'
		],
		coordinates: {
			lat: 49.6325,
			lng: 13.9315,
			mapX: 38,
			mapY: 62
		}
	},
	{
		id: 'zlonice',
		slug: 'zlonice',
		name: 'Zlonice – Památník A. Dvořáka',
		subtitle: 'Městečko hudebních studií u kantora Antonína Liehmanna',
		composerSlug: 'antonin-dvorak',
		composerName: 'Antonín Dvořák',
		image: '/images/places/zlonice.jpg',
		distanceFromPragueKm: 45,
		driveTimeHours: '40 minut autem',
		description: 'Do Zlonic byl mladý Antonín poslán na praxi k místnímu řezníkovi a zároveň se zde učil německy. Především se však dostal pod křídla vynikajícího kantora, varhaníka a skladatele Antonína Liehmanna. Ten rozpoznal Dvořákovo mimořádné nadání, učil ho hře na klavír, varhany, housle i základům harmonie a přesvědčil Dvořákova otce, aby syna poslal na varhanickou školu do Prahy. Jako projev vděku věnoval Dvořák svou 1. symfonii c moll právě Zlonicím (Zlonické zvony).',
		tips: [
			'Památník Antonína Dvořáka v historické budově barokního špitálu',
			'Liehmannův dům a expozice staré školy',
			'Kostel Nanebevzetí Panny Marie, kde Dvořák hrával na varhany'
		],
		coordinates: {
			lat: 50.2831,
			lng: 14.0924,
			mapX: 40,
			mapY: 33
		}
	},
	{
		id: 'kralupy-muzeum',
		slug: 'kralupy-muzeum',
		name: 'Městské muzeum v Kralupech nad Vltavou',
		subtitle: 'Výchozí bod Dvořákovy stezky do Nelahozevsi',
		composerSlug: 'antonin-dvorak',
		composerName: 'Antonín Dvořák',
		image: '/images/places/kralupy-muzeum.jpg',
		distanceFromPragueKm: 28,
		driveTimeHours: '30 minut autem / vlakem',
		description: 'Kralupské městské muzeum je výchozím bodem značené Dvořákovy stezky vedoucí po břehu Vltavy až do Nelahozevsi. Uchovává rozsáhlé historické a archeologické sbírky Kralupska i památky na skladatelovy návštěvy a vazby k městu.',
		tripSlug: 'dvorakova-stezka-kralupy-nelahozeves',
		tips: [
			'Expozice dějin Kralupska a pamětní síň básníka Jaroslava Seiferta',
			'Vyhlídkový vrch Hostibejk v bezprostřední blízkosti muzea',
			'Turistické značení Dvořákovy stezky podél řeky'
		],
		coordinates: {
			lat: 50.2412,
			lng: 14.3112,
			mapX: 43,
			mapY: 36
		}
	},
	{
		id: 'praha-rudolfinum',
		slug: 'praha-rudolfinum',
		name: 'Praha – Rudolfinum',
		subtitle: 'Sídlo České filharmonie a Dvořákovy síně',
		composerSlug: 'antonin-dvorak',
		composerName: 'Antonín Dvořák',
		image: '/images/places/rudolfinum.jpg',
		distanceFromPragueKm: 0,
		driveTimeHours: 'Centrum Prahy',
		description: 'Novorenesanční klenot na pravém břehu Vltavy. 4. ledna 1896 zde Antonín Dvořák osobně dirigoval historicky první koncert nově založené České filharmonie, sestavený výhradně z jeho vlastních děl. Hlavní koncertní sál dnes nese jeho jméno a před budovou stojí skladatelova bronzová socha.',
		tips: [
			'Návštěva koncertu České filharmonie ve Dvořákově síni s nepřekonatelnou akustikou',
			'Galerie Rudolfinum s moderními výstavami',
			'Socha Antonína Dvořáka na náměstí Jana Palacha'
		],
		coordinates: {
			lat: 50.0898,
			lng: 14.4158,
			mapX: 45,
			mapY: 45
		}
	},
	{
		id: 'litomysl',
		slug: 'litomysl',
		name: 'Litomyšl',
		subtitle: 'Rodný dům Bedřicha Smetany v zámeckém pivovaru',
		composerSlug: 'bedrich-smetana',
		composerName: 'Bedřich Smetana',
		image: '/images/places/litomysl.jpg',
		distanceFromPragueKm: 162,
		driveTimeHours: '1,8 hodiny autem',
		description: 'Litomyšl je město, kde se v zámeckém pivovaru 2. března 1824 narodil Bedřich Smetana jako jedenácté dítě a vytoužený první syn sládka Františka Smetany. Můžete navštívit jeho rodný byt v přízemí pivovaru, renesanční zámek zapsaný na seznam UNESCO i historické náměstí, kde malý Bedříšek poprvé hrál na housle a klavír. Každé léto zde probíhá mezinárodní operní festival Smetanova Litomyšl.',
		tripSlug: 'litomyslsky-okruh',
		tips: [
			'Rodný byt Bedřicha Smetany v zámeckém pivovaru s interaktivní expozicí',
			'Renesanční státní zámek Litomyšl (památka UNESCO) se zámeckým divadélkem',
			'Klášterní zahrady se sochami Olbrama Zoubka a výhledem na město',
			'Procházka pod loubím na Smetanově náměstí a socha skladatele'
		],
		coordinates: {
			lat: 49.8705,
			lng: 16.3125,
			mapX: 63,
			mapY: 52
		}
	},
	{
		id: 'jabkenice',
		slug: 'jabkenice',
		name: 'Jabkenice – Památník Bedřicha Smetany',
		subtitle: 'Myslivna v lesích, kde Smetana zkomponoval Hubičku a Vltavu',
		composerSlug: 'bedrich-smetana',
		composerName: 'Bedřich Smetana',
		image: '/images/places/jabkenice.jpg',
		distanceFromPragueKm: 60,
		driveTimeHours: '45 minut autem',
		description: 'Po ztrátě sluchu na podzim roku 1874 se Bedřich Smetana uchýlil do klidného lesního prostředí v Jabkenicích u Mladé Boleslavi k rodině své dcery Žofie a jejího manžela, knížecího lesmistra Josefa Schwarze. Zde prožil posledních téměř deset let života. V naprostém tichu zde stvořil svá vrcholná mistrovská díla: opery Hubička, Tajemství, Čertova stěna, cyklus smyčcových kvartetů Z mého života a dokončil symfonickou báseň Vltava a celý cyklus Má vlast.',
		tripSlug: 'jabkenicka-prochazka',
		tips: [
			'Památník Bedřicha Smetany v budově bývalé lesovny s původní pracovnou a klavírem',
			'Jabkenická obora s daňky a soustavou lesních rybníků',
			'Naučná stezka krajem Bedřicha Smetany'
		],
		coordinates: {
			lat: 50.3235,
			lng: 15.0135,
			mapX: 52,
			mapY: 33
		}
	},
	{
		id: 'stary-rozmital',
		slug: 'stary-rozmital',
		name: 'Starý Rožmitál – Kostel Povýšení sv. Kříže',
		subtitle: 'Místo premiéry České mše vánoční s historickými varhanami z roku 1750',
		composerSlug: 'jakub-jan-ryba',
		composerName: 'Jakub Jan Ryba',
		image: '/images/places/stary-rozmital.jpg',
		distanceFromPragueKm: 78,
		driveTimeHours: '1 hodina autem',
		description: 'V nejstarší části podbrdského městečka stojí starobylý farní kostel Povýšení sv. Kříže s unikátními varhanami z roku 1750. Právě zde působil Jakub Jan Ryba od roku 1788 jako regenschori a učitel a zde o Vánocích roku 1796 poprvé zazněla jeho slavná Česká mše vánoční (Hej mistře). Na přilehlém hřbitově se nachází Rybův hrob i hrob jeho syna.',
		tripSlug: 'rozmitalsky-okruh-ryba',
		tips: [
			'Autentické barokní varhany z roku 1750, na které hrál sám J. J. Ryba',
			'Pamětní deska České mše vánoční instalovaná na kostele',
			'Hrob Jakuba Jana Ryby a jeho syna na farním hřbitově',
			'Štědrovečerní provedení České mše vánoční v původním chrámovém prostoru'
		],
		coordinates: {
			lat: 49.6015,
			lng: 13.8550,
			mapX: 37,
			mapY: 63
		}
	},
	{
		id: 'rozmital-zamek',
		slug: 'rozmital-zamek',
		name: 'Rožmitál pod Třemšínem – Zámek a muzeum',
		subtitle: 'Sídlo arcibiskupského panství a expozice kantorského života J. J. Ryby',
		composerSlug: 'jakub-jan-ryba',
		composerName: 'Jakub Jan Ryba',
		image: '/images/places/rozmital-zamek.jpg',
		distanceFromPragueKm: 78,
		driveTimeHours: '1 hodina autem',
		description: 'Renesanční zámek s arcibiskupskou správou byl úředním centrem města za Rybova života. Dnes v sousedství leží moderní Podbrdské muzeum s rozsáhlou expozicí věnovanou životu Jakuba Jana Ryby, jeho pedagogickému odkazu i dobovým hudebním nástrojům. Zámek obklopuje malebný Podzámecký rybník.',
		tripSlug: 'rozmitalsky-okruh-ryba',
		tips: [
			'Podbrdské muzeum s expozicí Jakuba Jana Ryby a největší sbírkou historických kočárků',
			'Alej Johanky z Rožmitálu spojující město se Starým Rožmitálem',
			'Kostel sv. Jana Nepomuckého na náměstí s Rybovým heslem v kůru',
			'Cvokařské muzeum v uličkách Starého Rožmitálu'
		],
		coordinates: {
			lat: 49.6052,
			lng: 13.8641,
			mapX: 37,
			mapY: 63
		}
	},
	{
		id: 'dobrany',
		slug: 'dobrany',
		name: 'Dobřany – Památník a Brentnerovy sady',
		subtitle: 'Rodiště barokního génia na břehu řeky Radbuzy',
		composerSlug: 'jan-josef-ignac-brentner',
		composerName: 'Jan Josef Ignác Brentner',
		image: '/images/places/dobrany.jpg',
		distanceFromPragueKm: 105,
		driveTimeHours: '1,1 hodiny autem',
		description: 'Západočeské město Dobřany je rodištěm významného skladatele českého vrcholného baroka Jana Josefa Ignáce Brentnera (1689–1742). Jeho duchovní moteta a koncerty byly tak oblíbené, že je jezuité odvezli až do indiánských misií v Jižní Americe. Skladatel tragicky utonul v řece Radbuze. Dnes jej v Dobřanech připomínají nově upravené Brentnerovy sady s památníkem a plovoucím molem i barokní chrám sv. Mikuláše na náměstí.',
		tripSlug: 'martinske-steny-dobrany',
		tips: [
			'Brentnerovy sady s památníkem skladatele a plovoucím molem na Radbuze',
			'Barokní kostel sv. Mikuláše a kostel sv. Víta na náměstí T. G. Masaryka',
			'Naučná stezka Martinské stěny s 14 zastaveními křížové cesty',
			'Místní pivovar a vyhlášená dobřanská zmrzlina'
		],
		coordinates: {
			lat: 49.6548,
			lng: 13.2952,
			mapX: 30,
			mapY: 61
		}
	},
	{
		id: 'bakov-nad-jizerou',
		slug: 'bakov-nad-jizerou',
		name: 'Bakov nad Jizerou – Kostel sv. Bartoloměje',
		subtitle: 'Působiště kantora a skladatele českých vánočních pastorel',
		composerSlug: 'jiri-ignac-linek',
		composerName: 'Jiří Ignác Linek',
		image: '/images/places/bakov.jpg',
		distanceFromPragueKm: 65,
		driveTimeHours: '50 minut autem',
		description: 'V Bakově nad Jizerou se v roce 1725 narodil a po celý život působil Jiří Ignác Linek – přední představitel české kantorské hudební tradice. Působil zde plných 44 let jako učitel a ředitel kůru v kostele sv. Bartoloměje. Složil stovky chrámových skladeb, oslavné intrády pro dechové nástroje i neobyčejně půvabné vánoční pastorely zachycující venkovský lidový život.',
		tripSlug: 'linkova-stezka-bakov-kosmonosy',
		tips: [
			'Goticko-renesanční kostel sv. Bartoloměje, kde Linek hrával na varhany',
			'Linkova pamětní deska na historické budově školy na náměstí',
			'Výletní stezka údolím Jizery s výhledem na hrad Zvířetice',
			'Tradiční bakovské pletení z orobince v místním muzeu'
		],
		coordinates: {
			lat: 50.4825,
			lng: 14.9412,
			mapX: 51,
			mapY: 28
		}
	},
	{
		id: 'kosmonosy',
		slug: 'kosmonosy',
		name: 'Kosmonosy – Piaristický klášter a Loreta',
		subtitle: 'Místo Linkových hudebních studií v barokním klášterním areálu',
		composerSlug: 'jiri-ignac-linek',
		composerName: 'Jiří Ignác Linek',
		image: '/images/places/kosmonosy.jpg',
		distanceFromPragueKm: 60,
		driveTimeHours: '45 minut autem',
		description: 'V Kosmonosích u Mladé Boleslavi získal mladý Jiří Ignác Linek své základní hudební a rétorické vzdělání v piaristické koleji. Piaristé byli proslulí svým důrazem na hudební výchovu a díky nim se mladý kantor seznámil s moderní italskou operní a instrumentální tvorbou. V areálu stojí rovněž slavná Loreta od architekta Giovanniho Battisty Alliprandiho.',
		tripSlug: 'linkova-stezka-bakov-kosmonosy',
		tips: [
			'Barokní areál piaristického kláštera a kostela Nalezení sv. Kříže',
			'Kosmonoská Loreta se zvonicí a sochařskou výzdobou rodiny Jelínků',
			'Přírodní biotopové koupaliště v Kosmonosích',
			'Zámecký park a památné lípy'
		],
		coordinates: {
			lat: 50.4398,
			lng: 14.9285,
			mapX: 51,
			mapY: 30
		}
	},
	{
		id: 'krecovice',
		slug: 'krecovice',
		name: 'Křečovice – Památník Josefa Suka',
		subtitle: 'Rodný dům skladatele a kostel sv. Lukáše v malebném Posázaví',
		composerSlug: 'josef-suk',
		composerName: 'Josef Suk',
		image: '/images/places/krecovice.jpg',
		distanceFromPragueKm: 55,
		driveTimeHours: '45 minut autem',
		description: 'Křečovice v malebné středočeské krajině byly domovem Josefa Suka (1874–1935). Jeho otec zde byl řídícím učitelem a varhaníkem. Suk v Křečovicích prožil šťastné dětství a vracel se sem celý život z koncertních turné Českého kvarteta. Zde složil symfonii Asrael, Pohádku i Zrání. V jeho rodném domě je zřízen Památník Josefa Suka zachovaný v autentickém stavu včetně mistrova klavíru.',
		tripSlug: 'sukuv-krecovicky-okruh',
		tips: [
			'Památník Josefa Suka v rodném domku se skladatelovou pracovnou a osobními předměty',
			'Kostel sv. Lukáše s varhanami, kde malý Suk začínal s hudbou',
			'Hrobka rodiny Sukovy na místním hřbitově',
			'Sukova stezka pro pěší a cyklisty vedoucí do Sedlčan'
		],
		coordinates: {
			lat: 49.7212,
			lng: 14.4425,
			mapX: 45,
			mapY: 59
		}
	},
	{
		id: 'citoliby',
		slug: 'citoliby',
		name: 'Cítoliby – Kostel sv. Jakuba Většího',
		subtitle: 'Centrum cítolibské kantorské školy s mistrovskými barokními varhanami',
		composerSlug: 'karel-blazej-kopriva',
		composerName: 'Karel Blažej Kopřiva',
		image: '/images/places/citoliby.jpg',
		distanceFromPragueKm: 62,
		driveTimeHours: '50 minut autem',
		description: 'Cítoliby u Loun byly v 18. století zázrakem české hudební kultury. V malé poddanské vsi hraběte Arnošta Pachty z Rájova působila celá dynastie hudebních kantorů – především Václav Jan Kopřiva a jeho geniální syn Karel Blažej Kopřiva (1756–1785), varhanní virtuos srovnávaný s Mozartem. V barokním chrámu sv. Jakuba Většího se dodnes nacházejí historické varhany, na něž Kopřivové hrávali své fugy a koncerty.',
		tripSlug: 'naucna-stezka-citoliby',
		tips: [
			'Chrám sv. Jakuba Většího s barokními varhanami cítolibských mistrů',
			'Naučná stezka po stopách cítolibské hudební minulosti',
			'Zámek Cítoliby s historickým parkem a sochařskou výzdobou Matyáše Bernarda Brauna',
			'Hroby kantorů na starém hřbitově'
		],
		coordinates: {
			lat: 50.3345,
			lng: 13.8115,
			mapX: 36,
			mapY: 32
		}
	},
	{
		id: 'praha-vysehrad',
		slug: 'praha-vysehrad',
		name: 'Praha – Vyšehrad a Slavín',
		subtitle: 'Místo posledního odpočinku největších osobností české kultury',
		composerSlug: 'antonin-dvorak',
		composerName: 'Antonín Dvořák a Bedřich Smetana',
		image: '/images/places/vysehrad.jpg',
		distanceFromPragueKm: 0,
		driveTimeHours: 'Centrum Prahy',
		description: 'Mýtická vyšehradská skála nad Vltavou je národním památným místem. Na zdejším hřbitově a ve společné hrobce Slavín odpočívají nejvýznamnější osobnosti českého národa. Hrob Antonína Dvořáka s arkádovou hrobkou navrženou Antonínem Wiehlem a hrob Bedřicha Smetany patří k nejnavštěvovanějším pietním místům české hudby.',
		tips: [
			'Hrob Antonína Dvořáka v severních arkádách vyšehradského hřbitova',
			'Hrob Bedřicha Smetany v centrální části hřbitova',
			'Monumentální hrobka Slavín',
			'Panoramatická vyhlídka na vltavské údolí a Pražský hrad'
		],
		coordinates: {
			lat: 50.0645,
			lng: 14.4179,
			mapX: 45,
			mapY: 46
		}
	}
];

export function getPlaceBySlug(slug: string): Place | undefined {
	return places.find((p) => p.slug === slug);
}

export function getPlacesByComposerSlug(composerSlug: string): Place[] {
	return places.filter((p) => p.composerSlug === composerSlug);
}
