let universal = document.querySelectorAll('*')
universal.forEach(function (elem) {
  elem.style.margin = '0'
  elem.style.padding = '0'
  elem.style.boxSizing = 'border-box'
  elem.style.fontFamily = '"Literata", serif;'
})

let body = document.querySelector('body')
let bodyStyle = body.style
bodyStyle.background = '#eef4fa'
bodyStyle.height = '100vh'
bodyStyle.width = '100vw'
bodyStyle.overflowX = 'hidden'
bodyStyle.display = 'flex'
bodyStyle.flexDirection = 'column'
bodyStyle.justifyContent = 'start'
bodyStyle.alignItems = 'center'


body.innerHTML = '<h1>Our Reviews</h1><div id = "main"><div class="carousal" id="carousal1"><div class="img"><div class="comma">&#8217;&#8217;</div></div><div class="titles"><h3>Susan Smith</h3><h3>WEB DEVELOPER</h3></div><div class="bio"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati illum eitaque autem ipsum. Facere autem tempora ratione ipsam veritatis aliquid blanditiis asperiores dolores recusandae distinctio voluptatum, iusto perferendis repudiandae.</p></div><div class="btns"><button><i class="fa-solid fa-arrow-left"></i></button><button><i class="fa-solid fa-arrow-right"></i></button></div><div class="surprise"><button>Surprise Me</button></div></div><div class="carousal" id="carousal2"><div class="img"><div class="comma">&#8217;&#8217;</div></div><div class="titles">  <h3>Susan Smith</h3>  <h3>WEB DEVELOPER</h3></div><div class="bio">  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecatieitaque autem ipsum. Facere autem tempora ratione ipsam veritatisblanditiis asperiores dolores recusandae distinctio voluptatum, iustorepudiandae.</p></div><div class="btns">  <button><i class="fa-solid fa-arrow-left"></i></button>  <button><i class="fa-solid fa-arrow-right"></i></button></div><div class="surprise"><button>Surprise Me</button></div></div><div class="carousal"id="carousal3"><div class="img">  <div class="comma">&#8217;&#8217;</div></div><div class="titles">  <h3>Susan Smith</h3>  <h3>WEB DEVELOPER</h3></div><div class="bio">  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecatieitaque autem ipsum. Facere autem tempora ratione ipsam veritatisblanditiis asperiores dolores recusandae distinctio voluptatum, iustorepudiandae.</p></div><div class="btns">  <button><i class="fa-solid fa-arrow-left"></i></button>  <button><i class="fa-solid fa-arrow-right"></i></button></div><div class="surprise"><button>Surprise Me</button></div></div><div class="carousal" id="carousal4"><div class="img"><div class="comma">&#8217;&#8217;</div></div><div class="titles">  <h3>Susan Smith</h3>  <h3>WEB DEVELOPER</h3></div><div class="bio">  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecatieitaque autem ipsum. Facere autem tempora ratione ipsam veritatisblanditiis asperiores dolores recusandae distinctio voluptatum, iustorepudiandae.</p></div><div class="btns">  <button><i class="fa-solid fa-arrow-left"></i></button>  <button><i class="fa-solid fa-arrow-right"></i></button></div><div class="surprise"><button>Surprise Me</button></div></div><div class="carousal" id="carousal5">  <div class="img"><div class="comma">&#8217;&#8217;</div></div>  <div class="titles">    <h3>Susan Smith</h3>    <h3>WEB DEVELOPER</h3>  </div>  <div class="bio">    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecatieitaque autem ipsum. Facere autem tempora ratione ipsam veritatisblanditiis asperiores dolores recusandae distinctio voluptatum, iustorepudiandae.</p>  </div>  <div class="btns">    <button><i class="fa-solid fa-arrow-left"></i></button>    <button><i class="fa-solid fa-arrow-right"></i></button>  </div>  <div class="surprise"><button>Surprise Me</button></div></div></div>'



let h1 = document.querySelector('h1')
let h1Style = h1.style

h1Style.color = '#5b7eacff'
h1Style.borderBottom = '2px solid #42a1ee'
h1Style.width = 'auto'
h1Style.marginTop = '100px'
h1Style.fontFamily = '"Literata",serif'

let main = document.querySelector('#main')
main.style.width = '40%'
main.style.height = 'auto'
main.style.position = 'relative'
main.style.marginTop = '50px'
// main.style.display = 'flex'


let carousals = document.querySelectorAll('.carousal').forEach(function (elem) {
  let elemStyle = elem.style
  elemStyle.width = '100%'
  elemStyle.height = 'auto'
  elemStyle.position = 'absolute'
  elemStyle.display = 'none'
  elemStyle.flexDirection = 'column'
  elemStyle.justifyContent = 'center'
  elemStyle.alignItems = 'center'
  elemStyle.gap = '20px'
  elemStyle.background = 'white'
  elemStyle.fontFamily = '"Roboto",serif'
  elemStyle.boxShadow = '-1px 4px 10px 0px  #4b4b4ba8'
})


let imgdiv = document.querySelectorAll('.img').forEach(function (elem) {
  let elemStyle = elem.style
  elemStyle.marginTop = '25px'
  elemStyle.width = '110px'
  elemStyle.height = '110px'
  elemStyle.borderRadius = '50%'
  elemStyle.boxShadow = '11px -1px 0 0 #42a1ee'
})

