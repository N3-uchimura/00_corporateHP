/**
 * i18n.ts
 **
 * function：多言語対応
 **/

'use strict';

// モジュール定義
import { createI18n } from 'canopy-i18n'; // 多言語対応

export const commonPage: any = createI18n(['ja', 'en'] as const).add({
  default: { ja: '日本語', en: 'Japanese' },
  language: { ja: 'ja', en: 'en' },
  title: { ja: 'NUMTHREE -未来最適化集団-', en: 'NUMTHREE -optimize future-' },
  description: {
    ja: '未来を最適化する、NUMTHREEの公式サイトです。',
    en: 'Optimize future. Official web site of NUMTHREE.',
  },
  service1: { ja: '「読めティア」', en: 'YOMETIA' },
  detail: { ja: 'もっと詳しくみる', en: 'see more' },
  confirmhead: {
    ja: '確認画面',
    en: 'Confirm',
  },
});

export const indexPage: any = createI18n(['ja', 'en'] as const).add({
  headtitle1: { ja: '加速から最適化。', en: 'Accelation to optimization' },
  headcontent1_1: {
    ja: '前進を止め、効率化する。',
    en: 'Stop going, streamlining.',
  },
  headcontent1_2: {
    ja: '散らばった欠片を、再構成する。',
    en: 'Gather Scattered fragments, restruct.',
  },
  headtitle2: { ja: '革新ではなく改良。', en: 'Tradition, not new.' },
  headcontent2_1: {
    ja: '増やすのではなく、整理する。',
    en: 'Organize, not increase.',
  },
  headcontent2_2: {
    ja: '今あるものを見つめる、そこからの発見。',
    en: 'See what we have, and discover.',
  },
  headtitle3: { ja: '二軸ではなく三軸。', en: 'Two-axis to three-axis.' },
  headcontent3_1: { ja: '対立からナムスリーへ', en: 'Conflict to numthree.' },
  headcontent3_2: {
    ja: '二極化でなく多次元化、そこからの融和。',
    en: 'Polarize to higher dimensions, and harmony.',
  },
  information: { ja: 'サービス', en: 'Information' },
  content1: { ja: '朗読アプリ', en: 'Audiobook app' },
  content1_1: { ja: '「読めティア」', en: 'YOMETIA' },
  news: { ja: 'お知らせ', en: 'News' },
  news1: { ja: 'その他', en: 'Othres' },
  news1_1: { ja: 'NUMTHREE 始動', en: 'NUMTHREE starting' },
});

export const servicePage: any = createI18n(['ja', 'en'] as const).add({
  servicehead: { ja: 'サービス', en: 'Service' },
  servicetitle1: {
    ja: '「読めティア」',
    en: 'YOMETIA',
  },
  servicecontent1_1: {
    ja: '青空文庫の5000超作品を、いつでも聞き放題。',
    en: 'Unlimited listening over 5000 literary works.',
  },
});

export const yometiaPage: any = createI18n(['ja', 'en'] as const).add({
  yometiahead: {
    ja: '「読めティア」',
    en: 'YOMETIA',
  },
  yometiacontent1_1: {
    ja: '青空文庫の5000冊超を、丸ごと収録。',
    en: 'Unlimited listening over 5000 literary works.',
  },
  yometiacontent1_2: {
    ja: 'いろいろなキャラクターの声で、作品の朗読を楽しめます。',
    en: 'Enjoy so many works with wide variety of character voices.',
  },
});

export const teamPage: any = createI18n(['ja', 'en'] as const).add({
  teamhead: {
    ja: 'チーム概要',
    en: 'Team',
  },
  companyhead: {
    ja: '商号',
    en: 'Trade name',
  },
  companycontent: {
    ja: 'NUMTHREE（ナムスリー）',
    en: 'NUMTHREE',
  },
  addresshead: {
    ja: '住所',
    en: 'Office address',
  },
  addresscontent1: {
    ja: '福岡県福岡市博多区博多駅前1丁目23番2号ParkFront博多駅前1丁目5F-B',
    en: 'ParkFront HakataStation1-5F-B 1-23-2 Hakataeki Mae Hakata-ku, Fukuoka-shi, Fukuoka-ken',
  },
  mailhead: {
    ja: 'メールアドレス',
    en: 'Mailaddress',
  },
  staffhead: {
    ja: '担当',
    en: 'Staff',
  },
  staffcontent: {
    ja: '内村',
    en: 'Uchimura',
  },
});

