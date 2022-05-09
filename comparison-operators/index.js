let a = 5 > 4; //true
let b = "ананас" > "яблоко";//false
let c = "2" > "12"// true, т.к. идёт посимвольное сравнение и 2 больше единицы и возвращается сразу true
let d = undefined == null;// true Значения null и undefined равны только друг другу при нестрогом сравнении.
let e = undefined === null// false
let f = null == "\n0\n";//false, Специальный случай. Значения null и undefined равны только друг другу при нестрогом сравнении.
let g = null === +"\n0\n"// false, строгое сравнение разных типов



console.log(g);