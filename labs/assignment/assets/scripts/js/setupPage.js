function swap(selected)
{
    console.log(selected);
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
        document.getElementById("load").click();
    }, 500);
    
}


