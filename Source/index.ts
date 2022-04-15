import {Layout} from './Layout/Layout';

console.log('Procedural HUD');

function randomHUD() {
  /*
    Basic layout

    00 10 20
    01 11 21
    02 12 22
  */

  const layout = new Layout();

  for (let i = 0; i < 9; i++) {
    layout.addElement({
      position: `${i % 3}${i / 3 | 0}`,
    });
  }

  console.log(layout);
}

randomHUD();

