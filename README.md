

## テキストエディタとして広く使われているDraft.jsです

このリポジトリでは、create-react-appを使わない最小限のreact/ts環境を構築できるようにすることと、draft.jsの使い方を知ることを目的とした成果物があります。<br>
ダウンロードして./draft-js/dist/index.htmlをブラウザで見て頂ければ試作したテキストエディタが使えます。<br>

## 主なライブラリ

これらを入れると動きます。<br>
"@types/draft-js": "^0.10.44"<br>
"draft-js": "^0.11.7"<br>
"draft-js-export-html": "^1.4.1"<br>
"draft-js-import-html": "^1.4.1"<br>

## まだ理解しきれていない部分

・draft-jsの詳細なスタイリング<br>
・特にフォントの反映<br>
・draft-js標準装備のconvertToRawやconvertFromRawを使ってjson形式で保存・通信するにはどうしたらよいのか<br>
・EditorComponentのFunctionalComponentでの書き方(←これは割とすぐできそう)<br>
<br>
