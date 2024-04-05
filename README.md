# broken-app

このアプリケーションは壊れています。。。
TypeScript を導入してエラーを直していきましょう。

## 準備

- npm install してパッケージをダウンロードします
- npm run dev して起動します

## TypeScript を入れる

```:bash
npm install -D typescript
npx tsc --init
```

- tsconfig.json が生成されるので、以下を有効にしてください

```:ts
{
  "compilerOptions": {
    ~~
    "allowImportingTsExtensions": true /* Allow imports to include TypeScript file extensions. Requires '--moduleResolution bundler' and either '--noEmit' or '--emitDeclarationOnly' to be set. */,
    "noEmit": true /* Disable emitting files from a compilation. */
    ~~
  },
  "include": ["src"]
}

```

- ref: https://www.typescriptlang.org/ja/tsconfig

## typescript にして型エラーを修正する

- main.js と products.js を .ts 拡張子に書き換えましょう
- index.html も忘れずに

## 壊れたアプリケーションを直していく

- 以下を直してみましょう！
  - 商品一覧の情報が表示されていない...
    - Tips
      - API の型を response の json から生成してみましょう
      - ref: https://app.quicktype.io/
  - 商品詳細ページに遷移できない...
  - 商品詳細ページの価格が NaN になってる...
