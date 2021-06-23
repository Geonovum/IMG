END-Datamodel 
=======================

HET nieuwe END-Datamodel
----------------------------

Het END-Datamodel is ontwikkeld om te voldoen aan de rapportageverplichtingen
die in de END richtlijn zijn gespecificeerd. Het is ontwikkeld om de rapportage
door de lidstaten in een gemeenschappelijk formaat te vergemakkelijken.
Tegelijkertijd verwijzen verschillende INSPIRE-thema’s naar use-cases rondom
omgevingslawaai, waaronder de rapportage in kader van de END. Daarom zijn
verschillende overwegingen in acht genomen bij de ontwikkeling van het nieuwe
END-datamodel:

-   Om te zorgen voor overeenstemming met beide richtlijnen, betreffende de
    END-rapportagecycli en de volledige implementatie-routekaart van de
    INSPIRE-richtlijn,

-   Om een meervoudige verstrekking van ruimtelijke gegevens op grond van de
    END- en INSPIRE-richtlijn te voorkomen of op zijn minst te minimaliseren en
    zorgen voor een beter gebruik van nationale infrastructuur voor ruimtelijke
    informatie,

-   Om de harmonisatie en het hergebruik van gegevens te vergroten, fragmentatie
    van gegevensstromen te verminderen,

-   En om nieuwe functionaliteiten van het Reportnet 3.0-platform volledig te
    benutten, zoals een mogelijkheid voor rapportage op regionaal niveau of voor
    gegevensverzameling, bijvoorbeeld door gebruik te maken van
    INSPIRE-netwerkdiensten (nog in ontwikkeling).

De scope van het END-datamodel betreft een reeks gegevens die op grond van de
END aan de Europese Commissie moeten worden gerapporteerd. Tegelijkertijd omvat
het datamodelmodel ruimtelijke data die conceptueel overeenkomen met diverse
INSPIRE-thema’s.

Daarom is om te komen tot het nieuwe END-datamodel het eerdere END-datamodel en
rapportagemechanisme gebruikt als uitgangspunt voor de gegevensmodellering en
als bron van definities van de END-specifieke gegevensvereisten. De
INSPIRE-dataspecificaties zijn gebruikt als bron van een gemeenschappelijke
methodologie voor datamodellering en definities van INSPIRE-concepten.

<figure id="Figuur_1">
<img src="media/figuur1.png" alt="">
<figcaption>Proces van content matching tussen END en INSPIRE om END informatiemodel te ontwikkelen</figcaption>
</figure>

3.2 END datamodel rapportage overzicht
--------------------------------------

Het nieuwe END-informatiemodel omvat voor elke rapportageverplichting een apart
informatiemodel. De informatiemodellen, die ruimtelijke informatie bevatten,
zijn een combinatie van de INSPIRE-datamodellen en de specifieke END-vereisten.
Daarnaast zijn enkele andere modelconcepten, o.a. uit de
INSPIRE-dataspecificaties, gebruikt in verschillende informatiemodellen, zoals
bijvoorbeeld identificatoren, geharmoniseerde datatypen of voorgestelde
alternatieve vereenvoudigde gegevenstypen.

Een schematisch overzicht van het volledige END-datamodel (zie figuur 2) geeft
het gebruik en de combinatie van ruimtelijke data en de gestructureerde
tabelgegevens aan met basisrelaties tussen individuele datamodellen (en de
rapportage gegevensstromen).

<figure id="Figuur_2">
<img src="media/figuur2.png" alt="">
<figcaption>Combinatie van data flows in het END-informatiemodel [4]</figcaption>
</figure>

Het END-Datamodel omvat alle rapportageverplichtingen op grond van de END. In
het model zijn al deze verplichtingen aangemerkt als domeinen. Ieder domein
heeft een eigen UML-diagram (UML: Unified Modeling Language). Een UML-diagram
voor een specifiek domein noemen we een domeinmodel.

De volgende domeinenmodellen zijn gedefinieerd:

-   Geluidbronnen (DF1_5): hoofdwegen, grote spoorwegen, grote luchthavens en
    agglomeraties, zoals gedefinieerd in de END;

-   Bevoegde instantie (DF2): informatie over bevoegde autoriteiten, en/of
    andere instanties die verantwoordelijk zijn voor de uitvoering van de
    richtlijn omgevingslawaai;

-   Grenswaarden (DF3): bepaling van eventuele nationale of lokale grenswaarden
    voor geluid;

