const gnrteRndmWrd = () => {
    let ltrs = "abcdefghijklmnopqrstuvwxyz"; 
    let wrdLth = Math.floor(Math.random() * 10) + 3; 
    let wrd = ""; 
    
    wrd = Array(wrdLth).fill(0).map(() => ltrs.charAt(Math.floor(Math.random() * ltrs.length))).join('');

    return wrd; 
}

console.log(gnrteRndmWrd());