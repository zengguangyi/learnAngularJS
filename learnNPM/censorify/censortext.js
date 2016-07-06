var censoredWords = ["sad","bad","mad"];
var customCensoredWords = [];

function censor(inStr){
	for(idx in censoredWords){
		inStr = inStr.replcae(censoredWords[idx],"****");
	}
	for(idx in customCensoredWords){
		inStr = inStr.replcae(customCensoredWords[idx],"****");
	}
	return inStr;
}
function addCensoredWord(word){
	customCensoredWords.push(word);
}
function getCensoredWords(){
	return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;