

export function getEl(){
  var q ='.pter'
  var el=document.querySelector(q)
  return el
}
export function isImg(str){
  var re_img=/.(jpg|jpeg|png|gif|bmp|svg|webp|avif)/
  return re_img.test(str)
}


export function makehtml(d){
  const re=/!|！/
  const cls='pter-page'
  var ary = d.split(re)
  //console.log(ary)
  if(isImg(d)){
    var img = ary.at(0)
    var title = ary.at(1)
    var body = ary.at(2)
    return `
    <div class="${cls}">
     <div><h1>${title}</h1><p>${body}</p></div>
     <img src="${img}">
    </div>
    `
  }else{
    var img = ''
    var title = ary.at(0)
    var body = ary.at(1)
    return `
    <div class="${cls}">
     <div><h1>${title}</h1><p>${body}</p></div>
    </div>    
    `
  }
}

export var temp=`
  @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');

.pter,.pter *{
  box-sizing:border-box;  
}

.pter{
  font-family:"Zen Antique",serif;
  background:black;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
}
.pter .pter-page:first-of-type{
  margin-top:1rem;
}
.pter .pter-page{
  display:flex;
  flex-direction:row;
  align-items:center;
  color:white;
  width:calc(6vw * 15);
  height:calc(4vw * 15);  
  background:linear-gradient(135deg,#d81fd8,#9900ff);
  padding:2rem;
  margin-bottom:1rem;
}
.pter-page>div{
  padding-right:2rem;
}
.pter img{
  width:calc(50% - 2rem);
  height:100%;
  object-fit:cover;
}
.pter h1{
  font-size:calc( 0.8 * 9vw);
  font-weight:normal;
}
.pter p{
  font-size:calc( 0.4 * 9vw);
}
.pter h1,.pter p{
  display:inline;
  margin:0;
  padding:0;
  line-height:1.15;
  word-break:break-all;
  text-align:justify;
}
`

export function style(temp){
  const cls='pter-style'
  var el=document.createElement('style')
  el.className=cls
  el.innerHTML= temp;
  document.head.append(el);
}

function pter(d){
  style(d||temp);
  var re_split=/！！|!!/
  var el = getEl()
  if(!el) return console.log('not pter element need .pter')
  var data = el.innerHTML
  var html=data.split(re_split).map(d=>d.trim())
  .filter(d=>d) 
  .map(makehtml)
  .join('')
  //console.log(html)
  el.innerHTML = html;
  //console.log('pter success')
}
pter();
