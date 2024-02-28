define(['pipAPI', 'https://baranan.github.io/minno-tasks/quiat8.js'], function(APIConstructor, iatExtension){
//define(['pipAPI', 'https://terrifyd.github.io/UD-IAT/Full_Script.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({ // EACH COMMIT BEHIND BY ONE??
		category1 : {
			name : 'Insects', //Will appear in the data.
			title : {
				media : {word : 'Insects'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
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
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Flowers', //Will appear in the data.
			title : {
				media : {word : 'Flowers'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
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
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
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

/* 		attribute1 : // TOO MANY STIMULUS?? FORMAT WRONG??
			{
				name : 'Bad words', //Attribute name to be used for feedback and logging
				title : {
					media : {word : 'Bad words'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
					height : 4 //Used to position the "Or" in the combined block.
				}, 
				media : [ //Stimuli
					{word: 'Hate'},
					{word: 'Bothersome'},
					{word: 'Ugly'},
					{word: 'Grief'},
					{word: 'Poison'},
					{word: 'Annoy'},
					{word: 'Humiliate'},
					{word: 'Rotten'}
				], 
				//Can change color and size of the targets here.
				css : {color:'#31b404','font-size':'2em'}
			},

			attribute2 : 
			{
				name : 'Good words', //Attribute name to be used for feedback and logging
				title : {
					media : {word : 'Good words'}, //Name of the category presented in the task.
					css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
					height : 4 //Used to position the "Or" in the combined block.
				}, 
				media : [ //Stimuli
					{word: 'Cheerful'},
					{word: 'Excitement'},
					{word: 'Fantastic'},
					{word: 'Friendship'},
					{word: 'Glad'},
					{word: 'Cherish'},
					{word: 'Attractive'},
					{word: 'Pleasing'}
				], 
				//Can change color and size of the targets here.
				css : {color:'#31b404','font-size':'2em'}
			},	  */

		base_url : {//Where are your images at?
			image : 'https://terrifyd.github.io/UD-IAT/Images/'
			//image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});