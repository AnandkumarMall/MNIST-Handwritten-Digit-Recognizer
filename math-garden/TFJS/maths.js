var answer;
var score =0;
var backgroundImages = [];
function nextQuestion(){
    const n1= Math.round(Math.random()*5);
    const n2= Math.round(Math.random()*4);
    document.getElementById('n1').innerHTML = n1;
    document.getElementById('n2').innerHTML = n2;
    answer = n1+n2;
}
function checkAnswer(){
    const predicted = predictImage();
    if (predicted==answer){
        score++;
        if(score>6){
            alert('You Won ');
            score=0;
            backgroundImages=[];
            document.body.style.backgroundImage=backgroundImages.join(',');
        }
        else{
            backgroundImages.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage=backgroundImages.join(',');
        }
    }
    else{
        if(score!=0){
            backgroundImages.pop();
            score--;
        }
        alert('oops! wrong Answer');
        document.body.style.backgroundImage=backgroundImages.join(',');

    }

}
