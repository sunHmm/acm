$(function () {
  // 评价
  $('.study-intro span').click(function () {
    $(this).addClass('choose-type').siblings().removeClass('choose-type')
    $('.study-intro').nextAll().hide().eq($(this).index()).show()
    //评价页的特殊高度
    if ($(this).text() === '评价') {
      $('.study-left').css({
        'height': '100%'
      });
    };
  });
  //表格剩余字数
  $('.textInput').on('input propertychange', function () {
    if (this.value.length <= 500) {
      $('#numbers').text(500 - this.value.length)
    };;
  });
  //五角星评价
  $('.starNumber>i').click(function () {
    $('.starNumber>i>img').attr('src', "../../content/img/blackstar.png", )
    $(this).children('img').attr('src', "../../content/img/yellowstar.png", )
    $(this).children('img').parent().prevAll().children('img').each(function (i, v) {
    $(v).attr('src', "../../content/img/yellowstar.png", )
    });
    });
    $('.banner-soclltext li a').mouseenter(function () {
      $(this).addClass('bnner-color').parent().siblings().children().removeClass('bnner-color')
    });
});

