# Wijzigingen in het Informatiemodel Geluid

In de tabel hieronder Staan de wijzigingen die in deze versie hebben
plaatsgevonden na release 1.0. Er worden hoofdzakelijk wezenlijke veranderingen
genoemd. Dus bv geen correcties op typefouten, spelling of leesbaarheid.

| **Referentie** | **Onderwerp**                       | **Wijziging**                                                                                                                                                  |
|----------------|-------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| IMG-01         | Wegdektype                          | Wegdektype is als enumeratie (ipv Codelijst) meegenomen                                                                                                        |
| IMG-02         | Measure type                        | In het hele model Measure --\> Real omgezet. Dit is gedaan omdat er op het Measure type in het XSD geen facets gezet kunnen worden en xs:decimal wel           |
| IMG-04         | Patroon - Datum                     | Waar patroon "\<jaar\>-\<maand\>-\<dag\>" stond, is het verwijderd                                                                                             |
| IMG-06         | WegdeelGPP                          | Een nieuw attribuutsoort is toegevoegd aan wegdeelGPP. De definitie van het attribuut is toegevoegd. De regel is aan wegdeel GPP toegevoegd.                   |
| IMG-07         | Terrein                             | De regel van "Terrein" is naar de regel van "Geluidproductieplafondobject" aangepast.                                                                          |
| IMG-08         | Lokale identificatie                | De komma’s zijn weg uit de lijst.                                                                                                                              |
| IMG-67         | Geluidgegevenscollectie systematiek | Verplicht gemaakt en bijbehorende enumeratie aangepast (nvt -\> anders)                                                                                        |
|                | Schema                              | patroon hoogteMaaiveld verwijderd, namespace model geprefixed met http:// identificatietype van terrein aangepast (verwijst nu naar locale element NEN3610ID)  |
|                |                                     |                                                                                                                                                                |
|                |                                     |                                                                                                                                                                |
|                |                                     |                                                                                                                                                                |
|                |                                     |                                                                                                                                                                |
