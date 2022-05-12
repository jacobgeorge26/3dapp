var counter = 0;

async function changeLook(reset = false){
    counter = reset ? 0 : counter + 1;
    var r = document.querySelector(':root');
    switch(counter){
        case 1:
            var css = await getOriginalCSS();
        break;
        case 2:
            var css = await getNewCSS();   
            counter = 0;
        break;
    }
    
    
    for (var [key, value] of Object.entries(css)) {
        r.style.setProperty(key, value);
    }

}