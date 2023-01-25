const sounds=['applause', 'boo', 'gasp', 'tada', 'victory', 
'wrong']
sounds.forEach(sound=>{
    const btn=document.createElement('button')
    console.log(btn);
    //<button class="btn">applause</button>,llly creates all buttons
    //method creates the HTML element specified by tagName,createElement(tagName)
    btn.classList.add('btn')//first phase on the creation phase it allocates value to undefined
    btn.innerText=sound//second phase on the execution phase it replaces the undefined value of each variable to each sound
    btn.addEventListener('click', ()=>{
        //to stop one sound while playing another
        stopSongs()
        document.getElementById(sound).play()
        //it plays the sound but if we click more than one sound the sounds overlap
    })
document.getElementById('buttons').
appendChild(btn)
//adds a node to the end of the list of children of a specified parent node.
})
function stopSongs(){
    sounds.forEach(sound=>{
        const song =document.getElementById(sound)
        song.pause()
        //here we pause one sound and reset to 0 each time another sound is played 
        song.currentTime=0;
    })
}