function wordOccurrences (input){
    let wordOcc = {};
    for(let word of input){
        if(!wordOcc.hasOwnProperty(word)){
            wordOcc[word]=1;
        }else{
            wordOcc[word] +=1;
        }
    }
let sortedResults=Object.entries(wordOcc).sort((a, b) => b[1]-a[1]);

sortedResults.forEach(el => console.log(`${el[0]} -> ${el[1]} times`));
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
//wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);