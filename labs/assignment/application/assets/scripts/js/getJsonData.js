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
    "textures3":13,
    "textures4":14
    };

$(document).ready(function(){
    $.getJSON('./application/models/data.json', function(jsonObj){
    });
});

function getData(){
    jQuery.getJSON('./application/models/data.json', function(jsonObj){
        getHtml(jsonObj);
    });
}

function getHtml(jsonObj){
    //HOME
    $('#title_home').html('<h2>' + jsonObj.pageTextData[ids["home"]].title + '</h2>');
    $('#description_home').html('<p>' + jsonObj.pageTextData[ids["home"]].description + '</p>');

    //MODEL 1
    var fallback = false;
    if(dataModel1 != null){
        //use db data
        $('#title_model1').html('<h4 class="card-title">' + dataModel1["brand"] + '</h4>');
        $('#description_model1').html('<p class="card-text">' + dataModel1["modelDescription"] + '</p>');
        $('#info_title_model1').html('<h4 class="card-title">' + dataModel1["brand"] + '</h4>');
        $('#info_description_model1').html('<p class="card-text">' + dataModel1["modelDescription"] + '</p>');
        fallback = dataModel1["modelDescription"] == null || dataModel1["brand"] == null;
    }
    if(dataModel1 == null || fallback){
        console.log("Defaulting to json data instead of sqlite data for model 1");
        $('#title_model1').html('<h4 class="card-title">' + jsonObj.pageTextData[ids["mod1"]].title + '</h4>');
        $('#description_model1').html('<p class="card-text">' + jsonObj.pageTextData[ids["mod1"]].description + '</p>');
        $('#info_title_model1').html('<h4 class="card-title">' + jsonObj.pageTextData[ids["mod1"]].title + '</h4>');
        $('#info_description_model1').html('<p class="card-text">' + jsonObj.pageTextData[ids["mod1"]].description + '</p>');
    }

    //MODEL 2
    fallback = false;
    if(dataModel2 != null){
        $('#title_model2').html('<h4 class="card-title">' + dataModel2["brand"] + '</h4>');
        $('#description_model2').html('<p class="card-text">' + dataModel2["modelDescription"] + '</p>');
        $('#info_title_model2').html('<h4 class="card-title">' + dataModel2["brand"] + '</h4>');
        $('#info_description_model2').html('<p class="card-text">' + dataModel2["modelDescription"] + '</p>');
        fallback = dataModel2["brand"] == null || dataModel2["modelDescription"] == null;
    }
    if(dataModel2 == null || fallback){
        console.log("Defaulting to json data instead of sqlite data for model 2");
        $('#title_model2').html('<h4 class="card-title">' + jsonObj.pageTextData[ids["mod2"]].title + '</h4>');
        $('#description_model2').html('<p class="card-text">' + jsonObj.pageTextData[ids["mod2"]].description + '</p>');
        $('#info_title_model2').html('<h4 class="card-title">' + jsonObj.pageTextData[ids["mod2"]].title + '</h4>');
        $('#info_description_model2').html('<p class="card-text">' + jsonObj.pageTextData[ids["mod2"]].description + '</p>');
    }

    //MODEL 3
    fallback = false;
    if(dataModel3 != null){
        $('#title_model3').html('<h4 class="card-title">' + dataModel3["brand"] + '</h4>');
        $('#description_model3').html('<p class="card-text">' + dataModel3["modelDescription"] + '</p>');
        $('#info_title_model3').html('<h4 class="card-title">' + dataModel3["brand"] + '</h4>');
        $('#info_description_model3').html('<p class="card-text">' + dataModel3["modelDescription"] + '</p>');
        fallback = dataModel3["brand"] == null || dataModel3["modelDescription"] == null;
    }
    if(dataModel3 == null || fallback){
        console.log("Defaulting to json data instead of sqlite data for model 3");
        $('#title_model3').html('<h4 class="card-title">' + jsonObj.pageTextData[ids["mod3"]].title + '</h4>');
        $('#description_model3').html('<p class="card-text">' + jsonObj.pageTextData[ids["mod3"]].description + '</p>');
        $('#info_title_model3').html('<h4 class="card-title">' + jsonObj.pageTextData[ids["mod3"]].title + '</h4>');
        $('#info_description_model3').html('<p class="card-text">' + jsonObj.pageTextData[ids["mod3"]].description + '</p>');
    }

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
    $('#img1').html('<a href="javascript:swap(\'model\')" onclick="selectModel(1)"><img class="card-img-top img-fluid img-thumbnail" src="' + jsonObj.pageTextData[ids["imgs"]].img1 + '" alt="'+ jsonObj.pageTextData[ids["brands"]].brand1 +'"></a>');
    $('#img2').html('<a href="javascript:swap(\'model\')" onclick="selectModel(2)"><img class="card-img-top img-fluid img-thumbnail" src="' + jsonObj.pageTextData[ids["imgs"]].img2 + '" alt="'+ jsonObj.pageTextData[ids["brands"]].brand2 +'"></a>');
    $('#img3').html('<a href="javascript:swap(\'model\')" onclick="selectModel(3)"><img class="card-img-top img-fluid img-thumbnail" src="' + jsonObj.pageTextData[ids["imgs"]].img3 + '" alt="'+ jsonObj.pageTextData[ids["brands"]].brand3 +'"></a>');

    //MORE INFO LINKS
    $('#info1').html('<a href="' + jsonObj.pageTextData[ids["info"]].info1 + '" class="btn btn-primary">Find out more...</a>');
    $('#info2').html('<a href="' + jsonObj.pageTextData[ids["info"]].info2 + '" class="btn btn-primary">Find out more...</a>');
    $('#info3').html('<a href="' + jsonObj.pageTextData[ids["info"]].info3 + '" class="btn btn-primary">Find out more...</a>');

    //MODEL DESCRIPTIONS
    //MODEL 1
    fallback = false;
    if(dataModel1 != null) {
        $('#description_x3d1').html('<p>' + dataModel1["x3dCreationMethod"] + '</p>');
        fallback = dataModel1["x3dCreationMethod"] == null;
    }
    if(dataModel1 == null || fallback){
        console.log("Defaulting to json data instead of sqlite data for x3d model 1");
        $('#description_x3d1').html('<p>' + jsonObj.pageTextData[ids["x3dDesc"]].x3d1 + '</p>');
    } 
    //MODEL 2
    fallback = false;
    if(dataModel2 != null){
        $('#description_x3d2').html('<p>' + dataModel2["x3dCreationMethod"] + '</p>');
        fallback = dataModel2["x3dCreationMethod"] == null;
    }
    if(dataModel2 == null || fallback){
        console.log("Defaulting to json data instead of sqlite data for x3d model 2");
        $('#description_x3d2').html('<p>' + jsonObj.pageTextData[ids["x3dDesc"]].x3d2 + '</p>');
    }
    //MODEL 3
    fallback = false;
    if(dataModel3 != null) {
        $('#description_x3d3').html('<p>' + dataModel3["x3dCreationMethod"] + '</p>');
        fallback = dataModel3["x3dCreationMethod"] == null;
    }
    if(dataModel3 == null || fallback){
        console.log("Defaulting to json data instead of sqlite data for x3d model 3");
        $('#description_x3d3').html('<p>' + jsonObj.pageTextData[ids["x3dDesc"]].x3d3 + '</p>');
    } 
}

