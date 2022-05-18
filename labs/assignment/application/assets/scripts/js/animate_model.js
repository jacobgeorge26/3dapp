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

function resetWireframe(){
    isWireframe = true;
    toggleWireframe();
}

function resetModel(){
    resetFalling();
    rotateModel(true);
    toggleLight(true);
    resetCamera();
}

var isRunning = false;
var noRotations = { "1": 1, "2": 4, "3": 1};
function rotateModel(overrideRunning = null){
    isRunning = overrideRunning != null && overrideRunning ? true : !isRunning;
    for(var i=1;i<=noRotations[getModelNo()];i++){
        var animation = document.getElementById('model' + getModelNo() + '__Rotation' + i.toString());     
        animation.setAttribute('enabled', isRunning.toString());
    }
    switchPlayButton();
}

var min = 0.1, max = 5;
function adjustSpeed(step){
    for(var i=1;i<=noRotations[getModelNo()];i++){
        var animation = document.getElementById('model' + getModelNo() + '__Rotation' + i.toString());
        var speed = animation.getAttribute('cycleInterval');
        var newSpeed = parseFloat(speed) + step;
        //cover bounds
        newSpeed = Math.max(min, newSpeed);
        newSpeed = Math.min(max, newSpeed);
        //update speed
        animation.setAttribute('cycleInterval', newSpeed.toString());
    } 
    rotateModel();
    rotateModel();
}

function switchPlayButton(){
    if(isRunning){
        $('#pauseAnimation').show();
        $('#playAnimation').hide();
        $('#fast').removeAttr('disabled');
        $('#slow').removeAttr('disabled');
    }
    else{
        $('#pauseAnimation').hide();
        $('#playAnimation').show();
        $('#fast').attr('disabled','disabled');
        $('#slow').attr('disabled','disabled');
    }
}

var isFalling = false;
function fallOver(){
    isFalling = !isFalling;
    if(isFalling){
        rotateModel(false);
        $('#playAnimation').attr('disabled','disabled');
        for(var i=1;i<=noRotations[getModelNo()];i++){
            var animation = document.getElementById('model' + getModelNo() + '__Topple' + i.toString());     
            animation.setAttribute('enabled', 'true');
        }
         $('#touchSensor').show();
    }
    else{
        for(var i=1;i<=noRotations[getModelNo()];i++){
            var animation = document.getElementById('model' + getModelNo() + '__Topple' + i.toString());     
            animation.setAttribute('enabled', 'false');
        }
        $('#touchSensor').hide();
        $('#playAnimation').removeAttr('disabled');
        rotateModel(true);
    }

}

function resetFalling(){
    isFalling = false;
    for(var i=1;i<=noRotations[getModelNo()];i++){
        var animation = document.getElementById('model' + getModelNo() + '__Topple' + i.toString());     
        animation.setAttribute('enabled', 'false');
    }
    $('#touchSensor').hide();
    $('#playAnimation').removeAttr('disabled');
}

function changeCamera(camera){
    var cam = document.getElementById('model' + getModelNo() + '__' + camera);
    cam.setAttribute('bind', 'true');
    x3dom.reload();
    //update buttons
    $('#Front').removeAttr('disabled');
    $('#Back').removeAttr('disabled');
    $('#Above').removeAttr('disabled');
    $('#Below').removeAttr('disabled');
    $('#'+camera).attr('disabled','disabled');
}

var lightsOn = false;
function toggleLight(fixedOn = false){
    lightsOn = !lightsOn;
    var animation = document.getElementById('model' + getModelNo() + '__Lights');
    var isOn = animation.getAttribute('headlight') == 'true';
    lightsOn = fixedOn ? true : !isOn;
    animation.setAttribute('headlight', lightsOn.toString());
}

var texCount = 0;
var noTextures = { "1": 1, "2": 4, "3": 2};
async function shuffleProduct(){
    texCount++;
    var index = getModelNo();
    var url = await getUrl(index);
    var isComp = false;
    for(var i=1;i<=noTextures[getModelNo()];i++){
        var animation = document.getElementById('model' + getModelNo() + '__Texture' + i.toString());
        if(animation != null){
            texCount = texCount > Object.keys(url).length - 1 ? 0 : texCount;
            var nextTexCount = texCount + 1 > Object.keys(url).length - 1 ? 0 : texCount + 1;
            var nextTex = url[nextTexCount.toString()][i - 1];
            isComp = nextTex.includes("pepsi") || isComp;
            animation.setAttribute('url', url[texCount.toString()][i - 1]);
        }
    }
    if(isComp && !isWireframe){
        $('#texture').attr('data-target', '#compModal');
    }
    else{
        $('#texture').removeAttr('data-target');
    }
}

async function setWireframeTex(){
    if(isWireframe){
        for(var i=1;i<=noTextures[getModelNo()];i++){
            var animation = document.getElementById('model' + getModelNo() + '__Texture' + i.toString());
            var url = await getUrl(4);
            var index = getIsDark() ? 0 : 1;
            animation.setAttribute('url', url[index.toString()]);
        }
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
    resetWireframe();
}

function resetCamera(){
    changeCamera("Front");
}