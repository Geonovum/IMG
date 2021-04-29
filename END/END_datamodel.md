# Overzicht van het END datamodel

## Inleiding END Datamodel

De richtlijn omgevingslawaai 2002/49/ EG (END) [1] definieert
rapportageverplichtingen voor de beoordeling en beheersing van omgevingslawaai.
Met de introductie van de ‘INSPIRE-richtlijn’ [2] en de nieuwe ‘Verordening
2019/1010 van de Europese Unie (EU) [3], zullen de lidstaten gegevens zoals
vereist op grond van de END ter beschikking moeten stellen, conform de INSPIRE
uitvoeringsbepalingen. Het huidige rapportagemechanisme waarin de lidstaten
gegevens aanleveren, is niet in overeenstemming met de INSPIRE-richtlijn. Daarom
wordt door het Europees Milieuagentschap een nieuw informatiemodel ontwikkeld
dat voldoet aan zowel de END- als de INSPIRE-vereisten.

Dit hoofdstuk geeft een overzicht van het nieuwe informatiemodel dat is
ontwikkeld voor de richtlijn omgevingslawaai om te voldoen aan de vereisten
ingevolge de INSPIRE richtlijn en de daarbij behorende dataspecificaties [4].

 Naam en Acroniemen
===================

>   END-Environmental Noise Directive

 Doel en Definitie
==================

Het belangrijkste doel van de richtlijn omgevingslawaai is het niveau van
geluidshinder vast te stellen en de nodige maatregelen te treffen, zowel op
lidstaat- als EU-niveau.

Het END-informatiemodel, voorgesteld in het END-document, is ontwikkeld om de
rapportage door de lidstaten in een gemeenschappelijk formaat te
vergemakkelijken en ervoor te zorgen dat zowel aan de rapportagevereisten van
het END als aan INSPIRE wordt voldaan.

Environmental Noise Directive (END)
-----------------------------------

Deze richtlijn Omgevingslawaai is van toepassing op geluid waaraan mensen worden
blootgesteld, met name in de bebouwde kom, in openbare parken of andere stille
gebieden in een agglomeratie, in stille gebieden in het open landschap, in de
buurt van scholen, ziekenhuizen en andere geluidsgevoelige gebouwen en gebieden.
Het is niet van toepassing op geluid dat wordt veroorzaakt door de blootgestelde
persoon zelf, geluid van huishoudelijke activiteiten, geluid van buren, geluid
op werkplekken, of geluid binnen vervoermiddelen of door militaire activiteiten
in militaire gebieden.

De Richtlijn omgevingslawaai (END) - Richtlijn 2002/49/ EG [1], bevat
verschillende bepalingen die de lidstaten verplichten om informatie aan de
Europese Commissie (EC) te verstrekken over o.a. de voorbereiding en publicatie
van strategische geluidsbelastingkaarten en actieplannen voor geluidsbeheer
voor:

-   Alle wegen, spoorwegen, luchthavens en industrieterreinen binnen
    agglomeraties met meer dan 100.000 inwoners

-   Hoofdwegen (meer dan 3 miljoen voertuigen per jaar)

-   Grote spoorwegen (meer dan 30.000 treinen per jaar)

-   Grote luchthavens (meer dan 50.000 bewegingen per jaar) jaar, inclusief
    kleine vliegtuigen en helikopters).

Om de gestelde doelen uit de END richtlijn na te streven, richt de END zich in
het bijzonder op het bepalen van de blootstelling aan omgevingslawaai, het
waarborgen van informatie over omgevingslawaai en de effecten ervan voor het
publiek, het voorkomen en verminderen van omgevingslawaai waar nodig, en het
behouden van de kwaliteit van het omgevingslawaai waar het goed is.

END informatiemodelleringsproces
--------------------------------

Het END-informatiemodel is ontwikkeld om te voldoen aan de
rapportageverplichtingen die in de END richtlijn zijn gespecificeerd. In dit
hoofdstuk wordt het nieuwe informatiemodel beschreven dat is ontwikkeld voor de
richtlijn omgevingslawaai om te voldoen aan de vereisten die lidstaten van de
Europese Unie (MS) en andere rapporterende landen moeten rapporteren volgens de
INSPIRE-dataspecificaties.

Het nieuwe END-informatiemodel bevat ruimtelijke data die conceptueel
overeenkomen met diverse INSPIRE ruimtelijke datathema's. De
INSPIRE-dataspecificaties zijn gebruikt als bron van een gemeenschappelijke
methodologie voor informatiemodellering en definities van INSPIRE-concepten.

