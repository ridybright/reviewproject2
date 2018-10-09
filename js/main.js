const emailRegex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;

// let emailValue = document.getElementById("email").value;

$("#email").on('input', function(){
  let emailValue = $("#email").val();
  if(emailRegex.test(emailValue)){
       $("#email").css("color","green");
    }
    else if(!emailRegex.test(emailValue) && $(this).val()!=""){
       $("#email").css("color","red");
    }
    else { 
      $("#email").css("color","#555");
    }
});

$("#uname").on('input', function(){
    let unameValue = $("#uname").val();
    if(unameValue.length > 3){
         $("#uname").css("color","green");
      }
      else if(unameValue.length < 3 || unameValue.length == 3){
         $("#uname").css("color","red");
      }
  });
