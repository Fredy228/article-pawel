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
  refs.modalArticle.id = `${obj.id}`;
  markup.push(`<div id="disqus_thread"></div>
    <script>
        var disqus_config = function () {
        this.page.url = "https://fredy228.github.io/article-pawel/";
        this.page.identifier = #${obj.id};
        };
        (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://articles-pawel.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();
    </script>
    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>`);
  refs.modalArticle.insertAdjacentHTML('beforeend', markup.join(''));
}
