/**
 * validation.js
 * function： form validation
 **/

"use strict";

// global language
let globalLanguage = "ja";

$(function () {
  // 会員登録フォームの送信イベントを取得
  $("#registForm").submit(function (e) {
    // 各入力フィールドの値を取得
    const customername = $("#customername").val() ?? null;
    const customermail = $("#customermail").val() ?? null;
    const content = $("#content").val() ?? null;

    // 名前チェック
    if (!customername || customername.length > 50) {
      if (globalLanguage == "ja") {
        alert("名前を正しく入力してください。");
      } else {
        alert("Enter name correctly.");
      }
      e.preventDefault();
      return;
    }

    // メールアドレスチェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!customermail || !customermail.match(emailRegex)) {
      if (globalLanguage == "ja") {
        alert("メールの形式が正しくありません。");
      } else {
        alert("Mail is ivalid.");
      }
      e.preventDefault();
      return;
    }

    // お問い合わせ内容チェック
    if (!content || content.length > 5000) {
      if (globalLanguage == "ja") {
        alert("お問い合わせ内容を正しく入力してください。");
      } else {
        alert("Enter content correctly.");
      }
      e.preventDefault();
      return;
    }

    // ダブルクリック回避
    preventdefault(e);
  });
});

// get global language
const getGlobalLang = (lang) => {
  // set global language
  globalLanguage = lang;
};
