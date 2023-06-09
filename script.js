// animation slides
let sliderIndex1 = 1;
let sliderIndex2 = 2;
let sliderIndex3 = 3;
let sliderIndex4 = 4;
let sliderIndex5 = 5;
let sliderIndex6 = 6;


let timeout;
const layers = [...document.querySelectorAll('.layer')];
const covers = [...document.querySelectorAll('.photo-frame')];

function changeCoverAnimState(state = 0) {
  const st = state === 1 ? 'running' : 'paused';
  covers.forEach(cover => {
    cover.querySelector('.cover').style.width = `${state * 100}%`;
  });
}
// 1-Logo Equip TP
function switchLayer1() {
  const nextSlide1 = (sliderIndex1);
  changeCoverAnimState(1);
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    changeCoverAnimState(0)
  }, 500);
  
  for(let i of layers) {
    i.classList.remove('layer-displayed');
    i.classList.remove('layer-displayed-exit');
    if(i.dataset.scene == nextSlide1) {
      i.classList.add('layer-displayed');
    }
    if(i.dataset.scene == sliderIndex1) {
      i.classList.add('layer-displayed-exit');
    }
  }
  sliderIndex1 = nextSlide1;
}
// 2-Cartedev Equip TP
function switchLayer2() {
  const nextSlide2 = (sliderIndex2);
  changeCoverAnimState(1);
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    changeCoverAnimState(0)
  }, 500);
  
  for(let i of layers) {
    i.classList.remove('layer-displayed');
    i.classList.remove('layer-displayed-exit');
    if(i.dataset.scene == nextSlide2) {
      i.classList.add('layer-displayed');
    }
    if(i.dataset.scene == sliderIndex2) {
      i.classList.add('layer-displayed-exit');
    }
  }
  sliderIndex2 = nextSlide2;
}
// 3-Site Equip TP
function switchLayer3() {
  const nextSlide3 = (sliderIndex3);
  changeCoverAnimState(1);
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    changeCoverAnimState(0)
  }, 500);
  
  for(let i of layers) {
    i.classList.remove('layer-displayed');
    i.classList.remove('layer-displayed-exit');
    if(i.dataset.scene == nextSlide3) {
      i.classList.add('layer-displayed');
    }
    if(i.dataset.scene == sliderIndex3) {
      i.classList.add('layer-displayed-exit');
    }
  }
  sliderIndex3 = nextSlide3;
}

// 4-Site Booki
function switchLayer4() {
  const nextSlide4 = (sliderIndex4);
  changeCoverAnimState(1);
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    changeCoverAnimState(0)
  }, 500);
  
  for(let i of layers) {
    i.classList.remove('layer-displayed');
    i.classList.remove('layer-displayed-exit');
    if(i.dataset.scene == nextSlide4) {
      i.classList.add('layer-displayed');
    }
    if(i.dataset.scene == sliderIndex4) {
      i.classList.add('layer-displayed-exit');
    }
  }
  sliderIndex4 = nextSlide4;
}

// 5-Site Kanap
function switchLayer5() {
  const nextSlide5 = (sliderIndex5);
  changeCoverAnimState(1);
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    changeCoverAnimState(0)
  }, 500);
  
  for(let i of layers) {
    i.classList.remove('layer-displayed');
    i.classList.remove('layer-displayed-exit');
    if(i.dataset.scene == nextSlide5) {
      i.classList.add('layer-displayed');
    }
    if(i.dataset.scene == sliderIndex5) {
      i.classList.add('layer-displayed-exit');
    }
  }
  sliderIndex5 = nextSlide5;
}

// 6-Site Kasa
function switchLayer6() {
  const nextSlide6 = (sliderIndex6);
  changeCoverAnimState(1);
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    changeCoverAnimState(0)
  }, 500);
  
  for(let i of layers) {
    i.classList.remove('layer-displayed');
    i.classList.remove('layer-displayed-exit');
    if(i.dataset.scene == nextSlide6) {
      i.classList.add('layer-displayed');
    }
    if(i.dataset.scene == sliderIndex6) {
      i.classList.add('layer-displayed-exit');
    }
  }
  sliderIndex6 = nextSlide6;
}


$(window).scroll( function(){

  var topWindow = $(window).scrollTop();
  var topWindow = topWindow * 1.5;
  var windowHeight = $(window).height();
  var position = topWindow / windowHeight;
  position = 1 - position;
  $('.arrow-wrap');
});

$(window).scroll( function(){

  var topWindow = $(window).scrollTop();
  var topWindow = topWindow * 1.5;
  var windowHeight = $(window).height();
  var position = topWindow / windowHeight;
  position = 1 - position;
  $('.arrow-wrap2');
});


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});




