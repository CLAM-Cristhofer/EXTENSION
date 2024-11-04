/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
namespace area {
    //% block= "circle radius $radius"
    //% radius.defl-100
    //% radius.min-0 radius.max-1000
    export function circulo(radius:number) {
        return Math.PI * radius * radius;
    }

    //% block"rectangle length $length width $width"
    export function rectangle(length: number, width: number) {
        return length * width;
    }
    //% block="square length $length"
    export function square(length: number){
          return length * length;
    }
      

    //% block="triangle base $base heigth $heigth"
    export function triangle(base: number, heigth: number) {
        return 0.5 * base * heigth;
    }
}

