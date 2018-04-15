"use strict";

(function () {
  // let ButtonKeyCode = {
  //   ESC: 27,
  //   ENTER: 13
  // };
  //
  // let lastTimeout = null;
  //
  // function isEscPressEvent(evt, cb) {
  //   if (evt.keyCode === ButtonKeyCode.ESC) {
  //
  //     cb();
  //   }
  // }
  //
  // function isEnterPressEvent(evt, cb) {
  //   if (evt.keyCode === ButtonKeyCode.ENTER) {
  //
  //     cb();
  //   }
  // }
  //
  // let ReadError = function (message, cause) {
  //   this.name = 'ReadError';
  //   this.message = message;
  //   this.cause = cause;
  //   this.stack = cause.stack;
  // };
  //
  // let typeError = {
  //   'URIError': function (err) {
  //     throw new ReadError('Ошибка в URI', err);
  //   },
  //
  //   'RangeError': function (err) {
  //     throw new ReadError('Переданный параметр недосягаем', err);
  //   },
  //
  //   'ReferenceError': function (err) {
  //     throw new ReadError('Ошибка разименовании неверной ссылки', err);
  //   },
  //
  //   'SyntaxError': function (err) {
  //     throw new ReadError('Синтаксическая ошибка', err);
  //   },
  //
  //   'TypeError': function (err) {
  //     throw new ReadError('Переменная или параметр неправильного типа', err);
  //   },
  //
  //   'default': function (err) {
  //     throw err;
  //   }
  // };
  //
  // function numDecline(num, nominative, genitiveSingular, genitivePlural) {
  //   if (num > 10 && (Math.round((num % 100) / 10) === 1)) {
  //     return genitivePlural;
  //
  //   } else {
  //     switch (num % 10) {
  //     case 1:
  //       return nominative;
  //
  //     case 2:
  //     case 3:
  //     case 4:
  //       return genitiveSingular;
  //
  //     default:
  //       return genitivePlural;
  //     }
  //   }
  // }
  //
  // let getRandomNumber = function (min, max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // };
  //
  // let getRandomArrayCopy = function (arr, arrLen) {
  //   let baseArrCopy = arr.slice(0);
  //   let newArray = [];
  //   let newItem;
  //
  //   if (arrLen >= arr.length) {
  //     return arr;
  //   }
  //
  //   while (newArray.length < arrLen) {
  //     newItem = arr[Math.floor(getRandomNumber(0, baseArrCopy.length - 1))];
  //     if (newArray.indexOf(newItem) !== -1) {
  //       continue;
  //
  //     } else {
  //       newArray.push(newItem);
  //     }
  //   }
  //
  //   return newArray;
  // };
  //
  // let createElemsFragment = function (arr, cb) {
  //   let elemsFragment = document.createDocumentFragment();
  //
  //   [].forEach.call(arr, function (el, i) {
  //     elemsFragment.appendChild(cb(el, i));
  //   });
  //
  //   return elemsFragment;
  // };
  //
  // let debounce = function (cb, ms) {
  //   if (lastTimeout) {
  //     clearTimeout(lastTimeout);
  //   }
  //
  //   lastTimeout = setTimeout(function () {
  //     cb();
  //   }, ms);
  // };
  //
  // window.util = {
  //   isEscPressEvent,
  //   isEnterPressEvent,
  //   numDecline,
  //   createElemsFragment,
  //   getRandomArrayCopy,
  //   debounce
  // };
})();