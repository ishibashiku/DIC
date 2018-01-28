$(function(){
    $('.tab_contentbox').hide();
    $('.tab').click(function(e){
        $('.tab_contentbox').slideToggle();
    });
    $('.tab li').mouseover(function(){
        // すべてのタブからselectクラスを取り除く
        $('.tab li').removeClass('select');
        // クリックされたタブに対してselectクラスを付与する
        $(this).addClass('select');
        // すべてのタブコンテントにhideタグを設定する
        $('.tab_content li').addClass('hidden');
        // クリックされたタブに対してhideクラスを取り除く
        // クリックされたタブが何番目の要素かを取得する
        const index = $('.tab li').index($(this));
        // クリックしている要素のindexと対応するcontentのリストからhideクラスを取り除く
        $('.tab_content li').eq(index).removeClass('hidden');
    });
    $('.sidebar dd').hide();
    $('.sidebar dt').click(function(e){
        // 開閉パネルの処理
        $(this).next('dd').slideToggle();
    });
});
