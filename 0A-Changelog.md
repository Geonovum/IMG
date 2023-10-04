# Wijzigingen in het Informatiemodel Geluid

Hieronder staan de wijzigingen die in deze versie hebben plaatsgevonden na versie 1.2 van 15 november 2021 voor versie 2.0, versie 2.1, versie 3.0 en versie 3.1. 
Er worden alleen wezenlijke veranderingen genoemd die invloed hebben op betrokkenen als software-ontwikkelaars. Dus bv geen correcties op typefouten, spelling of leesbaarheid.

## Wijzigingen in versie 3.1

|**nummer**| **Github issue**                                 | **Soort wijziging**                  | **Wijziging**                                |
| ---------|------------------------------------------------- | ------------------------------------ | -------------------------------------------- |
| 1        |[194](https://github.com/Geonovum/IMG/issues/194) | XML-Schema Restriction verbeterd     | Bij een aantal elementen binnen de VerkeersgegevensWeg was het fractionDigits element niet aanwezig. Deze zijn nu wel ingevuld. (zie ook #209)|
| 2        |[196](https://github.com/Geonovum/IMG/issues/196) | Attribuut verwijderd                 | Net als bij WegdeelGPP (#183) is ook bij SpoordeelGPP het attribuut maaiveld verwijderd.|
| 3        |[197](https://github.com/Geonovum/IMG/issues/197) | Regel verwijderd                     | De regel dat Geluidproductieplafondobject.eindVrijstelling in het verleden moet liggen, is verwijderd.|
| 4        |[198](https://github.com/Geonovum/IMG/issues/198) | Regel verwijderd                     | De regel dat Geluidbron.Industrie.brontype niet gelijk mag zijn aan "normale puntbron" als er sprake is van een relatie met een VlakbronIndustrie of LijnbronIndustrie, is verwijderd.|
| 5        |[199](https://github.com/Geonovum/IMG/issues/199) | Regel verwijderd                     | De regel dat alle z-coördinaten in VlakbronIndustrie.geometrie dezelfde waarde moeten hebben, is verwijderd.|
| 6        |[200](https://github.com/Geonovum/IMG/issues/200) | Regel verwijderd                     | De regel dat alle z-coördinaten in Brug.geometrie dezelfde waarde moeten hebben, is verwijderd.|
| 7        |[201](https://github.com/Geonovum/IMG/issues/201) | Maximumwaarde aangepast              | De maximumwaarde van een BGEwaarde is verhoogd van 99.9 naar naar 199.9.|
| 8        |[203](https://github.com/Geonovum/IMG/issues/203) | Regel verwijderd                     | De regel "Een gemeente of waterschap mag de basisgeluidsemissie (BGE) ook schriftelijk onderbouwen. In dat geval hoeft geen monitoringswaarde opgegeven te worden." is verwijderd bij het objecttype Monitoringresultaat.|
| 9        |[203](https://github.com/Geonovum/IMG/issues/203) | Definitie aangepast                  | Bij Monitoringresultaat en bij het attribuut Monitoringresultaat.monitoringwaarde is de definitie aangepast.|
| 10       |[203](https://github.com/Geonovum/IMG/issues/203) | Minimum en maximumwaarde aangepast   | Bij het attribuut Monitoringresultaat.monitoringwaarde zijn de minimum- en maximumwaarde aangepast naar -199.9 en 199.9.|
| 11       |[194](https://github.com/Geonovum/IMG/issues/209) | XML-Schema Restriction verbeterd     | Bij een aantal elementen binnen de VerkeersgegevensWeg was minimumwaarde (=0) niet ingevuld. Deze zijn nu overal wel ingevuld. (Zie ook #194)|
| 12       |[194](https://github.com/Geonovum/IMG/issues/207) | XML-Schema Restriction verbeterd     | Bij SpoordeelGPPType.plafondcorrectie was maxInclusive (= 9.9) niet ingevuld. Deze is nu wel ingevuld.(Zie ook #194)|
| 13       |[194](https://github.com/Geonovum/IMG/issues/210) | XML-Schema Restriction verbeterd     | Bij GeluidbronIndustrie.reflectiepuntHoogte stond "mogelijk geen waarde" op "Ja". Deze is op "Nee" gezet, net als bij alle andere attributen in IMG.(Zie ook #194)|
| 14       |                                                  | Redactionele wijzigingen             | In de toelichting van documentverwijzijng, in een regel bij Bodemvlak en in de definitie van relatierol geluidberekeningobject stond nog een s te veel in monitoring**s**resultaat. |
| 15       |                                                  | Redactionele wijzigingen             | Bij attribuut Geluidtoeslag.toeslag is het patroon verwijderd omdat het om een gestructureerd datatype gaat (WaardePerOctaafband) waarbij dit niet relevant is.|

## Wijzigingen in versie 3.0

|**nummer**| **Github issue**                                 | **Soort wijziging**                  | **Wijziging**                                |
| ---------|------------------------------------------------- | ------------------------------------ | -------------------------------------------- |
| 1        |[181](https://github.com/Geonovum/IMG/issues/181) | Toelichting toegevoegd               | Bij LijnbronIndustrie en VlakbronIndustrie is een toelichting toegevoegd dat ze geen onderdeel zijn van Geluidsgegevenscollectie, maar wel te vinden zijn via GeluidsbronIndustrie.|
| 2        |[182](https://github.com/Geonovum/IMG/issues/182) | Subtype toegevoegd                   | GeluidschermMetDiffractor is toegevoegd als subtype van Geluidoverdrachtsobject. |
| 3        |[183](https://github.com/Geonovum/IMG/issues/183) | Doublelist vervangen door geometrie of verwijderd | Daar waar in versie 2.1 nog het optionele veld om de hoogte via een doublelist aan te geven is dat vervangen door een optionele 2e geometrie. In hetzelfde issue in besloten dat bij WegdeelGPP het kenmerk verwijderd kan worden. Ook zijn er regels toegevoegd.|
| 4        |[184](https://github.com/Geonovum/IMG/issues/184) | Symbool afgeleid attribuut verwijderd| Symbool verwijderd. |
| 5        |[185](https://github.com/Geonovum/IMG/issues/185) | Links in datatype toegevoegd         | Op meerdere plekken is de link naar datatypes toegevoegd.  |
| 6        |[186](https://github.com/Geonovum/IMG/issues/186) | Definities aangepast                 | Bij Optrektoeslagpunt.geometrie en Contourvlak.contourVlak is aangegeven of het om 2D of 3D geometrie gaat.|
| 7        |[187](https://github.com/Geonovum/IMG/issues/187) | Patroon teruggezet                   | Het tussen versie 1.2 en 2.0 weggevallen patroon bij verkeersgegevensWeg is teruggezet.|
| 8        |[188](https://github.com/Geonovum/IMG/issues/188) | Gegevensgroepen samengevoegd         | spoorgegevensblokken intensiteit en snelheid zijn samengevoegd.|
| 9        |[189](https://github.com/Geonovum/IMG/issues/189) | Regel toegevoegd                     | Regel toegevoegd bij Geluidgegevenscollectie.jaar.|
| 10       |[190](https://github.com/Geonovum/IMG/issues/190) | Relatie verplaats                    | Relatie tussen Geluidproductieplafondobject en Terrein verplaatst naar subtypen voor industrie. |
| 11       |[191](https://github.com/Geonovum/IMG/issues/191) | Klasse verplaats                     | Klasse Terrein uit Geluidgegevenscollectie gehaald en los neergezet. |
| 12       |[192](https://github.com/Geonovum/IMG/issues/192) | Regels aangepast                     | Er zijn regels aangepast waardoor ze nu eenduidiger zijn en tevens volgens de regels van [Rulespeak](https://www.rulespeak.com/en/). Daarnaast zijn er overbodige regles verwijderd en vanuit andere issues regels toegevoegd. zie ook: [RegelsVanVersie2.1Naar3.0_20230717.xlsx](https://github.com/Geonovum/IMG/files/12068403/RegelsVanVersie2.1Naar3.0_20230717.xlsx)|
| 13       |[193](https://github.com/Geonovum/IMG/issues/193) | Klasse toegevoegd                    | Abstracte klasse GemonitordObject toegevoegd.|
| 14       |[195](https://github.com/Geonovum/IMG/issues/195) | Tekst toegevoegd                     | Uitleg over NEN3610ID die ten onrechte was verdwenen weer toegevoegd. |

## Wijzigingen in versie 2.1

|**nummer**|**Github issue** | **Soort wijziging** | **Wijziging**|
|----------|-----------------|---------------------|--------------|
| 1        |[72](https://github.com/Geonovum/IMG/issues/72)     |regel| Regel toegevoegd die zegt dat bij zwevende geluidschermen onderkantScherm verplicht is.|
| 2        |[143](https://github.com/Geonovum/IMG/issues/143)   |kardinaliteit| Ook de kardinaliteit van Monitoringresultaat.geluidberekingobject op [1..2] gezet. Deze wijziging resulteert in een wijziging van het XSD.|
| 3        |[161](https://github.com/Geonovum/IMG/issues/161)   |regel| Regel toegevoegd aan Terrein zodat een gewoon terrein niet als industrieterrein mag worden gelabelled.|
| 4        |[175](https://github.com/Geonovum/IMG/issues/175)   |attribuut toegevoegd| Attribuut identificatie is toegevoegd aan Geluidcontour. Deze wijziging resulteert in een wijziging van het XSD.|
| 5        |[176](https://github.com/Geonovum/IMG/issues/176)   |toelichting| Verwijzing naar het GML Simple Feature profile opgenomen in de standaard.|
| 6        |[177](https://github.com/Geonovum/IMG/issues/177)   |regel| 3 Regels betreffende Geluidgegevenscollectie.type zijn aangepast.|
| 7        |[178](https://github.com/Geonovum/IMG/issues/178)   |toelichting| UML constructies overerving van regels en abstracte klasse beter uitgelegd.|
| 8        |[179](https://github.com/Geonovum/IMG/issues/179)   |patroon| Toegestane waarden Industrieterrein.standaard­Bodemabsorptiefractie attribuut op juiste plaats gezet.|
| 9        |[180](https://github.com/Geonovum/IMG/issues/180)   |regel| Bij Geluidschermdeel.onderkantScherm  regels verplaatst van toelichtingveld naar het regels veld van Geluidschermdeel.|

## Wijzigingen in versie 2.0

|**nummer**|**Github issue**                                   | **Soort wijziging**                       | **Wijziging** |
|----------|---------------------------------------------------|-------------------------------------------|---------------|
| 1        | [72](https://github.com/Geonovum/IMG/issues/72)   | attributen aangepast                      | Attribuut Geluidschermdeel.geometrie heet nu bovenkantScherm. Geluidschermdeel.schermhoogte is vervangen door Geluidschermdeel.onderkantScherm van het type GM_Curve. Het attribuut geluidwerendeMaatregel is verwijderd.|
| 2        | [124](https://github.com/Geonovum/IMG/issues/124) | klasse verwijderd                         | De subklasse GeluidschermSpoor is samengevoegd met de klasse Geluidscherm en de relaties met Overkapping, Tunnelbak en Brug zijn verwijderd. Ook de regels die hierin stonden over deze relatie zijn vewijderd.|
| 3        | [143](https://github.com/Geonovum/IMG/issues/143) | kardinaliteit                             | Kardinaliteit van de relatierol "berekening" tussen Geluidproductieplafondobject en Geluidberekeningobject is [1..2] geworden.|
| 4        | [144](https://github.com/Geonovum/IMG/issues/144) | attribuut verplaatst                      | Het attribuut standaarBodemabsorptiefractie is verplaatst van het Objecttype Industrierekeninstellingen naar het Objecttype Terrein.|
| 5        | [145](https://github.com/Geonovum/IMG/issues/145) | relatie verwijderd                        | De relatie tussen de objecttypes Geluidaandachtgebied en Geluidberekeningobject is overal in het model verwijderd.|
| 6        | [147](https://github.com/Geonovum/IMG/issues/147) | extra attribuut bij gegevensgroep         | Attribuut dagdeel toegevoegd aan SnelheidgegevensSpoor.|
| 7        | [148](https://github.com/Geonovum/IMG/issues/148) | geometrietype                             | Voor geluidbronIndustrie is het geometrietype van GM\_POINT naar GM\_MultiPoint gezet.|
| 8        | [149](https://github.com/Geonovum/IMG/issues/149) | naamswijziging	                           | Wijziging van de enumeratiewaarde 'luchthaventerrein' naar 'luchthavengebied'. Tevens een toelichting toegevoegd. |
| 9        | [151](https://github.com/Geonovum/IMG/issues/151) | volgorde attributen                       | De volgorde is overal aangepast naar: ID – naam – omschrijving – geometrie – attribuutsoorten die vaker voorkomen – rest. Attribuutsoorten uit overerving staan altijd bovenaan. |
| 10       | [152](https://github.com/Geonovum/IMG/issues/152) | Inkapselen verboden                       | Het inkapselen van relaties in de uitwisseling is verboden. De encoding van GML relaties is nu altijd byReference (dit is ook verwerkt in het XSD) |
| 11       | [154](https://github.com/Geonovum/IMG/issues/154) | naamswijziging                            | Er is een wijziging die niet is genoemd in de changelog voor definitieve versie 1.2. Het gaat om relatierol "Brug.geluid**af**schermspoor" die nu "geluidschermspoor" heet.|
| 12       | [155](https://github.com/Geonovum/IMG/issues/155) | extra attributen voor Optrektoeslagvlak   | De attribuutsoorten naam en omschrijving zijn met kardinaliteit [0..1] toegevoegd aan het Objecttype Optrektoeslagvlak. |
| 13       | [157](https://github.com/Geonovum/IMG/issues/157) | titel aangepast                           | Versienummer toegevoegd aan titel |
| 14       | [158](https://github.com/Geonovum/IMG/issues/158) | nieuw object + relatie toegevoegd         | Object 'Geluidcontour' opgesplits in twee objecten 'GeluidcontourSet' en 'Geluidcontour'. Tevens definitie en toelichting toegevoegd aan 'GeluidcontourSet'|
| 15       | [159](https://github.com/Geonovum/IMG/issues/159) | definities aangepast                      | De definities van enumeratiewaarden "Besluit" en "Melding" in Documenttype zijn aangepast| 
| 16       | [160](https://github.com/Geonovum/IMG/issues/160) | regels verplaatst naar toelichting        | Om regels te verminderen, zijn 2 regels bij de documentverwijzing omgezet in een toelichting.|
| 17       | [161](https://github.com/Geonovum/IMG/issues/161) | nieuw subtype                             | Om regels te verminderen, is het subtype Industrieterrein toegevoegd aan het objecttype Terrein en hoeft geometrie alleen nog voor dit subtype opgegegeven te worden.|
| 18       | [162](https://github.com/Geonovum/IMG/issues/162) | gegevensgroep geherstructureerd           | Om regels te verminderen, zijn alle combinaties van dagdelen en motorvoertuigklassen in de gegevensgroep "VerkeersgegevensWeg" aparte attributen in de gegevensgroep geworden.|
| 19       | [163](https://github.com/Geonovum/IMG/issues/163) | attribuut verplicht gesteld               | Om regels te verminderen, is het attribuut uitstralingsrichting van GeluidbronIndustrie verplichtgesteld.|
| 20       | [164](https://github.com/Geonovum/IMG/issues/164) | attribuut verplaatst en object verwijderd | Om regels te verminderen, is het attribuut hoogtelijntype verplaatst naar objecttype Hoogtelijn en is objecttype Hoogtelijnspecificatie verwijderd. Ook is enumeratie Hoogtelijnobjecttype verwijderd omdat die alleen in Hoogtelijnspecificatie gebruikt werd.|
| 21       | [165](https://github.com/Geonovum/IMG/issues/165) | regel verwijderd                          | Een regel bij attribuut absorptiefractie betreffende kardinaliteit is verwijderd omdat dit al afgedwongen wordt via de tagged valuses en het schema.|
| 22       | [167](https://github.com/Geonovum/IMG/issues/167) | attribuut verwijderd                      | Monitoringresultaat.kwalitatieveOnderbouwing verwijderd |
| 23       | [168](https://github.com/Geonovum/IMG/issues/168) | regel verwijderd                          | De regel bij Geluidschermdeel.reflectiefactorRechts en reflectiefactorLinks dat deze bij spoor gelijk zouden moeten zijn is verwijderd.|
| 24       | [170](https://github.com/Geonovum/IMG/issues/170) | gegevensgroep vervangen door 3 attributen | Om regels te verminderen, is er voor elk dagdeel een attribuut jaargemiddeldeGeluidemissie toegevoegd aan objecttype Windturbine. De gegevensgroep EmissiePerDagdeel is verwijderd.|
| 25       | [171](https://github.com/Geonovum/IMG/issues/171) | nieuw subtype                             | Om regels te verminderen, is aan objecttype Optrektoeslagpunt het subtypes OptrektoeslagKruispunt toegevoegd.|
| 26       |                                                   | Redactionele wijzigingen                  | Omwille van de leesbaarheid diagrammen aangepast. Bij Hoogtelijn en Documentverwijzing regels verwijderd omdat deze al uit de modellering volgen.|
| 27       | [172](https://github.com/Geonovum/IMG/issues/172) | nieuwe klasse                             | Nieuwe klasse FlyoverZijkant toegevoegd aan GPP Weg.|
