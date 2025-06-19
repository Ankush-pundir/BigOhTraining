function squareRoot(num){ 
    if(num<0) {
        return "Square Root of negative number is not possible"
    }
    return Math.sqrt(num);
}

function square(num) {
    return num * num;
}

function sin (degree) {
    const rad  = (degree * Math.PI) / 180
    return Math.sin(rad)
}

function cos (degree) {
    const rad = (degree * Math.PI) / 180
    return Math.cos(rad)
}

function tan (degree) {
    const rad = (degree * Math.PI) / 180
    return Math.tan(rad)
}

function log (num) {
    if(num<0){
        return "log of negative number is not possible"
    }
    return Math.log10(num)
}

function ln (num) {
    if(num<0){
        return "Natural logarithm of negative number is not possible"
    }
    return Math.log(num)
}

function circleArea (radius) {
    if (radius<=0){
        return "Radius of circle must be greater then 0"
    }

    return Math.PI * radius * radius
}

function power (x,y) {
    if(y<0){
        return "Power must be greater then or equal to zero"
    }
    let res = 1;
    for(let i = 0; i<y ; i++){
        res *= x
    }
    return res;
}

console.log(power(5,-1))
console.log(tan(45))