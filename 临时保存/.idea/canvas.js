/**
 * Created by Administrator on 2017/5/5.
 */
function saveStorage(id){
    var target = document.getElementById(id);
    var str = target.value;
    sessionStorage.setItem("mess",str);
}
function loadStorage(id){
    var target = document.getElementById(id);
    var msg = sessionStorage.getItem("mess");
    target.innerHTML = msg;
}