jQuery(document).ready(function($){

    var n = "nav ul", no = "mostra";

    $('.nav-menu').on( "click tab", function(e){
        if ( $(n).hasClass(no) ) {
            $(n).animate({ height: 0 }, 270);

            setTimeout( function(){
                $(n).removeClass(no).removeAttr("style");
            }, 300);
        } else {
            var nAltezza = $(n).css( 'height', 'auto' ).height();
            $(n).height(0).animate({ height: nAltezza }, 270);

            setTimeout( function(){
                $(n).addClass(no).removeAttr("style");
            }, 300);
        }
    });
});
