var Circle = function(sel){
    var circles = document.querySelectorAll(sel);
    [].forEach.call(circles,function(el){
        var valEl = parseFloat(el.innerHTML);
        valEl = valEl*125/100;
        el.innerHTML = '<svg width="50" height="50"><circle transform="rotate(-90)" r="20" cx="-25" cy="25" /><circle transform="rotate(-90)" style="stroke-dasharray:'+valEl+'px 150px;" r="20" cx="-25" cy="25" /></svg>';

    });
};
Circle('.circle');

$('.header--menu-btn-block').click(function() {
  $(this).find('.header--menu-btn').toggleClass('active');
});
