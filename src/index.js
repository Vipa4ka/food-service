import cardTpl from './templates/cards.hbs';
import './styles.css';
import './images/sprite.svg';
import cards from './menu.json';

console.log(cardTpl(cards[0]));
console.log('example');



// const listEl = document.querySelector('js-menu');
// const renderCards=onRenderCards(cards)
// listEl.insertAdjacentHTML("beforebegin", renderCards);

// function onRenderCards(img) {
//     img.map((e) => {
//         console.log(e);
        
        
//     })
    
// }
