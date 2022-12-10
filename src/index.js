import { articleArray } from './js/arr-articles';
import { markupArticlesCards } from './js/markup-articles';
import { refs } from './js/refs';
import { articlesSort } from './js/sort-articles';
import { openModal } from './js/modal';
import { closeModal } from './js/modal';

const articleArr = [...articleArray].reverse();

markupArticlesCards(articleArr);

refs.selectSort.addEventListener('change', articlesSort);
refs.articleBox.addEventListener('click', openModal);
refs.btnCloseModal.addEventListener('click', closeModal);
