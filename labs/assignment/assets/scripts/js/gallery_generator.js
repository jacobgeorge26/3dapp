function loadGallery(){
    var xmlHttp = new XMLHttpRequest();

    var numberOfColumns = 4;

    var htmlCode = "";

    var response;
    var send = "assets/scripts/php/hook.php";

    xmlHttp.open("GET", send, true);
    xmlHttp.send(null);

    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4){
            // alert(xmlHttp.responseText);

            response = xmlHttp.responseText.split("~");

            for(var i=0;i<response.length;i++){
                htmlCode += '<a href ="' + 'assets/images/gallery_images/' + response[i] + '">';
                htmlCode += '<img class="card-img-top img-thumbnail" src="assets/images/gallery_images/' + response[i] + '"/>';
                htmlCode += '</a>';
            }
            document.getElementById('model_gallery').innerHTML = htmlCode;
        }
    }
}