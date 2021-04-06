//-- ==================================================================================
//-- File. . . :  config.js
//-- Bevat . . :  Template voor de  configuratie voor respec  
//--              Gebaseerd op https://github.com/Geonovum/respec/wiki
//--              Deze file moet worden neergezet in de root-directory van de 
//--              betreffende standaard. 
//-- Door. . . :  Jan van Gelder 
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-- Log . . . :  20181015 - JvG - Initiele versie 
//-------------------------------------------------------------------------------------

//-- ==================================================================================
var respecConfig = 
{
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "GN-WV",                // Werk Versie
  //specStatus: "GN-CV",              // Consultatie Versie
  //specStatus: "GN-VV",              // Vaststellings Versie
  //specStatus: "GN-DEF",             // Definitieve Versie
  //specStatus: "GN-BASIS",
  //-- specType is verplicht! (activeer 1 van de volgende) ----------------------------
  //specType: "NO",                   // Norm
  //specType: "ST",                   // Standaard
//specType: "IM",                   // Informatie Model
  //specType: "PR",                   // Praktijk Richtlijn
  specType: "HR",                   // HandReiking
  //specType: "WA",                   // Werkafspraak
  //specType: "US",                   // Uitwisselings standaard
  //specType: "PS",                   // Presentatie standaard
  //specType: "AL",                   // Algemeen document
  //specType: "BD",                   // Beheer documentatie
  //-- format is verplicht! -----------------------------------------------------------
  //format: "markdown",                 // altijd "markdown"     
  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  // publishDate: "2020-09-22",  	      // Format is "YYY-MM-DD"
  //-- de namen van de Editor(s) ------------------------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors: 
  [
    {
      name:       "Azarakhsh Rafiee",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
     {
      name:       "Joeri van Es",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
  ],
  //-- de namen van de Author(s) ------------------------------------------------------
  //-- vul in: per Author: name:, company:, companyURL: -------------------------------
  authors: 
  [
    {
      name:       "Joeri van Es",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
    {
      name:       "Azarakhsh Rafiee",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
  ],
  //-- shortName is verplicht! (komt in de URL: kies logische naam) --------------------
  shortName: "end", 	            // Wordt gebruikt in de document URL
  //-- pubDomain is verplicht! (komt in de URL: Activeer 1 van de volgende) ------------
  pubDomain: "cvgg", 	              // Informatiemodel Geluid
  //pubDomain: "mim", 	            // Metamodel Informatie Modellering
  //pubDomain: "bor", 	            // Beheer Openbare Ruimte
  //pubDomain: "bro", 	            // Basisregistratie Ondergrond
  //pubDomain: "imgeo", 	          // IMGeo / BGT
  //pubDomain: "kl", 	              // Kabels en Leidingen
  //pubDomain: "liv", 	            // Landelijke Informatievoorziening Vastgoedgebruik
  //pubDomain: "md", 	              // Metadata
  //pubDomain: "nen3610", 	        // Basismodel NEN3610
  //pubDomain: "oov", 	            // Openbare Orde en Veiligheid
  //pubDomain: "ro", 	              // Ruimtelijke Ordening
  //pubDomain: "serv", 	            // Services
  //pubDomain: "visu", 	            // Visualisatie
  //pubDomain: "wp", 	              // White Paper
  //-- Repositorynaam op GitHub -------------------------------------------------------
  github: "https://github.com/Geonovum/IMG/tree/gh-pages/END",
  //-- Repositorynaam/issues op GitHub ------------------------------------------------
  issueBase: "https://github.com/Geonovum/IMG/issues/",
  //-- edDraftURI: de URI van de werkversie van het document
  edDraftURI: "https://geonovum.github.io/IMG/END",
  //-- license: voor de geldende gebruiksvoorwaarden
  licence: "cc-by-nd",              //-- bronvermelding, geen afgeleide werken (default)
  // licence: "cc0",                //-- Public Domain Dedication
  // licence: "cc-by",              //-- Attribution, met bronvermelding
  
  //-- localBiblio: lokale bibliografie, voor verwijzigingen
  //-- NB: kijk eerst naar de beschikbare www.specref.org voor verwijziging 
  
  localBiblio:
  {
    "CITAAT":
      {
        title:      "Titel van het Citaat",
        href:       "http://url van de publicatie",
        status:     "versie van de publicatie",
        publisher:  "naam van de publiceerder",
        company:    "eventueel naam van bedrijf",
    },
    MIM: {
      id: "MIM",
      title: "MIM - Metamodel Informatie Modellering",
      href: "https://docs.geostandaarden.nl/mim/mim10/",
      status: "Definitief",
      publisher: "Geonovum",
      date: "2017-06-14"
    },
    "Directive_2002/49/EC": {
          id: "Directive_2002/49/EC",
      title: "Directive 2002/49/EC of the European Parliament and of the Council of 25 June 2002 relating to the assessment and management of environmental noise",
      status: "Definitief",
      publisher: "the Commission in the Conciliation Committee on the Directive relating to the assessment and management of environmental noise",
      date: "2002-06-25"
    },
    "Directive_2007/2/EC": {
      id: "Directive_2007/2/EC",
      title: "Directive 2007/2/EC of the European Parliament and of the Council of 14 March 2007 establishing an Infrastructure for Spatial Information in the European Community",
      status: "Definitief",
      publisher: "European Parliament and of the Council",
      date: "2007-03-14"
    },
    "ISO19108-2005": {
      "href": "https://www.iso.org/standard/39891.html",
      "title": "Geographic information -- Rules for application schema",
      "date": "2005-06",
      "publisher": "International Organization for Standardization"
    },
  },

  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  //previousPublishDate: "2020-05-14",    	    // Format is "YYYY-MM-DD"
  //previousMaturity: "GN-DEF",                 // kies 1 van deze 3 regels
  //previousMaturity: "CV",                   // kies 1 van deze 3 regels  	  
  //previousMaturity: "VV",  	                // kies 1 van deze 3 regels

  //-- Optionele parameters:
  //emailComments: "mim@geonovum.nl",         // reactie mailadres, alleen bij CV!
  //subtitle: "iets",                         // Subtitel van het document
  //maxTocLevel: 3,                           // Aantal niveau's ToC, default is 0
};
