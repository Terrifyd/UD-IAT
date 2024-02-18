
// function for extracting a subjects results from the test data
export function getTestResults(data) {
    if (data.includes('Your responses suggested')) {
        var index = data.indexOf('Your responses suggested'); // index where outpu result begins
        //console.log("1st if triggered");
    }

    else if (data.includes('There were')) {
        var index = data.indexOf('There were'); // index where output result begins
        //console.log("2nd if triggered");
    }

    else { // means that start of results could not be found
        console.log('Could not find results in given text: ');
        console.log(data);
        return 'something went wrong calculating your results';
    }

    var results = '';
    while(data[index] !== '.') {
        //console.log("while loop");
        //console.log(data[index]);
        results += data[index];
        index++;
    }

    results += '.';
    //console.log(results);
    return results;
}


var test = `block,trial,cond,comp,type,cat,stim,resp,err,rt,d,fb,bOrd
3,43,"Fat people/Bad words,Thin people/Good words",compatible,cat2right,Thin people,Thin_man_4.png,right,0,1087,,,
3,44,"Fat people/Bad words,Thin people/Good words",compatible,att1left,Bad words,failure,left,0,705,,,
3,45,"Fat people/Bad words,Thin people/Good words",compatible,cat1left,Fat people,Fat_man_4.jpg,left,0,591,,,
3,46,"Fat people/Bad words,Thin people/Good words",compatible,att2right,Good words,joy,right,0,582,,,
3,47,"Fat people/Bad words,Thin people/Good words",compatible,cat2right,Thin people,Thin_woman_2.png,right,1,1187,,,
3,48,"Fat people/Bad words,Thin people/Good words",compatible,att1left,Bad words,evil,left,0,680,,,
3,49,"Fat people/Bad words,Thin people/Good words",compatible,cat1left,Fat people,Fat_woman_1.jpg,left,0,713,,,
3,50,"Fat people/Bad words,Thin people/Good words",compatible,att2right,Good words,happy,right,0,766,,,
3,51,"Fat people/Bad words,Thin people/Good words",compatible,cat2right,Thin people,Thin_woman_1.jpeg,right,1,1129,,,
3,52,"Fat people/Bad words,Thin people/Good words",compatible,att1left,Bad words,nasty,left,0,1144,,,
3,53,"Fat people/Bad words,Thin people/Good words",compatible,cat1left,Fat people,Fat_man_4.jpg,left,1,1026,,,
3,54,"Fat people/Bad words,Thin people/Good words",compatible,att2right,Good words,love,right,0,789,,,
3,55,"Fat people/Bad words,Thin people/Good words",compatible,cat1left,Fat people,Fat_man_5.jpg,left,0,1177,,,
3,56,"Fat people/Bad words,Thin people/Good words",compatible,att1left,Bad words,agony,left,0,1416,,,
3,57,"Fat people/Bad words,Thin people/Good words",compatible,cat2right,Thin people,Thin_man_2.png,right,0,640,,,
3,58,"Fat people/Bad words,Thin people/Good words",compatible,att2right,Good words,pleasure,right,0,783,,,
3,59,"Fat people/Bad words,Thin people/Good words",compatible,cat2right,Thin people,Thin_man_4.png,right,0,554,,,
3,60,"Fat people/Bad words,Thin people/Good words",compatible,att2right,Good words,laughter,right,0,448,,,
3,61,"Fat people/Bad words,Thin people/Good words",compatible,cat1left,Fat people,Fat_man_3.jpg,left,0,554,,,
3,62,"Fat people/Bad words,Thin people/Good words",compatible,att1left,Bad words,horrible,left,0,468,,,
4,64,"Fat people/Bad words,Thin people/Good words",compatible,cat1left,Fat people,Fat_man_2.jpg,left,0,1093,,,
4,65,"Fat people/Bad words,Thin people/Good words",compatible,att1left,Bad words,awful,left,0,493,,,
4,66,"Fat people/Bad words,Thin people/Good words",compatible,cat2right,Thin people,Thin_woman_2.png,right,0,598,,,
4,67,"Fat people/Bad words,Thin people/Good words",compatible,att2right,Good words,wonderful,right,0,630,,,
4,68,"Fat people/Bad words,Thin people/Good words",compatible,cat1left,Fat people,Fat_woman_1.jpg,left,0,1125,,,
4,69,"Fat people/Bad words,Thin people/Good words",compatible,att1left,Bad words,agony,left,0,1004,,,
4,70,"Fat people/Bad words,Thin people/Good words",compatible,cat2right,Thin people,Thin_man_1.png,right,0,556,,,
4,71,"Fat people/Bad words,Thin people/Good words",compatible,att2right,Good words,love,right,0,519,,,
4,72,"Fat people/Bad words,Thin people/Good words",compatible,cat1left,Fat people,Fat_woman_2.jpg,left,0,756,,,
4,73,"Fat people/Bad words,Thin people/Good words",compatible,att1left,Bad words,nasty,left,0,518,,,
4,74,"Fat people/Bad words,Thin people/Good words",compatible,cat2right,Thin people,Thin_man_3.jpeg,right,0,648,,,
4,75,"Fat people/Bad words,Thin people/Good words",compatible,att2right,Good words,peace,right,0,595,,,
4,76,"Fat people/Bad words,Thin people/Good words",compatible,cat1left,Fat people,Fat_man_2.jpg,left,0,524,,,
4,77,"Fat people/Bad words,Thin people/Good words",compatible,att1left,Bad words,hurt,left,0,1076,,,
4,78,"Fat people/Bad words,Thin people/Good words",compatible,cat2right,Thin people,Thin_woman_2.png,right,0,589,,,
4,79,"Fat people/Bad words,Thin people/Good words",compatible,att2right,Good words,wonderful,right,0,685,,,
4,80,"Fat people/Bad words,Thin people/Good words",compatible,cat2right,Thin people,Thin_man_4.png,right,0,773,,,
4,81,"Fat people/Bad words,Thin people/Good words",compatible,att2right,Good words,pleasure,right,0,591,,,
4,82,"Fat people/Bad words,Thin people/Good words",compatible,cat1left,Fat people,Fat_man_4.jpg,left,0,561,,,
4,83,"Fat people/Bad words,Thin people/Good words",compatible,att1left,Bad words,horrible,left,0,575,,,
4,84,"Fat people/Bad words,Thin people/Good words",compatible,cat2right,Thin people,Thin_man_3.jpeg,right,0,525,,,
4,85,"Fat people/Bad words,Thin people/Good words",compatible,att2right,Good words,glorious,right,0,838,,,
4,86,"Fat people/Bad words,Thin people/Good words",compatible,cat1left,Fat people,Fat_man_5.jpg,left,0,580,,,
4,87,"Fat people/Bad words,Thin people/Good words",compatible,att1left,Bad words,failure,left,0,1174,,,
4,88,"Fat people/Bad words,Thin people/Good words",compatible,cat2right,Thin people,Thin_woman_1.jpeg,right,0,879,,,
4,89,"Fat people/Bad words,Thin people/Good words",compatible,att1left,Bad words,awful,left,0,625,,,
4,90,"Fat people/Bad words,Thin people/Good words",compatible,cat1left,Fat people,Fat_woman_1.jpg,left,0,2015,,,
4,91,"Fat people/Bad words,Thin people/Good words",compatible,att2right,Good words,joy,right,0,559,,,
4,92,"Fat people/Bad words,Thin people/Good words",compatible,cat2right,Thin people,Thin_man_1.png,right,0,568,,,
4,93,"Fat people/Bad words,Thin people/Good words",compatible,att1left,Bad words,evil,left,0,637,,,
4,94,"Fat people/Bad words,Thin people/Good words",compatible,cat1left,Fat people,Fat_man_3.jpg,left,1,1129,,,
4,95,"Fat people/Bad words,Thin people/Good words",compatible,att2right,Good words,happy,right,0,647,,,
4,96,"Fat people/Bad words,Thin people/Good words",compatible,cat2right,Thin people,Thin_man_2.png,right,0,719,,,
4,97,"Fat people/Bad words,Thin people/Good words",compatible,att1left,Bad words,terrible,left,0,1496,,,
4,98,"Fat people/Bad words,Thin people/Good words",compatible,cat1left,Fat people,Fat_woman_2.jpg,left,1,1092,,,
4,99,"Fat people/Bad words,Thin people/Good words",compatible,att2right,Good words,laughter,right,0,579,,,
4,100,"Fat people/Bad words,Thin people/Good words",compatible,cat1left,Fat people,Fat_woman_1.jpg,left,0,1493,,,
4,101,"Fat people/Bad words,Thin people/Good words",compatible,att2right,Good words,pleasure,right,0,589,,,
4,102,"Fat people/Bad words,Thin people/Good words",compatible,cat2right,Thin people,Thin_man_2.png,right,0,1182,,,
4,103,"Fat people/Bad words,Thin people/Good words",compatible,att1left,Bad words,evil,left,0,616,,,
6,134,"Thin people/Bad words,Fat people/Good words",incompatible,cat1right,Fat people,Fat_man_5.jpg,right,0,2406,,,
6,135,"Thin people/Bad words,Fat people/Good words",incompatible,att2right,Good words,happy,right,0,743,,,
6,136,"Thin people/Bad words,Fat people/Good words",incompatible,cat2left,Thin people,Thin_man_1.png,left,0,571,,,
6,137,"Thin people/Bad words,Fat people/Good words",incompatible,att1left,Bad words,failure,left,0,809,,,
6,138,"Thin people/Bad words,Fat people/Good words",incompatible,cat1right,Fat people,Fat_woman_2.jpg,right,0,648,,,
6,139,"Thin people/Bad words,Fat people/Good words",incompatible,att1left,Bad words,awful,left,0,671,,,
6,140,"Thin people/Bad words,Fat people/Good words",incompatible,cat2left,Thin people,Thin_man_4.png,left,0,889,,,
6,141,"Thin people/Bad words,Fat people/Good words",incompatible,att2right,Good words,laughter,right,1,1341,,,
6,142,"Thin people/Bad words,Fat people/Good words",incompatible,cat2left,Thin people,Thin_man_2.png,left,0,825,,,
6,143,"Thin people/Bad words,Fat people/Good words",incompatible,att1left,Bad words,nasty,left,0,1975,,,
6,144,"Thin people/Bad words,Fat people/Good words",incompatible,cat1right,Fat people,Fat_man_3.jpg,right,0,1579,,,
6,145,"Thin people/Bad words,Fat people/Good words",incompatible,att2right,Good words,glorious,right,0,1123,,,
6,146,"Thin people/Bad words,Fat people/Good words",incompatible,cat1right,Fat people,Fat_man_3.jpg,right,0,487,,,
6,147,"Thin people/Bad words,Fat people/Good words",incompatible,att2right,Good words,joy,right,1,1002,,,
6,148,"Thin people/Bad words,Fat people/Good words",incompatible,cat2left,Thin people,Thin_man_1.png,left,0,1260,,,
6,149,"Thin people/Bad words,Fat people/Good words",incompatible,att1left,Bad words,hurt,left,0,838,,,
6,150,"Thin people/Bad words,Fat people/Good words",incompatible,cat1right,Fat people,Fat_woman_2.jpg,right,0,626,,,
6,151,"Thin people/Bad words,Fat people/Good words",incompatible,att1left,Bad words,horrible,left,0,705,,,
6,152,"Thin people/Bad words,Fat people/Good words",incompatible,cat2left,Thin people,Thin_woman_2.png,left,0,584,,,
6,153,"Thin people/Bad words,Fat people/Good words",incompatible,att2right,Good words,wonderful,right,0,1138,,,
7,155,"Thin people/Bad words,Fat people/Good words",incompatible,cat1right,Fat people,Fat_woman_1.jpg,right,0,958,,,
7,156,"Thin people/Bad words,Fat people/Good words",incompatible,att2right,Good words,love,right,0,2350,,,
7,157,"Thin people/Bad words,Fat people/Good words",incompatible,cat2left,Thin people,Thin_man_2.png,left,0,846,,,
7,158,"Thin people/Bad words,Fat people/Good words",incompatible,att1left,Bad words,agony,left,0,424,,,
7,159,"Thin people/Bad words,Fat people/Good words",incompatible,cat1right,Fat people,Fat_man_4.jpg,right,0,506,,,
7,160,"Thin people/Bad words,Fat people/Good words",incompatible,att2right,Good words,peace,right,0,585,,,
7,161,"Thin people/Bad words,Fat people/Good words",incompatible,cat2left,Thin people,Thin_man_4.png,left,0,626,,,
7,162,"Thin people/Bad words,Fat people/Good words",incompatible,att1left,Bad words,terrible,left,0,785,,,
7,163,"Thin people/Bad words,Fat people/Good words",incompatible,cat2left,Thin people,Thin_woman_1.jpeg,left,0,480,,,
7,164,"Thin people/Bad words,Fat people/Good words",incompatible,att1left,Bad words,agony,left,1,1333,,,
7,165,"Thin people/Bad words,Fat people/Good words",incompatible,cat1right,Fat people,Fat_man_2.jpg,right,0,521,,,
7,166,"Thin people/Bad words,Fat people/Good words",incompatible,att2right,Good words,peace,right,0,650,,,
7,167,"Thin people/Bad words,Fat people/Good words",incompatible,cat1right,Fat people,Fat_man_5.jpg,right,1,1369,,,
7,168,"Thin people/Bad words,Fat people/Good words",incompatible,att2right,Good words,glorious,right,1,1128,,,
7,169,"Thin people/Bad words,Fat people/Good words",incompatible,cat2left,Thin people,Thin_man_3.jpeg,left,0,563,,,
7,170,"Thin people/Bad words,Fat people/Good words",incompatible,att1left,Bad words,horrible,left,0,464,,,
7,171,"Thin people/Bad words,Fat people/Good words",incompatible,cat2left,Thin people,Thin_man_3.jpeg,left,0,446,,,
7,172,"Thin people/Bad words,Fat people/Good words",incompatible,att1left,Bad words,hurt,left,0,703,,,
7,173,"Thin people/Bad words,Fat people/Good words",incompatible,cat1right,Fat people,Fat_woman_1.jpg,right,0,574,,,
7,174,"Thin people/Bad words,Fat people/Good words",incompatible,att2right,Good words,happy,right,0,451,,,
7,175,"Thin people/Bad words,Fat people/Good words",incompatible,cat1right,Fat people,Fat_woman_2.jpg,right,0,517,,,
7,176,"Thin people/Bad words,Fat people/Good words",incompatible,att2right,Good words,joy,right,0,536,,,
7,177,"Thin people/Bad words,Fat people/Good words",incompatible,cat2left,Thin people,Thin_woman_2.png,left,0,535,,,
7,178,"Thin people/Bad words,Fat people/Good words",incompatible,att1left,Bad words,failure,left,0,474,,,
7,179,"Thin people/Bad words,Fat people/Good words",incompatible,cat2left,Thin people,Thin_man_1.png,left,0,743,,,
7,180,"Thin people/Bad words,Fat people/Good words",incompatible,att1left,Bad words,evil,left,0,413,,,
7,181,"Thin people/Bad words,Fat people/Good words",incompatible,cat1right,Fat people,Fat_man_4.jpg,right,0,781,,,
7,182,"Thin people/Bad words,Fat people/Good words",incompatible,att2right,Good words,wonderful,right,0,502,,,
7,183,"Thin people/Bad words,Fat people/Good words",incompatible,cat1right,Fat people,Fat_man_2.jpg,right,0,561,,,
7,184,"Thin people/Bad words,Fat people/Good words",incompatible,att1left,Bad words,nasty,left,0,703,,,
7,185,"Thin people/Bad words,Fat people/Good words",incompatible,cat2left,Thin people,Thin_woman_1.jpeg,left,0,1576,,,
7,186,"Thin people/Bad words,Fat people/Good words",incompatible,att2right,Good words,laughter,right,0,1699,,,
7,187,"Thin people/Bad words,Fat people/Good words",incompatible,cat1right,Fat people,Fat_man_3.jpg,right,0,982,,,
7,188,"Thin people/Bad words,Fat people/Good words",incompatible,att2right,Good words,love,right,1,1379,,,
7,189,"Thin people/Bad words,Fat people/Good words",incompatible,cat2left,Thin people,Thin_man_4.png,left,0,1209,,,
7,190,"Thin people/Bad words,Fat people/Good words",incompatible,att1left,Bad words,terrible,left,0,939,,,
7,191,"Thin people/Bad words,Fat people/Good words",incompatible,cat2left,Thin people,Thin_man_2.png,left,0,373,,,
7,192,"Thin people/Bad words,Fat people/Good words",incompatible,att1left,Bad words,awful,left,0,404,,,
7,193,"Thin people/Bad words,Fat people/Good words",incompatible,cat1right,Fat people,Fat_man_5.jpg,right,0,417,,,
7,194,"Thin people/Bad words,Fat people/Good words",incompatible,att2right,Good words,pleasure,right,0,353,,,
9,999,end,,,,,,,,-0.23,Your responses suggested a slight automatic preference for Thin people over Fat people.,"Fat people/Bad words,Thin people/Good words"`

//console.log(getTestResults(test));