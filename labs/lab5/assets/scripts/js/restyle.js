var counter = 0;

function changeLook(){
    counter += 1;
    switch(counter){
        case 1:
            document.getElementById('body').style.backgroundColor = 'lightblue';
            // document.getElementById('header').style.backgroundColor = '#FF0000';
            // document.getElementById('footer').style.backgroundColor = '#FF9900';
        break;
        case 2:
            counter = 0;
            document.getElementById('body').style.backgroundColor = 'lightgrey';
            // document.getElementById('header').style.backgroundColor = 'chocolate';
            // document.getElementById('footer').style.backgroundColor = 'dimgrey';
        break;
    }
}