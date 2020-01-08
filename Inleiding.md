# Inleiding

## Inleiding Centrale Voorziening Geluidgegevens

In 2021 treedt de Omgevingswet in werking. Het Digitaal Stelsel Omgevingswet (DSO) ondersteunt deze Omgevingswet. Het biedt een digitaal loket voor het melden en aanvragen van initiatieven in de leefomgeving. Geluid is een specifiek thema in de Omgevingswet dat parallel aan het DSO wordt ingericht. Het Rijksinstituut voor Volksgezondheid en Milieu (RIVM Rijksinstituut voor Volksgezondheid en Milieu ) werkt in opdracht van het ministerie van Infrastructuur en Waterstaat (I&W Ministerie van Infrastructuur & Waterstaat ) aan de Centrale Voorziening Geluidgegevens (CVGG). Via deze voorziening worden geluidgegevens laagdrempelig en uniform beschikbaar gesteld. Naar verwachting komen relevante delen van de CVGG in de toekomst ook in het DSO.

### Waarom komt er een Centrale Voorziening Geluidgegevens?
Met de Omgevingswet bundelt de overheid de regels voor onder andere ruimtelijke projecten. Zo wordt het straks eenvoudiger om bijvoorbeeld een bouwproject te starten en plannen op elkaar af te stemmen. Gemeenten, provincies en waterschappen krijgen ook meer ruimte om keuzes te maken en hun omgevingsbeleid aan te passen aan hun doelen en wensen.

In Nederland staan we voor de uitdaging om een goede balans te behouden in ruimte voor wonen, werken en recreëren. Een belangrijk thema in de leefomgeving is geluid. Bij de inrichting van Nederland wordt daarom rekening gehouden met de productie en belasting van geluid. Het nieuwe geluidbeleid stuurt op het beheersen van de geluidproductie. Dit doet zij door de bevoegde gezagen de geluidproductie van wegverkeer, spoor en industrie te laten controleren. Ook heeft het nieuwe geluidbeleid meer aandacht voor het optellen van verschillende soorten geluid, zoals het optellen van het geluid van wegverkeer en het geluid van spoor. Om te onderzoeken of een ruimtelijk project inpasbaar is, wordt vaak akoestisch onderzoek gedaan. Hiervoor zijn gegevens over de geluidbronnen in de omgeving nodig.

De Centrale Voorziening Geluidgegevens (CVGG) wordt het digitale systeem voor het uitwisselen van geluidgegevens. Het rijk, provincies, gemeenten en waterschappen worden verplicht geluidgegevens via deze voorziening te delen. De voorziening zorgt er straks voor dat deze gegevens eenvoudig vindbaar, inzichtelijk en beschikbaar zijn. De focus ligt daarbij op het ondersteunen van akoestisch onderzoek.

### Welke geluidgegevens komen in de CVGG?
In de CVGG komen eerst de geluidgegevens voor de beheersing van het geluid. Hierbij gaat het om de geluid(bron)gegevens van alle wegen, spoorwegen en industrie. Daar komen de geluidgegevens van luchtvaart, windturbines en schietterreinen bij voor het optellen van de verschillende soorten geluid. Voor de beheersing van de geluidproductie van de rijkswegen en hoofdspoorwegen gelden nu geluidproductieplafonds (GPPs). Een GPP is de maximale geluidproductie uitgedrukt in een jaargemiddelde, die geldt op denkbeeldige rekenpunten (referentiepunten) langs de rijkswegen en spoorwegen. Vanaf 1 januari  2021 geldt dit GPP-systeem ook voor provinciale wegen en industrieterreinen. Voor de beheersing van het geluid van gemeentewegen, waterschapswegen en het lokaal spoor komt een ander systeem: de basisgeluidemissie (BGE). Deze BGE wordt per wegvak bepaald op basis van de werkelijke geluidemissie in een nader te bepalen referentiejaar.

Er is een verschil tussen deze twee systemen. Een BGE is een monitoringsparameter. Hiervoor geldt een vijfjaarlijkse monitoringsplicht. Als de geluidemissie toeneemt, moet de beheerder maatregelen overwegen om de geluidemissie terug te dringen. Een GPP is een omgevingswaarde. Hiervoor geldt een jaarlijkse monitoringplicht. Als een overschrijding dreigt moet de bronbeheerder maatregelen nemen. De gegevens over de maximale en werkelijke geluidproductie worden nu gedeeld via een geluidregister. De CVGG neemt deze functie per 2021 over.

Bron: [CVGG website van RIVM](https://www.rivm.nl/cvgg)

## Inleiding informatiemodel

### Het Informatiemodel Geluid: de basis voor een gestructureerde in- en uitvoer
De Centrale Voorziening Geluidgegevens (CVGG) wordt het digitale systeem om geluidgegevens uit te wisselen. Dat betekent dat het rijk, provincies, gemeenten en waterschappen veel geluidinformatie gaan leveren aan deze voorziening. De geluidinformatie is heel divers. Het varieert van verkeersgegevens, geluidproductiegegevens tot en met gegevens die zijn vastgesteld op een besluit. In het Informatiemodel Geluid staan de afspraken, technische eisen en aanleverspecificaties waaraan de gegevens moeten voldoen. Om te komen tot een gedragen Informatiemodel Geluid stelt het ontwikkelteam CVGG deze op in overleg met bronhouders en gebruikers.

Een informatiemodel (IM) is nodig om informatie uit te wisselen. De definities en eisen aan de kwaliteit van de gegevens worden in een IM vastgelegd. Een IM bevat ook afspraken over de formaten waarin de informatie geleverd moet, kan of mag worden. Het doel van het Informatiemodel Geluid is dat:

- alle relevante gegevens voor geluidberekeningen op gelijke, eenduidige, vooraf vastgestelde wijze aangeleverd kunnen worden;
- gegevens op een eenduidige geautomatiseerde wijze uitgewisseld kunnen worden tussen de verschillende gebruikers, zoals bevoegde gezagen (waaronder gemeenten en waterschappen) en initiatiefnemers.

Bron: [CVGG nieuwsbrief van RIVM](https://www.rivm.nl/abonneren/nieuwsbrief-centrale-voorziening-geluidgegevens)

### IMGeluid Catalogus

In het IM Geluid komen de afspraken over de aanlevering van informatie over:

- Geluidproductieplafonds, (wegverkeer, spoor en industrieterreinen);
- Basisgeluidemissies (wegverkeer, lokaal spoor);
- Windturbines (contouren en/of brongegevens);
- Luchthavens (contouren);

In deze catalogus is voor ieder van deze domeinen de laatste versie van het informatiemodel te vinden. Deze informatiemodellen bestaan uit objecten die in relatie staan met elkaar. Voor ieder object worden alle eigenschappen (Attributen), die in de werkelijkheid relevant zijn, opgenomen in het informatiemodel. De informatiemodellen in deze catalogus zijn gemodelleerd conform het Metamodel Informatie Modellering [[MIM]]. In de MIM catalogus vallen alle regels waar het Informatie Model Geluid aan moet voldoen genoemd. In deze catalogus zijn (de meeste) objecten en attributen voorzien van definities zodat het Informatiemodel ook te begrijpen is zonder kennis van UML.