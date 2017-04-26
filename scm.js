// www.web-toolbox.net , W. Jansen
// Als �bergabeparameter wird die bildquelle,breite und h�he �bergeben
// hand over parameters for source,width and height
// ----------------------------------------------------------
// im Head
// ----------------------------------------------------------
// <script type="text/javascript" language="JavaScript">
//
// ----------------------------------------------------------
// im Body
// ----------------------------------------------------------
//
// Als �bergabeparameter wird die bildquelle,breite und h�he �bergeben
// hand over parameters for source,width and height
//
// <a href="Javascript:FotoWindow('foto-gross.jpg','480','360');">
// <img src="foto-klein.jpg" width="100" height="75" border="1" alt="click to enlarge"></a>
//
function FotoWindow(bildurl,b,h)
{
var eigenschaft,sbreite,shoehe,fenster,b,h;

// stellt die Bildschirmabmessungen fest
// find window size
var ns6 = (!document.all && document.getElementById);
var ie4 = (document.all);
var ns4 = (document.layers);

if(ns6||ns4) {
sbreite = innerWidth;
shoehe = innerHeight;
}
else if(ie4) {
sbreite = document.body.clientWidth;
shoehe = document.body.clientHeight;
}

x = (sbreite-b)/2;
y = (shoehe-h)/2;

eigenschaften="left="+x+",top="+y+",screenX="+x+",screenY="+y+",width="+b+",height="+h+",menubar=no,toolbar=no";

fenster=window.open("","",eigenschaften);
fenster.focus();
fenster.document.open();
with (fenster) {
  document.write("<html><head>");
  document.write("<script type='text/javascript' language='JavaScript'>");
  // bei click  schliessen , on click close
  document.write("function click() { window.close(); } ");
  document.write("document.onmousedown=click ");
  document.write("</script>");
  document.write("<title>Klick für Fenster schliessen</title></head>");
  // bei Focusverlust schliessen, close if window looses focus
  // Zeile ge�ndert Aug 2003 (Dreamweaver machte Probleme)
  document.write("<" + "body onblur='window.close()';");
  document.write("marginwidth='0' marginheight='0' leftmargin='0' topmargin='0'>");
  document.write("<center>");
  document.write("<img src='"+ bildurl +"' border='0'>");
  document.write("<center>");
  document.write("</body></html>");
  fenster.document.close();
}
}
