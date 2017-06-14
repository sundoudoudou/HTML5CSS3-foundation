/**
 * Created by Administrator on 2017/4/25.
 */
 function draw(id){
    var canvas = document.getElementById(id);
    var context = canvas.getContext('2d');
    context.fillStyle = "yellow";
    context.strokeStyle = "#fff";
    context.lineWidth = 5;
    context.fillRect(0,0,400,350);
    context.strokeRect(50,50,180,120);
    context.strokeRect(70,70,180,120);
}