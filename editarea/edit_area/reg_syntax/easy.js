editAreaLoader.load_syntax["easy"] = {		// here <language_abbr> is "css" so the file is "css.js"
	'DISPLAY_NAME' : 'EASY'		// String:  used to define a better syntax name to display. Used only when using script using compressed version of the script
	,'COMMENT_SINGLE' : []		// Array:  possible single line comments
	,'COMMENT_MULTI' : {}	// associated Array: possible multiple line comments 
						// ("open_mark1" : "close mark1", "open_mark2" : "close_mark2"}
	,'QUOTEMARKS' : ['"', "'"]		// Array: the different possible quotemarks that delimitate strings
	,'KEYWORD_CASE_SENSITIVE' : false	// Boolean: define if the language is case-sensitive
	,'KEYWORDS' : {				// Array: an array of array containing the different keywords class 
		'keywordz' : [		// the name 'attribute' can be changed with no problem. I
						// it's only used to define the matching style class 
			'set', 'game', 'loop', 'clear', 'if', 'else', 'end', 'say', 'display', 'print', 'draw', 'ask', 'repeat', 'declare', 'create'	// etc...
		]
		,'secondary' : [
			'by', 'to', 'color', 'radius', 'at' 	// etc...
		]
		,'note' : [
			'comment', 'note'
		]
	}
	,'OPERATORS' :[		// Array: the operators to highlight (eg, can also contain: +, -, * or / in other languages).
		'+', '-', '*', '/', '=', '<', '>', '<>', '='
	]
	,'DELIMITERS' :[	// Array: the block code delimiters to highlight
		
	]
	,'STYLES' : {	// Array: an array of array, containing all style to apply for categories defined before.
			// Better to define color style only. 
		'COMMENTS': 'color: #AAAAAA;'
		,'QUOTESMARKS': 'color: #6381F8;'
		,'KEYWORDS' : {			// contain the associated style foreach keywords categories
			'keywordz' : 'color: #2B60FF;'
			,'secondary' : 'color: #48BDDF;'
			,'note' : 'color: #FF0000;'
			}
		,'OPERATORS' : 'color: #008080;'
		,'DELIMITERS' : 'color: #60CA00;'
				
	}
};