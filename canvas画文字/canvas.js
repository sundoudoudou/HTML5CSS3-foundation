/**
 * Created by Administrator on 2017/5/2.
 */
function draw(id){
    var canvas = document.getElementById(id);
    var context = canvas.getContext('2d');
    context.fillStyle='green';
    context.fillRect(0,0,800,300);
    context.fillStyle="#fff";
    context.strokeStyle="#fff";
    context.font="bold 40px '微软雅黑'";
    context.textBaseline="hanging"
    context.fillText('好烦好烦好烦好烦好烦好烦',0,40);
    context.fillText('好烦好烦好烦好烦好烦好烦',40,110);
    context.fillText('好烦好烦',580,180);
    //context.strokeText('好烦',0,50 );
}