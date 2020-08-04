// 侧边导航目录
jQuery(function($) {
    $(document).ready(function() {
      var contentButton = [];
      var contentTop = [];
      var content = [];
      var lastScrollTop = 0;
      var scrollDir = '';
      var itemClass = '';
      var itemHover = '';
      var menuSize = null;
      var stickyHeight = 0;
      var stickyMarginB = 0;
      var currentMarginT = 0;
      var topMargin = 0;
      var vartop = 0;
      $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
          scrollDir = 'down';
        } else {
          scrollDir = 'up';
        }
        lastScrollTop = st;
      });
      $.fn.stickUp = function(options) {
        $(this).addClass('stuckMenu');
        var objn = 0;
        if (options != null) {
          for (var o in options.parts) {
            if (options.parts.hasOwnProperty(o)) {
              content[objn] = options.parts[objn];
              objn++;
            }
          }
          if (objn == 0) {
            console.log('error:needs arguments');
          }
          itemClass = options.itemClass;
          itemHover = options.itemHover;
          if (options.topMargin != null) {
            if (options.topMargin == 'auto') {
              topMargin = parseInt($('.stuckMenu').css('margin-top')) + 70;
            } else {
              if (isNaN(options.topMargin) && options.topMargin.search("px") > 0) {
                topMargin = parseInt(options.topMargin.replace("px", ""));
              } else if (!isNaN(parseInt(options.topMargin))) {
                topMargin = parseInt(options.topMargin);
              } else {
                console.log("incorrect argument, ignored.");
                topMargin = 0;
              }
            }
          } else {
            topMargin = 0;
          }
          menuSize = $('.' + itemClass).size();
        }
        stickyHeight = parseInt($(this).height());
        stickyMarginB = parseInt($(this).css('margin-bottom'));
        currentMarginT = parseInt($(this).next().closest('div').css('margin-top'));
        vartop = parseInt($(this).offset().top);
      };
      $(document).on('scroll', function() {
        varscroll = parseInt($(document).scrollTop());
        if (menuSize != null) {
          for (var i = 0; i < menuSize; i++) {
            contentTop[i] = $('#' + content[i] + '').offset().top;
  
            function bottomView(i) {
              contentView = $('#' + content[i] + '').height() * .4;
              testView = contentTop[i] - contentView;
              if (varscroll > testView) {
                $('.' + itemClass).removeClass(itemHover);
                $('.' + itemClass + ':eq(' + i + ')').addClass(itemHover);
              } else if (varscroll < 50) {
                $('.' + itemClass).removeClass(itemHover);
                $('.' + itemClass + ':eq(0)').addClass(itemHover);
              }
            }
            if (scrollDir == 'down' && varscroll > contentTop[i] - 50 && varscroll < contentTop[i] + 50) {
              $('.' + itemClass).removeClass(itemHover);
              $('.' + itemClass + ':eq(' + i + ')').addClass(itemHover);
            }
            if (scrollDir == 'up') {
              bottomView(i);
            }
          }
        }
        if (vartop < varscroll + topMargin) {
          $('.stuckMenu').addClass('isStuck');
          $('.stuckMenu').next().closest('div').css({
            'margin-top': stickyHeight + stickyMarginB + currentMarginT + 'px'
          }, 10);
          $('.stuckMenu').css("position", "fixed");
          $('.isStuck').css({
            top: '0px'
          }, 10, function() {});
        } else {
          $('.stuckMenu').removeClass('isStuck');
          $('.stuckMenu').next().closest('div').css({
            'margin-top': currentMarginT + 'px'
          }, 10);
          $('.stuckMenu').css("position", "relative");
        };
      });
    });
  });
  
  /* ========================================================================
   * Bootstrap: scrollspy.js v3.3.5
   * http://getbootstrap.com/javascript/#scrollspy
   * ========================================================================
   * Copyright 2011-2015 Twitter, Inc.
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * ======================================================================== */
  
  
  +
  function($) {
    'use strict';
  
    // SCROLLSPY CLASS DEFINITION
    // ==========================
  
    function ScrollSpy(element, options) {
      this.$body = $(document.body)
      this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
      this.options = $.extend({}, ScrollSpy.DEFAULTS, options)
      this.selector = (this.options.target || '') + ' .nav li > a'
      this.offsets = []
      this.targets = []
      this.activeTarget = null
      this.scrollHeight = 0
  
      this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
      this.refresh()
      this.process()
    }
  
    ScrollSpy.VERSION = '3.3.5'
  
    ScrollSpy.DEFAULTS = {
      offset: 10
    }
  
    ScrollSpy.prototype.getScrollHeight = function() {
      return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
  
    ScrollSpy.prototype.refresh = function() {
      var that = this
      var offsetMethod = 'offset'
      var offsetBase = 0
  
      this.offsets = []
      this.targets = []
      this.scrollHeight = this.getScrollHeight()
  
      if (!$.isWindow(this.$scrollElement[0])) {
        offsetMethod = 'position'
        offsetBase = this.$scrollElement.scrollTop()
      }
  
      this.$body
      .find(this.selector)
      .map(function() {
        var $el = $(this)
        var href = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)
  
        return ($href &&
        $href.length &&
        $href.is(':visible') && [
        [$href[offsetMethod]().top + offsetBase, href]
        ]) || null
      })
      .sort(function(a, b) {
        return a[0] - b[0]
      })
      .each(function() {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
    }
  
    ScrollSpy.prototype.process = function() {
      var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
      var scrollHeight = this.getScrollHeight()
      var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height()
      var offsets = this.offsets
      var targets = this.targets
      var activeTarget = this.activeTarget
      var i
  
      if (this.scrollHeight != scrollHeight) {
        this.refresh()
      }
  
      if (scrollTop >= maxScroll) {
        return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
      }
  
      if (activeTarget && scrollTop < offsets[0]) {
        this.activeTarget = null
        return this.clear()
      }
  
      for (i = offsets.length; i--;) {
        activeTarget != targets[i] &&
        scrollTop >= offsets[i] &&
        (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]) &&
        this.activate(targets[i])
      }
    }
  
    ScrollSpy.prototype.activate = function(target) {
      this.activeTarget = target
  
      this.clear()
  
      var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'
  
      var active = $(selector)
      .parents('li')
      .addClass('active')
  
      if (active.parent('.dropdown-menu').length) {
        active = active
        .closest('li.dropdown')
        .addClass('active')
      }
  
      active.trigger('activate.bs.scrollspy')
    }
  
    ScrollSpy.prototype.clear = function() {
      $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
    }
  
  
    // SCROLLSPY PLUGIN DEFINITION
    // ===========================
  
    function Plugin(option) {
      return this.each(function() {
        var $this = $(this)
        var data = $this.data('bs.scrollspy')
        var options = typeof option == 'object' && option
  
        if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
        if (typeof option == 'string') data[option]()
      })
    }
  
    var old = $.fn.scrollspy
  
    $.fn.scrollspy = Plugin
    $.fn.scrollspy.Constructor = ScrollSpy
  
  
    // SCROLLSPY NO CONFLICT
    // =====================
  
    $.fn.scrollspy.noConflict = function() {
      $.fn.scrollspy = old
      return this
    }
  
  
    // SCROLLSPY DATA-API
    // ==================
  
    $(window).on('load.bs.scrollspy.data-api', function() {
      $('[data-spy="scroll"]').each(function() {
        var $spy = $(this)
        Plugin.call($spy, $spy.data())
      })
    })
  
  }(jQuery);