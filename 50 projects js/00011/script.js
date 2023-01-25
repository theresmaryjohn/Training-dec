const insert = document.getElementById('insert')

window.addEventListener('keydown', (e)=>{
    console.log(e);
    //keyCode is a deprecated feature
    //for space key otherwise it will show blank in the event.key
    insert.innerHTML=`
    <div class="key">
    ${e.key === ' ' ? 'Space' : e.key}
    <small>event.key</small>
</div>
<div class="key">
    ${e.keyCode}
    <small>event.keyCode</small>
</div>
<div class="key">
    ${e.code}
    <small>event.code</small>
</div>
    `
})
//in this if we press any letter or number on the keyboard it displays all the properties of that key in the console
