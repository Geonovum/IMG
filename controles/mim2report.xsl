<?xml version="1.0"?> 
<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:mim="http://www.geostandaarden.nl/mim/mim-core/1.2"
    xmlns:mim-ext="http://www.geostandaarden.nl/mim/mim-ext/1.0"
    xmlns:mim-ref="http://www.geostandaarden.nl/mim/mim-ref/1.0"
    version="1.1">
<xsl:output method="html" indent="yes"/>


<!-- documentroot -->
<xsl:template match="/mim:Informatiemodel">
  <html>
    <head>
      <link rel="stylesheet" href="geonovum.css" />
    </head>
    <body>
      
      <h1>Report on document</h1>
      <h2>Alle restricties in het xsd</h2>
      <p>Deze tabel bevat alle types in het xsd samen met de bijbehorende restricties</p>
      
      <table>
        <tr>
          <td><b>klasse</b></td>
          <td><b>attribuut</b></td>
          <td><b>type</b></td>
          <td><b>kard</b></td>
          <td><b>lengte</b></td>
          <td><b>patroon</b></td>
          <td><b>formeel patroon</b></td>
          <td><b>meeteenheid</b></td>
          <td><b>minIncl</b></td>
          <td><b>maxIncl</b></td>
        </tr>
        
        <xsl:apply-templates select='//mim:DataElement|//mim:Attribuutsoort' mode='report' />
      </table>
      
    </body>
  </html>
</xsl:template>

<!-- author in documentroot -->
<xsl:template match="mim:DataElement|mim:Attribuutsoort" mode='report'>
<tr>
  <td><xsl:value-of select="../../mim:naam"/></td>
  <td><xsl:value-of select="mim:naam"/></td>
  <td><xsl:value-of select="mim:type/mim-ext:ConstructieRef|mim:type/mim-ref:DatatypeRef|mim:type/mim:Datatype"/></td>
  <td><xsl:value-of select="mim:kardinaliteit"/></td>
  <td><xsl:value-of select="mim:lengte"/></td>
  <td><xsl:value-of select="mim:patroon"/></td>
  <td><xsl:value-of select="mim:formeelPatroon"/></td>
  <td><xsl:value-of select="mim-ext:kenmerken/mim-ext:Kenmerk[@naam='Meeteenheid' or @naam='meeteenheid']"/> </td>
  <td><xsl:value-of select="mim:minimumwaardeInclusief"/> </td>
  <td><xsl:value-of select="mim:maximumwaardeInclusief"/></td>
</tr>
</xsl:template>

</xsl:stylesheet>
