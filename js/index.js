/**
 * @author renjiefang
 * @date  2019-05-15 10:34
 */

 var ocateory = document.querySelector(".cateory")
 var  oli = ocateory.getElementsByTagName('li')
var olist = document.querySelectorAll('.showren')
console.log(olist);
 var index = 0;

   console.log(oli);
 // not   onmouseenter
    ocateory.onmouseover = function() {
    for(var i = 0; i <oli.length; i++) {
        oli[i].id = i
        oli[i].className = ''
        oli[i].onclick = function() {
            this.className = 'focus'
                     index = this.id;
                     listShow(index)
        }
    }
}

  function listShow(index) {
        for(var i =0; i <olist.length; i++) {
               olist[i].style.display = ''
        }
        olist[index].style.display = 'block'
  }