/* let chichilo = prompt("Ingresá tu nombre.");
console.log("Nombre ingresado es " + chichilo);
alert ("El nombre ingresado es " + chichilo); */
const HideGallery = document.getElementById('Hide');
HideGallery.addEventListener('click', () => {
    let GaleriaHide = document.getElementById('GaleriaHide');

    let currentDisplay = GaleriaHide.style.display;

    if (currentDisplay === 'none') {
        GaleriaHide.style.display = 'block';
    }
    else{
        GaleriaHide.style.display = 'none';
    }
})

/*     const funcionFlecha = document.getElementById('irYVolver');
    funcionFlecha.addEventListener('click', () => {
        let Flechadeneon = document.getElementById('Flechadeneon');
    
        let currentDisplay = Flechadeneon.style.display;
    
        if (currentDisplay === 'none') {
            Flechadeneon.style.display = 'block';
        }
        else{
            Flechadeneon.style.display = 'none';
        }
    })
 */
