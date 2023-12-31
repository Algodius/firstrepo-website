
let flag=0;
const r=document.querySelector(':root');
const style = getComputedStyle(r);
const bg = style.getPropertyValue('--bg');
const font="black";





  document.querySelector("#darkmode").addEventListener("click", () => {
    flag = 1 - flag; 
    console.log(flag);
  
    if (flag == 1) {
      r.style.setProperty('--bg', 'black');
      r.style.setProperty('--font', 'white');
      r.style.setProperty('--bg2', 'white');

    } else {
     
      r.style.setProperty('--bg', 'initial');
      r.style.setProperty('--font', 'initial');
      r.style.setProperty('--bg2', 'black');
    }
  });
  const typed = new Typed('#sentence', {
    strings: ['Student', '3D Artist', 'Programmer'],
    typeSpeed: 70,
  });
  


