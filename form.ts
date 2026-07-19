/**
 * form.ts
 **
 * function：メイン
 **/

'use strict';

// 名前空間
import { myConst } from './consts/globalvariables';

// モジュール定義
import * as path from 'node:path'; // パス用
import { config as dotenv } from 'dotenv'; // 環境変数用
import express from 'express'; // http通信用
import helmet from 'helmet'; // XSS対策用
import { xss } from 'express-xss-sanitizer'; // サニタイズ用
import Logger from './class/Logger'; // ロガー
import NodeCache from 'node-cache'; // node-cache
import {
  commonPage,
  indexPage,
  servicePage,
  yometiaPage,
  teamPage,
  contactPage,
  privacyPage,
  finishPage,
} from './i18n'; // 多言語対応
import SQL from './class/MySqlJoinShort'; // DB

/// モジュール設定
// 環境変数
dotenv({ path: path.join(__dirname, '.env') });
// ロガー設定
const logger: Logger = new Logger(
  myConst.COMPANY_NAME,
  myConst.APP_NAME,
  undefined,
  myConst.LOG_LEVEL,
);
// DB設定
const myDB: SQL = new SQL(
  process.env.SQL_HOST!, // ホスト名
  process.env.SQL_COMMON_USER!, // ユーザ名
  process.env.SQL_COMMON_PASS!, // ユーザパスワード
  Number(process.env.SQL_PORT), // ポートNO
  process.env.SQL_DBNAME!, // DB名
  logger, // ロガー
);
// cache instance
const cacheMaker: NodeCache = new NodeCache();
logger.info('configuration started');
// ポート番号
const defaultPort: number = Number(process.env.SERVER_PORT);
// express設定
const app: any = express(); // express初期化
app.use(express.json()); // json設定
app.use(
  express.urlencoded({
    extended: true, // body parser使用
  }),
);
app.use(express.static(path.join(__dirname, 'public'))); // public使用
app.set('views', path.join(__dirname, 'views')); // views使用
app.set('view engine', 'ejs'); // ejs使用
// XSS対策
app.use(xss());
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        'script-src': [
          "'self'",
          "'unsafe-inline'",
          'cdnjs.cloudflare.com',
          'ajax.googleapis.com',
          'cdn.jsdelivr.net',
        ],
        'img-src': ["'self'", 'data: image:', 'http://www.w3.org/2000/svg'],
        'connect-src': ["'self'", 'cdnjs.cloudflare.com', 'cdn.jsdelivr.net'],
      },
    },
  }),
);
logger.info('corporate: configuration completed');

/// get
// トップ画面
app.get('/', async (req: any, res: any) => {
  try {
    logger.debug('corporate: top get');
    // 対象言語
    let language: string = 'ja';
    // 一般データ
    let common: any;
    // 対象データ
    let content: any;
    // セット済み言語
    const presetLanguage: any = cacheMaker.get('language');
    // セット済み言語判定
    if (!presetLanguage) {
      // 優先言語
      const acceptLanguage = req.headers['accept-language'];
      // 対象有
      if (acceptLanguage) {
        // パース
        const languages: any = acceptLanguage.split(',');
        // 一番優先度の高い言語（先頭）を抽出
        const primaryLang = languages[0].split(';')[0];
        // 言語判定
        if (primaryLang.includes('ja')) {
          // 日本語
          language = 'ja';
        } else {
          // それ以外は英語
          language = 'en';
        }
      } else {
        // それ以外は英語
        language = 'en';
      }
    } else {
      language = presetLanguage;
    }
    // cache
    cacheMaker.set('language', language);
    // 日本語一般
    const jaCommon: any = commonPage.build('ja');
    // 英語一般
    const enCommon: any = commonPage.build('en');
    // 日本語トップページ
    const jaIndex: any = indexPage.build('ja');
    // 英語トップページ
    const enIndex: any = indexPage.build('en');
    // 言語切り替え
    if (language == 'ja') {
      common = jaCommon;
      content = jaIndex;
    } else {
      common = enCommon;
      content = enIndex;
    }
    // トップ画面
    res.render('index', {
      common: common,
      data: content,
    });
  } catch (e: unknown) {
    logger.error(e);
    // エラー
    res.render('error', {
      title: '404',
      message: 'Not Found',
    });
  }
});

// サービス画面
app.get('/service', async (_: any, res: any) => {
  try {
    logger.debug('corporate: service get');
    // 一般データ
    let common: any;
    // 対象データ
    let service: any;
    // 対象言語
    const language = cacheMaker.get('language');
    // 日本語一般
    const jaCommon: any = commonPage.build('ja');
    // 英語一般
    const enCommon: any = commonPage.build('en');
    // 日本語サービスページ
    const jaService: any = servicePage.build('ja');
    // 英語サービスページ
    const enService: any = servicePage.build('en');
    // 言語切り替え
    if (language == 'ja') {
      common = jaCommon;
      service = jaService;
    } else {
      common = enCommon;
      service = enService;
    }
    // サービス画面
    res.render('service', { common: common, service: service });

  } catch (e: unknown) {
    logger.error(e);
    // エラー
    res.render('error', {
      title: '404',
      message: 'Not Found',
    });
  }
});

