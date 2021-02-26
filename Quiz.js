class Quiz{
constructor(){}

getState(){
var gameStateref = database.ref('gameState');
gameStateref.on('value',function (data)
{
gameState = data.val()
console.log(gameState);
})}

update(state){
    database.ref('/').update({
        gameState:state
    })}
    
 start(){
    console.log("display");
        
           contestant = new Contestant();
           console.log("display1");
           contestant.getCount();
       
       question = new Question();
       question.display();
        
    }
    play(){
        question.hide();
        background("Yellow");
        fill(0);
        textSize(30);
        text("Result of the Quiz",340, 50);
        text("----------------------------",320, 65);
        Contestant.getPlayerInfo();
        if(allContestants !== undefined){
          debugger;
          var display_Answers = 230;
          fill("Blue");
          textSize(20);
          text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);
    
          for(var plr in allContestants){
            debugger;
            var correctAns = "2";
            if (correctAns === allContestants[plr].answer)
              fill("Green")
            else
              fill("red");
    
            display_Answers+=30;
            textSize(20);
            text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
          }
        }
      }


}