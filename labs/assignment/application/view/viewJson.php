<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>JSON Sample</title>
</head>
<body>

    <div id="placeholder"></div>

    <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script>
	// Use a relative path so that it works on the ITS Web Server, 
    // or http://users.sussex.ac.uk/~your_user_name/[insert_rest_of_path]/[php_function]
    // A localhost path like below wobn't work on the ITS server:
    // $.getJSON('http://localhost:8888/lab7/part_c/application/model/createJson.php', function(data) {
    jQuery.getJSON('../application/models/data.json', function(data) {
  	
        var output="";
        for (var i = 0; i <data.pageTextData.length; i++) {
            output+="<ul>"
            for (var key in data.pageTextData[i]) {
                output += "<li>" + key + "      " + data.pageTextData[i][key] + "</li>";
            }         
            output+="</ul>";   
        }  
        $('#placeholder').html(output);
       
  	});
    </script>
</body>
</html>