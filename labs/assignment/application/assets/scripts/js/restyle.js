var counter = 0;

async function changeLook(reset = false){
    counter = reset ? 0 : counter + 1;
    var r = document.querySelector(':root');
    switch(counter){
        case 1:
            var css = await getOriginalCSS();
            switchThemeButton();
        break;
        case 2:
            var css = await getNewCSS();   
            switchThemeButton();
            counter = 0;
        break;
    }
    
    
    for (var [key, value] of Object.entries(css)) {
        r.style.setProperty(key, value);
    }

}

function switchThemeButton(){
    if(counter == 1){
        //is light - show moon
        document.getElementById("isDark").style.display = 'none';
        document.getElementById("isLight").style.display = 'block';
    }
    else{
        //is dark - show sun
        document.getElementById("isLight").style.display = 'none';
        document.getElementById("isDark").style.display = 'block';
    }
    setWireframeTex();
}

function getIsDark(){
    return counter == 1 ? false : true;
}