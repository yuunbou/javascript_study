// じゃんけんプログラムに機能追加
// 1,グー・チョキ・パー以外の文字列が入力されたときに、「グー・チョキ・パーのいずれかを入力してください」とアラートウィンドウにエラーが表示されるように設定。
// 2,アラートウィンドウでエラーが表示された後、もう一度、プロンプト入力欄が表示されて入力できるように設定してください。
// 3,キャンセルボタンが押されたときは、「またチャレンジしてね」というアラートメッセージが出力されるように設定してください。

// 変数（user_hand）を作りユーザーの手を作成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。 ');
// while()条件式で①とアラートを設定
while((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力してください');
  user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。 ');
}
// 変数（js_hand）を作りJavaScriptの手を作成
let js_hand = getJShand();
// じゃんけんの勝敗の結果
let judge = winLose(user_hand,js_hand);
// ③のアラートの
if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね")
}

function getJShand(){
  let js_hand_num = Math.floor(Math.random() * 3);
  let hand;
  if (js_hand_num == 0){
    hand = "グー";
  } else if (js_hand_num == 1){
    hand = "チョキ";
  } else if (js_hand_num == 2){
    hand = "パー";
  }
  return hand;
}

function winLose(user, js){
  let winLoseStr;
  if (user == "グー"){
    if (js == "グー"){
      winLoseStr = "あいこ";
    } else if (js == "チョキ"){
      winLoseStr = "勝ち";
    } else if (js == "パー"){
      winLoseStr = "負け";
    }
  } else if (user == "チョキ"){
    if (js == "グー"){
      winLoseStr = "負け";
    } else if (js == "チョキ"){
      winLoseStr = "あいこ";
    } else if (js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if (user == "パー"){
    if (js == "グー"){
      winLoseStr = "勝ち";
    } else if (js == "チョキ"){
      winLoseStr = "負け";
    } else if (js == "パー"){
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}