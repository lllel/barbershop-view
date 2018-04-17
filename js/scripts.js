'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var body = document.querySelector('body');
var navMain = document.querySelector('.nav-main');
var currentItem = document.querySelectorAll('.nav-main__link:not([href])');

navMain.classList.remove('no-js');
navMain.classList.remove('nav-main--active');

// ПОЛИФИЛЛ ДЛЯ CLOSEST
(function (ELEMENT) {
  ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;

  ELEMENT.closest = ELEMENT.closest || function closest(selector) {
    var element = this;

    while (element) {
      if (element.matches(selector)) {
        return element;
      } else {
        element = element.parentElement;
      }
    }
    return null;
  };
})(Element.prototype);

// ОТКРЫТИЕ/ЗАКРЫТИЕ МОДАЛЬНОГО МЕНЮ

var ModalMenu = function () {
  function ModalMenu(options) {
    _classCallCheck(this, ModalMenu);

    this.elem = options.elem;
    this.button = this.elem.querySelector('.nav-main__open-menu');
  }

  _createClass(ModalMenu, [{
    key: 'openMenu',
    value: function openMenu() {
      var _this = this;

      this.elem.classList.remove('nav-main--hidden');
      this.elem.classList.add('nav-main--active');
      this.elem.classList.add('animation-play');

      document.addEventListener('keydown', function (evt) {
        _this.onEscPressKeydown(evt);
      });
    }
  }, {
    key: 'closeMenu',
    value: function closeMenu() {
      var _this2 = this;

      this.elem.classList.add('nav-main--hidden');
      this.elem.classList.remove('nav-main--active');
      this.elem.classList.add('animation-play');

      document.removeEventListener('keydown', function (evt) {
        _this2.onEscPressKeydown(evt);
      });
    }
  }, {
    key: 'onEscPressKeydown',
    value: function onEscPressKeydown(evt) {
      if (evt.keyCode === 27) {
        this.closeMenu();
      }
    }
  }, {
    key: 'onButtonClick',
    value: function onButtonClick() {
      if (this.elem.classList.contains('nav-main--active')) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    }
  }, {
    key: 'init',
    value: function init() {
      var _this3 = this;

      document.addEventListener('click', function (evt) {
        if (_this3.elem.classList.contains('nav-main--active') && (!evt.target.closest('.nav-main') || evt.target.className === 'header-main__wrapper')) {
          _this3.closeMenu();
        }
      });

      this.button.addEventListener('click', function (evt) {
        _this3.onButtonClick(evt);
      });

      [].forEach.call(currentItem, function (it) {
        it.parentElement.style.display = 'flex';
      });
    }
  }]);

  return ModalMenu;
}();

var modalMenu = new ModalMenu({
  elem: document.querySelector('.nav-main')
});

modalMenu.init();

// СЛАЙДЕР REVIEW