// 嫁ティア画面
app.get('/yometia', async (_: any, res: any) => {
  try {
    logger.debug('corporate: yometia get');
    // 一般データ
    let common: any;
    // 対象データ
    let yometia: any;
    // 対象言語
    const language = cacheMaker.get('language');
    // 日本語一般
    const jaCommon: any = commonPage.build('ja');
    // 英語一般
    const enCommon: any = commonPage.build('en');
    // 日本語嫁ティアページ
    const jaYometia: any = yometiaPage.build('ja');
    // 英語嫁ティアページ
    const enYometia: any = yometiaPage.build('en');
    // 言語切り替え
    if (language == 'ja') {
      common = jaCommon;
      yometia = jaYometia;
    } else {
      common = enCommon;
      yometia = enYometia;
    }
    // トップ画面
    res.render('yometia', { common: common, yometia: yometia });

  } catch (e: unknown) {
    logger.error(e);
    // エラー
    res.render('error', {
      title: '404',
      message: 'Not Found',
    });
  }
});

// チーム画面
app.get('/team', async (_: any, res: any) => {
  try {
    logger.debug('corporate: team get');
    // 一般データ
    let common: any;
    // 対象データ
    let team: any;
    // 対象言語
    const language = cacheMaker.get('language');
    // 日本語一般
    const jaCommon: any = commonPage.build('ja');
    // 英語一般
    const enCommon: any = commonPage.build('en');
    // 日本語チームページ
    const jaTeam: any = teamPage.build('ja');
    // 英語サービスページ
    const enTeam: any = teamPage.build('en');
    // 言語切り替え
    if (language == 'ja') {
      common = jaCommon;
      team = jaTeam;
    } else {
      common = enCommon;
      team = enTeam;
    }
    // トップ画面
    res.render('team', { common: common, team: team });

  } catch (e: unknown) {
    logger.error(e);
    // エラー
    res.render('error', {
      title: '404',
      message: 'Not Found',
    });
  }
});

// プライバシーポリシー
app.get('/privacy', async (req: any, res: any) => {
  try {
    // モード
    logger.info('corporate: privacy policy post');
    // 一般データ
    let common: any;
    // プライバシーデータ
    let privacy: any;
    // 対象言語
    const language = cacheMaker.get('language') ?? 'en';
    // 日本語一般
    const jaCommon: any = commonPage.build('ja');
    // 英語一般
    const enCommon: any = commonPage.build('en');
    // 日本語チームページ
    const jaPrivacy: any = privacyPage.build('ja');
    // 英語サービスページ
    const enPrivacy: any = privacyPage.build('en');
    // 言語切り替え
    if (language == 'ja') {
      common = jaCommon;
      privacy = jaPrivacy;
    } else {
      common = enCommon;
      privacy = enPrivacy;
    }
    // 確認画面
    res.render('privacy', { common: common, privacy: privacy });

  } catch (e: unknown) {
    logger.error(e);
    // エラー
    res.render('error', {
      title: '404',
      message: 'Not Found',
    });
  }
});

// 問い合わせ画面
app.get('/contact', async (_: any, res: any) => {
  try {
    logger.debug('corporate: contact get');
    // 一般データ
    let common: any;
    // 対象データ
    let contact: any;
    // 対象言語
    const language = cacheMaker.get('language');
    // 日本語一般
    const jaCommon: any = commonPage.build('ja');
    // 英語一般
    const enCommon: any = commonPage.build('en');
    // 日本語問い合わせページ
    const jaContact: any = contactPage.build('ja');
    // 英語問い合わせページ
    const enContact: any = contactPage.build('en');
    // 言語切り替え
    if (language == 'ja') {
      common = jaCommon;
      contact = jaContact;
    } else {
      common = enCommon;
      contact = enContact;
    }
    // 問い合わせ画面
    res.render('contact', { common: common, contact: contact, language: language });

  } catch (e: unknown) {
    logger.error(e);
    // エラー
    res.render('error', {
      title: '404',
      message: 'Not Found',
    });
  }
});

// 確認画面
app.get('/confirm', async (_: any, res: any) => {
  try {
    logger.debug('corporate: form confirm get');
    // 一般データ
    let common: any;
    // 対象データ
    let contact: any;
    // 対象言語
    const language = cacheMaker.get('language');
    // 日本語一般
    const jaCommon: any = commonPage.build('ja');
    // 英語一般
    const enCommon: any = commonPage.build('en');
    // 日本語問い合わせページ
    const jaContact: any = contactPage.build('ja');
    // 英語問い合わせページ
    const enContact: any = contactPage.build('en');
    // 言語切り替え
    if (language == 'ja') {
      common = jaCommon;
      contact = jaContact;
    } else {
      common = enCommon;
      contact = enContact;
    }
    // 確認画面
    res.render('confirm', {
      common: common,
      contact: contact,
      customerid: '',
      customername: '',
      customermail: '',
      content: '',
    });

  } catch (e: unknown) {
    logger.error(e);
    // エラー
    res.render('error', {
      title: '404',
      message: 'Not Found',
    });
  }
});

