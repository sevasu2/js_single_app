window.addEventListener('DOMContentLoaded', e => {
  // ボタンの全体要素
  document.querySelectorAll('button')
    .forEach(el => {
      // クリック時のイベント登録
      el.addEventListener('click', e => {
        // フォーカスの解除
        setTimeout(() => {
          el.blur();
        }, 100);
      });
    });
});
