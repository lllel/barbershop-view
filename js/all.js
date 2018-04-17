"use strict";
"use strict";var _createClass=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var body=document.querySelector("body"),navMain=document.querySelector(".nav-main"),currentItem=document.querySelectorAll(".nav-main__link:not([href])");navMain.classList.remove("no-js"),navMain.classList.remove("nav-main--active"),function(e){e.matches=e.matches||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector,e.closest=e.closest||function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}return null}}(Element.prototype);var ModalMenu=function(){function t(e){_classCallCheck(this,t),this.elem=e.elem,this.button=this.elem.querySelector(".nav-main__open-menu")}return _createClass(t,[{key:"openMenu",value:function(){var t=this;this.elem.classList.remove("nav-main--hidden"),this.elem.classList.add("nav-main--active"),this.elem.classList.add("animation-play"),document.addEventListener("keydown",function(e){t.onEscPressKeydown(e)})}},{key:"closeMenu",value:function(){var t=this;this.elem.classList.add("nav-main--hidden"),this.elem.classList.remove("nav-main--active"),this.elem.classList.add("animation-play"),document.removeEventListener("keydown",function(e){t.onEscPressKeydown(e)})}},{key:"onEscPressKeydown",value:function(e){27===e.keyCode&&this.closeMenu()}},{key:"onButtonClick",value:function(){this.elem.classList.contains("nav-main--active")?this.closeMenu():this.openMenu()}},{key:"init",value:function(){var t=this;document.addEventListener("click",function(e){!t.elem.classList.contains("nav-main--active")||e.target.closest(".nav-main")&&"header-main__wrapper"!==e.target.className||t.closeMenu()}),this.button.addEventListener("click",function(e){t.onButtonClick(e)}),[].forEach.call(currentItem,function(e){e.parentElement.style.display="flex"})}}]),t}(),modalMenu=new ModalMenu({elem:document.querySelector(".nav-main")});modalMenu.init();var SliderReview=function(){function t(e){_classCallCheck(this,t),this.elem=e.elem,this.dots=this.elem.querySelectorAll(".buttons__input"),this.btnPrev=this.elem.querySelector(".slider-reviews__button-arrow--prev"),this.btnNext=this.elem.querySelector(".slider-reviews__button-arrow--next"),this.slides=this.elem.querySelectorAll(".slider-reviews__slide"),this.slidesLength=this.slides.length-1,this.last=0,this.current=0,this.timerId=null,this.timerDelay=6e3}return _createClass(t,[{key:"hideSlide",value:function(e){this.slides[e].classList.remove("slider-reviews__slide--active")}},{key:"showSlide",value:function(e){this.slides[e].classList.add("slider-reviews__slide--active")}},{key:"setSlide",value:function(e){e!==this.current&&(this.last=this.current,this.current=e)}},{key:"changeSlide",value:function(e){this.setSlide(e),this.hideSlide(this.last),this.showSlide(e),this.changeDots(e),this.timer()}},{key:"changeDots",value:function(e){this.dots[this.last].checked=!1,this.dots[e].checked=!0}},{key:"timer",value:function(){var e=this;clearInterval(this.timerId),this.timerId=setInterval(function(){e.changeSlide(e.next)},this.timerDelay)}},{key:"init",value:function(){var n=this;[].forEach.call(this.dots,function(e,t){e.addEventListener("click",function(){return n.changeSlide(t)})}),this.btnPrev.addEventListener("click",function(){return n.changeSlide(n.prev)}),this.btnNext.addEventListener("click",function(){return n.changeSlide(n.next)}),this.timer()}},{key:"prev",get:function(){var e=this.current-1;return e<0&&(e=this.slidesLength),e}},{key:"next",get:function(){var e=this.current+1;return e>this.slidesLength&&(e=0),e}}]),t}();if(document.querySelector(".slider-reviews")){var sliderReview=new SliderReview({elem:document.querySelector(".slider-reviews")});sliderReview.init()}var SliderDescription=function(e){function n(e){_classCallCheck(this,n);var t=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.slides=t.elem.querySelectorAll(".slider-description__slide"),t.slidesLength=t.slides.length-1,t}return _inherits(n,SliderReview),_createClass(n,[{key:"hideSlide",value:function(e){this.slides[e].classList.remove("slider-description__slide--active")}},{key:"showSlide",value:function(e){this.slides[e].classList.add("slider-description__slide--active")}},{key:"init",value:function(){var n=this;[].forEach.call(this.dots,function(e,t){e.addEventListener("click",function(){return n.changeSlide(t)})}),this.timer()}}]),n}();if(document.querySelector(".slider-description")){var sliderDescription=new SliderDescription({elem:document.querySelector(".slider-description")});sliderDescription.init()}var News=function(){function t(e){_classCallCheck(this,t),this.elem=e.elem,this.news=this.elem.querySelectorAll(".news__container"),this.newsLength=this.elem.querySelectorAll(".news__container").length,this.button=this.elem.querySelector(".news__button"),this.showCount=2}return _createClass(t,[{key:"hideNews",value:function(){for(var e=this.showCount;e<this.newsLength;e++)this.news[e].classList.remove("news__container--active");this.elem.classList.remove("news--active"),this.button.textContent="показать все"}},{key:"showNews",value:function(){for(var e=this.showCount;e<this.newsLength;e++)this.news[e].classList.add("news__container--active");this.elem.classList.add("news--active"),this.button.textContent="скрыть"}},{key:"init",value:function(){var t=this;this.button.addEventListener("click",function(e){e.preventDefault(),t.elem.classList.contains("news--active")?t.hideNews():t.showNews()})}}]),t}();if(document.querySelector(".news")){var news=new News({elem:document.querySelector(".news")});news.init()}var LoginMenu=function(){function t(e){_classCallCheck(this,t),this.elem=e.elem,this.btnLogin=e.login,this.btnCancel=this.elem.querySelector(".login-menu__cancel")}return _createClass(t,[{key:"showLoginMenu",value:function(){this.elem.classList.remove("login-menu--hidden"),this.elem.classList.add("login-menu--active"),body.classList.add("active-modal-menu")}},{key:"closeLoginMenu",value:function(){this.elem.classList.add("login-menu--hidden"),this.elem.classList.remove("login-menu--active"),body.classList.remove("active-modal-menu")}},{key:"onBtnLoginClick",value:function(e){e.preventDefault(),this.showLoginMenu()}},{key:"onBtnCancelClick",value:function(){this.closeLoginMenu()}},{key:"onEscPressKeydown",value:function(e){this.elem.classList.contains("login-menu--active")&&27===e.keyCode&&this.closeLoginMenu()}},{key:"init",value:function(){var t=this;document.addEventListener("keydown",function(e){t.onEscPressKeydown(e)}),this.btnLogin.addEventListener("click",function(e){return t.onBtnLoginClick(e)}),this.btnCancel.addEventListener("click",function(){return t.onBtnCancelClick()})}}]),t}(),loginMenu=new LoginMenu({elem:document.querySelector(".login-menu"),login:document.querySelector(".nav-main__login")});loginMenu.init();