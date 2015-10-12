var common = {
    init: function () {

    },
    getLanguage: function (id) {
        var value = id;
        if (typeof (language[id]) != "undefined") {
            value = language[id];
            return value;
        }
        return value;
    },
    goToByScroll: function (id) {
        $('html,body').animate({scrollTop: $("#" + id).offset().top - 200}, 'fast');
    },
    clickToLoadImage: function (el, urlImg) {
        $('#' + el).find('img:first').attr('src', urlImg).addClass('animation-img');
        setTimeout(function () {
            $('#' + el).find('img:first').removeClass('animation-img');
        }, 500)
        $('#' + el).find('img:last').attr('src', urlImg);
    },
    zoomImage: function (id, type) {
        /*Some type: zoom(), zoom(on:grab), zoom(on:click), zoom(on:toggle)*/
        $('#' + id).zoom({on: type});
    },
    tabBarMenu: function () {
        $(".product-detail-more .tab_content").hide();
        $(".product-detail-more .tab_content:first").show();
        $(".product-detail-more ul.tabs li").click(function () {
            $(".product-detail-more ul.tabs li").removeClass("active");
            $(this).addClass("active");
            $(".product-detail-more .tab_content").hide();
            var activeTab = $(this).attr("rel");
            $("#" + activeTab).fadeIn('slow');
        });
    }

};
