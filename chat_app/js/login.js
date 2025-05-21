const form =document.querySelector(".login form"),
continueBtn= form.querySelector(".button input"),
errorText =form.querySelector(".error-text");


form.onsubmit =(e)=> {
    e.preventDefault();
}

continueBtn.onclick =()=> {
    let Xhr =new XMLHttpRequest();
    Xhr.open("POST","php/login.php", true);
    Xhr.onload =() =>{
        if(Xhr.readyState === XMLHttpRequest.DONE){
            if(Xhr.status === 200){
                let data =Xhr.response;
                if(data === "success")
                {
                  location.href ="users.php";
                }
                else
                {
                  errorText.style.display = "block";
                  errorText.textContent =data ;

                }
            }
        }
    }
    let formData = new FormData(form);
    Xhr.send(formData);
}