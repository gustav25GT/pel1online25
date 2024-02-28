
document.addEventListener("keyup",(e)=>{
    if (e.target.matches(".search-input")){

      

       document.querySelectorAll(".contenido").forEach((tarjeta)=>{

       

           tarjeta.textContent.toLocaleLowerCase().includes(e.target.value)
            ?tarjeta.classList.remove("filter")
            :tarjeta.classList.add("filter")
            
            

            
        }); 

        if(e.key==="Escape"){
            e.target.value="";
        } 
    }
}

)