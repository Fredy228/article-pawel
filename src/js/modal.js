import articleArray from './arr-articles';
import { refs } from './refs';
import { markupArticlesModal } from './murkap-artc-modal';

export function openModal(event) {
  if (event.target.nodeName !== 'SECTION') {
    const findArticle = articleArray.find(option => {
      if (option.id.toString() === event.target.parentNode.dataset.id) {
        return true;
      } else {
        return false;
      }
    });
    refs.backdrop.classList.remove('is-hidden');
    document.body.classList.add('no-scroll');
    markupArticlesModal(findArticle);
  }
}

export function closeModal() {
  refs.backdrop.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
}
