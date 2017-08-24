
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

}