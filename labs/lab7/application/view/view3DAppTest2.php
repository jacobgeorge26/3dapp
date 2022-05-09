<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Test View</title>
    <style>
        .imgBox{
            padding: 0.25rem;
            margin-top: 5px;
            margin-bottom:5px;
            border:1px;
            border-radius:0.25rem;
            width:300px;
        }
        .box{
            border:1px solid regba(0, 0, 0, 1.0);
            padding: 5px;
            float: left;
            margin: 5px;
            height: 280px;
        }
    </style>
</head>
<body>
    <h1>Initial 3D App Test View</h1>
    <div class="box">
        <h2><?php echo $model1?></h2>
        <img class="imgBox" src='./assets/images/<?php echo $image1?>.jpg'>
    </div>
    <div class="box">
        <h2><?php echo $model2?></h2>
        <img class="imgBox" src='./assets/images/<?php echo $image2?>.jpg'>
    </div>
    <div class="box">
        <h2><?php echo $model3?></h2>
        <img class="imgBox" src='./assets/images/<?php echo $image3?>.jpg'>
    </div>
    <p>If you see the test data above this then youre good</p>
</body>
</html>