//答えを用意
var number = Math.floor(Math.random()*11);
var answer = parseInt(window.prompt('数あてゲーム。0~10の数字を半角で入力してください！'));


var i = 0;
var message;

while(i == 1){

if(answer === number) {
  message = 'おめでとうございます！あたりです！';
  i++;
  }else if (answer < number){
    var answer = parseInt(window.prompt('残念！もっと大きいです'));
  }else if (answer > number){
    var answer = parseInt(window.prompt('残念！もっと小さいです'));
  }else{
    var answer = parseInt(window.prompt('0~10の数字を半角で入力してください'));
  }
  
}

//結果を表示
document.getElementById('choice').textContent = message;


