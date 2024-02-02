define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Fat People', //Will appear in the data.
		    title : {
		      media : {word : 'Fat People'}, //Name of the category presented in the task.
		      css : {color:'#0433b4','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    {image : 'Fat_man_5.jpg'}, 
    			{image : 'Fat_man_2.jpg'}, 
    			{image : 'Fat_man_3.jpg'}, 
    			{image : 'Fat_man_4.jpg'},
				{image : 'Fat_woman_1.jpg'},
				{image : 'Fat_woman_2.jpg'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#0433b4','font-size':'3em'}
		  },

		  category2 : { 
		    name : 'Thin People', //Will appear in the data.
		    title : {
		      media : {word : 'Thin People'}, //Name of the category presented in the task.
		      css : {color:'#0433b4','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    {image : 'Thin_man_1.png'}, 
    			{image : 'Thin_man_2.png'}, 
    			{image : 'Thin_man_3.jpeg'}, 
    			{image : 'Thin_man_4.png'},
				{image : 'Thin_woman_1.jpeg'},
				{image : 'Thin_woman_2.png'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#0433b4','font-size':'3em'}
		  },

  		attribute1 : 
			{
			name : 'Unpleasant', //Attribute label
			title : {
				media : {word : 'Bad'}, //Name of the category presented in the task.
				css : {color:'#0433b4','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Bomb'},
				{word: 'Abuse'},
				{word: 'Sadness'},
				{word: 'Pain'},
				{word: 'Poison'},
				{word: 'Grief'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#0433b4','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'Pleasant', //Attribute label
			title : {
				media : {word : 'Good'}, //Name of the category presented in the task.
				css : {color:'#0433b4','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Paradise'},
				{word: 'Pleasure'},
				{word: 'Cheer'},
				{word: 'Wonderful'},
				{word: 'Splendid'},
				{word: 'Love'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#0433b4','font-size':'3em'}
			},

  base_url : {//Where are your images at?
	image : 'https://terrifyd.github.io/UD-IAT/Images/'
    // image : 'https://baranan.github.io/minno-tasks/images/'
  }}
  );
  });
