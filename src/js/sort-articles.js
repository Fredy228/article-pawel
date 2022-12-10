import { markupArticlesCards } from './markup-articles';
import articleArray from './arr-articles';
const articleArr = [...articleArray].reverse();

export function articlesSort(event) {
  if (event.target.value === 'new') {
    console.log(event.target.value);
    markupArticlesCards(articleArr);
  } else {
    console.log(event.target.value);
    markupArticlesCards(articleArray);
  }
}
