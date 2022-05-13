var isWireframe = false;
function toggleWireframe(){
    isWireframe = !isWireframe;
    document.getElementById('model1').runtime.togglePoints(isWireframe);
    document.getElementById('model2').runtime.togglePoints(isWireframe);
    document.getElementById('model3').runtime.togglePoints(isWireframe);
    document.getElementById('model1').runtime.togglePoints(isWireframe);
    document.getElementById('model2').runtime.togglePoints(isWireframe);
    document.getElementById('model3').runtime.togglePoints(isWireframe);
    enableTexSwitch(!isWireframe);
    setWireframeTex();
    x3dom.reload();
}

var isRunning = false;
function rotateModel(){
    isRunning = !isRunning;
    var animation = document.getElementById('model' + getModelNo() + '__Rotation');
    animation.setAttribute('enabled', isRunning.toString());
    switchPlayButton();
}

var min = 0.1, max = 5;
function adjustSpeed(step){
    var animation = document.getElementById('model' + getModelNo() + '__Rotation');
    var speed = animation.getAttribute('cycleInterval');
    var newSpeed = parseFloat(speed) + step;
    //cover bounds
    newSpeed = Math.max(min, newSpeed);
    newSpeed = Math.min(max, newSpeed);
    //update speed
    animation.setAttribute('cycleInterval', newSpeed.toString());
    rotateModel();
    rotateModel();
}

function switchPlayButton(){
    if(isRunning){
        $('#pauseAnimation').show();
        $('#playAnimation').hide();
    }
    else{
        $('#pauseAnimation').hide();
        $('#playAnimation').show();
    }
}

function changeCamera(camera){
    var cam = document.getElementById('model' + getModelNo() + '__' + camera);
    cam.setAttribute('bind', 'true');
    x3dom.reload();
}

var lightsOn = false;
function toggleLight(){
    lightsOn = !lightsOn;
    var animation = document.getElementById('model' + getModelNo() + '__Lights');
    console.log(animation);
    animation.setAttribute('headlight', lightsOn.toString());
}

var texCount = 0;
async function shuffleProduct(){
    texCount++;
    var animation = document.getElementById('model' + getModelNo() + '__Texture');
    console.log(animation);
    if(animation != null){
        var index = getModelNo();
        var url = await getUrl(index);
        texCount = texCount > Object.keys(url).length - 1 ? 0 : texCount;
        animation.setAttribute('url', url[texCount.toString()]);
    }
}

async function setWireframeTex(){
    if(isWireframe){
        var animation = document.getElementById('model' + getModelNo() + '__Texture');
        console.log(animation);
        var url = await getUrl(4);
        var index = getIsDark() ? 0 : 1;
        animation.setAttribute('url', url[index.toString()]);
    }
    else{
        texCount--;
        shuffleProduct();
    }
}

function enableTexSwitch(isEnabled){
    if(isEnabled){
        $('#texture').removeAttr('disabled');
    }
    else{
        $('#texture').attr('disabled','disabled');
    }
}

function resetTexture(){
    texCount = 0;
}