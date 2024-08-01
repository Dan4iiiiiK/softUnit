function init() {
    let map = new ymaps.Map('map', {
        center:[55.7912330756217,37.527970855248704],
        zoom: 15,
    });

    let placemark = new ymaps.Placemark([55.79128143324989,37.527370040429396], {
        balloonContent:`
        <div class="balloon">
        <h2 class="balloon__h3">Принесите устройство лично</h2>
        <div class="balloon__svg">
        <svg class="svg__M" width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.7879 12.0442L15.0271 0L11.0001 7.04074L6.98927 0L2.2122 12.0442H0.810059V13.8696H8.01643V12.0442H6.94036L7.98382 9.0454L11.0001 14L14.0163 9.0454L15.0598 12.0442H13.9837V13.8696H21.1901V12.0442H19.7879Z" fill="#717D96"/>
        </svg> Московская
        </div>
        <div class="balloon__text">
        <p class="balloon__p1">Ходынский б-р, 4<br> 1 этаж, сервисный центр<br> Digi-keys.</p>
        <p class="balloon__p2">Вс–Чт с 10:00 до 22:00;<br>Пт–Сб с 10:00 до 23:00</p>
        </div>
        <button class="balloon__button pointer">Связаться с нами</button>
    </div>
        `,
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../icons/map.png',
        iconImageSize: [32, 32],
        iconImageOffset: [-5, -10],
    })

    // map.geoObjects.add(placemark)
    map.geoObjects.add(placemark)
    placemark.balloon.open()
}


ymaps.ready(init);


function init1() {
    let map = new ymaps.Map('address-map', {
        center:[55.7912330756217,37.527970855248704],
        zoom: 15,
    });

    let placemark1 = new ymaps.Placemark([55.79128143324989,37.527370040429396], {
        balloonContent:`
        <div class="balloon">
        <h2 class="balloon__h3">Принесите устройство лично</h2>
        <div class="balloon__svg">
        <svg class="svg__M" width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.7879 12.0442L15.0271 0L11.0001 7.04074L6.98927 0L2.2122 12.0442H0.810059V13.8696H8.01643V12.0442H6.94036L7.98382 9.0454L11.0001 14L14.0163 9.0454L15.0598 12.0442H13.9837V13.8696H21.1901V12.0442H19.7879Z" fill="#717D96"/>
        </svg> Московская
        </div>
        <div class="balloon__text">
        <p class="balloon__p1">Ходынский б-р, 4<br> 1 этаж, сервисный центр<br> Digi-keys.</p>
        <p class="balloon__p2">Вс–Чт с 10:00 до 22:00;<br>Пт–Сб с 10:00 до 23:00</p>
        </div>
        <button class="balloon__button pointer">Связаться с нами</button>
    </div>
        `,
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../icons/map.png',
        iconImageSize: [32, 32],
        iconImageOffset: [-5, -10],
    })

    // map.geoObjects.add(placemark)
    map.geoObjects.add(placemark1)
    placemark1.balloon.open()
}


ymaps.ready(init1);