Verschillende INSPIRE-ruimtelijke gegevensthema's verwijzen naar use cases voor
omgevingslawaai, inclusief de rapportage in het kader van END. Daarom zijn
verschillende overwegingen in acht genomen bij de ontwikkeling van het nieuwe
END-informatiemodel:

-   Om te zorgen voor overeenstemming met beide richtlijnen, betreffende de
    END-rapportagecycli en de volledige
    implementatie-routekaart van de INSPIRE-richtlijn,

-   Om een meervoudige verstrekking van ruimtelijke gegevens op grond van de END- en INSPIRE-richtlijn te voorkomen of op zijn
    minst te minimaliseren en zorgen
    voor een beter gebruik van nationale infrastructuur voor ruimtelijke
    informatie,

-   Om de harmonisatie en het hergebruik van gegevens te vergroten, fragmentatie
    van gegevensstromen te verminderen,

-   En om nieuwe functionaliteiten van het Reportnet 3.0-platform volledig te
    benutten, zoals een mogelijkheid voor rapportage op regionaal niveau of voor
    gegevensverzameling, bijvoorbeeld door gebruik te maken van
    INSPIRE-netwerkdiensten (nog in ontwikkeling).

De scope van het END informatiemodel betreft een ​​reeks gegevens die op grond van
de END aan de Europese Commissie moeten worden gerapporteerd.

<figure id="Figuur_1">
<img src="media/figuur1.png" alt="">
<figcaption>Proces van content matching tussen END en INSPIRE om END informatiemodel te ontwikkelen [4]</figcaption>
</figure>



END rapportage informatiemodel overzicht
----------------------------------------

