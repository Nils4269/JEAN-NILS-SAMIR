let toutRouge = document.querySelectorAll(".pixel")
let bouton = document.querySelector("#supprimer")
 
toutRouge.forEach(pixel=>{
    pixel.addEventListener("click",function(){
        // j'ai la obite sur laquelle j'ai cliqué
        console.log(pixel)
        pixel.classList.toggle("bg-crimson")
    })
})
 
 
    bouton.addEventListener("click", function(){
        //je preds tous les pixels
        // je leur enleve atous bla bg crimson
    toutRouge.forEach(pixel=>{
        pixel.classList.remove("bg-crimson")
    })})