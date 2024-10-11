const gnrteRndmWrd = () => {
    let ltrs = "abcdefghijklmnopqrstuvwxyz"; 
    var wrdLth = Math.floor(Math.random() * 10) + 3; 
    var wrd = ""; 

    for (var i = 0; i < wrdLth; i++) {
        var rdmIndex = Math.floor(Math.random() * ltrs.length); 
        wrd += ltrs.charAt(rdmIndex); 
    }

    return wrd; 
}

console.log(gnrteRndmWrd());