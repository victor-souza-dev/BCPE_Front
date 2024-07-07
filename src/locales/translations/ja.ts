import { tokens } from "../tokens";

export const ja: typeof tokens = {
  languages: {
    en: "英語",
    es: "スペイン語",
    ptbr: "ポルトガル語",
    de: "ドイツ語",
    ru: "ロシア語",
    it: "イタリア語",
    ja: "日本語",
  },
  navbar: {
    title: "バッチCSSプロパティエクストラクタ",
  },
  extractCssToJson: {
    root: "ルート",
    file: "ファイル",
    files: "ファイル",
    submit: "送信",
    className: "クラス名",
    config: "設定",
    property: "プロパティ",
    keyValues: "キーと値",
    values: "値",
    variableName: "変数名",
  },
  threeList: {
    addConfig: "設定を追加",
    addValue: "値を追加",
  },
  exceptions: {
    notFound: "見つかりません",
  },
  words: {
    generate: "生成",
    tutorial: "チュートリアル",
    skip: "スキップ",
    back: "戻る",
    close: "閉じる",
    next: "次へ",
    search: "検索",
  },
  phrases: {
    fileCss: "CSSファイル",
    uploadCss: "CSSをアップロード",
    finishTour: "ツアーを終了",
    existingConfig: "既存の設定",
    translationManager: "翻訳マネージャー",
  },
  tours: {
    body: {
      title: "ようこそ！",
      content:
        "これはウェルカムツアーです！続行するには「次へ」をクリックしてください！",
    },
    switchLanguageButton: {
      title: "言語切り替えボタン",
      content:
        "このボタンをクリックしてインターフェイスの言語を変更します。利用可能な言語から選択できます。",
    },
    treeView: {
      title: "ツリービュー",
      content:
        "ここでは、要素の構造をツリー形式で表示およびナビゲートできます。各ノードは、CSSファイルから抽出される設定または値を表します。",
    },
    config: {
      title: "設定要素",
      content:
        "この要素を使用すると、CSSの値を抽出および整理する方法を定義する新しい設定を追加できます。",
    },
    className: {
      title: "クラス名要素",
      content:
        "ここで設定が適用されるCSSクラス名を指定できます。これにより、特定のCSSプロパティを識別してグループ化することができます。",
    },
    values: {
      title: "値要素",
      content:
        "この要素で抽出したいCSS値を追加できます。各値は、特定のCSSプロパティとそれに対応する値を表します。",
    },
    keyValues: {
      title: "キーと値要素",
      content:
        "ここでCSSプロパティのキーと値のペアを定義できます。キーはCSSプロパティの名前であり、値はそのプロパティに適用されるものです。",
    },
    property: {
      title: "プロパティ要素",
      content:
        "このフィールドでは、抽出される特定のCSSプロパティを追加できます。例えば、'background-color'、'font-size'など。",
    },
    variableName: {
      title: "変数名要素",
      content:
        "ここで抽出されたCSSプロパティの変数名を定義できます。これは、プロジェクトのさまざまな部分でCSS値を再利用するのに役立ちます。",
    },
    removeButton: {
      title: "削除ボタン",
      content:
        "このボタンを使用して、ツリーから要素を削除します。これは、不要になった設定や値を削除するために使用できます。",
    },
    addValueButton: {
      title: "値追加ボタン",
      content:
        "このボタンをクリックして、現在の設定に新しい値を追加します。これにより、抽出されるCSSプロパティのリストを拡張できます。",
    },
    addConfigButton: {
      title: "設定追加ボタン",
      content:
        "このボタンを使用して、ツリーに新しい設定を追加します。各設定には複数のCSS値を含めることができます。",
    },
    generateButton: {
      title: "生成ボタン",
      content:
        "このボタンをクリックして、定義されたCSS設定と値を含むJSONを生成します。",
    },
    uploadButton: {
      title: "アップロードボタン",
      content:
        "このボタンを使用してCSSファイルをアップロードします。ファイルの内容が解析され、定義された設定に従ってCSSプロパティが抽出されます。",
    },
  },
};
