var questions = [{
  question:"Fathometer is used to measure",
  opt_a:"Earthquakes",
  opt_b:"Ocean depth",
  opt_c:"Rainfall",
  corect:"b"
},
{
  question:"Which is a green planet in the solar system?",
  opt_a:"Pluto",
  opt_b:"Venus",
  opt_c:"Uranus",
  corect:"c"
},{
  question:"Name the plant important in sericulture",
  opt_a:"Pea",
  opt_b:"Mulberry",
  opt_c:"Cassia",
  corect:"b"
},{
  question:"Which is considered as the biggest port of India?",
  opt_a:"Kolkata",
  opt_b:"Mumbai",
  opt_c:"Chennai",
  corect:"c"
},{
  question:"An astronaut in outer space will observe sky as",
  opt_a:"Black",
  opt_b:"Blue",
  opt_c:"White",
  corect:"a"
},{
  question:"Exposure to sunlight helps a person improve his health because",
  opt_a:"the pigment cells in the skin get stimulated and produce a healthy tan",
  opt_b:"the ultraviolet rays convert skin oil into Vitamin D",
  opt_c:"the infrared light kills bacteria in the body",
  corect:"b"
},{
  question:"“One People, One State, One leader” was the policy of",
  opt_a:"Hitler",
  opt_b:"Lenin",
  opt_c:"Stalin",
  corect:"a"
},{
  question:"Golf player Vijay Singh belongs to which country?",
  opt_a:"USA",
  opt_b:"India",
  opt_c:"Fiji",
  corect:"c"
},{
  question:"Fastest Shorthand Writer was",
  opt_a:"Dr. G. D. Bist",
  opt_b:"J.R.D. Tata",
  opt_c:"Khudada Khan",
  corect:"a"
},{
  question:"Epsom(England) is the place associated with",
  opt_a:"Snooker",
  opt_b:"Shooting",
  opt_c:"Horse racing",
  corect:"c"
},{
  question:"Name the continent where 'Tundra' type of climate is not found",
  opt_a:"Europe",
  opt_b:"Africa",
  opt_c:"North America",
  corect:"b"
},
{
  question:"The biggest public sector undertaking in India is",
  opt_a:"Railways",
  opt_b:"Roadways",
  opt_c:"Iron and steel Plants",
  corect:"a"
},
{
  question:"At which particular place on earth are days and nights of equal length always?",
  opt_a:"Equator",
  opt_b:"Poles",
  opt_c:"No where",
  corect:"a"
},
{
  question:"G-15 is an economic grouping of",
  opt_a:"Third World Nations",
  opt_b:"Second World Nations",
  opt_c:"First World Nations",
  corect:"a"
},
{
  question:"Which country has 'This is the root of all evil' written on its coins?",
  opt_a:"Cuba ",
  opt_b:"Vatican City ",
  opt_c:"Russia",
  corect:"b"
}
];

var answerArray = ["b","c","b","c","a","b","a","c","a","c","b","a","a","a","b"];
var questionId = document.getElementById("question");
    var userArray = [];
    function answerChecker(){
      storeValue();
      var currentAnswerArray = answerArray.slice(0,l);
      var notInSecond = currentAnswerArray.slice(0);
      for (var k = 0, m; k <userArray.length; k++) {
    m = notInSecond.indexOf(userArray[k]);
    if (m > -1) notInSecond.splice(m, 1);}
    var t = userArray.length;
    var w = t-notInSecond.length;
    var y = notInSecond.length;
    var correctP = Math.floor((w/t)*100);
    questionId.innerHTML += '<br><h3>You have answered ' + correctP + '% correctly</h3>';
    questionId.innerHTML += '<br><h3>You have answered ' + w + ' questions correctly and '+ y +' wrongly</h3>';
    if(correctP===100){
      questionId.innerHTML += '<br><h3>Congratulations You Have Answered Everything Correctly!!!!</h3>';
    }else{
            questionId.innerHTML += '<br><h3>The Correct Sequence Is</h3>';
      for(var q =0; q<t;q++ ){
        questionId.innerHTML += '<p class=" correct_sequence ">'+ currentAnswerArray[q] + '</p>';
      }questionId.innerHTML += '<br><h3>Your Entered Sequence Is</h3>';
      for(var q =0; q<t;q++ ){
        questionId.innerHTML += '<p class=" correct_sequence ">'+ userArray[q] + '</p>';
      }
    }

console.log(notInSecond);
}

    function storeValue(){
        l = document.getElementsByName("choicea").length;
        for(var n=0; n<l;n++){
            if(document.getElementsByName("choicea")[n].checked === true){
              userArray.push("a");
            }if(document.getElementsByName("choiceb")[n].checked === true){
                  userArray.push("b");
                }if(document.getElementsByName("choicec")[n].checked === true){
                      userArray.push("c");
                    }}
          console.log(userArray);
          return (userArray,l)
      }
//       function shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;
//
//
//   while (0 !== currentIndex) {
//
//
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//
//
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//
//   return array;
// }

document.querySelector("#qn").addEventListener("keyup",function(event){
  if(event.keyCode===13){
    var x = document.getElementById("qn").value;

    var i;
    var v = questions.length;
    console.log(v);

    // var randomArray =[];
    // v = questions.length;
    // for(var u=0;u<v;u++){
    //   randomArray.push(u);
    // }
    function questionfunc(){
        //
        // shuffle(randomArray);
        // var currentRandomArray = randomArray.slice(0,x);

        for(var i=0;i<x;i++){
      questionId.innerHTML += '<h2>' + questions[i].question + '</h2>';
      questionId.innerHTML += "<label> <input type='checkbox' id='a' name='choicea' value='a' > " + questions[i].opt_a +
          "</label><br>";
      questionId.innerHTML += "<label> <input type='checkbox' id='b' name='choiceb' value='b'> " +questions[i].opt_b +
          "</label><br>";
      questionId.innerHTML += "<label> <input type='checkbox' id='c' name='choicec' value='c'> " + questions[i].opt_c +
          "</label><br>";
        }
    }
  if(x<=15){  questionfunc();}else{    questionId.innerHTML += '<h2> Please Enter A Value From 1-15 </h2>';}
  }


});
