function minimumBracketReversal (bracketExp) {
    let openBracketCount = 0;  
    let closedBracketCount = 0;  
    for (const brckt of bracketExp) {
        if (brckt === '{') {
            openBracketCount++;  // if open bracket increase the open bracket count 
        } else if (brckt === '}') {
            closedBracketCount++;   // if open bracket increase the open bracket count 
        }
    }


    // finding remaining brackets means how many bracket are unpaired
    const brcktRemains = Math.abs(openBracketCount - closedBracketCount);


    // if remaining bracket are even then it is possible to balance after reversal
    if (brcktRemains % 2 == 0) {    
        return brcktRemains / 2;   
    }

    // if odd return -1
    else return -1;
}


console.log(minimumBracketReversal("{{{{}}")) 
console.log(minimumBracketReversal("{{{"))
console.log(minimumBracketReversal("{{{{}}"))