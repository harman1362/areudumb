function noClicked() {
    var num = 1;

    num = Math.floor(Math.random() * 20);
    if (num == 0) {
        num = Math.floor(Math.random() * 11);
    }
    if (num > 5) {
        document.getElementById('no').style.top = num * 5 + 'px';
    }
    else {
        document.getElementById('no').style.left = num * 5 + 'px';
    }
}

function yesClicked() {
    document.getElementById('heading').innerHTML = "Yes ! I knew that :) ";
    document.getElementById('no').style.display = 'none';
    document.getElementById('yes').style.display = 'none';
}