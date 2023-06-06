/* function showAlert(){
    alert("¡Hola, esta es una alerta desde javascript!");
}


try{
    const a = 10;
    const b = 0;
    const resultado = a/b;
    console.log(resultado);

  }catch(error){

     console.log("Ha ocurrido un error:", error.message);
    }finally{

    console.log("Finalizandola ejeccion del programa");
    }*/

/*
    const miBoton = document.getElementById('miBoton');

    function handleClick(){
        alert('¡Hola! Has hecho click en el boton.');
    }
    
    miBoton.addEventListener('click', handleClick);

  */
  
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    })
        
    function validateEmail(email) {
        
        const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
    return regex.test(email)
    }
    
    function validateForm() {
        const emailInput = document.getElementById('email');
        const email = emailInput.value;

        if (!validateEmail(email)) {

          alert('Por favor ingrese un correo electrónico válido.');
         } else {

            alert('Correo electrónico enviado correctamente.');
            }
        }
        document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})