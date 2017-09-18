# TimeList
Time List

#### 规范
1. `javascript`变量命名规范: camelCase(后端接口返回数据除外)
2. `css,sass,scss`变量命名规范: dashes-case (参考:http://codeguide.bootcss.com/#css)
3. `js-lint`代码风格检查工具: eslint
4. `文件命名`: 一律小写，短横线(eg:share-header.vue, style.scss)。
5. `components html模板命名`: 由文件层次决定模板归属，统一命名template.html(如特殊情况，使用短横线)

#### 构建流程
 - `development`: npm i && npm run dev(run at localhost:9000)
 - `production`: npm i && npm run prod(products in dist dir)

#### 项目结构
  1. build: 存放 `base.js, dev.js, prod.js` 分别对应各阶段构建流程webpack配置文件
  2. dist: 生产阶段编译输出的目录
  3. node_modules: npm包目录
  4. src: 源代码目录
    - business: 存放业务组件，由路由加载对应组件(vue, vuex)
      - ****(业务模块组件)
      - timeList.html: 列车时刻表业务应用页面
      - index.js: 列车时刻业务应用
  5. .babelrc: babel preset 文件
  6. .editorconfig: 编辑器统一化配置
  7. .eslintrc: eslint配置文件
  8. .gitignore: git ignore 配置文件
  9. build.sh: 生产阶段可执行sh脚本
  10. config: 项目自定义配置文件
  11. logo.png: favicon文件
  12. package.json: npm配置文件
  13. postcss.config.js: postcss配置文件
  14. README.md: read me

#### 注意
  1. 为减小应用体积，本项目已经配置(.babelrc已经按照element ui官方推荐配置)按需加载, 开发人员只需要从element ui中import 所需组件即可
#time-list