// animation scrollTop
$(document).ready(function() {

  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  });

  // évenement click scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  });

  var h1 = $("#h1").position();
  var h2 = $("#h2").position();
  var h3 = $("#h3").position();

  $('.link1').click(function() {
    $('html, body').animate({
      scrollTop: h1.top
    }, 500);
    return false;

  });

  $('.link2').click(function() {
    $('html, body').animate({
      scrollTop: h2.top
    }, 500);
    return false;

  });

  $('.link3').click(function() {
    $('html, body').animate({
      scrollTop: h3.top
    }, 500);
    return false;

  });
});
/*
// animation present
(function() {

  var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

  // Main
  initHeader();
  initAnimation();
  addListeners();

  function initHeader() {
      width = window.innerWidth;
      height = window.innerHeight;
      target = {x: width/2, y: height/2};

      largeHeader = document.getElementById('large-header');
      largeHeader.style.height = height+'px';

      canvas = document.getElementById('demo-canvas');
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext('2d');

      // create points
      points = [];
      for(var x = 0; x < width; x = x + width/20) {
          for(var y = 0; y < height; y = y + height/20) {
              var px = x + Math.random()*width/20;
              var py = y + Math.random()*height/20;
              var p = {x: px, originX: px, y: py, originY: py };
              points.push(p);
          }
      }

      // for each point find the 5 closest points
      for(var i = 0; i < points.length; i++) {
          var closest = [];
          var p1 = points[i];
          for(var j = 0; j < points.length; j++) {
              var p2 = points[j]
              if(!(p1 == p2)) {
                  var placed = false;
                  for(var k = 0; k < 5; k++) {
                      if(!placed) {
                          if(closest[k] == undefined) {
                              closest[k] = p2;
                              placed = true;
                          }
                      }
                  }

                  for(var k = 0; k < 5; k++) {
                      if(!placed) {
                          if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
                              closest[k] = p2;
                              placed = true;
                          }
                      }
                  }
              }
          }
          p1.closest = closest;
      }

      // assign a circle to each point
      for(var i in points) {
          var c = new Circle(points[i], 2+Math.random()*2, 'rgba(255,255,255,0.3)');
          points[i].circle = c;
      }
  }

  // Event handling
  function addListeners() {
      if(!('ontouchstart' in window)) {
          window.addEventListener('mousemove', mouseMove);
      }
      window.addEventListener('scroll', scrollCheck);
      window.addEventListener('resize', resize);
  }

  function mouseMove(e) {
      var posx = posy = 0;
      if (e.pageX || e.pageY) {
          posx = e.pageX;
          posy = e.pageY;
      }
      else if (e.clientX || e.clientY)    {
          posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
          posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      target.x = posx;
      target.y = posy;
  }

  function scrollCheck() {
      if(document.body.scrollTop > height) animateHeader = false;
      else animateHeader = true;
  }

  function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      largeHeader.style.height = height+'px';
      canvas.width = width;
      canvas.height = height;
  }

  // animation
  function initAnimation() {
      animate();
      for(var i in points) {
          shiftPoint(points[i]);
      }
  }

  function animate() {
      if(animateHeader) {
          ctx.clearRect(0,0,width,height);
          for(var i in points) {
              // detect points in range
              if(Math.abs(getDistance(target, points[i])) < 4000) {
                  points[i].active = 0.3;
                  points[i].circle.active = 0.6;
              } else if(Math.abs(getDistance(target, points[i])) < 20000) {
                  points[i].active = 0.1;
                  points[i].circle.active = 0.3;
              } else if(Math.abs(getDistance(target, points[i])) < 40000) {
                  points[i].active = 0.02;
                  points[i].circle.active = 0.1;
              } else {
                  points[i].active = 0;
                  points[i].circle.active = 0;
              }

              drawLines(points[i]);
              points[i].circle.draw();
          }
      }
      requestAnimationFrame(animate);
  }

  function shiftPoint(p) {
      TweenLite.to(p, 1+1*Math.random(), {x:p.originX-50+Math.random()*100,
          y: p.originY-50+Math.random()*100, ease:Circ.easeInOut,
          onComplete: function() {
              shiftPoint(p);
          }});
  }

  // Canvas manipulation
  function drawLines(p) {
      if(!p.active) return;
      for(var i in p.closest) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.closest[i].x, p.closest[i].y);
          ctx.strokeStyle = 'rgba(156,217,249,'+ p.active+')';
          ctx.stroke();
      }
  }

  function Circle(pos,rad,color) {
      var _this = this;

      // constructor
      (function() {
          _this.pos = pos || null;
          _this.radius = rad || null;
          _this.color = color || null;
      })();

      this.draw = function() {
          if(!_this.active) return;
          ctx.beginPath();
          ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
          ctx.fillStyle = 'rgba(156,217,249,'+ _this.active+')';
          ctx.fill();
      };
  }

  // Util
  function getDistance(p1, p2) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  }
  
})();

*/