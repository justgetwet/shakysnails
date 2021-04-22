---
title: gatsby and dotenv
date: 2021-04-02
tags: ['gatsby']
---

Gatsbyの本場と開発で環境変数を変える

### 1. dotenv

nodeの[dotenv](https://www.npmjs.com/package/dotenv)パッケージを利用する

```shell
npm i dotenv
```

ｄ

```js
//gatsby-config.js
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
```

API Keyなど記述する場合、セキュリティ上

```js
// .gitignore
.env.*
```



### 2. 設定ファイル

```JS
//.env.development
rootPath="/"
```

文字列はダブルコーテーション（バッククオートはNG）

```js
//.env.production
rootPath="shakysnails"
```

### 3. しれ

```js
export default ({ node }) => {
  const rootPath = `${process.env.rootPath}`
  <Link to={rootPath + node.slug}>node.title</Link>
  }
```

