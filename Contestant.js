class Contestant {
    constructor(){
        this.index = null;
        this.answer = 0;
        this.name = null;
    }
    getCount(){
        var contestantCountRef = database.ref('contestantCount');
        contestantCountRef.on("value",function(data){
            contestantCount = data.val();
        })}

        updateCount(count){
            database.ref('/').update({
                contestantCount : count
            })}
            updaṭe(){
                var contestantIndex ="contestants/contestant" + this.index;
                database.ref(contestantIndex).set({
                    name:this.name,
                    answer:this.answer
                })}
                static getContestantInfo(){
                    var contestantInforef = database.ref('contestant')
                    contestantInforef.on("value",function(data){
                        allContestants = data.val();
                    })}
}