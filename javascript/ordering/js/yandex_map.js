let init = () => {
    yMap = new ymaps.Map('map', {
        center: [54.19411253, 37.61373915],
        zoom: 18
    });

    myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: 'Point',
            coordinates: [0, 0]
        },
        properties: {
            hintContent: '',
            balloonContent: ''
        },
    }, {
        draggable: true,
        hideIconOnBalloonOpen: false
    });

    myGeoObject.events.add('dragend', (e) => {
        myGeoObject.properties['_data'].balloonContent = e.get('target').geometry.getCoordinates();
        myGeoObject.properties['_data'].hintContent = e.get('target').geometry.getCoordinates();
        myGeoObject.balloon.open();
    });

    yMap.events.add('click', (e) => {
        myGeoObject.geometry['_coordinates'] = e.get('coords');
        document.getElementById('map').firstElementChild.value = myGeoObject.geometry['_coordinates']
        myGeoObject.properties['_data'].balloonContent = e.get('coords');
        myGeoObject.properties['_data'].hintContent = e.get('coords');
        yMap.geoObjects.add(myGeoObject);
        myGeoObject.balloon.open();
    });
};

ymaps.ready(init);

