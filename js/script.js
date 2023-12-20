
let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quote = 
[
  '“Be yourself; everyone else is already taken.”― Oscar Wilde',
  ' “Two things are infinite: the universe and human stupidity; and ”― Albert Einstein',
  '“So many books, so little time.”― Frank Zappa',
  '“A room without books is like a body without a soul.”― Marcus Tullius Cicero',
  '“Be who you are and say what you feel, because those who mind don”',
];


 btn .addEventListener ('click', function(){
    var randomQuote = quote[Math.round(Math.random()* quote.length)]
    output.innerHTML=randomQuote;

})
 


