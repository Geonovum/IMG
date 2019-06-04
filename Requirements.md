
# Overleg RIVM 2019-05-28

## Requirements

### Algemeen
- Het IMG is een **uitwisselmodel** voor gegevensuitwisseling via de Centrale Voorziening Geluidgegevens (CVGG)
- Maak zoveel mogelijk gebruik van bestaande bronnen
- Het berekenen van de geluidsbelasting kunnen faciliteren
- [*Beslispunt*] Het moet mogelijk zijn om op basis van de CVGG:
   - De GPP's opnieuw uit te rekenen
   - Daarbij op dezelfde plafondwaarde uit te komen.
   - Bij overdracht van weg van ene partij naar andere partij bij herberekening op zelfde 
   - Vanuit de opdrachtgever is deze ambitie er niet
- Het IMG mag groter zijn dan wat wettelijk als nodig wordt verondersteld. Het datamodel moet Nederlandbreed geluid ondersteunen. 
- [*Beslispunt*] Voor de European Noise Directive (END), die over 3 jaar in werking treedt, is overdracht in brede zin nodig. Het is wenselijk om hierop voor te sorteren. De opdrachtgever heeft aangegeven dat compliancy met END buiten de scope valt. Houdt rekening met het brede plaatje. Over 3 jaar moet je geluidskaarten kunnen produceren. Het IMG zou hiervoor dan wel de faciliteiten moeten kunnen bieden. De END zit nu niet in de scope, maar het is de wens van de stakeholders dat het datamodel wel zo ontwikkeld wordt dat je voorsorteert op END.
- [*Specificeren*] Voor alle onderdelen, waneer is dat gestart en waneer eindigt het, de juridisch geldige situatie (besluit), voor dat besluit ook aangeven wat de peildatum van de brondata voor dat besluit is.
- In model de relatie meenemen, maar hoeft niet in de voorziening te worden opgenomen. Je zou ook nog optioneel een relatie naar (bijv.) BGT-wegdeel. 
- Doel is ook om bronhouders zoveel mogelijk te ontlasten. 
- Tegelijk qua kwaliteit: wel heel goed te zien hoe goed iets gemapped is met anders modellen.
- Rond wegen bestaat veel dubbele registratie: voorkomen in IMG, sluit aan bij bestaande bronnen/ontwikkelingen
- Handhaven van de vrijheid voor het plaatsen van de rijlijnen (omdat aan harmoniseren kosten verbonden zijn)

### Geluidrelevante objecten
> *Eventueel later opsplitsen naar* ***bron***, ***overdracht*** *en* ***omgeving***.
- [*Specificeren*] Eigenschappen die bepalend zijn voor de sterkte van het geluid
- De term **bebouwing** wijzigen naar bijv.: *inrichting(en)*, *installaties*
-  **Intensiteiten** meenemen (aantal voertuigen per tijdseenheid)
- In de basis alles als **rijlijn** definiëren
- Duidelijk onderscheid maken tussen:
   - [1] waar ligt de weg (bron)
   - [2] waar rijden de auto's (gebruik)
   - [3] waarmee ga je rekenen (rekenabstractie)
- Binnen het begrip **snelheid** duidelijk onderscheid maken tussen:
    - [1] wat mag er maximaal gereden worden
    - [2] daadwerkelijk gereden snelheid
- [*Beslispunt*] Er is nog geen concensus over het bronbestand voor wegen.  Enerzijds is er voorkeur voor het **NWB als standaard** voor wegen, mede omdat er al onderzoek is gedaan naar het geluid-compliant maken NWB). Tegelijkertijd is **NWB nog niet voor alle partijen goed bruikbaar als bron**
- [*Specificeren*] Het IMG legt niet op hoe je om moet gaan met rijlijnen. Het rekenmodel zelf zal bepalende factor zijn voor omgang rijlijnen.
- In IMG kunnen zien hoe rijlijnen **samenhangen met andere datasets**
- De **breedte** van de weg hoort niet bij de rijlijn, maar bij het wegvak.
- Dat betekent dat van het wegvak op z'n minst een polygoon nodig is
- [*Specificeren*] Onderscheid **bron** en **omgeving**: alles rondom weg is schemergebied: wat hoort bij bron en wat bij overdracht
- Akoestisch is de **breedte van de weg** niet relevant, maar voor de overdracht van geluid wel (*Opname in het model hangt af van de uiteindelijke scope*). De breedte en lengte van de weg hebben geen invloed op de bronsterkte.
- [*Specificeren*] Er mag geen discussie meer ontstaan over de weg
- Categorie **omgeving** toevoegen, want **afschermende objecten** zijn geen directe eigenschappen van de weg (geluidsbron), maar wel nodig voor het GPP
- Categorie **overdracht** toevoegen, maar eveneens beperkt tot wat je gebruikt voor je GPP
- Maak in het IMG onderscheid tussen:
   - **1a** Kerngegevens v/d bron (nodig voor GPP)
   - **1b** Aanvullende gegevens v/d bron (bijv. kruispunt-, obstakel-, hellings(hoek)correctie en breedte van de weg) (voor berekening woningbelasting heb je dit nodig) 
   - **2a** Kerngegevens overdracht (nodig voor GPP)  
   - **2b** Aanvullende gegevens overdracht (Als je een GPP-overschrijding hebt, moet je naar de resterende overdrachtsdata kijken)
   - **3a** Kerngegevens omgeving (nodig voor GPP, bijv. afschermende objecten)
