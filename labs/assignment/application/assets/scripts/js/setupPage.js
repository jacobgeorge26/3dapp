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
    document.getElementById("texture").onclick=async ()=>{ shuffleProduct()};
}

var data;
function loadPage(){
    var selection = $(this).text();
    getTextData(selection);
    setTimeout(function(){
        swap('home');
        document.getElementById("restyle").click(true);
    }, 500);    
}

$(document).ready(function() {
    setTimeout(function(){
        selectModel(modelNo, true);
    }, 600);	
});

var modelNo = 1;
function selectModel(index = 1, skipReset = false) {
    //sort out variables
    modelNo = index;
    if(!skipReset) resetTexture();

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

    if(!skipReset) {
        resetModel();
    }
  
    x3dom.reload();
}

function getModelNo(){
    return modelNo;
}

function closeToggle(){
    var toggle = document.getElementById("toggle");
    var isOpen = !toggle.classList.contains("collapsed");
    if(isOpen){
        toggle.click();
    }
}

async function getTextData(selection){
    var data = await getDBData(selection);
    return data;
}




