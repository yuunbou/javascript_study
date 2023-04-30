'use strict';

// 時間で異なるメッセージの表示

const hour = new Date().getHours();

if(hour >= 19 && hour < 12) { 
  window.alert('お弁当30%OFF!');
} else if(hour === 9 || hour === 15) {
  window.alert('お弁当１個買ったら１個おまけ');
} else {
  window.alert('お弁当はいかがですか？');
}
