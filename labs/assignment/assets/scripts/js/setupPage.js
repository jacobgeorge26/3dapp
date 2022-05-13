function swap(selected)
{
    document.getElementById('home').style.display = 'none';
    document.getElementById('model').style.display = 'none';

    document.getElementById(selected).style.display = 'block';
    getData();
    if(selected=='model'){
        loadGallery();
    }

    document.getElementById("restyle").onclick=async ()=>{ changeLook(); closeToggle()};
}

function loadPage(){
    setTimeout(function(){
        swap('home');
        document.getElementById("restyle").click(true);
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

    //TITLE
    $('#info_title_model1').hide();
    $('#info_title_model2').hide();
    $('#info_title_model3').hide();
    $('#info_title_model' + index.toString()).show();

    //DESCRIPTION
    $('#info_description_model1').hide();
    $('#info_description_model2').hide();
    $('#info_description_model3').hide();
    $('#info_description_model' + index.toString()).show();

    //X3D DESCRIPTION
    $('#description_x3d1').hide();
    $('#description_x3d2').hide();
    $('#description_x3d3').hide();
    $('#description_x3d'+ index.toString()).show();

    switchPlayButton();

    x3dom.reload();
}

function closeToggle(){
    var toggle = document.getElementById("toggle");
    var isOpen = !toggle.classList.contains("collapsed");
    if(isOpen){
        toggle.click();
    }
}




