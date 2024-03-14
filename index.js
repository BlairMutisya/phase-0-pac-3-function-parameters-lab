function introduction(Aki) {
    // Using string interpolation to include the name in the phrase
    return `Hi, my name is ${Aki}.`;
}
function introductionWithLanguage(name, language) {
    // Using string interpolation to include the name and language in the phrase
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
  
function introductionWithLanguageOptional(name= "Gracie", language = "JavaScript") {
    // Using string interpolation to include the name and language in the phrase
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
 } 