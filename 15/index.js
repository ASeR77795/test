import { Category } from "./entities/Category.js";
import { Shop } from "./entities/Shop.js";
import { Good } from "./entities/Good.js";
const data = {
  categories: [
    new Category("Laptops", 1, [1, 2, 3, 4, 5, 6]),
    new Category("Tablets", 2, [7, 8, 9, 10, 11]),
    new Category("Monitors", 3, [12, 13]),
    new Category("Gaming", 4, [14, 15]),
  ],
  goods: [
    new Good(
      1,
      "Apple Macbook Air 13",
      "40000",
      'Экран 13.3" Retina (2560x1600) WQXGA, глянцевый / Apple M1 / RAM 8 ГБ / SSD 256 ГБ / Apple M1 Graphics / Wi-Fi / Bluetooth / macOS Big Sur / 1.29 кг / серый',
      "https://content1.rozetka.com.ua/goods/images/big/144249716.jpg"
    ),
    new Good(
      2,
      "Ноутбук HP Laptop 15s-fq5000ua",
      "27000",
      "Экран 15.6” IPS (1920x1080) Full HD, матовый / Intel Core i3-1215U (3.3 - 4.4 ГГц) / RAM 16 ГБ / SSD 512 ГБ / Intel UHD Graphics / без ОД / Wi-Fi / Bluetooth / веб-камера / DOS / 1.69 кг / синий с серебристым",
      "https://content1.rozetka.com.ua/goods/images/big/325403897.jpg"
    ),
    new Good(
      3,
      "Ноутбук ASUS Laptop X515EA-BQ2066",
      "19000",
      'Экран 15.6" IPS (1920x1080) Full HD, матовый / Intel Core i3-1115G4 (3.0 - 4.1 ГГц) / RAM 12 ГБ / SSD 512 ГБ / Intel UHD Graphics / без ОД / Wi-Fi / Bluetooth / веб-камера / без ОС / 1.8 кг / серый',
      "https://content.rozetka.com.ua/goods/images/big/275056537.jpg"
    ),
    new Good(
      4,
      "Ноутбук ASUS TUF Gaming F15",
      "33000",
      'Экран 15.6" IPS (1920x1080) Full HD 144 Гц, матовый / Intel Core i5-10300H (2.5 - 4.5 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.3 кг / черный / рюкзак',
      "https://content.rozetka.com.ua/goods/images/big/315016995.jpg"
    ),
    new Good(
      5,
      'Apple MacBook Air 13.6" M2',
      "56000",
      `
      Authorized Reseller
      RAM 8GB
      SSD 256GB
      8 cores
      Подробнее о товаре`,
      "https://content.rozetka.com.ua/goods/images/big/269257598.jpg"
    ),
    new Good(
      6,
      "Ноутбук Lenovo IdeaPad 3 15IAU7",
      "16000",
      'Экран 15.6" IPS (1920x1080) Full HD, матовый / Intel Core i3-1215U (3.3 - 4.4 ГГц) / RAM 8 ГБ / SSD 512 ГБ / Intel UHD Graphics / без ОД / Wi-Fi / Bluetooth / веб-камера / без ОС / 1.63 кг / серый',
      "https://content1.rozetka.com.ua/goods/images/big/329136209.jpg"
    ),
    new Good(
      7,
      "Планшет Lenovo Tab M7 (3rd Gen)",
      "5000",
      'Экран 7" IPS (1024х600) MultiTouch / MediaTek MT8766 (2.0 ГГц) / RAM 2 ГБ / 32 ГБ встроенной памяти + microSD / 3G / 4G / Wi-Fi / Bluetooth 5.0 / основная камера 2 Мп, фронтальная - 2 Мп / Android 11 (Go edition) / 236.9 г / серый',
      "https://content2.rozetka.com.ua/goods/images/big/236596949.jpg"
    ),
    new Good(
      8,
      "Планшет Apple iPad 10.2",
      "12000",
      'Экран 10.2" IPS (2160x1620) MultiTouch / Apple A13 Bionic (2.65 ГГц) / 64 ГБ встроенной памяти / Wi-Fi / Bluetooth 4.2 / основная камера 8 Мп, фронтальная - 12 Мп / iPadOS 15 / 487 г / серый космос',
      "https://content2.rozetka.com.ua/goods/images/big/224009737.jpg"
    ),
    new Good(
      9,
      "Планшет Samsung Galaxy Tab A8",
      "7500",
      'Экран 10.5" (1920x1200) MultiTouch / Unisoc Tiger T618 (2.0 ГГц) / RAM 3 ГБ / 32 ГБ встроенной памяти + microSD / Wi-Fi / Bluetooth 5.0 / основная камера: 8 Мп, фронтальная - 5 Мп / GPS / ГЛОНАСС / Android 13/ 508 г / серый',
      "https://content.rozetka.com.ua/goods/images/big/247715734.jpg"
    ),
    new Good(
      10,
      "Планшет Apple iPad Pro 11",
      "41000",
      'кран 11" Liquid Retina (2388x1668) MultiTouch / Apple M2 / 128 ГБ встроенной памяти / Wi-Fi / Bluetooth 5.3 / основная двойная камера 12 Мп + 10 Мп, фронтальная - 12 Мп / iPadOS 16 / 466 г / космический серый',
      "https://content.rozetka.com.ua/goods/images/big/301701223.jpg"
    ),
    new Good(
      11,
      "Планшет Oscal Pad 60",
      "4000",
      'Экран 10.1" IPS (1280x800) MultiTouch / Rockchip RK3326S (1.5 ГГц) / RAM 3 ГБ / 64 ГБ встроенной памяти + microSD / Wi-Fi / Bluetooth / основная камера 5 Мп / фронтальная - 2 Мп / Android 12 / 537 г / синий',
      "https://content2.rozetka.com.ua/goods/images/big/334121154.jpg"
    ),
    new Good(
      12,
      'Монитор 23.8" AOC 24G2SAE/BK',
      "6300",
      `Диагональ дисплея
          23.8"
          Максимальное разрешение дисплея
          1920x1080 (FullHD)
          Время реакции матрицы
          1 ms (MPRT), 4 ms (GTG)
          Яркость дисплея
          350 кд/м²
          Тип матрицы
          VA
          Контрастность дисплея
          1000:1
          Особенности
          "Безрамочный" (Сinema screen)
          Flicker-Free`,
      "https://content.rozetka.com.ua/goods/images/big/300747657.jpg"
    ),
    new Good(
      13,
      'Монитор 28" Samsung Odyssey G7 ',
      "20000",
      `Диагональ дисплея
      28"
      Максимальное разрешение дисплея
      3840x2160 (4K UltraHD)
      Время реакции матрицы
      1 мс
      Яркость дисплея
      400 кд/м2
      Тип матрицы
      IPS
      Контрастность дисплея
      1000:1 (Typ)
      Особенности
      "Безрамочный" (Сinema screen)
      Bluetooth
      Flicker-Free
      Smart TV
      USB-концентратор
      Wi-Fi
      Поворотный экран (Pivot)
      Регулировка по высоте`,
      "https://content.rozetka.com.ua/goods/images/big/322631323.jpg"
    ),
    new Good(
      14,
      "Игровая приставка PS5 PlayStation 5",
      "23000",
      `Процессор
            8-ядерный x86-64 AMD Ryzen Zen 2 (Частота: до 3.5 ГГц)
            Оперативная память
            GDDR6 16 ГБ`,
      "https://content1.rozetka.com.ua/goods/images/big/134042269.jpg"
    ),
    new Good(
      15,
      "Игровая консоль Valve Steam Deck 256 GB",
      "34000",
      `Процессор
        AMD Zen 2 4c/8t, 2.4 – 3.5 ГГц
        Оперативная память
        16 ГБ LPDDR5`,
      "https://content.rozetka.com.ua/goods/images/big/322355780.jpg"
    ),
  ],
};
const shop = new Shop(data);
shop.init();
