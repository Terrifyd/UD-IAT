/*
CITATIONS:

	Zlotnick, E., Dzikiewicz, A. J., & Bar-Anan, Y. (2015). Minno.js (Version 0.3) 
		[Computer software].

	Bar-Anan, Y. (2020, March 3). Running Project Implicit’s IAT from Qulatrics 
		[Blog post]. Retrieved from https://minnojs.github.io/minnojs-blog/qualtrics-iat/
*/

define(['pipAPI', 'https://terrifyd.github.io/UD-IAT/Mobile_Full_Script.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Insects', //Will appear in the data.
			title : {
				media : {word : 'Insects'}, //Name of the category presented in the task.
				css : {color:'#c04c30','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'WASP'}, 
                {word: 'FLEA'}, 
                {word: 'ROACH'}, 
                {word: 'CENTIPEDE'},
                {word: 'MOTH'},
                {word: 'GNAT'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#c04c30','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Flowers', //Will appear in the data.
			title : {
				media : {word : 'Flowers'}, //Name of the category presented in the task.
				css : {color:'#c04c30','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'ORCHID'}, 
                {word: 'TULIP'}, 
                {word: 'ROSE'}, 
                {word: 'DAFFODIL'}, 
                {word: 'DAISY'}, 
                {word: 'LILY'} 
			], 
			//Stimulus css
			stimulusCss : {color:'#c04c30','font-size':'1.8em'}
		},	

		attribute1 : {
            name : 'Bad words',
            title : {
                media : {word : 'Bad words'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'poison'},
				{word: 'evil'},
				{word: 'gloom'},
				{word: 'damage'},
				{word: 'vomit'},
				{word: 'ugly'},
				{word: 'hurt'},
				{word: 'rotten'}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        attribute2 : {
            name : 'Good words',
            title : {
                media : {word : 'Good words'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'gentle'},
                {word: 'enjoy'},
                {word: 'heaven'},
                {word: 'cheer'},
                {word: 'happy'},
                {word: 'love'},
                {word: 'friend'},
                {word: 'joy'}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },

		base_url : {//Where are your images at?
			image : 'https://terrifyd.github.io/UD-IAT/Images/'
		}

        //isTouch : global.$isTouch


	});
});