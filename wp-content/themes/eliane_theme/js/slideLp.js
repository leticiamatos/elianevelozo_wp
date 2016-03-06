(function($){
$.fn.slideLp = function(options){
  //var selector
  var $this = $(this);

  $this.each(function(){
    $this = $(this).find(".wrapHighlight");
  });
/*=====================================================
  options
======================================================*/
  var defaults = {
    effects: "slide", //"pageHoriz", "slide", "fade", "pageVert", "concertina", "glass"
    auto: true,
    timeBanner: 5000,
    timeDelay: 500,
    timeSlide: 800,
    timeDelayIn: 500,
    timeDelayOut: 700,
    barCounter: false,
    timerClock: true,
    timerClockSize: 40,
    pagination: true,
    paginationThumb: false,
    thumbSizeWidth: 150,
    thumbSizeHeight: 150,
    paginationHover: true,
    paginationCounter: true,
    paginationCounterTab: "/",
    navButtons: true,
    prevName: "<",
    nextName: ">",
    keyboard: true,
    touch: false,
    thresholdX: 100,
    thresholdY: 100,
    touchName: "",
    fullScreen: false,
    adjustmentSize: 0,
    responsive: true,
    adjustmentResponsiveHeight: 1,
    concertinaMaxWidth: 64,
    concertinaAdjustmentFloat: "-0.5",
    glassPositionStart: 1,
    glassVisible: false,
    heigthAuto: true,
    heigthAutoSpeed: 300
  }
  options = $.extend(defaults, options);
/*=====================================================
  Geral
======================================================*/
  function widthPage(){
    $heightThis = $this.outerHeight();
    $widthThis = $this.outerWidth();
  }
   widthPage();

  $(window).bind({
    load: function() {
      widthPage();
    },
    resize: function() {
      widthPage();
    }
  });

  // $(".wrapHighlight").css({
  //  width: ""+ $widthThis +"px",
  //  height: ""+ $heightThis +"px"
  // });

  //ie
  if (document.all && (!document.documentMode || (document.documentMode && document.documentMode == 8))) {
    options.touch = false;
    //alert(options.touch)
  }else if(document.all && (!document.documentMode || (document.documentMode && document.documentMode == 7))){
    options.touch = false;
    //alert(options.touch)
  }else if(document.all && (!document.documentMode || (document.documentMode && document.documentMode == 6))){
    options.touch = false;
    //alert(options.touch)
  }

  // call all functions back
  function callBacks(){
    if(options.paginationCounter){
      counter();
    }
    if(options.timerClock){
      startClock();
    }
  }

  //listCont data-positionlp
  var $contDataPosition = -1;
  $this.find(".listCont li").each(function(){
    var $self = $(this);

    $contDataPosition += 1;

    $self.attr("data-positionlp",$contDataPosition);
  });

  //$this styles
  $this.parent().css({
    position: "relative"
  });
/*=====================================================
  pagination
======================================================*/
if(options.pagination){
  var $pages = '<nav class="pagHighlight">';
  var $contBanner = $this.find(".listCont li .cont").html();

  /*=====================================================
  paginationHover
  ======================================================*/
  if(options.paginationHover){
      if(options.paginationThumb){
        paginationHover = false;
      }else{

      $.each($this.find(".listCont li"),function(index){
        var $selfImgSrc = $(this).find(".cont img").attr("src");

        $pages += '<a href="javascript:void(0)" data-positionlp='+ index +' data-urlImg='+$selfImgSrc+'></a>\n';
        });
      // '+ $(this).find(".cont").html() +'
      $pages += "</nav>";

      }

      var thumbHoverCont = "<div class='thumbHoverCont'><img src='' /></div>";

      $(this).prepend(thumbHoverCont);
  }

  /*=====================================================
  paginationThumb
  ======================================================*/
  if(options.paginationThumb){

    $.each($this.find(".listCont li"),function(index){
    $pages += '<a href="javascript:void(0)" data-positionlp='+ index +'><img src='+$(this).find(".cont img").attr("src")+' /></a>\n';
    });
    $pages += "</nav>";
    //add before section wrapHighlight
    $this.parent().append($pages);
    $this.parent().find(".pagHighlight a:first").addClass("active");

    $this.parent().find(".pagHighlight").css({
      height: options.thumbSizeHeight
    });

    $this.parent().find(".pagHighlight a").css({
      textIndent: "0",
      textAlign: "center",
      width: options.thumbSizeWidth+"px",
      height: options.thumbSizeHeight+"px",
      "border-radius": "0",
      "-moz-border-radius": "0",
      "-webkit-border-radius": "0",
      "-o-border-radius": "0",
      "-ms-border-radius": "0"
    });
    $this.parent().find(".pagHighlight a *").css({
      textIndent: "0",
      textAlign: "center",
      width: "100%",
      height: "100%"
    });
    $this.parent().find(".pagHighlight .title_lp").css({
      display: "none"
    });
  }
  else{
    if(options.paginationHover){
      $.each($this.find(".listCont li"),function(index){
        //$pages += '<a href="javascript:void(0)" data-positionlp='+ index +'>'+ ++index +'</a>\n';
      });
    }else{
      $.each($this.find(".listCont li"),function(index){
        $pages += '<a href="javascript:void(0)" data-positionlp='+ index +'>'+ ++index +'</a>\n';
      });
    }
    $pages += "</nav>";
    //add before section wrapHighlight
    $this.parent().append($pages);
    $this.parent().find(".pagHighlight a:first").addClass("active");
  }
}else{
  var $pages = '<nav class="pagHighlight">';
  var $contBanner = $this.find(".listCont li .cont").html();

  $.each($this.find(".listCont li"),function(index){
    $pages += '<a href="javascript:void(0)" data-positionlp='+ index +'>'+ ++index +'</a>\n';
  });
  $pages += "</nav>";
  //add before section wrapHighlight
  $this.parent().append($pages);
  $this.parent().find(".pagHighlight a:first").addClass("active");

  $this.parent().find(".pagHighlight").css({
    display: "none"
  });
}
//pagination
if(!options.pagination){
  $this.parent().find(".pagHighlight").css("display","none");
}

/*=====================================================
  barCounter
======================================================*/
if(options.barCounter && options.auto){
  var $wrapCounter = "<div id='wrapCounter'><div class='counterLine'></div></div>";

  $this.parent().append($wrapCounter);

  function animaCounter(){
    $this.parent().find("#wrapCounter .counterLine").css({
      width: "0%"
    });

    $this.parent().find("#wrapCounter .counterLine").stop(true,true).animate({
      width: "100%"
    },options.timeBanner,function(){
      animaCounter();
    });
  }
  animaCounter();

  $this.parent().find(".pagHighlight a").bind({
    click: function(){
      animaCounter();
    }
  });



}else{
  var $wrapCounter = "<div id='wrapCounter'><div class='counterLine'>1</div></div>";

  $this.parent().append($wrapCounter);
  $this.parent().find("#wrapCounter").css({
    display: "none"
  });
}

/*=====================================================
  timerClock
======================================================*/
if(options.timerClock){
  if(options.auto){
    var $pieClock = "<div class='pieLp'><div class=timer fill'></div></div>";

      $this.parent().append($pieClock);

        $this.parent().find('.pieLp').css({
          width: options.timerClockSize+"px",
          height: options.timerClockSize+"px"
        });
        $this.parent().find('.timer').css({
          "font-size": options.timerClockSize+"px"
        });

        $this.parent().find('.timer #slice .pie').css({
          "border-color": options.timerClockColorBorder
        });

        var timer;
        var timerCurrent;
        var timerFinish;
        var timerSeconds;
        function drawTimer(percent){
          $this.parent().find('.timer').html('<div class="percent"></div><div id="slice"'+(percent > 50?' class="gt50"':'')+'><div class="pie"></div>'+(percent > 50?'<div class="pie fill"></div>':'')+'</div>');
          var deg = 360/100*percent;
          $this.parent().find('#slice .pie').css({
            '-moz-transform':'rotate('+deg+'deg)',
            '-webkit-transform':'rotate('+deg+'deg)',
            '-o-transform':'rotate('+deg+'deg)',
            'transform':'rotate('+deg+'deg)'
          });
          $this.parent().find('.percent').html(Math.round(percent)+'%');
        }
        function stopWatch(){
          var seconds = (timerFinish-(new Date().getTime()))/1000;
          if(seconds <= 0){
            drawTimer(100);
            clearInterval(timer);
            //start
            startClock();
          }else{
            var percent = 100-((seconds/timerSeconds)*100);
            drawTimer(percent);
          }
        }
        //start
        function startClock(){
            timerSeconds = options.timeBanner / 1000;
            timerCurrent = 0;
            timerFinish = new Date().getTime()+(timerSeconds*1000);
            timer = setInterval(stopWatch,50);
        }
        startClock();
  }

}else{
  null;
}
/*=====================================================
  navButtons
======================================================*/
if(options.navButtons){
  var $prevButton = '<a href="javascript:void()" class="prevButton">'+ options.prevName +'</a>';
  var $nextButton = '<a href="javascript:void()" class="nextButton">'+ options.nextName +'</a>';
  //add buttons in html
  $this.parent().append($prevButton);
  $this.parent().append($nextButton);

  //action nextButton
  $this.parent().find(".nextButton").bind({
    click: function(){
      var $self = $this.parent().find(".pagHighlight .active");

      if(options.effects === "glass"){
        var $listCont = $this.find('.listCont');
        var $firstLi = $listCont.find('li').eq(0).clone();

        $listCont.append($firstLi);
        $listCont.stop(true,true).stop(false,true).animate({
          'margin-left': "-=" + Math.round($listCont.find('li').outerWidth()) +"px"
        },options.timeSlide, function(){
          $listCont.find('li').eq(0).remove();
          $listCont.stop(true,true).stop(false,true).animate({
            'margin-left': "+=" + Math.round($listCont.find('li').outerWidth()) +"px"
          },0);
        });
      }

      if($self.next().length == "0"){
        $this.parent().find(".pagHighlight a:last").removeClass("active");
        $this.parent().find(".pagHighlight a:first").addClass("active").click();
      }


      $self.next().addClass("active").click().prev().removeClass("active");

      // callBacks
      callBacks();

      return false;
    }
  });

  //action prevButton
  $this.parent().find(".prevButton").bind({
    click: function(){
      var $self = $this.parent().find(".pagHighlight .active");

      if(options.effects === "glass"){
        var $listCont = $this.find('.listCont');
        var lastLi = $listCont.find('li:last').clone();

        $listCont.stop(true,true).stop(false,true).animate({
          'margin-left': "+=" + Math.round($listCont.find('li').outerWidth()) +"px"
        },options.timeSlide, function(){
          $listCont.find('li:last').remove();
          $listCont.stop(true,true).stop(false,true).animate({
            'margin-left': "-=" + Math.round($listCont.find('li').outerWidth()) +"px"
          },0);
          $listCont.prepend(lastLi);
        });
      }

      if($self.prev().length == "0"){
        $this.parent().find(".pagHighlight a:first").removeClass("active");
        $this.parent().find(".pagHighlight a:last").addClass("active").click();
      }


      $self.prev().addClass("active").click().next().removeClass("active");

      // callBacks
      callBacks();


      return false;
    }
  });

}else{
  null;
}

/*=====================================================
  paginationCounter
======================================================*/
if(options.paginationCounter){
  // variables
  var $numberPhoto = "<span class='number_photo'></span>";
  var $tabNumber = "<span>"+ options.paginationCounterTab +"</span>";
  var $quantPhoto = "<span class='quant_photo'></span>";

  $('<div/>', {
    'class':'lp_counter',
  }).appendTo($this.parent()).html($numberPhoto+$tabNumber+$quantPhoto);

  var $lengthLi = $this.find(".listCont li").length,
      $liiActive = $this.find(".listCont li").index(".active");

  function counter(){
    $this.parent().find(".pagHighlight a.active").each(function(){
      var $self = $(this),
          $liActive = $self.index();

          $this.parent().find(".lp_counter .number_photo").text($liActive+1);
    });
  }
  counter();
  $this.parent().find(".lp_counter .quant_photo").text($lengthLi);

}else{
  null;
}


/*=====================================================
  keyboard
======================================================*/
if(options.keyboard){
  //action keyboard
  $(window).keydown(function(e){
    if (e.which == 39) {
        var $self = $this.parent().find(".pagHighlight .active");

      if($self.next().length == "0"){
        $this.parent().find(".pagHighlight a:last").removeClass("active");
        $this.parent().find(".pagHighlight a:first").addClass("active").click();
      }

      $self.next().addClass("active").click().prev().removeClass("active");

      $this.parent().find('.nextButton').click();

      return false;
      }else if(e.which == 37){
        var $self = $this.parent().find(".pagHighlight .active");

      if($self.prev().length == "0"){
        $this.parent().find(".pagHighlight a:first").removeClass("active");
        $this.parent().find(".pagHighlight a:last").addClass("active").click();
      }

      $self.prev().addClass("active").click().next().removeClass("active");

      $this.parent().find('.prevButton').click();

      return false;
      }
  });

}else{
  null;
}

/*=====================================================
  touch
======================================================*/
var $thisWrap = $this.parent();
if(options.touch){
    $thisWrap.each(function () {
      var originalCoord = {
          x: 0,
          y: 0
      }
      var finalCoord = {
          x: 0,
          y: 0
      }
    function touchStart(event) {
          originalCoord.x = event.targetTouches[0].pageX
          originalCoord.y = event.targetTouches[0].pageY
      }

      function touchMove(event) {
          event.preventDefault();
          finalCoord.x = event.targetTouches[0].pageX
          finalCoord.y = event.targetTouches[0].pageY
      }

      function touchEnd(event) {
          var changeY = originalCoord.y - finalCoord.y;
          if (changeY < options.thresholdY && changeY > (options.thresholdY * -1)) {
              changeX = originalCoord.x - finalCoord.x;
              if (changeX > options.thresholdX) {
                  var $self = $this.parent().find(".pagHighlight .active");

          if($self.next().length == "0"){
            $this.parent().find(".pagHighlight a:last").removeClass("active");
            $this.parent().find(".pagHighlight a:first").addClass("active").click();
          }

          $self.next().addClass("active").click().prev().removeClass("active");

              }
              if (changeX < (options.thresholdX * -1)) {
                  var $self = $this.parent().find(".pagHighlight .active");

          if($self.prev().length == "0"){
            $this.parent().find(".pagHighlight a:first").removeClass("active");
            $this.parent().find(".pagHighlight a:last").addClass("active").click();
          }

          $self.prev().addClass("active").click().next().removeClass("active");
              }
          }
      }

      function touchStart(event) {
          originalCoord.x = event.targetTouches[0].pageX
          originalCoord.y = event.targetTouches[0].pageY
          finalCoord.x = originalCoord.x
          finalCoord.y = originalCoord.y
      }

      function touchCancel(event) {}
      this.addEventListener("touchstart", touchStart, false);
      this.addEventListener("touchmove", touchMove, false);
      this.addEventListener("touchend", touchEnd, false);
      this.addEventListener("touchcancel", touchCancel, false);
    });

}else{
  null;
}

/*=====================================================
  fullScreen
======================================================*/
if(options.fullScreen){

  var win = $(window),
      fullscreen = $this.parent(),
      div = $this,
      ul = fullscreen.find('ul'),
      cont = fullscreen.find('.cont'),
      li = fullscreen.find('li'),
      image = ul.find('img'),
      imageWidth = image.width(),
      imageHeight = image.height(),
      imageRatio = imageWidth / imageHeight;

  function resizeImage() {
    var winWidth = win.width(),
        winHeight = win.height(),
        winRatio = winWidth / winHeight;

    if(winRatio > imageRatio) {
      fullscreen.css({
        width: winWidth,
        height: winHeight
        // height: Math.round(winWidth / imageRatio)
      });
      div.css({
        width: winWidth,
        height: winHeight
      });
      ul.css({
        width: winWidth * li.length,
        height: winHeight
      });
      cont.css({
        width: winWidth,
        height: winHeight
      });
      li.css({
        width: winWidth,
        height: imageHeight
      });
      image.css({
        width: winWidth,
        height: "auto"
      });
    }else {

      fullscreen.css({
        width: Math.round((winWidth - imageRatio) + options.adjustmentSize),
        height: winHeight
        // height: Math.round((winWidth / imageRatio))
      });
      div.css({
        width: Math.round((winWidth - imageRatio) + options.adjustmentSize),
        height: winHeight
      });
      ul.css({
        width: Math.round((winWidth - imageRatio) * li.length) + options.adjustmentSize,
        height: winHeight
      });
      cont.css({
        width: Math.round((winWidth - imageRatio) + options.adjustmentSize),
        height: winHeight
      });
      li.css({
        width: Math.round((winWidth - imageRatio) + options.adjustmentSize),
        height: winHeight
      });
      image.css({
        width: "auto",
        height: winHeight
      });
    }
  }

  win.bind({
    load: function() {
      resizeImage();
    },
    resize: function() {
      resizeImage();
    }
  });

}else{
  null;
}

/*=====================================================
  responsive
  ======================================================*/
  if(options.responsive){
    $this.parent().addClass("responsiveLp");

    function responsive_lp(){
      var $self = $this.parent();
      var $width = $self.outerWidth();    // Current image width
      var $height = Math.round( (($width/16)*9) / options.adjustmentResponsiveHeight );    // Current image width

      $self.css({
        width: 100 + options.adjustmentSize + "%",
        height: $height +"px"
    });
  }
  responsive_lp();

  $(window).bind({
      load: function() {
        responsive_lp();
    },
    resize: function() {
        responsive_lp();
    }
});

}else{
  null;
}

/*=====================================================
  effects
======================================================*/
  function motion(effects){
    switch(effects){
      case 'fade':
        /*=====================================================
          fade
        ======================================================*/
        //vars
        var $listCont = $this.children(".listCont");
        var $li = $listCont.find("li");
        var $liCont = $li.find(".cont");
        var $linkPag = $this.parent().find(".pagHighlight a");


        $this.find(".listCont li").css("position","absolute");
        $listCont.find("li:first").addClass("active");
        $listCont.find("li:first .cont").css("width","100%");
        $listCont.find("li").css("display","none");
        $listCont.find("li:first").css("display","block");

        $linkPag.bind({
          click: function(){
            var $self = $(this);
            var $selfPosition = $self.data("positionlp");

            $linkPag.removeClass("active")
            $self.addClass("active");

            $li.stop(false,true).fadeOut(options.timeDelayOut).removeClass("active");

            $listCont.find("li[data-positionlp="+ $selfPosition +"] .cont").css("width","100%");
            $listCont.find("li[data-positionlp="+ $selfPosition +"]").stop(false,true).fadeIn(options.timeDelayIn).addClass("active");

            // callBacks
            callBacks();

            return false;
          },
          mouseenter: function(){
            var linkThis = $(this),
                contThisLink = linkThis.html(),
                linkPosition= linkThis.position();

            $this.parent().find(".thumbHoverCont img").attr({
              src: linkThis.data("urlimg")
            });

            $this.parent().find(".thumbHoverCont").css({
              left: (linkPosition.left) - ($this.parent().find(".thumbHoverCont").width() / 2) + 8  +"px",
            }).stop(false,true).fadeIn(300);

          },
          mouseleave: function(){

            $this.parent().find(".thumbHoverCont").stop(false,true).fadeOut(300);

          }
        });
        /*=====================================================
          auto
        ======================================================*/
        function animaFade(){
          var $self = $this.parent().find(".pagHighlight .active");

          if($self.next().length == "0"){
            $this.parent().find(".pagHighlight a:last").removeClass("active");
            $this.parent().find(".pagHighlight a:first").addClass("active");
          }

          $self.next().addClass("active").prev().removeClass("active");

          var $selfPosition = $this.parent().find(".pagHighlight .active").data("positionlp");

          $li.stop(false,true).fadeOut(options.timeDelayOut).removeClass("active");

          $listCont.find("li[data-positionlp="+ $selfPosition +"] .cont").css({
            width: "100%",
            display: "block"
          });
          $listCont.find("li[data-positionlp="+ $selfPosition +"]").stop(false,true).fadeIn(options.timeDelayIn).addClass("active");

          // callBacks
          callBacks();
          return false;
        }
        //auto
        if(options.auto){
          if($this.parent().find(".pagHighlight a").length <= 1){
            null
          }else{
            //hover
            time = setInterval(animaFade, options.timeBanner);

            $this.parent().find(".pagHighlight a").click(function(){
              time = clearInterval(time);
              time = setInterval(animaFade, options.timeBanner);
            });
          }
        }
      break;

      case 'pageHoriz':
        /*=====================================================
          pageHoriz
        ======================================================*/
        //vars
        var $listCont = $this.children(".listCont");
        var $li = $listCont.find("li");
        var $liCont = $li.find(".cont");
        var $linkPag = $this.parent().find(".pagHighlight a");
        i = 10;
        j = 10;

        $listCont.find("li:first .cont").css("width","100%");

        $li.each(function(e){
          $(this).css("z-index", --j)
        });

        var $thisWidth

        if(options.responsive){
          $(window).bind({
            load: function() {
              $li.find("img").css({
                width: $widthThis + "px"
              });
            },
            resize: function() {
              $li.find("img").css({
                width: $widthThis + "px"
              });
            }
          });
        }

        $linkPag.bind({
          click: function(){
            var $self = $(this);
            var $selfPosition = $self.data("positionlp");

            $linkPag.removeClass("active")
            $self.addClass("active");

            $listCont.find("li[data-positionlp="+ $selfPosition +"] .cont").css({
              width: "0%"
            });

            $li.removeClass("active");

            $listCont.find("li[data-positionlp="+ $selfPosition +"]").addClass("active").css("z-index", ++i);
            $listCont.find("li[data-positionlp="+ $selfPosition +"] .cont").stop(true,true).animate({
              width: "100%"
            },options.timeDelay);

            if(options.paginationCounter){
              counter();
            }

          if(options.timerClock){
            startClock();
          }
            return false;
          },
          mouseenter: function(){
            var linkThis = $(this),
                contThisLink = linkThis.html(),
                linkPosition= linkThis.position();

            $this.parent().find(".thumbHoverCont img").attr({
              src: linkThis.data("urlimg")
            });

            $this.parent().find(".thumbHoverCont").css({
              left: (linkPosition.left) - ($this.parent().find(".thumbHoverCont").width() / 2) + 8  +"px",
            }).stop(false,true).fadeIn(300);

          },
          mouseleave: function(){

            $this.parent().find(".thumbHoverCont").stop(false,true).fadeOut(300);

          }
        });
        /*=====================================================
          auto
        ======================================================*/
        function animaPageHoriz(){
          var $self = $this.parent().find(".pagHighlight .active");

          if($self.next().length == "0"){
            $this.parent().find(".pagHighlight a:last").removeClass("active");
            $this.parent().find(".pagHighlight a:first").addClass("active");
          }

          $self.next().addClass("active").prev().removeClass("active");

          var $selfPosition = $this.parent().find(".pagHighlight .active").data("positionlp");

          $listCont.find("li[data-positionlp="+ $selfPosition +"] .cont").css({
            width: "0%"
          });

          $li.removeClass("active");

          $listCont.find("li[data-positionlp="+ $selfPosition +"]").addClass("active").css("z-index", ++i);
          $listCont.find("li[data-positionlp="+ $selfPosition +"] .cont").stop(true,true).animate({
            width: "100%"
          },options.timeDelay);

          // callBacks
          callBacks();
          return false;
        }
        //auto
        if(options.auto){
          if($this.parent().find(".pagHighlight a").length <= 1){
            null
          }else{
            //hover
            time = setInterval(animaPageHoriz, options.timeBanner);

            $this.parent().find(".pagHighlight a").click(function(){
              time = clearInterval(time);
              time = setInterval(animaPageHoriz, options.timeBanner);
            });
          }
        }
        // if(options.auto){
        //  time = setInterval(animaPageHoriz, options.timeBanner);

        //  $this.parent().find(".pagHighlight a").click(function(){
        //    time = clearInterval(time);
        //    time = setInterval(animaPageHoriz, options.timeBanner);
        //  });
        // }
      break;

      case 'pageVert':
      /*=====================================================
        pageVert
      ======================================================*/
      //vars
      var $listCont = $this.children(".listCont");
      var $li = $listCont.find("li");
      var $liCont = $li.find(".cont");
      var $linkPag = $this.parent().find(".pagHighlight a");
      i = 10;
      j = 10;

      $listCont.find("li .cont").css({
        width: "100%",
        height: "0",
        "border-bottom": "1px solid #CCCCCC",
        "box-shadow": "0px 2px 4px #000000",
        "-mozbox-shadow": "0px 2px 4px #000000",
        "-webkit-box-shadow": "0px 2px 4px #000000",
        "-o-box-shadow": "0px 2px 4px #000000",
        "-ms-box-shadow": "0px 2px 4px #000000"
      });
      $listCont.find("li:first .cont").css("height","100%");

      $li.each(function(e){
        $(this).css("z-index", --j)
      });

      $linkPag.bind({
        click: function(){
          var $self = $(this);
          var $selfPosition = $self.data("positionlp");

          $linkPag.removeClass("active")
          $self.addClass("active");

          $listCont.find("li[data-positionlp="+ $selfPosition +"] .cont").css({
            height: "0%"
          });

          $li.removeClass("active");

          $listCont.find("li[data-positionlp="+ $selfPosition +"]").addClass("active").css("z-index", ++i);
          $listCont.find("li[data-positionlp="+ $selfPosition +"] .cont").stop(true,true).animate({
            height: "100%"
          },options.timeDelay);

          // callBacks
          callBacks();
          return false;
        },
        mouseenter: function(){
          var linkThis = $(this),
              contThisLink = linkThis.html(),
              linkPosition= linkThis.position();

          $this.parent().find(".thumbHoverCont img").attr({
            src: linkThis.data("urlimg")
          });

          $this.parent().find(".thumbHoverCont").css({
            left: (linkPosition.left) - ($this.parent().find(".thumbHoverCont").width() / 2) + 8  +"px",
          }).stop(false,true).fadeIn(300);

        },
        mouseleave: function(){

          $this.parent().find(".thumbHoverCont").stop(false,true).fadeOut(300);

        }
      });
      /*=====================================================
        auto
      ======================================================*/
      function animaPageVert(){
        var $self = $this.parent().find(".pagHighlight .active");

        if($self.next().length == "0"){
          $this.parent().find(".pagHighlight a:last").removeClass("active");
          $this.parent().find(".pagHighlight a:first").addClass("active");
        }

        $self.next().addClass("active").prev().removeClass("active");

        var $selfPosition = $this.parent().find(".pagHighlight .active").data("positionlp");

        $listCont.find("li[data-positionlp="+ $selfPosition +"] .cont").css({
          height: "0%"
        });

        $li.removeClass("active");

        $listCont.find("li[data-positionlp="+ $selfPosition +"]").addClass("active").css("z-index", ++i);
        $listCont.find("li[data-positionlp="+ $selfPosition +"] .cont").stop(true,true).animate({
          height: "100%"
        },options.timeDelay);

        // callBacks
        callBacks();

        return false;
      }
      //auto
      if(options.auto){
        if($this.parent().find(".pagHighlight a").length <= 1){
          null
        }else{
          //hover
          time = setInterval(animaPageVert, options.timeBanner);

          $this.parent().find(".pagHighlight a").click(function(){
            time = clearInterval(time);
            time = setInterval(animaPageVert, options.timeBanner);
          });
        }
      }

      break;

      case 'slide':
      /*=====================================================
        Slide
      ======================================================*/
      //vars
      var $listCont = $this.children(".listCont");
      var $li = $listCont.find("li");
      var $liCont = $li.find(".cont");
      var $linkPag = $this.parent().find(".pagHighlight a");
      var $liW = 0;

      $liCont.css({
        width: "100%",
        height: "100%"
      });

      function liSizeWidth(){
        $liW = $this.parent().width();

        $li.css({
          float: "left",
          position: "relative",
          width: $liW + "px"
        });

        //heigthAuto
        if(options.heigthAuto){
          $li.each(function(){
            $imgH = $(this).find("img").height();
            $(this).attr({
              "data-heightimg": $imgH
            });
          });
          $this.parent().css({
            "height": $listCont.find("li:first").data("heightimg") + "px"
          });
        }
      }
      liSizeWidth();

      $(window).bind({
        load: function(){
          liSizeWidth();
        },
        resize: function(){
          liSizeWidth();
        }
      });

      //width $listCont
      var $liLenghtWidth = $listCont.find("li").outerWidth();
      var $widthUl = $liLenghtWidth * $li.length;

      $listCont.css({
        width: $widthUl + "px"
      });

      $listCont.find("li:first").addClass("active");

      $linkPag.bind({
        click: function(){
          var $self = $(this);
          var $selfPosition = $self.data("positionlp");

          $linkPag.removeClass("active")
          $self.addClass("active");

          $li.removeClass("active");
          $listCont.find("li[data-positionlp="+ $selfPosition +"]").addClass("active");

          var $positionActive = $listCont.find("li.active").position();

          $listCont.find("li").stop(true,true).animate({
            left: "-="+ $positionActive.left +"px"
          },options.timeSlide);

          //heigthAuto
          if(options.heigthAuto){
            $this.parent().animate({
              "height": $listCont.find("li.active").data("heightimg") + "px"
            },options.heigthAutoSpeed);
          }

          // callBacks
          callBacks();
          return false;
        },
        mouseenter: function(){
          var linkThis = $(this),
              contThisLink = linkThis.html(),
              linkPosition= linkThis.position();

          $this.parent().find(".thumbHoverCont img").attr({
            src: linkThis.data("urlimg")
          });

          $this.parent().find(".thumbHoverCont").css({
            left: (linkPosition.left) - ($this.parent().find(".thumbHoverCont").width() / 2) + 8  +"px",
          }).stop(false,true).fadeIn(300);

        },
        mouseleave: function(){

          $this.parent().find(".thumbHoverCont").stop(false,true).fadeOut(300);

        }
      });
      /*=====================================================
        auto
      ======================================================*/
      function animaSlide(){
        var $self = $this.parent().find(".pagHighlight .active");
        var $positionSelf = $self.data("positionlp") + 1;

        if($self.next().length == "0"){
          $positionSelf = 0;
          $this.parent().find(".pagHighlight a:last").removeClass("active");
          $this.parent().find(".pagHighlight a:first").addClass("active");
        }
        $self.next().addClass("active").prev().removeClass("active");

        var $selfPosition = $this.parent().find(".pagHighlight .active").data("positionlp");
        var $positionActive = $listCont.find("li[data-positionlp="+ $selfPosition +"]").position();

        $listCont.find("li").stop(true,true).animate({
          left: "-="+ $positionActive.left +"px"
        },options.timeSlide);

        //heigthAuto
        if(options.heigthAuto){
          $this.parent().animate({
            "height": $listCont.find("li").eq($positionSelf).data("heightimg") + "px"
          },options.heigthAutoSpeed);
        }

        // callBacks
        callBacks();

        return false;
      }
      //auto
      if(options.auto){
        if($this.parent().find(".pagHighlight a").length <= 1){
          null
        }else{
          //hover
          time = setInterval(animaSlide, options.timeBanner);

          $this.parent().find(".pagHighlight a").click(function(){
            time = clearInterval(time);
            time = setInterval(animaSlide, options.timeBanner);
          });
        }
      }

      break;

      case 'concertina':
      /*=====================================================
        Concertina
      ======================================================*/
      //vars
      var $listCont = $this.find(".listCont");
      var $li = $listCont.find("li");
      var $liCont = $li.find(".cont");
      var $linkPag = $this.parent().find(".pagHighlight a");
       var $liW = 0;

      $this.parent().removeClass('responsiveLp');
      $this.parent().addClass('concertinaRespLp');


      $liCont.css({
        width: "100%",
        height: "102%"
      });


      $liW = Math.round(((100 / $li.length)));

      console.log($liW)
      $li.css({
        float: "left",
        position: "relative",
        width: $liW + "%",
        "margin-right": options.concertinaAdjustmentFloat+"px"
      });


      // z-index $li
      var contZ = 0;
      $li.each(function(){
        var $self = $(this),
            $altImg = $self.find('img').attr('alt');
            $liTitleBox = "<div class='titleBox_lp'><h3>"+ $altImg +"</h3></div>";

        contZ += 1;
        $self.css({
          "z-index": contZ
        });

        // title box
        $self.find('.cont').append($liTitleBox);

      });



      $listCont.find("li:first").addClass("active");

      $this.find('.title_lp').stop(false,false).hide();

      $this.parent().find('.pieLp, .pagHighlight, .nextButton, .prevButton').hide();


      $li.bind({
        mouseenter: function(){
          var $linkThis = $(this);
          var $selfPosition = $linkThis.data("positionlp");

          $li.removeClass('expanded').addClass('compress');
          $linkThis.removeClass('compress').addClass('expanded');

          var $liHover = Math.round( (100 - options.concertinaMaxWidth) / ($li.length-1) );

          $this.find(".listCont .compress").stop(false,false).animate({
            width: $liHover + "%"
          },options.timeDelayIn,function(){
            $this.find('.title_lp').stop(false,false).fadeOut(options.timeDelayOut);
          });

          $this.find(".listCont .expanded").stop(false,false).animate({
            width: Math.round(options.concertinaMaxWidth) + "%"
          },options.timeDelayIn,function(){
            $this.find('.title_lp').stop(false,false).fadeIn(options.timeDelayIn);
          });

          $this.find(".titleBox_lp").stop(false,false).fadeOut(options.timeDelayOut);

          return false;
        },
        mouseleave: function(){
          var $linkThis = $(this),
              contThisLink = $linkThis.html(),
              linkPosition= $linkThis.position();

          $this.find('.title_lp').stop(false,false).hide();
          $this.find(".titleBox_lp").stop(false,false).hide();

          $li.removeClass('expanded').removeClass('compress');

        }
      });
      $this.parent().bind({
        mouseleave: function(){

          $li.stop(false,false).animate({
            width: $liW + "%"
          },options.timeDelayOut);
          console.log($liW)

          $this.find(".titleBox_lp").stop(false,false).fadeIn(options.timeDelayIn);


        }
      });

      break;

      case 'glass':
      /*=====================================================
        Glass
      ======================================================*/
      //vars
      var $listCont = $this.find(".listCont");
      var $li = $listCont.find("li");
      var $liCont = $li.find(".cont");
      var $linkPag = $this.parent().find(".pagHighlight a");
      var $liW = 0;

      $this.css({
        overflow: 'visible'
      });

      if(options.glassVisible){
        $this.parent().css({
          overflow: 'visible'
        });
      }else{
        $this.parent().css({
          overflow: 'hidden'
        });
      }

      $liCont.css({
        width: "100%",
        height: "100%"
      });

      function liSizeWidth(){
        $liW = $this.parent().width();
        $li.css({
          float: "left",
          position: "relative",
          width: $liW + "px"
        });
      }
      liSizeWidth();

      $(window).bind({
        load: function(){
          liSizeWidth();
        },
        resize: function(){
          liSizeWidth();
        }
      });

      //width $listCont
      var $liLenghtWidth = $listCont.find("li").outerWidth();
      var $widthUl = $liLenghtWidth * $li.length;

      // position li active
      $listCont.find("li").eq(options.glassPositionStart).addClass("active");
      $linkPag.removeClass("active");
      $linkPag.eq(options.glassPositionStart).addClass("active");

      $(window).bind({
        load: function(){
          $listCont.css({
            width: $widthUl + "px",
            position: "relative",
            "margin-left": "-"+ ($listCont.find("li.active").width() * options.glassPositionStart) +"px"
          });
        },
        resize: function(){
          $listCont.css({
            width: $widthUl + "px",
            position: "relative",
            "margin-left": "-"+ ($listCont.find("li.active").width() * options.glassPositionStart) +"px"
          });
        }
      });

      // elements for loop
      var $liFirstClone = $listCont.find("li:first").clone(),
          $liLastClone = $listCont.find("li:last").clone(),
          $liClone = $listCont.find("li").clone();

      $listCont.css({
        width: $listCont.find("li").outerWidth() * $listCont.find("li").length + "px"
      });

      // $listCont.prepend($liClone);
      // $listCont.find("li").last().after($liFirstClone);

      $linkPag.bind({
        click: function(){
          var $self = $(this);
          var $selfPosition = $self.data("positionlp");

          $linkPag.removeClass("active")
          $self.addClass("active");

          $li.removeClass("active");
          $listCont.find("li[data-positionlp="+ $selfPosition +"]").addClass("active");

          var $positionActive = $listCont.find("li.active").position();

          // callBacks
          callBacks();

          return false;
        },
        mouseenter: function(){
          var linkThis = $(this),
              contThisLink = linkThis.html(),
              linkPosition= linkThis.position();

          $this.parent().find(".thumbHoverCont img").attr({
            src: linkThis.data("urlimg")
          });

          $this.parent().find(".thumbHoverCont").css({
            left: (linkPosition.left) - ($this.parent().find(".thumbHoverCont").width() / 2) + 8  +"px",
          }).stop(false,true).fadeIn(300);

        },
        mouseleave: function(){

          $this.parent().find(".thumbHoverCont").stop(false,true).fadeOut(300);

        }
      });
      /*=====================================================
        auto
      ======================================================*/
      function animaGlass(){
        var $self = $this.parent().find(".pagHighlight .active");
        var $listCont = $this.find('.listCont');

        if($self.next().length == "0"){
          $this.parent().find(".pagHighlight a:last").removeClass("active");
          $this.parent().find(".pagHighlight a:first").addClass("active");
        }

        $self.next().addClass("active").prev().removeClass("active");

        var $selfPosition = $this.parent().find(".pagHighlight .active").data("positionlp");
        var $positionActive = $listCont.find("li[data-positionlp="+ $selfPosition +"]").position();

        $listCont.find("li").removeClass("active");
        $listCont.find("li[data-positionlp="+ $selfPosition +"]").addClass("active");

        var $firstLi = $listCont.find('li').eq(0).clone();

        $listCont.append($firstLi);
        $listCont.stop(true,true).animate({
          'margin-left': "-=" + Math.round($listCont.find('li').outerWidth()) +"px"
        },options.timeSlide, function(){
          $listCont.find('li').eq(0).remove();
          $listCont.stop(true,true).animate({
            'margin-left': "+=" + Math.round($listCont.find('li').outerWidth()) +"px"
          },0);
        });

        // callBacks
        callBacks();

        return false;
      }
      //auto
      if(options.auto){
        if($this.parent().find(".pagHighlight a").length <= 1){
          null
        }else{
          //hover
          time = setInterval(animaGlass, options.timeBanner);

          $this.parent().find(".pagHighlight a").click(function(){
            time = clearInterval(time);
            time = setInterval(animaGlass, options.timeBanner);
          });
        }
      }

      break;

    }
  }
  motion(options.effects);
/*=====================================================
  verifications
======================================================*/

}
})(jQuery);