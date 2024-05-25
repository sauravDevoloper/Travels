let a = document.getElementById('btn');
a.addEventListener('click',function(){
    document.getElementById('banner').style.backgroundImage = 'url(./images/banner2.jpg)'
})
let b = document.getElementById('btn');
b.addEventListener('dblclick',function(){
    document.getElementById('banner').style.backgroundImage = 'url(./images/banner.jpg)'
})

let c = document.getElementById('login');
c.addEventListener('click',function(){
    document.getElementById('overLAY').style.display = 'flex'
})


let d = document.getElementById('bgm');
d.addEventListener('click',()=>{
    document.getElementById('overLAY').style.display = 'none'
})

document.getElementById('nav-link2').addEventListener('click', function(){
    document.getElementById('Rooms').scrollIntoView({behavior:'smooth'})
})
document.getElementById('nav-link3').addEventListener('click', function(){
    document.getElementById('premium').scrollIntoView({behavior:'smooth'})
})
document.getElementById('nav-link4').addEventListener('click', function(){
    document.getElementById('gallery').scrollIntoView({behavior:'smooth'})
})