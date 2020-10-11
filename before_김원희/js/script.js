$(".gnb li").mouseover(
    function(){
        $(".sub").stop().slideDown(300);
    }
);
$(".gnb li").mouseout(
    function(){
        $(".sub").stop().slideUp(300);
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
