XSDFILE = ../xsd/4.0.0/IMGeluid-4.0.0-rc1.xsd
MIMFILE = ../mim-ex/IMGeluid.xml

all: mimreport.html xsdreport.html

mimreport.html: mim2report.xsl $(MIMFILE)
	xsltproc mim2report.xsl  $(MIMFILE) > mimreport.html
xsdreport.html: xsd2report.xsl $(XSDFILE)
	xsltproc xsd2report.xsl  $(XSDFILE) > xsdreport.html
clean:
	rm -f xsdreport.html mimreport.html
