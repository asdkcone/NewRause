$(".gnb li").mouseover(
    function(){
        $(".sub").stop().slideDown(200);
    }
);
$(".gnb li").mouseout(
    function(){
        $(".sub").stop().slideUp(200);
    }
);

$(".tab a").click(
    function(){
        $(".tab a").removeClass("current");
        $(".tab_content").removeClass("current");
        $(this).addClass("current");
        var tabTag = $(this).attr("data-tab");
        $("#"+tabTag).addClass("current");
    }
);

$(".open").click(
    function(){
        $("#popup").show();}
);
$(".close").click(
    function(){
        $("#popup").hide();}
);

$(".s_open").click(
    function(){
        $("#sangse").show();
    }
);
$(".s_close").click(
    function(){
        $("#sangse").hide();
        
    }
);

var sangse = document.querySelector("#sangse");
var left = document.querySelector(".left");
var right= document.querySelector(".right");
var s_img= document.querySelector("#sangse ul img");
var count=0;

sangse.addEventListener('click',imgChange);

function imgChange(e){

    count<4;
    switch(e.target){
        case right :
            console.log("right");

            switch(count){
                case 0 :
                    s_img.setAttribute("src","img/상세2.PNG");
                    count++;
                break;
                case 1 :
                    s_img.setAttribute("src","img/상세3.PNG");
                    count++;
                break;
                case 2 :
                    s_img.setAttribute("src","img/상세4.PNG");
                    count++;
                break;
            }

        break;

        case left :

            switch(count){
                case 3 :
                    s_img.setAttribute("src","img/상세3.PNG");
                    count--;
                break;
                case 2 :
                    s_img.setAttribute("src","img/상세2.PNG");
                    count--;
                break;
                case 1 :
                    s_img.setAttribute("src","img/상세1.PNG");
                    count--;
                break;
            }
        break;
    }
}
