$(function(){ //makes sure the function loaded after the dom
    $('#submit').on('click', function(e){ //a function that will trigger when the submit button is clicked
        var name = $("#name");
        var email = $("#email");
        var phone = $("#phone");
        var errorMessage = $("#error-message");
        var required = [name , email , phone]; //array named required

        for(var item of required){ //loop to iterate the entire rquired array
            if (item.val() == ""){ //if the array items is equal to an empty string populate message
                errorMessage.text("Please Fill Out Required Fields");
                errorMessage.addClass("warning"); //add warning class to message
                item.prev('label').addClass('warning'); //turns red if field if empty
            }
            else{
                item.prev('label').removeClass('warning'); 
            }
        }

        var hasWarning = $('label').hasClass('warning'); 
        if(!hasWarning)
        {
            $('form').empty(); 
            $('#pre-form > h2').text('Thanks for your feedback!');
        }
    });
});