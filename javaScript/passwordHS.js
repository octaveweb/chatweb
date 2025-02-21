const passwordContentId = document.querySelector(".form .filled input[type='password']") ;
const toggleButton = document.querySelector(".form .filled i")

toggleButton.addEventListener("click", ()=>{
    if(passwordContentId.type == "password"){
        passwordContentId.type = "text";
        toggleButton.classList.remove("fa-eye");
        toggleButton.classList.add("fa-eye-slash");
    }else{
        passwordContentId.type = "password";
        toggleButton.classList.add("fa-eye");
        toggleButton.classList.remove("fa-eye-slash");
    }
});
