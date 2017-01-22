var $grid = $('.grid').masonry({
    itemSelector: ".grid-item",
    columnWidth: '.grid-sizer',
    percentPosition: true
});

$grid.imagesLoaded().progress( function(){
    $grid.masonry('layout');
});

function rollInParent(elem){
    let elemHeight = $(elem).height();
    let parentHeight = $(elem).parent().height();
    let parentPos = $(elem).parent().position().top;
    $(window).on('scroll', ()=>{
    //console.log(elemHeight, parentHeight, $(elem).position().top, $(elem).parent().position().top);
        if( 
            ($(this).scrollTop() >= parentPos) &&
           ($(this).scrollTop() < ( parentPos + parentHeight - elemHeight)) 
        ){
            $(elem).css( { top:$(this).scrollTop()-parentPos});
        }
    })
}

$(function(){
    let $delivery = $('.delivery-img img');
    rollInParent($delivery[0]);

    
    $('.menu-bars').on('click', () => {
        $('.mobile').toggleClass('display-block').toggle();
    });
})