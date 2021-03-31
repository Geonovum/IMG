Conceptueel Informatiemodel Geluidbelasting specificatie (CIMGeluidbelasting)
========================================================
<figure id="Figuur_10">
<img src="media/CIMGeluidbelasting.png" alt="">
<figcaption>Conceptueel informatiemodel geluidbelasting.</figcaption>
</figure>

Het conceptuele model geluidbelasting (CIMGeluidbelasting) is een kijk op de
geluidinformatie die een rol gaat spelen binnen de toekomstige situatie zoals
omschreven in het vorige hoofdstuk. In dit hoofdstuk worden de objecttypen
gedefinieerd en toegelicht. Het CIMGeluidbelasting is een concept kijk op de
toekomst. Het doel van het model is om een overzicht te geven op waar relevante
informatie voor het maken van een geluidbelastingkaart, vandaan kan worden
gehaald. Dit model wordt gebruikt om de specifieke uitbreidingen die nodig zijn
voor het IMGeluid te bepalen.

Wat opvalt is dat het model vanuit een hoger [niveau](
https://docs.geostandaarden.nl/mim/mim/\#typen-informatiemodellen) naar de
informatie kijkt dan het IMGeluid. Voor het doel van dit model is het niet nodig
om meer gedetailleerd te kijken naar de verschillende blokjes. Zie **figuur x**
voor een UML weergave van het CIMGeluidbelasting.

Definities CIM-Geluidbelasting
------------------------------

### Objecttype CVGG Input Geluidgegeven

| **Naam**        | CVGGInputGeluidgegeven                                                                                                                                                                                            |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Geluidgegeven dat wordt gebruikt in een geluidmodel voor geluidbelastingkaarten te bereken, dat kan worden afgenomen vanuit de CVGG.                                                                              |
| **Toelichting** | Het gaat hier om geluidgegeven m.b.t. Rijkswegen, Provinciale wegen, Hoofdspoorwegen en Luchtvaart. De structuur van deze gegevens wordt binnen de uitbreiding van het IMGeluid gespecificeerd.                   |
| **Abstract**    | **Ja**. Dit betekent dat dit modelelement niet op zichzelf bestaat, maar dat het altijd een GeluidgegevenRijksweg, GeluidgegevenProvincialeWeg, GeluidgegevenHoofdpoorweg of een GeluidcontourLuchtvaart betreft. |
| **Herkomst**    | CIMGeluidbelasting                                                                                                                                                                                                |

### Objecttype Geluidgegeven rijksweg

| **Naam**        | GeluidgegevenRijksweg                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Geluidgegeven afkomstig van een stukje rijksweg met een verkeersintensiteit van meer dan 3 miljoen motorvoertuigen per jaar, dat wordt gebruikt in een geluidmodel voor geluidbelastingkaarten te bereken.                                                                                                                                                                                                                                                   |
| **Toelichting** | Het gaat hier om geluidgegevens die Rijkswaterstaat in beheer heeft. Deze gegevens zijn wat betreft betekenis (semantiek) anders dan de gegevens in WegdeelGPP uit IMGeluid, dus zullen een eigen objecttype moeten krijgen binnen IMGeluid. Dit zal waarschijnlijk gaan om een aangepaste versie van GPPWegdeel. Dit objecttype heeft een aangepaste definitie en bevat een aantal extra attribuutsoorten om te kunnen voldoen aan de CNOSSOS rekenmethode. |
| **Abstract**    | Nee.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Herkomst**    | CIMGeluidbelasting                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### Objecttype Geluidgegeven Provinciale Weg

| **Naam**        | GeluidgegevenProvincialeWeg                                                                                                                                                                                                                                                                                                                                                                                                                                |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Geluidgegeven afkomstig van een stukje provinciale weg met een verkeersintensiteit van meer dan 3 miljoen motorvoertuigen per jaar, dat wordt gebruikt in een geluidmodel voor geluidbelastingkaarten te bereken.                                                                                                                                                                                                                                          |
| **Toelichting** | Het gaat hier om geluidgegevens die een Provincie in beheer heeft. Deze gegevens zijn wat betreft betekenis (semantiek) anders dan de gegevens in WegdeelGPP uit IMGeluid, dus zullen een eigen objecttype moeten krijgen binnen IMGeluid. Dit zal waarschijnlijk gaan om een aangepaste versie van GPPWegdeel. Dit objecttype heeft een aangepaste definitie en bevat een aantal extra attribuutsoorten om te kunnen voldoen aan de CNOSSOS rekenmethode. |
| **Abstract**    | **Nee**.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Herkomst**    | CIMGeluidbelasting                                                                                                                                                                                                                                                                                                                                                                                                                                         |

### Objecttype Geluidgegeven spoorweg

| **Naam**        | GeluidgegevenSpoorweg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Geluidgegeven afkomstig van een stukje hoofdspoorweg, of een Lokale spoorwegen met een verkeersintensiteit van meer dan 30.000 treinen per jaar, dat wordt gebruikt in een geluidmodel voor geluidbelastingkaarten te bereken.                                                                                                                                                                                                                                                                                                                                                                      |
| **Toelichting** | Het gaat hier om geluidgegevens die ProRail in beheer heeft in het geval van Hoofdspoorwegen. De provincies beheren Lokale spoorwegen met een verkeersintensiteit van meer dan 30.000 treinen per jaar. Deze gegevens zijn wat betreft betekenis (semantiek) anders dan de gegevens in SpoordeelGPP uit IMGeluid, dus zullen een eigen objecttype moeten krijgen binnen IMGeluid. Dit zal waarschijnlijk gaan om een aangepaste versie van SpoordeelGPP. Dit objecttype heeft een aangepaste definitie en bevat een aantal extra attribuutsoorten om te kunnen voldoen aan de CNOSSOS rekenmethode. |
| **Abstract**    | **Nee.**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Herkomst**    | CIMGeluidbelasting                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

### Objecttype Geluidcontour Luchtvaart

| **Naam**        | GeluidcontourLuchtvaart                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Geluidcontour afkomstig van burgerluchthavens van nationale betekenis met meer dan 50.000 vliegtuigbewegingen, oefenvluchten met lichte vliegtuigen niet meegerekend.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Toelichting** | Het gaat hier om geluidcontouren opgevraagd door afdeling DG Luchtvaart en Maritieme Zaken van het Ministerie van Infrastructuur en Waterstaat, bij burgerluchthavens met nationale betekenis. Aangezien het bij geluidbrongegevens voor luchtvaart vaak gaat om commercieel gevoelige informatie, hoeven alleen de contouren gebruikt te worden als input voor een geluidsimulatie. Deze contouren kunnen worden opgeslagen in de CVGG als een nieuwe aanlevering conform IMGeluid. Een nieuwe aanlevering is nodig omdat het in dit geval gaat om het gerealiseerde aantal vluchten en niet om een vergunde situatie. |
| **Abstract**    | **Nee**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Herkomst**    | CIMGeluidbelasting                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

### Objecttype Geluidmodel Geluidbelastingkaart

| **Naam**        | GeluidmodelGeluidbelastingkaart                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Een geluidmodel van een bepaald gebied, bestaande uit Input-geluidgegevens, dat wordt gebruikt om geluidbelastingkaarten mee te bereken.                                                                                                                                                                                                                                                                                                                                                                             |
| **Toelichting** | Het geluidmodel wordt samengesteld door akoestisch experts conform de CNOSSOS rekenmethode. Het doel van het geluidmodel is om zo goed mogelijk de geluidbelasting in een bepaald gebied te simuleren. Welk gebied dit betreft is afhankelijk van het bevoegd gezag dat de opdracht geeft om een geluidmodel te maken. Dit zou bijvoorbeeld het geluidmodel van een agglomeratie-gemeente kunnen zijn. In dit geval bevat het geluidmodel alleen geluidgegevens met afkomstig van binnen de grenzen van de gemeente. |
| **Abstract**    | **Nee**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **Herkomst**    | CIMGeluidbelasting                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### Objecttype Agglomeratie gemeente Input Geluidgegeven

| **Naam**        | AGInputGeluidgegeven                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Geluidgegeven dat wordt gebruikt in een geluidmodel voor geluidbelastingkaarten te bereken, opgehaald door een agglomeratie-gemeente vanuit lokale bronnen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Toelichting** | Niet alle geluidgegevens worden door agglomeraties opgehaald uit de CVGG. Over de meeste lokale gegevens over geluidbelastende activiteiten, beschikt de gemeente zelf. In een beperkt volume vind soms uitwisseling tussen agglomeratie-gemeenten plaats. Het gaat hier om geluidbelastende activiteiten en verzamelingen van activiteiten: Activiteiten op industrieterreinen met gpp’s waarvoor het geluid van dat industrieterrein meer is dan 55 dB Lden of 50 dB Lnight Activiteiten in gebieden met een hogere waarde voor geluid, waarvoor de geluidbelasting door die activiteiten op omliggende geluidgevoelige gebouwen meer kan zijn dan 55 dB Lden of 50 dB Lnight; Activiteiten buiten industrieterreinen met gpp’s met een ten hoogste toegelaten geluidbelasting door de activiteit meer is dan 55 dB Lden of 50 dB Lnight |
| **Abstract**    | **Nee**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Herkomst**    | CIMGeluidbelasting                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

### Objecttype Omgevingsmodel Objecttype

| **Naam**        | OmgevingsmodelObjecttype                                                                                                                                                                                                                                            |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Objecttype afkomstig uit een omgevingsmodel geschikt voor geluidsimulaties.                                                                                                                                                                                         |
| **Toelichting** | Dit omgevingsmodel kan gemaakt zijn door het bevoegd gezag of er kan gebruik worden gemaakt van een landelijk model, zoals bijvoorbeeld het 3D omgevingsmodel geluid. Dit omgevingsmodel bevat ook geluidgevoellige gebouwen zoals bedoeld in Artikel 3.20 van BKL. |
| **Abstract**    | **Nee**.                                                                                                                                                                                                                                                            |
| **Herkomst**    | CIMGeluidbelasting                                                                                                                                                                                                                                                  |

### Objecttype Informatiemodel Geluid Objecttype

| **Naam**        | InformatiemodelGeluidObjecttype                                                                                                                                                                                                                                      |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Een objecttype afkomstig uit het Informatiemodel Geluid.                                                                                                                                                                                                             |
| **Toelichting** | Dit is een objecttype uit het IMGeluid dat kan worden gebruikt als om de structuur van de input-geluidgegevens te bepalen. Deze gegevens kunnen worden gebruikt om een geluidbelastingkaart te berekenen. Niet elk objecttype uit het IMGeluid is hiervoor geschikt. |
| **Abstract**    | **Ja**. Dit betekent dat dit modelelement niet op zichzelf bestaat, maar dat het altijd een objecttype is afkomstig uit het IMGeluid.                                                                                                                                |
| **Herkomst**    | IMGeluid                                                                                                                                                                                                                                                             |

### Objecttype END Datamodel Objecttype

| **Naam**        | ENDDatamodelObjecttype                                                                                                                         |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Een objecttype afkomstig uit het datamodel van de Environmental Noise Directive.                                                               |
| **Toelichting** | In de specifieke relatie die hier zichtbaar is zou dit hier gaan om verschillende objecttypen uit het DF4_8 domeinmodel van het END Datamodel. |
| **Abstract**    | **Ja**. Dit betekent dat dit modelelement niet op zichzelf bestaat, maar dat het altijd een objecttype is afkomstig uit het END Datamodel.     |
| **Herkomst**    | END Datamodel                                                                                                                                  |

### Objecttype Geluidgevoellig Gebouw Objecttype

| **Naam**        | GeluidgevoelligGebouwObjecttype                                                                                                                                                                                                             |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Een objecttype dat een geluidgevoellig gebouw zoals bedoeld in artikel 3.20 van BKL representeert, inclusief alle in de regelgeving bepaalde eigenschappen.                                                                                 |
| **Toelichting** | Voor de geluidgevoelige gebouwen kan de BAG als uitgangspunt worden genomen. Echter kan niet alle informatie uit de BAG worden gehaald. Waar deze informatie wel vandaan kan worden gehaald staat nog [ter discussie](LINK NAAR DISCUSSIE). |
| **Abstract**    | **Nee**.                                                                                                                                                                                                                                    |
| **Herkomst**    | CIMGeluidbelasting                                                                                                                                                                                                                          |

### Objecttype Geluidbelastingkaart

| **Naam**        | Geluidbelastingkaart                                                                                                                                               |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Definitie**   | Een geluidbelastingkaart zoals bedoeld in de Environmental Noise Derective conform het END Datamodel.                                                              |
| **Toelichting** | De geluidbelastingkaart wordt berekend uit een GeluidmodelGeluidbelastingkaart in opdracht van bevoegd gezag. Een geluidbelastingkaart bevat de volgende gegevens: |
| **Abstract**    | **Nee**.                                                                                                                                                           |
| **Herkomst**    | CIMGeluidbelasting                                                                                                                                                 |

-   de geluidbelasting Lden en de geluidbelasting Lnight door de geluidbronnen
    in het kalen-derjaar voorafgaand aan dat van de vaststelling van een
    geluidbelastingkaart, weer te geven met 5 dB-contouren; en

-   het aantal geluidgevoelige gebouwen en bewoners van woningen dat aan bij
    ministeri-ele regeling vastgestelde waarden van de geluidbelasting Lden en
    de geluidbelasting Lnight wordt blootgesteld, weer te geven in tabellen met
    geluidbelastingklassen van tel-kens 5 dB.

Stellingen ten grondslag aan het CIMGeluidbelasting
---------------------------------------------------

Het CIMGeluidbelasting, geeft het toekomstbeeld weer op basis van de afwegingen
van Geonovum. Dit beeld zal tijdens de werkgroepen getoetst worden aan het
werkveld, waarna de begeleidingsgroep een beslissing zal maken. Het besluit van
de begeleidingsgroep zal ter zijne tijd aan deze paragraaf worden toegevoegd.
Geonovum heeft een aantal stellingen omschreven die aan de grondslag van dit
model liggen. Over deze stellingen is nog geen beslissing genomen door de
begeleidingsgroep.

Bij het maken van de stellingen, heeft Geonovum zijn de volgende uitgangspunten
gehanteerd:

1.  Het achterliggende doel van de uitbreiding van het IMGeluid, is om de
    uitwisseling van geluidgegevens m.b.t. het opstellen van
    geluidbelastingkaarten zo efficiënt mogelijk te maken.

2.  Om de uitwisseling zo efficiënt mogelijk te maken, moet de uitbreidingen van
    het IMGeluid en de CVGG zorgen voor zo min mogelijk extra complexiteit.
    [REFERENCE The IT Complexity Crisis: Danger and Opportunity door Roger
    Sessions. November 8, 2009.]

    -   Hierbij moet ook rekening worden gehouden met de Governance van het
        IMGeluid en de CVGG. Een complex beheerproces zorgt voor exponentieel
        meer kosten en meer kans op fouten.

In de rest van deze paragraaf zal aan deze uitgangspunten gerefereerd worden met
uitgangspunt [1] en uitgangspunt [2] respectievelijk.

### Geluidgeggevens voor agglomeratie gemeenten

Relevante geluidgegevens voor agglomeratie gemeenten m.b.t. hoofdwegen,
provinciale wegen, spoorwegen en luchthavens, kunnen uit de CVGG worden gehaald.
Vervolgens kunnen de gemeenten deze gebruiken importeren binnen hun
geluidberekening software. Deze zullen worden gecombineerd met lokale
geluidgegevens tot een model geschikt voor geluidsimulaties met CNOSSOS. Onder
lokale geluidgegevens verstaan we gegevens met betrekking op geluidbelastende
activiteiten en verzamelingen van activiteiten zoals:

-   Activiteiten op industrieterreinen met gpp’s waarvoor het geluid van dat
    industrieterrein meer is dan 55 dB Lden of 50 dB Lnight

-   Activiteiten in gebieden met een hogere waarde voor geluid, waarvoor de
    geluidbelasting door die activiteiten op omliggende geluidgevoelige gebouwen
    meer kan zijn dan 55 dB Lden of 50 dB Lnight;

-   Activiteiten buiten industrieterreinen met gpp’s met een ten hoogste
    toegelaten geluidbelasting door de activiteit meer is dan 55 dB Lden of 50
    dB Lnight

Deze afbakening van lokale geluidgegevens is breed. Uit de interviews is
gebleken dat lokale geluidgegevens zich lastig laten generaliseren. Het is sterk
afhankelijk van lokale experts om te bepalen welke activiteiten een hogere
geluidbelasting dan 55 dB Lden of 50 dB Lnight veroorzaken. Ook is gebleken dat
deze gegevens maar in enkele gevallen tussen agglomeratie-gemeenten wordt
uitgewisseld. In de gevallen dat dit wel het geval is, dan is er al een lokaal
systeem om deze gegevens uit te wisselen. Ook werd duidelijk dat samenwerking
voor geluidbelastingkaarten op agglomeratie niveau niet verplicht is. Als gevolg
hiervan kan het beleid op het gebied van geluidbelastingkaarten, per gemeente
binnen een agglomeratie afwijken .

Wanneer agglomeraties worden verplicht om deze lokale geluidgegevens m.b.t.
geluidbelasting aan te leveren aan de CVGG, dan zorgt dit voor extra
complexiteit. Geonovum schat op basis van de interviews in dat de toegevoegde
waarde van deze gegevens voor andere afnemers van de CVGG minimaal is. Geonovum
schat ook in dat het hier gaat om het grootste volume aan geluidgegevens, wat de
complexiteit alleen maar groter maakt.

Met de komst van het END datamodel zullen kaarten van agglomeraties makkelijker
te combineren worden. Dit datamodel hoeft niet voor extra complexiteit te
zorgen, wanneer de softwareleveranciers exporteren naar END formaat mogelijk
maken. De CVGG zou vervolgens de opdracht kunnen krijgen om aanleveren volgens
het END datamodel te ondersteunen als module binnen het uploadportaal.
Daarnaast, zullen waarschijnlijk nog aanvullende softwaremodules moeten worden
gemaakt, om bijvoorbeeld de kaarten van agglomeratie gemeente samen te voegen
tot 1 kaart. Wat de impact hiervan is op de Centrale Voorziening, moet nog
blijken uit de impact analyse van de CVGG. Op basis van uitgangspunten [1] en
[2] komt Geonovum tot de stelling:

> *Agglomeratie-gemeenten hoeven, in ieder geval initieel, geen geluidgegevens aan
> te leveren aan de CVGG t.b.v. geluidbelastingkaarten. (wel
> geluidbelastingkaarten & -tabellen)*

Bij deze stelling is Geonovum ervan uitgegaan dat het aanleveren van
geluidbelastingkaarten via de CVGG, niet leidt tot onacceptabel veel extra
complexiteit.

### Geluidgevoellige gebouwen

Met een koppeling tussen de contouren en de BAG kunnen de aantallen
geluidgevoelige gebouwen binnen de contouren worden bepaald. Hiervoor moet een
gegeven uit het BAG worden gebruikt dat niet geheel overeenkomt met de functies
die volgens artikel 3.20 Bkl geluidgevoelig zijn:

>   Artikel 3.20 Bkl (voorjaarsversie Aanvullingsbesluit geluid)
>
>   1. Een geluidgevoelig gebouw is een gebouw of een gedeelte van een gebouw met
>   een:
>
>   a. woonfunctie en nevengebruiksfuncties daarvan;
>
>   b. onderwijsfunctie en nevengebruiksfuncties daarvan;
>
>   c. gezondheidszorgfunctie met bedgebied en nevengebruiksfuncties daarvan; of
>
>   d. bijeenkomstfunctie voor kinderopvang met bedgebied en
>   nevengebruiksfuncties daarvan.
>   
>   2. Het eerste lid geldt niet voor een gedeelte van een gebouw als het
>   omgevingsplan in dat gedeelte van het gebouw geen geluidgevoelige ruimten
>   toelaat, tenzij het gebouw een woonschip of woonwagen is.
>   
>   3. Onder een geluidgevoelig gebouw wordt ook verstaan een geluidgevoelig gebouw
>   dat nog niet aanwezig is, maar op grond van het omgevingsplan of een
>   omgevingsvergunning voor een omgevingsplanactiviteit mag worden gebouwd.

In de BAG is het gegeven ‘Gebruiksdoel’ opgenomen. Voor de
gezondheidszorgfunctie wordt daarin echter niet opgenomen of die met of zonder
bedgebied is, en voor een bijeenkomst-functie wordt niet opgenomen of dit voor
kinderopvang met bedgebied is. Voor externe veiligheid bestaat er een bestand
waar dit type gebouwen wel wordt onderscheiden. RWS heeft daaruit een bestand
gemaakt met de geluidgevoelige gebouwen met gezondheidszorgfunctie en
bijeenkomstfunctie voor kinderopvang.

Het IMGeluid zou de plek kunnen zijn waar gegevens uit de BAG gecombineerd
worden met andere meer gedetailleerde gegevens over het Gebruiksdoel. Echter
wordt iets vergelijkbaars ook al bij het Register Externe Veiligheid gedaan. Met
de komst van de omgevingswet is het niet ondenkbaar dat er meer vergelijkbare
uitbreidingen op de BAG mogelijk zijn. Om al deze uitbreidingen dan decentraal
op te slaan binnen verschillende informatieproducten zou op termijn kunnen
leiden tot inefficiëntie. Er is bijvoorbeeld een situatie denkbaar waarbij een
bronhouder vergelijkbare gegevens over gebouwen moet aanleveren aan meerdere
“informatieproducten” binnen het Digitaal Stelsel Omgevingswet. Op basis van
uitgangspunten [1] en [2] komt Geonovum tot de stelling:

> *Stelling: Een uitbreiding op de BAG is de beste plek om gegevens over
> geluidgevoelige gebouwen aan het werkveld beschikbaar te stellen aan het
> werkveld*.

Deze stelling wil Geonovum graag verder onderzoeken door in gesprek te gaan met
het werkveld tijdens de eerste klankbordsessie en met Kadaster.
