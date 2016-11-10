# solved-problem
所遇到的问题与解决方式
  
##gulp自动化构建  
  
**问题**：gulp服务跑不起来（提示：Failed to list task）特别是拉取一个新项目时容易出现。  
**原因**：依赖模块（node-modules）的其中某一模块出了问题/与gulpfile.js里加载模块对比尚有依赖未安装(未安装完)，多注意node-sass模块(比较难装和易出问题)。  
**解决**：安装相对应的依赖模块(npm/cnpm)，使用的工具是webstrom的话就走cnpm前记得在gitignore里把模块文件夹加上否则安装完依赖后容易卡死，实在安装不了(最愚蠢的办法)直接复制粘贴其他项目下的模块文件。

##webpack 使用过程中  

项目运行报错，基本可以断定依赖模块出了问题，卸载重装。注意node-sass与webpack-dev-server模块，比较不稳定。
  
##git的使用过程中  

**问题**在本地master上进行项目页面开发，partner在主干master上修改了同一个页面代码并先push，在开发完进行commit成功后紧接着push就发出警告(发生冲突)   
**原因**：远程origin与本地master当前版本的同一文件相互有差异。     
git会在发生冲突的发放修改文件的内容，如：  

		<body>
			<<<<<<< HEAD
			Hello.
			=======
			<p>Hello</p>
			>>>>>>> 17c860612953c0f9d88f313c8dfbf7d858e02e91
		</body>  

分割线上方是本地数据库的内容，下方是远程数据库的编辑内容  
**解决**：手动合并，对比origin与master间差异文件对比，将线上差异代码复制粘贴到本地后进行commit，再push即可。  
**避免出现问题的习惯**：在本地开发完毕/暂停开发的时候先本地commit，之后pull一下代码，git会对比本地仓库与远程仓库代码差异。（如发生冲突对比文件差异代码进行手动合并，必要时可以直接Merge）然后直接push上去。

**问题**在本地master的基础行建立分支branch后进行页面功能模块开发，开发完毕后commit成功，但push失败（webstrom里git的push功能禁用）。  
**原因**：本地的分支与远程库上的分支没有进行连接（或者远程库上没有分支）。  
**解决**：在本地checkout回到master，然后合并本地分支branch（git merge 'branchname'）,之后再commit and push 。


##微信
在微信内置浏览器页面提交数据后重新刷新页面，虽然有进程条刷过后页面闪了一次，但其实页面并没有变，数据并不会清空。()  
**原因**：微信内置浏览器强制页面缓存整个页面内容、数据，如果页面地址没有变更，几个小时内进入页面都不会对css/js进行http请求。也就是会对css/js进行强制缓存。  
**解决办法** 在数据提交后刷新页面(重新跳转页面 window.localtion.href)的链接上加上版本号，如http://xxxx/index.html?t=版本号 同理css/js也一样。
