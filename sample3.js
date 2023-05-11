// モンスターの体力を作成
let monsterLife = 100;

while(monsterLife > 0) {
    let attack = prompt('1〜100の数値を入力してください');
    monsterLife -= attack
    alert(`モンスターに攻撃！モンスターに${attack}のダメージ！モンスターの残り体力は${monsterLife}です`);
}

alert('モンスターを倒した！');
