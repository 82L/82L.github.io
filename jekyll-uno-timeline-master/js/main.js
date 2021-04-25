---
layout: null
sitemap:
  exclude: 'yes'
---
function toggleMobileMenu() {
  $('.navigation-wrapper').toggleClass('visible');
  $('.btn-mobile-menu__icon').toggleClass('hidden');
  $('.btn-mobile-close__icon').toggleClass('hidden');
}

$(document).ready(function () {
  var collapsing=true;
  $('a.panel-button').click(function (e) {
    //if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    if ($('.content-wrapper').hasClass('showing')){
      
      console.log("Goes back in place")
      $('.content-wrapper').removeClass('animated slideInRight')
      $('.panel-cover').removeClass('panel-cover--collapsed')
     
      $('.panel-cover').css('max-width', '100%')
      $('.panel-cover').animate({'width': '100%'}, 400, swing = 'swing', function () {})
      $('.content-wrapper').removeClass('showing')
      if($('.panel-cover').hasClass('cv') && $(this).hasClass('projects-button')){
        console.log("projects clicked, caching cv")
        $('.panel-cover').removeClass('cv')
        $('.panel-cover').addClass('projects')
        collapsing=false;
        return;
      }
      else if ($('.panel-cover').hasClass('projects') && $(this).hasClass('cv-button')){
        console.log("cv clicked caching projects")
        $('.panel-cover').removeClass('projects')
        $('.panel-cover').addClass('cv')
        collapsing=false;
        return;
      }
      else{
        $('.panel-cover').removeClass('cv')
        $('.panel-cover').removeClass('projects')

      }
      window.location.hash = '';
      parent.location.hash = '';
      e.preventDefault();
      
      return;
    }
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
    if($(this).hasClass('projects-button')){
      console.log("projects clicked")
      $('.panel-cover').addClass('projects')
      return;
    }
    else if ($(this).hasClass('cv-button')){
      console.log("cv clicked")
      $('.panel-cover').addClass('cv')
      return;
    }
    $('.content-wrapper').addClass('showing');

  })

  if (window.location.hash && window.location.hash == '#projects' && collapsing) {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }
  if (window.location.hash && window.location.hash == '#cv' && collapsing) {
    console.log("cv clicked")
    $('.panel-cover').addClass('panel-cover--collapsed')
  }


  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    if (!$('.navigation-wrapper').hasClass('animated bounceInDown')){
        $('.navigation-wrapper').addClass('animated bounceInDown');
    }
    toggleMobileMenu();
  })

  $('.navigation-wrapper .projects-button').click(function () {
    toggleMobileMenu();
  })
})
