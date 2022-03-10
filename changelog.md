# Wijzigingen in het Informatiemodel Geluid

In de tabel hieronder staan de wijzigingen die in deze versie hebben plaatsgevonden na versie 1.2 van 15 november 2021 voor versie 1.3 van maart 2022. Er worden alleen wezenlijke veranderingen
genoemd die invloed hebben op betrokkenen als software-ontwikkelaars. Dus bv geen correcties op typefouten, spelling of leesbaarheid.

|**nummer**|**Github issue** | **Onderwerp** | **Wijziging** |
|----------|-----------------|----------------------------------------|-----------------|
| 1        | geen            | naamswijziging                         | Er is een wijziging die niet is genoemd in de changelog voor definitieve versie 1.2. Het gaat om relatierol "geluid**af**schermspoor" die nu "geluidschermspoor" heet.|
| 2        | 155             | extra attributen voor Optrektoeslagvlak| De attribuutsoorten naam en omschrijving zijn met kardinaliteit [0..1] toegevoegd aan het Objecttype Optrektoeslagvlak. |
| 3        | 148             | geometrietype                          | Voor geluidsbronIndustrie is het geometrietype van GM_POINT naar GM_MultiPoint gezet.|
| 4        | 143             | kardinaliteit                          | Kardinaliteit van de relatierol "berekening" tussen Geluidproductieplafondobject en Geluidberekeningobject is [1..2] geworden.|
| 5        | 145             | relatie verwijderd                     | De relatie tussen de objecttypes Geluidaandachtgebied en Geluidberekeningobject is overal in het model verwijderd.|
| 6        | 144             | attribuut verplaatst                   | Het attribuut standaarBodemabsorptiefractie is verplaatst van het Objecttype Industrierekeninstellingen naar het Objecttype Terrein.|
| 7        | 151             | volgorde attributen                    | De volgorde is overal aangepast naar: ID – naam – omschrijving – geometrie – attribuutsoorten die vaker voorkomen – rest. Attribuutsoorten uit overerving staan altijd bovenaan. |
| 8        ||||
