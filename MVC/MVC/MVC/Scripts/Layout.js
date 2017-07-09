var change = window.location.href;
var oNav = document.getElementById('navn');
var oli = oNav.getElementsByTagName('li');
for (let i = 0; i < oli.length - 1; i++) {
    if (oli[i].className == 'active') {
        oli[i].className = '';
    }
}
if (change.includes('Home/Task')) {
    oli[5].className = 'active';
}
else if (change.includes('Home/Document')) {
    oli[4].className = 'active';
}
else if (change.includes('Home/Feedback')) {
    oli[3].className = 'active';
}
else {
    oli[2].className = 'active';
}