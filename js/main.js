---
layout: null
sitemap:
  exclude: 'yes'
---
function toggleMobileMenu() {
  $('.navigation-wrapper').toggleClass('visible');
  $('.btn-mobile-menu__icon').toggleClass('hidden');
  $('.btn-mobile-close__icon').toggleClass('hidden');
};
 var open="none";
$(document).ready(function () {
  var self=this;

  $('a.panel-button').click(function (e) {
    console.log("Button clicked")
    $('.navigation__item a').removeClass("active");
    $(this).addClass("active");
    //if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    //Si le content wrapper se montre
    if ($('.content-wrapper').hasClass('showing') 
    // && !($('.cv').hasClass('active') && $(this).hasClass('projects-button'))
    // &&  !($('.projects').hasClass('active') && $(this).hasClass('cv-button'))
    ){
      //Test si y a le cv activé et qu'on appuie sur le bouton projet
   
        if(self.open != 'projects' && $(this).hasClass('projects-button')){
          self.open="projects";
        console.log("projects clicked, caching cv")
      //  $('#projects').scrollIntoView();
        
        return;
      }
      //test si on appuie sur le bouton et que les projets sont activé
      else if (self.open != 'cv' && $(this).hasClass('cv-button')){
        console.log("cv clicked caching projects")
        self.open="cv";
        // $('#cv').scrollIntoView();
        return;
      }
      else if(self.open != 'mail' && $(this).hasClass('mail-button')){
        self.open="mail";
        // $('#mail').scrollIntoView();
        return;
      }
    
      //Retire les class
      $('.content-wrapper').removeClass('animated slideInRight')
      $('.panel-cover').removeClass('panel-cover--collapsed')
     //ajoute les classes de bases
      $('.panel-cover').css('max-width', '100%')
      $('.panel-cover').animate({'width': '100%'}, 400, swing = 'swing', function () {})

      self.open="none"
      $('.navigation__item a').removeClass("active");
      $('.content-wrapper').removeClass('showing')
      window.location.hash = '';
      parent.location.hash = '';
      e.preventDefault();
      
      return;
    }
    //si c'est pas en train de montrer
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960
    ){
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
    // //si on a cliqué sur projet
    // if($(this).hasClass('projects-button')){
    //   console.log("projects clicked")
    //   $('.projects').addClass('active')
    //   $('.cv').removeClass('active')
      
    // }
    // //si on a cliqué sur cv
    // else if ($(this).hasClass('cv-button')){
    //   console.log("cv clicked")
    //   $('.cv').addClass('active')
    //   $('.projects').removeClass('active')
    // }
    $('.content-wrapper').addClass('showing');

  })

  if (window.location.hash && window.location.hash == '#projects') {
    $('.panel-cover').addClass('panel-cover--collapsed')
    $('.projects-button').click();
   self.open="projects"
   console.log("test")
   $('.projects-button').addClass("active")
  }
  if (window.location.hash && window.location.hash == '#cv') {
    $('.panel-cover').addClass('panel-cover--collapsed')
    $('.cv-button').click();
    self.open="cv";
    $('.cv-button').addClass("active")
  }
  if (window.location.hash && window.location.hash == '#mail') {
    $('.panel-cover').addClass('panel-cover--collapsed')
    $('.mail-button').click();
    self.open="mail"
    $('.mail-button').addClass("active")
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
  $('.navigation-wrapper .cv-button').click(function () {
    toggleMobileMenu();
  })
  $('.navigation-wrapper .mail-button').click(function () {
    toggleMobileMenu();
  })
})
