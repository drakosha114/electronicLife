/**
 * Created by askrypai on 11/16/16.
 */
function printArrayParameters(param) {
    console.log('<--START--------------->');
    console.log('длинна массива');
    console.log(param.length);
    console.log('массив');
    console.log(param);
    console.log('<--END--------------->');
}
/*
* Массив (Array) - упорядоченная коллекция значений
*
* МАССИВЫ В JS
*
* не типихированные - могут содержать значения разных типов
* динамические - при добавлении / удалении элементов меняют свой размер автоматиески
* могут быть разряженными - не требуется, чтобы массив содержал элементы с непрерырвной последовательностью символов
* индекс массива - 32 разрядное целое число, максимальное число элементов в массиве 2^32 - 2
*
* */

// СОЗДАНИЕ МАССИВА

/*
*
* Масиив можно создать с помощью конструктора (new Array ()) или литерала ([])
*
* можно передавать параметры, разделенные запятыми, которые будут соответсвующими элементами массива
* если никакие параметры не переданы - то создается пустой массив
* для конструктора - если передается один параметр, являющийся числом - то создается массив соттветствующей длинны
* в качестве параметров можно передавать выражения, функции, в таком случае в качестве элемента массиыв будет результат выполнения выражения / возвращенное из функции значение
* если литерал массива содержит несколько запятых подряд, то создается разреженный массив, соттветствующие элементы оплучаю значение undefined
* при создании массива с помощью конструктора нельзя указывать несколько запятых подряд
* литерал создания массива потдерживает не обязательную завершающую запятую (данная возможность не корректно реализована в ie8 и более ранних версиях. добавляется лишний элемент)
* в разряженных массивах отсутствующие элементы не создаются
* */

var arr = new Array(); // пустой массив - конструктор
var arr2 = Array(); // второй вариант - пустой массив, созданный с помощью конструктора
var arr3 = []; // пустой массив, созданный с помощью литерала

console.log(arr);
console.log(arr2);
console.log(arr3);

var arr4 = new Array(10); // пустой массив с 10 элементами

console.log(arr4.length);


var arr5 = new Array(4, 'sadas', 10, 10+5, 'sss'.charAt(2)); // создание массива и наполнение его значениями - конструктор
var arr6 = [1,2,3,4,5]; // создание массива и наполнение его значениями - литерал
console.log(arr5);
console.log(arr6);

var arr7 = [1,,,4,5,6]; // создание разреженного массва - литерал
console.log(arr7);


// ЧТЕНИЕ И ЗАПИСЬ ЭЛЕМЕНТОВ МАССИВА

/*
*
* доступ к элементам массива осуществляется с помощью оператора [], слева от опрератора - выражение, возвращающее ссылку на массив, в [] - выражение, возвращающее неотрицательное целое число, не превыщающее максимальное значение элементов массива
* одинакова работает и для чтения и для записи
* при попытке обратиться к несуществующму элементу массива возвращается undefined
*
* при попытке задать свойство с индексом, больше length - 1 - создается элемент с таким индексом. значения в промежутке length - 1 до нового индекса  - undefined. Создается разреженный массив.
* индексы массива - разновидность свойств объекта
* массив - разновидность объекта. цифровые значения индексов массивов преобразуются в строковые значения и становятся свойствами (при этом добавление - удаление элементов, удовлетворяющих требованиям для индексов автоматически меняет свойство length массива)
* елси значение индекса не может бытьпреобразовано к числу - то создается просто свойство массива, не являющееся его элементом, на length не влияет, методами массива не обрабатывается
* опрератор [] может принимать любые значения, если значение в опрераторе может быть преобразовано к целому числу от 0 до 2^32-2 - то обращаемся к элементу массива, в противном случае - к свойству
* */
var arr8 = [1,2,3,4];

console.log(arr8[2+1]);

console.log(arr8['1']);
console.log(arr8[2.000]); // значения проеобразубтся в строки, удовлетворяющие для индексов массивов

