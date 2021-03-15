$(function() {
    //변수지정
    let $menu = $('top_menu ul li');
    let $contents = $('contents > section');
//contents 확인
    console.log($contents);

    $menu.click(function(event){
        event.preventDefault();
        let idx = $(this).index();
        console.log(idx);
    })
}