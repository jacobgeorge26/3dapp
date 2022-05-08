function swap(selected)
{
    document.getElementById('home').style.display = 'none';
    document.getElementById('coke').style.display = 'none';
    document.getElementById('sprite').style.display = 'none';
    document.getElementById('pepper').style.display = 'none';

    document.getElementById(selected).style.display = 'block';
    height('gallery', 'model');
}

function height(input, toCopy){
    var model = document.defaultView.getComputedStyle(document.getElementById(toCopy));
    document.getElementById(input).style.height = model.height
}


function divideHeight(input, division){
    var object = document.defaultView.getComputedStyle(document.getElementById(input));
    object.lineHeight = object.height / division;
}