const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');


// input value
function error(input, msg){
    const formControl = input.parentElement ;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = msg;
}
function success(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}



function checkRequired(inputArr){
    inputArr.forEach( function(input) {
        if( input.value.trim() === ''){         // trim removes empty spaces from both sides of a string
            error(input, `${getFieldname(input)} is required`)
        }
        
        else{
            success(input)
        }
        
    });
}
function getFieldname(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function checkLength(input, min, max){
    if( input.value.length < min) {
        error(input, ` ${getFieldname(input)} must be atleast ${min} characters` )
    } 
    else if(input.value.length > max) {
        error(input, ` ${getFieldname(input)} must be maximum ${max} characters`)
    }
    else{
        success(input);
    }
}
function checkEmail(input) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ( re.test(input.value)){
        success(input)
    }
    else{
        error(input, 'Email is not valid')
    }
}
function matchPasswor(password, password2){
    if(password.value !== password2.value){
        error(password, 'passwords dont match')
        error(password2, 'passwords dont match')
    }
}


// event listener
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkRequired([username,email,password,password2])

    checkLength(username, 4, 10)
    checkLength(password , 6, 20)
    checkEmail(email)
    matchPasswor(password, password2)

    // this is redundant
    // if(username.value === ''){
    //     error(username, 'username is required');
    // }
    // else{
    //     success(username);
    // }

    // if(email.value === ''){
    //     error(email, 'email is required');
    // }else if(!validateEmail(email.value)){
    //     error(email, 'email is not valid')
    // }
    // else{
    //     success(email);
    // }

    // if(password.value === ''){
    //     error(password, 'password is required');
    // }
    // else{
    //     success(password);
    // }
    
    // if(password2.value === ''){
    //     error(password2, 'password2 is required');
    // }
    // else{
    //     success(password2);
    // }

})
