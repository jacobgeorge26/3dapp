var counter = 0;

function changeLook(){
    counter += 1;
    switch(counter){
        case 1:
            document.getElementById('body').style.backgroundColor = 'lightblue';
        break;
        case 2:
            counter = 0;
            document.getElementById('body').style.backgroundColor = 'lightgrey';
        break;
    }
}