- De **hoogteligging** van een referentiepunt, moet vooral representatief zijn. De voorkeur gaat daarom uit naar absolute hoogte in aantal meters boven N.A.P. Na vaststelling referentiepunt en hoogte boven maaiveld is het voorstel om de hoogte om te zetten naar een absolute hoogte (hoogte boven NAP).
- [*Specificeren*] De **hellingshoek** van een wegvak/rijlijn is voor GPP's een constante (0), en dient niet in het model te worden opgenomen. Voor overdracht is hellingshoek wel relevant! (*Opname in het model hangt af van de uiteindelijke scope*)
- [*Specificeren*] De **bronhoogte** van [...] is voor de berekening van GPP's een constante (0,75m) en bovendien technisch geen eigenschap van de weg. (*In hoeverre is deze waarde voor een bredere scope relevant? Is het dan wel een variabele?*)
- [*Specificeren*] De **standaardwaarde** is voor GPP's een constante (50dB) en dient niet in het model te worden opgenomen. De waarde is vastgelegd in wet- en regelgeving. Verwijzen naar geannoteerde regel in LVBB? Eventueel als attribuut van **geluidaandachtsgebied** opnemen
- [*Specificeren*] Object of attribuut **Geluidafschermende objecten** opnemen i.p.v. *Geluidbeperkende maatregel*. *Waarom bestaat een scherm uit losse 'schermdelen'?*
- Object **Referentiepunt** heeft een aantal waarden (is een type van een rekenpunt)
- Attribuut **Geluidproductieplafond** opnemen bij *Referentiepunt*.
- Object **Recent besluit**, je wilt hier apart naar kunnen verwijzen
- Attribuut **Plafondcorrectiewaarde** 1,5dB die op de weg plaats vindt. Bij tracébesluiten gaat het over toekomstwaarde en mag je 1.5db niet eens meenemen
- Object **Geluidaandachtsgebied** heeft *geen* attribuut *overschrijding* (is meer monitoring).
- Relatie **Geluidaandachtsgebied** met **Geluidbronsoort**
- [*Specificeren*] Object **Geluidbronsoort**: verzameling van alle geluidbronnen van hetzelfde type (bijvoorbeeld: alle Rijkswegen)
- [*Specificeren*] Object **Geluidbrontype**: type geluidbron
- Relatie **Geluidbron**, **Geluidbrontype** en **Geluidbronsoort**
- [*Specificeren*] Relatie **Rijlijn**, **Wegvak** tot netwerktopologie?
- Relatie **Rijweg** met **Rijksweg** omdraaien
- Object **Absorbtieniveau** (de absorbtiefactor van het bodemvlak (bijv. asfalt) van de weg (polygoon), betreft 0db of 0,5db)
- [*Specificeren*] Snelheden en andere attributen zijn ook logischer op rijlijnniveau

### Historie
- Attribuut **Historie** is ook een hele belangrijke!
- Voorstel bij **wijziging locatie referentiepunt**: nieuw referentiepunt introduceren en het oude referentiepunt laten vervallen. Behoefte aan simpeler in termen van databeheer, dus liever een begin- en einddatum. Dit nieuwe referentiepunt krijgt een nieuw ID-nummer. Feitelijk is er dan geen sprake van verplaatsing. Nader uitgezocht zal moeten worden of dit juridisch ook zo wordt gezien. 
- Voor wegen verwacht je begin- en einddatum
- [*Specificeren*] Voor het *gebruik* van wegen ligt dat (begin- /einddatum) anders
- [*Specificeren*] Ook hoogtebestanden van schermen (afschermende objecten vraagt 'dit soort'  historie

### Geldigheid
- In beginsel elk object van begin- en einddatum voorzien

### Tijd
- Nu in geluidregister: oude waarde verdwijnt acuut, door rechter gecorrigeerd, nu telkens afgelopen 5 jaar terugkijken (peildatum 31 december).
- Het moet mogelijk zijn om te kunnen tijdrijzen in het systeem (o.b.v. uitspraak rechter)
- Het geluidsregister bevat ook objecten met een datum in de toekomst (bijv. nieuwe wegen).
- Modelleer je de aanleverdatum van aangeleverde data ook mee in het model?
- Je zou aan een databstand een unieke code moeten hangen zodat je voor een besluit kan aangeven: ik heb met die codes gerekend.

### Identificatie
- Iemand moet een uniek nummer (GUID) als zoekcriterium kunnen gebruiken in de centrale voorziening. 

### Besluit
- Het is voor de voorziening voldoende om het besluit vast te leggen.
- [*Specificeren*] Gebruikers willen de juridische status weten
- Er kan een verschil zijn tussen wat in het besluit staat versus wat er daadwerkelijk aanwezig is. Rijkswaterstaat leeft nu na op besluitinformatie. ProRail leeft na op actuele informatie. Dat laatste verdient volgens stakeholders de voorkeur. (*Wat betekent dat voor het eventueel opnemen van een object* **besluit**)
- Het model heeft betrekking op de **vergunde situatie**. Veranderingen in de werklijkheid betekenen niet noodzakelijk dat die automatisch tot wijzigingen in een berekening leiden.
- De vraag kunnen stellen welke bronnen op een bepaald moment in de werkelijkheid en juridisch bestonden

### Herkomst gegevens
- Misschien moet levering ook een object in het informatiemodel zijn? In de metadata van de levering zit immers ook relevante informatie
- Verwijzingen naar andere registraties als optionele attributen om te kunnen relateren?