/// post
// フォーム登録
app.post('/form', async (req: any, res: any) => {
  try {
    // モード
    logger.info('corporate: form post');
    // 一般データ
    let common: any;
    // 対象データ
    let contact: any;
    // 対象言語
    const language = cacheMaker.get('language');
    // 日本語一般
    const jaCommon: any = commonPage.build('ja');
    // 英語一般
    const enCommon: any = commonPage.build('en');
    // 日本語問い合わせページ
    const jaContact: any = contactPage.build('ja');
    // 英語問い合わせページ
    const enContact: any = contactPage.build('en');
    // 言語切り替え
    if (language == 'ja') {
      common = jaCommon;
      contact = jaContact;
    } else {
      common = enCommon;
      contact = enContact;
    }
    // 受け取りデータ
    const customername: any = req.body.customername ?? '';
    const customermail: any = req.body.customermail ?? '';
    const content: any = req.body.content ?? '';
    // 対象データ
    const insertDataArgs: insertargs = {
      table: 'contact', // テーブル
      columns: ['customername', 'customermail', 'content', 'usable'], // カラム
      values: [customername, customermail, content, 1], // 値
    };
    // インサートID
    const insertedId: any = await myDB.insertDB(insertDataArgs);
    // 結果
    if (insertedId == 'error' || insertedId == 'empty') {
      // エラー
      throw new Error('insertData: insert error');
    }
    // 確認画面
    res.render('confirm', {
      common: common,
      contact: contact,
      customerid: insertedId,
      customername: customername,
      customermail: customermail,
      content: content,
    });

  } catch (e: unknown) {
    logger.error(e);
    // エラー
    res.render('error', {
      title: '404',
      message: 'Not Found',
    });
  }
});

// 言語変更
app.post('/language', async (req: any, res: any) => {
  try {
    // モード
    logger.info('corporate: language post');
    // cache
    cacheMaker.set('language', req.body.language);
    // res
    res.send('ok');

  } catch (e: unknown) {
    logger.error(e);
    // エラー
    res.render('error', {
      title: '404',
      message: 'Not Found',
    });
  }
});

// フォーム確定
app.post('/confirmed', async (req: any, res: any) => {
  try {
    // モード
    logger.info('corporate: form post');
    // 受け取りデータ
    const customerid: any = req.body.customerid;
    // なしならエラー
    if (!customerid) {
      // エラー
      throw new Error('confirmed: no customerid error');
    }
    // 対象データ
    const updateArgs: updateargs = {
      table: 'contact', // テーブル
      setcol: ['usable'], // 準備完了
      setval: [1], // 完了
      selcol: ['id'], // 対象
      selval: [customerid], // 対象値
    };
    // 更新処理
    const updateResult = await myDB.updateDB(updateArgs);
    // 結果
    if (updateResult == 'error') {
      // エラー
      throw new Error('mysql: updateData error');
    } else if (updateResult == 'empty') {
      // 対象なし
      logger.trace('mysql: updateData empty');
    }
    // 一般データ
    let common: any;
    // 完了データ
    let finish: any;
    // 対象言語
    const language = cacheMaker.get('language') ?? 'en';
    // 日本語一般
    const jaCommon: any = commonPage.build('ja');
    // 英語一般
    const enCommon: any = commonPage.build('en');
    // 日本語完了ページ
    const jaFinish: any = finishPage.build('ja');
    // 英語完了ページ
    const enFinish: any = finishPage.build('en');
    // 言語切り替え
    if (language == 'ja') {
      common = jaCommon;
      finish = jaFinish;
    } else {
      common = enCommon;
      finish = enFinish;
    }
    // 確認画面
    res.render('finish', { common: common, finish: finish });

  } catch (e: unknown) {
    logger.error(e);
    // エラー
    res.render('error', {
      title: '404',
      message: 'Not Found',
    });
  }
});

// エラーハンドラ
app.use(
  (
    err: Error,
    _: express.Request,
    res: express.Response,
    __: express.NextFunction,
  ) => {
    logger.error(err);
    // エラー
    res.render('error', {
      title: '404',
      message: 'Not Found',
    });
  },
);

// 待機
app.listen(defaultPort, () => {
  try {
    logger.info(
      `${myConst.SERVER_NAME} listening at ${myConst.DEFAULT_URL}:${defaultPort}`,
    );

  } catch (e) {
    logger.error(e);
  }
});
