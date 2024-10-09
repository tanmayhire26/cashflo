function gnrteRndmWrd() {
    var ltrs = "abcdefghijklmnopqrstuvwxyz"; // possible letters
    var wrdLth = Math.floor(Math.random() * 10) + 3; // word length between 3 and 12
    var wrd = ""; // empty word

    for (var i = 0; i < wrdLth; i++) {
        var rdmIndex = Math.floor(Math.random() * ltrs.length); // random index
        wrd += ltrs.charAt(rdmIndex); // add random letter to word
    }

    return wrd; // return the generated word
}

console.log(gnrteRndmWrd()); // testing the function
