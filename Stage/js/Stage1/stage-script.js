$(function () {
  // 年の取得
  const input = document.getElementById("year");
  const currentYear = new Date().getFullYear(); // 現在の年を取得
  input.max = currentYear; // max属性に設定
});
