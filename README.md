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
  
  
>rem的使用  
  
  
rem是CSS3新引进来的一个度量单位,是相对于根元素<html>,一般使用在移动端,以sui框架为例：375px为标准屏幕下1rem=20px 375以下不作处理 375以上（400px, 414px, 480px）下作出转换。  
因为iphone5屏幕尺寸宽为320px rem转换px与标准一样。


>手机端 1px线的解决方法

    /sass/border.scss

