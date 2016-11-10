
####browser-sync插件  

    browser-sync start --server --files "**/*.html,**/*.css,**/*.js"  
  
在window系统下使用node开启中如果使用''单引号会导致监听不到第一个file -- 一定要使用""双引号 (原因尚未明)  

####单页应用 路由  

在单页应用里，会有几个page页面进行切换，如需要将单一page页面外链（如：分享，转载）有些page的加载需要传入参数，若没用像angular(ng-router)/vue(vue-router)进行控制传参，可以使用[director](https://github.com/flatiron/director)/[pjax](https://github.com/welefen/pjax) 推荐使用前者  
浏览器的前进与后退，会触发window.onpopstate事件，也可以这样使用html5的history对象,往浏览器历史记录中塞入一个地址（使用pushState），返回的时候通过url或其他传参 语法如下：  

       window.addEventListner("popstate",function(){  
                var _url = window.localtion.href ;  
                history.pushState({}, "页面标题", _url+"?param="+param);
       })   
       
       
拓展：window.history.back()回退;window.history.go()前进或回退几页;window.history.forward();移动到历史记录中特定的位置
