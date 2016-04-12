//var str='<table class="tg"><tr><td>TTTT11</td><td>fotofot</td></tr><tr><td colspan="2">Lorem Lorem</td></tr></table>';

//ymaps.ready(init);

 var adr=' Мультимодальный Контейнерный Сервис<br/> +7(495) 981-98-93<br/> info@mcs.su<br/> www.mcs.su';
adr="";
var smallImage='s.png';
var smallSize=[18,26];
var bigImage='b.png';
var bigsize=[35,55];
var logo='<img src="logo.png" alt="logo">'

var jsn=  {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": 0,
      "geometry": {
        "type": "Point",
        "coordinates": [55.72753128, 37.61691650]
      },
      "properties": {
                "balloonContent": fillTable(logo,"Мультимодальный контейнерный сервис","119049, Москва, 4-ый Добрынинский пер., вл.8, офис 201<br> Тел./факс: .+7(495) 981-98-93<br> email: info@mcs.su"),
                "clusterCaption": "Мультимодальный Контейнерный Сервис»",
        "hintContent": "Москва"
      }
    },{
      "type": "Feature",
      "id": 1,
      "geometry": {
        "type": "Point",
        "coordinates": [55.63740278, 37.63606850]
      },
      "properties": {
                "balloonContent": fillTable(logo,"Дивизион \"Автоколонна\" ООО \"МКС\" ","Адрес: 115516, Москва, Тарный проезд д11. Офис 315.<br> Тел: +7(495)926-79-66<br> email: avtomcs@mcs.su"),
                "clusterCaption": "Дивизион \"Автоколонна\" ООО \"МКС\" ",
        "hintContent": "Москва"
      }
    },
    {
      "type": "Feature",
      "id": 2,
      "geometry": {
        "type": "Point",
        "coordinates": [48.47373080, 135.05828950]
      },
      "properties": {
                "balloonContent": fillTable(logo,"Филиал г.Хабаровск "," Директор филиала: Чернышева Татьяна<br> 680000, г Хабаровск, ул Комсомольская, дом 79, лит А, офис 305(здание гостиницы \"Саппоро\")<br> Тел/факс: +7(4212)30-40-62<br> Эл. Почта: Chernysheva@mcs.su"),
                "clusterCaption": "Филиал г.Хабаровск ",
        "hintContent": "Хабаровск "
      }
    },
    {
      "type": "Feature",
      "id": 3,
      "geometry": {
        "type": "Point",
        "coordinates": [56.87205827, 60.51504500]
      },
      "properties": {
                "balloonContent": fillTable(logo,"Филиал г.Екатеринбург ","Директор филиала: Бакаева Юлия<br> 620050 г.Екатеринбург, ул.Маневровая, дом 9, офис 302.<br> Тел/факс: +7 (343)287-48-24<br> Эл. Почта: ubakaeva@mcs.su"),
                "clusterCaption": "Филиал г.Екатеринбург  ",
        "hintContent": "Екатеринбург  "
      }
    },
     {
      "type": "Feature",
      "id": 4,
      "geometry": {
        "type": "Point",
        "coordinates": [44.72187473, 37.76655350]
      },
      "properties": {
                "balloonContent": fillTable(logo,"Филиал г.Новороссийск  ","Представитель: Ляшик Игорь<br> Тел. + 7 (918)499-17-77<br> Тел + 7 (988)321-47-47<br> Эл. Почта: lyashik@mcs.su"),
                "clusterCaption": "Филиал г.Новороссийск  ",
        "hintContent": "Новороссийск "
      }
    },

     {
      "type": "Feature",
      "id": 5,
      "geometry": {
        "type": "Point",
        "coordinates": [59.91815364, 30.30557800]
      },
      "properties": {
                "balloonContent": fillTable(logo,"Филиал г.Санкт-Петербург ","Представитель: Ясев Евгений<br> Тел +7 (911)279-41-04<br> Эл. Почта: Yasev@mcs.su"),
                "clusterCaption": "Филиал г.Санкт-Петербург ",
        "hintContent": "Санкт-Петербург  "
      }
    },
    {
      "type": "Feature",
      "id": 6,
      "geometry": {
        "type": "Point",
        "coordinates": [31.24454820, 121.47460350]
      },
      "properties": {
                "balloonContent": fillTable(logo,"Представительство г.Шанхай (КНР) ","Представитель: Кузина Александра<br> Тел (8621)77-43-57<br> Эл. Почта: kuzina@mcs.su"),
                "clusterCaption": "Представительство г.Шанхай (КНР) ",
        "hintContent": "Шанхай (КНР) "
      }
    },
     {
      "type": "Feature",
      "id": 6,
      "geometry": {
        "type": "Point",
        "coordinates": [31.00789345, 121.41654990]
      },
      "properties": {
                "balloonContent": fillTable(logo,"Представительство Китай ","Honrus Shipping (China) Co., Ltd.<br> Unit L, 17/Fl., International Shipping & Finance Building,<br> 720 Pudong Ave., Shanghai, 200120, P.R.China<br> Tel: 86 21 5036-7917<br> Fax: 86 21 5186-2626<br> E-mail: marketing@honrus.com"),
                "clusterCaption": "Представительство Китай ",
        "hintContent": "Китай  "
      }
    },
       {
      "type": "Feature",
      "id": 7,
      "geometry": {
        "type": "Point",
        "coordinates": [31.21997954, 121.39320398]
      },
      "properties": {
                "balloonContent": fillTable(logo,"Представительство Китай ","Trans Shine Int\"l Forwarding Co.,LTD<br> 3103 Rm, CBD Living and Scene, Building 4 Unit 2, No. 109<br> Shandong RD, Qingdao, China 266001<br> TEL : 0086-532-5567 1961/2/3/4/5<br> FAX : 0086-532-5567 1969<br> PIC - Mr. Alan Jiang<br> E-mail: alanjiang@transshine.com"),
                "clusterCaption": "Представительство Китай ",
        "hintContent": "Китай  "
      }
    },
      {
      "type": "Feature",
      "id": 8,
      "geometry": {
        "type": "Point",
        "coordinates": [35.90716401, 127.09641800]
      },
      "properties": {
                "balloonContent": fillTable(logo,"Представительство Корея ","CIS Logistics Co.,Ltd.<br> Tel: 82-2-725-1773~4; Fax: 82-2-725-1779, 1780<br> PIC: Mr.Eom<br> Tel: 82-2-3276-2004/5; Fax: 82-2-3276-2006<br> Mobile: 82-10-4541-0965<br> Эл. Почта: dseom@cislogis.com"),
                "clusterCaption": "Представительство Корея ",
        "hintContent": "Корея   "
      }
    },
      {
      "type": "Feature",
      "id": 9,
      "geometry": {
        "type": "Point",
        "coordinates": [24.16030596, 120.06570350]
      },
      "properties": {
                "balloonContent": fillTable(logo,"Представительство Тайвань  ","MAYTRANS INTERNATIONAL CORP.<br> 26-6 NO. 31 HAI-PIEN ROAD KAOHSIUNG, TAIWAN R.O.C.<br> Tel.: 886-7 336 2189<br> PIC: Mr. FORD KOU<br> Эл. Почта: fordk@maytrans.com.tw"),
                "clusterCaption": "Представительство Тайвань ",
        "hintContent": "Тайвань "
      }
    },
   
   
    
  ]
};

