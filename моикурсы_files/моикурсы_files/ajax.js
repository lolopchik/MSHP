$(function(){
    var body = $("body");

    body.on('click','.ajax-documentation a:not(.ajax_btn)', function(e){
        var href = $(this).attr('href');
        href = href.replace(/.rst/, '');
        if (!href) return;
        if (href && href[0] == '#' || href.startsWith('http') || $(this).hasClass('external'))
            return;

        if (href.indexOf('static') >= 0)
            return false;

        var page = $(this).closest('.modal').find('.page-content:first');
        console.log(page.data('url') + ', ' + href);
        if (href && href[0] != '/') {
            var url = page.data('url');

            if (url.match("/$")!='/')
                url = url + '/';
            href = url + href;
        }
        page.data('url', href);
        if (href.search('#') >= 0) {
            body.one('replace', '.ajax-documentation', function() {
                $(this).scrollTo('#'+ href.split('#').slice(-1)[0]);
                $(document).off('focusin.modal');
            });
        }
        page.trigger('refresh-content');
        return false;
    });

    body.on('submit', '.ajax-documentation #rtd-search-form', function(e){
        console.log('search');
        var $this = $(this);
        var page = $this.closest('.modal').find('.page-content:first');
        var href = page.data('url');
        page.data('url', href);
        page.find('.refresh-btn:first').one('append_data', function(e, data){
            data['is_search'] = true;
            data['q'] = $this.find('input[name="q"]').val();
            data['check_keywords'] = $this.find('input[name="check_keywords"]').val();
            data['area'] = $this.find('input[name="area"]').val();
        });

        page.trigger('refresh-content');
        return false
    });


    // Sphinx theme nav state
    function ThemeNav () {

        var nav = {
            navBar: null,
            win: null,
            winScroll: false,
            winResize: false,
            linkScroll: false,
            winPosition: 0,
            winHeight: null,
            docHeight: null,
            isRunning: null
        };

        nav.enable = function () {
            var self = this;
                self.init($);

                self.reset();
                self.win.on('hashchange', self.reset);

                //// Set scroll monitor
                //self.win.on('scroll', function () {
                //    if (!self.linkScroll) {
                //        self.winScroll = true;
                //    }
                //});
                //setInterval(function () { if (self.winScroll) self.onScroll(); }, 25);
                //
                //// Set resize monitor
                //self.win.on('resize', function () {
                //    self.winResize = true;
                //});
                //setInterval(function () { if (self.winResize) self.onResize(); }, 25);
                //self.onResize();
        };

        nav.init = function ($) {
            var doc = $(document), self = this;

            this.navBar = $('div.wy-side-scroll:first');
            this.win = $(window);

            // Make tables responsive
            $("table.docutils:not(.field-list)")
                .wrap("<div class='wy-table-responsive'></div>");

            // Add expand links to all parents of nested ul
            $('.wy-menu-vertical ul').not('.simple').siblings('a').each(function () {
                var link = $(this);
                    expand = $('<span class="toctree-expand"></span>');
                expand.on('click', function (ev) {
                    self.toggleCurrent(link);
                    ev.stopPropagation();
                    return false;
                });
                link.prepend(expand);
            });
        };

        nav.reset = function () {
            // Get anchor from URL and open up nested nav
            var anchor = encodeURI(window.location.hash);
            if (anchor) {
                try {
                    var link = $('.wy-menu-vertical')
                        .find('[href="' + anchor + '"]');
                    $('.wy-menu-vertical li.toctree-l1 li.current')
                        .removeClass('current');
                    link.closest('li.toctree-l2').addClass('current');
                    link.closest('li.toctree-l3').addClass('current');
                    link.closest('li.toctree-l4').addClass('current');
                }
                catch (err) {
                    console.log("Error expanding nav for anchor", err);
                }
            }
        };

        nav.onScroll = function () {
            this.winScroll = false;
            var newWinPosition = this.win.scrollTop(),
                winBottom = newWinPosition + this.winHeight,
                navPosition = this.navBar.scrollTop(),
                newNavPosition = navPosition + (newWinPosition - this.winPosition);
            if (newWinPosition < 0 || winBottom > this.docHeight) {
                return;
            }
            this.navBar.scrollTop(newNavPosition);
            this.winPosition = newWinPosition;
        };

        nav.onResize = function () {
            this.winResize = false;
            this.winHeight = this.win.height();
            this.docHeight = $(document).height();
        };

        nav.hashChange = function () {
            this.linkScroll = true;
            this.win.one('hashchange', function () {
                this.linkScroll = false;
            });
        };

        nav.toggleCurrent = function (elem) {
            var parent_li = elem.closest('li');
            parent_li.siblings('li.current').removeClass('current');
            parent_li.siblings().find('li.current').removeClass('current');
            parent_li.find('> ul li.current').removeClass('current');
            parent_li.toggleClass('current');
        };

        return nav;
    }

    function enable_nav (e) {
        if ($(e).find('.wy-menu-vertical').length)
            ThemeNav().enable($)
    }

    $.fn.register_preparer(enable_nav, true);

});
