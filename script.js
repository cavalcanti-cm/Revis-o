document.getElementById("cadastro").addEventListener("click",
     function(){

        //captura os elemntos html

        const email = document.getElementById("email");
        const senha = document.getElementById("senha");
        const nome = document.getElementById("nome");
        const usuario = document.getElementById("usuario");

        //capturas o valor dos elemntos
        const emailValue = email.value;
        const senhaValue = senha.value;
        const nomeValue = nome.value;
        const usuarioValue = usuario.value;
        

        if(emailValue === ""){
            email.classList.add("erro")
            return
        }else{
            email.classList.remove("erro")
           
        }

        if(senhaValue === ""){
            senha.classList.add("erro")
            return
        }
            if(nomeValue === ""){
                nome.classList.add("erro")
            }
            if(usuarioValue === ""){
             usuario.classList.add("erro")
             return
                }
                

                window.location.href = "boasvindas.html"
       


            

    }
)