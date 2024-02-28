define(['pipAPI', 'https://terrifyd.github.io/UD-IAT/Mobile_Full_Script.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Fat people', //Will appear in the data.
			title : {
				media : {word : 'Fat people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{image : 'Fat_man_5.jpg'}, 
				{image : 'Fat_man_2.jpg'}, 
				{image : 'Fat_man_3.jpg'}, 
				{image : 'Fat_man_4.jpg'},
				{image : 'Fat_woman_1.jpg'},
				{image : 'Fat_woman_2.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Thin people', //Will appear in the data.
			title : {
				media : {word : 'Thin people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{image : 'Thin_man_1.png'}, 
				{image : 'Thin_man_2.png'}, 
				{image : 'Thin_man_3.jpeg'}, 
				{image : 'Thin_man_4.png'}, 
				{image : 'Thin_woman_1.jpeg'}, 
				{image : 'Thin_woman_2.png'}
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
				{word: 'Hate'},
				{word: 'Bothersome'},
				{word: 'Ugly'},
				{word: 'Grief'},
				{word: 'Poison'},
				{word: 'Annoy'},
				{word: 'Humiliate'},
				{word: 'Rotten'}
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
				{word: 'Cheerful'},
				{word: 'Excitement'},
				{word: 'Fantastic'},
				{word: 'Friendship'},
				{word: 'Glad'},
				{word: 'Cherish'},
				{word: 'Attractive'},
				{word: 'Pleasing'}
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