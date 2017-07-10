window.onload = function () {
    var all = document.getElementById('all');
    var boxs = document.getElementsByClassName('chbox');
    all.onclick = function () {
        if (all.checked == true) {
            for (var i = 0; i < boxs.length; i++) {
                boxs[i].checked = true;
            }
        }
        else {
            for (var i = 0; i < boxs.length; i++) {
                boxs[i].checked = false;
            }
        }
    }
    var oUl = document.getElementsByClassName('linkbutton')[0];
    var oLi = oUl.getElementsByTagName('li');
    for (let i = 0; i < oLi.length; i++) {
        if (i == 0) {
            oLi[i].addEventListener('onclick', function () {
                var temp = null;
                for (let j = 1; j < oLi.length - 1; j++) {
                    if (oLi[j].className == 'active') {
                        temp = j;
                        oLi[j].className = '';
                    }
                }
                if (temp != 1) {
                    oLi[temp - 1].className = 'active';
                }
                else if (parseInt(oLi[temp].innerHTML) != 1) {
                    for (let j = 1; j < oLi.length - 1; j++) {
                        oLi[j].innerHTML = parseInt(oLi[j].innerHTML) - 1;
                    }
                }
            })
        }
        else if (i == (oLi.length - 1)) {

        }
        else {
            //console.log(i);
            oLi[i].addEventListener('click', function () {
                for (let j = 1; j < oLi.length - 1; j++) {
                    if (oLi[j].className == 'active') {
                        oLi[j].className = '';
                    }
                }
                this.className = 'active';
            })
        }
    }
}