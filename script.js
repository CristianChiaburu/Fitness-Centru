const button = document.querySelector('.navigation__icon-background');
const navigation = document.querySelector('.navigation__background');
const icon = document.querySelector('.navigation__icon')
const links = document.querySelectorAll('.navigation__link');
const nav = document.querySelector('.navigation__item');
button.addEventListener('click', () => {
    navigation.classList.toggle('translate');
    
    nav.classList.toggle('open-nav');
});





links.forEach((link) => {
    link.addEventListener('click', () => {
        navigation.classList.toggle('translate');
    })
})
//                DOES THE SAME THING!


// for (i = 0; i < links.length; i++) {
//     links[i].addEventListener('click', () =>{
//         navigation.classList.toggle('translate');
//     })
// }