//  test zone

//119049, Москва, 4-ый Добрынинский пер., вл.8, офис 201<br> Тел./факс: .+7(495) 981-98-93<br> email: info@mcs.su 
//Адрес: 115516, Москва, Тарный проезд д11. Офис 315.<br> Тел: +7(495)926-79-66<br> email: avtomcs@mcs.su
// Директор филиала: Чернышева Татьяна<br> 680000, г Хабаровск, ул Комсомольская, дом 79, лит А, офис 305(здание гостиницы "Саппоро")<br> Тел/факс: +7(4212)30-40-62<br> Эл. Почта: Chernysheva@mcs.su
//Директор филиала: Бакаева Юлия<br> 620050 г.Екатеринбург, ул.Маневровая, дом 9, офис 302.<br> Тел/факс: +7 (343)287-48-24<br> Эл. Почта: ubakaeva@mcs.su
//Представитель: Ляшик Игорь<br> Тел. + 7 (918)499-17-77<br> Тел + 7 (988)321-47-47<br> Эл. Почта: lyashik@mcs.su
//Представитель: Ясев Евгений<br> Тел +7 (911)279-41-04<br> Эл. Почта: Yasev@mcs.su
// Представитель: Кузина Александра<br> Тел (8621)77-43-57<br> Эл. Почта: kuzina@mcs.su

//Honrus Shipping (China) Co., Ltd.<br> Unit L, 17/Fl., International Shipping & Finance Building,<br> 720 Pudong Ave., Shanghai, 200120, P.R.China<br> Tel: 86 21 5036-7917<br> Fax: 86 21 5186-2626<br> E-mail: marketing@honrus.com


