<h2>3.1 Naam en Acroniemen.</h2>
<p>IMG2020 &ndash; Dataspecificatie voor Centrale Voorziening Geluidgegevens (CVGG).</p>
<h2>3.2 Informele beschrijving.</h2>
<h2>3.2.1 Definitie.</h2>
<p>RIVM ontwikkelt in opdracht van het ministerie van Infrastructuur en Waterstaat een Centrale Voorziening Geluidgegevens om de nieuwe regelgeving te ondersteunen. Het geeft een invulling aan wat in het Aanvullingsbesluit het &ldquo;geluidregister&rdquo; wordt genoemd. De voorziening is een voortzetting en uitbreiding van de geluidregisters die al bestaan voor rijkswegen en hoofdspoor. In de voorziening moeten gegevens worden vastgelegd over de geluidproductieplafonds, de basisgeluidemissies, de brongegevens op basis waarvan deze zijn berekend, geluidaandachtsgebieden en de monitoringswaarden. Hierdoor zijn geluidgegevens voor iedereen op &eacute;&eacute;n plaats, uniform en laagdrempelig beschikbaar. Dat zorgt enerzijds voor transparantie over hoe waarden tot stand zijn gekomen. Daarnaast moeten de brongegevens bij een geluidproductieplafond ook verplicht gebruikt worden bij het berekenen van geluidbelasting. Deze gegevens kunnen dan ook laagdrempelig worden verkregen uit de centrale voorziening.</p>
<h2>3.2.2 Beschrijving.</h2>
<p><strong>Centrale Voorziening Geluidgegevens</strong></p>
<p>RIVM ontwikkelt in opdracht van het ministerie van I en W een Centrale Voorziening Geluidgegevens om de nieuwe regelgeving te ondersteunen. Het geeft een invulling aan wat in het Aanvullingsbesluit het &ldquo;geluidregister&rdquo; wordt genoemd. De voorziening is een voortzetting en uitbreiding van de geluidregisters die al bestaan voor rijkswegen en hoofdspoor. In de voorziening moeten gegevens worden vastgelegd over de geluidproductieplafonds, de basisgeluidemissies, de brongegevens op basis waarvan deze zijn berekend, geluidaandachtsgebieden en de monitoringswaarden. Hierdoor zijn geluidgegevens voor iedereen op &eacute;&eacute;n plaats, uniform en laagdrempelig beschikbaar. Dat zorgt enerzijds voor transparantie over hoe waarden tot stand zijn gekomen. Daarnaast moeten de brongegevens bij een geluidproductieplafond ook verplicht gebruikt worden bij het berekenen van geluidbelasting. Deze gegevens kunnen dan ook laagdrempelig worden verkregen uit de centrale voorziening.</p>
<p>Figuur 3 geeft een schets van de architectuur van de Centrale Voorziening Geluidgegevens. Hierin is zichtbaar dat zowel rijk, provincies, gemeenten als waterschappen bronhouder zijn. Zij zullen de relevante gegevens zelf halen uit bijvoorbeeld asset management systemen, geluidrekenmodules of geografische informatiesystemen. De voorziening ontvangt, valideert en integreert de gegevens om ze vervolgens in verschillende vormen beschikbaar te stellen. Zo is er in ieder geval voorzien dat een deel ervan beschikbaar is in een kaartviewer, dat de kaartbeelden ook als geo-services beschikbaar zijn en dat er REST API&rsquo;s beschikbaar zullen komen om de gegevens in gestructureerde vorm op te vragen. De voorziening zal ook functionaliteit beschikbaar stellen aan bronhouders voor het controleren van allerlei kwaliteitsregels die inzicht geven in de plausibiliteit van de gegevens. Het is de verantwoordelijkheid van de bronhouders zelf om eventuele correcties in de gegevens aan te brengen</p>
<p>Figuur 3 Architectuurschets Centrale Voorziening Geluidgegevens (AFBEELDING CVGG INVOEGEN)</p>
<p>Om betekenisvolle en uniforme uitwisseling van geluidgegevens mogelijk te maken, is in samenwerking met Geonovum een informatiemodel geluid ontwikkeld. Dit informatiemodel zorgt ervoor dat alle gegevens die de voorziening beschikbaar stelt eenduidig interpreteerbaar zijn en op een standaard manier kunnen worden uitgewisseld met andere systemen. De nadruk van het informatiemodel ligt op het beschrijven van de gegevens die noodzakelijk zijn om akoestische berekeningen uit te voeren. Hierdoor ontstaat een geluidspecifiek beeld van onder meer wegen, spoorwegen en industrieterreinen.</p>
<p><em>Bron: RIVM: &ldquo;Geluid op de kaart&rdquo;;</em></p>
<p><strong>Informatie Model Geluid</strong></p>
<p>IMG2020 vormt het gemeenschappelijke begrippenkader voor de uitwisseling van informatie van verschillende bestaande en nieuwe geluidregisters. IMG2020 is gemodelleerd conform de specificaties van het Metamodel Informatie Modellering (MIM). Voor de uitleg van betekenis van entiteiten binnen het informatiemodel wordt daarom verwezen naar de MIM catalogus (link: https://geonovum.github.io/MIM-Werkomgeving/#bijlagen). Binnen de scope van de CVGG vallen dan ook verschillende geluiddomeinen. Om technische en informatiekundige redenen, is de dataspecificatie opgedeeld in 9 domeinen. De domeinen staan hieronder beschreven en hebben elk een apart domeinmodel binnen de dataspecificatie (zie Hoofdstuk 5).</p>
<table>
<tbody>
<tr>
<td width="104">
<p>Domeinnaam</p>
</td>
<td width="497">
<p>Omschrijving</p>
</td>
</tr>
<tr>
<td width="104">
<p>Algemeen</p>
</td>
<td width="497">
<p>In domeinmodel Algemeen staan objecten, attributen en relaties die relevant zijn voor akoestisch onderzoek bij alle domeinen binnen IMG2020. Vanuit andere domeinen wordt vaak verwezen naar objecten binnen dit domein, deze verwijzing is vaak in de vorm van een link. In sommige gevallen wordt er een domein specifieke specialisatie gemaakt van een Algemeen object. Dit wordt gedaan door gebruik te maken van een generalisatierelatie. (het omgekeerde van een generalisatierelatie is een specialisatierelatie)</p>
</td>
</tr>
<tr>
<td width="104">
<p>BGE Algemeen</p>
</td>
<td width="497">
<p>In domeinmodel BGE Algemeen staan objecten, attributen en relaties die relevant zijn voor akoestisch onderzoek bij alle basisgeluidemissie (BGE) domeinen binnen IMG2020.</p>
</td>
</tr>
<tr>
<td width="104">
<p>BGE Spoor</p>
</td>
<td width="497">
<p>In domeinmodel BGE Spoor staan objecten, attributen en relaties die nodig zijn voor akoestisch onderzoek bij lokale spoorwegen waarvoor de basisgeluidemissie regeling geld.</p>
</td>
</tr>
<tr>
<td width="104">
<p>BGE Weg</p>
</td>
<td width="497">
<p>In domeinmodel BGE Weg staan objecten, attributen en relaties die nodig zijn voor akoestisch onderzoek bij gemeentelijke wegen waarvoor de basisgeluidemissie regeling geld.</p>
</td>
</tr>
<tr>
<td width="104">
<p>GPP Algemeen</p>
</td>
<td width="497">
<p>In domeinmodel GPP Algemeen staan objecten, attributen en relaties die relevant zijn voor akoestisch onderzoek bij alle GPP domeinen binnen IMG2020.</p>
</td>
</tr>
<tr>
<td width="104">
<p>GPP Industrie</p>
</td>
<td width="497">
<p>In domeinmodel GPP Industrie staan objecten, attributen en relaties die nodig zijn voor akoestisch onderzoek bij industrieterreinen waarvoor de geluidproductieplafond regeling geld.</p>
</td>
</tr>
<tr>
<td width="104">
<p>GPP Spoor</p>
</td>
<td width="497">
<p>In domeinmodel GPP Spoor staan objecten, attributen en relaties die nodig zijn voor akoestisch onderzoek bij spoorwegen waarvoor de geluidproductieplafond regeling geld.</p>
</td>
</tr>
<tr>
<td width="104">
<p>GPP Weg</p>
</td>
<td width="497">
<p>In domeinmodel GPP Weg staan objecten, attributen en relaties die nodig zijn voor akoestisch onderzoek bij wegen waarvoor de geluidproductieplafond regeling geld.</p>
</td>
</tr>
<tr>
<td width="104">
<p>Cumulatief</p>
</td>
<td width="497">
<p>In domeinmodel Cumulatief staan objecten, attributen en relaties die nodig zijn voor akoestisch onderzoek bij luchthavens, militaire oefenterreinen en windturbines. Voor luchthavens en militaire oefenterreinen hoeven alleen geluidcontouren te worden opgenomen, maar voor windturbines op een industrieterrein moeten ook brongegevens worden opgenomen.</p>
</td>
</tr>
</tbody>
</table>
<p>Niet ieder domein staat op hetzelfde hi&euml;rarchische niveau. Hiermee is bedoeld dat sommige domeinen objecten over nemen uit andere domeinen. Dit is gedaan om ervoor te zorgen dat objecten niet redundant in de dataspecificatie hoeven worden opgenomen. In de afbeelding hieronder is gemodelleerd hoe de hi&euml;rarchie in elkaar zit aan de hand van de UML generalisatie relatie.</p>
<p><strong>Aanleverplicht. (AFBEELDING DOMEINEN INVOEGEN)</strong></p>
<p>IMG2020 zal samen met de AREG een juridische status krijgen. Dit houd in dat het wettelijk zal worden vastgesteld welke brongegevens moeten worden aangeleverd. Vooralsnog zal de AREG bepalen welke brongegevens dit zijn. Momenteel wordt gekeken of deze regels ook in het informatiemodel kunnen worden opgenomen.</p>
<p><strong>Uitgangspunten toegepast bij modelleren van IMG2020</strong></p>
<ul>
<li>IMG2020 is gemodelleerd conform het Metamodel Informatie Modellering.</li>
<li>IMG2020 gaat uit van een Nederlandse syntax.</li>
<li>IMG2020 ondersteunt de huidige werkprocessen en is niet bedoeld om die te harmoniseren. Wanneer vanuit gebruik de behoefte bestaat aan aanvullende informatie bovenop het wettelijke verplichte minimum, dan kan dat uit oogpunt van dienstverlening worden opgenomen.</li>
</ul>
<p>&nbsp;</p>
<p>&nbsp;</p>
<h2>3.3 Normatieve referenties.</h2>
<p>De volgende documenten zijn onmisbaar voor de totstandkoming van dit document:</p>
<ul>
<li>MIM &ndash; Metamodel Informatie Modellering: <a href="https://geonovum.github.io/MIM-Werkomgeving/#bijlagen">https://geonovum.github.io/MIM-Werkomgeving/#bijlagen</a></li>
<li>Raamwerk van geo-standaarden 3.0: <a href="https://www.geonovum.nl/uploads/documents/Raamwerk%20Geo-Standaarden%20v3.0.pdf">https://www.geonovum.nl/uploads/documents/Raamwerk%20Geo-Standaarden%20v3.0.pdf</a></li>
<li>NEN 3610:2011/A1:2016 Basismodel Geo-informatie. (Versie goed?)</li>
<li>ISO19107: Geographic information &ndash; Spatial schema . (Versie?)</li>
<li>Geomilieu handleiding?</li>
<li>RIVM: PSA Centrale Voorziening Geluidgegevens 1.03?</li>
<li>AREG - Aanvullingsregeling geluid_200113</li>
</ul>
<h2>3.4 Totstandkoming.</h2>
<p>Deze specificatie is opgesteld door Geonovum en is gebaseerd op ??.</p>
<table width="603">
<tbody>
<tr>
<td>
<p>Documenttitel</p>
</td>
<td>
<p>IMG2020 &ndash; Dataspecificatie Centrale Voorziening Geluidgegevens</p>
</td>
</tr>
<tr>
<td>
<p>Referentiedatum</p>
</td>
<td>
<p>2020-01-29</p>
</td>
</tr>
<tr>
<td>
<p>Auteur(s)</p>
</td>
<td>
<p>Gerard Trouborst, Joeri van Es, Linda van den Brink</p>
</td>
</tr>
<tr>
<td>
<p>Betrokken partijen</p>
</td>
<td>
<p>Ministerie van I&amp;W, RIVM en Geonovum</p>
</td>
</tr>
<tr>
<td>
<p>Taal</p>
</td>
<td>
<p>Nederlands</p>
</td>
</tr>
</tbody>
</table>
<h2>3.5 Mapping met bestaande standaarden</h2>
<p>INSPIRE?</p>
<p>&nbsp;</p>
<h2>3.6 Algemene Termen en definities.</h2>
<p>Lijst van termen en definities die in deze beschrijving worden gehanteerd, gesorteerd op alfabetische volgorde per domein.</p>
<h3>Geluiddomein</h3>
<table>
<tbody>
<tr>
<td width="601">
<p><strong>Actieplannen</strong></p>
<p>Plannen bedoeld voor de beheersing van lawaai-uitstoot en lawaai-effecten, waar nodig met inbegrip van lawaaivermindering (bron: EU-richtlijn omgevingslawaai).</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Afschermende objecten</strong></p>
<p>Ter verbetering van de kwaliteit van het milieu direct langs een weg of spoorweg geplaatste wallen en schermen (bron: regeling geluid milieubeheer).</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Autoweg</strong></p>
<p>&nbsp;Op grond van de Wegenverkeerswet 1994 aangeduide autoweg (bron: Omgevingswet).</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Basisgeluidemissie</strong></p>
<p>Basisgeluidemissie als bedoeld in artikel 3.25 (bron: Aanvullingsbesluit geluid).</p>
<p>Basisgeluidemissies gelden voor gemeentewegen, waterschapswegen en lokaal spoor.</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Emissie</strong></p>
<p>Directe of indirecte uitstoot, uit puntbronnen of diffuse bronnen, van stoffen, trillingen, warmte of geluid in de lucht, het water of de bodem behoort (bron: Omgevingswet).</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Geluid</strong></p>
<p>Met het menselijk oor waarneembare luchttrillingen (bron: Wet milieubeheer).</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Geluidaandachtsgebied als bedoeld in artikel 3.19 (bron: Aanvullingsbesluit geluid).</strong></p>
<p>Een geluidaandachtsgebied is een locatie langs een weg of spoorweg of rond een industrieterrein waarbinnen het geluid hoger kan zijn dan de standaardwaarde in Lden. (bron: artikel 3.19 van het Aanvullingsbesluit geluid).</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Geluidbeperkende maatregel</strong></p>
<p>Maatregel die het geluid op een geluidgevoelig gebouw verlaagt (bron: Aanvullingsbesluit geluid).</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Geluidbron </strong></p>
<p>Een object in de fysieke leefomgeving dat geluid produceert. In de context van de aanvullingswet geluid wordt daarbij specifiek gesproken over wegen, spoorwegen, industrieterreinen met activiteiten die in aanzienlijke mate geluid kunnen veroorzaken, windturbines en militaire schietterreinen.</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Geluidbrongegevens</strong></p>
<p>Bij ministeri&euml;le regeling aangewezen gegevens, benodigd voor de vaststelling van het geluid vanwege een geluidbronsoort (bron: Aanvullingsbesluit geluid).</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Geluidbronsoort</strong></p>
<p>Het geheel van geluidbronnen, bestaande uit:</p>
<p>a)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; gemeentewegen;</p>
<p>b)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; lokale spoorwegen die door provinciale staten zijn aangewezen op grond van artikel 2.13a, eerste lid, onder b, van de wet;</p>
<p>c)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; lokale spoorwegen die niet door provinciale staten zijn aangewezen op grond van artikel 2.13a, eerste lid, onder b, van de wet;</p>
<p>d)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; provinciale wegen;</p>
<p>e)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; waterschapswegen;</p>
<p>f)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; rijkswegen;</p>
<p>g)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; hoofdspoorwegen; of</p>
<p>h)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; industrieterreinen;</p>
<p>(bron: Aanvullingsbesluit geluid).</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Geluidgevoelig gebouw</strong></p>
<p>Geluidgevoelig gebouw als bedoeld in artikel 3.20 (bron: Aanvullingsbesluit geluid).</p>
<p>Een geluidgevoelig gebouw is een gebouw of gedeelte daarvan met een woonfunctie, onderwijsfunctie, gezondheidszorgfunctie met bedgebied, bijeenkomstfunctie voor kinderopvang met bedgebied en nevengebruiksfuncties daarvan.</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Geluidhinder</strong></p>
<p>Gevaar, schade of hinder, als gevolg van geluid (bron: Wet milieubeheer).</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Geluidproductieplafond</strong></p>
<p>Een omgevingswaarde met het oog op het beschermen van de gezondheid (bron: artikel 2.29a Ow / Aanvullingswet geluid).</p>
<p>Een geluidproductieplafond als omgevingswaarde is een resultaatsverplichting (bron: artikel 3.42 Bkl / Aanvullingsbesluit geluid).</p>
<p>Een geluidproductieplafond geeft de maximaal toegestane geluidproductie weer op een vast fictief punt (geluidreferentiepunt) op korte afstand van de geluidbron. Geluidproductieplafonds worden gedefinieerd voor rijksinfra (rijkswegen, spoor), provinciale wegen, lokale spoorwegen waarvoor de provincie het bevoegd gezag heeft, en industrieterreinen.</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Geluidreferentiepunt</strong></p>
<p>Locatie waar een geluidproductieplafond van toepassing is (bron: Aanvullingsbesluit geluid).</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Geluidsbelastingkaart</strong></p>
<p>Weergave van gegevens omtrent een bestaande of voorspelde geluidssituatie in termen van een geluidsbelastingsindicator, overschrijding van een geldende relevante grenswaarde, aantal blootgestelde personen in een bepaald gebied, aantal woningen dat in een bepaald gebied blootgesteld is aan bepaalde waarden van een geluidsbelastingsindicator (bron: EU-richtlijn omgevingslawaai).</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Geluidwerende maatregel</strong></p>
<p>Fysieke maatregel aan een gebouw die de geluidwering van de uitwendige scheidingsconstructie verhoogt (bron: Aanvullingsbesluit geluid).</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Gemeenteweg</strong></p>
<p>Weg in beheer bij een gemeente (bron: Aanvullingsbesluit geluid).</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Grenswaarde</strong></p>
<p>Een grens waarvan alleen bij uitzondering en alleen in aangegeven gevallen (zoals bij &ldquo;zwaarwegende belangen&rdquo;) kan worden afgeweken. (bron: NvT Aanvullingsbesluit geluid).</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Lden</strong></p>
<p>De Lden (Engels: Level day-evening-night) is een Europese maat om de geluidsbelasting door omgevingslawaai over een hele dag uit te drukken. (Bron: <a href="https://nl.wikipedia.org/wiki/Lden">https://nl.wikipedia.org/wiki/Lden</a>)</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Omgevingslawaai</strong></p>
<p>Ongewenst of schadelijk geluid buitenshuis dat door menselijke activiteiten wordt veroorzaakt, inclusief lawaai dat wordt voortgebracht door vervoermiddelen, wegverkeer, spoorwegverkeer, luchtverkeer en locaties van industri&euml;le activiteiten als beschreven in bijlage I van Richtlijn 96/61/EG van de Raad van 24 september 1996 inzake ge&iuml;ntegreerde preventie en bestrijding van verontreiniging (2) (bron: EU-richtlijn omgevingslawaai).</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Plafondcorrectiewaarde</strong></p>
<p>Getal waarmee de geluidemissie wordt vermeerderd met betrekking tot een daarbij aangegeven gedeelte van een weg of spoorweg ten behoeve van het bepalen van de geluidproductie dan wel de geluidsbelasting (bron: regeling geluid milieubeheer).</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Provinciale weg</strong></p>
<p>Weg in beheer bij een provincie (bron: Aanvullingsbesluit geluid).</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Rijksweg</strong></p>
<p>Weg in beheer bij het Rijk (bron: Aanvullingsbesluit geluid).</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Rijstrook</strong></p>
<p>Strook van de rijbaan van een weg, welke voldoende plaats biedt aan een enkele rij rijdende motorvoertuigen op meer dan drie wielen, of, indien door middel van markering een bredere strook als rijstrook is aangegeven, die strook (bron: Wet geluidhinder).</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Spoorweg</strong></p>
<p>weg bestemd voor verkeer over spoorstaven of geleiderails (bron: Spoorwegwet).</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Standaardwaarde</strong></p>
<p>Een geaccepteerd vertrekpunt (niveau) waarvan gemotiveerd kan worden afgeweken (bron: NvT Aanvullingsbesluit geluid).</p>
<p>De standaardwaarde voor geluid vertegenwoordigt een &ldquo;geaccepteerd geluidniveau&rdquo;: als aan de standaardwaarde voldaan wordt, is geen nadere afweging of besluitvorming nodig (tenzij bevoegd gezag hier meer specifieke regels voor heeft gespecificeerd).</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Uitwendige scheidingsconstructie</strong></p>
<p>Uitwendige scheidingsconstructie als bedoeld in bijlage I bij het Besluit bouwwerken leefomgeving (bron: Aanvullingsbesluit geluid).</p>
<p>Constructie die de scheiding vormt tussen een voor personen toegankelijke besloten ruimte van een gebouw en de buitenlucht, de grond of het water, inclusief de op die constructie aansluitende delen van andere constructies, voor zover die delen van invloed zijn op het voldoen van die scheidingsconstructie aan een in dit besluit gestelde eis (bron: bijlage I van het Besluit bouwwerken leefomgeving).</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Waterschapsweg</strong></p>
<p>Weg in beheer bij een waterschap (bron: Aanvullingsbesluit geluid).</p>
</td>
</tr>
<tr>
<td width="601">
<p><strong>Weg </strong></p>
<p>Voor het openbaar rij- of ander verkeer openstaande weg of openstaand pad, met inbegrip van de daarin liggende bruggen of duikers, alsmede een spoorweg die niet is aangegeven op de kaart, bedoeld in artikel 106, of de geluidplafondkaart (bron: Wet geluidhinder).</p>
<p>&nbsp;</p>
</td>
</tr>
</tbody>
</table>
<p>Bron: RIVM: PSA Centrale Voorziening Geluidgegevens 1.03</p>
<h3>Informatiemodeldomein</h3>
<table>
<tbody>
<tr>
<td width="614">
<p><strong>annotatie</strong></p>
<p>Elke toevoeging op een kaartbeeld voor verduidelijking</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="614">
<p>applicatieschema</p>
<p>informatiemodel dat gegevens beschrijft die worden gebruikt door een of meer applicaties</p>
<p>OPMERKING&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; IMKL is met UML beschreven in een applicatieschema.</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="614">
<p><strong>associatie of relatie &lt;UML&gt;</strong></p>
<p>semantische relatie tussen twee of meer klassen die de connectie tussen hun instanties weergeeft</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="614">
<p>attribuut</p>
<p>kenmerk van een object</p>
</td>
</tr>
<tr>
<td width="614">
<p>attribuutwaarde (value)</p>
<p>waarde die een attribuut aanneemt</p>
</td>
</tr>
<tr>
<td width="614">
<p>co&ouml;rdinaat</p>
<p>getal in een sequentie van n getallen om de positie van een punt in een n-dimensionale ruimte te bepalen</p>
</td>
</tr>
<tr>
<td width="614">
<p>co&ouml;rdinaatreferentiesysteem</p>
<p>co&ouml;rdinaatsysteem dat aan een object is gerelateerd door een datum.</p>
</td>
</tr>
<tr>
<td width="614">
<p>co&ouml;rdinaatsysteem</p>
<p>set van wiskundige regels voor het toekennen van co&ouml;rdinaten aan punten</p>
</td>
</tr>
<tr>
<td width="614">
<p><strong>datatype</strong></p>
<p>gestructureerde gegevens zonder identiteit</p>
<p><strong>&nbsp;</strong></p>
</td>
</tr>
<tr>
<td width="614">
<p>datum</p>
<p>parameter of set van parameters voor het defini&euml;ren van het nulpunt, de schaal en de ori&euml;ntatie van een co&ouml;rdinaatsysteem</p>
</td>
</tr>
<tr>
<td width="614">
<p><strong>diepte</strong></p>
<p>Afstand van een punt tot een gekozen referentievlak neerwaarts gemeten langs een lijn welke loodrecht op dat referentievlak staat.</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="614">
<p>Domeinmodel</p>
<p>formele definitie van een subset van objecten, attributen, relaties en regels in een bepaald domein</p>
</td>
</tr>
<tr>
<td width="614">
<p><strong>download service</strong></p>
<p>service that enables copies of spatial data sets, or parts of such sets, to be downloaded and, where practicable, accessed directly.</p>
<p>INSPIRE</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="614">
<p><strong>extensie (van informatiemodel)</strong></p>
<p>Een informatiemodel als uitbreiding op een ander informatiemodel</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="614">
<p>geo-informatie (geo-information, geographic information)</p>
<p>informatie met een directe of indirecte referentie naar een plaats ten opzichte van de aarde (bijvoorbeeld ten opzichte van het aardoppervlak)</p>
<p>OPMERKING&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Geo-informatie is synoniem aan geografische informatie.</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="614">
<p>geo-object (geographic feature type, feature class)</p>
<p>abstractie van een fenomeen in de werkelijkheid dat direct of indirect is geassocieerd met een locatie relatief ten opzichte van de aarde (bijvoorbeeld ten opzichte van het aardoppervlak)</p>
</td>
</tr>
<tr>
<td width="614">
<p>georeferentie (georeference)</p>
<p>locatie van een ruimtelijk object vastgelegd in een ruimtelijk referentiesysteem</p>
</td>
</tr>
<tr>
<td width="614">
<p>informatiemodel (conceptual model, conceptual scheme)</p>
<p>formele definitie van objecten, attributen, relaties en regels in een bepaald domein</p>
<p>OPMERKING&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Domein is in dit verband: een kennisgebied of activiteit gekarakteriseerd door een verzameling van concepten en begrippen</p>
</td>
</tr>
<tr>
<td width="614">
<p>instantie (instance, occurrence)</p>
<p>benoemd, identificeerbaar object uit een objectklasse</p>
</td>
</tr>
<tr>
<td width="614">
<p><strong>label</strong></p>
<p>tekst of getal dat een eigenschap omschrijft of kwantificeert en als annotatie op een kaartbeeld wordt afgebeeld</p>
<p><strong>&nbsp;</strong></p>
</td>
</tr>
<tr>
<td width="614">
<p><strong>namespace</strong></p>
<p>collectie van namen die in XML documenten gebruikt worden als element en attribuutnamen</p>
<p>&nbsp;</p>
<p>OPMERKING&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Een namespace wordt ge&iuml;dentificeerd door een URI.</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="614">
<p><strong>netwerk service</strong></p>
<p>application running at the network application layer and above, that provides data storage, manipulation, presentation, communication or other capability which is often implemented using a client-server or peer-to-peer architecture based on application layer network protocols (Wikipedia)</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="614">
<p><strong>netwerktopologie</strong></p>
<p>beschrijving van de plaats van de knooppunten en de onderlinge verbindingen in een netwerk</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="614">
<p>objectklasse (feature class)</p>
<p>verzameling van objecten met dezelfde eigenschappen</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="614">
<p>presentatie</p>
<p>presentatie van informatie aan mensen</p>
<p>OPMERKING&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Presentatie van informatie door visualisatie, hoorbaar maken, tastbaar maken (tactiel) of combinaties hiervan.</p>
</td>
</tr>
<tr>
<td width="614">
<p><strong>productmodel</strong></p>
<p>informatiemodel afgeleid van een ander informatiemodel om de toepassing in een dataproduct te realiseren</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="614">
<p><strong>rasterformaat</strong></p>
<p>representatie van beeld middel een gewoonlijk rechthoekig patroon van parallelle lijnen (v)</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="614">
<p>registratie</p>
<p>op nationaal niveau ge&iuml;dentificeerde en erkende gegevensverzameling</p>
<p>OPMERKING&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Een basisregistratie is een registratie.</p>
</td>
</tr>
<tr>
<td width="614">
<p>registratiehouder</p>
<p>organisatie verantwoordelijk voor het houden van de registratie</p>
<p>OPMERKING&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; de registratiehouder is de organisatie die unieke objectidentificaties toekent voor objecten in een registratie</p>
</td>
</tr>
<tr>
<td width="614">
<p>representatie</p>
<p>inhoudelijk vastleggen van de werkelijkheid.</p>
<p>OPMERKING&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Het informatiemodel is een representatie van de werkelijkheid.</p>
</td>
</tr>
<tr>
<td width="614">
<p>ruimtelijk referentiesysteem</p>
<p>model (systeem) voor identificatie van een positie (locatie) in de werkelijkheid</p>
<p>OPMERKING&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Identificatie van een positie kan door co&ouml;rdinaten (directe locatie) en door geografische identificatoren (indirecte locatie).</p>
</td>
</tr>
<tr>
<td width="614">
<p>sectormodel</p>
<p>model voor beschrijving van de werkelijkheid binnen het domein van een beleidsveld</p>
</td>
</tr>
<tr>
<td width="614">
<p>symbool</p>
<p>presentatieprimitieve van grafische, audio of tactiele aard of een combinatie hiervan</p>
</td>
</tr>
<tr>
<td width="614">
<p><strong>temporeel referentiesysteem</strong></p>
<p>Referentiesysteem waarin de tijd is bepaald.</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="614">
<p><strong>vectorformaat</strong></p>
<p>representatie van geometrie middels geometrische primitieven</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="614">
<p><strong>view service</strong></p>
<p>service that makes it possible, as a minimum, to display, navigate, zoom in and out, pan or overlay viewable spatial data sets and to display legend information and any relevant content of metadata.</p>
<p>INSPIRE</p>
<p><strong>&nbsp;</strong></p>
</td>
</tr>
<tr>
<td width="614">
<p>void, nl</p>
<p>void, en</p>
<p>object, of kenmerk van een object, dat syntactisch of semantisch is vereist, maar dat in de gegeven instantie geen informatie bevat</p>
</td>
</tr>
<tr>
<td width="614">
<p><strong>waardelijst</strong></p>
<p>lijst van waarden</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="614">
<p>werkelijkheid</p>
<p>beeld van de echte of hypothetische wereld die alles van belang omvat</p>
</td>
</tr>
</tbody>
</table>
<h2>3.7 Algemene Symbolen en afkortingen.</h2>
<p>Lijst van afkortingen en acroniemen die worden gehanteerd in deze dataspecificatie.</p>
<table>
<tbody>
<tr>
<td width="587">
<p><strong>AREG</strong></p>
<p>Aanvullingsregeling geluid</p>
</td>
</tr>
<tr>
<td width="587">
<p><strong>BAG</strong></p>
<p>Basisregistratie Adressen en Gebouwen</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="587">
<p><strong>BGE</strong></p>
<p>Basisgeluidemissie</p>
</td>
</tr>
<tr>
<td width="587">
<p><strong>CVGG</strong></p>
<p>Centrale Voorziening Geluidgegevens</p>
</td>
</tr>
<tr>
<td width="587">
<p><strong>GML</strong></p>
<p>Geography Markup Language</p>
<p><strong>&nbsp;</strong></p>
</td>
</tr>
<tr>
<td width="587">
<p><strong>GPP</strong></p>
<p>Geluidproductieplafond</p>
</td>
</tr>
<tr>
<td width="587">
<p><strong>INSPIRE</strong></p>
<p>Infrastructure for Spatial Information in Europe.</p>
<p>De INSPIRE-richtlijn verplicht de Europese lidstaten geo-informatie over 34 thema's te voorzien van metadata, te harmoniseren en beschikbaar te stellen via het INSPIRE-portaal volgens leveringsvoorwaarden die het gebruik niet onnodig belemmeren.</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="587">
<p><strong>MIM</strong></p>
<p>Metamodel Informatie Modellering</p>
</td>
</tr>
<tr>
<td width="587">
<p><strong>RIVM</strong></p>
<p>Rijksinstituut voor Volksgezondheid en Milieu</p>
</td>
</tr>
<tr>
<td width="587">
<p><strong>UML</strong></p>
<p>Unified Modeling Language</p>
</td>
</tr>
<tr>
<td width="587">
<p><strong>WFS</strong></p>
<p>Web Feature Service</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="587">
<p><strong>WIBON</strong></p>
<p>Wet Informatie-uitwisseling Bovengrondse en Ondergrondse netten</p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td width="587">
<p><strong>XML</strong></p>
<p>Extensible Markup Language</p>
</td>
</tr>
</tbody>
</table>
