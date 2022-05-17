<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-
to-fit=no">

<!-- Bootstrap CSS -->
<link rel="stylesheet" href="./application/assets/css/import/bootstrap.css">
<link rel="stylesheet" href="./application/assets/css/import/x3dom.css">
<link rel="stylesheet" href="./application/assets/css/logo.css">
<link rel="stylesheet" href="./application/assets/css/navbar.css">
<link rel="stylesheet" href="./application/assets/css/card.css">
<link rel="stylesheet" href="./application/assets/css/custom.css">
<link rel="stylesheet" href="./application/assets/fonts/font-awesome-4.7.0/css/font-awesome.css">
<link rel="shortcut icon" href="#">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" >
<link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
<script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script type='text/javascript' src='./application/assets/scripts/js/import/x3dom.js'></script>
<script src='./application/assets/scripts/js/custom.js'></script>
<script src='./application/assets/scripts/js/setupPage.js'></script>
<script src='./application/assets/scripts/js/animate_model.js'></script>
<script src='./application/assets/scripts/js/gallery_generator.js'></script>
<script src='./application/assets/scripts/js/include_html.js'></script>
<script src='./application/assets/scripts/js/restyle.js'></script>
<script src='./application/assets/scripts/js/getJsonData.js'></script>
<script src='./application/view/hook.php'></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
<script href="./application/assets/scripts/js/import/popper.min-2.9.2.js"></script>
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet"/>
<!-- HTML -->
<title>3D Web Apps</title>
</head>
<body class="d-flex flex-column min-vh-100" id="body" onload="loadPage()">
    <!--Navbar-->
    <div w3-include-html="./application/assets/pages/navbar.html"></div>

    <br>
    <!--SWITCH Home-->
    <div id="home" class="container main_contents">       
        <div w3-include-html="./application/assets/pages/home.html"></div>
    </div>
    
    <!--SWITCH Model Page-->
    <div id="model" class="container model-container" style="display:none;">
        <div w3-include-html="./application/assets/pages/model.html"></div>        
    </div>

    <br>

    <!--Footer-->
    <div w3-include-html="./application/assets/pages/footer.html"></div>
    <script>
        includeHTML();
    </script>
    <script>
    $(document).ready(function(){

    });
  </script>
  </body>
</html>