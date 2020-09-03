# Wijzigingen in de IMGeluid XML Schema's 

## Tussen versie 07-09-2020 en 03-09-2020 (0.8)
De belangrijkste wijzigingen worden hier opgesomd.

- Alle xsd bestanden zijn samengevoegd tot één bestand IMG_Algemeen.xsd
- GML versie 3.2.2 is meegeleverd (was in vorige versie 3.2.1)

### IMG_Algemeen.xsd
- De namespace prefix van `http://geluidgegevens.nl/algemeen` is aangepast van `Algemeen` naar `img`.
- Geluidgegevenscollectie
    - Element `jaar [0..1]` toegevoegd.
- `Documentverwijzing` is een FeatureType geworden.
- `Geluidemissieobject`
    - Element is abstract gemaakt.
    - `jaar` is hernoemd naar `situatieVan` en optioneel geworden.

Er zijn nog meer gedetailleerde wijzigingen doorgevoerd naar aanleiding van de consultatie. Dit is te vinden in de bijlage bij het consultatieverslag. Het is niet langer mogelijk de verschillende versies van de xsd's in detail te vergelijken vanwege het samenvoegen van de bestanden.

## Tussen versie 14-05-2020 en 07-09-2020
*[Lijst is niet volledig]*
### IMG_Algemeen.xsd

- Geluidgegevenscollectie
    - Element `featureMember [0..*]` toegevoegd waarin alle elementen die van `gml:AbstractFeature` zijn afgeleid mogen voorkomen
    - `monitoringjaar` is verplaatst vanuit `Monitoringresultaat` naar `Geluidgegevenscollectie`    
- Documentverwijzing
    -  verplicht element `naam` toegevoegd
    - `datumInwerkingtreding` is verplicht gemaakt
- Geluidproductieplafondobject is verplaatst van IMGGPP_Algemeen.xsd naar IMG_Algemeen.xsd
- Basisgeluidemissieobject is verplaatst van IMGBGE_Algemeen naar IMG_Algemeen.xsd
- Geluidemissieobject
    - Is een abstract element geworden
    - Het element `jaar` is hernoemd naar `situatieVan`
- Geluidoverdrachtsobject
    - Is hernoemd naar `Geluidoverdrachtobject` (zonder 's')
    - Het element `jaar` is hernoemd naar `situatieVan`
- Plafondcorrectiewaarde
    - Element is toegevoegd aan IMG_Algemeen.xsd
    - Dit vervangt Complextype `GeluidproductieplafondcorrectiepSpoorType` dat nu is verwijderd
- IntensiteitgegevensSpoorType
    - Het element `rijrichting` is verwijderd
- SnelheidgegevensSpoorType
    - Het element `rijrichting` is verwijderd
- SpoorvoertuigcategorieType
    - Enum waarde `Cat13` is toegevoegd

### IMG_BGEAlgemeen.xsd
- Basisgeluidemissieobject is verplaatst van IMGBGE_Algemeen.xsd naar IMG_Algemeen.xsd

### Cumulatief.xsd
- Geluidcontour
    - Type van element `contour` is gewijzigd naar `gml:MultiCurvePropertyType`
    - Kardinaliteit van element `berekening` is gewijzigd naar `[1..1]` (was `[1..*]`)

### IMG_GPPAlgemeen.xsd
- Geluidproductieplafondobject is verplaatst van IMGGPP_Algemeen.xsd naar IMG_Algemeen.xsd

### IMG_GPPSpoor.xsd
- SpoordeelGPP
    - Element `plafondcorrectie` had een kindelement `correctiewaarde` van het type `gml:Measure`, gewijzigd naar simpletype met restrictie `-99,9 tot en met 99,9`. 
- Hoogtelijnspecificatie is verplaatst naar IMGGPP_Spoor.xsd

### IMG_GPPWeg.xsd
- WegdeelGPP
    - Element `plafondcorrectiewaarde` had een kindelement `correctiewaarde` van het type `gml:Measure`, gewijzigd naar simpletype met restrictie `-99,9 tot en met 99,9`. 