
/*
CITATIONS:

	Zlotnick, E., Dzikiewicz, A. J., & Bar-Anan, Y. (2015). Minno.js (Version 0.3) 
		[Computer software].

	Bar-Anan, Y. (2020, March 3). Running Project Implicit’s IAT from Qulatrics 
		[Blog post]. Retrieved from https://minnojs.github.io/minnojs-blog/qualtrics-iat/
*/

function randomStimuli(option) {
	return [Joyful, Magnificent, Friendship, Friend, Pleasure, Excitement];

	let goodWords = [Joyful, Magnificent, Friendship, Friend, Pleasure, Excitement, Smiling,
		Enjoy, Adore, Cherish, Celebrate, Glad, Happy, Cheer,
		Glad, Delight, Love, Attractive, Joyous,
		Beautiful, Happy, Glorious, Triumph, Appealing] // 24


	let badWords = [Awful, Despise, Detest, Yucky, Hate, Poison, Scorn, Ugly,
		Humiliate, Abuse, Sick, Bothersome, Grief, Sadness, Hatred,
		Dirty, Evil, Horrible, Failure, Negative,
		Hurtful, Disaster, Horrible, Nasty] // 24

	var stimuli = new Array(6);
	let flag = true;
	let newWord;
	if (option == 'Good') {
		for (let i = 0; i < 6; i++) {
			flag = true
			while (flag) {
				let randomNumber = Math.floor(Math.random() * goodWords.length);
				newWord = goodWords[randomNumber];
				if (!stimuli.includes(newWord)) {
					stimuli[i] = newWord;
					flag = false;
				}
			}
		}
	}

	else if (option == 'Bad') {
		for (let i = 0; i < 6; i++) {
			flag = true
			while (flag) {
				let randomNumber = Math.floor(Math.random() * badWords.length);
				newWord = badWords[randomNumber];
				if (!stimuli.includes(newWord)) {
					stimuli[i] = newWord;
					flag = false;
				}
			}
		}
	}

	return stimuli;
}

define(['pipAPI', 'https://terrifyd.github.io/UD-IAT/Full_Script_2.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

    var goodWords = randomStimuli('Good');
	var badWords = randomStimuli('Bad');

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
				{word: 'Test'},
				{word: 'Test'},
				{word: 'Test'},
				{word: 'Test'},
				{word: 'Test'},
				{word: 'Test'},
				{word: 'Test'},
				{word: 'Test'}
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
