function swap(selected)
{
    document.getElementById('home').style.display = 'none';
    document.getElementById('model').style.display = 'none';

    document.getElementById(selected).style.display = 'block';
    getData();
    if(selected=='model'){
        loadGallery();
    }
}

function loadPage(){
    setTimeout(function(){
        swap('home');
    }, 500);
    
}

$(document).ready(function() {
    setTimeout(function(){
        selectModel();
    }, 1000);	
});

function selectModel(index = 1) {
    $('#model1').hide();
    $('#model2').hide();
    $('#model3').hide();
    $('#model' + index.toString()).show();
    x3dom.reload();
}




