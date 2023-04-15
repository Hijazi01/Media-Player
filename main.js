var shufflebtn=document.querySelector("#shufflebtn"),
    repeatbtn=document.querySelector('#repeatbtn'), 
    playbtn=document.querySelector("#playbtn");
var Array_list=["./list/1.mp3","./list/2.mp3" ,"./list/3.mp3","./list/4.mp3"]  
var Audio_src = document.querySelector("#srcaudio")
var Audio = document.querySelector("#sound")
var Array_shuffle = [];
var x,
   btnAdd=document.querySelector("#add"),
   btndelete=document.getElementsByClassName("delete"),
   listview=document.getElementsByClassName("list"),
   range=document.querySelector("#range"),
   hart=document.querySelector("#out");

   var repeat=false;

   repeatbtn.addEventListener("click",()=>{
    if (repeat==false) {
      repeatbtn.classList.toggle("active");
      repeat=true;

    } else {
      repeatbtn.classList.toggle("active");
      repeat=false;
      } 
      console.log(repeat);
      return repeat;
    }) 
    
    
  




// ----------------------------------------------------------------------
display(Array_list,"normal_arry");
Audio_src.src=Array_list[0];
Audio.load();
// -------------------------------------------------------------------------
function display(arry,x1){
      x=x1 
     ListPerant.innerHTML = '';
for (let i = 0; i < arry.length; i++) {
  ListPerant.innerHTML +=`<div class="list ${arry[i]}" ID="${i}"> sound ${arry[i]} <img src="./delete.png" class="delete"  id="d${i}"  onclick="document.getElementById('${i}').classList.toggle("none");}"></div>`;
}
return x;
}
// ------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
console.log(btndelete);
console.log(listview);



listview[0].addEventListener("click",()=>{
  Audio_src.src=Array_list[0];
        Audio.load();
      range.mix=Math.round(Audio.duration);
        listview[0].classList.toggle("active");
        Audio.play() ;
  })
  listview[1].addEventListener("click",()=>{
    Audio_src.src=Array_list[1];
          Audio.load();
        range.mix=Math.round(Audio.duration);
        // listview.classList.remove("active");
          listview[1].classList.toggle("active");
          Audio.play() ;
    })
    listview[2].addEventListener("click",()=>{
      Audio_src.src=Array_list[2];
            Audio.load();
          range.mix=Math.round(Audio.duration);

          // listview.classList.remove("active");
            listview[2].classList.toggle("active");
            Audio.play() ;
      })


      listview[3].addEventListener("click",()=>{
        
        Audio_src.src=Array_list[3];
              Audio.load();
            range.mix=Math.round(Audio.duration);
              // listview.classList.remove("active");
              listview[3].classList.toggle("active");
              Audio.play() ;
        })




// -------------------------------------------------------------------------------------------
  function get1(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num) ;
  }
  // ----------------------------------------------------------------------------
shufflebtn.onclick=function(){
  get1(Array_list, 4);
 Array_shuffle = get1(Array_list, 4); 
   display(Array_shuffle ,"shffle");
   for (let i = 0; i <= Array_list.length; i++) {
    console.log(i);
   if (Audio_src.src.substr(Audio_src.src.length -10) ===Array_shuffle[i].substr(Array_shuffle[i].length -10)) {
    listview[i].classList.toggle("active");
   } }
   return Array_shuffle;

}
// --------------------------------------------------------------------------
imgplay.onclick=function () {
    imgplay.style.display = "none";
    imgpause.style.display = "inline-block";
    Audio.play() ;
    listview[0].classList.toggle("active");
    hart.classList.toggle("fa-beat");
}
// --------------------------------------------------------------------------------
imgpause.onclick=function () {
    Audio.pause() 
    imgpause.style.display ="none";  
    imgplay.style.display = "inline-block";
    hart.classList.toggle("fa-beat");}
// --------------------------------------------------------------------------
playbtn.onclick=function(){
  listview[0].classList.toggle("active");
  hart.classList.toggle("fa-beat");
    Audio.play() 
    imgplay.style.display ="none"; 
    imgpause.style.display = "inline-block";}
// --------------------------------------------------------------

Audio.onended=function(){
// if(Audio.ended){  
  console.log("ended");
  if (x=="normal_arry") {
     for (let i = 0; i <= Array_list.length; i++) {
       console.log(i);
      if (Audio_src.src.substr(Audio_src.src.length -10) == Array_list[i].substring(Array_list[i].length -10))
       {
        
        if( i == Array_list.length){
          if (repeat==true) {
          Audio_src.src=Array_list[0];
          Audio.load();
          range.mix=Math.round(Audio.duration);
          listview[i].classList.toggle("active");
          listview[0].classList.toggle("active");
           Audio.play()
           console.log("normal repeat ");}
          }else{ 
            listview[i].classList.toggle("active");
            i= i+1
            Audio_src.src = Array_list[i];
            Audio.load();
            range.mix= Math.round(Audio.duration);
            listview[i].classList.toggle("active");
            Audio.play();
            console.log("shffle arry else");
      }}
           console.log("end normal arry");     
    }
    }else if(x=="shffle") {
      for (let i = 0; i <= Array_shuffle.length; i++) {
        if (Audio_src.src.substr(Audio_src.src.length -10) ===Array_shuffle[i].substr(Array_shuffle[i].length -10)) {
          if( i ==Array_list.length){
            if (repeat==true) {
            Audio_src.src=Array_list[0];
            Audio.load();
            range.mix=Math.round(Audio.duration);
            listview[0].classList.toggle("active");
           Audio.play()
            console.log("shffle repeat");
            }
          }else{
            i=+1
            Audio_src.src= Array_shuffle[i];
            Audio.load();
            range.mix= Math.round(Audio.duration);
            listview[i].classList.toggle("active");
            Audio.play();
            console.log("shffle arry else");
          }}} 
    console.log("end shffle");
  }}


setInterval(() => {
  range.value = Audio.currentTime;
}, 1000);