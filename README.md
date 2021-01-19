

## テキストエディタとして広く使われているDraft.jsです

このリポジトリでは、create-react-appを使わない最小限のreact/ts環境を構築できるようにすることと、draft.jsの使い方を知ることを目的とした成果物があります。
ダウンロードして./draft-js/dist/index.htmlをブラウザで見て頂ければ試作したテキストエディタが使えます。

## 主なライブラリ

これらを入れると動きます。
"@types/draft-js": "^0.10.44"
"draft-js": "^0.11.7"
"draft-js-export-html": "^1.4.1"
"draft-js-import-html": "^1.4.1"

##　まだ理解しきれていない部分

・draft-jsの詳細なスタイリング
・特にフォントの反映
・draft-js標準装備のconvertToRawやconvertFromRawを使ってjson形式で保存・通信するにはどうしたらよいのか
・EditorComponentのFunctionalComponentでの書き方(←これは割とすぐできそう)

