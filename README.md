###工作小技巧
  http://placehold.it/ 
>移动端图片处理 


1.用div代替img标签的使用，添加style="background-image: url(http://placehold.it/尺寸宽度x尺寸高度)"  
2.给定高度 height  
3.设置background-size:cover/contain;  
(conver:把背景图像扩展至足够大，使图像完全覆盖背景区域;contain:把图像扩展至最大尺寸，使其宽度和高度完全适应内容区域;)  
  
>pc端图片处理  

1.在img的src属性值改为"http://placehold.it/尺寸宽度x尺寸高度"  
2.添加width、height属性，给定宽高  

>不同分辨率下图片的显示,特别是Retina(视网膜-ipone4s,iPhone5，New iPad等IOS设备)

  background-image:url(imgPath);
  backgrouund-image:-webkit-image-set(url('imgPath1x') 1x,url(imgPath2x) 2x);
  
-webkit-image-set这个属性是css4中background-image属性定义的新方法，语法如上.不支持image-set会只解析第一句background-image  
支持image-set,普通显示屏下,浏览器会选择image-set中的@1x背景图像，而Retina屏幕下浏览器会选择image-set中的@2x背景图像

>rem的使用  
  
  
rem是CSS3新引进来的一个度量单位,是作用在根元素<html>,一般使用在移动端,以sui框架为例：375px为标准屏幕下1rem=20px 375以下不作处理 375以上（400px, 414px, 480px）下作出转换。  
因为iphone5屏幕尺寸宽为320px rem转换px与标准一样。


>手机端 1px线的解决方法

    /sass/border.scss

>元素高度设为浏览器内容高度  

页面元素想设置高度为浏览器页面高度(100%)，直接设置100%但不起任何效果。  
每个元素的height都默认为auto(即随内容高度而变)且inherit(继承)是基于直属父元素，html标签是页面的顶层标签，默认是没有高度的。  
所以给html设置height为100%(即为浏览器高度)，然后逐级设置height为inherit/100%(视需求而定)。  
#####拓展：
px是相对长度单位，相对于显示器屏幕分辨率而言的。  
em是相对于父元素的单位，若当前对行内文本的字体尺寸未被设置，则相对于浏览器的默认字体尺寸(1em=16px)。  
rem(root em)是相对根(html)的单位。


>select标签 若设宽高，win与OS 下显示效果不一，win能正常显示出所设宽高,OS无法正常显示  

给select标签加上border属性即可
