Aanleiding
==========
Ter voorbereiding op een mogelijke uitbreiding van de Centrale Voorziening
Geluidgegevens (CVGG) is onderzocht hoe het informatie model Geluid (IMG)
aangepast/aangevuld moet worden om het proces rondom de geluidbelastingkaarten
te ondersteunen.

Geluidbelastingkaarten moeten elke vijf jaar worden opgesteld door het rijk,
provincies en een deel van de gemeenten. Dit vloeit voort uit de Europese
richtlijn omgevingslawaai. De volgende ronde vindt plaats in 2022, met
geluidgegevens over het kalenderjaar 2021.

De mogelijke uitbreiding van de CVGG is niet noodzakelijk voor het in werking
kunnen treden van de Omgevingswet, inclusief nieuwe geluidregels. De uitbreiding
kan wel de volgende ronde van geluidbelastingkaarten ondersteunen. In deze ronde
is het gebruik van een nieuw datamodel verplicht en gelden de eisen vanuit
Europese richtlijn INSPIRE.

Om de geluidbelastingkaarten te kunnen maken, worden er tussen verschillende
overheden geluidgegevens uitgewisseld en worden bewerkingen op de gegevens
uitgevoerd. Deze informatiestromen van geluidgegevens zijn in dit document
in kaart gebracht. Aanpassing van het model, door deze geluidgegevens aan
het model toe te voegen, kan aan de orde zijn, wanneer dit bijdraagt aan een
optimale gegevensuitwisseling.

Gedurende het project is gebleken dat het beter bij de behoefte van de
opdrachtgever past om een Conceptueel Informatiemodel op te stellen, dat kan
dienen als basis voor enerzijds het gebruik van het nieuwe END-datamodel door
betrokken partijen, en anderzijds eventuele uitbreidingen van het IMGeluid, die
naar verwachting beperkt of pas op een later tijdstip meer opportuun zijn om te
realiseren.

Scope
=====

**Doel van dit document:** *De samenhang tussen informatiestromen in relatie tot
het opstellen en rapporteren van geluidbelastingkaarten, in kaart brengen.*

In scope van dit document is:

-   Een analyse van informatiestromen tussen de verschillende overheden die een
    rol spelen bij de aanlevering van geluidbelastingkaarten op grond van de
    richtlijn omgevingslawaai;

-   Wanneer er in het algemeen over geluidbelastingkaarten wordt gesproken in
    dit document, wordt gedoeld op de geluidbelastingkaarten en – tabellen zoals
    bedoeld in de richtlijn omgevingslawaai;

-   Een analyse van de informatiestromen voor de bewerkingsstappen
    (berekeningen, samenvoegen) van de geluidbelastingkaarten;

-   Een samenvatting van het END Datamodel en de verschillen met de bestaande
    formats, waarbij ook de link wordt uitgelegd met INSPIRE;

-   Een omschrijving van de informatiestromen en werkprocessen in de huidige en
    toekomstige situatie;

-   Een omschrijving van een conceptueel model geluidbelastingkaarten dat
    inzicht geeft in informatiestromen en de rol en herkomst van geluidgegevens
    met betrekking op geluidbelastingkaarten;

-   In dit document is bovendien een verslag opgenomen, van de, gedurende het
    project opgehaalde informatie;

-   Actieplannen vallen buiten de scope.

## Leeswijzer
Dit document is gestructureerd in 6 hoofdstukken. 
- [Hoofdstuk 1](#inleiding) introduceert een aantal fundamentele concepten.
- [Hoofdstuk 2](#achtergrond_richtlijnen) beschrijft de relevante Europese richtlijnen. Dit hoofdstuk geeft een korte toelichting over de richtlijn omgevingslawaai, de
INSPIRE-richtlijn en geeft een overzicht van het nieuwe datamodel dat is
ontwikkeld voor de richtlijn omgevingslawaai om te voldoen aan de vereisten
volgens de INSPIRE-richtlijn en de daarbij behorende [INSPIRE
dataspecificaties](https://inspire.ec.europa.eu/data-specifications/2892). In [2.3](#richtlijn-omgevingslawaai) en [2.4](#richtlijn-inspire) worden
de richtlijn omgevingslawaai (END) en richtlijn INSPIRE toegelicht. In
- [Hoofdstuk 3](#end_datamodel) bevat een overzicht van het nieuwe END Datamodel. [hoofdstuk 3](#end_datamodel) staat het nieuwe datamodel dat voor de richtlijn
omgevingslawaai (END) ontwikkeld is beschreven. Paragraaf [3.3](#end-mapping-naar-inspire-thema-s)
bevat een mapping van ruimtelijke data uit het END Datamodel op INSPIRE
ruimtelijke thema's.
- [Hoofdstuk 4](#huidige_situatie) geeft een beschrijving van de huidige situatie rondom de rapportage van geluidbelastingkaarten. 
- [Hoofdstuk 5](#toekomstige_situatie) omschrijft de toekomstperspectief rondom de rapportage van geluidbelastingkaarten.
- [Hoofdstuk 6](#IMGeluidbelasting) bevat het Conceptueel Model Geluidbelastingkaarten.
- [Bijlage](#bijlage) bevat grote tabellen en links naar losse bestanden zoals het [interviewverslag](#bijlage-4-verslag-van-de-interviews-met-geluidexperts).

