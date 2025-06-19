function calculator (v1 , v2, op) {
    if (op === '+') {
        return v1+v2;
    }
    else if (op === '-') {
        return v1-v2;
    }
    else if (op === '*') {
        return v1*v2;
    }
    else if (op === '/') {
        return v1/v2 ;
    }
    else if (op === '%') {
        return v1%v2;
    }
    else{
        return "invalid Operator";
    }

}


console.log(calculator(2,10,'-'))