/**
 * @description 从A 移动到 B
 * @param A 起点
 * @param B 中点
 * @param rate 缓动速率
 * @param callBack 支持两个参数 val、isEnding 表示当前位置的值以及是否动画结束了
 */
function backtoTop(A,B,rate,callBack) {
  if(A==B||typeof A != 'number'){
    return;
  }
  B = B || 0;
  rate = rate || 2;
  var step = function () {
    A = A + (B - A)/ rate;
    if(A<1){
      callBack(B,true);
      return;
    }
    callBack(A,false);
    requestAnimationFrame(step);
  };
  step();
}
var doc = document.body.scrollTop?document.body:document.documentElement;
var scrollTop = doc.scrollTop;
backtoTop(scrollTop,0,2,function (val) {
  scrollTop = val;
});