
document.addEventListener('DOMContentLoaded', function() {
    logoSwap();
}, false);
logoSwap(); /**Logo changes based off screen size and the DOM loads slow, thus the second call.*/
/** HELPER FUNCTIONS */
/**Returns the amount of pxls from the top of view*/
function getYPosition(){
    var top  = window.pageYOffset || document.documentElement.scrollTop
    return top;
  };
/**Changes page view to the position in Px */
function changeYPosition(px){
    var top = document.documentElement.scrollTop = document.body.scrollTop = px;
};
/** |1vh = 1/100 viewport height.| 
 * vh = window.innerWidth/(MaxWidth/100)
*/
function VhToPx(vh){
    return (vh * window.innerHeight/100);
};
function VwToPx(vw){
    return (vw * window.innerWidth/100);
};
/**Streamlines logo when screen is too thin */
function logoSwap(){
    if( 40 > window.innerWidth/(window.screen.availWidth/100) ){
        document.getElementById("firstN").innerHTML= "";
        document.getElementById("lastN").innerHTML= "";
    }else{
        document.getElementById("firstN").innerHTML= "alik&nbspD.&nbsp";
        document.getElementById("lastN").innerHTML= "icci";
    };
};
/**Turns on and off the floating menu based off scroll distance */
function floatingMenuTogle(){
   if(getYPosition()>VhToPx(43)){
        document.getElementById("floatingMenu").style.visibility = "visible";
   }else{
    document.getElementById("floatingMenu").style.visibility = "hidden";  
   };
};

document.getElementById("floatingMenu").addEventListener("click",function(){
    changeYPosition(0);
});
window.addEventListener("resize", function(){
    logoSwap();
});
window.addEventListener("scroll",function(){
    floatingMenuTogle();
});

/**Menue variables */
let aboutM = document.getElementById("about-menu");
let skillsM = document.getElementById("skills-menu");

/**Paragraphs */
let about = document.getElementById("about-para");

about.innerHTML = "Lorem Ipsum";
for(let i=0; i<75;i++){
    about.innerHTML += " Lorem Ipsum.";
};



/**Menue transition */
aboutM.addEventListener("click", function(){
   /**  window.scrollBy(0, window.innerHeight); */
    changeYPosition(VhToPx(100));
});

skillsM.addEventListener("click", function(){
    changeYPosition(VhToPx(200));
 });    