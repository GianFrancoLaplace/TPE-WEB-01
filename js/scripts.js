const buttonMode = document.getElementById("btn_mode");
const mainColor = [...document.querySelectorAll(".priColor")];

if(buttonMode){
    buttonMode.addEventListener("click", () =>{
        changePrimaryColor();
    })
}

const changePrimaryColor = () =>{
    if(mainColor[0].classList.contains("secColor")){
        mainColor.map(i=>i.classList.remove("secColor"));
        // mainColor.classList.remove('secColor');
        buttonMode.textContent = "Dark Mode";
    } 
    else{
        buttonMode.textContent = "Bright Mode";
        mainColor.map(i=>i.classList.add("secColor"));
        // mainColor.classList.add('secColor');
    }
}

const form = document.getElementById("form")
const name = document.getElementById("input-name")
const email = document.getElementById("input-email")
const subject = document.getElementById("input-subject")
const msg = document.getElementById("input-msg")

const formIsValid = {
    name: false,
    email: false,
    subject: true,
    msg: false
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    validateForm()
})

name.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 0) formIsValid.name = true
})

email.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 0) formIsValid.email = true
})

msg.addEventListener("change", (e) => {
    if(e.target.value.trim().length > 0)
    formIsValid.msg = true 
})

const validateForm = () => {
    const formValues = Object.values(formIsValid)
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) alert("Form valid")
    else alert('Form invalid')
}

// let form = document.getElementById("form");
// form.addEventListener("submit", agregar)
// let btn_form = document.getElementById("button-form");

// function agregar(e){
//     e.preventDefault();

//     let formData = new formData(form);
    
//     let name = formData.get("user_name")
//     let email = formData.get("user_email")
//     let subject= formData.get("user_subject")
//     let msg = formData.get("user_message")
// }