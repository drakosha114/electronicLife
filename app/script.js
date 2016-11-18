/**
 * Created by askrypai on 11/14/16.
 */
for(var i = 1; i <= 100; i +=1){



    if(i%3===0){
        console.log('fizz');
    };
    if(i%5===0){
        console.log('buzz');
    };
    if(i%3!==0 && i%5!==0) {
        console.log(i)
    }
    console.log('\n');
}

/*
* options
* popup - selector - modal window id
* close - selector - close button
* submit - selector - submit button
*
* */


function Popup (options) {
    var o = {};
    o.$popup = $(options.popup);
    o.$submit = $(options.submit);
    o.$el = null;
    o.$slose = $(options.close);

    o.callback = options.callback ? options.callback : $.noop;

    o.showPopup = function (el) {
        o.$el = el;
        o.$popup.modal('show');
    };
    o.hidePopup = function () {
        o.$popup.modal('hide');
        o.$el = null;
    };
    o.changeElementState = function () {
        if(typeof o.callback === 'function' && o.$el) {
            o.callback(o.$el);
        }
        o.hidePopup();
    };

    o.$submit.click(function(e){
        e.preventDefault();
        o.changeElementState();
    });

    o.$slose.click(function(e){
       e.preventDefault();
       o.hidePopup();
    });


    return o;

}

// pyramid
/*
function makePyramid (start, end, callback) {
    if (isNaN(start) || isNaN(end)) {
        console.log('parameters aren\'t numbers');
        return;
    }
    if (!callback || typeof callback !== 'function') {
        console.log('callback finction is undefined');
        return;
    }
    for (var i = start; i <=end; i+=1) {
        callback(i);
    }
}
function drayPyramidLine (index) {
    if (!index || isNaN(index)) {
        console.log('parameters aren\'t number');
        return;
    }
    var param = new Array(index);
    for (var i = 0, l = param.length; i < l; i +=1) {
        param[i] = '#';
    }
    console.log(param.join('') + '\n');
}

//makePyramid(4, 17, drayPyramidLine);
*/

// pyramid

function makePyramidSecond(start, end) {
    for (var i = '#'; i.length <= end; i+='#') {
        if (i.length < start) {
            continue;
        }
        console.log(i);
    }
}

makePyramidSecond(4, 26);

// chess desk

function makeChessDec (rows, cols){

    if (isNaN(cols) || isNaN(rows)) {
        console.log("parameters aren\'t numbers");
        return;
    }
    var colsCount;
    var rowsCount;
    var param;

    for (rowsCount = 0; rowsCount <= rows; rowsCount += 1) {

        param = rowsCount%2 === 0 ? "# " : " #";

        for (colsCount = param; colsCount.length <= cols; colsCount += param) {
            //console.log(colsCount);
        }
        console.log(colsCount);
    }
}

//makeChessDec(8,8);

// fuzz - buzz

function fizzBuzz (start, end) {

    if (isNaN(start) || isNaN(end)) {
        console.log("parameters aren\'t numbers");
        return;
    }
    var string;

    for (;start <= end; start +=1) {

        string = "";

        if (start%3 === 0) {
            string += "fuzz";
        }
        if (start%5 === 0) {
            string += "buzz";
        }

        console.log(string || start);
    }
}

//fizzBuzz (1, 100);

// minimum

function minimum (a, b) {

    if (isNaN(a) || isNaN(b)) {
        console.log("parameters aren\'t numbers");
        return;
    }

    return a >= b ? b : a;
}

//minimum(2,4);

// is even
function isEven(param) {
    if (isNaN(param)) {
        console.log("parameters isn\'t number");
        return;
    }
    if (param === 0 ) {
        return true;
    } else if (param === 1) {
        return false;
    } else if (param < 0){
        return isEven(Math.abs(param));
    } else {
        return isEven(param - 2);
    }

}


// count B

function countBs (str) {
    return countChar(str, "b");
}

// count char

function countChar (str, sumb) {
    var count;
    var i;
    count = 0;
    i = 0;

    while (i < str.length) {
        if (str.charAt(i).toLowerCase() === sumb) {
            count +=1;
        }
        i+=1;
    }
    return count;
}
