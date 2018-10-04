(function (){

  $(document).ready(initialize);

  function initialize(){ $(".dropdown-trigger").dropdown(); }

  $('#navigation a, #fixedbar a').on('click', function(e) { e.preventDefault();
  });

  $(window).on('load',function() { var scrolltop = $(this).scrollTop();

     if(scrolltop >= 0) { $('#fixedbar').fadeIn(250); }

    // else if(scrolltop <= 210) { $('#fixedbar').fadeOut(250); }
   }); })();
