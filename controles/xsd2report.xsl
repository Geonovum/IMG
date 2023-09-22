<?xml version="1.0"?> 
<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    version="1.1">
<xsl:output method="html" indent="yes"/>

<!-- documentroot -->
<xsl:template match="/xs:schema">
  <html>
    <head>
      <link rel="stylesheet" href="geonovum.css" />
    </head>
    <body>
      
      <h1>Report on document</h1>
      <h2>Alle restricties in het xsd</h2>
      <p>Deze tabel bevat alle Decimal types in het xsd samen met de bijbehorende restricties</p>
      
      <table>
        <tr>
          <td><b>klasse</b></td>
          <td><b>attribuut</b></td>
          <td><b>mininclusive</b></td>
          <td><b>maxInclusive</b></td>
          <td><b>fractiondigits</b></td>
        </tr>
        
        <xsl:apply-templates select="//xs:restriction[@base='xs:decimal']" mode="printhtml"/>
      </table>
      
    </body>
  </html>
 </xsl:template>
  
<xsl:template match="xs:restriction" mode="printrestriction">| <xsl:value-of select="ancestor::xs:complexType/@name"/> | <xsl:value-of select="../../@name"/>  | <xsl:value-of select="xs:minInclusive/@value"/> | <xsl:value-of select="xs:maxInclusive/@value"/> |<xsl:value-of select="xs:fractionDigits/@value"/> |
</xsl:template>
  
  
  <xsl:template match="xs:restriction" mode="printhtml">
   <tr>
     <td><xsl:value-of select="ancestor::xs:complexType/@name"/></td>
     <td><xsl:value-of select="../../@name"/></td>
     <td><xsl:value-of select="xs:minInclusive/@value"/></td>
     <td><xsl:value-of select="xs:maxInclusive/@value"/></td>
     <td><xsl:value-of select="xs:fractionDigits/@value"/></td>
   </tr>
  </xsl:template>

</xsl:stylesheet>
