//DLスピナー
window.onload = function() {
  console.log("ページが完全に読み込まれました"); // デバッグ用ログ

  // ページ読み込み完了後に3秒遅延を追加
  setTimeout(function() {
    console.log("3秒経過しました"); // デバッグ用ログ

    // ローディング画面を非表示にする
    document.getElementById('loading').style.display = 'none';
    console.log("ローディング画面を非表示にしました"); // デバッグ用ログ

    // コンテンツを表示する
    document.getElementById('wrapper').style.display = 'block';
    console.log("コンテンツを表示しました"); // デバッグ用ログ

  }, 3000);  // 3秒の遅延
};


//ページスクロール
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
