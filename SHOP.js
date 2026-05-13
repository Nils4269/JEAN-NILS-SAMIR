//premiere fonction

//role: realiser une page web avec 3 produits
// parametre produits a vendre 
// return : produits finaux
let produits = ["maillotExt","maillotDom","maillotAttaquant"]
function produitsVendre(produits) {
    produits.forEach(produit => {
        
    });

}


//deuxieme fonction

/*role: passer la carte en selectionné et ajouté 1 a l'icone panier */
// parametre:
// return : 

function selectionneCarte(){
    produits.addEventListener("click",function(){
        //j'ai la boite sur laquelle j'ai cliqué 
        console.log(boite)
        produits.classList.toggle("bg-red")
    })

}