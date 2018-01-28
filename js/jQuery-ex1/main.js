$(function(){
    $('.tab li').click(function(){
        // すべてのタブからselectクラスを取り除く
        $('.tab li').removeClass('select');
        // クリックされたタブに対してselectクラスを付与する
        $(this).addClass('select');
        // すべてのタブにhideタグを設定する
        $('.content li').addClass('hide');
        // クリックされたタブに対してhideクラスを取り除く
        // クリックされたタブが何番目の要素かを取得する
        const index = $('.tab li').index($(this));
        // クリックしている要素のindexと対応するcontentのリストからhideクラスを取り除く
        $('.content li').eq(index).removeClass('hide');
    });
});
