var registrarse =[]
console.log(registrarse)

function Registro(){
    var nombre=document.getElementById('registro1').value
    var apellidos=document.getElementById('registro2').value
    var contraseña=document.getElementById('registro3').value
    var edad=document.getElementById('registro4').value

    var Usuario={"User name":nombre,"Apellido":apellidos,"Contraseña":contraseña,"Edad":edad,}

    registrarse.push(Usuario)
    console.log(registrarse)
    document.getElementById('registro1').value=""
    document.getElementById('registro2').value=""
    document.getElementById('registro3').value=""
    document.getElementById('registro4').value=""
    alert("REGISTRADO CORRECTAMENTE")
    

    

}











var Persona =[{"Nombre":"Pablo", "Password" : "12345"}]
console.log(Persona)


function  validar(){

    var sw=false 
    var nombre=document.getElementById('dato1').value
    var password=document.getElementById('dato2').value
   
    Persona.forEach(function(x){
        if(x.Nombre==nombre && x.Password==password)
        {

            location.href='indexP2.html'
            sw = true
            alert('Ingresado correctamente')
            
        }

        
        })

        if(sw==false){
            alert('credenciales incorrectos')
        
            document.getElementById('dato1').value=""
            document.getElementById('dato2').value=""
        }




}