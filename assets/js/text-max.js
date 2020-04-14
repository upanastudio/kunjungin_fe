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
   	// $(".read-more").click(function(){
   // 	$(this).siblings(".more-text").contents().unwrap();
   // 	$(this).remove();
   // });
   // 
    var maxPanjang = 200;
   $(".text-artikel").each(function () {
      var myTxt = $(this).text();
      if ($.trim(myTxt).length > maxPanjang) {
         var newTxt = myTxt.substring(0, maxPanjang);
         var removedStr = myTxt.substring(maxPanjang, $.trim(myTxt).length);
         $(this).empty().html(newTxt);
         $(this).append(' <a href="destinasi_detail.html" class="read-more">Selengkapnya..</a>');

      }
   });
});