const gnrteRndmWrd = () => {
    let ltrs = "abcdefghijklmnopqrstuvwxyz"; 
    let wrdLth = Math.floor(Math.random() * 10) + 3; 
    let wrd = ""; 

    for (let i = 0; i < wrdLth; i++) {
        let rdmIndex = Math.floor(Math.random() * ltrs.length); 
        wrd += ltrs.charAt(rdmIndex); 
    }

    return wrd; 
}

console.log(gnrteRndmWrd());