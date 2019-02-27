// 把一维转为二维
const shiftLeftArray = (arr) => {
  const temp = [...arr];
  const res = [temp.slice(0,4), temp.slice(4,8), temp.slice(8,12), temp.slice(12,16)];
  return res;
};

const shiftRightArray = () => {};
const shiftUpArray = () => {};
const shiftDownArray = () => {};

// 移动数字
const move = (arr2d) => {
  const result = [];
  arr2d.forEach(item => {
    let temp = [...item];
    let sum = 0;
    temp = temp.filter(item => item !== 0);

    for(let i=0; i<temp.length; i++ ) {
      if(temp[i] === temp[i+1] && sum === 0) {
        temp[i] *= 2;
        temp.splice(i+1, 1);
        sum = 1;
      }
    }
    let l = temp.length;
    for(let i=0;i<4-l;i++){
      temp.push(0)
    }
    console.log(temp)
    result.push(temp)
  });

  return result;
};

// 二维转一维
const shiftLeftBack = (arr) => {
  return arr.join(",").split(",");
}
const shiftRightBack = () => {}
const shiftUpBack = () => {}
const shiftDownBack = () => {}

// 数字随机位置
const genNumber = (arr) => {
  const temp = [...arr];
  while(true){
    let pos = Math.floor(Math.random() * 16);

    if (temp[pos] == 0) {
      temp[pos] = 2;

      break;
    }
  }

  return temp;
}

window.addEventListener('load', () => {
  // init
  let array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  let index1 = Math.floor(Math.random() * 16);
  array.splice(index1, 1, 2);
  let index2 = Math.floor(Math.random() * 16);
  while (index2 === index1) {
    index2 = Math.floor(Math.random() * 16);
  }
  array.splice(index2, 1, 2);
  // console.log(array)
  const li = document.getElementsByClassName('cell');
  li[index1].textContent = 2;
  li[index2].textContent = 2;
  
  window.addEventListener('keydown', (e) => {

    //left
    if (e.keyCode === 37) {
      array = genNumber(shiftLeftBack(move(shiftLeftArray(array))));
      console.log(array)
      array.forEach((item, index) => {
        if (item != 0) {
          li[index].textContent = item;
        } else {
          li[index].textContent = null;
        }
      })
    }

    //up
    if (e.keyCode === 38) {}

    //right
    if (e.keyCode === 39) {}

    //down
    if (e.keyCode === 40) {}
  })
})