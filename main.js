window.addEventListener('load', () => {
  const array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  const index1 = Math.floor(Math.random() * 16);
  array.slice(index1, 1, index1);
  const index2 = Math.floor(Math.random() * 16);
  while (index2 === index1) {
    index2 = Math.floor(Math.random() * 16);
  }
  array.slice(index2, 1, index2);

  const li = document.getElementsByClassName('cell');
  console.log(li)

  

})