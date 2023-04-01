let main = 'main.jpg';

let leo = 'leo.jpg';

let mike = 'mike.jpg';

let don = 'don.jpg';

let raf = 'raf.jpg';

let s = 1;

function f1 () {
    if (s==1) {
        $('#img').attr('src', leo)
        console.log(s)
        s++
    }
    else if (s==2) {
        $('#img').attr('src', mike)
        console.log(s)
        s++
    }
    else if (s==3) {
        $('#img').attr('src', don)
        console.log(s)
        s++
    }
    else if (s==4) {
        $('#img').attr('src', raf)
        console.log(s)
        s++
    }
    else {
        $('#img').attr('src', main)
        console.log(s)
        s=1
    }
}

$('#but').click(f1)

