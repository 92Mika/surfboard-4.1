let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [59.935274, 30.312388],
        zoom: 11,
        controls: []
    });
    const coords = [
        [55.80, 37.30],
        [55.80, 37.40],
        [55.70, 37.30],
        [55.70, 37.40]
    ];

    const myCollection = new ymaps.GeobjectCollection({},{
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: "./img/icons/marker.svg",
        iconImageSize: [46, 57],
        iconImageOffset: [-35, -52]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);