/*
*  length - длинна массива
*
*  целое число больше или равное 0
*  указывает колличество элементов в массиве
*  индекс последнего элемента в массиве length-1, так что length соответствует следующему за последним элементом индексу
*  доступно для чтения и записи, при изменениии происходит добавление / удаление элементов из массива
*  если задать length меньше текущей длинны массива, то элементы с индексами массива болше текущей будут удалены
*  если указать длинну массивабольше существующей, то будет создан разреженный массив соответствующей длинны
*
* */

var arr9 = [1,2,3,4,5,6,7,8]; // исходный массив

console.log(arr9);
console.log(arr9.length);

arr9.length = 4; // задаем длинну массива меньше существующей
console.log(arr9);
console.log(arr9.length);

arr9.length = 22; // новая длинна массива превыает текущую, создается разреженный массив
console.log(arr9.length);
console.log(arr9);

/*
*
* с помощью метода Object.defineProperty можно сделать length (элементы можно удалять и и добавлять при этом длинна массива остается постоянной) или элемент массива неудалаемым (в этом случае длинна массива не может стать меньше чем индекс последнего неудаляемого элемента -1)
*
*
* */


var arr10 = [1,2,3,4,5];
console.log(arr10.length);

Object.defineProperty(arr10, 'length', {writable: false}); // делаем длинну массива только для чтения


arr10.length = 2; // пытаемся изменить длинну массива

console.log(arr10.length);
console.log(arr10);

try {
    arr10.shift(); // создается разреженный массив без первого элемента
} catch (err) {
    console.log('нельзя удалить первый элемент, так как свойство length массива доступно только для чтения');
}
console.log(arr10.length);
console.log(arr10);

arr10.unshift();

console.log(arr10.length);
console.log(arr10);

try {
    arr10.push(11);
} catch (err) {
    console.log('нельзя добавить новый элемент, так как свойство length массива доступно только для чтения');
}

console.log(arr10.length);
console.log(arr10);

try {
    arr10.pop();
} catch (err) {
    console.log('нельзя удалить элемент, так как свойство length массива доступно только для чтения');
}


console.log(arr10.length);
console.log(arr10);


arr10[7] = 7; // index больше length, новый лемент не создается

console.log(arr10.length);
console.log(arr10);

/*
var arr11 = [1,2,3,4,5,6,7];

printArrayParameters(arr11);

Object.defineProperty(arr11, arr11['3'], {writable: false});

arr11.length = 2;

printArrayParameters(arr11);
*/

/*
* МЕТОДЫ МАССИВА
*
****************************
* Array.prototype.join();
****************************
*
* Преобразоывывает массив в строку и возвращает ее
* Принимает один параметр (необязательный) - строка, которая будет разделителем между элементами массива. Если параметр отсутствует, то в качестве разделителя используется ','
*
* */

var arrJoin = [1,2.4,4,5];

var b = arrJoin.join();
var c = arrJoin.join('\<разделитель\>');
console.log(arrJoin); // исходный массив не изменяется
console.log(b); // вызов метода join без параметра
console.log(c); // вызов метода join с параметром

/*
* ***************************
* Array.prototype.reverse();
* ***************************
*
* меняет порядок элементов в массиве на обратный и возвращает переупорядоченный массив (при этом порядок элементов в исходном массиве тоже меняется)
*
* ИЗМЕНЯЕТ ИСХОДНЫЙ МАССИВ
*
* */

var arrReverse = [1,2,3,4,5,6];
console.log('исходный массив');
console.log(arrReverse);
console.log('результат вызова метода');
console.log(arrReverse.reverse());
console.log('преобразованный массив');
console.log(arrReverse);

/*
* **********************************
* Array.prototype.sort();
* **********************************
*
* сортировка массива
*
* параметр (необязательный) - функция сравнения (принимает два аргумента - возвращает число - отрицателльное - первый элемент должен предшествовать второму, положительное - второй элемент должен предшествовать первому - 0 - порядок элементов не имеет значение)
* если метод вызывается без параметра - то элементы массива преобразуются в строки и ставниваются по правилу сравнения строк
* сортирует исходный  массив, и возвращает его
*
* ИЗМЕНЯЕТ ИСХОДНЫЙ МАССИВ
*
* */

