function getXMLHttpRequest () {
    var xmlHttp = null;
    
    try {
        xmlHttp = new XMLHttpRequest();
    }
    catch (e) {
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");   
        }
        catch (e) {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");   
        }
    }
    return xmlHttp;
}

function addToList(url){

  var list;
  try {
    list = JSON.parse(localStorage['listaBloccati']);
  } 
    catch (ex) {
    list = new Array();
  }
  list.push(url);
  localStorage['listaBloccati'] = JSON.stringify(list);
}