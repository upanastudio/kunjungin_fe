$(document).ready(function () {
   var maxLength = 175;
   $(".card-text").each(function () {
      var myStr = $(this).text();
      if ($.trim(myStr).length > maxLength) {
         var newStr = myStr.substring(0, maxLength);
         var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
         $(this).empty().html(newStr);
         $(this).append(' <a href="destinasi_detail.html" class="read-more">Selengkapnya..</a>');

      }
   });
   ''	// $(".read-more").click(function(){
   // 	$(this).siblings(".more-text").contents().unwrap();
   // 	$(this).remove();
   // });
});