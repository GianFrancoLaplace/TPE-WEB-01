const buttonMode = document.getElementById("btn_mode");
const mainColor = [...document.querySelectorAll(".priColor")];
const images = document.getElementById('images');
const btn_form = document.getElementById("button-form");
const btnPrueba = document.getElementById("btnPrueba");

if(buttonMode){
buttonMode.addEventListener("click", () =>{
    changePrimaryColor();
})
}
console.log(mainColor);


const changePrimaryColor = () =>{
    if(mainColor[0].classList.contains("secColor")){
        mainColor.map(i=>i.classList.remove("secColor"));
        // mainColor.classList.remove('secColor');
        buttonMode.textContent = "Dark Mode";
    } 
    else{
        buttonMode.textContent = "Bright Mode";
        mainColor.map(i=>i.classList.add('secColor'));
        // mainColor.classList.add('secColor');
    }
}

if(btn_form)
btn_form.addEventListener("click", (e) =>{
    console.log("Messi")
    e.preventDefault();
})

if(btnPrueba)
btnPrueba.addEventListener("click", () =>{
    console.log("Click");
})

