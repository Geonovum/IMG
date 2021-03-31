Inleiding
==========================

## Positie van het IMGeluid

Om de precieze uitbreiding van het IMGeluid te kunnen bepalen, is het nodig om
het Informatiemodel Geluid te positioneren binnen de informatiestromen voor het
rapporteren van geluidbelastingkaarten aan de Europese commissie. Om hierbij de
juiste afwegingen te kunnen maken zal eerst de huidige situatie in kaart worden
gebracht. Dit is gedaan op basis van input opgehaald uit een reeks interviews.
Deze interviews [link of referentie naar verslag] omvatten het perspectief van
alle groepen belanghebbenden die door het Ministerie van Infrastructuur en
Waterstaat (I&W) geïdentificeerd zijn. Sommige van deze groepen komen overeen
met het aangemerkte bevoegd gezag (BG). Andere groepen komen overeen met de
[bronhouders van geluigegevens](https://www.begrippenxl.nl/dso/en/page/Bronhouder?clang=nl). In **Tabel 1**
staan de groepen stakeholders die worden erkend omschreven.

| Naam (groep) stakeholder(s)                              | Omschrijving                                                                                                                                                                                                                                                                                                                    | Rolomschrijving binnen de END                                                                                                                                                                                                                                                                                                                |
|------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Rijkswaterstaat (RWS)                                | Rijkswaterstaat is het uitvoerende agentschap van het Ministerie van Infrastructuur en Waterstaat. RWS beheert onder andere de Rijkswegen.                                                                                                                                                                                      | RWS is bronhouder en bevoegd gezag m.b.t. geluidgegevens voor Rijkswegen. Daarnaast heeft het RWS onderdeel Infomil de opdracht van I&W om de rapportage aan Europa te regelen.                                                                                                                                                              |
| ProRail                                              | ProRail is de spoorwegbeheerder van Nederland. ProRail is daarbij verantwoordelijk voor het gehele spoorwegnet: aanleg, onderhoud, beheer en veiligheid.                                                                                                                                                                        | ProRail is bronhouder m.b.t. geluidgegevens voor hoofdspoorwegen.                                                                                                                                                                                                                                                                            |
| Provincies                                           | De Nederlandse provincies vormen de bestuurslaag tussen de rijksoverheid en de Nederlandse gemeenten. Het Europese deel van Nederland is verdeeld in twaalf provincies die elk hun eigen volksvertegenwoordiging en bestuur hebben.                                                                                             | De provincies zijn bevoegd gezag en bronhouder m.b.t. Provinciale wegen en lokale spoorwegen met een verkeersintensiteit van meer dan 30.000 treinen per jaar.                                                                                                                                                                               |
| Agglomeratie-gemeenten                               | Agglomeraties zijn verzamelingen van gemeenten zoals bedoeld in art. 2.40 Omgevingsregeling. Een agglomeratie is een aaneenschakeling van nederzettingen waarvan de inwoners zich gedragen alsof zij in één stad wonen. Een Agglomeratie-gemeente is een gemeente die onderdeel uitmaakt van een agglomeratie.                  | Agglomeratie-gemeenten zijn bevoegd gezag m.b.t. geluidgegevens t.b.v. voor wegen, spoorwegen, activiteiten, verzamelingen van activiteiten en luchthavens. (zoals bedoeld in artikel 10.22 en 10.23 van Bkl) Voor een deel van deze gegevens is de Gemeente geen bronhouder. Deze gegevens moeten worden opgevraagd bij andere bronhouders. |
| Ministerie van Infrastructuur en Waterstaat. (I&W)   | Het ministerie van Infrastructuur en Waterstaat (IenW) is verantwoordelijk voor verkeer en waterstaat, ruimtelijke ordening en leefbaarheid. Het thema geluid valt hier onder. I&W is de opdrachtgever voor de Centrale Voorziening Geluidgegevens en voor de uitbreiding van het IMGeluid.                                     | Afdeling DG Luchtvaart en Maritieme Zaken is bevoegd gezag op het gebied van de END verplichtingen rondom luchthavens van rijksbelang. Daarnaast is I&W bevoegd gezag voor hoofdspoorwegen.                                                                                                                                                  |
| RijksInstituut voor Volksgezondheid en Milieu (RIVM) | Het Rijksinstituut voor Volksgezondheid en Milieu is een kennis- en onderzoeksinstituut in Nederland, gericht op de bevordering van de volksgezondheid en een gezond en veilig leefmilieu. Het RIVM heeft ook een afdeling gespecialiseerd in omgevingslawaai en is eigenaar van de Centrale Voorziening Geluidgegevens (CVGG). |                                                                                                                                                                                                                                                                                                                                              |
| Adviesbureaus / Omgevingsdiensten                    | Adviesbureaus en omgevingsdiensten hebben experts in dienst op het gebied van akoestische simulaties en kunnen worden ingehuurd door bronhouders.                                                                                                                                                                               | De adviesbureaus en omgevingsdiensten maken de geluidmodellen in opdracht van bronhouders en berekenen de geluidbelastingkaarten.                                                                                                                                                                                                            |


**Tabel 1. geluidbelastingkaarten en -tabellen stakeholders **

Het beeld dat uit deze interviews is voortgekomen, is in afstemming met I&W en
de Centrale Voorziening Geluidgegevens (CVGG) tot stand gekomen. In het volgende
hoofdstuk zal eerst de huidige situatie worden toegelicht. Vervolgens zal de
toekomstvisie worden toegelicht. Een verdere uitwerking van de informatiestromen
die bij deze toekomstvisie horen zullen worden omschreven in het Conceptueel
Informatiemodel Geluidbelastingkaarten. (CIMGeluidbelasting) In het
CIMGeluidbelasting zal ook een globaal beeld worden geschetst welke aanpassingen
er worden voorzien in het IMGeluid.

Onderscheid input en output
---------------------------

Binnen de het domein van geluidberekeningen valt er een onderscheid te maken
tussen input- en output-data. De geluidberekeningen worden uitgevoerd binnen
rekenpakketten met de mogelijkheid om verschillende bestandsformaten te
importeren en exporteren. De softwareleveranciers van de twee meest gebruikte
softwarepakketten Geomileu en WinHavik, zullen het importeren en exporteren van
IMGeluid bestanden gaan ondersteunen. Dit sluit echter geen deuren om ook naar
andere bestandsformaten te exporteren. Om deze reden zullen de formaten van
input en output van geluidberekeningen apart moeten worden meegenomen.

Met het formaat van de input bedoelen we bijvoorbeeld de volgorde waarop
verkeersintensiteiten zijn gerangschikt. De geluidsoftware weet namelijk niet
uit zichzelf hoe variabelen te herkennen zijn. Met de output bedoelen we
bijvoorbeeld de geluidbelastingkaarten. Deze kunnen ook worden geëxporteerd in
bijvoorbeeld pdf of shape formaat. Het rekenhart van de geluidsoftware zorgt
ervoor dat van een correcte input een correcte output wordt gemaakt. Met een
“correcte output” bedoelen we een output die klopt volgens het reken en
meetvoorschrift.

Het IMGeluid kan zowel input- als outputbestanden bevatten. Het hoeft echter
niet per difinitie


Verschil tussen berekeningen t.b.v geluidmonitoring en -belasting
-----------------------------------------------------------------

Het rekenhart van geluidsoftware is een soort super slimme rekenmachine die de
juiste rekenmethode strikt toepast. Een rekenmethode zou gezien kunnen worden
als een gereedschapskist waarmee de geluidexpert de werkelijkheid zo goed
mogelijk kan nabootsen. Wanneer er twee verschillende rekenmethoden worden
gebruikt, zullen er dus ook twee verschillende verzamelingen van geluidgegevens
worden gebruikt. Het rekenhart heeft immers geen ervaring met de natuurwetten in
de praktijk, dus hiervoor moeten we berusten op de ervaring van de geluidexpert.

Het eerste grote verschil tussen geluidmonitoring en -belasting is dan ook de
rekenmethode die ervoor wordt gebruikt. Voor geluidmonitoring gebruik worden
gemaakt van de Nederlandse rekenmethode voor geluid zoals omschreven in de
bijlagen van de aanvullingsregeling geluid. Om geluidbelasting te berekenen gaat
gebruik worden gemaakt van de Europese CNOSSOS rekenmethode.

Het tweede verschil is ook direct de reden waarom er twee verschillende
rekenmethoden nodig zijn. Bij geluidmonitoring is men namelijk geïnteresseerd in
het berekenen van de geluidemissie, de uitstoot aan de bron. Als het gaat om
geluidbelasting dan gaat het om de geluidimissie, de belasting op de omgeving.
Voor verdere uitleg van dit verschil verwijzen we door naar [aan de slag met de
omgevingswet](
https://aandeslagmetdeomgevingswet.nl/regelgeving/instrumenten/omgevingswaarde/verschil-omgevingswaarde-immissiewaarde/\#:\~:text=Emissie%20betekent%20uitstoot%20aan%20de,de%20gevel%20van%20een%20huis.)

Concluderend, geluidmonitoring en -belasting zijn twee verschillende soorten
geluidsimulaties die niet gebaseerd kunnen zijn op dezelfde dataset. Deze
datasets kunnen wel beide een plek krijgen binnen het IMGeluid, aangezien de
input-geluidgegevens wel voor een groot deel overeenkomen. Voor het deel waarop
ze niet overeenkomen moet waarschijnlijk het IMGeluid worden aangepast.

END informatiemodel en informatiemodel geluid (imgeluid)
--------------------------------------------------------

Het END-datamodel is ontwikkeld om te voldoen aan de rapportageverplichtingen
gespecificeerd in de richtlijn voor de lidstaten van de Europese Unie. Het
huidige rapportagemechanisme waarin lidstaten gegevens rapporteren, is niet in
overeenstemming met de INSPIRE-richtlijn. Daarom wordt door het Europees
Milieuagentschap[^1] een nieuw datamodel ontwikkeld dat zowel aan de END- als
aan de INSPIRE-eisen voldoet.

[^1]: European Environment Agency (EEA)

Het informatiemodel Geluid (IMGeluid) beschrijft de semantiek van digitale
bestanden voor de Centrale Voorziening Geluidgegevens. De Centrale Voorziening
Geluidgegevens (CVGG) is een centraal punt voor het eenduidig uitwisselen van
akoestische gegevens tussen bronhouders en gebruikers voor verschillende
geluiddomeinen. In IMGeluid staan de afspraken en technische eisen waaraan de
geluidbrongegevens en berekende geluidwaarden, zoals geluidproductieplafonds en
monitoringswaarden, moeten voldoen. Deze gegevens geven de juridische
werkelijkheid weer en worden gebruikt voor vergunningen en monitoring. IMGeluid
is gemodelleerd conform het Metamodel Informatie Modellering [[[?mim11]]].

Terwijl de brongegevens voor geluidberekeningen voor rapportage aan EU (volgens
END informatiemodel) en aan CVGG (volgens IMGeluid) veel overlap vertonen, is er
een fundamenteel verschil tussen de reikwijdte van deze twee geluidberekeningen.
Voor de rapportage aan de EU wordt geluidsimissie berekend, die geeft de
geluidbelasting op een ontvanger (bijv. geluidbelasting op de gevel van een
huis) aan. De geluidsgegevens voor het aanleveren aan CVGG geven echter
geluidsemissie aan, wat een uitstoot aan de geluidsbron betekent. Daarom voor
immissie berekeningen rekening wordt gehouden met het omgevingsmodel, (3D)
informatie van de omliggende gebouwen en terrein, wat bij emissie berekeningen
niet het geval is. Verder kunnen de karteringscriteria voor geluidbrongegevens
(bijv. verkeersintensiteit criteria) voor de rapportage aan EU en aan CVGG soms
verschillen, waardoor het niet altijd mogelijk is om één dataset direct te
gebruiken in de berekeningen voor zowel EU- als CVGG-rapportage.

## Leeswijzer
Dit document is gestructureerd in 6 hoofdstukken. 
- [Hoofdstuk 2](#end_datamodel) bevat een overzicht van het nieuwe END datamodel. 
- [Hoofdstuk 3](#huidige_situatie) omschrijft de huidige situatie rondom de rapportage van geluidbelastingkaarten en -tabellen.
- [Hoofdstuk 4](#toekomstige_situatie) omschijft de toekomstvisie rondom de rapportage van geluidbelastingkaarten en -tabellen.
- [Hoofdstuk 5](#IMGeluidbelasting) bevat het Conceptueel Informatiemodel Geluidbelasting en een [aantal stellingen](#stellingen-ten-grondslag-aan-het-cimgeluidbelasting) die daaraan ten grondslag liggen.
- [Hoofdstuk 6]() zal de precieze wijzigingen aan IMGeluid gaan bevatten.
