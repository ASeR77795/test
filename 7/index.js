function getImageDimensions(imageUrls) {
  return Promise.all(
    imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          resolve({ url: url, width: img.width, height: img.height });
        };
        img.onerror = () => {
          reject(`Ошибка загрузки изображения: ${url}`);
        };
        img.src = url;
      });
    })
  );
}

// Пример использования:
const urls = [
  "https://example.com/image1.jpg",
  "https://example.com/image2.jpg",
  "https://example.com/image3.jpg",
];
const urls2 = [
  "https://img3.akspic.ru/previews/7/4/2/8/6/168247/168247-kosti_3d-igra_v_kosti_3d-azartnaya_igra-pitevaya_igra-kazino-500x.jpg",
  "https://wallpapershome.ru/images/pages/pic_v/21485.jpg",
  "https://klike.net/uploads/posts/2022-07/1658294080_1.jpg",
];
getImageDimensions(urls2)
  .then((images) => {
    console.log(images);
    // [{url: 'https://example.com/image1.jpg', width: 500, height: 300},
    //  {url: 'https://example.com/image2.jpg', width: 800, height: 600},
    //  {url: 'https://example.com/image3.jpg', width: 200, height: 150}]
  })
  .catch((error) => {
    console.error(error);
  });
