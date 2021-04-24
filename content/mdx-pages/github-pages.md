---
title: Gatsby Works with GitHub Pages
date: 2021-04-01
tags: ['Gatsby', 'GitHub']
---

 GitHub Pages に Gatsby で生成した blog を公開する手順を残す。

### 1. GitHub Pages

[GitHub Pages]([GitHub Pages Documentation - GitHub Docs](https://docs.github.com/en/pages)) はGitHub の静的サイトホスティングサービス。ruby 製の Jekyll が使われている。

- to a path like `username.github.io/reponame/` or `/docs`

### 2. Gatsby から deploy する

[How Gatsby Works with GitHub Pages](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/) を読む。

`gh-pages` package をインストールする。

```shell
# install
npm i -D gh-pages
```

Gatsby の設定ファイルに root path を記述する。

```js
// gatsby-config.js
module.exports = {
  pathPrefix: "/reponame",
}
```

package.json に deploy script を記述する。

```json
// package.json
{
  "scripts": {
    "deploy": "gatsby build --prefix-paths && gh-pages -d public -b pub"
  }
}
```

deploy 用のブランチを作成する。

```shell
# ブランチを作成
git branch pub
```

deploy する。

```shell
npm run deploy
```



(repository) Setting ➡️ GitHub Pages ➡️ Source ➡️ Branch

 ➡️ (pulldown) pub ➡️ (button) Save

pathPrefix をしない(dotenvだ)と画像がぼやける。

fontsouceが機能しないので、CDNからWebフォントを読み込む。

deploy後数分待つ場合がある