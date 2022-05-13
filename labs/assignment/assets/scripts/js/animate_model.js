var isWireframe = false;
function toggleWireframe(){
    isWireframe = !isWireframe;
    document.getElementById('model1').runtime.togglePoints(isWireframe);
    document.getElementById('model2').runtime.togglePoints(isWireframe);
    document.getElementById('model3').runtime.togglePoints(isWireframe);
    document.getElementById('model1').runtime.togglePoints(isWireframe);
    document.getElementById('model2').runtime.togglePoints(isWireframe);
    document.getElementById('model3').runtime.togglePoints(isWireframe);
    x3dom.reload();
}

var isRunning = false;
function rotateModel(){
    isRunning = !isRunning;
    var animation = document.getElementById('model__Rotation');
    animation.setAttribute('enabled', isRunning.toString());
    switchPlayButton();
}

var min = 0.1, max = 5;
function adjustSpeed(step){
    var animation = document.getElementById('model__Rotation');
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
    document.getElementById('model__' + camera).setAttribute('bind', 'true');
}

var lightsOn = false;
function toggleLight(){
    lightsOn = !lightsOn;
    var animation = document.getElementById('model__Lights');
    animation.setAttribute('headlight', lightsOn.toString());
}

var texCount = 0;
async function shuffleProduct(){
    texCount++;
    var animation = document.getElementById('model__Texture');
    var url = await getUrl(getModelNo());
    texCount = texCount > Object.keys(url).length - 1 ? 0 : texCount;
    animation.setAttribute('url', url[texCount.toString()]);
}

function resetTexture(){
    texCount = 0;
}