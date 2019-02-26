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
    let temp = [];
    for(let i=0; i<4; i++ ) {
      if (item[i]!==0) {
        if (i<3 && item[i]===item[i+1]) {
          temp.push(item[i]*2);
          i += 1;
        }
        if (i<3 && item[i]!==item[i+1]) {
          temp.push(item[i]);
        }
        if (i===3) {
          result.push([item[3], 0, 0, 0]);
        }
      }
    }
    let l = temp.length;
    for(let i=0;i<4-l;i++){
      temp.push(0)
    }
    result.push(temp)
  });

  console.log(result.join(",").split(","))
  return result.join(",").split(",");
};

// 二维转一维
const shiftLeftBack = () => {}
const shiftRightBack = () => {}
const shiftUpBack = () => {}
const shiftDownBack = () => {}

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
  console.log(array)
  const li = document.getElementsByClassName('cell');
  li[index1].textContent = 2;
  li[index2].textContent = 2;
  
  window.addEventListener('keydown', (e) => {
    console.log(e.keyCode)
    // [0,1,2,3,
    //  4,5,6,7,
    //  8,9,10,11,
    //  12,13,14,15]

    //left
    if (e.keyCode === 37) {
      array = move(shiftLeftArray(array));
      array.forEach((item, index) => {
        li[index].textContent = item;
      })
      li.forEach((item,index) => {
        if (item === 0);
        li[index].textContent = null;
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