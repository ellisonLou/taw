function debounce(fn, time) {
    let timer = null;

    return function() {
        clearTimeout(timer);
        timer = null;
        timer = setTimeout(() => {
            fn();
            clearTimeout(timer);
            timer = null;
        }, time)
    }
}

function print() {
    console.log('print');
}

const dPrint = debounce(print, 500);

(function() {
    let n = 0;
    while(n<20000) {
        dPrint();
        n += 1;
    }
})();
