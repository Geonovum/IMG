Overzicht
============

3.1 Naam en Acroniemen. 
------------------------

IMGeluid – Dataspecificatie voor Centrale Voorziening Geluidgegevens (CVGG).

3.2 Informele beschrijving.
---------------------------

3.2.1 Definitie. 
-----------------

RIVM ontwikkelt in opdracht van het ministerie van Infrastructuur en Waterstaat
de Centrale Voorziening Geluidgegevens om de nieuwe geluidregelgeving onder de
Omgevingswet te ondersteunen. Het geeft invulling aan wat in het
Aanvullingsbesluit Geluid onder de Omgevingswet het “geluidregister” wordt
genoemd. De voorziening is een voortzetting van en uitbreiding op de
geluidregisters die al bestaan voor rijkswegen en hoofdspoor. In de voorziening
moeten gegevens worden vastgelegd over de geluidproductieplafonds, de
basisgeluidemissies, de geluidbrongegevens op basis waarvan deze zijn berekend,
geluidaandachtsgebieden en de monitoringswaarden. Hierdoor zijn geluidgegevens
voor iedereen op één plaats, uniform en laagdrempelig beschikbaar. Dat zorgt
enerzijds voor transparantie over hoe waarden tot stand zijn gekomen. Daarnaast
moeten de geluidbrongegevens bij een geluidproductieplafond ook verplicht
gebruikt worden bij het berekenen van geluidbelasting. Deze gegevens kunnen dan
ook laagdrempelig worden verkregen uit de centrale voorziening.

3.2.2 Beschrijving. 
--------------------

### Centrale Voorziening Geluidgegevens

RIVM ontwikkelt in opdracht van het ministerie van Infrastructuur en Waterstaat
de Centrale Voorziening Geluidgegevens om de nieuwe geluidregelgeving onder de
Omgevingswet te ondersteunen. Het geeft een invulling aan wat in het
Aanvullingsbesluit onder de Omgevingswet het “geluidregister” wordt genoemd. De
voorziening is een voortzetting en uitbreiding van de geluidregisters die al
bestaan voor rijkswegen en hoofdspoor. In de voorziening moeten gegevens worden
vastgelegd over de geluidproductieplafonds, de basisgeluidemissies, de
geluidbrongegevens op basis waarvan deze zijn berekend, geluidaandachtsgebieden
en de monitoringswaarden. Hierdoor zijn geluidgegevens voor iedereen op één
plaats, uniform en laagdrempelig beschikbaar. Dat zorgt enerzijds voor
transparantie over hoe waarden tot stand zijn gekomen. Daarnaast moeten de
geluidbrongegevens bij een geluidproductieplafond ook verplicht gebruikt worden
bij het berekenen van geluidbelasting. Deze gegevens kunnen dan ook
laagdrempelig worden verkregen uit de centrale voorziening.

Om betekenisvolle en uniforme uitwisseling van geluidgegevens mogelijk te maken,
is in samenwerking met Geonovum een informatiemodel geluid ontwikkeld. Dit
informatiemodel zorgt ervoor dat alle gegevens die de voorziening beschikbaar
stelt eenduidig interpreteerbaar zijn en op een standaard manier kunnen worden
uitgewisseld met andere systemen. De nadruk van het informatiemodel ligt op het
beschrijven van de gegevens die noodzakelijk zijn om akoestische berekeningen
uit te voeren. Hierdoor ontstaat een geluidspecifiek beeld van onder meer wegen,
spoorwegen en industrieterreinen.

**Informatiemodel Geluid**

