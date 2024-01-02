import{_ as i,r as l,o as r,c as u,d as a,w as t,a as n,b as s,e as o}from"./app.26c798e2.js";const k={},d=o('<h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2><ul><li>安装配置</li><li>dev-server</li><li>解析 ES6： babel-loader</li><li>解析 CSS： style-loader、css-loader, postcss-loader</li><li>解析图片： url-loader, file-loader</li><li>解析字体： file-loader</li><li>解析数据： csv-loader, xml-loader</li><li>插件： html-webpack-plugin, clean-webpack-plugin</li></ul>',2),m=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"07-webpack-demo"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"version"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1.0.0"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"description"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"main"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"index.js"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"scripts"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"test"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"echo \\"Error: no test specified\\" && exit 1"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"devBuild"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"webpack --config build-base-conf/webpack.dev.js"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"dev"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"webpack-dev-server --config build-base-conf/webpack.dev.js"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"build"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"webpack --config build-base-conf/webpack.prod.js"'),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"keywords"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"author"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"license"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"ISC"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"devDependencies"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"@babel/core"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^7.7.4"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"@babel/preset-env"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^7.7.4"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"autoprefixer"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^9.7.3"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"babel-loader"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^8.0.6"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"clean-webpack-plugin"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^3.0.0"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"css-loader"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^3.2.1"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"file-loader"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^5.0.2"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"happypack"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^5.0.1"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"html-webpack-plugin"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^3.2.0"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"less"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^3.10.3"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"less-loader"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^5.0.0"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"mini-css-extract-plugin"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^0.8.0"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"optimize-css-assets-webpack-plugin"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^5.0.3"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"postcss-loader"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^3.0.0"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"style-loader"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^1.0.1"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"terser-webpack-plugin"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^2.2.2"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"url-loader"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^3.0.0"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"webpack"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^4.41.2"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"webpack-cli"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^3.3.10"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"webpack-dev-server"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^3.9.0"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"webpack-merge"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^4.2.2"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"webpack-parallel-uglify-plugin"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^1.1.2"'),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"dependencies"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"lodash"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^4.17.15"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token property"},'"moment"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"^2.24.0"'),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" path "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'path'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" HtmlWebpackPlugin "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'html-webpack-plugin'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" srcPath"),n("span",{class:"token punctuation"},","),s(" distPath "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./paths'"),n("span",{class:"token punctuation"},")"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"entry"),n("span",{class:"token operator"},":"),s(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),s("srcPath"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'index'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"module"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"test"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.js$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"loader"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'babel-loader'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"include"),n("span",{class:"token operator"},":"),s(" srcPath"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"exclude"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"node_modules"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"// {"),s(`
      `),n("span",{class:"token comment"},"//     test: /\\.vue$/,"),s(`
      `),n("span",{class:"token comment"},"//     loader: ['vue-loader'],"),s(`
      `),n("span",{class:"token comment"},"//     include: srcPath"),s(`
      `),n("span",{class:"token comment"},"// },"),s(`
      `),n("span",{class:"token comment"},"// {"),s(`
      `),n("span",{class:"token comment"},"//     test: /\\.css$/,"),s(`
      `),n("span",{class:"token comment"},"//     // loader 的执行顺序是：从后往前（知识点）"),s(`
      `),n("span",{class:"token comment"},"//     loader: ['style-loader', 'css-loader']"),s(`
      `),n("span",{class:"token comment"},"// },"),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"test"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.css$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// loader 的执行顺序是：从后往前"),s(`
        `),n("span",{class:"token literal-property property"},"loader"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'style-loader'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'css-loader'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'postcss-loader'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 加了 postcss"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"test"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.less$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// 增加 'less-loader' ，注意顺序"),s(`
        `),n("span",{class:"token literal-property property"},"loader"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'style-loader'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'css-loader'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'less-loader'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"HtmlWebpackPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"template"),n("span",{class:"token operator"},":"),s(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),s("srcPath"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'index.html'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"filename"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'index.html'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" path "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'path'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(" srcPath "),n("span",{class:"token operator"},"="),s(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),s("__dirname"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'..'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'src'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" distPath "),n("span",{class:"token operator"},"="),s(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),s("__dirname"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'..'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'dist'"),n("span",{class:"token punctuation"},")"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  srcPath`),n("span",{class:"token punctuation"},","),s(`
  distPath`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" path "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'path'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" webpack "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'webpack'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" webpackCommonConf "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./webpack.common.js'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" smart "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'webpack-merge'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" srcPath"),n("span",{class:"token punctuation"},","),s(" distPath "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./paths'"),n("span",{class:"token punctuation"},")"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"smart"),n("span",{class:"token punctuation"},"("),s("webpackCommonConf"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"mode"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'development'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"module"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token comment"},"// 直接引入图片 url"),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"test"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.(png|jpg|jpeg|gif)$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"use"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'file-loader'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("webpack"),n("span",{class:"token punctuation"},"."),s("DefinePlugin")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// window.ENV = 'development'"),s(`
      `),n("span",{class:"token constant"},"ENV"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'development'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"devServer"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"port"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"8080"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"progress"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 显示打包的进度条"),s(`
    `),n("span",{class:"token literal-property property"},"contentBase"),n("span",{class:"token operator"},":"),s(" distPath"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 根目录"),s(`
    `),n("span",{class:"token literal-property property"},"open"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 自动打开浏览器"),s(`
    `),n("span",{class:"token literal-property property"},"compress"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 启动 gzip 压缩"),s(`

    `),n("span",{class:"token comment"},"// 设置代理"),s(`
    `),n("span",{class:"token literal-property property"},"proxy"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 将本地 /api/xxx 代理到 localhost:3000/api/xxx"),s(`
      `),n("span",{class:"token string-property property"},"'/api'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://localhost:3000'"),n("span",{class:"token punctuation"},","),s(`

      `),n("span",{class:"token comment"},"// 将本地 /api2/xxx 代理到 localhost:3000/xxx"),s(`
      `),n("span",{class:"token string-property property"},"'/api2'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"target"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://localhost:3000'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"pathRewrite"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token string-property property"},"'/api2'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" path "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'path'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" webpack "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'webpack'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" CleanWebpackPlugin "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'clean-webpack-plugin'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" webpackCommonConf "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./webpack.common.js'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" smart "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'webpack-merge'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" srcPath"),n("span",{class:"token punctuation"},","),s(" distPath "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./paths'"),n("span",{class:"token punctuation"},")"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"smart"),n("span",{class:"token punctuation"},"("),s("webpackCommonConf"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"mode"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'production'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"output"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"filename"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'bundle.[contentHash:8].js'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 打包代码时，加上 hash 戳"),s(`
    `),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),s(" distPath"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token comment"},"// publicPath: 'http://cdn.abc.com'  // 修改所有静态文件 url 的前缀（如 cdn 域名），这里暂时用不到"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"module"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token comment"},"// 图片 - 考虑 base64 编码的情况"),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"test"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.(png|jpg|jpeg|gif)$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"use"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"loader"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'url-loader'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"options"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// 小于 5kb 的图片用 base64 格式产出"),s(`
            `),n("span",{class:"token comment"},"// 否则，依然延用 file-loader 的形式，产出 url 格式"),s(`
            `),n("span",{class:"token literal-property property"},"limit"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"1024"),n("span",{class:"token punctuation"},","),s(`

            `),n("span",{class:"token comment"},"// 打包到 img 目录下"),s(`
            `),n("span",{class:"token literal-property property"},"outputPath"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'/img1/'"),n("span",{class:"token punctuation"},","),s(`

            `),n("span",{class:"token comment"},"// 设置图片的 cdn 地址（也可以统一在外面的 output 中设置，那将作用于所有静态资源）"),s(`
            `),n("span",{class:"token comment"},"// publicPath: 'http://cdn.abc.com'"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"CleanWebpackPlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 会默认清空 output.path 文件夹"),s(`
    `),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("webpack"),n("span",{class:"token punctuation"},"."),s("DefinePlugin")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// window.ENV = 'production'"),s(`
      `),n("span",{class:"token constant"},"ENV"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'production'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string-property property"},'"presets"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"@babel/preset-env"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string-property property"},'"plugins"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=o(`<h2 id="高级特性" tabindex="-1"><a class="header-anchor" href="#高级特性" aria-hidden="true">#</a> 高级特性</h2><ul><li>多入口配置</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.common.js</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> srcPath<span class="token punctuation">,</span> distPath <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./paths&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">&#39;index.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">other</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">&#39;other.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">include</span><span class="token operator">:</span> srcPath<span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// {</span>
      <span class="token comment">//     test: /\\.css$/,</span>
      <span class="token comment">//     // loader 的执行顺序是：从后往前</span>
      <span class="token comment">//     loader: [&#39;style-loader&#39;, &#39;css-loader&#39;]</span>
      <span class="token comment">// },</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// loader 的执行顺序是：从后往前</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 加了 postcss</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// 增加 &#39;less-loader&#39; ，注意顺序</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// new HtmlWebpackPlugin({</span>
    <span class="token comment">//     template: path.join(srcPath, &#39;index.html&#39;),</span>
    <span class="token comment">//     filename: &#39;index.html&#39;</span>
    <span class="token comment">// })</span>

    <span class="token comment">// 多入口 - 生成 index.html</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// chunks 表示该页面要引用哪些 chunk （即上面的 index 和 other），默认全部引用</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 只引用 index.js</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 多入口 - 生成 other.html</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">,</span> <span class="token string">&#39;other.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;other.html&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;other&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 只引用 other.js</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),x=n("p",null,"抽离压缩 css",-1),f={href:"https://v4.webpack.js.org/plugins/terser-webpack-plugin/",target:"_blank",rel:"noopener noreferrer"},P={href:"http://npmjs.com/package/mini-css-extract-plugin",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.npmjs.com/package/optimize-css-assets-webpack-plugin",target:"_blank",rel:"noopener noreferrer"},j={href:"https://www.npmjs.com/package/clean-webpack-plugin",target:"_blank",rel:"noopener noreferrer"},C=o(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.prod.js</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> smart <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-merge&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> TerserJSPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;terser-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> OptimizeCSSAssetsPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;optimize-css-assets-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpackCommonConf <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.common.js&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> srcPath<span class="token punctuation">,</span> distPath <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./paths&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">smart</span><span class="token punctuation">(</span>webpackCommonConf<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// filename: &#39;bundle.[contentHash:8].js&#39;,  // 打包代码时，加上 hash 戳</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].[contentHash:8].js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// name 即多入口时 entry 的 key</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> distPath<span class="token punctuation">,</span>
    <span class="token comment">// publicPath: &#39;http://cdn.abc.com&#39;  // 修改所有静态文件 url 的前缀（如 cdn 域名），这里暂时用不到</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 图片 - 考虑 base64 编码的情况</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpg|jpeg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 小于 5kb 的图片用 base64 格式产出</span>
            <span class="token comment">// 否则，依然延用 file-loader 的形式，产出 url 格式</span>
            <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>

            <span class="token comment">// 打包到 img 目录下</span>
            <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;/img1/&#39;</span><span class="token punctuation">,</span>

            <span class="token comment">// 设置图片的 cdn 地址（也可以统一在外面的 output 中设置，那将作用于所有静态资源）</span>
            <span class="token comment">// publicPath: &#39;http://cdn.abc.com&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 抽离 css</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span> <span class="token comment">// 注意，这里不再用 style-loader</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 抽离 less --&gt; css</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span> <span class="token comment">// 注意，这里不再用 style-loader</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 会默认清空 output.path 文件夹</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// window.ENV = &#39;production&#39;</span>
      <span class="token constant">ENV</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// 抽离 css 文件</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;css/main.[contentHash:8].css&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 压缩 css</span>
    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">TerserJSPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">OptimizeCSSAssetsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),q=n("p",null,"抽离功能代码",-1),S={href:"https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkschunks",target:"_blank",rel:"noopener noreferrer"},E=o(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.prod.js</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> smart <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-merge&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> TerserJSPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;terser-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> OptimizeCSSAssetsPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;optimize-css-assets-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpackCommonConf <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.common.js&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> srcPath<span class="token punctuation">,</span> distPath <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./paths&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">smart</span><span class="token punctuation">(</span>webpackCommonConf<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// filename: &#39;bundle.[contentHash:8].js&#39;,  // 打包代码时，加上 hash 戳</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].[contentHash:8].js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// name 即多入口时 entry 的 key</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> distPath<span class="token punctuation">,</span>
    <span class="token comment">// publicPath: &#39;http://cdn.abc.com&#39;  // 修改所有静态文件 url 的前缀（如 cdn 域名），这里暂时用不到</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 图片 - 考虑 base64 编码的情况</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpg|jpeg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 小于 5kb 的图片用 base64 格式产出</span>
            <span class="token comment">// 否则，依然延用 file-loader 的形式，产出 url 格式</span>
            <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>

            <span class="token comment">// 打包到 img 目录下</span>
            <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;/img1/&#39;</span><span class="token punctuation">,</span>

            <span class="token comment">// 设置图片的 cdn 地址（也可以统一在外面的 output 中设置，那将作用于所有静态资源）</span>
            <span class="token comment">// publicPath: &#39;http://cdn.abc.com&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 抽离 css</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span> <span class="token comment">// 注意，这里不再用 style-loader</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 抽离 less</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span> <span class="token comment">// 注意，这里不再用 style-loader</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 会默认清空 output.path 文件夹</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// window.ENV = &#39;production&#39;</span>
      <span class="token constant">ENV</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// 抽离 css 文件</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;css/main.[contentHash:8].css&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 压缩 css</span>
    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">TerserJSPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">OptimizeCSSAssetsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 分割代码块</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span>
      <span class="token doc-comment comment">/**
             * initial 入口 chunk，对于异步导入的文件不处理
                async 异步 chunk，只对异步导入的文件处理
                all 全部 chunk
             */</span>

      <span class="token comment">// 缓存分组</span>
      <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 第三方模块</span>
        <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;vendor&#39;</span><span class="token punctuation">,</span> <span class="token comment">// chunk 名称</span>
          <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 权限更高，优先抽离，重要！！！</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">minSize</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 大小限制</span>
          <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 最少复用过几次</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// 公共的模块</span>
        <span class="token literal-property property">common</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;common&#39;</span><span class="token punctuation">,</span> <span class="token comment">// chunk 名称</span>
          <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 优先级</span>
          <span class="token literal-property property">minSize</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 公共模块的大小限制</span>
          <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 公共模块最少复用过几次</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h2>`,2),z={href:"https://github.com/amireh/happypack",target:"_blank",rel:"noopener noreferrer"},H={href:"https://github.com/gdborton/webpack-parallel-uglify-plugin",target:"_blank",rel:"noopener noreferrer"},$=o(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.prod.js</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> smart <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-merge&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> TerserJSPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;terser-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> OptimizeCSSAssetsPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;optimize-css-assets-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HappyPack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;happypack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ParallelUglifyPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-parallel-uglify-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> webpackCommonConf <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.common.js&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> srcPath<span class="token punctuation">,</span> distPath <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./paths&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">smart</span><span class="token punctuation">(</span>webpackCommonConf<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// filename: &#39;bundle.[contentHash:8].js&#39;,  // 打包代码时，加上 hash 戳</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].[contentHash:8].js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// name 即多入口时 entry 的 key</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> distPath<span class="token punctuation">,</span>
    <span class="token comment">// publicPath: &#39;http://cdn.abc.com&#39;  // 修改所有静态文件 url 的前缀（如 cdn 域名），这里暂时用不到</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// js</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// 把对 .js 文件的处理转交给 id 为 babel 的 HappyPack 实例</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;happypack/loader?id=babel&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">include</span><span class="token operator">:</span> srcPath<span class="token punctuation">,</span>
        <span class="token comment">// exclude: /node_modules/</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 图片 - 考虑 base64 编码的情况</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpg|jpeg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 小于 5kb 的图片用 base64 格式产出</span>
            <span class="token comment">// 否则，依然延用 file-loader 的形式，产出 url 格式</span>
            <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>

            <span class="token comment">// 打包到 img 目录下</span>
            <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&#39;/img1/&#39;</span><span class="token punctuation">,</span>

            <span class="token comment">// 设置图片的 cdn 地址（也可以统一在外面的 output 中设置，那将作用于所有静态资源）</span>
            <span class="token comment">// publicPath: &#39;http://cdn.abc.com&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 抽离 css</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span> <span class="token comment">// 注意，这里不再用 style-loader</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 抽离 less</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          MiniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span> <span class="token comment">// 注意，这里不再用 style-loader</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 会默认清空 output.path 文件夹</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// window.ENV = &#39;production&#39;</span>
      <span class="token constant">ENV</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// 抽离 css 文件</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;css/main.[contentHash:8].css&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// 忽略 moment 下的 /locale 目录</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>IgnorePlugin</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.\\/locale</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">moment</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// happyPack 开启多进程打包</span>
    <span class="token keyword">new</span> <span class="token class-name">HappyPack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 用唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;babel&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 如何处理 .js 文件，用法和 Loader 配置中一样</span>
      <span class="token literal-property property">loaders</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;babel-loader?cacheDirectory&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// 使用 ParallelUglifyPlugin 并行压缩输出的 JS 代码</span>
    <span class="token keyword">new</span> <span class="token class-name">ParallelUglifyPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 传递给 UglifyJS 的参数</span>
      <span class="token comment">// （还是使用 UglifyJS 压缩，只不过帮助开启了多进程）</span>
      <span class="token literal-property property">uglifyJS</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">beautify</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 最紧凑的输出</span>
          <span class="token literal-property property">comments</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 删除所有的注释</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 删除所有的 \`console\` 语句，可以兼容ie浏览器</span>
          <span class="token literal-property property">drop_console</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token comment">// 内嵌定义了但是只用到一次的变量</span>
          <span class="token literal-property property">collapse_vars</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token comment">// 提取出出现多次但是没有定义成变量去引用的静态值</span>
          <span class="token literal-property property">reduce_vars</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 压缩 css</span>
    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">TerserJSPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">OptimizeCSSAssetsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 分割代码块</span>
    <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span>
      <span class="token doc-comment comment">/**
             * initial 入口chunk，对于异步导入的文件不处理
                async 异步chunk，只对异步导入的文件处理
                all 全部chunk
             */</span>

      <span class="token comment">// 缓存分组</span>
      <span class="token literal-property property">cacheGroups</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 第三方模块</span>
        <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;vendor&#39;</span><span class="token punctuation">,</span> <span class="token comment">// chunk 名称</span>
          <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 权限更高，优先抽离，重要！！！</span>
          <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">minSize</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 大小限制</span>
          <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 最少复用过几次</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// 公共的模块</span>
        <span class="token literal-property property">common</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;common&#39;</span><span class="token punctuation">,</span> <span class="token comment">// chunk 名称</span>
          <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 优先级</span>
          <span class="token literal-property property">minSize</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 公共模块的大小限制</span>
          <span class="token literal-property property">minChunks</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 公共模块最少复用过几次</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>DLLPlugin</p><ul><li>作用：将第三方模块单独打包，提升构建速度</li></ul></li></ul><h2 id="面试题目" tabindex="-1"><a class="header-anchor" href="#面试题目" aria-hidden="true">#</a> 面试题目</h2><ul><li><p>module chunk bundle 的区别</p><ul><li>module 是开发中的一个模块，比如一个 js 文件，一个 css 文件，一个图片文件等等</li><li>chunk 是代码块，一个 chunk 由多个模块组合而成，一般是由多个 module 组成，但也有可能只有一个 module，比如使用了动态导入的时候</li><li>bundle 是最终的打包文件，一个 bundle 由多个 chunk 组成</li></ul></li><li><p>webpack 的构建流程是什么</p><ul><li>初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数</li><li>开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译</li><li>确定入口：根据配置中的 entry 找出所有的入口文件</li><li>编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，递归直到所有入口依赖的文件都经过了本步骤的处理</li><li>完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及他们之间的依赖关系</li><li>输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 chunk，再把每个 chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会</li><li>输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统</li></ul></li></ul><h2 id="思维笔记" tabindex="-1"><a class="header-anchor" href="#思维笔记" aria-hidden="true">#</a> 思维笔记</h2>`,5),N=n("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"737px",height:"2750px"},src:"https://www.processon.com/embed/63faaf79e2fac5758f93d2f5"},null,-1),J=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),W={href:"https://www.processon.com/embed/63faaf79e2fac5758f93d2f5",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/xmllein/webapck_base",target:"_blank",rel:"noopener noreferrer"};function M(O,D){const p=l("CodeGroupItem"),c=l("CodeGroup"),e=l("ExternalLinkIcon");return r(),u("div",null,[d,a(c,null,{default:t(()=>[a(p,{title:"package.json"},{default:t(()=>[m]),_:1}),a(p,{title:"webpack.common.js"},{default:t(()=>[v]),_:1}),a(p,{title:"paths.js"},{default:t(()=>[b]),_:1}),a(p,{title:"webpack.dev.js"},{default:t(()=>[g]),_:1}),a(p,{title:"webpack.prod.js"},{default:t(()=>[y]),_:1}),a(p,{title:".babelrc"},{default:t(()=>[h]),_:1})]),_:1}),w,n("ul",null,[n("li",null,[x,n("ul",null,[n("li",null,[n("a",f,[s("terser-webpack-plugin"),a(e)]),s(" 压缩 js")]),n("li",null,[n("a",P,[s("mini-css-extract-plugin"),a(e)]),s(" 抽离 css")]),n("li",null,[n("a",_,[s("optimize-css-assets-webpack-plugin"),a(e)]),s(" 压缩 css")]),n("li",null,[n("a",j,[s("clean-webpack-plugin"),a(e)]),s(" 清除 dist 目录")])])])]),C,n("ul",null,[n("li",null,[q,n("ul",null,[n("li",null,[n("a",S,[s("splitChunks"),a(e)]),s(" 抽离公共代码")])])])]),E,n("ul",null,[n("li",null,[s("优化打包构建速度 "),n("ul",null,[n("li",null,[n("a",z,[s("Happypack"),a(e)])])])]),n("li",null,[s("压缩 JS "),n("ul",null,[n("li",null,[n("a",H,[s("webpack-parallel-uglify-plugin"),a(e)])])])])]),$,N,J,n("ul",null,[n("li",null,[n("a",W,[s("Webpack 基础"),a(e)])]),n("li",null,[n("a",V,[s("webapck_base"),a(e)])])])])}const T=i(k,[["render",M],["__file","index.html.vue"]]);export{T as default};
