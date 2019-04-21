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

})
