/**Menue variables */
let aboutM = document.getElementById("about-menu");
let skillsM = document.getElementById("skills-menu");

/**Paragraphs */
let about = document.getElementById("about-para");
about.innerHTML = "<t/>Welcome to my website! I'm a hardworking software developer and a lifelong thinker who values detail. My favourite pastime is learning about economics, philosophy, business, science, technology, engineering, art, and math problems to fuel new ideas on how I can elegantly develop unique and helpful software solutions."+
"<br/><br/>By the time I reached eleven years old, even after about six years of practice, I was struggling with math just like any regular child. Yet, using no genius at all, only a couple of hours of learning how to code in LUA allowed my friend and I to write a fully functional calculator! Ever since that day, I determined that programming was nothing less than magic!\n"+
"<br/>And so I learned at a young age that problems I couldn't even hope to understand are actually solvable thanks to computer sciences, and I've been trying to learn new spells ever since!\n"+
"<br/><br/>By the way, yes, I do also like having fun! When I'm not coding, I like going on drives to new places, I like the gym, and I LOVE eating new food!";



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