import { refs } from './refs';

export function markupArticlesModal(obj) {
  refs.modalArticle.innerHTML = '';
  const markup = [];
  markup.push(`<h2 class="modal__title">
      <svg class="article__icon" width="15" height="15">
        <use href="#icon-book"></use>
      </svg>
      ${obj.title}
    </h2>
    <p class="modal__text">
      <svg class="article__icon" width="15" height="15">
        <use href="#icon-leaf"></use>
      </svg>
      ${obj.thesis}
    </p>`);
  obj.text.map(item => {
    markup.push(`<p class="modal__text">${item}</p>`);
  });
  refs.modalArticle.insertAdjacentHTML('beforeend', markup.join(''));
}