var SliderReview = function () {
  function SliderReview(options) {
    _classCallCheck(this, SliderReview);

    this.elem = options.elem;
    this.dots = this.elem.querySelectorAll('.buttons__input');
    this.btnPrev = this.elem.querySelector('.slider-reviews__button-arrow--prev');
    this.btnNext = this.elem.querySelector('.slider-reviews__button-arrow--next');
    this.slides = this.elem.querySelectorAll('.slider-reviews__slide');
    this.slidesLength = this.slides.length - 1;
    this.last = 0;
    this.current = 0;
    this.timerId = null;
    this.timerDelay = 6000;
    // this.startTouch = null;
    // this.touch = null;
    // this.currentSlideTouch = null;
    // this.duration = null;
    // this.activeDuration = null;
  }

  _createClass(SliderReview, [{
    key: 'hideSlide',
    value: function hideSlide(num) {
      this.slides[num].classList.remove('slider-reviews__slide--active');
    }
  }, {
    key: 'showSlide',
    value: function showSlide(num) {
      this.slides[num].classList.add('slider-reviews__slide--active');
    }
  }, {
    key: 'setSlide',
    value: function setSlide(num) {
      if (num === this.current) {
        return;
      }

      this.last = this.current;
      this.current = num;
    }
  }, {
    key: 'changeSlide',
    value: function changeSlide(num) {
      this.setSlide(num);
      this.hideSlide(this.last);
      this.showSlide(num);
      this.changeDots(num);
      this.timer();
    }
  }, {
    key: 'changeDots',
    value: function changeDots(num) {
      this.dots[this.last].checked = false;
      this.dots[num].checked = true;
    }
  }, {
    key: 'timer',
    value: function timer() {
      var _this4 = this;

      clearInterval(this.timerId);

      this.timerId = setInterval(function () {
        _this4.changeSlide(_this4.next);
      }, this.timerDelay);
    }
  }, {
    key: 'init',
    value: function init() {
      var _this5 = this;

      [].forEach.call(this.dots, function (it, i) {
        it.addEventListener('click', function () {
          return _this5.changeSlide(i);
        });
      });

      this.btnPrev.addEventListener('click', function () {
        return _this5.changeSlide(_this5.prev);
      });
      this.btnNext.addEventListener('click', function () {
        return _this5.changeSlide(_this5.next);
      });

      this.timer();

      // ========================================  ДОДЕЛАТЬ ====================================================

      // this.elem.addEventListener('touchstart', (evtStart) => {
      //   this.startTouch = evtStart.targetTouches[0].clientX;
      //   this.elem.querySelector('slider-reviews__slide--active').classList.remove('slider-reviews__slide--active');
      // });
      //
      // this.elem.addEventListener('touchmove', (evtMove) => {
      //   if (evtMove.targetTouches.length === 1) {
      //     this.touch = evtMove.targetTouches[0];
      //     this.currentSlideTouch = this.elem.querySelector('slider-reviews__slide--active');
      //     this.duration = this.startTouch - this.touch;
      //     this.currentSlideTouch.style.right = this.duration + 'px';
      //   }
      // });
      //
      // this.elem.addEventListener('touchend', () => {
      //   this.elem.querySelector('slider-reviews__slide--active').classList.remove('slider-reviews__slide--active');
      //   this.currentSlideTouch.style.right = '';
      //   this.activeDuration = window.innerWidth / 3;
      //
      //   if (Math.abs(event.changedTouches[0].clientX - this.startTouch) > 20) {
      //     if (event.changedTouches[0].clientX < this.activeDuration) {
      //       this.changeSlide(this.next);
      //     } else if ((window.innerWidth - event.changedTouches[0].clientX) < this.activeDuration) {
      //       this.changeSlide(this.prev);
      //     }
      //   }
      // });

      // ==============================================================================================================
    }
  }, {
    key: 'prev',
    get: function get() {
      var prev = this.current - 1;

      if (prev < 0) {
        prev = this.slidesLength;
      }

      return prev;
    }
  }, {
    key: 'next',
    get: function get() {
      var next = this.current + 1;

      if (next > this.slidesLength) {
        next = 0;
      }

      return next;
    }
  }]);

  return SliderReview;
}();

if (document.querySelector('.slider-reviews')) {
  var sliderReview = new SliderReview({
    elem: document.querySelector('.slider-reviews')
  });

  sliderReview.init();
}

// СЛАЙДЕР DESCRIPTION

var SliderDescription = function (_SliderReview) {
  _inherits(SliderDescription, _SliderReview);

  function SliderDescription(options) {
    _classCallCheck(this, SliderDescription);

    var _this6 = _possibleConstructorReturn(this, (SliderDescription.__proto__ || Object.getPrototypeOf(SliderDescription)).call(this, options));

    _this6.slides = _this6.elem.querySelectorAll('.slider-description__slide');
    _this6.slidesLength = _this6.slides.length - 1;
    return _this6;
  }

  _createClass(SliderDescription, [{
    key: 'hideSlide',
    value: function hideSlide(num) {
      this.slides[num].classList.remove('slider-description__slide--active');
    }
  }, {
    key: 'showSlide',
    value: function showSlide(num) {
      this.slides[num].classList.add('slider-description__slide--active');
    }
  }, {
    key: 'init',
    value: function init() {
      var _this7 = this;

      [].forEach.call(this.dots, function (it, i) {
        it.addEventListener('click', function () {
          return _this7.changeSlide(i);
        });
      });

      this.timer();
    }
  }]);

  return SliderDescription;
}(SliderReview);

