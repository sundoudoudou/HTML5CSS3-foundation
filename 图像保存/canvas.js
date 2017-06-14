/**
 * Created by Administrator on 2017/5/5.
 */
function draw(id){
    var canvas = document.getElementById(id);
    var context = canvas.getContext('2d');
    context.fillStyle = "green";
    context.fillRect(0,0,300,400);
    window.location = canvas.toDataURL('image/jpeg');
}