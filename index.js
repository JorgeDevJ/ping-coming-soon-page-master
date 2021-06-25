let buttonSend = document.querySelector(".button")
buttonSend.addEventListener("click", () =>{
    let valueEmail = document.querySelector("#email_data").value;
    let arrEmail = valueEmail.split("");
    if(arrEmail.includes("@") === false || arrEmail.includes(".") === false){
        document.querySelector(".style_error_none").classList.add("style_error_visible");
        document.querySelector(".input_email").classList.add("input_email__error");
    }else{
        document.querySelector(".style_error_none").classList.remove("style_error_visible");
        document.querySelector(".input_email").classList.remove("input_email__error");
    }
});