-   Strategische geluidbelastingkaart (DF4_8): met informatie over:

-   Gegevens over blootstelling aan lawaai: geschat aantal mensen dat in
    gebieden woont die de END-geluidrapportagedrempels overschrijden;

-   Geluidcontouren: geven de ruimtelijke omvang van de geluidniveaus weer voor
    verschillende geluidbelasting indicatoren;

-   Lawaaibeheersing programma’s (DF6_9): informatie over
    geluidbeheersingsprogramma's die in het verleden zijn uitgevoerd en
    getroffen geluidmaatregelen

-   Geluid actieplannen en Stille gebieden (DF7_10): informatie over

-   Actieplannen om geluidproblemen en de gevolgen daarvan te verminderen en te
    beheersen;

-   Bescherming en behoud van stille gebieden in agglomeraties of in open
    gebied.

De domeinmodellen zijn met elkaar verbonden en maken het mogelijk om de data uit
de verschillende rapportageverplichtingen te combineren.

Voor de *geluidbronnen* (DF1_5) moet de ligging van wegen, spoorwegen,
luchthavens en agglomeraties van elk land in geografisch formaat worden
gerapporteerd, inclusief een aantal akoestische eigenschappen die invloed hebben
op de totale geluidproductie. Van alle akoestische eigenschappen moet
uitsluitend de jaarlijkse verkeersstroom in DF1_5 worden gerapporteerd. Voor
wegverkeer behoren verkeerssamenstelling, snelheden en wegdeksoort daar niet toe
en voor spoorwegen en luchthavens geldt iets soortgelijks. Het verschil tussen
de geluidbronnen (DF1_5) en de geluidgegevens met betrekking tot monitoring in
IMGeluid is uitgelegd in [1.4](VERWIJZING).

Voor de rapportage van bevoegde instanties (DF_2) zijn geen ruimtelijke gegevens
nodig. De bevoegde instanties van wegen en spoorwegen, die verantwoordelijk zijn
voor de geluidbelastingkaarten en/of de actieplanning, kunnen worden
gerapporteerd op landniveau of op weg-/ spoorsegmentniveau[\^2VERWIJZING] (door
middel van identificatoren). Bevoegde instanties van grote luchthavens moeten
worden geïdentificeerd met behulp van ICAO-codes en bevoegde instantie van
agglomeraties met behulp van agglomeratie-identificatoren. Bevoegde instantie
die belast is met de bescherming van stille gebieden mag optioneel worden
aangeleverd, maar het wordt aanbevolen om dit te rapporteren door stilte
gebiedsidentificaties te gebruiken.

[\^2VERWIJZING]: De segmenten van hoofdwegen en spoorwegen zijn ontworpen om te
voldoen aan de END-criteria van de jaarlijkse verkeersstroom.

De grenswaarden van een land of een gedefinieerde rapporteringsregio (DF3)
vereisen geen ruimtelijke informatie. De grenswaarden kunnen op landenniveau
gerapporteerd worden en het is mogelijk om deze grenswaarden apart voor elke
geluidbron of gezamenlijk voor alle bronnen te rapporteren.

De strategische geluidbelastingkaarten (DF4_8) bestaan uit twee soorten
gegevens. De geluidcontouren worden aangeleverd als ruimtelijke data en dienen
aangeleverd te worden met een gesloten lijngeometrie of een polygoon. De
gegevens over de blootstelling van de bevolking aan een verhoogd geluidniveau,
zijn gekoppeld aan ruimtelijke eenheden en kunnen op verschillende
rapportageniveaus worden verstrekt: voor hoofdwegen en spoorwegen kan worden
gerapporteerd op landniveau of met behulp van kleinere territoriale eenheden.
Voor grote luchthavens moeten de gegevens worden gerapporteerd door middel van
de ICAO-code met de mogelijkheid om de blootstelling van de bevolking op lokale
administratieve eenheden (LAU)-niveau weer te geven. De informatie over de
blootstelling van de bevolking binnen agglomeraties voor wegen, spoorwegen,
industrie, hoofdwegen binnen een agglomeratie of grote spoorwegen binnen een
agglomeratie, kan worden gerapporteerd op agglomeratieniveau of door middel van
gebruikmaking van LAU-eenheden. De blootstelling van de bevolking voor
luchthavens of grote luchthavens binnen agglomeraties, kan op agglomeratieniveau
of op LBE-niveau worden gerapporteerd, samen met de respectieve ICAO-code
wanneer informatie over grote luchthavens wordt gerapporteerd.

