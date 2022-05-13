var ids = {
    "home": 0,
    "mod1": 1,
    "mod2": 2,
    "mod3": 3,
    "urls": 4,
    "brands":5,
    "imgs":6,
    "info":7,
    "oldCss":8,
    "newCss":9,
    "x3dDesc":10,
    "textures1":11,
    "textures2":12,
    "textures3":13
    };

$(document).ready(function(){
    $.getJSON('./assets/models/data.json', function(jsonObj){
        //console.log(jsonObj);
        //getHtml(jsonObj);
    });
});

function getData(){
    jQuery.getJSON('./assets/models/data.json', function(jsonObj){
        getHtml(jsonObj);
    });
}

function getHtml(jsonObj){
    //HOME
    $('#title_home').html('<h2>' + jsonObj.pageTextData[ids["home"]].title + '</h2>');
    $('#description_home').html('<p>' + jsonObj.pageTextData[ids["home"]].description + '</p>');

    //MODEL 1
    $('#title_model1').html('<h3 class="card-title">' + jsonObj.pageTextData[ids["mod1"]].title + '</h3>');
    $('#description_model1').html('<p class="card-text">' + jsonObj.pageTextData[ids["mod1"]].description + '</p>');
    $('#info_title_model1').html('<h3 class="card-title">' + jsonObj.pageTextData[ids["mod1"]].title + '</h3>');
    $('#info_description_model1').html('<p class="card-text">' + jsonObj.pageTextData[ids["mod1"]].description + '</p>');

    //MODEL 2
    $('#title_model2').html('<h3 class="card-title">' + jsonObj.pageTextData[ids["mod2"]].title + '</h3>');
    $('#description_model2').html('<p class="card-text">' + jsonObj.pageTextData[ids["mod2"]].description + '</p>');
    $('#info_title_model2').html('<h3 class="card-title">' + jsonObj.pageTextData[ids["mod2"]].title + '</h3>');
    $('#info_description_model2').html('<p class="card-text">' + jsonObj.pageTextData[ids["mod2"]].description + '</p>');

    //MODEL 3
    $('#title_model3').html('<h3 class="card-title">' + jsonObj.pageTextData[ids["mod3"]].title + '</h3>');
    $('#description_model3').html('<p class="card-text">' + jsonObj.pageTextData[ids["mod3"]].description + '</p>');
    $('#info_title_model3').html('<h3 class="card-title">' + jsonObj.pageTextData[ids["mod3"]].title + '</h3>');
    $('#info_description_model3').html('<p class="card-text">' + jsonObj.pageTextData[ids["mod3"]].description + '</p>');

    //GITHUB LINKS
    $archive = '<a href="'+ jsonObj.pageTextData[ids["urls"]].archive + '"><i class="fa fa-pencil-square-o fa-2x social-icon"></i></a>';
    $models = '<a href="'+ jsonObj.pageTextData[ids["urls"]].models + '"><i class="fa fa-file-code-o fa-2x social-icon"></i></a>';
    $github = '<a href="'+ jsonObj.pageTextData[ids["urls"]].mainRepo + '"><i class="fa fa-github-square fa-2x social-icon"></i></a>';
    $('#social-links').html($archive + $models + $github);

    //DROPDOWN ITEMS
    $item1 = '<li><a class="dropdown-item" href="javascript:swap(\'model\')" onclick="closeToggle(); selectModel(1)">' + jsonObj.pageTextData[ids["brands"]].brand1 + '</a></li>';
    $item2 = '<li><a class="dropdown-item" href="javascript:swap(\'model\')" onclick="closeToggle(); selectModel(2)">' + jsonObj.pageTextData[ids["brands"]].brand2 + '</a></li>';
    $item3 = '<li><a class="dropdown-item" href="javascript:swap(\'model\')" onclick="closeToggle(); selectModel(3)">' + jsonObj.pageTextData[ids["brands"]].brand3 + '</a></li>';
    $('#dropdown').html($item1 + $item2 + $item3);

    //HOME PAGE MORE INFO IMAGES
    $('#img1').html('<a href="#"><img class="card-img-top img-fluid img-thumbnail" src="' + jsonObj.pageTextData[ids["imgs"]].img1 + '" alt="'+ jsonObj.pageTextData[ids["brands"]].brand1 +'"></a>');
    $('#img2').html('<a href="#"><img class="card-img-top img-fluid img-thumbnail" src="' + jsonObj.pageTextData[ids["imgs"]].img2 + '" alt="'+ jsonObj.pageTextData[ids["brands"]].brand2 +'"></a>');
    $('#img3').html('<a href="#"><img class="card-img-top img-fluid img-thumbnail" src="' + jsonObj.pageTextData[ids["imgs"]].img3 + '" alt="'+ jsonObj.pageTextData[ids["brands"]].brand3 +'"></a>');

    //MORE INFO LINKS
    $('#info1').html('<a href="' + jsonObj.pageTextData[ids["info"]].info1 + '" class="btn btn-primary">Find out more...</a>');
    $('#info2').html('<a href="' + jsonObj.pageTextData[ids["info"]].info2 + '" class="btn btn-primary">Find out more...</a>');
    $('#info3').html('<a href="' + jsonObj.pageTextData[ids["info"]].info3 + '" class="btn btn-primary">Find out more...</a>');

    $('#description_x3d1').html('<p>' + jsonObj.pageTextData[ids["x3dDesc"]].x3d1 + '</p>')
    $('#description_x3d2').html('<p>' + jsonObj.pageTextData[ids["x3dDesc"]].x3d1 + '</p>')
    $('#description_x3d3').html('<p>' + jsonObj.pageTextData[ids["x3dDesc"]].x3d1 + '</p>')
}

async function getNewCSS(){
    let promise = new Promise(function(resolve) {
        resolve(jQuery.getJSON('./assets/models/data.json', function(jsonObj){
        }));
      });
    var css = await promise;
    return css.pageTextData[ids["newCss"]];
}

async function getOriginalCSS(){
    let promise = new Promise(function(resolve) {
        resolve(jQuery.getJSON('./assets/models/data.json', function(jsonObj){
        }));
      });
    var css = await promise;
    return css.pageTextData[ids["oldCss"]];
}

async function getUrl(index){
    let promise = new Promise(function(resolve) {
        resolve(jQuery.getJSON('./assets/models/data.json', function(jsonObj){
        }));
      });
    var textures = await promise;
    return textures.pageTextData[ids["textures" + index]];
}