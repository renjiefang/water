/**
 * @author renjiefang
 * @date  2019-05-25 11:26
 */


var ohold = document.querySelector(".hold");
console.log(ohold);
var  fixed = document.querySelector("#fixed")
var close = document.querySelector(".close")
ohold.onclick = function() {
    console.log(1);
    fixed.style.display = 'block'
}

close.onclick = function() {
    fixed.style.display = 'none'
}