//ans Shine Int"l Forwarding Co.,LTD<br> 3103 Rm, CBD Living and Scene, Building 4 Unit 2, No. 109<br> Shandong RD, Qingdao, China 266001<br> TEL : 0086-532-5567 1961/2/3/4/5<br> FAX : 0086-532-5567 1969<br> PIC - Mr. Alan Jiang<br> E-mail: alanjiang@transshine.com
 
//CIS Logistics Co.,Ltd.<br> Tel: 82-2-725-1773~4; Fax: 82-2-725-1779, 1780<br> PIC: Mr.Eom<br> Tel: 82-2-3276-2004/5; Fax: 82-2-3276-2006<br> Mobile: 82-10-4541-0965<br> Эл. Почта: dseom@cislogis.com
//MAYTRANS INTERNATIONAL CORP.<br> 26-6 NO. 31 HAI-PIEN ROAD KAOHSIUNG, TAIWAN R.O.C.<br> Tel.: 886-7 336 2189<br> PIC: Mr. FORD KOU<br> Эл. Почта: fordk@maytrans.com.tw

  var op=  {
      "type": "Feature",
      "id": 1,
      "geometry": {
        "type": "Point",
        "coordinates": []
      },
      "properties": {
        "balloonContent": fillTable(logo,"Нашепредставительство",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": ""
      }
    }


//--------test zone <br/>
/*Екатеринбург
Филиал «Мультимодальный
Контейнерный Сервис»
Директор филиала: Бакаева Ю. А.
Адрес: 620050, г. Екатеринбург,
ул. Маневровая, дом 9, офис 302
Телефон/факс: +7 (343) 287-

Магадан
ООО «Неском»
Генеральный директор: Кышев С. Н.<br/> Телефоны: +7 (4132) 66-55-83, 63-05-51<br/> Эл. почта: nescom@online.magadan.su<br/>




Китай
Honrus Shipping (China) Co., Ltd.
Unit L, 17/Fl., International Shipping & Finance Building,<br/> 720 Pudong Ave., Shanghai, 200120, P.R.China<br/> Tel: 86 21 5036-7917<br/> Fax: 86 21 5186-2626<br/> E-mail: marketing@honrus.com



Trans Shine Int’l Forwarding Co.,LTD.
3103 Rm, CBD Living and Scene, Building 4 Unit 2, No. 109
Shandong RD, Qingdao, China 266001<br/> TEL : 0086-532-5567 1961/2/3/4/5<br/> FAX : 0086-532-5567 1969<br/> PIC – Mr. Alan Jiang<br/> alanjiang@transshine.com<br/>

Корея
CIS Logistics Co.,Ltd.
Tel: 82-2-725-1773~4; Fax: 82-2-725-1779, 1780<br/> PIC: Mr.Eom<br/> E-mail: dseom@cislogis.com<br/> Tel: 82-2-3276-2004/5; Fax: 82-2-3276-2006<br/> Mobile: 82-10-4541-0965

Тайвань
MAYTRANS INTERNATIONAL CORP.
26-6 NO. 31 HAI-PIEN ROAD KAOHSIUNG, TAIWAN R.O.C.<br/> Tel.: 886-7 336 2189<br/> PIC: Mr. FORD KOU<br/> E-mail: fordk@maytrans.com.tw

Таиланд
Nasa Transport Corp., Ltd.
11895/121 Phahonyothin Road<br/> Ladyao, Chatuchak, Bangkok 10900<br/> Tel.: 66 02 941 0720-8; Fax: 66 02 561 1576, 941 2396<br/> PIC – Ms. Maria Vilma Uttarapong<br/> nasabkk@nasatransport.com


Nasco Shipping Co.Ltd.
17 Soi Ramintra 55/8 Tarang,
Bangkhen Bangkok 10230, Thailand
Tel.: 66-02-347-0733 (Auto); Fax: 66-02-347-0743-4


Япония
APEX International Inc
7F1, Toyokuni bldg, 2-4-6 Shiba-Daimon, Minato-Ku, Tokyo, Japan<br/> Tel.: 81-3-5408-3588<br/> PIC: Mr. Steve Ko<br/> E-mail: steve@apexintl.co.jp


Вьетнам
HL CARGO VIETNAM
60 Le Quoc Hung Street District 4,<br/> Hochiminh City Vietnam<br/> Tel: +84 8 9406327 (ext. 117);<br/> Direct line: +84 8 826-72-46<br/> Cell. phone: +84 90 382-46-67<br/> E-mail: luu@hlcargo.com, dao1@hotmail.com


Малайзия
GULFSHIP AGENCIES SDN. BHD.
GULF PASIR GUDAN, KLANG (MALAYSIA) HEAD OFFICE<br/> NO: 22 & 22A, LORONG PERMAI 1I/KS-05<br/> TAMAN PENDAMARAN PERMAI<br/> 42000 PORT KLANG. SELANGOR, MALAYSIA<br/> Tel: 60-3-31679970 (H/L); Fax: 60-3-31679969 / 31684857<br/> E-mail: gulfship@pd.jaring.my, gulf@po.jaring.my<br/> P.I.C: MR. RAMA/BASIRUN MAMAT/MS. PUA LAN ENG<br/> MS. JANNET/R.S.KUMAR 

Индонезия

PT. Freight Liner Indonesia
Freight Express Building 3th Floor, 25th<br> Batu Ceper Raya, Jakarta, Indonesia<br> Tel.: (021)-3519088<br> PIC: Mr. Indah<br> E-mail: indah@freightlinerindo.com

Пакистан
INTEROCEAN CARGO SERVICES (PVT.) LTD.
22, West Wharf Road, Karachi – Pakistan<br/> Tel.: +92-21-32310002<br/> PIC: Mr. Mujtaba Hussain<br/> E-mail: mujtaba.hussain@umapk.com<br/>


Саудовская Аравия
K.M. HIGGI EST
AL BOGHDADEYYA WEST P.O. BOX 42507,<br/> JEDDAH 21541 SAUDI ARABIA<br/> Tel: +966 26454711<br/> PIC: Mr. Magdy Mouafy<br/> E-mail: magdi@faisal-higgi.com

Египет
DEMCO SHIPPING & LOGISTICS COMPANY S.A.E.
18 SESOSTRIS STR, P.O. BOX: 227,<br/> ALEXANDRIA 2111, EGYPT<br/> Tel : ++ 203 4874998/4876861/4834902<br/> PIC: Mr. Abouraya<br/> E-mails : demco@demcoshipping.com
  
*/

 // -------test zone

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),
   

   objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: true,
            // ObjectManager принимает те же опции, что и кластеризатор.
        })
    ,
        clusterer = new ymaps.Clusterer({
            // Зададим массив, описывающий иконки кластеров разного размера.
            clusterIcons: [{
     href: bigImage,
     size: bigsize,
     // Отступ, чтобы центр картинки совпадал с центром кластера.
     offset: [-20, -20]
 }
],
            // Эта опция отвечает за размеры кластеров.
            // В данном случае для кластеров, содержащих до 100 элементов,
            // будет показываться маленькая иконка. Для остальных - большая.
            clusterNumbers: [100],
            clusterIconContentLayout: null
        }),
        getPointData = function (index) {
            return {
                balloonContentBody: 'балун <strong>метки ' + index + '</strong>',
                clusterCaption: 'метка <strong>' + index + '</strong>'
            };
        },
        points = [
            [55.831903,37.411961], [55.763338,37.565466], [55.763338,37.565466], [55.744522,37.616378], [55.780898,37.642889], [55.793559,37.435983], [55.800584,37.675638], [55.716733,37.589988], [55.775724,37.560840], [55.822144,37.433781], [55.874170,37.669838], [55.716770,37.482338], [55.780850,37.750210], [55.810906,37.654142], [55.865386,37.713329], [55.847121,37.525797], [55.778655,37.710743], [55.623415,37.717934], [55.863193,37.737000], [55.866770,37.760113], [55.698261,37.730838], [55.633800,37.564769], [55.639996,37.539400], [55.690230,37.405853], [55.775970,37.512900], [55.775777,37.442180], [55.811814,37.440448], [55.751841,37.404853], [55.627303,37.728976], [55.816515,37.597163], [55.664352,37.689397], [55.679195,37.600961], [55.673873,37.658425], [55.681006,37.605126], [55.876327,37.431744], [55.843363,37.778445], [55.875445,37.549348], [55.662903,37.702087], [55.746099,37.434113], [55.838660,37.712326], [55.774838,37.415725], [55.871539,37.630223], [55.657037,37.571271], [55.691046,37.711026], [55.803972,37.659610], [55.616448,37.452759], [55.781329,37.442781], [55.844708,37.748870], [55.723123,37.406067], [55.858585,37.484980]
        ],
        geoObjects = []


