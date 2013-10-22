exports = module.exports;

/**
* Generate a pronounceable password.
*/
exports.generate = function generate(length) {

    var vowels =  ["a", "e", "i", "o", "u"];
    var cons  =   ["b", "c", "d", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "u", "v", "w", "tr", "cr", "br", "fr", "th", "dr", "ch", "ph", "wr", "st", "sp", "sw", "pr", "sl", "cl"]; 

    var num_vowels = vowels.length;
    var num_cons   = cons.length;
    var password   = '';
    
    for(var i = 0; i < length; i++)
    {
      password += cons[Math.floor(Math.random() * num_cons + 1)] + vowels[Math.floor(Math.random()*num_vowels + 1)];
    }

    return password.substr(0, length);
}