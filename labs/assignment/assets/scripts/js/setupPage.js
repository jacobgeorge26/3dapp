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

function selectModel() {
    $('#model3D').show();
    x3dom.reload();
}



