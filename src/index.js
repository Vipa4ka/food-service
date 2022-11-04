import cardTpl from './templates/cards.hbs';
import './styles.css';
import './images/sprite.svg';
import cards from './menu.json';

const listEl = document.querySelector('.js-menu');
const thema = document.querySelector('body');
const renderCards = onRenderCards(cards);
const toggleBtnTheme = document.querySelector('.theme-switch__control');
listEl.insertAdjacentHTML('afterbegin', renderCards);
toggleBtnTheme.addEventListener('click', onClickBtnTheme);

thema.classList.toggle('light-theme')

// function onClickBtnTheme() {
//        console.log(thema.classList);
//     thema.classList.toggle('light-theme')

//     // if (thema.classList.contains('light-theme')) {
//     //     thema.classList.toggle('dark-theme');
//     //     //  thema.classList.remove('light-theme')  
        

//     // } else if (thema.classList.contains('dark-theme')) {
//     //     // thema.classList.remove('dark-theme');
//     //     // thema.classList.add('light-theme');
//     //     thema.classList.toggle('light-theme');
        
//     // }

    
// }

function onRenderCards(img) {
    //  thema.classList.add('light-theme');
    return img.map(cardTpl).join('');
    
    
}
