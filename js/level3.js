
function draw() {
    let str = document.getElementById('word').value;
    let int = document.getElementById('number').value;
    let len = str.length;
    let myul = document.createElement('ul');
    let myli = document.createElement('li');

    for (let i = 0; i < int; i++) {
        myli.append(document.createTextNode(" " + str));
    }
    myul.appendChild(myli);
    document.getElementById('drawdiv').appendChild(myul);

    for (let j = 1; j <= int * len; j++) {
        let myli2 = document.createElement('li');
        let myul2 = document.createElement('ul');
        for (let k = 1; k <= int * len; k++) {
            if (k % len === 0) {
                myli2.append(document.createTextNode(" " + str.charAt(j)));
            } else {
                myli2.append(document.createTextNode(" _ "));
            }
        }
        myul2.appendChild(myli2);
        document.getElementById('drawdiv').appendChild(myul2);
    }



    /*
let wrd = document.getElementById('word').value;
    let wid = document.getElementById('width').value;
    let hei = document.getElementById('height').value;
    let len = wrd.length;
    let myul = document.createElement('ul');
    let myli = document.createElement('li');

    console.log(wrd + " !5");
    let str = "";
    if (wid === 1) {
        console.log(str + " !5");
        str = wrd;
    } else {
        for (let i = 0; i < wid / 2; i++) {
            console.log(str + " !1");
            for (let j = len - 1; j >= 0; j--) {
                str.concat(wrd.charAt(j));
                console.log(str + " !2");
            }
            for (let k = 0; k < len - 1; k++) {
                str.concat(wrd.charAt(k));
            }
        }
    }
    console.log(str);
    */

}