import type { QuizTopic } from '$lib/types';

export const quizTopics: QuizTopic[] = [
	{
		id: 'souhrnny-kviz',
		title: 'Velký znalostní kvíz o českých skladatelích',
		subtitle: 'Prověřte své znalosti o životech, dílech a kuriozitách českých hudebních velikánů',
		badge: 'Souhrnný test',
		description: 'Výběr nejzajímavějších otázek z biografií, tvorby a historických reálií od baroka až po moderní 20. století.',
		questions: [
			{
				id: 'sq-1',
				question: 'Které čtyři Erbenovy balady zhudebnil Antonín Dvořák do slavných symfonických básní?',
				options: [
					'Vodník, Polednice, Zlatý kolovrat a Holoubek',
					'Kytice, Poklad, Svatební košile a Vrba',
					'Dceřina kletba, Štědrý den, Lilie a Záhořovo lože',
					'Vodník, Polednice, Holoubek a Kytice'
				],
				correctAnswer: 0,
				explanation: 'Antonín Dvořák zkomponoval v roce 1896 čtyři symfonické básně op. 107–110: Vodník, Polednice, Zlatý kolovrat a Holoubek. Vedle toho zhudebnil také Svatební košili jako velkou kantátu.',
				composerSlug: 'antonin-dvorak',
				composerName: 'Antonín Dvořák'
			},
			{
				id: 'sq-2',
				question: 'Kde tvořil Bedřich Smetana po úplné ztrátě sluchu a kde dokončil monumentální cyklus Má vlast?',
				options: [
					'V zámeckém pivovaru v Litomyšli',
					'V myslivně v Jabkenicích u své dcery Žofie a zetě lesmistra Schwarze',
					'Ve švédském Göteborgu',
					'Na zámku Bon Repos u hraběte Thuna'
				],
				correctAnswer: 1,
				explanation: 'Po ohluchnutí v roce 1874 našel Smetana klidné útočiště v jabkenické myslivně v rodině dcery Žofie. V naprostém tichu zde zkomponoval druhou polovinu Mé vlasti, opery Hubička i Tajemství a kvartet Z mého života.',
				composerSlug: 'bedrich-smetana',
				composerName: 'Bedřich Smetana'
			},
			{
				id: 'sq-3',
				question: 'Jak dbal osvícenský kantor Jakub Jan Ryba o zdraví a čistotu vzduchu ve školních třídách v Rožmitále?',
				options: [
					'Nechával třídy i v zimním období pravidelně vykuřovat jalovcem',
					'Vyučoval žáky výhradně pod širým nebem u rybníka',
					'Zakazoval používání kříd na tabuli',
					'Každé ráno poléval podlahu octovou vodou'
				],
				correctAnswer: 0,
				explanation: 'Jakub Jan Ryba přísně dbal na hygienu a čerstvý vzduch. Školní třídy v Rožmitále pod Třemšínem nechával i v třeskutých mrazech vykuřovat sušeným jalovcem pro dezinfekci prostředí.',
				composerSlug: 'jakub-jan-ryba',
				composerName: 'Jakub Jan Ryba'
			},
			{
				id: 'sq-4',
				question: 'Jaké mimořádné sportovně-umělecké ocenění získal skladatel Josef Suk na X. olympijských hrách v Los Angeles v roce 1932?',
				options: [
					'Zlatou medaili za skladbu Asrael',
					'Stříbrnou medaili za slavnostní sokolský pochod „V nový život“',
					'Bronzovou medaili v šermu fleretem',
					'Čestné uznání za scénickou hudbu k Radúzovi a Mahuleně'
				],
				correctAnswer: 1,
				explanation: 'V dobách, kdy byly součástí olympijských her i umělecké soutěže, získal Josef Suk roku 1932 v Los Angeles stříbrnou olympijskou medaili za svůj pochod „V nový život“, který složil pro Sokol.',
				composerSlug: 'josef-suk',
				composerName: 'Josef Suk'
			},
			{
				id: 'sq-5',
				question: 'V jaké vzdálené části světa byly ve 20. století nečekaně objeveny dochované opisy děl dobřanského barokního skladatele Jana Josefa Ignáce Brentnera?',
				options: [
					'V indiánských jezuitských misiích v pralesích Bolívie (Chiquitos a Moxos)',
					'V císařském archivu v japonském Kjótu',
					'V knihovně na dvoře perského šáha',
					'V královském paláci na Madagaskaru'
				],
				correctAnswer: 0,
				explanation: 'Díky jezuitským misionářům doputovaly Brentnerovy hudební tisky až přes Atlantik do Jižní Ameriky, kde je domorodí indiáni v bolivijských oblastech Chiquitos a Moxos po generace opisovali a provozovali v pralesních chrámech.',
				composerSlug: 'jan-josef-ignac-brentner',
				composerName: 'Jan Josef Ignác Brentner'
			},
			{
				id: 'sq-6',
				question: 'Jak vznikl kryptogram a název slavné varhanní fugy „Debefe“ od Karla Blažeje Kopřivy z Citolib?',
				options: [
					'Byla zkomponována na tóny D-E-B-E-F-E ze jména mecenáše Josefa Deboeufa',
					'Název vznikl z francouzského označení pro slavnostní fanfáru',
					'Jde o latinskou zkratku dedikace hraběti Pachtovi',
					'Označuje hudební stupnici se sníženými tóny'
				],
				correctAnswer: 0,
				explanation: 'Podobně jako Bach používal motiv B-A-C-H, vytvořil citolibský varhaník Karel Blažej Kopřiva fugu na tóny D-Es-B-Es-F-Es, odpovídající jménu lounského obchodníka a mecenáše Josefa Deboeufa.',
				composerSlug: 'karel-blazej-kopriva',
				composerName: 'Karel Blažej Kopřiva'
			}
		]
	},
	{
		id: 'antonin-dvorak',
		title: 'Kvíz: Antonín Dvořák a jeho tajuplné příběhy',
		subtitle: 'Od nelahozeveského řezníka přes Carnegie Hall až po Rusalčino jezírko',
		badge: 'Antonín Dvořák',
		composerSlug: 'antonin-dvorak',
		description: 'Otázky věnované dětství ve Zlonicích, přátelství s Brahmsem, slavným premiérám i Dvořákovým osobním zálibám.',
		questions: [
			{
				id: 'dq-1',
				question: 'Který zlonický kantor, varhaník a skladatel rozpoznal Dvořákův talent a přesvědčil jeho otce ke studiu hudby?',
				options: [
					'Antonín Liehmann',
					'Josef Proksch',
					'Karel Komzák',
					'František Blažek'
				],
				correctAnswer: 0,
				explanation: 'Byl to venkovský kantor Antonín Liehmann ve Zlonicích, u něhož Dvořák pobýval. Liehmann jej zasvětil do hry na varhany, klavír i harmonii a Dvořák mu z vděčnosti věnoval 1. symfonii Zlonické zvony.',
				composerSlug: 'antonin-dvorak',
				composerName: 'Antonín Dvořák'
			},
			{
				id: 'dq-2',
				question: 'Jakou velkou celoživotní vášeň Dvořák měl a jakému koníčku se věnoval na letním sídle ve Vysoké u Příbrami?',
				options: [
					'Měl vášeň pro parní vlaky a ve Vysoké choval holuby',
					'Sbíral historické zbraně a choval lovecké psy',
					'Byl vášnivým včelařem a rybářem na Vltavě',
					'Sbíral motýly a pěstoval exotické orchideje'
				],
				correctAnswer: 0,
				explanation: 'Dvořák miloval parní lokomotivy a znal pražské jízdní řády nazpaměť. Ve vile Rusalka ve Vysoké u Příbrami pak s láskou choval desítky holubů, které každé ráno osobně krmil.',
				composerSlug: 'antonin-dvorak',
				composerName: 'Antonín Dvořák'
			},
			{
				id: 'dq-3',
				question: 'Který slavný německý skladatel zasedal ve vídeňské stipendijní komisi a stal se Dvořákovým celoživotním přítelem a rádcem?',
				options: [
					'Johannes Brahms',
					'Richard Wagner',
					'Robert Schumann',
					'Felix Mendelssohn-Bartholdy'
				],
				correctAnswer: 0,
				explanation: 'Johannes Brahms byl Dvořákovými Moravskými dvojzpěvy tak nadšen, že mu pomohl získat státní stipendium a doporučil jej nakladateli Simrockovi. Když byl Dvořák v USA, Brahms mu dokonce zdarma korigoval notové tisky.',
				composerSlug: 'antonin-dvorak',
				composerName: 'Antonín Dvořák'
			},
			{
				id: 'dq-4',
				question: 'Co se stalo při světové premiéře Novosvětské symfonie 16. prosince 1893 v Carnegie Hall v New Yorku?',
				options: [
					'Nastalo naprosté ticho a diváci nechápali indiánské motivy',
					'Obecenstvo tleskalo vestoje přes dvacet minut a skladatel se musel opakovaně klanět z lóže',
					'Orchestr musel koncert v polovině přerušit kvůli výpadku proudu',
					'Koncert byl zrušen pro Dvořákovo náhlé onemocnění'
				],
				correctAnswer: 1,
				explanation: 'Byl to jeden z největších triumfů světových hudebních dějin. Ohlas byl natolik bouřlivý, že Dvořák musel po každé větě povstávat z čestné lóže za hromového provolávání slávy.',
				composerSlug: 'antonin-dvorak',
				composerName: 'Antonín Dvořák'
			},
			{
				id: 'dq-5',
				question: 'Které romantické místo v brdských lesích u Vysoké přímo inspirovalo Dvořáka k opeře Rusalka a slavné árii Měsíčku na nebi hlubokém?',
				options: [
					'Rusalčino jezírko',
					'Čertovo jezero na Šumavě',
					'Smetanův rybník Vidlák',
					'Podzámecký rybník v Rožmitále'
				],
				correctAnswer: 0,
				explanation: 'Rusalčino jezírko leží v tichém lesním údolí nedaleko zámečku ve Vysoké u Příbrami. Přírodní scenerie leknínů a lesních stromů přímo inspirovala skladatele k hudebnímu ztvárnění pohádkové vodní říše.',
				composerSlug: 'antonin-dvorak',
				composerName: 'Antonín Dvořák'
			}
		]
	},
	{
		id: 'bedrich-smetana',
		title: 'Kvíz: Bedřich Smetana a národní tradice',
		subtitle: 'Od zázračného dítěte v Litomyšli po slavnostní fanfáry Libuše',
		badge: 'Bedřich Smetana',
		composerSlug: 'bedrich-smetana',
		description: 'Otestujte své vědomosti o skladbách, rodinných osudech i hrdinském překonání kruté hluchoty.',
		questions: [
			{
				id: 'bq-1',
				question: 'V jakém věku měl malý Bedříšek Smetana svůj první veřejný koncert v Litomyšli?',
				options: [
					'V šesti letech (hrál na klavír předehru k Auberově opeře Němá z Portici)',
					'Ve dvanácti letech na housle',
					'V patnácti letech jako varhaník',
					'Až v osmnácti letech po příchodu do Prahy'
				],
				correctAnswer: 0,
				explanation: 'Smetana byl zázračné dítě. Už v pěti letech hrál na housle a 4. října 1830, v pouhých šesti letech, poprvé vystoupil na slavnostní akademii litomyšlských filosofů s klavírním koncertem.',
				composerSlug: 'bedrich-smetana',
				composerName: 'Bedřich Smetana'
			},
			{
				id: 'bq-2',
				question: 'Kterou hluboce procítěnou komorní skladbu napsal Smetana v roce 1855 jako reakci na úmrtí své milované čtyřleté dcerky Bedřišky?',
				options: [
					'Klavírní trio g moll, op. 15',
					'Smyčcový kvartet Z mého života',
					'Cyklus klavírních skladeb Sny',
					'Symfonickou báseň Vyšehrad'
				],
				correctAnswer: 0,
				explanation: 'Smrt hudebně nejnadanější dcerky Bedřišky otce nesmírně zasáhla. Své zoufalství vtělil do mistrovského Klavírního tria g moll, které dodnes patří k nejdojemnějším dílům komorní literatury.',
				composerSlug: 'bedrich-smetana',
				composerName: 'Bedřich Smetana'
			},
			{
				id: 'bq-3',
				question: 'Ve kterém zahraničním severském městě působil Bedřich Smetana v letech 1856–1861 jako hudební ředitel a dirigent filharmonické společnosti?',
				options: [
					'Ve švédském Göteborgu',
					'V norském Oslu',
					'V dánské Kodani',
					'Ve finských Helsinkách'
				],
				correctAnswer: 0,
				explanation: 'Smetana vedl pět let hudební život ve švédském Göteborgu. Vyučoval klavír, řídil koncerty a získal si obrovskou vážnost tamní společnosti, přesto toužil po návratu do Prahy.',
				composerSlug: 'bedrich-smetana',
				composerName: 'Bedřich Smetana'
			},
			{
				id: 'bq-4',
				question: 'Které operní dílo složil Smetana s vizí otevření Národního divadla v Praze, s věšteckým závěrem „Můj drahý národ český neskoná!“?',
				options: [
					'Libuše',
					'Prodaná nevěsta',
					'Dalibor',
					'Dvě vdovy'
				],
				correctAnswer: 0,
				explanation: 'Slavnostní zpěvohra Libuše byla zkomponována v roce 1872 přímo pro budoucí Národní divadlo. Její premiéra zazněla při prvním otevření divadla 11. června 1881 i při jeho znovuotevření roku 1883.',
				composerSlug: 'bedrich-smetana',
				composerName: 'Bedřich Smetana'
			}
		]
	},
	{
		id: 'kantori-a-klasicismus',
		title: 'Kvíz: Venkovští kantoři, Ryba a Citoliby',
		subtitle: 'Tajemství české kantorské hudby, osvícenství a raného klasicismu',
		badge: 'Kantoři & Klasicismus',
		description: 'Fascinující otázky o Jakubu Janu Rybovi, Jiřím Ignáci Linkovi a citolibské skladatelské škole.',
		questions: [
			{
				id: 'kq-1',
				question: 'V jakém městě a chrámu byla v roce 1796 poprvé provedena Česká mše vánoční Jakuba Jana Ryby?',
				options: [
					'Ve Starém Rožmitále v kostele Povýšení sv. Kříže',
					'V chrámu sv. Mikuláše v Praze',
					'V rodných Přešticích',
					'V katedrále sv. Bartoloměje v Plzni'
				],
				correctAnswer: 0,
				explanation: 'Česká mše vánoční („Hej mistře“) zazněla poprvé o Vánocích 1796 na kůru kostela Povýšení sv. Kříže ve Starém Rožmitále. Zdejší unikátní barokní varhany z roku 1750, na které hrál sám Ryba, slouží dodnes.',
				composerSlug: 'jakub-jan-ryba',
				composerName: 'Jakub Jan Ryba'
			},
			{
				id: 'kq-2',
				question: 'Který šlechtický rod vytvořil na svém panství v Citolibech u Loun slavnou skladatelskou školu, v níž působila rodina Kopřivových?',
				options: [
					'Hraběcí rod Pachtů z Rájova (Arnošt Karel Pachta)',
					'Lobkowiczové',
					'Kounicové',
					'Schwarzenbergové'
				],
				correctAnswer: 0,
				explanation: 'Hrabě Arnošt Karel Pachta byl velkým milovníkem hudby. Vybudoval v Citolibech špičkovou zámeckou kapelu, zaměstnával místní muzikanty a podporoval vznik originální skladatelské školy.',
				composerSlug: 'karel-blazej-kopriva',
				composerName: 'Karel Blažej Kopřiva'
			},
			{
				id: 'kq-3',
				question: 'Jak zní úvodní verš známé vánoční pastorely Jiřího Ignáce Linka z Bakova nad Jizerou?',
				options: [
					'„Hej, hej, Lojzo, poslouchej, co já tobě povím!“',
					'„Hej mistře, vstaň bystře!“',
					'„Narodil se Kristus Pán, veselme se!“',
					'„Chtíc, aby spal, tak zpívala synáčkovi“'
				],
				correctAnswer: 0,
				explanation: 'Jiří Ignác Linek proslul humornými lidovými pastorelami psanými pro venkovské kůry, v nichž vystupují čeští pastýři. Jednou z nejpopulárnějších je právě dialogická pastorela Hej, hej, Lojzo!',
				composerSlug: 'jiri-ignac-linek',
				composerName: 'Jiří Ignác Linek'
			},
			{
				id: 'kq-4',
				question: 'V jaké daleké části světa byly ve 20. století objeveny dochované opisy skladeb dobřanského rodáka Jana Josefa Ignáce Brentnera?',
				options: [
					'V jihoamerických pralesích Bolívie (jezuitské misie Chiquitos a Moxos)',
					'V císařské knihovně v Pekingu',
					'V archivech v australském Sydney',
					'V klášteře na hoře Sinaj v Egyptě'
				],
				correctAnswer: 0,
				explanation: 'Brentnerova hudba se díky misionářům jezuitského řádu rozšířila do Jižní Ameriky. V bolivijských pralesních redukcích se zachovaly unikátní opisy jeho skladeb, které domorodí indiáni zpívali ještě po staletích.',
				composerSlug: 'jan-josef-ignac-brentner',
				composerName: 'Jan Josef Ignác Brentner'
			}
		]
	}
];

export function getQuizTopicById(id: string): QuizTopic | undefined {
	return quizTopics.find((q) => q.id === id);
}
