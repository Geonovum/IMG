Conceptueel Informatiemodel Geluidbelasting specificatie (CIMGeluidbelasting)
========================================================
<figure id="Figuur_10">
<img src="media/CIMGeluidbelasting.png" alt="">
<figcaption>Conceptueel model geluidbelasting.</figcaption>
</figure>

Het conceptuele model geluidbelasting (CMGeluidbelasting) brengt in kaart welke
gegevens een rol kunnen gaan spelen in de toekomstige situatie. Ook positioneert
het CMGeluidbelasting de Objecttypen uit het END-Datamodel en IMGeluid. Voor dit
model zijn twee aannames gemaakt. De mogelijke opties staan toegelicht in
paragraaf 6.2. In dit hoofdstuk worden de objecttypen gedefinieerd en
toegelicht. Het CMGeluidbelasting is een concept kijk op de toekomst. Het doel
van het model is om een overzicht te geven op waar relevante informatie voor het
maken van een geluidbelastingkaart vandaan kan worden gehaald. Dit model wordt
gebruikt om de specifieke uitbreidingen die nodig zijn voor het IMGeluid te
bepalen.

Wat opvalt is dat het model vanuit een hoger
[niveau](https://docs.geostandaarden.nl/mim/mim/\\\#typen-informatiemodellen)
naar de informatie kijkt dan het IMGeluid. Voor het doel van dit model is het
niet nodig om meer gedetailleerd te kijken naar de verschillende objecttypen.
Zie [**figuur 10](\# Figuur_10)** voor een UML weergave van het
CMGeluidbelasting.

Toelichting op CM Geluidbelasting
---------------------------------

In het CM Geluidbelasting staat het Geluidmodel centraal. Op basis van dit model
wordt een geluidbelastingkaart en -tabel berekend. De structuur van deze
geluidbelastingkaart of -tabel, wordt bepaald door DF4 en DF8 van het END
Datamodel. In de geschetste situatie bevat een geluidmodel minstens één
geluidgegeven. Dit geluidgegeven zou uit de CVGG kunnen worden gehaald, wanneer
er op termijn wordt besloten deze ook via de CVGG uit te wisselen. De structuur
van dit Input-geluidgegeven kan in dit geval bepaald worden door IMGeluid. Dit
Input-geluidgegeven kan in deze situatie afkomstig zijn van een rijksweg, een
provinciale weg, een spoorweg, van een agglomeratie-gemeente of van een
luchthaven.

Wanneer het geluidmodel betrekking heeft op een agglomeratie gemeente, zullen
lokale geluidgegeven over wegen, spoorwegen, industrie en overige
geluidbelastende activiteiten worden gebruikt in het geluidmodel. Het
geluidmodel bevat ook een model van de omgeving. In dit omgevingsmodel zitten
bijvoorbeeld hoogtelijnen en geluidgevoelige gebouwen. Deze kunnen door de maker
van het geluidmodel zelf gemodelleerd worden of op een andere manier worden
ingewonnen. Een oplossingsrichting is om een lijst met geluidgevoelige gebouwen
op te nemen in het IMGeluid. Zie voor andere oplossingsrichtingen de Memo over
[geluidgevoelige gebouwen](VERWIJZING).

De cijfers die bij pijlen (relaties) van het type \<\<Relatiesoort\>\> staan in
de vorm [0…\*] (Multipliciteiten), maken het mogelijk om het model op
verschillende manieren te doorlopen. Deze Multipliciteiten geven grenzen aan van
hoe vaak het ene object mag verwijzen naar het andere object in de relatie.
Bijvoorbeeld: 1 of meerdere [1..\*] input geluidgegeven(s) worden gebruikt in 0
of meerdere [0..\*] Geluidmodellen. Het andere type relatie dat wordt gebruikt
in het CMGeluidbelasting is de \<\<Generalisatie\>\>. Deze relatie wordt gelegd
tussen twee Objecttypen om aan te geven dat het ene object generaliseerd in het
andere. Een geluidgegeven Rijksweg is bijvoorbeeld een specifiek soort
Input-geluidgegeven.

Om deze principes toe te lichten zullen we het CM Geluidbelasting een keer
geheel doorlopen voor de geluidbelastingkaarten van Rijkswegen. Zie **Figuur**
11 voor een visualisatie hiervan. We beginnen linksboven in het model bij het
Objecttype Geluidgegeven Rijksweg. Laten we er voor dit voorbeeld vanuit gaan
dat we een geluidbelastingkaart willen maken van 100 wegdelen. Om te bepalen hoe
deze wegdelen eruitzien, kijken we naar het IMGeluid object WegdeelGPP in dit
hypothetische geval. In dit geval is ieder WegdeelGPP een Input-geluidgegeven
dat wordt gebruikt in een geluidmodel. De relatiesoort tussen de objecttypen
Input-geluidgegeven en Geluidmodel geluidbelastingkaart geeft nu aan dat 100
wegdelen worden gebruikt in 1 geluidmodel. De Multipliciteiten die hier gelden
staan dit toe. Vervolgens worden er 5 geluidgevoelige gebouwen toegevoegd aan
het omgevingsmodel en 5 omgevingsmodel objecten (dit zouden bijvoorbeeld
hoogtelijnen kunnen zijn) om de omgeving te modelleren. Deze 10 objecten worden
toegevoegd aan het geluidmodel. Uit dit ene geluidmodel worden 2 verschillende
kaarten berekend. Eén kaart is voor de Lden situatie en één voor de Lnight
situatie. De geluidcontouren op beide kaarten worden opgeslagen volgens, in
overeenstemming met het Objecttype (featureType) met de naam
“EnvHealthDeterminantMeasure” afkomstig uit het END Datamodel (zie figure 41.
Streamlined data model for noise contour maps (DF4_8)). Bij een
geluidbelastingkaart horen ook gegevens over blootstelling aan lawaai. De kaart
voor het publiek wordt door Rijkswaterstaat nog aangevuld met een aantal
Referentie geluidbronnen. Deze referentie geluidbronnen bevatten extra
informatie over de context die handig is voor het publiek. De ligging van 49
major Road Source Objecttypen wordt op de kaart afgebeeld samen met de
afbakening van een stil gebied.


<figure id="Figuur_11">
<img src="media/CIMGeluidbelastingvoorbeeld.png" alt="">
<figcaption>Voorbeeld uitwerking van het Conceptueel model geluidbelasting.</figcaption>
</figure>

Het inwinningsvraagstuk voor aanvullende informatie op publieke geluidbelastingkaarten
--------------------------------------------------------------------------------------

In hoofdstuk 5 werd al genoemd dat I&W meerdere denkbare scenario’s heeft
uitgewerkt voor de toekomst van geluidberekeningen met betrekking tot
geluidbelastingkaarten. Een scenario waar in dit rapport nog minder aandacht aan
is besteed, is het centraal berekenen van geluidbelastingkaarten. In dit
scenario kan de CVGG centraal geluidbelastingkaarten berekenen. In dit scenario
hoeven de bronhouders alleen de geluidgegevens waarover zij zelf beschikken aan
te leveren en doet de CVGG de rest. Maar deze geluidgegevens moeten dan wel
volledig en precies volgens het IMGeluid worden aangeleverd. Het belangrijkste
werk is daarmee al verricht. Dit scenario zal aantrekkelijk worden, wanneer het
met forse besparing op de rekentijden gepaard zal gaan, of met besparing op
licentiekosten voor rekensoftware. Dit scenario betekent ook dat de CVGG over
voldoende informatie moet beschikken, om geluidbelastingkaarten voor het publiek
op te stellen.

Geluidbelastingkaarten voor het publiek bevatten vaak nog aanvullende gegevens
om de kaart beter leesbaar te maken. Dit zijn bijvoorbeeld gegevens over de
ligging van industrieterreinen of andere geluidbelastende activiteiten. Wanneer
in de toekomst voor dit scenario wordt gekozen, is het daarom ook belangrijk om
na te denken over het inwinningsvraagstuk dat achter deze gegevens zit. Mogelijk
kunnen alle aanvullende gegevens uit het DSO (Digitaal Stelsel Omgevingswet)
worden ingewonnen, maar dit is tot op heden onzeker. Het blijft daarom een optie
dat deze ontbrekende gegevens, optioneel worden opgenomen in het IMGeluid.

Definities CMGeluidbelasting
----------------------------

### Objecttype CVGG Input Geluidgegeven
### Objecttype CVGG Input Geluidgegeven

| **Naam**        | Input-geluidgegeven                                                                                                                                                                                                  |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Geluidgegeven dat wordt gebruikt in een geluidmodel voor geluidbelastingkaarten te berekenen, dat kan worden afgenomen vanuit de CVGG.                                                                               |
| **Toelichting** | Het gaat hier om geluidgegevens m.b.t. rijkswegen, provinciale wegen, lokale wegen, spoorwegen, industrie en Luchtvaart. De structuur van deze gegevens wordt binnen de uitbreiding van het IMGeluid gespecificeerd. |
| **Abstract**    | **Ja**. Dit betekent dat dit modelelement niet op zichzelf bestaat, maar dat het altijd een GeluidgegevenRijksweg, GeluidgegevenProvincialeWeg, GeluidgegevenHoofdpoorweg of een GeluidcontourLuchtvaart betreft.    |
| **Herkomst**    | CMGeluidbelasting                                                                                                                                                                                                    |

### Objecttype Geluidgegeven rijksweg

| **Naam**        | Geluidgegeven Rijksweg                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Geluidgegeven afkomstig van een stukje rijksweg met een verkeersintensiteit van meer dan 3 miljoen motorvoertuigen per jaar, dat wordt gebruikt in een geluidmodel voor geluidbelastingkaarten te berekenen.                                                                                                                                                                                                                                                 |
| **Toelichting** | Het gaat hier om geluidgegevens die Rijkswaterstaat in beheer heeft. Deze gegevens zijn wat betreft betekenis (semantiek) anders dan de gegevens in WegdeelGPP uit IMGeluid, dus zullen een eigen objecttype moeten krijgen binnen IMGeluid. Dit zal waarschijnlijk gaan om een aangepaste versie van GPPWegdeel. Dit objecttype heeft een aangepaste definitie en bevat een aantal extra attribuutsoorten om te kunnen rekenen met de CNOSSOS rekenmethode. |
| **Abstract**    | Nee.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Herkomst**    | CMGeluidbelasting                                                                                                                                                                                                                                                                                                                                                                                                                                            |

### Objecttype Geluidgegeven Provinciale Weg

| **Naam**        | Geluidgegeven provinciale weg                                                                                                                                                                                                                                                                                                                                                                                                                              |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Geluidgegeven afkomstig van een stukje provinciale weg met een verkeersintensiteit van meer dan 3 miljoen motorvoertuigen per jaar, dat wordt gebruikt in een geluidmodel voor geluidbelastingkaarten te berekenen.                                                                                                                                                                                                                                        |
| **Toelichting** | Het gaat hier om geluidgegevens die een Provincie in beheer heeft. Deze gegevens zijn wat betreft betekenis (semantiek) anders dan de gegevens in WegdeelGPP uit IMGeluid, dus zullen een eigen objecttype moeten krijgen binnen IMGeluid. Dit zal waarschijnlijk gaan om een aangepaste versie van GPPWegdeel. Dit objecttype heeft een aangepaste definitie en bevat een aantal extra attribuutsoorten om te kunnen rekenen met de CNOSSOS rekenmethode. |
| **Abstract**    | **Nee**.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Herkomst**    | CMGeluidbelasting                                                                                                                                                                                                                                                                                                                                                                                                                                          |

### Objecttype Geluidgegeven spoorweg

| **Naam**        | GeluidgegevenSpoorweg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Geluidgegeven afkomstig van een stukje hoofdspoorweg, of een Lokale spoorwegen met een verkeersintensiteit van meer dan 30.000 treinen per jaar, dat wordt gebruikt in een geluidmodel voor geluidbelastingkaarten te berekenen.                                                                                                                                                                                                                                                                                                                                                                    |
| **Toelichting** | Het gaat hier om geluidgegevens die ProRail in beheer heeft in het geval van Hoofdspoorwegen. De provincies beheren Lokale spoorwegen met een verkeersintensiteit van meer dan 30.000 treinen per jaar. Deze gegevens zijn wat betreft betekenis (semantiek) anders dan de gegevens in SpoordeelGPP uit IMGeluid, dus zullen een eigen objecttype moeten krijgen binnen IMGeluid. Dit zal waarschijnlijk gaan om een aangepaste versie van SpoordeelGPP. Dit objecttype heeft een aangepaste definitie en bevat een aantal extra attribuutsoorten om te kunnen rekenen met de CNOSSOS-rekenmethode. |
| **Abstract**    | **Nee.**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Herkomst**    | CMGeluidbelasting                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### Objecttype Geluidcontour Luchtvaart

| **Naam**        | GeluidcontourLuchtvaart                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Geluidcontour afkomstig van burgerluchthavens van nationale betekenis met meer dan 50.000 vliegtuigbewegingen, oefenvluchten met lichte vliegtuigen niet meegerekend.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Toelichting** | Het gaat hier om geluidcontouren opgevraagd door afdeling DG Luchtvaart en Maritieme Zaken van het Ministerie van Infrastructuur en Waterstaat, bij burgerluchthavens met nationale betekenis. Aangezien het bij geluidbrongegevens voor luchtvaart vaak gaat om commercieel gevoelige informatie, hoeven alleen de contouren gebruikt te worden als input voor een geluidberekening. Deze contouren kunnen worden opgeslagen in de CVGG als een nieuwe aanlevering in overeenstemming met IMGeluid. Een nieuwe aanlevering is nodig omdat het in dit geval gaat om het gerealiseerde aantal vluchten en niet om een vergunde situatie. |
| **Abstract**    | **Nee**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Herkomst**    | CMGeluidbelasting                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

### Objecttype Geluidmodel Geluidbelastingkaart

| **Naam**        | GeluidmodelGeluidbelastingkaart                                                                                                                                                                                                                                                                                                                                                                                                |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Een geluidmodel van een bepaald gebied, bestaande uit Input-geluidgegevens, dat wordt gebruikt om geluidbelastingkaarten mee te bereken.                                                                                                                                                                                                                                                                                       |
| **Toelichting** | Het geluidmodel wordt samengesteld door akoestisch experts volgens, in overeenstemming met de CNOSSOS-rekenmethode. Het doel van het geluidmodel is om zo goed mogelijk de geluidbelasting in een bepaald gebied te simuleren. Welk gebied dit betreft is afhankelijk van het bestuursorgaan dat de opdracht geeft om een geluidmodel te maken. Dit zou bijvoorbeeld het geluidmodel van een agglomeratie-gemeente kunnen zijn |
| **Abstract**    | **Nee**.                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Herkomst**    | CMGeluidbelasting                                                                                                                                                                                                                                                                                                                                                                                                              |

### Objecttype Lokaal input-geluidgegeven

| **Naam**        | Lokaal input-geluidgegeven                                                                                                                                                                                                                                                                                                                                                                                        |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Geluidgegeven dat wordt gebruikt in een geluidmodel voor geluidbelastingkaarten te berekenen, opgehaald door een agglomeratie-gemeente vanuit lokale bronnen.                                                                                                                                                                                                                                                     |
| **Toelichting** | Niet alle geluidgegevens worden door agglomeraties opgevraagd bij andere overheden. Over de meeste lokale gegevens over geluidbelastende activiteiten, beschikt de gemeente zelf. In een beperkt volume vindt soms uitwisseling tussen agglomeratie-gemeenten plaats. Wanneer een agglomeratie-gemeente een geluidbelastingkaart of -tabel gaat berekenen worden deze geluidgegevens gebruikt in een geluidmodel. |
| **Abstract**    | **Ja**. Dit betekent dat dit modelelement niet op zichzelf bestaat, maar dat het altijd wordt ingevuld door een meer specifiek objecttype. In dit geval zijn de specifiekere Objecttypen met de Generalisatie relatie zichtbaar in het model.                                                                                                                                                                     |
| **Herkomst**    | CMGeluidbelasting                                                                                                                                                                                                                                                                                                                                                                                                 |

### Objecttype Industrie geluidgegeven

| **Naam**        | Industrie geluidgegeven                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Een lokaal input-geluidgegeven met betrekking tot geluidbelastende activiteiten die te maken hebben met industrielawaai.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Toelichting** | Het gaat hier om geluidbelastende activiteiten en verzamelingen van activiteiten: Activiteiten op industrieterreinen met gpp’s waarvoor het geluid van dat industrieterrein meer is dan 55 dB Lden of 50 dB Lnight Activiteiten in gebieden met een hogere waarde voor geluid, waarvoor de geluidbelasting door die activiteiten op omliggende geluidgevoelige gebouwen meer kan zijn dan 55 dB Lden of 50 dB Lnight; Activiteiten buiten industrieterreinen met gpp’s met een ten hoogste toegelaten geluidbelasting door de activiteit meer is dan 55 dB Lden of 50 dB Lnight Wanneer een agglomeratie-gemeente een geluidbelastingkaart of -tabel gaat berekenen worden deze geluidgegevens gebruikt in een geluidmodel. |
| **Abstract**    | **Ja** Dit betekent dat dit modelelement niet op zichzelf bestaat, maar dat het altijd wordt ingevuld door een meer specifiek objecttype. In dit geval zijn de specifiekere Objecttypen met de Generalisatie relatie zichtbaar in het model.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Herkomst**    | CMGeluidbelasting                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### Objecttype Gegeven gezoneerde industrie

| **Naam**        | Gegeven gezoneerde industrie                                                                                                                                                                                                 |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Een geluidgegeven met betrekking op activiteiten op industrieterreinen met gpp’s waarvoor het geluid van dat industrieterrein meer is dan 55 dB Lden of 50 dB Lnight.                                                        |
| **Toelichting** | Tot deze gegevens behoren bijvoorbeeld geluidbronnen binnen een industrieterrein met GPP’s. Het gaat hier wel om een andere situatie dan die in de CVGG staat geregistreerd. In de CVGG staat namelijk de vergunde situatie. |
| **Abstract**    | **Nee**.                                                                                                                                                                                                                     |
| **Herkomst**    | CMGeluidbelasting                                                                                                                                                                                                            |

### Objecttype Gegeven aangewezen gebieden

| **Naam**        | Gegeven aangewezen gebieden                                                                                                                                                                                                                                                                                       |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Een geluidgegeven met betrekking op activiteiten in gebieden met een hogere waarde voor geluid, waarvoor de geluidbelasting door die activiteiten op omliggende geluidgevoelige gebouwen meer kan zijn dan 55 dB Lden of 50 dB Lnight.                                                                            |
| **Toelichting** | Het beeld is dat tot deze aangewezen gebieden voornamelijk horeca concentratiegebieden behoren. Echter is het toegestaan als gemeente zelf invulling te geven aan deze categorie. Het is daarom enige mate van onzekerheid over welke andere soorten aangewezen gebieden precies worden gebruikt in het werkveld. |
| **Abstract**    | **Nee**.                                                                                                                                                                                                                                                                                                          |
| **Herkomst**    | CMGeluidbelasting                                                                                                                                                                                                                                                                                                 |

### Objecttype Industrie geluidgegeven

| **Naam**        | Gegeven groot bedrijf                                                                                                                                                                                                                                                                                                                                                  |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Een geluidgegeven met betrekking op activiteiten buiten industrieterreinen met gpp’s met een ten hoogste toegelaten geluidbelasting door de activiteit meer is dan 55 dB Lden of 50 dB Lnight.                                                                                                                                                                         |
| **Toelichting** | Het gaat hier om grote bedrijven die buiten een gezoneerd industrieterrein met GPP’s liggen. Grote bedrijven die mogelijk meer geluid produceren dan is toegestaan, moeten voor een vergunningaanvraag akoestisch onderzoek laten uitvoeren. Het beeld van I&W hierbij is daarom dat de precieze invulling van deze categorie bekend is bij de agglomeratie-gemeenten. |
| **Abstract**    | **Ja**                                                                                                                                                                                                                                                                                                                                                                 |
| **Herkomst**    | CMGeluidbelasting                                                                                                                                                                                                                                                                                                                                                      |

### Objecttype Lokale weg / spoorweg geluidgegeven

| **Naam**        | Lokale weg / spoorweg geluidgegeven                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Lokaal input-geluidgegeven over geluidbelastende activiteiten die te maken hebben met lokale wegen of spoorwegen.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Toelichting** | Het gaat hier om geluidgegevens met betrekking tot lokale wegen en spoorwegen waarvan een agglomeratie-gemeente bronhouder is. Deze gegevens zijn wat betreft betekenis (semantiek) anders dan de gegevens in WegdeelBGE en SpoordeelBGE uit IMGeluid, dus zullen een eigen objecttype moeten krijgen binnen IMGeluid. Dit zal waarschijnlijk gaan om aangepaste versies van SpoordeelBGE en WegdeelBGE. Deze objecttypen hebben een aangepaste definitie en bevat een aantal extra attribuutsoorten om te kunnen rekenen met CNOSSOS-rekenmethode. |
| **Abstract**    | **Nee**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Herkomst**    | CMGeluidbelasting                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### Objecttype Omgevingsmodel Objecttype

| **Naam**        | OmgevingsmodelObjecttype                                                                                                                                                                                                                                             |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Objecttype afkomstig uit een omgevingsmodel geschikt voor geluidberekeningen.                                                                                                                                                                                        |
| **Toelichting** | Dit omgevingsmodel kan gemaakt zijn door het bestuursorgaan of er kan gebruik worden gemaakt van een landelijk model, zoals bijvoorbeeld het 3D omgevingsmodel geluid. Dit omgevingsmodel bevat ook geluidgevoellige gebouwen zoals bedoeld in Artikel 3.20 van BKL. |
| **Abstract**    | **Nee**.                                                                                                                                                                                                                                                             |
| **Herkomst**    | CMGeluidbelasting                                                                                                                                                                                                                                                    |

### Objecttype IMGeluid Objecttype

| **Naam**        | IMGeluid Objecttype                                                                                                                                                                                                                                                                                                    |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Een objecttype afkomstig uit het Informatiemodel Geluid.                                                                                                                                                                                                                                                               |
| **Toelichting** | Dit is een objecttype uit het IMGeluid dat mogelijk kan worden gebruikt om de structuur van de input-geluidgegevens te bepalen. Deze input-geluidgegevens kunnen worden gebruikt om een geluidbelastingkaart te berekenen. Niet elk objecttype uit het IMGeluid is hiervoor geschikt. Het is afhankelijk van een keuze |
| **Abstract**    | **Ja**. Dit betekent dat dit modelelement niet op zichzelf bestaat, maar dat het altijd een objecttype is afkomstig uit het IMGeluid.                                                                                                                                                                                  |
| **Herkomst**    | IMGeluid                                                                                                                                                                                                                                                                                                               |

### Objecttype END Datamodel Objecttype

| **Naam**        | END Datamodel DF_4_8 Objecttype                                                                                                                  |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Een objecttype afkomstig uit het datamodel van de Environmental Noise Directive.                                                                 |
| **Toelichting** | In de specifieke relatie die hier zichtbaar is zou dit hier gaan om verschillende objecttypen uit de DF4_8 domeinmodellen van het END Datamodel. |
| **Abstract**    | **Ja**. Dit betekent dat dit modelelement niet op zichzelf bestaat, maar dat het altijd een objecttype is afkomstig uit het END Datamodel.       |
| **Herkomst**    | END Datamodel                                                                                                                                    |

### Objecttype Geluidgevoellig Gebouw Objecttype

| **Naam**        | GeluidgevoelligGebouwObjecttype                                                                                                                                                                                                        |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Een objecttype dat een geluidgevoellig gebouw, zoals bedoeld in artikel 3.20 van BKL representeert, inclusief alle in de regelgeving bepaalde eigenschappen.                                                                           |
| **Toelichting** | Voor de geluidgevoelige gebouwen kan de BAG als uitgangspunt worden genomen. Echter kan niet alle informatie uit de BAG worden gehaald. Waar deze informatie wel vandaan kan worden gehaald wordt omschreven in [de memo](VERWIJZING). |
| **Abstract**    | **Nee**.                                                                                                                                                                                                                               |
| **Herkomst**    | CMGeluidbelasting                                                                                                                                                                                                                      |

### Objecttype Geluidbelastingkaart

| **Naam**        | Geluidbelastingkaart                                                                                                                                                |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Een geluidbelastingkaart zoals bedoeld in de Environmental Noise Directive in overeenstemming met het END Datamodel.                                                |
| **Toelichting** | De geluidbelastingkaart wordt berekend uit een GeluidmodelGeluidbelastingkaart in opdracht van bestuursorgaan. Een geluidbelastingkaart bevat de volgende gegevens: |
| **Abstract**    | **Nee**.                                                                                                                                                            |
| **Herkomst**    | CMGeluidbelasting                                                                                                                                                   |

-   De geluidbelasting Lden en de geluidbelasting Lnight door de geluidbronnen
    in het kalenderjaar voorafgaand aan dat van de vaststelling van een
    geluidbelastingkaart, weer te geven met 5 dB-contouren; en

-   Het aantal geluidgevoelige gebouwen en bewoners van woningen dat aan bij
    ministeriele regeling vastgestelde waarden van de geluidbelasting Lden en de
    geluidbelasting Lnight wordt blootgesteld, weer te geven in tabellen met
    geluidbelastingklassen van telkens 5 dB.

Los van de verplichte geluidbelastingkaarten en -tabellen die aan Europa moeten
worden gerapporteerd, worden er ook kaarten gemaakt om het publiek te
informeren. Voor deze kaarten voor het publiek is soms aanvullende informatie
vereist.

### Objecttype Referentie geluidbron

| **Naam**        | Referentie geluidbron                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Een geometrische afbakening van een gebied of locatie die relevante informatie toevoegt over de geluidbron aan geluidbelastingkaarten voor het publiek.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Toelichting** | Dit Objecttype bevat bijvoorbeeld de afbakening van een Industrieterrein, een horeca concentratiegebied of een ander aangewezen gebied. Een referentie gebiedsafbakening kent mogelijke een stuk meer invullingen. Binnen een geluidbelastingkaart bedoeld voor het publiek, vervult deze afbakening een informerende rol. In de geluidbelastingkaarten die aan de EEA gerapporteerd worden, spelen deze gebiedsafbakeningen geen rol. Een Referentie geluidbron is **niet per se** hetzelfde als een input-geluidgegeven of een geluidbrongegeven. Het gaat in dit geval namelijk niet om een geluidgegeven dat wordt gebruikt in een geluidberekening, maar om een afbakening die voor het publiek betekenisvolle informatie toevoegt over de geluidbron. |
| **Abstract**    | **Ja**. Dit betekent dat dit modelelement niet op zichzelf bestaat, maar dat het altijd wordt ingevuld door een meer specifiek objecttype. In dit geval is het nog niet precies bekend welke specifieke referentie gebiedsaanwijzingen er worden gebruikt in het werkveld.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Herkomst**    | CMGeluidbelasting                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### Objecttype END Datamodel DF1_5 Objecttype

| **Naam**        | END Datamodel DF1_5 Objecttype                                                                                                                                                                                                                                                   |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Objecttype afkomstig uit het END Datamodel dat extra bruikbare informatie toevoegt voor het publiek.                                                                                                                                                                             |
| **Toelichting** | De “Noise sources” (DF1_5) zijn objecttype afkomstig uit het END Datamodel. De Nederlandse vertaling hiervan, “geluidbronnen”, gebruiken we hier niet om verwarring te voorkomen met de input-geluidgegevens die worden gebruikt voor het berekenen van de geluidbelastingkaart. |
| **Abstract**    | **Nee**                                                                                                                                                                                                                                                                          |
| **Herkomst**    | END Datamodel                                                                                                                                                                                                                                                                    |

### Objecttype Stil gebied

| **Naam**        | Stil gebied                                                                                                                                                                                         |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Afbakening van een stil gebied zoals bedoeld in de Europese richtlijn omgevingslawaai.                                                                                                              |
| **Toelichting** | Deze stille gebieden worden ook als DF7_10 gerapporteerd aan de EEA. In deze context zijn alleen de afbakening en het type stil gebied (**quietAreaType)** relevant voor de kaart voor het publiek. |
| **Abstract**    | **Nee**.                                                                                                                                                                                            |
| **Herkomst**    | END Datamodel                                                                                                                                                                                       |


Oplossingsrichtingen ten grondslag aan het CMGeluidbelasting
------------------------------------------------------------

In deze paragraaf staan een aantal oplossingsrichtingen omschreven die aan de
grondslag van het CMGeluidbelasting liggen. In de oplossingsrichtingen is de
opgehaalde input vanuit het werkveld opgenomen. De oplossingsrichtingen zijn omschreven in de vorm van twee memo's.

### Memo: Centraal aanleveren van lokale geluidgegevens van agglomeratiegemeenten

**Huidige situatie**

Voor het samenstellen van een geluidmodel moeten vooral agglomeratiegemeenten
veel stappen ondernemen. Agglomeraties zijn volgens de Europese Richtlijn
Omgevingslawaai [bron] verplicht om geluidbelastingkaarten en -tabellen te
berekenen. In deze kaarten en tabellen moet de geluidbelasting afkomstig van
industrie, provinciale wegen, hoofdspoorwegen, lokale wegen, hoofdwegen en de
luchtvaart worden meegenomen. Deze gegevens zijn voor een groot deel in beheer
bij andere bronhouders, waardoor er veel informatiestromen ontstaan.

**Gewenste situatie**

De gegevens over geluidbelasting zijn landelijk gestandaardiseerd en worden
efficiënt en eenvoudig via een landelijk gestandaardiseerd proces uitgewisseld.
Hiermee bedoelen we dat gegevens over geluidbelasting uniform zijn zodat de
informatieproducten als resultaat uit de berekeningen met deze gegevens, o.m.
geluidbelastingkaarten, uniform in inhoud en kwaliteit zijn. De gegevens over
geluidbelasting worden met zo min mogelijk informatiestromen uitgewisseld.

**Uitgangspunten**

1.  Agglomeratie gemeenten zijn bronhouder van lokale geluidgegevens.

2.  Lokale geluidgegevens bestaan uit de volgende gegevens over geluidsbelasting
    afkomstig van industrie, provinciale wegen, hoofdspoorwegen, lokale wegen,
    hoofdwegen en de luchtvaart.

3.  Voor ‘centraal rekenen’ aan geluidbelastingkaarten zijn lokale
    geluidsgegegevens van agglomeratiegemeenten nodig.

4.  Onder ‘centraal aanleveren’ verstaan we het leveren van gegevens aan de
    CVGG.

**Alternatieven en keuzes**

Lokale geluidgegevens worden door agglomeratiegemeenten:

>   Alternatief 1. *niet* centraal aangeleverd.

>   Alternatief 2. *optioneel* centraal aangeleverd.

>   Alternatief 3. *verplicht* centraal aangeleverd.

Kansen en risico’s van centraal aanleveren van lokale geluidgegevens door
agglomeratiegemeenten zijn:

1.  Met het centraal aanleveren van lokale geluidgegevens zijn we voorbereid op
    centraal rekenen.

2.  Centraal aanleveren c.q. beschikbaarstellen van lokale geluidgegevens biedt
    mogelijkheden tot samenwerking zonder onderlinge <span title="informatiestromen/uitwisseling">Bij onderlinge informatiestromen tussen agglomeratiegemeenten en andere organisaties zijn er onderlinge afspraken over formaat en methode van uitwisselen. Er is geen landelijk gestandaardiseerd proces wat de uitwisseling van gegevens niet-uniform en mogelijk duur maakt door maatwerkkoppelvlakken en dataconversies.</span>.
    
3.  De inname van lokale geluidgegevens moet technisch ingericht worden in de
    centrale voorziening.

4.  Lokale geluidgegevens zijn niet-uniform[^2], waardoor de inhoud en kwaliteit
    van de gegevens die centraal aangeleverd en beschikbaargesteld worden,
    wisselend zijn.

    [^2]: Er is nu weinig uniformiteit door een gebrek aan standaardisatie op
    het gebied van verkeersmodellen. Elke gemeente organiseert zich nu zelf: er
    is geen landelijk gestandaardiseerd formaat en gestandaardiseerd proces.

5.  Er lijkt weinig draagvlak onder agglomeratiegemeenten voor het centraal
    aanleveren.[^3]

    [^3]: Uit een eerder gehouden klankbordsessie met een select gezelschap van
    agglomeratiegemeenten bleek dat 80% niet voor een verplichting is voor het
    centraal aanleveren van lokale geluidgegevens. Dit betekent dat er een hoop
    werk ligt in de communicatie om agglomeratiegemeenten mee te krijgen in het
    alternatief ‘centraal aanleveren’.

6.  De toegevoegde gebruikerswaarde is niet bekend.

**Advies 1. Optioneel beginnen met centraal aanleveren en later verplichten.**

Het advies is om de CVGG voor te bereiden op de inname van lokale geluidgegevens
en agglomeratiegemeenten de keuze te geven om lokale geluidgegevens optioneel
(alternatief 2) te mogen laten aanleveren aan de CVGG.[^4] Dit om meer
samenwerking en een reductie van informatiestromen te bereiken. Aandachtspunt is
de communicatie richting agglomeratie om de toegevoegde waarde van centraal
aanleveren en beschikbaarstellen te duiden. Op een later moment kan beoordeeld
worden in hoeverre een verplichting moet gaan gelden voor het centraal
aanleveren van lokale geluidgegevens (alternatief 3).

[^4]: Bij Basisregistratie Grootschalige Topografie (BGT) bestaat het
informatiemodel uit een verplicht deel, de BGT, en een optioneel deel, IMGeo. In
2011 is de keuze gemaakt om om de Landelijke Voorziening BGT uit te breiden met
de inname van optionele gegevens van IMGeo. De ervaring hiermee is dat
bronhouders bij onder meer wegen en terreinen vrijwillig aanvullende gegevens
over de functie en het fysieke voorkomen aanleveren, alsook dat bronhouders
vrijwillig extra gegevens over bomen, straatmeubilair, speeltuinen e.d. leveren.
In de doorontwikkeling van de BGT wordt bekeken welke optionele gegevens naar
het verplichte deel gehaald kunnen en moeten worden. Deze beoordeling gebeurd op
basis van de huidige vulling en de toegevoegde gebruikerswaarde.

**Advies 2. Lokale geluidgegevens uniformeren**

Het advies is om vooraf of tegelijkertijd met het inregelen van de inname van
lokale geluidsgegevens, te onderzoeken in hoeverre deze gegevens en het proces
rond de inwinning/totstandkoming van deze gegevens gestandaardiseerd kan worden,
bijvoorbeeld op het gebied van (rekenen met) verkeersmodellen. Dit om meer
uniformiteit in inhoud en kwaliteit in de brongegevens en afgeleide
informatieproducten (geluidbelastingkaarten) te bereiken.


### Memo: Geluidgevoelige gebouwen en geluidbelastingkaarten

**Huidige situatie**

Voor het maken van geluidbelastingkaarten zijn onder meer gegevens nodig over
geluidgevoelige gebouwen[^1].

[^1]: Om het aantal gevoelige gebouwen binnen een contour, en het betreffende
aantal personen dat verblijft binnen deze contour te kunnen bepalen.

Een geluidgevoelig gebouw[^2] is gedefinieerd in de Artikel 3.20 van het Besluit
kwaliteit leefomgeving (Bkl).

[^2]: Gevoelig gebouw is (een deel van) een gebouw met een gebruiksfunctie
zijnde woonfunctie, onderwijsfunctie, bijeenkomstfunctie van het type
kinderopvang met bedgebied, of gezondheidszorgfunctie met bedgebied.

Om het aantal geluidgevoelige objecten te bepalen, gebruiken overheden vaak
BAG-bestanden[^3]. BAG-bestanden bevatten niet alle gegevens die nodig zijn om
alle geluidgevoelige gebouwen te identificeren[^4].

[^3]: In de BAG worden één of meer functies van het Bouwbesluit als gebruiksdoel
bij een Verblijfsobject opgenomen; een Verblijfsobject maakt onderdeel uit van
een Pand.

[^4]: In de BAG wordt bij een Pand/Verblijfsobject niet vastgelegd of het object
in gebruik is als ‘kinderopvang met bedfunctie’ of ‘gezondheidszorg met
bedfunctie’.

Combinatie met andere bronnen[^5] is noodzakelijk om alle geluidgevoelige
gebouwen te bepalen.

[^5]: Voorbeelden van aanvullende hulpbronnen zijn bijvoorbeeld het Landelijk
Register Kinderopvang (LRK), Basisregistratie Topografie (BRT), Digitaal
Topografisch Bestand RWS (DTB RWS)

Rijkswaterstaat en ProRail hebben een eigen bestand (voor hun interessegebied)
met geluidgevoelige gebouwen, en stellen die op verzoek beschikbaar aan
gemeenten en provincies.[^6]

[^6]: https://www.infomil.nl/onderwerpen/geluid/nieuws/2017/tabellen/

**Gewenste situatie**

Het maken van geluidbelastingkaarten is efficiënt. Overheden kunnen eenvoudig en
eenduidig een bestand met geluidgevoelige gebouwen samenstellen of afnemen.

**Uitgangspunten**

1.  De informatie over geluidgevoelige gebouwen moet eerder beschikbaar zijn dan
    de geluidbelastingkaarten, zodat de gegevens ook door de beheerders van
    belangrijke geluidbronnen kunnen worden gebruikt.

2.  De gegevens over geluidgevoelige gebouwen moeten worden aangeleverd door
    gemeenten, omdat in hun omgevingsplannen is bepaald welke functies zijn
    toegestaan en zij de lokale kennis hebben over details als bedgebied en
    kinderopvang.[^7]

    [^7]: Met dit uitgangspunt vervalt het alternatief om buiten de BAG en
    IMGeluid om een landsdekkend bestand met geluidgevoelige gebouwen samen te
    stellen, welke los van de LV-BAG of CVGG beschikbaargesteld wordt aan andere
    overheden.

3.  Gegevens daar opslaan waar ze verzameld, opgeslagen, en beheerd worden. De
    bronhouders van de BAG zijn de gemeenten. Bronhouders voor de
    Geluidbelastingkaarten zijn ook de gemeenten.

4.  De populatie geluidgevoelige gebouwen binnen Geluid is kleiner dan de
    populatie kwetsbare gebouwen binnen Externe Veiligheid[^8].

    [^8]: https://www.infomil.nl/onderwerpen/veiligheid/bevi-revi/\@110701/kwetsbare-obecten/

5.  De geluidbelastingkaarten hebben een actualisatie frequentie van 5 jaar. Met
    dat specifieke doel voor ogen hebben, moet er dus 5-jaarlijks een actueel
    bestand met geluidgevoelige gebouwen zijn. [^9]

    [^9]: Tenzij het doel is om de geluidgevoelige gebouwen dataset structureel
    up-to-date te houden, waardoor die ook voor andere geluidberekeningen
    gebruikt kan worden.

6.  Voor END kaarten zijn totale aantallen gebouwen en gehinderden binnen een
    geluidcontour nodig. Het is niet nodig gegevens over de geluidgevoelige
    gebouwen zelf op te nemen in END kaarten.

**Alternatief 1 Opnemen gegevens geluidgevoelige gebouwen in de BAG**

Het kenmerk ‘is geluidgevoelig’ wordt als verplicht gegeven toegevoegd aan de
BAG[^10].

[^10]: Het informatiemodel BAG is in beheer bij het Kadaster, opdrachtgever voor
de BAG is min. BZK.

1.  Bronhouders van de BAG (gemeenten) wordt gevraagd om hun werkproces en
    software hierop aan te passen, en de gegevens in te winnen en aan te leveren
    aan de LV-BAG.

2.  De gegevens over geluidgevoelige gebouwen zijn hiermee actueel en
    landsdekkend beschikbaar voor meerdere toepassingen. Met levering aan de BAG
    kan dit gegeven ook meegenomen worden in het 3D Omgevingsmodel voor Geluid.

3.  Bronhouder voor BAG en geluidbelastingkaarten zijn gemeenten; gegevens daar
    opslaan waar ze verzameld, opgeslagen, en beheerd worden.

4.  Door gegevens over geluidgevoelige gebouwen mee te nemen in proces van de
    BAG wordt dit werkproces meteen binnen de gemeente geregeld.

**Alternatief 2 Opnemen gegevens geluidgevoelige gebouwen in IMGeluid**

Het IMGeluid wordt uitgebreid met het object Geluidgevoelig gebouw. Dit is een
uitbreiding op het informatiemodel Geluid, dus een Y-wijziging.

1.  De populatie van geluidgevoelige gebouwen binnen IMGeluid is een subset van
    de panden in de BAG o.b.v. de criteria van de Bkl.

2.  Leveren van gegevens aan CVGG is een apart werkproces voor de gemeenten. In
    principe komt er dan een extra verplichting / taak bij voor de gemeenten om
    in het geval een wijzigingen in de BAG, ook steeds een bijgewerkte versie
    aan te leveren aan CVGG.

3.  Borging van de actualiteit is een aandachtspunt. In het kader van END zou
    eens per 5 jaar geactualiseerd hoeven worden.

**Alternatief 3 Opnemen kenmerk ‘is geluidgevoelig’ in het 3D geluidbestand NL**

Het 3D geluidbestand NL bevat een beschrijving van het hoogteverloop van het
terrein, de eigenschappen van het bodemoppervlak en de geometrie van gebouwen.
De modelinformatie van de fysieke ruimte die nodig is voor het uitvoeren van
geluidssimulaties wordt gegenereerd aan de hand van landsdekkende
gegevensbronnen BGT, BAG en AHN.

1.  De eigenschap ‘geluidgevoelig gebouw’ wordt op basis van aanvullende bronnen
    (welke?) toegevoegd aan het 3D geluidbestand NL, dus een Y-wijziging.

2.  Het 3D geluidbestand NL is momenteel beschikbaar als bèta-bestand als
    resultaat uit een samenwerking tussen Kadaster, RWS, TU Delft, RIVM en IPO.

**Alternatief 4 Methode EV kwetsbare objecten**

In het Besluit kwaliteit leefomgeving (Bkl) staan 3 categorieën voor de
bescherming voor verschillende soorten gebouwen en locaties: zeer kwetsbaar,
kwetsbaar en beperkt kwetsbaar. De gemeente moet regels opnemen in het
omgevingsplan om deze gebouwen en locaties te beschermen vanwege externe
veiligheidsrisico's.

De gegevens van EV kwetsbare objecten zijn opgenomen in de risicokaart.
Provincies maken en beheren de risicokaart op basis van aangeleverde gegevens
door gemeenten, Rijk en provincies zelf[^11]. De gegevens worden o.m. als
WFS[^12] beschikbaar gesteld[^13]. De populatie kwetsbare objecten voor Externe
Veiligheid is ruimer dan de populatie van geluidgevoelige gebouwen voor domein
Geluid[^14]. Toepassing van het bestand Kwetsbare objecten van EV voor
geluidberekeningen rekent dus met iets ruimere populatie. Het is onbekend in
hoeverre de nauwkeurigheid van de geluidbelastingkaarten hierdoor wordt
beïnvloed.

[^11]: Zie atlas van de Leefomgeving:
<https://www.atlasleefomgeving.nl/kwetsbare-objecten>

[^12]: Zie
<http://servicespub.risicokaart.nl/rk_services_pub/services/WFS-risicokaart>.

[^13]: In meerdere lagen met verschillende type kwetsbare objecten, onder meer
gebouwen met gezondheidszorgfunctie, onderwijsfunctie, woonfunctie of overige
functie.

[^14]: Zie <https://iplo.nl/thema/externe-veiligheid/kwetsbare-gebouwen/>, voor
Geluid worden een subset van de gezondheidszorg- en kinderopvanglocaties
gehanteerd, namelijk enkel die gebouwen met een bedfunctie.


