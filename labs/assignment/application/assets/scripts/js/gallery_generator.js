function loadGallery(){
    var xmlHttp = new XMLHttpRequest();

    var htmlCode = "";

    var response;
    var send = "./application/view/hook.php";

    xmlHttp.open("GET", send, true);
    xmlHttp.send(null);

    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4){
            response = xmlHttp.responseText.split("~");

            for(var i=0;i<response.length;i++){
                htmlCode += '<div id="col'+ (i+1).toString() +'">';
                htmlCode += '<a href="javascript:swap(\'model\')" onclick="selectModel('+ (i+1).toString() +')">';
                htmlCode += '<img class="card-img-top gallery-img" src="./application/assets/images/gallery_images/' + response[i] + '"/>';
                htmlCode += '</a>';
                htmlCode += '</div>';
            }
            document.getElementById('model_gallery').innerHTML = htmlCode;
        }
    }
}