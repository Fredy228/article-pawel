import articleArray from './js/arr-articles';
import { markupArticlesCards } from './js/markup-articles';
import { refs } from './js/refs';
import { articlesSort } from './js/sort-articles';

const articleArr = [...articleArray].reverse();

markupArticlesCards(articleArr);

refs.selectSort.addEventListener('change', articlesSort);
