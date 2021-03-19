$(function () {
  let $SeeIt = $ (`#seeit`);
  let $menu = $(`#top_menu ul li`);
  let $contents = $(`#contents > section`);
  console.log($contents);
  
  
  
  /*몇번쨰 이동햇는지 변수  */
  $menu.click(function (event) {
    event.preventDefault();
    let idx = $(this).index();
    let tt = $contents.eq(idx).offset().top;
    console.log(tt);

    $(`html, body`).animate({ scrollTop: tt });
    
  // $SeeIt.click(function (event) {
  //   event.preventDefault();
  //   let idx = $(1).index();
  //   let tt = $contents.eq(1).offset().top;
  //   console.log(tt);
  //   $("html, body").animate({ scrollTop: tt });
  // });

    /*클릭한 부분만 색변환*/
   
   $(this).addClass().siblings(`.active`).removeClass(`active`);
  });

  /* 스크롤 이동시 반영될 부분 */
  $(window).scroll(function () {
    let $sct = $(this).scrollTop();
    $contents.each(function (i) {
      let taget = $(this);
      if (taget.offset().top < $sct) {
        $menu.removeClass("active");
        $menu.eq(i).addClass("active");
      }
    });
  });
});
