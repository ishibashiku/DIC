$(function(){
    // 一旦全てのddタグをhiddenにする
    $('#accordion dd').hide();
    // dtタグをクリックされた時のddタグの挙動
    $('#accordion dt').click(function(e){
        $(this).next('dd').slideToggle()
    });
});
