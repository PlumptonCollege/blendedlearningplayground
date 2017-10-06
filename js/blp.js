(function() {
  
$(document).ready(function(){
    $('.filters__filter').click(function() {
      filter = $(this);
      if( $(this).hasClass('is-active') ) return;
      parent = $(this).parent();
      previous = $(parent).find('.is-active');
      previous.removeClass('is-active');
      $(this).addClass('is-active');
      console.log(previous.data('filter'));
      $('#cards').removeClass( previous.data('filter') );
      $('#cards').addClass( $(this).data('filter') );
  });
});
  
  
})();
