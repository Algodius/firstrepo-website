
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
      r.style.setProperty('--f', 'to right,#969696,#dadada,#ffffff');
      r.style.setProperty('--dm', '#c7e8ff');
      document.querySelector("#style2").style.visibility = "visible";
     
    } else {
     
      r.style.setProperty('--bg', 'initial');
      r.style.setProperty('--font', 'initial');
      r.style.setProperty('--bg2', 'black');
      r.style.setProperty('--f', 'initial');
      r.style.setProperty('--dm', '#f8ff00');
      document.querySelector("#style2").style.visibility = "hidden";
    }
  });
  const typed = new Typed('#sentence', {
    strings: ['Student', '3D Artist', 'Programmer'],
    typeSpeed: 70,
  });
  


