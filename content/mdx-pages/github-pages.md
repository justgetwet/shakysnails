---
title: GitHub Pages
date: 2021-04-01
tags: ['GitHub', 'Gatsby']
---

Gatsbyで作成したブログサイトを、コードを管理するGitHubのレポジトリで公開する手順を残す。

### 1. Gatsbyプロジェクト

本家のドキュメント [How Gatsby Works with GitHub Pages](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/)を読む。`gh-pages` をインストールする。

```shell
# minimal starter
npm init gatsby
# install a package
npm i -D gh-pages
```

デプロイのコマンドを作成。`-b deploy` はGitHub上のdeployブランチのこと。`npm run deploy` でビルドから公開まで走る。

```json
// package.json
{
  "scripts": {
    "deploy": "gatsby build && gh-pages -d public -b deploy"
  }
}
```

### 2. GitHubでの作業

対象プロジェクトのレポジトリを作成。`git remote add`、（紐づけ）まで完了させる。

```shell
# deployブランチを作成
git branch deploy
git branch
deploy
* main
```

ブラウザ上のレポジトリのSettingsを選択、下へスクロールし、GitHub Pagesを選択する。Source項目のBranchプルダウンから`deploy`を選択し、`Save`をクリックする。 

### 3. 運用

`npm run deploy` https://[ユーザ名].github.io/[レポジトリ名] で公開される。

なお`deploy`ブランチへは、ローカルでビルドし、`public`フォルダに生成された静的ファイルをプッシュするので、公開コンテンツは、`main`ブランチへ`push`されたプロジェクトコードと直接的に連動していない。プロジェクトコードの`commit` `push` も同時に行いリモート上の整合性を保つようにする。

