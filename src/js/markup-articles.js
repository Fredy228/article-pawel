import { refs } from './refs';

export function markupArticlesCards(array) {
  refs.articleBox.innerHTML = '';
  const markup = [];
  array.map(item => {
    markup.push(`<section class="article__section">
    <h2 class="article__title">
      <svg class="article__icon" width="15" height="15">
        <use href="#icon-book"></use>
      </svg>
      ${item.title}
    </h2>
    <p class="article__text cut-text">
      <svg class="article__icon" width="15" height="15">
        <use href="#icon-leaf"></use>
      </svg>
      ${item.text}
    </p>
  </section>`);
  });
  refs.articleBox.insertAdjacentHTML('beforeend', markup.join(''));
  console.log(array);
}
