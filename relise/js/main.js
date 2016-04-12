 //Honrus Shipping (China) Co., Ltd.<br> Unit L, 17/Fl., International Shipping & Finance Building,<br> 720 Pudong Ave., Shanghai, 200120, P.R.China<br> Fax: 86 21 5186-2626<br> E-mail: marketing@honrus.com<br>


//Trans Shine Int'l Forwarding Co.,LTD.<br> 3103 Rm, CBD Living and Scene, Building 4 Unit 2, No. 109<br> Shandong RD, Qingdao, China 266001<br> TEL : 0086-532-5567 1961/2/3/4/5<br> FAX : 0086-532-5567 1969<br> PIC - Mr. Alan Jiang<br> E-mail: alanjiang@transshine.com


//Представитель: Ляшик Игорь<br> Тел. + 7 (918)499-17-77<br> Тел + 7 (988)321-47-47<br> Эл. Почта: lyashik@mcs.su


// путь к маленькой иконке
var smallImage='s.png'; 
var smallSize=[18,26];
// путь к большой иконке
var bigImage='b.png';
var bigsize=[35,55];
// путь к лого
var pathtologo='logo.png'
var logo='<img src="'+pathtologo+'" alt="logo">'
// переменые для описания в окнах поддежывает HTML+СSS
var moscov="Москва, 4-ый Добрынинский пер., вл.8, офис 201<br>+7(495) 981-98-93<br>info@mcs.su";
var newruss="+7(918)499-17-77<br>+7(988)321-47-47<br>lyashik@mcs.su";
var piter=" +7 (911)279-41-04<br>Yasev@mcs.su";
var newsibir="Новосибирск, ул.Маневровая, дом 9, офис 302.<br>  +7 (343)287-48-24<br>ubakaeva@mcs.su<br> ";
var ekaterin="Екатеринбург, ул.Маневровая, дом 9, офис 302.<br>  +7 (343)287-48-24<br>ubakaeva@mcs.su<br>  ";
var china=" Unit L, 17/Fl., International Shipping & Finance Building,<br> 720 Pudong Ave., Shanghai, 200120, P.R.China<br> Fax: 86 21 5186-2626<br> E-mail: marketing@honrus.com<br> <h2>Trans Shine Int'l Forwarding Co.,LTD.</h2> 3103 Rm, CBD Living and Scene, Building 4 Unit 2, No. 109<br> Shandong RD, Qingdao, China 266001<br> TEL : 0086-532-5567 1961/2/3/4/5<br> FAX : 0086-532-5567 1969<br> PIC - Mr. Alan Jiang<br> E-mail: alanjiang@transshine.com";
var habar="Хабаровск, ул Комсомольская, дом 79, лит А, офис 305(здание гостиницы \"Саппоро\")<br>  +7(4212)30-40-62<br>Chernysheva@mcs.su";

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
                "balloonContent": fillTable(logo,"Мультимодальный контейнерный сервис",moscov),
                "clusterCaption": "Мультимодальный Контейнерный Сервис»",
        "hintContent": "Москва"
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
                "balloonContent": fillTable(logo,"Филиал Новороссийск  ",newruss),
                "clusterCaption": "Филиал Новороссийск  ",
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
                "balloonContent": fillTable(logo,"Филиал Санкт-Петербург ",piter),
                "clusterCaption": "Филиал Санкт-Петербург ",
        "hintContent": "Санкт-Петербург  "
      }
    },


    {
      "type": "Feature",
      "id": 333,
      "geometry": {
        "type": "Point",
        "coordinates": [55.00081759, 82.95627700]
      },
      "properties": {
                "balloonContent": fillTable(logo,"Филиал Новосибирск ",newsibir),
                "clusterCaption": "Филиал Новосибирск  ",
        "hintContent": "Новосибирск "
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
                "balloonContent": fillTable(logo,"Филиал Екатеринбург ",ekaterin),
                "clusterCaption": "Филиал Екатеринбург  ",
        "hintContent": "Екатеринбург  "
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
                "balloonContent": fillTable(logo,
                  " Honrus Shipping (China) Co., Ltd.",china),

                "clusterCaption": "Представительство Шанхай (КНР) ",
        "hintContent": "Шанхай (КНР) "
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
                "balloonContent": fillTable(logo,"Филиал Хабаровск ",habar),
                "clusterCaption": "Филиал Хабаровск ",
        "hintContent": "Хабаровск "
      }
    }
    ,

      {
      "type": "Feature",
      "id": 8,
      "geometry": {
        "type": "Point",
        "coordinates": [35.14215504, 129.07299450]
      },
      "properties": {
                "balloonContent": fillTable(logo,"Представительство Корея <br>Пусан","CIS Logistics Co.,Ltd.<br> Tel: 82-2-725-1773~4; Fax: 82-2-725-1779, 1780<br> PIC: Mr.Eom<br> Tel: 82-2-3276-2004/5; Fax: 82-2-3276-2006<br> Mobile: 82-10-4541-0965<br>dseom@cislogis.com"),
                "clusterCaption": "Представительство Пусан ",
        "hintContent": "Корея   "
      }
    },
     
   
   
    
  ]
};

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),
   

   objectManager = new ymaps.ObjectManager({

            clusterize: true,

        })
    ,
        clusterer = new ymaps.Clusterer({

            clusterIcons: [{
     href: bigImage,
     size: bigsize,

     offset: [-20, -20]
 }
],
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



   for(var i = 0, len = yourval['features'].length ; i < len; i++) {
       
       if(i!=0){
    geoObjects[i]=new ymaps.Placemark(yourval['features'][i].geometry.coordinates, {
            hintContent: yourval['features'][i].properties.hintContent,
            balloonContent: yourval['features'][i].properties.balloonContent
        },
         {

            iconLayout: 'default#image',

            iconImageHref: smallImage,

            iconImageSize: smallSize,

            iconImageOffset: [-3, -42]
        });}
    else{
 geoObjects[i]=new ymaps.Placemark(yourval['features'][i].geometry.coordinates, {
            hintContent: yourval['features'][i].properties.hintContent,
            balloonContent: yourval['features'][i].properties.balloonContent
        },
         {

            iconLayout: 'default#image',

            iconImageHref: bigImage,

            iconImageSize: bigsize,

            iconImageOffset: [-3, -42]
        });

    }


    


    }

    clusterer.add(geoObjects);
    myMap.geoObjects.add(clusterer);
   myMap.setBounds(clusterer.getBounds(), {
        checkZoomRange: true
    });
});



   function fillTable(img,textRigth,textDown){
var res= '<table class="tg"> <tr> <th class="tg-yw4l">'+img+'</th> <th class="tg-yw4l"> '+textRigth+'</th> </tr> <tr> <td class="tg-2zyn" colspan="2">'+textDown+'</td> </tr> </table>';
//res='<table class="tg"> <tr> <td class="tg-yw4l">'+img+'</td> <td></td> </tr> <tr> <td class="tg-yw4l" colspan="2">'+textRigth+'</td> </tr> <tr> <td colspan="2" class="tg-2zyn>'+textDown+'</td></tr></table>';
res='<table class="tg"> <tr> <td class="tg-yw4l">'+img+'</td> <td></td> </tr> <tr> <td class="tg-yw4l" colspan="2">'+textRigth+'</td> </tr> <tr> <td colspan="2" class="tg-2zyn">'+textDown+'</td></tr></table>';


return res;

     }

