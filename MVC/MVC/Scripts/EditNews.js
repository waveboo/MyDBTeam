window.onload = function () {
    oSave = document.getElementById('save');
    oDept = document.getElementsByClassName('department');
    oSelect = document.getElementById('selectperson');
    oDate = document.getElementById('published_data');
    var date = new Date();
    //oDate.innerHTML = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
    //console.log(11111);
    oSave.addEventListener('click', function () {
        //console.log(11111);
        var name = '';
        for (var i = 0; i < oDept.length; i++) {
            //console.log(oDept[i].childNodes);
            console.log(11111);
            for (var j = 1; j < oDept[i].childNodes.length; j = j + 2) {
                if (oDept[i].childNodes[j].childNodes[1].childNodes[1].checked) {
                    var name=name+oDept[i].childNodes[j].childNodes[1].childNodes[7].innerHTML+'; ';
                }
                
                //oDept[i].childNodes[(2 * j + 1)].childNodes[1].childNodes[1];
            }
        }
        oSelect.innerHTML = name;
    });
}