var yourval = jQuery.parseJSON(JSON.stringify(jsn));

 

// Здесь получаем нужное свойство

//alert( yourval );
// coo
  //  console.log(yourval['features'][0].geometry.coordinates);
    // hit
//console.log(yourval['features'][0].properties.hintContent);

   for(var i = 0, len = yourval['features'].length ; i < len; i++) {
       //console.log("MAY: "+json["features"]);
    geoObjects[i]=new ymaps.Placemark(yourval['features'][i].geometry.coordinates, {
            hintContent: yourval['features'][i].properties.hintContent,
            balloonContent: yourval['features'][i].properties.balloonContent
        },
         {

            iconLayout: 'default#image',

            iconImageHref: smallImage,

//            iconImageSize: [30, 42],
   iconImageSize: smallSize,

            iconImageOffset: [-3, -42]
        });

       // geoObjects[i] = new ymaps.Placemark(points[i], getPointData(i));
    


    }




   //geoObjects[]=new 

     
//myMap.geoObjects.add(objectManager);
//objectManager.add(json);
//objectManager.add(json);  

//myMap.geoObjects.add(objectManager);


    clusterer.add(geoObjects);
    myMap.geoObjects.add(clusterer);
   // myMap.geoObjects.add(json);

   myMap.setBounds(clusterer.getBounds(), {
        checkZoomRange: true
    });
});




