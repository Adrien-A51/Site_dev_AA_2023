// changement de couleur menu au scroll
const menu = document.getElementById('menu')
const menuHeightPx = 50
window.addEventListener('scroll', () => {
  if (
    document.body.scrollTop > menuHeightPx ||
    document.documentElement.scrollTop > menuHeightPx
  ) {
    menu.classList.add('scrolled')
  } else {
    menu.classList.remove('scrolled')
  }
})

$(window).scroll(function () {
  var topWindow = $(window).scrollTop()
  var topWindow = topWindow * 1.5
  var windowHeight = $(window).height()
  var position = topWindow / windowHeight
  position = 1 - position
  $('.arrow-wrap')
})

$(window).scroll(function () {
  var topWindow = $(window).scrollTop()
  var topWindow = topWindow * 1.5
  var windowHeight = $(window).height()
  var position = topWindow / windowHeight
  position = 1 - position
  $('.arrow-wrap2')
})

$(function () {
  $('a[href*=#]:not([href=#])').click(function () {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      if (target.length) {
        $('html,body').animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        )
        return false
      }
    }
  })
})

// animation scrollTop
$(document).ready(function () {
  var scrollTop = $('.scrollTop')

  $(window).scroll(function () {
    // declaration de la variable
    var topPos = $(this).scrollTop()

    // si on scroll vers le bas de 100px - le bouton scrolltop apparaît
    if (topPos > 400) {
      $(scrollTop).css('opacity', '1')
    } else {
      $(scrollTop).css('opacity', '0')
    }
  })

  // évenement click scroll to top
  $(scrollTop).click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      800
    )
    return false
  })

  var h1 = $('#h1').position()
  var h2 = $('#h2').position()
  var h3 = $('#h3').position()

  $('.link1').click(function () {
    $('html, body').animate(
      {
        scrollTop: h1.top,
      },
      500
    )
    return false
  })

  $('.link2').click(function () {
    $('html, body').animate(
      {
        scrollTop: h2.top,
      },
      500
    )
    return false
  })

  $('.link3').click(function () {
    $('html, body').animate(
      {
        scrollTop: h3.top,
      },
      500
    )
    return false
  })
})

// nav
function openNav() {
  document.getElementById('myNav').style.height = '50%'
}

function closeNav() {
  document.getElementById('myNav').style.height = '0%'
}

popup = {
  init: function () {
    $('figure').click(function () {
      popup.open($(this))
    })

    $(document)
      .on('click', '.popup img', function () {
        return false
      })
      .on('click', '.popup', function () {
        popup.close()
      })
  },
  open: function ($figure) {
    $('#container-projet').addClass('pop')
    $popup = $('<div class="popup" />').appendTo($('body'))
    $fig = $figure.clone().appendTo($('.popup'))
    $bg = $('<div class="bg" />').appendTo($('.popup'))
    $close = $(
      '<div class="close"><svg><use xlink:href="#close"></use></svg></div>'
    ).appendTo($fig)
    $shadow = $('<div class="shadow" />').appendTo($fig)
    src = $('img', $fig).attr('src')
    $shadow.css({ backgroundImage: 'url(' + src + ')' })
    $bg.css({ backgroundImage: 'url(' + src + ')' })
    setTimeout(function () {
      $('.popup').addClass('pop')
    }, 10)
  },
  close: function () {
    $('#container-projet, .popup').removeClass('pop')
    setTimeout(function () {
      $('.popup').remove()
    }, 100)
  },
}

popup.init()

var slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
  showSlides((slideIndex += n))
}

function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  var i
  var slides = document.getElementsByClassName('custom-slider')
  var dots = document.getElementsByClassName('dot')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
}

function typeEffect(element, speed) {
  var text = element.innerHTML
  element.innerHTML = ''

  var i = 0
  var timer = setInterval(function () {
    if (i < text.length) {
      element.append(text.charAt(i))
      i++
    } else {
      clearInterval(timer)
    }
  }, speed)
}

//document.querySelector('.hamburger-menu')
//.addEventListener('click', () => { document.querySelector('.container')
//.classList.toggle("change");
//});

//document.querySelector('.sidebar')
//.addEventListener('click', () => { document.querySelector('.container')
//.classList.toggle("change");
//});
