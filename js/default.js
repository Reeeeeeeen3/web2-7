//答えを用意
class JSample7_1{
  public static void main(String args[]){
    
var number = Math.floor(Math.random()*11);
var answer = parseInt(window.prompt('数あてゲーム。0~10の数字を半角で入力してください！'));

var i = 1;

do{
var message;
if(answer === number) {
  message = 'あたり！';
  i = 2;
  }else if (answer < number){
    message = '残念！もっと大きいです';
  }else if (answer > number){
    message = '残念！もっと小さいです';
  }else{
    message = '0~10の数字を半角で入力してください';
  }


//結果を表示
document.getElementById('choice').textContent = message;
}while(i === 2);
    
}
