const gnrteRndmWrd = () => {
    let letters = "abcdefghijklmnopqrstuvwxyz"; 
    let wrdLth = Math.floor(Math.random() * 10) + 3; 
    let wrd = ""; 
    
    wrd = Array(wrdLth).fill(0).map(() => letters.charAt(Math.floor(Math.random() * letters.length))).join('');

    return wrd; 
}

console.log(gnrteRndmWrd());