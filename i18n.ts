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
    ja: '未来を最適化する、NUMTHREEの公式サイトです',
    en: 'Optimize future. Official web site of NUMTHREE',
  },
  service1: { ja: '「読めティア」', en: 'YOMETIA' },
  detail: { ja: 'もっと詳しくみる', en: 'see more' },
  confirmhead: {
    ja: '確認画面',
    en: 'confirm',
  },
});

export const indexPage: any = createI18n(['ja', 'en'] as const).add({
  headtitle1: { ja: '加速から最適化', en: 'Accelation to optimization' },
  headcontent1_1: {
    ja: '前進を止め、効率化する',
    en: 'Stop going, streamlining',
  },
  headcontent1_2: {
    ja: '散らばった欠片を、再構成する',
    en: 'Gather Scattered fragments, restruct',
  },
  headtitle2: { ja: '革新ではなく改良', en: 'Tradition, not new' },
  headcontent2_1: {
    ja: '増やすのではなく、整理する',
    en: 'Organize, not increase',
  },
  headcontent2_2: {
    ja: '今あるものを見つめる、そこからの発見',
    en: 'See what we have, and discover',
  },
  headtitle3: { ja: '二軸ではなく三軸', en: 'Two-axis to three-axis' },
  headcontent3_1: { ja: '対立からナムスリーへ', en: 'Conflict to numthree' },
  headcontent3_2: {
    ja: '二極化でなく多次元化、そこからの融和',
    en: 'Polarize to higher dimensions, and harmony',
  },
  information: { ja: 'ご案内', en: 'Information' },
  content1: { ja: '朗読アプリ', en: 'Audiobook app' },
  content1_1: { ja: '「読めティア」', en: 'YOMETIA' },
  news: { ja: 'お知らせ', en: 'News' },
  news1: { ja: 'その他', en: 'Othres' },
  news1_1: { ja: 'NUMTHREE 始動', en: 'NUMTHREE starting' },
});

export const servicePage: any = createI18n(['ja', 'en'] as const).add({
  servicehead: { ja: 'サービスのご案内', en: 'Introduction of service' },
  servicetitle1: {
    ja: '朗読アプリ「読めティア」',
    en: 'Audiobook app YOMETIA',
  },
  servicecontent1_1: {
    ja: '青空文庫の5000作品を聞き放題！',
    en: 'Unlimited listening over 5000 literary works',
  },
});

export const yometiaPage: any = createI18n(['ja', 'en'] as const).add({
  yometiahead: {
    ja: '朗読アプリ「読めティア」',
    en: 'Audiobook app YOMETIA',
  },
  yometiacontent1_1: {
    ja: '青空文庫の5000冊を丸ごと収録',
    en: 'Unlimited listening over 5000 literary works',
  },
  yometiacontent1_2: {
    ja: 'いろいろなキャラクターの声で作品の朗読を楽しめます。',
    en: 'Enjoy so many works with wide variety of charactor voices.',
  },
});

export const teamPage: any = createI18n(['ja', 'en'] as const).add({
  teamhead: {
    ja: 'チーム概要',
    en: 'Introduction of team',
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
    en: 'contact',
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

export const finishPage: any = createI18n(['ja', 'en'] as const).add({
  finishhead: {
    ja: '送信完了',
    en: 'contact is sent',
  },
  finishcontent: {
    ja: '送信が完了しました。3秒後に戻ります。',
    en: 'contact is sent. wait for 3 seconds...',
  },
});
