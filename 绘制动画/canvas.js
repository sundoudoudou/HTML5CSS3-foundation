/**
 * Created by Administrator on 2017/5/5.
 */
var i;
var context;
var width,height;
function draw(id) {
    var canvas = document.getElementById(id);
    context = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
    setInterval(painting,100);
    i=0;
}
function painting(){
    //context.fillStyle="red";
    //context.fillRect(i,0,10,10);
    //i=i+20;
    context.fillStyle = "#fff";
    context.clearRect(0,0,width,height);
    context.fillStyle = "red";
    context.fillRect(i,20,10,10);
    i=i+20;
}