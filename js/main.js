//var str='<table class="tg"><tr><td>TTTT11</td><td>fotofot</td></tr><tr><td colspan="2">Lorem Lorem</td></tr></table>';




   var str='<table class="tg"> <tr> <th class="tg-yw4l">  <img src="/img/en.jpg" alt="альтернативный текст"></th> <th class="tg-yw4l"> I am BoBO</th> </tr> <tr> <td class="tg-2zyn" colspan="2">Lorem Lorem Lorem</td> </tr> </table>';
/*   var myMap;
   var myPlacemark;

   var mainData=null;
   var mainArr=null;

   
var coords = [
    [56.023, 36.988],
    [56.025, 36.981],
    [56.020, 36.981],
    [56.021, 36.983],
    [56.027, 36.987]
];
var dataarr=[str,str,str,str,str];*/
//var textRigth="Lorem Lorem Ribt</br><strong>Текст Strong</strong>";
//var img='img/en.jpg';
//var textDown="Lorem Down Down Lorem Down</br><strong>Текст Down Strong</strong>";
 //str='<table class="tg"> <tr> <th class="tg-yw4l">  <img src="'+img+'" alt="альтернативный текст"></th> <th class="tg-yw4l"> '+textRigth+'</th> </tr> <tr> <td class="tg-2zyn" colspan="2">'+textDown+'</td> </tr> </table>';
//json
var jsonObj=  {
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
                "balloonContent": fillTable('img/en.jpg',"Мультимодальный Контейнерный Сервис","Генеральный директор: Шабалин Г. В.<br/> Адрес: 119049, Москва,<br/> 4-й Добрынинский пер., вл. 8, офис 201<br/> Телефон/факс: +7 (495) 981-98-93<br/> Эл. почта: info@mcs.su"),
                "clusterCaption": "Мультимодальный Контейнерный Сервис»",
        "hintContent": "Москва"
      }
    },
    {
      "type": "Feature",
      "id": 1,
      "geometry": {
        "type": "Point",
        "coordinates": [56.87205827, 60.51504500]
      },
      "properties": {
        "balloonContent": fillTable('img/en.jpg',"Филиал Мультимодальный Контейнерный Сервис","Директор филиала: Бакаева Ю. А.<br/> Адрес: 620050, г. Екатеринбург,<br/> ул. Маневровая, дом 9, офис 302<br/> Телефон/факс: +7 (343) 287-48-24, +7 (908) 912 51 88<br/> Эл. почта: ubakaeva@mcs.su"),

        "clusterCaption": "Филиал «Мультимодальный Контейнерный Сервис»",
        "hintContent": "Екатеринбург"
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
        "balloonContent": fillTable('img/en.jpg',"Филиал Мультимодальный Контейнерный Сервис","Директор филиала: Чернышева Т. Г.<br/> Адрес: 680000, г. Хабаровск, ул. Комсомольская, 79 литера «А»,<br/> офис 305 (здание гостиницы «Саппоро»)<br/> Телефон/факс: +7 (914) 203-76-46; +7 (4212) 30-40-62,<br/> +7 (4212)- 24-28-10<br/> Эл. почта: сhernysheva@mcs.su"),

        "clusterCaption": "Филиал «Мультимодальный Контейнерный Сервис»",
        "hintContent": "Хабаровск"
      }
    }
    ,
    {
      "type": "Feature",
      "id": 3,
      "geometry": {
        "type": "Point",
        "coordinates": [44.72429580, 37.77413950]
      },
      "properties": {
        "balloonContent": fillTable('img/en.jpg',"Филиаил ООО «Мультимодальный Контейнерный Сервис»","Директор филиала: Чепелев В. В.<br/> Адрес: 353900 Краснодарский край,<br/> г. Новороссийск, ул. Леднева, 5, оф. 301<br/> Телефон/факс: +7 (8617) 605982, 605983<br/> Эл. почта: Chepelev@mcs.su"),

        "clusterCaption": "Филиаил ООО «Мультимодальный Контейнерный Сервис»",
        "hintContent": "Новороссийск"
      }
    }, 
{
      "type": "Feature",
      "id": 4,
      "geometry": {
        "type": "Point",
        "coordinates": [42.72930530, 133.08601150]
      },
      "properties": {
        "balloonContent": fillTable('img/en.jpg',"ООО «ВэдТрансСервис»","Директор Восточного офиса: Рябоконев Е. А.<br/> Адрес: 692941, Приморский край,<br/> пос. Врангель-1, ул. Внутрипортовая 19, офис 4<br/> Телефоны: +7 (4236) 665-134, 665-137<br/> Эл. почта: lopatina-vts@vpnet.ru"),

        "clusterCaption": "ООО «ВэдТрансСервис»",
        "hintContent": "Пос. Врангель"
      }
    }
  ]
};

//--------test zone




 
  var op=  {
      "type": "Feature",
      "id": 1,
      "geometry": {
        "type": "Point",
        "coordinates": []
      },
      "properties": {
        "balloonContent": fillTable('img/en.jpg',"",""),

        "clusterCaption": "",
        "hintContent": ""
      }
    }
 // -------test zone




    function init (ymaps) {
    	// take curent location
        myMap = new ymaps.Map("map", {
            center: [55.87, 37.66],
            zoom: 10
        });



var objectManager = new ymaps.ObjectManager({
      // Использовать кластеризацию.
      clusterize: true
    });

//jQuery.getJSON(jsonObj, function (json) {
  objectManager.add(jsonObj);  
//});


myMap.geoObjects.add(objectManager);

/*var myClusterer = new ymaps.Clusterer();
myClusterer.add(myGeoObjects);
myMap.geoObjects.add(jsonObj);*/
      
    }


     function fillTable(img,textRigth,textDown){
var res= '<table class="tg"> <tr> <th class="tg-yw4l">  <img src="'+img+'" alt="альтернативный текст"></th> <th class="tg-yw4l"> '+textRigth+'</th> </tr> <tr> <td class="tg-2zyn" colspan="2">'+textDown+'</td> </tr> </table>';
return res;

     }

    function createPopUp(arr,data){
      mainArr=arr;
     mainData=data;
         

    }




