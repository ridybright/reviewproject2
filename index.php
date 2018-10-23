<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Review project2</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" media="screen" href="css/bootstrap.css">
    <link rel="stylesheet" type="text/css" media="screen" href="css/style.css">
</head>
<body>
    <div class="container"> 
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8 style_div">
                <form action="">
                    <div class="col-md-5 form-group style_form">
                        <input type="text" class="form-control" id="uname" placeholder="Enter Name...">
                        <i id="valid_uname" class="fa fa-check text-green hide checkicon_uname"></i>
                        <i id="invalid_uname" class="fa fa-warning text-red hide warningicon_uname"></i>
                        <p id="error_name" class="text-danger bg-danger hide">Name must be more than 3 characters.</p>
                    </div>
                    <div class="col-md-5 form-group style_form ">
                        <input type="email" class="form-control" id="email" placeholder="Enter Email...">
                        <i id="valid_email" class="fa fa-check text-green hide checkicon_email"></i>
                        <i id="invalid_email" class="fa fa-warning text-red hide warningicon_email"></i>
                        <p id="error_email" class="text-danger bg-danger hide">Please, provide a valid email.</p>
                    </div>
                    <div class="col-md-2 form-group style_form">
                        <button type="button" id="#send" class="form-control btn btn-primary" disabled><i class="fa fa-paper-plane"></i> Send</button>
                    </div>    
                </form>
            </div>
            <div class="col-md-2"></div>  
        </div>
    </div>
    <script src="js/jquery.jquery-3.3.1.min.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/main.js"></script>
</body>
</html>