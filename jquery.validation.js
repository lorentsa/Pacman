

$(document).ready(function(){
    // validate signup form on keyup and submit
    $("#sign_up_form").validate({
        rules: {
            fName: { 
                required:true,
                checkOnlyLetters: true,
             },
            lName: {
                required:true,
                checkOnlyLetters: true,
            },
            uName: {
                required: true,
                isUserNotExists: true,
            },
            pass: {
                required: true,
                minlength: 8,
                isLegalPass: true,
            },
            mail: {
                required: true,
                email: true
            },
            bdate: {
                required: true,
                minlength: 2,
                //to-do check bdate
            },
        },
        messages: {
            fName: {
                required: "Please enter your firstname",
                checkOnlyLetters: "first name must include only letters",
                },
            lName: {
                required: "Please enter your lastname",
                checkOnlyLetters: "last name must include only letters",
            },
            uName: {
                required: "Please enter a username",
                isUserNotExists: "this username already exists",
            },
            pass: {
                required: "Please provide a password",
                minlength: "Your password must be at least 8 characters long",
                isLegalPass: "the password must include only letters and digits",
            },
            mail: {
                required: "Please enter a valid email address1",
                email: "Please enter a valid email address1",
            },
            bdate: {
                required: "Please enter your birth date1",
                minlength: "Please enter your birth date1",
            },
        }
    });    

    $.validator.addMethod("checkOnlyLetters", function(value , element) {
        return this.optional(element)|| /^[a-z][a-z\s]*$/.test(value);
    });
    
    $.validator.addMethod("isUserNotExists", function(value , element) {
    return this.optional(element)|| !(value in users);
    });

    $.validator.addMethod("isLegalPass", function(value , element) {
        return this.optional(element)|| /[^\w\d](([0-9]+.[A-Za-z]+.)|[A-Za-z]+.([0-9]+.*))/.test(value);
    });
})
