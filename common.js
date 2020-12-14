$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
    // $(".date-picker").datepick({
    //     multiSelect: 4, multiSeparator: '+', 
    // });
 
    $('.date-picker').datepick({ 
        multiSelect: 999, monthsToShow: 2, 
        showTrigger: '#calImg'
    });


    $('area').on('focus', function(e) {
      e.preventDefault();
      $('.selection p').html($(this).attr('class'));      
    });
  
    $(document).on('click', function(e) {
      e.preventDefault();
      if ( $(e.target).closest('area').length === 0 ) {
        $('.selection p').html('click a brick'); 
      }  
    });

    $("area").click(function(){
        $("#reservation-modal").fadeIn(500);
        var widp = $(this).data().val;
 
        $("#wi").val( widp );
        $("#dp").val( $(this).attr('title'));
    })

    $(".close-modal").click(function(){
        close_modal();
    })
    
    function close_modal(){
        $("#reservation-modal").fadeOut(300);
    }

});