// function call(){
//     arrow=document.getElementById("arrow");
//     x=setInterval(function(){
//         arrow.style.backgroundColor="#327c95";
//         clearInterval(x);
//     },100);
//     arr
// }

//#327c95d3
//#273144

jlinks = document.getElementsByClassName("jlink");

function activate(x)
{
    if(x == 1){
        for(i=0;i<5;i++){
            jlinks[i].classList.remove("jlink-active");
        }
        jlinks[0].classList.add("jlink-active");
    }
    else{
        jlinks[x-1].classList.toggle("jlink-active");
        jlinks[0].classList.remove("jlink-active");
    }
}