'use strict';

// 配列を作成
let todo = ['デザインカンプ作成', 'データ整理', '勉強会申込み', '牛乳を買う'];
// 配列を追加
todo.push('歯医者に行く');
//  配列の各項目全て読み取る
for (let item of todo) {
    const li = `<li>${item}</li>`;
    document.getElementById('list').insertAdjacentHTML('beforeend', li);
}