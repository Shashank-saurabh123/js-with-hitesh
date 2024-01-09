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

## project 2 solution...
// not able to do last part need the knowledge of good html
```
javascript

// here event is subbmit type not a click type
const form=document.querySelector('form')
// this usecase will give empty value,we need to hold input when we submit the button
//const height=parseInt(document.querySelector('#height').value)



// whenever form submits it happens via two type either by POST or by GET, but whenever it subbmits form's value went to URL or server ,hence we need to block this process,because we are not sending on server//

form.addEventListener('submit',function(e){
  e.preventDefault()// preventing its default nature
const height=parseInt(document.querySelector('#height').value)
const weight=parseInt(document.querySelector('#weight').value)
const results=(document.querySelector('#results'))
if(height===' ' || height<0 || isNaN(height))
{
 results.innerHTML=`please give a valid height ${height}`;
}

// for weight
else if(weight===' ' || weight<0 || isNaN(weight))
{
 results.innerHTML=`please give a valid weight ${weight}`;
}
else
{
 const bmi= (weight/((height*height)/10000)).toFixed(2);
 //show the result
 
  results.innerHTML=`<span>${bmi}</span>`

  // if(bmi<18.6)
  // {
  //   results.innerHTML="Under Weight" 

  // }
  // if(bmi>18.6 && bmi<24.9)
  // {
  //   results.innerHTML="Normal Range" 
  // }
  // if(bmi>24.9 )
  // {
    
  // }

}
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

