# broken-app

このアプリケーションは壊れています。。。
TypeScript を導入してエラーを直していきましょう。

## 準備

- npm install してパッケージをダウンロードします
- npm run dev して起動します

## 動かしてみる

- まずはカウンターを動かしてみましょう！
  - arere...

## TypeScript を入れる

```:bash
npm install -D typescript
npx tsc --init
```

- tsconfig.json が生成されるので、以下を有効にしてください

  - allowImportingTsExtensions: true
  - noEmit: true

- ref: https://www.typescriptlang.org/ja/tsconfig

## typescript にして型エラーを修正する

- main.js と counter.js を .ts 拡張子に書き換えましょう
- 赤波線で怒られているはず。エラーメッセージを見て直しましょう
