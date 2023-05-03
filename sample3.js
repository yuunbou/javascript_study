let attack = prompt('1〜110の数値を入力してください');
// モンスターの体力を作成
let monsterLife = 100;

// TODO: if文とモンスターの体力と入力された数値の引き算を入れ結果がアラートとして出るように
monsterLife -= attack; 

// alert(`モンスターに攻撃！モンスターに${attack}のダメージ！モンスターの残り体力は${monsterLife}です`)

if(monsterLife <= 90) {
    alert('まだまだです！');
} else if(monsterLife <= 40) {
    alert('大ダメージ！');
} else if(monsterLife === 0) {
    alert('モンスターを倒した！');
}