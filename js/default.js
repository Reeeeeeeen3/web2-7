//答えを用意
var number = Math.floor(Math.random()*11);

var i = 0;

do{
//ダイアログ表示
var answer = parseInt(window.prompt('数あてゲーム。0~10の数字を半角で入力してください！'));
var message;
if(answer === number) {
  message = 'あたり！';
  i++;
  }else if (answer < number){
    message = '残念！もっと大きいです';
  }else if (answer > number){
    message = '残念！もっと小さいです';
  }else{
    message = '0~10の数字を半角で入力してください';
  }


//結果を表示
document.getElementById('choice').textContent = message;
}while(i == 1);
