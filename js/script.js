$(function() {

    $(".price-card-button").on({
        'mouseenter': function() {
            $(this)
                //.parent()
                //.parent()
                //.css( "box-shadow", "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)" );
                .animate({boxShadow: '0 0 30px #44f'});
                // .animate({ 
                //     boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
                // }, 1000); 
        },
        'mouseleave': function() {
            $(this)
                .parent()
                .parent()
                .animate({
                    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
                });
            
        }
    });
    //alert("a");
});