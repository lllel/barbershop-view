"use strict";

(function () {
  // const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  // const PHOTO_MAX_WIDTH = '250';
  //
  // let fileInputs = document.querySelectorAll('input[type="file"]');
  // let avatarPreview = document.querySelector('.notice__preview img');
  // let photoPreview = document.querySelector('.form__photo-container');
  //
  // let imageInserting = {
  //   'avatar': function (imageSource) {
  //     avatarPreview.src = imageSource;
  //   },
  //   'images': function (imageSource) {
  //     let image = document.createElement('img');
  //
  //     image.src = imageSource;
  //     image.width = PHOTO_MAX_WIDTH;
  //     photoPreview.appendChild(image);
  //   }
  // };
  //
  // let onInputChange = function (evt) {
  //   let file = evt.target.files[0];
  //   let fileName = file.name;
  //
  //   let isTypeCorrect = FILE_TYPES.some(function (type) {
  //     let regEx = new RegExp('.+\\.' + type);
  //
  //     return regEx.test(fileName.toLowerCase());
  //   });
  //
  //   if (isTypeCorrect) {
  //     let reader = new FileReader();
  //
  //     reader.addEventListener('load', function () {
  //       imageInserting[evt.target.id](reader.result);
  //     });
  //
  //     reader.readAsDataURL(file);
  //   }
  // };
  //
  // fileInputs[0].name = 'avatar';
  // fileInputs[1].name = 'images';
  //
  // fileInputs.forEach(function (input) {
  //   input.accept = '.gif, .jpg, .jpeg, .png';
  //   input.addEventListener('change', onInputChange);
  // });
})();