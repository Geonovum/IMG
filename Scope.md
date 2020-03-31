Scope 
========

(OPMERKING: dit kan weg
Dit document omschrijft de dataspecificatie, IMGeluid, voor de Centrale
Voorziening Geluidgegevens (CVGG). Een dataspecificatie bevat [volgens NEN3610](https://geonovum.github.io/bmgi/docs/#dataproductspecificatie-nl), de inhoud van een
dataproduct plus additionele informatie die nodig is voor inwinning transport en
gebruik. 
Het IMGeluid is in dit geval het dataproduct.)

Het toepassingsdomein is beheersing van het geluid van wegen, spoorwegen, en industrieterreinen; en gegevensuitwisseling ten behoeve van akoestisch onderzoek. Dit wordt geoperationaliseerd in de CVGG. IMGeluid geeft de gedetailleerde beschrijving van structuur, inhoud en
datakwaliteit van de CVGG en dient als basis voor de realisatie en ontsluiting
van CVGG services.


Achtergrond:
De gebruikstoepassing waar de semantiek van IMGeluid door wordt bepaald komt
voort uit verschillende wet- en regelgevingen. Deze zijn:

-   **Omgevingswet:** Met de Omgevingswet wil de overheid de regels voor de
    bescherming en het gebruik van de fysieke leefomgeving vereenvoudigen en
    samenvoegen. Zodat het straks bijvoorbeeld makkelijker is om bouwprojecten
    te starten. De hoger liggende doelen zijn (a) het bereiken en in stand
    houden van een veilige en gezonde fysieke leefomgeving en een goede
    omgevingskwaliteit en (b) het doelmatig beheren, gebruiken en ontwikkelen
    van de fysieke leefomgeving ter vervulling van maatschappelijke behoeften.
    De Omgevingswet bundelt en moderniseert in één wet alle wetten voor de
    leefomgeving. Vanaf 2021 treedt de wet in werking.

-   **Aanvullingsspoor geluid:** Het aanvullingsspoor geluid bestaat uit de
    Aanvullingswet Geluid onder de Omgevingswet, het Aanvullingsbesluit Geluid
    onder de Omgevingswet, en de Aanvullingsregeling Geluid onder de
    Omgevingswet. Het Aanvullingsbesluit Geluid onder de Omgevingswet bevat
    regels over de geluidbelasting afkomstig van infrastructuur (wegen en
    spoorwegen) en industrieterreinen. Regels voor deze geluidbronnen zijn tot
    dusver gesteld in en op grond van hoofdstuk 11 van de Wet milieubeheer voor
    rijksinfrastructuur en de Wet geluidhinder voor decentrale infrastructuur en
    industrieterreinen en voor geluidgevoelige objecten. De regels worden in
    overeenstemming gebracht met de opbouw en de doelen van de Omgevingswet en
    daarin geïntegreerd. Tegelijkertijd wordt de regelgeving voor het decentraal
    niveau ingrijpend herzien. Doel daarvan is om ook voor decentrale wegen,
    lokaal spoor en industrieterreinen te komen tot een effectiever en
    transparanter systeem voor de beheersing van de geluidbelasting. Voor de
    rijksinfrastructuur gelden al sinds 2012 geluidproductieplafonds. Deze
    systematiek was onderdeel van het beleidsvernieuwingstraject “Swung-1”
    (Samen Werken aan de Uitvoering van Nieuw Geluidbeleid). Met het
    aanvullingsspoor geluid en de daarop te baseren uitvoeringsregelgeving wordt
    het tweede en laatste deel van dit traject voltooid. Deze vernieuwing van de
    geluidsystematiek is samen met IPO, UvW, VNG en VNO-NCW ontwikkeld onder de
    noemer “Swung-2”.

-   **AREG:** Het Reken- en meetvoorschrift geluid 2012 zal vervangen worden via
    de Aanvullingsregeling geluid (AREG) door aangepaste rekenregels in de
    Omgevingsregeling.

-   **INSPIRE:** De gegevens in het kader van de EU-richtlijn komen onder
    INSPIRE te vallen. INSPIRE is Europese regelgeving die de uitwisseling van
    gegevens over de leefomgeving binnen Europa vereenvoudigt. De Europese
    richtlijn is in 2009 verankerd in de Nederlandse wet en regelgeving. INSPIRE
    stelt eisen aan de inhoud, serviceniveaus en uitwisselstandaarden die worden
    gebruikt. Voor het standaardiseren van de inhoud zijn dataspecificaties
    ontwikkeld. Deze standaardiseren de structuur en de betekenis van de uit te
    wisselen gegevens. Zolang de centrale voorziening de EU-richtlijn niet
    ondersteund is INSPIRE niet relevant. Vooralsnog lijken de gegevens die de
    centrale voorziening bevat niet onder INSPIRE te vallen omdat zij specifiek
    zijn voor de Nederlandse situatie.
