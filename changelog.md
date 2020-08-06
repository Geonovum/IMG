# Wijzigingen in het Informatiemodel Geluid 

## Tussen versie 14-05-2020 en 07-09-2020

<aside class='note'>Lijst is nog niet volledig</aside>

### Domein Algemeen

**Documentverwijzing**
- Verplichte attribuutsoort `naam` toegevoegd waarin de officiële naam van het document is opgenomen
- `datumInwerkingtreding` is een verplichte attribuutsoort geworden

**Geluidproductieplafondobject** is verplaatst van domein GPP Algemeen naar domein Algemeen.

**Basisgeluidemissieobject** is verplaatst van domein BGE Algemeen naar domein Algemeen.

**Geluidemissieobject**
- Is een abstract objecttype geworden, zodat het in de uitwisseling niet gebruikt kan worden. Alleen objecttypen die er een specialisatie van zijn kunnen gebruikt worden.
- De attribuutsoort `jaar` is hernoemd naar `situatieVan`

**Geluidoverdrachtsobject**
- Is hernoemd naar `Geluidoverdrachtobject` (zonder 's')
- De attribuutsoort `jaar` is hernoemd naar `situatieVan`

**Plafondcorrectiewaarde**
- Objecttype is toegevoegd aan domein Algemeen en vervangt `GeluidproductieplafondcorrectiepSpoorType`

**IntensiteitgegevensSpoorType**
- De attribuutsoort `rijrichting` is verwijderd

**SnelheidgegevensSpoorType**
- De attribuutsoort `rijrichting` is verwijderd

**SpoorvoertuigcategorieType**
- Enumeratie waarde `Cat13` is toegevoegd

### Domein BGE Algemeen
**Basisgeluidemissieobject** is verplaatst van domein BGE Algemeen naar domein Algemeen.

### Domein Cumulatief
**Geluidcontour**
- Geometrietype van `contour` is gewijzigd naar `GM_MultiCurve`
- Kardinaliteit van attribuutsoort `berekening` is gewijzigd naar `[1..1]` (was `[1..*]`)

### Domein GPP Algemeen
**Geluidproductieplafondobject** is verplaatst van Domein GPP Algemeen naar domein Algemeen.

### Domein GPP Spoor
**SpoordeelGPP**
- De waarde van attribuutsoort `plafondcorrectie` is gewijzigd van het type `GM_Measure` naar een getal tussen `-99,9 en 99,9`.
- Hoogtelijnspecificatie is verplaatst naar domein GPP Spoor

### Domein GPP Weg
**WegdeelGPP**
- De waarde van attribuutsoort `plafondcorrectiewaarde` is gewijzigd van het type `GM_Measure` naar een getal tussen `-99,9 en 99,9`.