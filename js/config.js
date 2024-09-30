let respecConfig = {
  useLogo: true,
  useLabel: true,
  // title is verplicht! Neem hier de titel van het document op ----------------------
  title: "Informatie Model Geluid (IMGeluid) versie 3.1.1",
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  //specStatus: "wv",                   // Werkversie
  //specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  specType: "IM",                 // Informatie Model
  //-- pubDomain is verplicht! (komt in de URL) -------------------------------------
  pubDomain: "cvgg",
  
  license: "cc-by",            // met deze licentie is het gepubliceerd terwijl cc-by-nd de bedoeling was

  //-- shortName is verplicht! (komt in de URL: kies logische afkorting)--------------
  shortName: "img",
  

  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  publishDate: "2024-08-22",
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we gewoonlijk alleen met datum als onderdeel van de permanente URI.
  //publishVersion: "0.0.2",
  //previousVersion: "0.0.1",
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  previousPublishDate: "2023-10-06",
  previousMaturity: "DEF",
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors: 
  [
    {
      name:       "Pieter Bresters",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    },
    {
      name:       "Wilko Quak",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    },
  ],
  //-- de namen van de auteur(s) ------------------------------------------------------
  //-- vul in: per auteur: name:, company:, companyURL: -------------------------------
  authors: 
  [
    {
      name:       "Gerard Trouborst",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
    {
      name:       "Joeri van Es",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
    {
      name:       "Linda van den Brink",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
    {
      name:       "Azarakhsh Rafiee",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
    {
      name:       "Wilko Quak",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    },
    {
      name:       "Pieter Bresters",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    },
    {
      name:       "Arnoud de Boer",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    },
  ],

  //-- localBiblio: lokale bibliografie, voor verwijzigingen
  //-- NB: kijk eerst naar de beschikbare www.specref.org voor verwijziging 
  localBiblio: 
  {
    MIM: {
      id: "mim10",
      title: "MIM - Metamodel Informatie Modellering",
      href: "https://docs.geostandaarden.nl/mim/mim10/",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2017-06-14"
    },
    "ISO19108-2005": {
      "href": "https://www.iso.org/standard/39891.html",
      "title": "Geographic information -- Rules for application schema",
      "date": "2005-06",
      "publisher": "International Organization for Standardization"
    },
    "ISO19118-2011": {
      "href": "https://www.iso.org/standard/44212.html",
      "title": "Geographic information -- Encoding",
      "date": "2011-10",
      "publisher": "International Organization for Standardization"
    },
    "NEN3610": {
      id: "NEN 3610:2011 nl",
      title: "NEN 3610:2011 nl - Basismodel geo-informatie - Termen, definities, relaties en algemene regels voor de uitwisseling van informatie over aan de aarde gerelateerde ruimtelijke objecten",
      href: "https://www.geonovum.nl/geo-standaarden/nen-3610-basismodel-voor-informatiemodellen",
      status: "Definitief",
      publisher: "NEN",
      date: "2011-03-01"
    },
    "GML": {
      "href": "https://www.opengeospatial.org/standards/gml",
      "title": "Geography Markup Language (GML) Encoding Standard",
      "publisher": "Open Geospatial Consortium Inc.",
      "deliveredBy": [ { "url": "https://www.opengeospatial.org", "shortname": "ogc" } ],
      "versions": [ "gml-20070827" ],
      "id": "gml"
    },
    "UML": {
      "authors": [ "Open Management Group" ],
      "href": "https://www.omg.org/spec/UML/",
      "publisher": "OMG",
      "status": "Normative",
      "title": "OMG Unified Modeling Language",
      "id": "uml",
      "date": "1 March 2015"
    },
  },
  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/Geonovum/IMG",
  // Create PDF and link to file in header (optional):
  alternateFormats: [
      {
          label: "pdf",
          uri: "IMGeluid.pdf",
      },
  ],
};