Het nieuwe END-informatiemodel omvat voor elke rapportageverplichting een apart
informatiemodel data flow[^2]. Een schematisch overzicht van het volledige
END-informatiemodel geeft het gebruik van ruimtelijke data en gestructureerde
tabelgegevens aan met relaties tussen individuele informatiemodellen (en
rapportage data flows): zie [Figuur 2](#Figuur_2).

[^2]: De informatiemodellen, die ruimtelijke informatie bevatten, zijn ontworpen
de INSPIRE-informatiemodellen en specifieke END-vereisten te combineren. Andere
modelelementen zijn direct overgenomen uit de INSPIRE-dataspecificaties of zijn
ontwikkeld via het INSPIRE *Maintenance and Implementation* (MIG)
-werkprogramma, bijvoorbeeld identificatoren, geharmoniseerde datatypen of
voorgestelde alternatieve vereenvoudigde gegevenstypen.

<figure id="Figuur_2">
<img src="media/figuur2.png" alt="">
<figcaption>Combinatie van data flows in het END-informatiemodel [4]</figcaption>
</figure>

Het END-informatiemodel omvat alle rapportageverplichtingen op grond van de END.
In het model zijn al deze verplichtingen aangemerkt als domeinen. Ieder domein
heeft een eigen UML[^1] diagram. Een UML diagram voor een specifiek domein
noemen we een domeinmodel. De volgende domeinenmodellen zijn gedefinieerd:

[^1]: Unified Modeling Language

-   Noise Sources (DF1_5): hoofdwegen, grote spoorwegen, grote luchthavens en
    agglomeraties, zoals gedefinieerd in de END;

-   Competent Authority (DF2): informatie over bevoegde autoriteiten, en/of andere
    instanties die verantwoordelijk zijn voor de uitvoering van de richtlijn
    omgevingslawaai;

-   Limit Values (DF3): bepaling van eventuele nationale of lokale grenswaarden
    voor geluid;

-   Strategic Noise Maps (DF4_8): met informatie over:

-   Exposure data: geschat aantal mensen dat in gebieden woont die de
    END-geluidrapportagedrempels overschrijden;

-   Noise contours: geluidcontouren geven de ruimtelijke omvang van de
    geluidniveaus weer voor verschillende geluidbelasting indicatoren;

-   Noise Control Programmes (DF6_9): informatie over
    geluidsbeheersingsprogramma's die in het verleden zijn uitgevoerd en
    getroffen geluidsmaatregelen

-   Noise Action Plans and Quiet Areas (DF7_10): informatie over

-   actieplannen om geluidsproblemen en de gevolgen daarvan te verminderen en te
    beheersen;

-   Bescherming en behoud van stille gebieden in agglomeraties of in open land.

De domeinmodellen zijn met elkaar verbonden en maken het mogelijk om de data uit
verschillende datastromen te combineren.

Voor de *noise sources data flow* (DF1_5) moeten de ligging van wegen,
spoorwegen, luchthavens en agglomeraties van elk land in geografisch formaat
worden aangeleverd, inclusief akoestische eigenschappen die invloed hebben op de
totale geluidproductie, zoals bijvoorbeeld de jaarlijkse verkeersstroom op een
weg.

Voor de rapportage van *competent authorities* (DF_2) zijn geen ruimtelijke
gegevens nodig. De bevoegde autoriteiten van wegen en spoorwegen, die
verantwoordelijk zijn voor de geluidsbelastingkaarten en/of de actieplanning,
kunnen worden gerapporteerd op landniveau of op weg- / spoorsegmentniveau[^2]
(door middel van identificatoren). Bevoegde autoriteiten van grote luchthavens moeten
worden geïdentificeerd met behulp van ICAO-codes en bevoegde autoriteit van
agglomeraties met behulp van agglomeratie-identificatoren. Bevoegde autoriteit dat
belast is met de bescherming van stille gebieden mag optioneel worden
aangeleverd, maar het wordt aanbevolen om dit te rapporteren door stilte
gebiedsidentificaties te gebruiken.

[^2]: De segmenten van hoofdwegen en spoorwegen zijn ontworpen om te voldoen aan
de END-criteria van de jaarlijkse verkeersstroom.

De *limit values* van een land of een gedefinieerde rapporteringsregio (DF3)
vereisen geen ruimtelijke informatie. De grenswaarden kunnen op landenniveau
gerapporteerd worden en het is mogelijk om deze grenswaarden apart voor elke
geluidbron of gezamenlijk voor alle bronnen te rapporteren.

De *strategic noise maps* (DF4_8) bestaan ​​uit twee soorten gegevens. De
geluidscontouren worden aangeleverd als ruimtelijke data en dienen aangeleverd
te worden met een gesloten lijngeometrie of een polygoon. De gegevens over de
blootstelling van de bevolking aan een verhoogd geluidsniveau, zijn gekoppeld
aan ruimtelijke eenheden en kunnen op verschillende rapportageniveaus worden
verstrekt: voor hoofdwegen en spoorwegen kunnen worden gerapporteerd op
landniveau of met behulp van kleinere territoriale eenheden. Voor grote
luchthavens moeten de gegevens worden gerapporteerd door middel van de ICAO-code
met de mogelijkheid om de blootstelling van de bevolking op lokale
administratieve eenheden (LAU)-niveau weer te geven. De informatie over de
blootstelling van de bevolking binnen agglomeraties voor wegen, spoorwegen,
industrie, hoofdwegen binnen een agglomeratie of grote spoorwegen binnen een
agglomeratie, kan worden gerapporteerd op agglomeratieniveau of door middel van
gebruikmaking van LAU-eenheden. De blootstelling van de bevolking voor
luchthavens of grote luchthavens binnen agglomeraties, kan op agglomeratieniveau
of op LBE-niveau worden gerapporteerd, samen met de respectieve ICAO-code
wanneer informatie over grote luchthavens wordt gerapporteerd.

De *noise action plans* vereisen de rapportage van ruimtelijke informatie in de
vorm van een veelhoek. De informatie van het actieplan moet worden ingevuld voor
elke polygoon of multipolygoon waarvoor het actieplan wordt opgesteld. Voor
grote luchthavens is de ICAO-code ook vereist.

*Quiet Areas* zijn opgenomen in de data flow DF7_10 en vereisen rapportage van
een veelhoek van de stille ruimte die wordt beschermd tegen omgevingslawaai.
Voor stille gebieden binnen agglomeraties is het vereist om de
agglomeratie-identificatiecode te specificeren.

 END mapping naar INSPIRE ruimtelijke gegevensthema's
=====================================================

INSPIRE ruimtelijke datathema's en bijbehorende dataspecificaties richten zich
op de algemene kenmerken van ruimtelijke data, die toepasbaar kunnen zijn op
verschillende use cases. Rapportageverplichtingen zijn daar slechts een
voorbeeld van, daarom bevatten de INSPIRE-informatiemodellen meestal algemene
informatie, zoals unieke identificatoren. Geometrie van ruimtelijke objecten,
informatie over de levenscyclus van objecten met betrekking tot
datamanagementprincipes en een reeks andere basiskenmerken die die ruimtelijke
objecten beschrijven, bijvoorbeeld een naam of specifieke categorie.

Aan de andere kant zijn de gerapporteerde gegevens onder de END-richtlijn
specifiek ontworpen om te voldoen aan de rapportageverplichtingen en -criteria
die door de END zijn gedefinieerd. Deze eisen dienen goed te worden gecombineerd
met de basis INSPIRE-informatiemodellen voor ruimtelijke data.

De lijst met geïdentificeerde ruimtelijke gegevens in het toepassingsgebied van
de END-richtlijn heeft betrekking op de volgende
INSPIRE-ruimtelijke-gegevensthema's, gepresenteerd in Tabel 1.

Table 1. Overzicht van het mapping van ruimtelijke data van END naar INSPIRE
ruimtelijke data thema's

| Basis for END spatial data                                | INSPIRE spatial data theme                                                      | INSPIRE spatial object type            |
|-----------------------------------------------------------|---------------------------------------------------------------------------------|----------------------------------------|
| Major roads (DF1_5)                                       | INSPIRE Transport networks (TN) and specific Road Transport Network             | RoadLink                               |
| Major Railways (DF1_5)                                    | INSPIRE Transport networks (TN) and specific Railway Transport Network          | RailwayLink                            |
| Major Airports (DF1_5)                                    | INSPIRE Transport networks (TN) and specific Air Transport Network              | AerodromeNode                          |
| Agglomerations (DF1_5)                                    | INSPIRE Area management / restriction / regulation zones & reporting units (AM) | ManagementRestrictionOrRegu lationZone |
| Noise contour maps (DF4_8)                                | INSPIRE Human health and safety (HH)                                            | EnvHealthDeterminantMeasure            |
| Quiet areas in agglomerations or in open country (DF7_10) | INSPIRE Area management / restriction / regulation zones & reporting units (AM) | ManagementRestrictionOrRegu lationZone |
| Noise Action plans (DF7_10)                               | INSPIRE Area management / restriction / regulation zones & reporting units (AM) | ManagementRestrictionOrRegu lationZone |

 Normatieve referenties
=======================

De volgende documenten zijn gehanteerd bij de totstandkoming van dit document:

[1] Directive 2002/49/EC of the European Parliament and of the Council of 25
June 2002 relating to the assessment and management of environmental noise -
Declaration by the Commission in the Conciliation Committee on the Directive
relating to the assessment and management of environmental noise

[2] Directive 2007/2/EC of the European Parliament and of the Council of 14
March 2007 establishing an Infrastructure for Spatial Information in the
European Community (INSPIRE)

[3] Regulation (EU) 2019/1010 of the European Parliament and of the Council of 5
June 2019 on the alignment of reporting obligations in the field of legislation
related to the environment, and amending Regulations (EC) No 166/2006 and (EU)
No 995/2010 of the European Parliament and of the Council, Directives
2002/49/EC, 2004/35/EC, 2007/2/EC, 2009/147/EC and 2010/63/EU of the European
Parliament and of the Council, Council Regulations (EC) No 338/97 and (EC) No
2173/2005, and Council Directive 86/278/EEC (Text with EEA relevance)

 Algemene Termen en definities
------------------------------

Lijst van termen en definities die in deze beschrijving worden gehanteerd,
gesorteerd op alfabetische volgorde.

| **Term**                                                        | **Definitie**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Agglomeratie (Agglomeration)**                                | Deel van een grondgebied, afgebakend door de lidstaat, met een bevolking van meer dan 100.000 personen en een bevolkingsdichtheid zodanig dat de lidstaat het als een verstedelijkt gebied beschouwt [END]. De Nederlandse Agglomeraties zijn in de Omgevingsregeling aangewezen.                                                                                                                                                                                                                                                                         |
| **Omgevingslawaai (Environmental noise)**                       | Ongewenst of schadelijk buitengeluid veroorzaakt door menselijke activiteiten, met inbegrip van geluid afkomstig van transportmiddelen, wegverkeer, treinverkeer, luchtverkeer en van locaties van industriële activiteit zoals gedefinieerd in bijlage I bij Richtlijn 96/61/ EG van de Raad van 24 September 1996 betreffende geïntegreerde preventie en bestrijding van verontreiniging [END].                                                                                                                                                         |
| **Data flows**                                                  | Datastromen gerapporteerd door EEA-lidstaten en samenwerkende landen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Eurostat**                                                    | Het statistiekbureau van de Europese Unie. https://ec.europa.eu/eurostat                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Belangrijke luchthavens (Major airport)**                     | Een door de lidstaat aangewezen burgerluchthaven met meer dan 50.000 bewegingen per jaar (een beweging zijnde een start of een landing), exclusief die voor trainingsdoeleinden op lichte vliegtuigen [END].                                                                                                                                                                                                                                                                                                                                              |
| **Belangrijke spoorwegen (Major railway)**                      | Een spoorweg, aangewezen door de lidstaat, die meer dan 30.000 treinpassages per jaar heeft [END].                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Belangrijke wegen (Major road)**                              | Een door de lidstaat aangewezen regionale, nationale of internationale weg waarop jaarlijks meer dan drie miljoen voertuigen passeren [END].                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Geluidactieplan (Noise action plan**                          | Een plan om geluidsproblemen en -effecten te beheersen, inclusief geluidsreductie indien nodig [END]. In de END-scope kunnen geluidsactieplannen verwijzen naar geïdentificeerde grote geluidsbronnen, agglomeraties, stille gebieden of andere specifieke geluidssituaties. De verwijzing wordt geleverd door object-ID's of rechtstreeks als ruimtelijke gegevens.                                                                                                                                                                                      |
| **Geluid contourkaart (Noise contour map)**                     | Presenteert de gegevens over een bestaande of voorspelde geluidssituatie in termen van een geluidsbelasting indicator, met vermelding van overschrijding van een relevante geldende grenswaarde, het aantal getroffen mensen in een bepaald gebied of het aantal woningen dat wordt blootgesteld aan bepaalde waarden van een geluidsbelasting indicator in een bepaald gebied. Geluidscontouren maken deel uit van de strategische geluidsbelastingkaarten. In de END-scope kunnen geluidscontourkaarten worden gepresenteerd als gebieden of isolijnen. |
| **Stil gebied in agglomeratie(Quiet area in an agglomeration)** | Een gebied, afgebakend door de bevoegde autoriteit, bijvoorbeeld dat niet wordt blootgesteld aan een waarde van Lden of van een andere geschikte geluidsbelasting indicator die hoger is dan een bepaalde waarde die door de lidstaat is vastgesteld, afkomstig van enige geluidsbron [END].                                                                                                                                                                                                                                                              |
| **Stil gebied in buitengebied (Quiet area in open country)**    | Een door het bevoegde autoriteit afgebakend gebied dat niet wordt gestoord door verkeerslawaai, industrie of recreatie [END].                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Strategische geluidskaart (Strategic noise map)**             | Een kaart die is ontworpen voor de algemene beoordeling van de blootstelling aan lawaai in een bepaald gebied als gevolg van verschillende geluidsbronnen of voor algemene voorspellingen voor een dergelijk gebied [END].                                                                                                                                                                                                                                                                                                                                |
| **Bevoegde autoriteit (Competent authority)**                         | Organisatie (s) verantwoordelijk voor het beheren, beperken of reguleren van maatregelen of activiteiten met betrekking tot omgevingslawaai binnen aangewezen agglomeraties, volgens de definitie in de INSPIRE ' Implementing Rules on Interoperability' [END].                                                                                                                                                                                                                                                                                          |
| **Voidable**                                                    | Voor een attribuut- of associatierol kan de waarde ‘void’ ingevuld worden als er geen overeenkomstige waarde is opgenomen in de dataset die door de lidstaten worden bijgehouden of als er geen overeenkomstige waarde kan worden afgeleid uit bestaande waarden tegen redelijke kosten. Als een attribuut- of associatierol niet voidable is, wordt de tabelcel die de voidability specificeert leeg gelaten [INSPIRE].                                                                                                                                  |

 Algemene Symbolen en afkortingen
---------------------------------

| **Afkortingen**  | **Betekenissen**                                 |
|------------------|--------------------------------------------------|
| **AM**           | Area Management                                  |
| **DF**           | Data flow                                        |
| **EEA**          | European Environment Agency                      |
| **END**          | Environmental Noise Directive                    |
| **HH**           | Human Health                                     |
| **IATA**         | International Air Transport Association          |
| **ICAO**         | The International Civil Aviation Organization    |
| **MS**           | Member State                                     |
| **NAP**          | Noise Action Plan                                |
| **NUTS**         | Nomenclature of Territorial Units for Statistics |