// Здесь парсим json
//var arr={1,2,3,45};


/*var jsn=  {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": 0,
      "geometry": {
        "type": "Point",
        "coordinates": [55.72753128, 37.61691650]


      },
      "properties": {
                "balloonContent": fillTable(logo,"Москва","Адрес: 119049, Москва,<br/> 4-й Добрынинский пер., вл. 8, офис 201<br/> Телефон/факс: +7 (495) 981-98-93<br/> Эл. почта: info@mcs.su"),
                "clusterCaption": "Мультимодальный Контейнерный Сервис»",
        "hintContent": "Москва",

      },
      "options" :{
        iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 's.png',
              iconImageSize: [50, 50]

      }
    }*/










//   старт функц
/*    function init2 (ymaps) {
    	// take curent location
        myMap = new ymaps.Map("map", {
            center: [55.87, 37.66],
            zoom: 4
        }, {
            searchControlProvider: 'yandex#search'
        }),
 clusterer = new ymaps.Clusterer({
            // Зададим массив, описывающий иконки кластеров разного размера.
            clusterIcons: [{
                href: 'images/cat.png',
                size: [40, 40],
                offset: [-20, -20]
            }],
            // Эта опция отвечает за размеры кластеров.
            // В данном случае для кластеров, содержащих до 100 элементов,
            // будет показываться маленькая иконка. Для остальных - большая.
            clusterNumbers: [100],
            clusterIconContentLayout: null
        }) ,
        objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: true,
            // ObjectManager принимает те же опции, что и кластеризатор.
            gridSize: 32
        });


//'default#image',
            // Своё изображение иконки метки.
  //          iconImageHref: 's.png',
    //          iconImageSize: [50, 50]


 //objectManager = new ymaps.ObjectManager({
      // Использовать кластеризацию.
    //  clusterize: true



  //  });
    //objectManager.objects.options.set('preset', 'islands#greenDotIcon');
     //objectManager.clusters.options.set('preset', 'default#image');
     // objectManager.clusters.options.set('iconImageHref', 's.png');
       //  objectManager.clusters.options.set('preset', 'default#image');
//objectManager.clusters.options.setClusterOptions('preset', 'islands#greenClusterIcons');


//            Для работы с сервером розкоментировать 
//jQuery.getJSON('data.json', function (json) {
 // objectManager.add(json);  
//});
//objectManager.objects.getById(1).set('preset', 'islands#greenDotIcon');
//objectManager.clusters.options.setClusterOptions('preset', 'islands#greenClusterIcons');
//myMap.geoObjects.add(objectManager);


      
    }*/

   function fillTable(img,textRigth,textDown){
var res= '<table class="tg"> <tr> <th class="tg-yw4l">'+img+'</th> <th class="tg-yw4l"> '+textRigth+'</th> </tr> <tr> <td class="tg-2zyn" colspan="2">'+textDown+'</td> </tr> </table>';
return res;

     }

 // можно делать похожую функцию
/*     function fillTable(img,textRigth,textDown){
var res= '<table class="tg"> <tr> <th class="tg-yw4l">  <img src="'+img+'" alt="альтернативный текст"></th> <th class="tg-yw4l"> '+textRigth+'</th> </tr> <tr> <td class="tg-2zyn" colspan="2">'+textDown+'</td> </tr> </table>';
return res;

     }*/



