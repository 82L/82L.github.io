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
        else if(self.open != 'work' && $(this).hasClass('work-button')){
          self.open="work";
          // $('#mail').scrollIntoView();
          return;
        }
        else if(self.open != 'misc' && $(this).hasClass('work-button')){
            self.open="misc";
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
    if($(this).hasClass('projects-button')){
      self.open="projects";
    }
    else if($(this).hasClass('cv-button')){
      self.open="cv";
    }
    else if($(this).hasClass('mail-button')){
      self.open="mail";
    }
    else if($(this).hasClass('work-button')){
      self.open="work";
    }
    else if($(this).hasClass('misc-button')){
        self.open="misc";
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
   console.log(self.open)
   $('.projects-button').addClass("active")
  }
  if (window.location.hash && window.location.hash == '#work') {
    $('.panel-cover').addClass('panel-cover--collapsed')
    $('.work-button').click();
    self.open="work"
    console.log(self.open)
    $('.work-button').addClass("active")
  }
  if (window.location.hash && window.location.hash == '#misc') {
        $('.panel-cover').addClass('panel-cover--collapsed')
        $('.misc-button').click();
        self.open="misc"
        console.log(self.open)
        $('.misc-button').addClass("active")
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
    $('.navigation-wrapper .work-button').click(function () {
        toggleMobileMenu();
    })
    $('.navigation-wrapper .misc-button').click(function () {
        toggleMobileMenu();
    })
  $('.navigation-wrapper .cv-button').click(function () {
    toggleMobileMenu();
  })
  $('.navigation-wrapper .mail-button').click(function () {
    toggleMobileMenu();
  })
})

$(".filter-type").on("change", function () {
  var element = $(this);
  //filtrage
  self.filterList(element.val(), "filterType", "type");

});

 //montrer ou cacher les objets en fonction des filtres
 function filterObject(element) {
  //si tous les filtres sont a True (position défaut) on affiche
  if (
      element.dataset.filterType === "true") {
      element.style.display = "";
  } else {
      element.style.display = "none";
  }
}

$(".filter-type").trigger("change");

 //filtring all, in fonction of the data obj
 function filterList (idToSearch, dataObj, idObj) {
  const self = this;
  let list = $("#miscProjectTimeline").children("li");
  for (object of list) {
      let idArray = object.dataset[idObj].split(";");
      if (idArray.indexOf(idToSearch) > -1) {
          object.dataset[dataObj] = "true";
      } else {
          object.dataset[dataObj] = "false";
      }
      self.filterObject(object);
  }
}

var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes
            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML;
            }

            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if(!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) {
                continue;
            }

            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
            params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if(pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll( gallerySelector );

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};

// execute above function
initPhotoSwipeFromDOM('.project-gallery');