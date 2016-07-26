### 最简单的项目结构
*	app (项目上线目录-已打包)

*   dist (项目输出目录)
	* html
	* js
    * css
    * images
*   node_modules   (nodejs模块)
*   src (项目开发目录)  
	*  html
		* tpl (复用模块)
        * page (页面html模板)
	*  js
		* lib  (第三方库/插件)
        * page (页面逻辑代码)
	* sass
		* com  (通用)
        * lib  (复用模块样式)
        * page (页面模块样式)  
	* image (图片)
		* icon (图标)
*    .babelrc(bable配置文件)
*    .gitignore
*   gulpfile.js        (gulp配置)
*   package.json    (项目配置)
*   teams.json    (测试json数据)

