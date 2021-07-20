Inleiding
==========================

Positie van het IMGeluid
------------------------

In de toekomst is het mogelijk wenselijk om ook geluidgegevens ten behoeve van geluidbelastingkaarten  te kunnen uitwisselen via de CVGG. Voor het uitwisselen van geluidgegevens tussen bronhouders en de CVGG is een informatiemodel ontwikkeld: het Informatiemodel Geluid (IMGeluid).

Het IMGeluid is een [logisch informatiemodel](https://docs.geostandaarden.nl/mim/mim/#niveau-3-logisch-informatie-of-gegevensmodel) dat onlosmakelijk verbonden is met de CVGG. Wanneer besloten wordt dat de CVGG geschikt moet zijn voor uitwisseling van deze gegevens, zal het IMGeluid op onderdelen moeten worden uitgebreid. Om de precieze uitbreiding van het IMGeluid te kunnen bepalen, is het nodig om het Informatiemodel Geluid te positioneren binnen de informatiestromen voor het rapporteren van geluidbelastingkaarten aan de Europese Commissie. Het helpt dan om ten eerste  de huidige situatie in kaart te brengen. Hiervoor zijn diverse interviews gehouden met belanghebbenden/bronhouders. 
Deze interviews omvatten het perspectief van alle groepen belanghebbenden die door het Ministerie van Infrastructuur en Waterstaat (I&W) geïdentificeerd zijn. Sommige van deze groepen komen overeen met het aangemerkte bestuursorgaan. Andere groepen komen overeen met de [bronhouders van geluidgegevens]( https://www.begrippenxl.nl/dso/en/page/Bronhouder?clang=nl). In Tabel 1 staan deze groepen stakeholders omschreven.

| Naam groep stakeholders                              | Omschrijving                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Rolomschrijving binnen de END                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Rijkswaterstaat (RWS)                                | Rijkswaterstaat is het uitvoerende agentschap van het Ministerie van Infrastructuur en Waterstaat. RWS beheert onder andere de Rijkswegen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | RWS is bronhouder m.b.t. geluidgegevens voor Rijkswegen. Daarnaast heeft het RWS onderdeel InfoMil de opdracht van I&W om de rapportage aan Europa te regelen.                                                                                                                                                                                                                                                                                                                         |
| ProRail                                              | ProRail is de spoorwegbeheerder van Nederland. ProRail is daarbij verantwoordelijk voor het gehele spoorwegnet: aanleg, onderhoud, beheer en veiligheid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | ProRail is bronhouder m.b.t. geluidgegevens voor hoofdspoorwegen.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Provincies                                           | De provincies vormen de bestuurslaag tussen de rijksoverheid en de Nederlandse gemeenten. Het Europese deel van Nederland is verdeeld in twaalf provincies die elk hun eigen volksvertegenwoordiging en bestuur hebben.                                                                                                                                                                                                                                                                                                                                                                                                                                                            | De provincies zijn bestuursorgaan en bronhouder m.b.t. Provinciale wegen, luchthavens van regionale betekenis en lokale spoorwegen met een verkeersintensiteit van meer dan 30.000 treinen per jaar.                                                                                                                                                                                                                                                                                   |
| Agglomeratie-gemeenten                               | Agglomeraties zijn verzamelingen van gemeenten zoals bedoeld in art. 2.40 Omgevingsregeling, en art. 3 sub k van de richtlijn voor omgevingslawaai. Een agglomeratie-gemeente is een gemeente die onderdeel uitmaakt van een agglomeratie.                                                                                                                                                                                                                                                                                                                                                                                                                                         | Agglomeratie-gemeenten vormen een gebiedmet een bevolking van meer dan 100 000 personen en een zodanige bevolkingsdichtheid dat de lidstaat het als een stedelijk gebied beschouwt; m.b.t. geluidgegevens t.b.v. voor wegen, spoorwegen, activiteiten, verzamelingen van activiteiten en luchthavens. (zoals bedoeld in artikel 10.22 en 10.23 van Bkl) Voor een deel van deze gegevens is de Gemeente geen bronhouder. Deze gegevens moeten worden opgevraagd bij andere bronhouders. |
| Ministerie van Infrastructuur en Waterstaat. (I&W)   | Het Ministerie van Infrastructuur en Waterstaat (IenW) is verantwoordelijk voor verkeer en waterstaat, ruimtelijke ordening en leefbaarheid. Het thema geluid valt hier onder. I&W is de opdrachtgever voor de Centrale Voorziening Geluidgegevens en voor de uitbreiding van het IMGeluid.                                                                                                                                                                                                                                                                                                                                                                                        | Het ministerie is het bevoegde gezag voor de luchthavens van *nationale betekenis,* hoofdspoorwegen, en rijkswegen. Daarnaast is I&W eigenaar van de CVGG.                                                                                                                                                                                                                                                                                                                             |
| Rijksinstituut voor Volksgezondheid en Milieu (RIVM) | Het Rijksinstituut voor Volksgezondheid en Milieu is een kennis- en onderzoeksinstituut in Nederland, gericht op de bevordering van de volksgezondheid en een gezond en veilig leefmilieu. Het RIVM heeft ook een afdeling gespecialiseerd in omgevingslawaai en is beheerder van de Centrale Voorziening Geluidgegevens (CVGG).                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Adviesbureaus / Omgevingsdiensten                    | Adviesbureaus en omgevingsdiensten hebben experts in dienst op het gebied van geluidberekeningen en kunnen worden ingehuurd door bronhouders.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | De adviesbureaus en omgevingsdiensten maken de geluidmodellen in opdracht van bronhouders en berekenen de geluidbelastingkaarten.                                                                                                                                                                                                                                                                                                                                                      |
| InfoMil                                              | Kenniscentrum InfoMil is de plaats waar de informatie over omgevingsrecht en omgevingsregelgeving wordt gebundeld en verspreid. Het is de plaats voor informatievoorziening en kennisuitwisseling tussen de beleidsmakers van ministeries en de beleidsuitvoerders bij provincies, gemeenten, waterschappen en milieudiensten. Het biedt praktische ondersteuning bij uitvoering van omgevingsbeleid. Met inwerkingtreding van de Omgevingswet gaat InfoMil op in Informatiepunt Leefomgeving                                                                                                                                                                                      | Kenniscentrum InfoMil verzorgt in opdracht van het ministerie IenW de rapportage aan Europa en ondersteunt de bronhouders hierbij. Voor dat doel biedt InfoMil gemeenten en provincies handvatten voor het opstellen van de geluidbelastingkaarten en actieplannen. InfoMil bewaakt ook de voortgang bij het voldoen aan deze deadlines. In de huidige situatie verzamelt InfoMil ook de informatie over de geluidbelastingkaarten.                                                    |
| Centrale Voorziening Geluidgegevens                  | Het Rijksinstituut voor Volksgezondheid en Milieu (RIVM Rijksinstituut voor Volksgezondheid en Milieu) werkt aan de Centrale Voorziening Geluidgegevens (CVGG). Dit wordt vanaf 1 januari 2022 het digitale systeem voor het uitwisselen van geluidgegevens. Het rijk, provincies, gemeenten en waterschappen zullen via de CVGG hun geluidgegevens gaan delen. De gegevens in de CVGG zijn in eerste instantie vooral geschikt voor professionele gebruikers ter ondersteuning van akoestisch onderzoek. Het uiteindelijk doel is om samen met bronhouders en andere belanghebbenden geluidgegevens voor iedereen op één plaats, laagdrempelig en uniform beschikbaar te stellen. | Geluidbelastingkaarten en – tabellen zijn tot op heden buiten scope van de CVGG. Het RIVM heeft een een impact analyse uitgevoerd om een mogelijke scope verbreding te verkennen.                                                                                                                                                                                                                                                                                                      |
| Leveranciers geluidberekening software               | Deze leveranciers ontwikkelen en beheren de software ter ondersteuning van het uitvoeren van geluidberekeningen. Hiermee voeren de akoestische experts in opdracht van de bestuursorganen geluidberekeningen uit. De twee grootste leveranciers zijn WinHavik en Geomilieu.                                                                                                                                                                                                                                                                                                                                                                                                        | De leveranciers zorgen ervoor dat hun software de geluid rekenregels toepast en dat de geluidbelastingkaarten in het gewenste formaat komen te staan.                                                                                                                                                                                                                                                                                                                                  |


**Tabel 1. geluidbelastingkaarten en -tabellen stakeholders**


Onderscheid input en output
---------------------------

Binnen het domein van geluidberekeningen kan een onderscheid gemaakt worden
tussen input- en output-geluidgegevens. De geluidberekeningen worden uitgevoerd
binnen rekenpakketten met de mogelijkheid om verschillende bestandsformaten te
importeren en exporteren. De softwareleveranciers van de twee meest gebruikte
softwarepakketten Geomileu en WinHavik, ondersteunen het importeren en
exporteren van IMGeluid bestanden. Hiermee worden andere bestandsformaten echter
niet uitgesloten. Zo zou het bijvoorbeeld ook mogelijk zijn een optie in te
bouwen te exporteren naar pdf of een shapes formaat. Om deze reden kunnen de
formaten van input en output van geluidberekeningen apart worden bekeken.

Met het formaat van de input bedoelen we bijvoorbeeld de volgorde waarop
verkeersintensiteiten zijn gerangschikt. De geluidsoftware weet niet uit
zichzelf de juiste verkeersintensiteit te herkennen, daarom moet alles op een
vaste plek te vinden zijn. Met de output bedoelen we bijvoorbeeld de
geluidbelastingkaarten. Deze geluidbelastingkaarten kunnen voor ontsluiting naar
het publiek worden geëxporteerd als bijvoorbeeld een pdf of shape formaat. Voor
rapportage aan de EEA (European Environmental Agency) moet dit formaat voldoen
aan het END-Datamodel.

Het rekenhart van de geluidsoftware zorgt ervoor dat van een correcte input een
correcte output wordt gemaakt. Met een “correcte output” bedoelen we
bijvoorbeeld een geluidbelastingkaart die berekend is volgens de CNOSSOS-EU
rekenmethode (Bijlage VII Reken- en meetvoorschrift geluid 2012, Bijlage XXXIII
Omgevingsregeling). Het IMGeluid kan zowel input- als outputbestanden bevatten.

Verschil tussen berekeningen t.b.v geluidmonitoring en -belasting
-----------------------------------------------------------------

Voor geluidmonitoring in het kader van de naleving van geluidproductieplafonds
en de basisgeluidemissie zal gebruik worden gemaakt van de Nederlandse
rekenmethode voor geluid zoals omschreven in de bijlagen van de
aanvullingsregeling geluid. De doelen van de aanvullingsregeling geluid zijn:
het voorkomen van de onbeheerste groei van geluidbelastingen op geluidgevoelige
gebouwen, het verlagen van bestaande hoge geluidbelastingen op geluidgevoelige
gebouwen, het bevorderen van bronbeleid, het eenvoudiger maken van het
normenkader en het stroomlijnen en makkelijker maken van de instructieregels.
Daarnaast bevat de aanvullingsregeling ook nieuwe regels m.b.t. het hoofdspoor.
(Bron: [Informatiepunt
leefomgeving](https://iplo.nl/regelgeving/stelsel-omgevingswet/omgevingswet-in-ontwikkeling/hoofdlijnen-aanvullingsspoor-geluid/?_ga=2.129871372.1064692739.1619698411-1642760836.1595589321)
). De bepalingen van de Aanvullingsregeling zijn in de Omgevingsregeling opgenomen.

Om de geluidbelasting voor het maken van geluidbelastingkaarten te berekenen
gaat gebruik worden gemaakt van de Europese CNOSSOS rekenmethode. Deze
geluidbelastingkaarten worden opgesteld t.b.v. de Europese richtlijn
omgevingslawaai. Het doel van de richtlijn omgevingslawaai is, om op basis van
prioriteiten, de schadelijke gevolgen (inclusief hinder) van blootstelling aan
omgevingslawaai te vermijden, voorkomen of verminderen. (Bron: [richtlijn
omgevingslawaai 2002l](https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ%3AL%3A2002%3A189%3A0012%3A0025%3ANL%3APDF) )

Geluidproductieplafonds en de basisgeluidemissie zijn instrumenten om de
geluidemissie, oftewel de geluidproductie van geluidbronnen te monitoren.
Geluidbelastingkaarten zijn een instrument om zicht te krijgen op de
geluidbelasting, de geluidimmissie, van de omgeving. Deze instrumenten maken
gebruik van verschillende waarden. Geluidemissie en -immissiewaarden hebben
ieder een eigen bepalingsmethode. Daarnaast, zal een geluidmodel t.b.v.
geluidproductieplafonds en de basisgeluidemissie, de vergunde situatie
weergeven, terwijl een geluidbelastingkaart of een geluidmodel voor monitoring
van de geluidproductieplafonds, de gerealiseerde situatie weergeeft. Dit kan als
gevolg hebben dat de geluidbrongegevens verschillen per bepalingsmethode.
Aangezien de CVGG voor verschillende doelen informatie moet kunnen verstrekken,
kan de CVGG ook geluidbrongegevens voor verschillende bepalingsmethoden
bevatten. Wel moet dan traceerbaar zijn bij welke bepalingsmethode de
geluidbrongegevens horen.

Environmental Noise Directive (END) Datamodel en informatiemodel geluid (imgeluid)
----------------------------------------------------------------------------------

Het END Datamodel is ontwikkeld om te voldoen aan de rapportageverplichtingen
gespecificeerd in de richtlijn omgevingslawaai voor de lidstaten van de Europese
Unie. Het huidige rapportagemechanisme waarin lidstaten gegevens rapporteren, is
niet in overeenstemming met de INSPIRE-richtlijn. Daarom wordt door het Europees
Milieuagentschap (European Environment Agency) een nieuw Datamodel ontwikkeld
dat zowel aan de END- als aan de INSPIRE-eisen voldoet.

Het informatiemodel Geluid (IMGeluid) beschrijft de semantiek van digitale
bestanden voor de Centrale Voorziening Geluidgegevens. De Centrale Voorziening
Geluidgegevens (CVGG) is een centraal punt voor het eenduidig uitwisselen van
akoestische gegevens tussen bronhouders en gebruikers voor verschillende
geluiddomeinen. In IMGeluid staan de afspraken en technische eisen waaraan de
geluidbrongegevens en berekende geluidwaarden, zoals geluidproductieplafonds en
monitoringswaarden, moeten voldoen. Deze gegevens geven de juridische
werkelijkheid weer en worden gebruikt voor vergunningen en monitoring. IMGeluid
is gemodelleerd conform het Nederlandse Metamodel Informatie Modellering [MIM](
<https://docs.geostandaarden.nl/mim/mim/> ) en volgt daarmee niet het [INSPIRE
Generic Conceptual
Model](https://inspire.ec.europa.eu/documents/Data_Specifications/D2.5_v3.4rc3.pdf)

Hoewel de geluidgegevens voor rapportage aan EU (Noise Sources DF1_5 volgens END
datamodel) en t.b.v. monitoring in het kader van geluidproductieplafonds
(volgens IMGeluid) veel op elkaar lijken, is er een fundamenteel verschil. Het
volgende hoofdstuk zullen de Noise Sources nader worden toegelicht. Dit
fundamentele verschil bestaat omdat Noise Sources hoeven niet te worden gebruikt
als input voor het berekenen van geluidbelastingkaarten. De Noise sources zijn
bedoeld om een idee te geven van de ligging en intensiteit van de fysieke
geluidbron, bijvoorbeeld in de vorm van een weg. Bij de geluidgegevens met
betrekking tot monitoring gaat het niet om de fysieke geluidbron, maar de
akoestische eigenschappen van de geluidbron. Zo wordt bijvoorbeeld het IMGeluid
objecttype WegdeelGPP opgedeeld op basis van homogene akoestische eigenschappen
van het verkeer op een weg, terwijl de ligging van een Major Road Source hier
niet van afhankelijk is. Daarnaast kan WegdeelGPP kan ook wegen bevatten
waarvoor wel een projectbesluit is genomen, maar die feitelijk nog niet bestaan
(zoals de Blankenburgverbinding en de A13A16 Rotterdam). De twee zullen veelal
bij elkaar in de buurt liggen, maar een semantische relatie tussen de twee
bestaat niet. Hier ook aangeven dat er wel een relatie is tussen de gegevens
voor monitoring en de gegevens die RWS, ProRail en provincies moeten aanleveren
aan agglomeratiegemeenten voor hun berekening van de geluidbelastingkaarten.
Voor de geluidbelastingkaarten wordt geluidimmissie berekend, dit geeft de
geluidbelasting op een ontvanger (bijv. geluidbelasting op de gevel van een
huis) aan. In het kader van geluidproductieplafond- en
basisgeluidemissieberekeningen is de geluidemissie, de geluidproductie van de
geluidbron, het belangrijkst. Daarom wordt de omgeving maar beperkt meegenomen.
Bij het berekenen van geluidbelastingkaarten wordt een meer gedetailleerd
omgevingsmodel gebruikt. Dit omgevingsmodel bevat (3D) informatie over de
omliggende gebouwen en het terrein.