if (document.querySelector('.slider-description')) {
  var sliderDescription = new SliderDescription({
    elem: document.querySelector('.slider-description')
  });

  sliderDescription.init();
}

// ВЫПАДАЮЩИЙ СПИСОК NEWS

var News = function () {
  function News(options) {
    _classCallCheck(this, News);

    this.elem = options.elem;
    this.news = this.elem.querySelectorAll('.news__container');
    this.newsLength = this.elem.querySelectorAll('.news__container').length;
    this.button = this.elem.querySelector('.news__button');
    this.showCount = 2;
  }

  _createClass(News, [{
    key: 'hideNews',
    value: function hideNews() {
      for (var i = this.showCount; i < this.newsLength; i++) {
        this.news[i].classList.remove('news__container--active');
      }

      this.elem.classList.remove('news--active');
      this.button.textContent = 'показать все';
    }
  }, {
    key: 'showNews',
    value: function showNews() {
      for (var i = this.showCount; i < this.newsLength; i++) {
        this.news[i].classList.add('news__container--active');
      }

      this.elem.classList.add('news--active');
      this.button.textContent = 'скрыть';
    }
  }, {
    key: 'init',
    value: function init() {
      var _this8 = this;

      this.button.addEventListener('click', function (evt) {
        evt.preventDefault();

        if (_this8.elem.classList.contains('news--active')) {
          _this8.hideNews();
        } else {
          _this8.showNews();
        }
      });
    }
  }]);

  return News;
}();

if (document.querySelector('.news')) {
  var news = new News({
    elem: document.querySelector('.news')
  });

  news.init();
}

// ОТКРЫТИЕ/ЗАКРЫТИЕ LoginMenu

var LoginMenu = function () {
  function LoginMenu(options) {
    _classCallCheck(this, LoginMenu);

    this.elem = options.elem;
    this.btnLogin = options.login;
    this.btnCancel = this.elem.querySelector('.login-menu__cancel');
  }

  _createClass(LoginMenu, [{
    key: 'showLoginMenu',
    value: function showLoginMenu() {
      this.elem.classList.remove('login-menu--hidden');
      this.elem.classList.add('login-menu--active');
      body.classList.add('active-modal-menu');
    }
  }, {
    key: 'closeLoginMenu',
    value: function closeLoginMenu() {
      this.elem.classList.add('login-menu--hidden');
      this.elem.classList.remove('login-menu--active');
      body.classList.remove('active-modal-menu');
    }
  }, {
    key: 'onBtnLoginClick',
    value: function onBtnLoginClick(evt) {
      evt.preventDefault();

      this.showLoginMenu();
    }
  }, {
    key: 'onBtnCancelClick',
    value: function onBtnCancelClick() {
      this.closeLoginMenu();
    }
  }, {
    key: 'onEscPressKeydown',
    value: function onEscPressKeydown(evt) {
      if (this.elem.classList.contains('login-menu--active') && evt.keyCode === 27) {
        this.closeLoginMenu();
      }
    }
  }, {
    key: 'init',
    value: function init() {
      var _this9 = this;

      document.addEventListener('keydown', function (e) {
        _this9.onEscPressKeydown(e);
      });

      this.btnLogin.addEventListener('click', function (evt) {
        return _this9.onBtnLoginClick(evt);
      });
      this.btnCancel.addEventListener('click', function () {
        return _this9.onBtnCancelClick();
      });
    }
  }]);

  return LoginMenu;
}();

var loginMenu = new LoginMenu({
  elem: document.querySelector('.login-menu'),
  login: document.querySelector('.nav-main__login')
});

loginMenu.init();