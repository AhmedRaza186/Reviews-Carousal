let universal = document.querySelectorAll('*')
universal.forEach(function(elem){
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
bodyStyle.overflow = 'hidden'
bodyStyle.display = 'flex'
bodyStyle.flexDirection = 'column'
bodyStyle.justifyContent = 'start'
bodyStyle.alignItems = 'center'


body.innerHTML = '<h1>Our Reviews</h1><div class="carousal"><div class="img"><div class="comma">&#8217&#8217</div></div><div class="titles"><h3>Susan Smith</h3><h3>WEB DEVELOPER</h3></div><div class="bio"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati illum eitaque autem ipsum.Facere autem tempora ratione ipsam veritatis aliquid blanditiis asperiordolores recusandaedistinctio voluptatum, iusto perferendis repudiandae.</p></div><div class="btns"><button><i class="fa-solid fa-arrow-left"></i></button><button><i class="fa-solid fa-arrow-right"></i></button></div><div class="surprise"><button>Surprise Me</button></div></div>'



let h1 = document.querySelector('h1')
let h1Style = h1.style

h1Style.color = '#5b7eacff'
h1Style.borderBottom = '2px solid #42a1ee'
h1Style.width = 'auto'
h1Style.marginTop = '100px'
h1Style.fontFamily = '"Literata",serif'

let carousal = document.querySelector('.carousal')
let carousalStyle = carousal.style
carousalStyle.marginTop = '50px'
carousalStyle.maxWidth = '35%'
carousalStyle.minWidth = '50%'
carousalStyle.height = 'auto'
carousalStyle.display = 'flex'
carousalStyle.flexDirection = 'column'
carousalStyle.justifyContent = 'center'
carousalStyle.alignItems = 'center'
carousalStyle.gap = '20px'
carousalStyle.background = 'white'
carousalStyle.fontFamily = '"Roboto",serif'
carousalStyle.boxShadow = '-1px 4px 10px 0px  #4b4b4ba8'

let imgdiv = document.querySelector('.img')
let imgdivStyle = imgdiv.style
imgdivStyle.marginTop = '25px'
imgdivStyle.width = '110px'
imgdivStyle.height = '110px'
imgdivStyle.borderRadius = '50%'
imgdivStyle.boxShadow = '11px -1px 0 0 #42a1ee'
imgdivStyle.background = 'url(./img1.jpg) center center / cover no-repeat'

let comma = document.querySelector('.comma')
let commaStyle = comma.style
commaStyle.width = '30px'
commaStyle.height = '30px'
commaStyle.background = '#42a1ee'
commaStyle.color = 'white'
commaStyle.borderRadius = '50%'
commaStyle.textAlign = 'center'
commaStyle.fontSize = '2.5rem'
commaStyle.margin = '6px 0 0 6px'

let titles = document.querySelector('.titles')
let titlesStyle = titles.style
titlesStyle.display = 'flex'
titlesStyle.flexDirection = 'column'
titlesStyle.width = 'auto'
titlesStyle.height = 'auto'
titlesStyle.gap = '10px'
titlesStyle.alignSelf = 'center'
titlesStyle.alignItems = 'center'

let h3 = document.querySelectorAll('.titles h3')
let h3one = h3[0]
let h3two = h3[1]
h3one.style.margin = '0'
h3one.style.fontSize = '1.2rem'
h3one.style.color = '#1682d4ff'
h3one.style.fontWeight = '600'
h3one.style.letterSpacing = '2px'

h3two.style.margin = '0'
h3two.style.color = '#5b7eacff'
h3one.style.fontWeight = '900'
h3two.style.fontSize = '.9rem'


let paradiv = document.querySelector('.bio')
let paradivStyle = paradiv.style
paradivStyle.width = '93%'
paradivStyle.margin ='0 auto'
paradivStyle.color = '#5b7eacff'

let para = document.querySelector('.bio p')
let paraStyle = para.style
paraStyle.width = '100%'

let btns = document.querySelector('.btns')
btns.style.display = 'flex'
btns.style.gap = '30px'

btns.querySelectorAll('button').forEach(function(elem){
    elem.style.background = 'transparent'
    elem.style.color = '#42a1ee'
    elem.style.border = 'none'
    elem.style.fontSize = '1.3rem'
    elem.style.cursor = 'pointer'
})

let surpriseBtn = document.querySelector('.surprise button')
  surpriseBtn.style.background = '#42a1ee27'
    surpriseBtn.style.color = '#42a1ee'
    surpriseBtn.style.border = '1px solid #42a1ee'
    surpriseBtn.style.marginBottom = '30px'
    surpriseBtn.style.padding = '8px'
    surpriseBtn.style.borderRadius = '17px'
    surpriseBtn.style.cursor = 'pointer'