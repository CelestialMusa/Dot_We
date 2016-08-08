//Defining Variables
var select;
var header;
var body;
var headerBody = [["11th July 2016 -  Tasks Are Tasks are out Groups Are chosen","We were given our tasks asn notified that we need to form groups of 3<br>Orginally our Group Members consist of Ramoloi Mofokeng,<br>Zinhle Maseko & Ndivho Machidi.<br>"],
["14 July 2016 - Design brainstorming Begins","The Team met at 08:00 to brain storm design ideas (an excuse to do<br>some meaningless web browisng really) for the design of the webiste,<br>as well as the possible information that would be put non the site.<br>Deveopment would begin Later that night<br>"],
["18 July 2016 - First Major hiccup","One of our members decidied to jump ship and join another group, just as<br>we were about to hand in the fina list of names for our group. Zachariah<br>Manyoni was brought in as a replacement (why he didn't have a group as <br>of that moment is beyond the rest of us). This day was used to exchange<br>opinions on various developmemnt environments such and text editors.<br>"],
["22 july 2016 - New Member - New Ideas","Our New Member Mr Manyoni comes up with new fresh and bold ideas that<br>boost our morale (despite them forcing a near complete redisgn) they did<br>give us renewed hope that we could come up with an amazing website come D-Day<br>"],
["23 july 2016 - Getting our Hands Dirty... For Real This time","The real development of the webiste started on this weekend. This involved, <br>reseraching and testing out the feasblility of some the ideas put forward.<br>Overall This was probably the most productive day(s) since the project was <br>given to us."],
["25 July 2016 - Panic Stations","With The deadline looming near, the team realise that they need to move a little<br>faster if they wish to make the deadline and submit work they can be proud of.<br>Drawing up designing and development is taken to insane levels as the team works <br>tooth and nail to try and get the work done while still trying to maintain the<br>high standard of work each of us are known for."]
]

function load() {
    select = document.getElementById('dates');
    body = document.getElementById('blogBody');
    header = document.getElementById('blogHead');
    displayBlogDetails();
}

function displayBlogDetails(){
    //var = 
    switch(parseInt(select.value)){
        case 0: header.innerHTML = headerBody[0][0];
                body.innerHTML = headerBody[0][1];
            break;
        case 1: header.innerHTML = headerBody[1][0];
                body.innerHTML = headerBody[1][1];
            break;
        case 2: header.innerHTML = headerBody[2][0];
                body.innerHTML = headerBody[2][1];
            break;
        case 3: header.innerHTML = headerBody[3][0];
                body.innerHTML = headerBody[3][1];
            break;
        case 4: header.innerHTML = headerBody[4][0];
                body.innerHTML = headerBody[4][1];
            break;
        case 5: header.innerHTML = headerBody[5][0];
                body.innerHTML = headerBody[5][1];
            break;
    }
}