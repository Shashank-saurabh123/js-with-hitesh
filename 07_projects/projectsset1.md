#projects related to DOM

## project link
[click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1
```javascript
const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(e){
  console.log(e)
  console.log(e.target)// it tells from where event is coming
  if(e.target.id==='grey')
  {
    body.style.backgroundColor =e.target.id
  }
  if(e.target.id==='white')
  {
    body.style.backgroundColor =e.target.id
  }
  if(e.target.id==='blue')
  {
    body.style.backgroundColor =e.target.id
  }
  if(e.target.id==='yellow')
  {
    body.style.backgroundColor =e.target.id
  }
  })
})

```









## project 5 solution...
```javascript
const insert= document.getElementById('insert')
window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===" "? "space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
 </div>`
})
```

## project 6 solution
```javascript
const randomColor= function()
{
  const hex='0123456789ABCDEF';
  let color='#';
  for(let i=0;i<6;i++)
  {
   color+=hex[Math.floor(Math.random()*16)];
  }
 return color;
}
let IntervalId // for stopping 
const startChangingColor=function(){
 if(!IntervalId)
 {
  IntervalId=setInterval(changeBgColor,1000)
 }
  
  function changeBgColor (){document.body.style.backgroundColor=randomColor();
}
}
const stopChangingColor=function(){
  clearInterval(IntervalId);
  IntervalId=null;// flushing the IntervalId after the clearation
}
document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)
```