Lawaaibeheersing programma’s (DF6_9) vereisen geen ruimtelijke gegevens en
kunnen via verschillende rapportageniveaus worden ingediend.

De geluid actieplannen (DF7_10) vereisen de rapportage van ruimtelijke
informatie in de vorm van een polygoon. De informatie van het actieplan moet
worden ingevuld voor elke polygoon of multipolygoon waarvoor het actieplan wordt
opgesteld. Voor grote luchthavens is de ICAO-code ook vereist. Voor belangrijke
wegen en belangrijke spoorwegen is dit een polygoon van Nederland. Voor Schiphol
zou dat misschien ook de meest logische keuze zijn als de koppeling met de
ICAO-code dan kan worden gemaakt.

Stille gebieden zijn opgenomen in de gegevensrapportage DF7_10 en vereisen
rapportage van een polygoon van het gebied dat wordt beschermd tegen
omgevingslawaai. Op nationaal niveau bestaan er twee verschillende stille
gebieden. Dit zijn stille gebieden binnen agglomeraties en stille gebieden in
open gebied. Voor stille gebieden binnen agglomeraties is het vereist om de
agglomeratie-identificatiecode te specificeren. In de praktijk hebben de
agglomeraties tot nu toe nog geen stille gebieden aangewezen. De stille gebieden
in open gebied, ook wel stiltegebieden genoemd, worden door provincies
aangewezen.

3.3 END mapping naar INSPIRE thema's
------------------------------------

De INSPIRE-thema’s en bijbehorende dataspecificaties richten zich op de algemene
kenmerken van ruimtelijke data, die toepasbaar kunnen zijn voor verschillende
use cases. Rapportageverplichtingen zijn daar slechts een voorbeeld van. Daarin
bevatten de INSPIRE-informatiemodellen, gespecifieerd in de dataspecificaties,
meestal algemene informatie, zoals unieke identificatoren en de geometrie van
ruimtelijke objecten, informatie over de levenscyclus van ruimtelijke objecten
met betrekking tot datamanagementprincipes en een reeks andere basiskenmerken
die ruimtelijke objecten beschrijven, zoals naam of specifieke categorie.

Aan de andere kant zijn de gerapporteerde gegevens onder de END-richtlijn
specifiek ontworpen om te voldoen aan de rapportageverplichtingen en -criteria
die door de END zijn gedefinieerd. Deze eisen dienen goed te worden gecombineerd
met de basis INSPIRE-informatiemodellen voor ruimtelijke data.

De lijst met geïdentificeerde ruimtelijke data in het toepassingsgebied van de
END-richtlijn heeft betrekking op de volgende INSPIRE-thema’s, zie onderstaande
tabel. Deze ruimtelijke data dienen ook volgens INSPIRE-vereisten (zie 2.4)
ontsloten te worden.


**Tabel 1. Overzicht van het mapping van ruimtelijke data van END naar de
INSPIRE-thema’s**
| Basis for END spatial data                                   | INSPIRE spatial data thema                                                      | INSPIRE spatial object type            |
|--------------------------------------------------------------|---------------------------------------------------------------------------------|----------------------------------------|
| Belangrijke wegen (DF1_5)                                    | INSPIRE Transport networks (TN) and specific Road Transport Network             | RoadLink                               |
| Belangrijke spoorwegen (DF1_5)                               | INSPIRE Transport networks (TN) and specific Railway Transport Network          | RailwayLink                            |
| Belangrijke luchthavens (DF1_5)                              | INSPIRE Transport networks (TN) and specific Air Transport Network              | AerodromeNode                          |
| Agglomeraties (DF1_5)                                        | INSPIRE Area management / restriction / regulation zones & reporting units (AM) | ManagementRestrictionOrRegu lationZone |
| Geluid contourkaart (DF4_8)                                  | INSPIRE Human health and safety (HH)                                            | EnvHealthDeterminantMeasure (\*)       |
| Stille gebieden in agglomeraties of in buitengebied (DF7_10) | INSPIRE Area management / restriction / regulation zones & reporting units (AM) | ManagementRestrictionOrRegu lationZone |
| Geluid actieplannen (DF7_10)                                 | INSPIRE Area management / restriction / regulation zones & reporting units (AM) | ManagementRestrictionOrRegu lationZone |

\* Het INSPIRE-Datamodel is opgenomen in de herziening van de uitvoeringsregels
inzake interoperabiliteit.

