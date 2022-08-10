/**Menue variables */
let aboutM = document.getElementById("about-menu");
let skillsM = document.getElementById("skills-menu");

/**Paragraphs */
let about = document.getElementById("about-para");
about.innerHTML = "Lorem Ipsum";
for(let i=0; i<75;i++){
    about.innerHTML += " Lorem Ipsum.";
};


//***********************************************************************************************************************

document.addEventListener('DOMContentLoaded', function() {
    logoSwap();
    doubleElement();
}, false);
logoSwap(); /**element size changes based off screen size and the DOM loads slow, thus the second call.*/

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
function PxToVh(px){
    return (px/(VhToPx(510)/100)); 
}        //site is 510 vh long and 100vw wide
function PxToVw(px){
    return (px/(VwToPx(100)/100));
}
    /**Iteratives*/
/**Streamlines logo when screen is too thin */
function logoSwap(){
    if( 60 > window.innerWidth/(window.screen.availWidth/100) ){
        document.getElementById("firstN").innerHTML= "";
        document.getElementById("lastN").innerHTML= "";
    }else{
        document.getElementById("firstN").innerHTML= "alik&nbspD.&nbsp";
        document.getElementById("lastN").innerHTML= "icci";
        //popup
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
//doubles the elements when windows.innerWidth is greater than windows.innerHeight
function doubleElement(){
    elements = ["program", "about-para"];
    for(let i=0;i<elements.length;i++){
        if(60 > window.innerWidth/(window.screen.availWidth/100)){
            document.getElementById(elements[i]).style.transform = "scale(1)";
            document.getElementById(elements[i]).style.fontsize.transform = "scale(1)";
        }else{
            document.getElementById(elements[i]).style.transform = "scale(3)";
            document.getElementById(elements[i]).style.fontsize.transform = "scale(3)";
        };
    };

};








/**Events */
document.getElementById("floatingMenu").addEventListener("click",function(){
    changeYPosition(0);
});
window.addEventListener("resize", function(){
    logoSwap();
    doubleElement();
});
window.addEventListener("scroll",function(){
    floatingMenuTogle();
});

    /**Menue transitions */
aboutM.addEventListener("click", function(){
   /**  window.scrollBy(0, window.innerHeight); */
    changeYPosition(VhToPx(100));
});
skillsM.addEventListener("click", function(){
    changeYPosition(VhToPx(200));
 });    