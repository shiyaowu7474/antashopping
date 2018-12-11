/*头部手机商城*/ 
$(".mobile-btn-a").mousemove(function () {
    $(".mobile-shop").show();
})
$(".mobile-btn-a").mouseout(function () {
    $(".mobile-shop").hide();
})

/*所有商品下拉列表*/ 
$(".all-styles").mousemove(function () {
    $(".all-styles-tab").show();
})
$(".all-styles").mouseout(function () {
    $(".all-styles-tab").hide();
})

/*横向导航条 */
$(document).ready(function(){
    $(".item").mouseover(function () {
          
          var index = $(this).index();
          $(".item-box").eq(index-1)
                        .show()
                        .siblings();
      });
      $(".item").mouseout(function () {
          $(".item-box").hide();
         
      });
})

/*搜索热词*/
$(".nav-search-input").focus(function(){
    $(".suggestion").show();
})
$(".nav-search-input").blur(function(){
    $(".suggestion").hide();
})