var arrSort = [11,23,31,41,15,6,1111];
console.log('исходный массив');
console.log(arrSort);
console.log('результат вызова метода без параметра');
console.log(arrSort.reverse());
console.log('преобразованный массив');
console.log(arrSort);
console.log('передача в качестве параметра функции сортировки');
console.log(arrSort.sort(function(index1, index2){return index1 - index2;}));
console.log('преобразованный массив');
console.log(arrSort);

/*
* **********************************
* Array.prototype.concat()
* **********************************
*
* объеденене массивов
*
* создает новый массив на основе текущего. Создает копию массива, относительно которого был вызван, и добавляет в него элементы, переданные в качестве параметров и возвращает созданный массив.
* если в качестве параметра передается массив, то его элементы добавляются в создаваемый массив
*
* */

var arrConcat = [1,2,3,4,5,6];
var arrConcat2 = arrConcat.concat(11,[23,45,65,[22,33]], 'sdasd');
console.log(arrConcat2);


/*
* *********************************
* Array.prototype.slice()
* *********************************
*
* возвращает часть массва
*
* возвращает часть массива
* начало и конец возвращаемой части массива определяется параметрами (если они не заданны, возвращается исходный массив)
* принимает два параметра
* в качестве параметров можно передавать только целые числа
* первый параметр - начало возвращаемого фрагметра массиыв
* второй - окончание возвращаемого фрагмента (не включая элемент с индексом, соответствующим этому параметру). Если второй параметр отсутствует - то возвращается весь массив до конца
* если параметры имеют отрицательное значение - то отчсет идет с конца массива
* если второй параметр указывает на элемент стоящий раньше элемента, на который указывает первый параметр, то в результате вернется пустой массив
*
* */

var arrSlice = [1,2,3,4,5,6,7,8,9];

console.log(arrSlice.slice());
console.log(arrSlice.slice(3));
console.log(arrSlice.slice(3,6));
console.log(arrSlice.slice(-6,-4));
console.log(arrSlice.slice(-6,-7));


/*
* **************************************
* Array.prototype.splice()
* **************************************
*
*
*
* */

/*
 * **************************************
 *  Array.prototype.push()
 * **************************************
 *
 * добавляет элементы, переданные в качестве параметров, в конец массива и возвращает новую длинну массива
 *
 * */

var arrPush = [1,2,3,4,5,6];
console.log('исходный массив');
console.log(arrPush);
console.log('результат вызова метода');
console.log(arrPush.push(2,4,5));
console.log('преобразованный массив');
console.log(arrPush);

/*
 * **************************************
 * Array.prototype.pop()
 * **************************************
 *
 * удаляет последний элемент из массива и возвращает его, длинна массива уменьшается на 1
 *
 *
 * */

var arrPop = [1,2,3,4,5,6];
console.log('исходный массив');
console.log(arrPop);
console.log('результат вызова метода');
console.log(arrPop.pop());
console.log('преобразованный массив');
console.log(arrPop);


/*
 * **************************************
 *  Array.prototype.()
 * **************************************
 *
 * Добавляет элементы, переданные в качестве параметров, в начало массива и возвращает новую длинну массива
 * */

var arrUnshift = [1,2,3,4,5,6];
console.log('исходный массив');
console.log(arrUnshift);
console.log('результат вызова метода');
console.log(arrUnshift.unshift(33, 55, 66));
console.log('преобразованный массив');
console.log(arrUnshift);

/*
 * **************************************
 *  Array.prototype.shift()
 * **************************************
 *
 * Удаляет первый элемент из массива и возвращает его, длинна массива уменьшается на 1
 * */

var arrShift = [1,2,3,4,5,6];
console.log('исходный массив');
console.log(arrShift);
console.log('результат вызова метода');
console.log(arrShift.shift());
console.log('преобразованный массив');
console.log(arrShift);
