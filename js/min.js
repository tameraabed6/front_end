
var menubut = document .getElementById("menubut");
    var siednav = document .getElementById("siednav");
    siednav.style.right="-250px";
    menubut.onclick=function(){
        if( siednav.style.right=="-250px"){
            siednav.style.right="0"
            
        }
        else
        {
            siednav.style.right="-250px"
        }

    }