IMGeluid vormt het gemeenschappelijke begrippenkader voor de uitwisseling van
informatie van verschillende bestaande en nieuwe geluidregisters. IMGeluid is
gemodelleerd conform de specificaties van het Metamodel Informatie Modellering
[[MIM]]. Voor de uitleg van betekenis van entiteiten binnen het informatiemodel
wordt verwezen naar de [MIM catalogus bijlage](https://docs.geostandaarden.nl/mim/mim10/#B00). 

Binnen de scope van de CVGG vallen verschillende geluiddomeinen. Om technische en
informatiekundige redenen, is de dataspecificatie opgedeeld in 9 domeinen. De
domeinen staan hieronder beschreven en hebben elk een apart domeinmodel binnen
de dataspecificatie (zie [Hoofdstuk 5 Gegevensdefinitie](#cat).

| Domeinnaam    | Omschrijving                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Algemeen      | In domeinmodel Algemeen staan objecten, attributen en relaties die relevant zijn voor akoestisch onderzoek bij alle domeinen binnen IMGeluid. Vanuit andere domeinen wordt vaak verwezen naar objecten binnen dit domein, deze verwijzing is vaak in de vorm van een link. In sommige gevallen wordt er een domein specifieke specialisatie gemaakt van een Algemeen object. Dit wordt gedaan door gebruik te maken van een generalisatierelatie. (het omgekeerde van een generalisatierelatie is een specialisatierelatie) |
| BGE Algemeen  | In domeinmodel BGE Algemeen staan objecten, attributen en relaties die relevant zijn bij alle basisgeluidemissie (BGE) domeinen binnen IMGeluid.                                                                                                                                                                                                                                                                                                                                                                            |
| BGE Spoor     | In domeinmodel BGE Spoor staan objecten, attributen en relaties die relevant zijn voor lokale spoorwegen waarvoor de basisgeluidemissie regeling geld.                                                                                                                                                                                                                                                                                                                                                                      |
| BGE Weg       | In domeinmodel BGE Weg staan objecten, attributen en relaties die relevant zijn voor wegen waarvoor de basisgeluidemissie regeling geld.                                                                                                                                                                                                                                                                                                                                                                                    |
| GPP Algemeen  | In domeinmodel GPP Algemeen staan objecten, attributen en relaties die relevant zijn voor bronbeheersing van en akoestisch onderzoek bij alle GPP domeinen binnen IMGeluid.                                                                                                                                                                                                                                                                                                                                                 |
| GPP Industrie | In domeinmodel GPP Industrie staan objecten, attributen en relaties die relevant zijn voor bronbeheersing van industrieterreinen waarvoor de geluidproductieplafond regeling geld; en nodig zijn voor akoestisch onderzoek binnen het geluidaandachtsgebied van het industrieterrein.                                                                                                                                                                                                                                       |
| GPP Spoor     | In domeinmodel GPP Spoor staan objecten, attributen en relaties die relevant zijn voor bronbeheersing van spoorwegen waarvoor de geluidproductieplafond regeling geld; en nodig zijn voor akoestisch onderzoek binnen het geluidaandachtsgebied van spoorwegen.                                                                                                                                                                                                                                                             |
| GPP Weg       | In domeinmodel GPP Weg staan objecten, attributen en relaties die relevant zijn voor bronbeheersing van wegen waarvoor de geluidproductieplafond regeling geld; en nodig zijn voor akoestisch onderzoek binnen het geluidaandachtsgebied van wegen.                                                                                                                                                                                                                                                                         |
| Cumulatief    | In domeinmodel Cumulatief staan objecten, attributen en relaties die nodig zijn voor cumulatieberekeningen waarbij het geluid van luchthavens, militaire oefenterreinen en windturbines betrokken moet worden. Voor luchthavens en militaire oefenterreinen betreft het geluidcontouren ; voor windturbines betreft het geluidbrongegevens..                                                                                                                                                                                |

Niet ieder domein staat op hetzelfde hiërarchische niveau. Hiermee wordt bedoeld
dat sommige domeinen objecten over nemen uit andere domeinen. Dit is gedaan om
ervoor te zorgen dat objecten niet redundant in de dataspecificatie hoeven
worden opgenomen. In de afbeelding hieronder is gemodelleerd hoe de hiërarchie
in elkaar zit aan de hand van de UML generalisatie relatie.

![Figuur 2: Domeinen van het Informatiemodel Geluid  -fullwidth](media/Hierarchie.png)
*Figuur 2: Domeinen van het Informatiemodel Geluid*

**Facultatief gegeven**

IMGeluid zal samen met de AREG een juridische status krijgen. Dit houd in dat
het wettelijk zal worden vastgesteld welke geluidbrongegevens moeten worden
aangeleverd. In principe zijn alle emissieobjecten en overdrachtsobjecten
geluidbrongegevens en daarmee een verplicht onderdeel van de CVGG. Daarnaast
kunnen bronhouders aanvullende facultatieve gegevens aanleveren. Deze objecten
zijn toegevoegd uit praktische overwegingen, maar hoeven niet bij akoestisch
onderzoek te worden gebruikt. In het informatiemodel valt te zien welke
geluidbrongegevens facultatief mogen worden aangeleverd aan de hand van een
oranje kader.

**Uitgangspunten toegepast bij modelleren van IMGeluid**

-   IMGeluid omschrijft de dataspecificatie voor de gehele CVGG. Een
    uitwissel/berichtenmodel kan hierop worden gebaseerd, maar valt niet binnen
    de scope van dit document.

-   IMGeluid is gemodelleerd conform het Metamodel Informatie Modellering.

-   IMGeluid gaat uit van een Nederlandse syntax.

-   IMGeluid sluit hanteert de richlijnen van NEN3610:2011.

-   IMGeluid maakt gebruikt van de GML datatypes uit ISO19107.

-   IMGeluid ondersteunt de huidige werkprocessen en is niet bedoeld om die te
    harmoniseren. Wanneer vanuit gebruik de behoefte bestaat aan aanvullende
    informatie bovenop het wettelijke verplichte minimum, dan kan dat uit
    oogpunt van dienstverlening worden opgenomen.
    
#### Identificatie binnen het informatiemodel

De IMGeluid-objectidentificatie (object-ID) hanteert de richtlijnen van NEN
3610:2011. Aan elk object wordt een uniek identificatienummer toegekend, dat uit
twee delen bestaat: een namespace en een identificatiecode. Zolang het object
bestaat, mag dit ID niet veranderen. Het IMGeluid hanteert voor het eerste deel,
de namespace, NL.IMG. Het eerste deel is daarbij landcode, gevolgd door een
punt. Het tweede deel is de code voor IMGeluid. De identificatiecode bestaat uit
het volgnummer van de bronhouder gevolgd door een punt en daarna een
identificatie toegekend door de bronhouder. Voor de duidelijkheid: bij het
volgnummer moet altijd de bronhouder worden ingevuld en niet de eventuele
inwinnende instantie, die dit namens de bronhouder uitvoert. De bronhoudercode
wordt uitgegeven door de beheerder van de CVGG bij het aansluitproces. De
identificatie toegekend door de bronhouder moet het object per bronhouder uniek
identificeren. Hiervoor mag gebruik gemaakt worden van een UUID of een GUID. Op
deze wijze ziet de opbouw van een IMGeluid-ID er dan als volgt uit.

NL.IMG.*volgnummer_bronhouder*.*identificatie_van_bronhouder*

#### Authentieke gegevens

Voor invulling van het [MIM metagegegeven Authentiek](https://geonovum.github.io/MIM-Werkomgeving/#authentieke-gegevens), zullen aan attributen het label
“wettelijk kerngegeven” of “overig” worden toegekend.
 Daar is
voor gekozen omdat de CVGG geen basisregistratie is, maar wel een grondslag
heeft in de wet. Indien er voor een attribuut binnen iedere context een
geluidbrongegeven is, wordt het label “wettelijk kerngegeven” toegekend. Wanneer
een attribuut niet of alleen in een specifieke context een geluidbrongegeven is,
zal het label “overig” worden toegepast.

#### Validatie van attribuutwaardes

In IMGeluid heeft het uitgangspunt om met datatypes aan te sluiten op de
richtlijnen van de ISO19107 standaard. In sommige gevallen was het nodig om
aanvullende eisen te stellen. Deze eisen zijn gespecificeerd waar nodig op
attribuutniveau in de tabel met metagegevens.

##### Patroon/formeel patroon:

Het MIM metagegeven “Patroon” omschrijft de structuur van de waarde die het
attribuut bevat. (zie [MIM Patroon](https://geonovum.github.io/MIM-Werkomgeving/#metagegeven-patroon) voor
definitie) De waarde van een attribuut mag niet buiten de kaders vallen van de
structuur, zoals vastgesteld in het patroon. Om dit te valideren zal de
voorziening gebruik maken van de machine-leesbare variant van dit patroon, het
MIM metagegeven Formeel Patroon. (Zie [MIM formeel patroon](https://geonovum.github.io/MIM-Werkomgeving/#metagegeven-formeel-patroon) voor
definitie) Een formeel patroon is uitgedrukt als regular expression (RegEx).

##### Meeteenheid:

Bij een attribuutwaarde met het GML formaat “Measure” is een specifieke
meeteenheid vereist. Deze meeteenheid wordt gespecificeerd op attribuutniveau
in de metagegeventabel achter de tagged value “Meeteenheid”.

##### Multipliciteit

In het geval van IMGeluid is de multipliciteit altijd relatief aan een
Geluidgegevenscollectie. De multipliciteit van een attribuut geeft aan hoe vaak
het attribuut met een waarde mag voorkomen binnen een object. Een multipliciteit van "[0..1]" houdt
bijvoorbeeld in dat dit attribuut facultatief is.

##### Regels:

In bepaalde gevallen worden regels gebruikt. Een mogelijke toepassing van regels
is om te bepalen of een attribuutwaarde in een specifieke situatie verplicht is.
Dit kan ervoor zorgen dat attributen met een multipliciteit van "[0..1]" wel
verplicht zijn wanneer de condities uit de regel geldig zijn. De voorziening zal
zorgen voor een validatiesysteem dat kan omgaan met regels, multipliciteit en
patronen.

#### Hoogte projectie en 3D


Normatieve referenties
----------------------------

De volgende documenten zijn onmisbaar voor de totstandkoming van dit document:

-   [[MIM]] – [Metamodel Informatie Modellering](
    <https://docs.geostandaarden.nl/mim/mim/>)

-   [Raamwerk van geo-standaarden
    3.0](<https://www.geonovum.nl/uploads/documents/Raamwerk%20Geo-Standaarden%20v3.0.pdf>)

-   [NEN 3610:2011/A1:2016 Basismodel Geo-informatie](
    <https://geonovum.github.io/bmgi/docs/#dataproductspecificatie-nl>)

-   ISO19107: Geographic information – Spatial schema .

-   RIVM: PSA Centrale Voorziening Geluidgegevens 1.03

-   AREG - Aanvullingsregeling geluid_200113

Mapping met bestaande standaarden
-------------------------------------

Algemene Termen en definities
-----------------------------------

Lijst van termen en definities die in deze beschrijving worden gehanteerd,
gesorteerd op alfabetische volgorde per domein.

### Geluiddomein

| **Term**                                                                               | **Definitie**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Afschermende objecten**                                                                | Ter verbetering van de kwaliteit van het milieu direct langs een weg of spoorweg geplaatste wallen en schermen (bron: regeling geluid milieubeheer).                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Basisgeluidemissie**                                                                   | Basisgeluidemissie als bedoeld in artikel 3.25 (bron: Aanvullingsbesluit geluid). Basisgeluidemissies gelden voor gemeentewegen, waterschapswegen en lokaal spoor.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Emissie**                                                                              | Directe of indirecte uitstoot, uit puntbronnen of diffuse bronnen, van stoffen, trillingen, warmte of geluid in de lucht, het water of de bodem behoort (bron: Omgevingswet).                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Geluid**                                                                               | Met het menselijk oor waarneembare luchttrillingen (bron: Wet milieubeheer).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Geluidaandachtsgebied als bedoeld in artikel 3.19 (bron: Aanvullingsbesluit geluid).** | Een geluidaandachtsgebied is een locatie langs een weg of spoorweg of rond een industrieterrein waarbinnen het geluid hoger kan zijn dan de standaardwaarde in Lden. (bron: artikel 3.19 van het Aanvullingsbesluit geluid).                                                                                                                                                                                                                                                                                                                                                                                          |
| **Geluidbron**                                                                           | Een object in de fysieke leefomgeving dat geluid produceert. In de context van de aanvullingswet geluid wordt daarbij specifiek gesproken over wegen, spoorwegen, industrieterreinen met activiteiten die in aanzienlijke mate geluid kunnen veroorzaken, windturbines, luchthavens en militaire schietterreinen.                                                                                                                                                                                                                                                                                                     |
| **Geluidbrongegevens**                                                                   | Bij ministeriële regeling aangewezen gegevens, benodigd voor de vaststelling van het geluid vanwege een geluidbronsoort (bron: Aanvullingsbesluit geluid).                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Geluidbronsoort**                                                                      | Het geheel van geluidbronnen, bestaande uit: gemeentewegen; lokale spoorwegen die door provinciale staten zijn aangewezen op grond van artikel 2.13a, eerste lid, onder b, van de wet; lokale spoorwegen die niet door provinciale staten zijn aangewezen op grond van artikel 2.13a, eerste lid, onder b, van de wet; provinciale wegen; waterschapswegen; rijkswegen; hoofdspoorwegen; of industrieterreinen;                                                                                                                                                                                                       |
| **Geluidgevoelig gebouw**                                                                | Geluidgevoelig gebouw als bedoeld in artikel 3.20 (bron: Aanvullingsbesluit geluid). Een geluidgevoelig gebouw is een gebouw of gedeelte daarvan met een woonfunctie, onderwijsfunctie, gezondheidszorgfunctie met bedgebied, bijeenkomstfunctie voor kinderopvang met bedgebied en nevengebruiksfuncties daarvan.                                                                                                                                                                                                                                                                                                    |
| **Geluidproductieplafond**                                                               | Een omgevingswaarde met het oog op het beschermen van de gezondheid (bron: artikel 2.29a Ow / Aanvullingswet geluid). Een geluidproductieplafond als omgevingswaarde is een resultaatsverplichting (bron: artikel 3.42 Bkl / Aanvullingsbesluit geluid). Een geluidproductieplafond geeft de maximaal toegestane geluidproductie weer op een vast fictief punt (geluidreferentiepunt) op korte afstand van de geluidbron. Geluidproductieplafonds worden gedefinieerd voor rijksinfra (rijkswegen, spoor), provinciale wegen, lokale spoorwegen waarvoor de provincie het bevoegd gezag heeft, en industrieterreinen. |
| **Geluidreferentiepunt**                                                                 | Locatie waar een geluidproductieplafond van toepassing is (bron: Aanvullingsbesluit geluid).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Gemeenteweg**                                                                          | Weg in beheer bij een gemeente (bron: Aanvullingsbesluit geluid).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Grenswaarde**                                                                          | Een grens waarvan alleen bij uitzondering en alleen in aangegeven gevallen (zoals bij “zwaarwegende belangen”) kan worden afgeweken. (bron: NvT Aanvullingsbesluit geluid).                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Lden**                                                                                 | De Lden (Engels: Level day-evening-night) is een Europese maat om de geluidsbelasting door omgevingslawaai over een hele dag uit te drukken. ([Bron](https://nl.wikipedia.org/wiki/Lden))                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **Plafondcorrectiewaarde**                                                               | Getal waarmee de geluidemissie wordt vermeerderd met betrekking tot een daarbij aangegeven gedeelte van een weg of spoorweg ten behoeve van het bepalen van de geluidproductie dan wel de geluidsbelasting (bron: regeling geluid milieubeheer).                                                                                                                                                                                                                                                                                                                                                                      |
| **Provinciale weg**                                                                      | Weg in beheer bij een provincie (bron: Aanvullingsbesluit geluid).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Rijksweg**                                                                             | Weg in beheer bij het Rijk (bron: Aanvullingsbesluit geluid).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Rijstrook**                                                                            | Strook van de rijbaan van een weg, welke voldoende plaats biedt aan een enkele rij rijdende motorvoertuigen op meer dan drie wielen, of, indien door middel van markering een bredere strook als rijstrook is aangegeven, die strook (bron: Wet geluidhinder).                                                                                                                                                                                                                                                                                                                                                        |
| **Spoorweg**                                                                             | Weg bestemd voor verkeer over spoorstaven of geleiderails (bron: Spoorwegwet).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Standaardwaarde**                                                                      | Een geaccepteerd vertrekpunt (niveau) waarvan gemotiveerd kan worden afgeweken (bron: NvT Aanvullingsbesluit geluid). De standaardwaarde voor geluid vertegenwoordigt een “geaccepteerd geluidniveau”: als aan de standaardwaarde voldaan wordt, is geen nadere afweging of besluitvorming nodig (tenzij bevoegd gezag hier meer specifieke regels voor heeft gespecificeerd).                                                                                                                                                                                                                                        |
| **Waterschapsweg**                                                                       | Weg in beheer bij een waterschap (bron: Aanvullingsbesluit geluid).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Weg**                                                                                  | Voor het openbaar rij- of ander verkeer openstaande weg of openstaand pad, met inbegrip van de daarin liggende bruggen of duikers, alsmede een spoorweg die niet is aangegeven op de kaart, bedoeld in artikel 106, of de geluidplafondkaart (bron: Wet geluidhinder).                                                                                                                                                                                                                                                                                                                                                |

### Informatiemodeldomein

| **Termen**                       | **Definities**                                                                                                                                                                                                                            |
|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Annotatie**                    | Elke toevoeging op een kaartbeeld voor verduidelijking                                                                                                                                                                                    |
| **Applicatieschema**             | Informatiemodel dat gegevens beschrijft die worden gebruikt door een of meer applicaties.                                                                                                                                                 |
| **Relatie \<UML\>**              | Semantische relatie tussen twee of meer geo-objecten die samenhang tussen hun instanties weergeeft.                                                                                                                                       |
| **Attribuut**                    | Kenmerk van een geo-object.                                                                                                                                                                                                               |
| **Attribuutwaarde**              | Waarde die een attribuut aanneemt.                                                                                                                                                                                                        |
| **Coördinaat**                   | Getal in een sequentie van n getallen om de positie van een punt in een n-dimensionale ruimte te bepalen.                                                                                                                                 |
| **Coördinaatreferentiesysteem**  | Coördinaatsysteem dat aan een object is gerelateerd door een datum.                                                                                                                                                                       |
| **Coördinaatsysteem**            | Set van wiskundige regels voor het toekennen van coördinaten aan punten.                                                                                                                                                                  |
| **Datatype**                     | gestructureerde gegevens zonder identiteit.                                                                                                                                                                                               |
| **Diepte**                       | Afstand van een punt tot een gekozen referentievlak neerwaarts gemeten langs een lijn welke loodrecht op dat referentievlak staat.                                                                                                        |
| **Domeinmodel**                  | Formele definitie van een subset van objecten, attributen, relaties en regels in een bepaald domein.                                                                                                                                      |
| **Geo-informatie**               | Informatie met een directe of indirecte referentie naar een plaats ten opzichte van de aarde (bijvoorbeeld ten opzichte van het aardoppervlak) OPMERKING: Geo-informatie is synoniem aan geografische informatie.                         |
| **Geo-object**                   | Abstractie van een fenomeen in de werkelijkheid dat direct of indirect is geassocieerd met een locatie relatief ten opzichte van de aarde. (bijvoorbeeld ten opzichte van het aardoppervlak) OPMERKING: Synoniemen zijn Object en Klasse. |
| **Georeferentie**                | Locatie van een ruimtelijk object vastgelegd in een ruimtelijk referentiesysteem.                                                                                                                                                         |
| **Informatiemodel**              | Formele definitie van objecten, attributen, relaties en regels in een bepaald domein. OPMERKING: Domein is in dit verband: een kennisgebied of activiteit gekarakteriseerd door een verzameling van concepten en begrippen                |
| **Instantie**                    | Benoemd, identificeerbaar object uit een objectklasse.                                                                                                                                                                                    |
| **Label**                        | Tekst of getal dat een eigenschap omschrijft of kwantificeert en als annotatie op een kaartbeeld wordt afgebeeld                                                                                                                          |
| **Namespace**                    | Collectie van namen die in XML documenten gebruikt worden als element en attribuutnamen OPMERKING: Een namespace wordt geïdentificeerd door een URI.                                                                                      |
| **Objectklasse**                 | Verzameling van objecten met dezelfde eigenschappen. OPMERKING: Ook wel feature class genoemd.                                                                                                                                            |
| **Rasterformaat**                | Representatie van beeld middel een gewoonlijk rechthoekig patroon van parallelle lijnen.                                                                                                                                                  |
| **Registratie**                  | Op nationaal niveau geïdentificeerde en erkende gegevensverzameling. OPMERKING: Een basisregistratie is een registratie.                                                                                                                  |
| **Representatie**                | Inhoudelijk vastleggen van de werkelijkheid. OPMERKING: Het informatiemodel is een representatie van de werkelijkheid.                                                                                                                    |
| **Ruimtelijk referentiesysteem** | Model (systeem) voor identificatie van een positie (locatie) in de werkelijkheid OPMERKING: Identificatie van een positie kan door coördinaten (directe locatie) en door geografische identificatoren (indirecte locatie).                |
| **Vectorformaat**                | Representatie van geometrie middels geometrische primitieven.                                                                                                                                                                             |
| **Waardelijst**                  | Lijst van waarden.                                                                                                                                                                                                                        |
| **Werkelijkheid**                | Beeld van de echte of hypothetische wereld die alles van belang omvat.                                                                                                                                                                    |
                                                                               |

Algemene Symbolen en afkortingen
--------------------------------------

Lijst van afkortingen en acroniemen die worden gehanteerd in deze
dataspecificatie.

| **Afkortingen** | **Betekenissen**                                  |
|-----------------|---------------------------------------------------|
| **AREG**        | Aanvullingsregeling geluid                        |
| **BAG**         | Basisregistratie Adressen en Gebouwen             |
| **BGE**         | Basisgeluidemissie                                |
| **CVGG**        | Centrale Voorziening Geluidgegevens               |
| **GML**         | Geography Markup Language                         |
| **GPP**         | Geluidproductieplafond                            |
| **INSPIRE**     | Infrastructure for Spatial Information in Europe. |
| **MIM**         | Metamodel Informatie Modellering                  |
| **RIVM**        | Rijksinstituut voor Volksgezondheid en Milieu     |
| **UML**         | Unified Modeling Language                         |
| **WFS**         | Web Feature Service                               |
| **XML**         | Extensible Markup Language                        |

