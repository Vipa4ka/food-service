import cardTpl from './templates/cards.hbs';
import './styles.css';
import './images/sprite.svg';
import cards from './menu.json';

const listEl = document.querySelector('.js-menu');
const themeBody = document.querySelector('body');
const toggleBtnTheme = document.querySelector('.theme-switch__toggle');
const renderCards = onRenderCards(cards);
listEl.insertAdjacentHTML('afterbegin', renderCards);
toggleBtnTheme.addEventListener('change', onClickBtnTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

populateTheme();

const themeLocal = localStorage.getItem('theme') || Theme.LIGHT;
themeBody.classList.add(themeLocal);
toggleBtnTheme.checked = themeLocal === Theme.DARK;




function onRenderCards(img) {
    return img.map(cardTpl).join('');
}