async function getNewCSS(){
    let promise = new Promise(function(resolve) {
        resolve(jQuery.getJSON('./application/models/data.json', function(jsonObj){
        }));
      });
    var css = await promise;
    return css.pageTextData[ids["newCss"]];
}

async function getOriginalCSS(){
    let promise = new Promise(function(resolve) {
        resolve(jQuery.getJSON('./application/models/data.json', function(jsonObj){
        }));
      });
    var css = await promise;
    return css.pageTextData[ids["oldCss"]];
}

async function getUrl(index){
    let promise = new Promise(function(resolve) {
        resolve(jQuery.getJSON('./application/models/data.json', function(jsonObj){
        }));
      });
    var textures = await promise;
    return textures.pageTextData[ids["textures" + index]];
}

var dataModel1, dataModel2, dataModel3;
async function getDBData(selection){
    let promise = new Promise(function(resolve) {
        resolve(jQuery.getJSON('./application/models/getDBData.php?brand=' + selection, function(json){
            console.log('DB data being loaded into page: ', json);
        }));
      });
    var data = await promise.then(function(value) {
        dataModel1 = value[0];
        dataModel2 = value[1];
        dataModel3 = value[2];
    });
    return data;
}

function getModelData(index){
    switch(index){
        case 1:
            return dataModel1;
        case 2:
            return dataModel2;
        default:
            return dataModel3;
    }
}