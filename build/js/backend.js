"use strict";

(function () {
  // const SERVER_URL = '#';
  // const DELAY_TIME = 10000;
  // const STATUS_OK = 200;
  //
  // let ErrorCode = {
  //   '400': 'Неверный запрос',
  //   '401': 'Необходима авторизация',
  //   '403': 'Доступ запрещен',
  //   '404': 'Запрашиваемые данные не найдены',
  //   '500': 'Внутренняя ошибка сервера',
  //   'default': 'Неизвестная ошибка'
  // };
  //
  // let load = function (onLoad, onError) {
  //   let xhr = new XMLHttpRequest();
  //
  //   xhr.type = 'json';
  //   xhr.timeout = DELAY_TIME;
  //
  //   xhr.addEventListener('load', function () {
  //     if (xhr.status === STATUS_OK) {
  //       onLoad(xhr.response);
  //
  //     } else {
  //       onError(ErrorCode[xhr.status] || ErrorCode['default']);
  //     }
  //   });
  //
  //   xhr.addEventListener('timeout', function () {
  //     onError('Превышено время ожидания сервера');
  //   });
  //
  //   xhr.addEventListener('error', function () {
  //     onError('Произошла ошибка соединения');
  //   });
  //
  //   xhr.open('GET', SERVER_URL + '/data');
  //   xhr.send();
  // };
  //
  // let save = function (data, onLoad, onError) {
  //   let xhr = new XMLHttpRequest();
  //
  //   xhr.type = 'json';
  //
  //   xhr.addEventListener('load', function () {
  //     onLoad(xhr.response);
  //   });
  //
  //   xhr.addEventListener('error', function () {
  //     onError('Произошла ошибка отправки данных: ' + xhr.status + ' ' + xhr.statusText);
  //   });
  //
  //   xhr.open('POST', SERVER_URL);
  //   xhr.send(data);
  // };
  //
  // window.backend = {
  //   load,
  //   save
  // };
})();