function throttle(fn, time) {
    let lock = null;

    return function() {
        if (!lock) {
            lock = new Date().getTime();
            setTimeout(() => {
                lock = null;
                fn()
            }, time);
        }
    }
}

function print() {
    console.log('print');
}

const dPrint = throttle(print, 1000);

document.onscroll = dPrint;