$( document ).ready(function() {

    $(".filter_btn a").click(this, function(e){
            e.preventDefault();
            $('.filters').find(".filter__hidden").toggle(500);	
        })

        var men=true;
        var glschet =1;
        $("#sandwich").click(function()
        {
            if(men==false)
            {
                $(".sub__menu").slideUp();
                men=!men;
            }
            else
            {
                $(".sub__menu").slideDown();
                men=!men;
            }
        });
            $("#sandwich, .menu_item").click(function() {
             $("#sandwich").toggleClass("active");
        });
        $(".sub__menu ul li").click(this, function(){

                $(this).find("ul").toggle(500);	
        })
        $(".ortby button").on("click", function(){
            if(($(this).hasClass("nosort"))){
                $(".ortby button").removeClass("active back");
                $(this).addClass("active");
            }
            if(($(this).hasClass("active")) && (!($(this).hasClass("nosort")))){
                $(".nosort").removeClass("active");
                $(this).toggleClass("back");
            }else {
                $(".ortby button").removeClass("back");
                if(!($(this).hasClass("nosort"))){
                    $(".ortby button").removeClass("active");
                    $(this).toggleClass("active");
                }

            }
        })
    
        $(".toggle-made").on("click", function(){
            $(this).toggleClass("back");
            $("#toggle-made").toggle(function() {
               $(this).animate({}, 200);
               },
               function() {
               $(this).animate({}, 200);
            });

        });
        $(".cost_f-toggle").on("click", function(){
            $(this).toggleClass("back");
            $("#range").toggle(function() {
               $(this).animate({}, 300);
               },
               function() {
               $(this).animate({}, 300);
            });

        });
        $(".menu-cat-btn").on("click", function(){
            $(".oplet-navbar").toggle(function() {
               $(this).animate({}, 300);
               },
               function() {
               $(this).animate({}, 300);
            });
        });
        $(".btn-filter").on("click", function(){
            $(".filter").toggle(function() {
               $(this).animate({}, 300);
               },
               function() {
               $(this).animate({}, 300);
            });
        });
})
