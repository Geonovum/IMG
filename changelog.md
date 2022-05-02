# Wijzigingen in het Informatiemodel Geluid

In de tabel hieronder staan de wijzigingen die in deze versie hebben plaatsgevonden na versie 1.2 van 15 november 2021 voor versie 1.3 van maart 2022. Er worden alleen wezenlijke veranderingen
genoemd die invloed hebben op betrokkenen als software-ontwikkelaars. Dus bv geen correcties op typefouten, spelling of leesbaarheid.

|**nummer**|**Github issue** | **Soort wijziging**                    | **Wijziging** |
|----------|-----------------|----------------------------------------|-----------------|
| 1        | geen            | naamswijziging                         | Er is een wijziging die niet is genoemd in de changelog voor definitieve versie 1.2. Het gaat om relatierol "geluid**af**schermspoor" die nu "geluidschermspoor" heet.|
| 2        | 155             | extra attributen voor Optrektoeslagvlak| De attribuutsoorten naam en omschrijving zijn met kardinaliteit [0..1] toegevoegd aan het Objecttype Optrektoeslagvlak. |
| 3        | 148             | geometrietype                          | Voor geluidsbronIndustrie is het geometrietype van GM\_POINT naar GM\_MultiPoint gezet.|
| 4        | 143             | kardinaliteit                          | Kardinaliteit van de relatierol "berekening" tussen Geluidproductieplafondobject en Geluidberekeningobject is [1..2] geworden.|
| 5        | 145             | relatie verwijderd                     | De relatie tussen de objecttypes Geluidaandachtgebied en Geluidberekeningobject is overal in het model verwijderd.|
| 6        | 144             | attribuut verplaatst                   | Het attribuut standaarBodemabsorptiefractie is verplaatst van het Objecttype Industrierekeninstellingen naar het Objecttype Terrein.|
| 7        | 151             | volgorde attributen                    | De volgorde is overal aangepast naar: ID – naam – omschrijving – geometrie – attribuutsoorten die vaker voorkomen – rest. Attribuutsoorten uit overerving staan altijd bovenaan. |
| 8        | 149	     | naamswijziging	                      | Wijziging van de enumeratiewaarde 'luchthaventerrein' naar 'luchthavengebied'. Tevens een toelichting toegevoegd. |
| 9        | 158             | nieuw object + relatie toegevoegd      | Object 'Geluidcontour' opgesplits in twee objecten 'GeluidcontourSet' en 'Geluidcontour'. Tevens definitie en toelichting toegevoegd aan 'GeluidcontourSet'|
| 10       | 159             | definities aangepast                   | De definities van enumeratiewaarden "Besluit" en "Melding" in Documenttype zijn aangepast| 
| 11       | 147             | extra attribuut bij gegevensgroep      | dagdeel toegevoegd aan SnelheidgegevensSpoor.|
| 12       | 160             | regels verplaatst naar toelichting     | Om regels te verminderen, zijn 2 regels bij de documentverwijzing omgezet in een toelichting.|
| 13       | 161             | nieuw subtype                          | Om regels te verminderen, is het subtype Industrieterrein toegevoegd aan het objecttype Terrein en hoeft geometrie alleen nog voor dit subtype opgegegeven te worden.|
| 14       | 162             | gegevensgroep geherstructureerd        | Om regels te verminderen, zijn alle combinaties van dagdelen en motorvoertuigklassen in de gegevensgroep "VerkeersgegevensWeg" aparte attributen in de gegevensgroep geworden.|
| 15       | 163             | attribuut verplicht gesteld            | Om regels te verminderen, is het attribuut uitstralingsrichting van GeluidbronIndustrie verplichtgesteld.|
