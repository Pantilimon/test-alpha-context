ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.751574, 37.573856], // Координаты центра карты (например, Москва)
        zoom: 10, // Уровень масштабирования
        controls: [] // Убираем все элементы управления
    });

    // Оставляем только нужные элементы управления (если нужно)
    // myMap.controls.add('zoomControl'); // Добавляем элемент управления масштабом
    // myMap.controls.add('typeSelector'); // Добавляем переключатель типов карты
    // и т.д.

    // Добавляем метку на карту (опционально)
    var myPlacemark = new ymaps.Placemark([55.751574, 37.573856], {
        hintContent: 'Москва!',
        balloonContent: 'Столица России'
    });

    myMap.geoObjects.add(myPlacemark);
}