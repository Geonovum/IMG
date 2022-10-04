# Wijzigingen in het Informatiemodel Geluid

Hieronder staan de wijzigingen die in deze versie hebben plaatsgevonden na versie 1.2 van 15 november 2021 voor versie 2.0. Er worden alleen wezenlijke veranderingen
genoemd die invloed hebben op betrokkenen als software-ontwikkelaars. Dus bv geen correcties op typefouten, spelling of leesbaarheid.

## wijzigingen in versie 2.1

|**Github issue** | **Wijziging** |
|-----------------|---------------|
|[72](https://github.com/Geonovum/IMG/issues/72)     | Regel toegevoegd die zegt dat bij zwevende geluidschermen onderkantScherm verplicht is.|
|[143](https://github.com/Geonovum/IMG/issues/143)   | Ook de kardinaliteit van Monitoringresultaat.geluidberekingobject op [1..2] gezet. Deze wijziging resulteert in een wijziging van het XSD.|
|[161](https://github.com/Geonovum/IMG/issues/161)   | Regel toegevoegd aan Terrein zodat een gewoon terrein niet als industrieterrein mag worden gelabelled.|
|[175](https://github.com/Geonovum/IMG/issues/175)   | Attribuut identificatie is toegevoegd aan Geluidcontour. Deze wijziging resulteert in een wijziging van het XSD.|
|[176](https://github.com/Geonovum/IMG/issues/176)   | Verwijzing naar het GML Simple Feature profile opgenomen in de standaard.|
|[178](https://github.com/Geonovum/IMG/issues/178)   | UML constructies overerving van regels en abstracte klasse beter uitgelegd.|
|[179](https://github.com/Geonovum/IMG/issues/179)   | Toegestane waarden Industrieterrein.standaard­Bodemabsorptiefractie attribuut op juiste plaats gezet.|
|[180](https://github.com/Geonovum/IMG/issues/180)   | Bij Geluidschermdeel.onderkantScherm  regels verplaatst van toelichtingveld naar het regels veld van Geluidschermdeel.|


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
| 26       |                                                   | Redactionele wijzigingen                  | Omwille van de leesbaarheid diagrammen aangepast. Bij Hoogtelijn en Documentverwijzing regels verwijderd omdat deze al uit modellering.|
| 27       | [172](https://github.com/Geonovum/IMG/issues/172) | nieuwe klasse                             | Nieuwe klasse FlyoverZijkant toegevoegd aan GPP Weg.|