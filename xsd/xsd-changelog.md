# Wijzigingen in de IMGeluid XML Schema's 

## Tussen versie 14-05-2020 en 07-09-2020
*[Lijst is nog niet volledig]*
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