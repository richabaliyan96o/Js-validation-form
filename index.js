/**
 * !  1 . step 
 * ? <<-----------TARGETING ID and CLASSES ------>> from the html page 
 */

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let username = id("username"),
email = id("email"),
password = id("password"),
form = id("form"),
errorMsg =classes("error"),
successIcon = classes("success-icon"),
failureIcon = classes("failure-icon");

/** 
 * ! ---------------errorMsg = document.getElementsByClassName("error") ------it will select all the div with class name error and store it into array----
 *! -------------------------errorMsg = ['error','error','error']--------------------------;
**/

/**
 * ?<<------------------------------ TARGET EVENT LISTENER --------------------------------->>
 */

/**
 * TODO :  e.preventDefault(); this function prevents the unexpected behaviour of the function when we click submit button the error message stays until we refresh the page 
 */

form.addEventListener("submit",(e)=>{

    e.preventDefault();
    if(username.value.trim() === ""){
        errorMsg[0].innerHTML = "username can't be blank";
        failureIcon[0].style.opacity = "1";
        successIcon[0].style.opacity = "0";
    }
    else{
        errorMsg[0].innerHTML = "";
        successIcon[0].style.opacity = "1";
        failureIcon[0].style.opacity = "0";
    }
});

form.addEventListener("submit",(e)=>{

    e.preventDefault();
    
    if(email && email.value.trim() === ""){
       
        errorMsg[1].innerHTML = "email can't be blank";
        failureIcon[1].style.opacity = "1";
        successIcon[1].style.opacity = "0";
    }
    else{
        errorMsg[1].innerHTML = "";
        successIcon[1].style.opacity = "1";
        failureIcon[1].style.opacity = "0";
    }
});

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    if(password.value.trim() === ""){
        errorMsg[2].innerHTML = "password can't be blank";
        failureIcon[2].style.opacity = "1";
        successIcon[2].style.opacity = "0";
    }
  else if(password.value.length <5 ){
        errorMsg[2].innerHTML = "password is too short";
        failureIcon[2].style.opacity = "1";
        successIcon[2].style.opacity = "0";
    }
    else{
        errorMsg[2].innerHTML = "";
        successIcon[2].style.opacity = "1";
        failureIcon[2].style.opacity = "0";
    }
});