document.querySelector('#carousal1 .img').style.background ='url(./img1.jpg) center center / cover no-repeat'
document.querySelector('#carousal2 .img').style.background ='url(./img2.jpg) center center / cover no-repeat'
document.querySelector('#carousal3 .img').style.background ='url(./img3.jpg) center center / cover no-repeat'
document.querySelector('#carousal4 .img').style.background ='url(./img4.jpg) center center / cover no-repeat'
document.querySelector('#carousal5 .img').style.background ='url(./img5.jpg) center center / cover no-repeat'

let comma = document.querySelectorAll('.comma').forEach(function (elem) {
  let elemStyle = elem.style
  elemStyle.width = '30px'
  elemStyle.height = '30px'
  elemStyle.background = '#42a1ee'
  elemStyle.color = 'white'
  elemStyle.borderRadius = '50%'
  elemStyle.textAlign = 'center'
  elemStyle.fontSize = '2.5rem'
  elemStyle.margin = '6px 0 0 6px'
})
let titles = document.querySelectorAll('.titles').forEach(function (elem) {
  let elemStyle = elem.style
  elemStyle.display = 'flex'
  elemStyle.flexDirection = 'column'
  elemStyle.width = 'auto'
  elemStyle.height = 'auto'
  elemStyle.gap = '10px'
  elemStyle.alignSelf = 'center'
  elemStyle.alignItems = 'center'

  let h3one = elem.firstElementChild
  h3one.style.margin = '0'
  h3one.style.fontSize = '1.2rem'
  h3one.style.color = '#1682d4ff'
  h3one.style.fontWeight = '600'
  h3one.style.letterSpacing = '2px'


  let h3two = elem.lastElementChild
  h3two.style.margin = '0'
  h3two.style.color = '#5b7eacff'
  h3one.style.fontWeight = '900'
  h3two.style.fontSize = '.9rem'

})

document.querySelectorAll('#carousal2 .titles h3')[0].innerText = 'Valentina Gerorge'
document.querySelectorAll('#carousal2 .titles h3')[1].innerText = 'UX/UI Expert'
document.querySelectorAll('#carousal3 .titles h3')[0].innerText = 'Mark Zuckerburg'
document.querySelectorAll('#carousal3 .titles h3')[1].innerText = 'Meta CEO'
document.querySelectorAll('#carousal4 .titles h3')[0].innerText = 'Elon Musk'
document.querySelectorAll('#carousal4 .titles h3')[1].innerText = 'World Richest Man'
document.querySelectorAll('#carousal5 .titles h3')[0].innerText = 'Inno Sufyan'
document.querySelectorAll('#carousal5 .titles h3')[1].innerText = 'CEO of HiringMine'

let paradiv = document.querySelectorAll('.bio').forEach(function (elem) {
  let elemStyle = elem.style
  elemStyle.width = '93%'
  elemStyle.margin = '0 auto'
  elemStyle.color = '#5b7eacff'
})
let para = document.querySelectorAll('.bio p').forEach(function (elem) {
  let elemStyle = elem.style
  elemStyle.width = '100%'
})
let btnsdiv = document.querySelectorAll('.btns')
btnsdiv.forEach(function (elem) {
  elem.style.display = 'flex'
  elem.style.gap = '30px'
  let buttons = elem.querySelectorAll('button')
  let prev = buttons[0]
  let next = buttons[1]
  prev.setAttribute('onclick','previousElem()')
  next.setAttribute('onclick','nextElem()')
})
btns = document.querySelectorAll('.btns button')
btns.forEach(function (elem) {
  elem.style.background = 'transparent'
  elem.style.color = '#42a1ee'
  elem.style.border = 'none'
  elem.style.fontSize = '1.3rem'
  elem.style.cursor = 'pointer'
})

let surpriseBtn = document.querySelectorAll('.surprise button')
surpriseBtn.forEach(function (elem) {
  elem.style.background = '#42a1ee27'
  elem.style.color = '#42a1ee'
  elem.style.border = '1px solid #42a1ee'
  elem.style.marginBottom = '30px'
  elem.style.padding = '8px 16px'
  elem.style.borderRadius = '17px'
  elem.style.cursor = 'pointer'
  elem.style.transition = '0.3s ease'
  elem.setAttribute('onmouseover', 'surprisehover(this)')
  elem.setAttribute('onmouseout', 'surprisehovernone(this)')
})

function surprisehover(btn) {
  btn.style.background = '#42a1ee'
  btn.style.color = 'white'
}

function surprisehovernone(btn) {
  btn.style.background = '#42a1ee27'
  btn.style.color = '#42a1ee'
  btn.style.border = '1px solid #42a1ee'
}

let carousal1 = document.querySelector('#carousal1')
let carousal2 = document.querySelector('#carousal2')
let carousal3 = document.querySelector('#carousal3')
let carousal4 = document.querySelector('#carousal4')
let carousal5 = document.querySelector('#carousal5')

let prev = document.querySelectorAll('.btns button')[0]
let next = document.querySelectorAll('.btns button')[1]
let carousalArr = [carousal1,carousal2,carousal3,carousal4,carousal5]

carousal1.style.display = 'flex'
let i = 0
function carousal(i){
  carousalArr.forEach(function(elem){
    elem.style.display = 'none'
  } )
  carousalArr[i].style.display = 'flex'
}
function previousElem(){
  i--
  if (i < 0) {
    i = carousalArr.length - 1
  }
  carousal(i)
}
function nextElem(){
  i++
  if (i >= carousalArr.length) {
    i = 0 
  }
  carousal(i)
}
carousal(i)


