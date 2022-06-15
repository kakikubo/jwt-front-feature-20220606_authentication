class MyInject {
  // Nuxtのcontextを使用するには、constructor内で初期化する
  constructor (ctx) {
    // ctx => { app }
    this.app = ctx.app
  }

  // i18nページタイトル変換
  pageTitle (routeName) {
    // routeName => 'account-settings'
    const jsonPath = `pages.${routeName.replace(/-/g, '.')}`
    const title = this.app.i18n.t(jsonPath)
    return title
  }

  // 日付のフォーマット変換
  dateFormat (dateStr) {
    const dateTimeFormat = new Intl.DateTimeFormat(
      'ja', { dateStyle: 'medium', timeStyle: 'short' }
    )
    return dateTimeFormat.format(new Date(dateStr))
  }

  // プロジェクトのリンクを生成する
  projectLinkTo (id, name = 'project-id-dashboard') {
    return { name, params: { id } }
  }
}

// inject => オリジナルクラスを追加することができる
// export default (context, inject) => {
export default ({ app }, inject) => {
  // inject('呼び出し名', クラスのインスタンス(context))
  // 'my' => $my
  inject('my', new MyInject({ app }))
}
