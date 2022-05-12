function swap(selected)
{
    document.getElementById('home').style.display = 'none';
    document.getElementById('model').style.display = 'none';

    document.getElementById(selected).style.display = 'block';
    getData();
    if(selected=='model'){
        loadGallery();
    }

    document.getElementById("restyle").onclick=async ()=>{ changeLook()};
}

function loadPage(){
    setTimeout(function(){
        swap('home');
        document.getElementById("restyle").click();
    }, 250);    
}

$(document).ready(function() {
    setTimeout(function(){
        selectModel();
    }, 500);	
});

function selectModel(index = 1) {
    //MODELS
    $('#model1').hide();
    $('#model2').hide();
    $('#model3').hide();
    $('#model' + index.toString()).show();

    //DESCRIPTION
    $('#info_model1').hide();
    $('#info_model2').hide();
    $('#info_model3').hide();
    $('#info_model' + index.toString()).show();
    x3dom.reload();
}

var isWireframe = false;
function toggleWireframe(){
    isWireframe = !isWireframe;
    document.getElementById('model1').runtime.togglePoints(isWireframe);
    document.getElementById('model2').runtime.togglePoints(isWireframe);
    document.getElementById('model3').runtime.togglePoints(isWireframe);
    x3dom.reload();
}