export const contactPage: any = createI18n(['ja', 'en'] as const).add({
  contacthead: {
    ja: 'お問い合わせ',
    en: 'Contact',
  },

  namehead: {
    ja: 'お名前',
    en: 'name',
  },
  mailhead: {
    ja: 'メールアドレス',
    en: 'mail address',
  },
  contenthead: {
    ja: 'お問い合わせ内容',
    en: 'content',
  },
  sendbutton: {
    ja: '送信',
    en: 'send',
  },
  resetbutton: {
    ja: 'リセット',
    en: 'reset',
  },
});

export const privacyPage: any = createI18n(['ja', 'en'] as const).add({
  privacyhead: {
    ja: 'プライバシーポリシー',
    en: 'Privacy policy',
  },
  privacycontenthead: {
    ja: '[NUMTHREE]（以下「当サイト・アプリ」といいます。）は、当サイトにおける個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。',
    en: 'This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.',
  },
  privacyhead1: {
    ja: '第1条（個人情報の収集）',
    en: '1 Data Collection',
  },
  privacycontent1: {
    ja: '当サイト・アプリでは、ユーザーがお問い合わせやコメントの送信、会員登録を行う際に、氏名、メールアドレス等の個人情報を収集する場合があります。',
    en: 'If you choose to use our Service, then you agree to the collection and use of information such as your name, mailaddress in relation with this policy.',
  },
  privacyhead2: {
    ja: '第2条（個人情報を収集・利用する目的）',
    en: '2 Perpose',
  },
  privacycontent2: {
    ja: '当サイト・アプリが個人情報を収集・利用する目的はサービス改善のためであり、このプライバシーポリシーで明記されている以外の使途では使用・共有しません。',
    en: 'The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.',
  },
  privacyhead3: {
    ja: '第3条（個人情報の開示・訂正など）',
    en: '3 Disclosure and correction',
  },
  privacycontent3: {
    ja: '当サイト・アプリは、ユーザー本人から個人情報の開示、訂正、追加、削除、利用停止を求められた場合は、本人確認を行った上で、速やかに対応いたします。',
    en: 'If you request the disclosure, correction, addition, deletion, or suspension of use of your personal information, our site and app will promptly respond to your request after verifying your identity.',
  },
  privacyhead4: {
    ja: '第4条（Cookieおよびアクセス解析ツールについて）',
    en: '4 Cookie and analysis tool',
  },
  privacycontent4: {
    ja: '当サイト・アプリでは、ユーザーの利便性向上やアクセス解析のためにCookie（クッキー）を使用する場合があります。ユーザーはCookieを無効にすることで収集を拒否できますが、その際に当サイトの機能が一部利用できなくなる場合があります。',
    en: 'Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your devices’s internal memory. Users can refuse data collection by disabling cookies, but this may cause some features of our website to become unavailable.',
  },
  privacyhead5: {
    ja: '第5条（プライバシーポリシーの変更）',
    en: '5 Changes to This Privacy Policy',
  },
  privacycontent5: {
    ja: '本ポリシーの内容は、法令の改正や当サイト・アプリの運営状況に応じて、予告なく変更されることがあります。変更後の本ポリシーは、当サイト・アプリに掲載した時点から効力を生じるものとします。',
    en: 'We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.',
  },
  privacyhead6: {
    ja: '第6条（お問い合わせ窓口）',
    en: '6 Contact Us',
  },
  privacycontent6: {
    ja: '本ポリシーに関するお問い合わせは、お問い合わせよりご連絡ください。',
    en: 'If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.',
  },
  privacyfooter1: {
    ja: '制定日：2026年7月1日',
    en: 'establishment date：2026/7/1',
  },
  privacyfooter2: {
    ja: '運営者名：NUMTHREE',
    en: 'NUMTHREE',
  },
});


export const finishPage: any = createI18n(['ja', 'en'] as const).add({
  finishhead: {
    ja: '送信完了',
    en: 'contact is sent.',
  },
  finishcontent: {
    ja: '送信が完了しました。3秒後に戻ります。',
    en: 'contact is sent. wait for 3 seconds...',
  },
});
