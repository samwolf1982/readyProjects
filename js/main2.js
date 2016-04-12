//var str='<table class="tg"><tr><td>TTTT11</td><td>fotofot</td></tr><tr><td colspan="2">Lorem Lorem</td></tr></table>';



 var adr=' Мультимодальный Контейнерный Сервис<br/> +7(495) 981-98-93<br/> info@mcs.su<br/> www.mcs.su';
adr="";

var json=  {
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
                "balloonContent": fillTable('',"Москва","Адрес: 119049, Москва,<br/> 4-й Добрынинский пер., вл. 8, офис 201<br/> Телефон/факс: +7 (495) 981-98-93<br/> Эл. почта: info@mcs.su"),
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
        "balloonContent": fillTable('',"Екатеринбург","Адрес: 620050, г. Екатеринбург,<br/> ул. Маневровая, дом 9, офис 302<br/> Телефон/факс: +7 (343) 287-48-24, +7 (908) 912 51 88<br/> Эл. почта: ubakaeva@mcs.su"),

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
        "balloonContent": fillTable('',"Хабаровск","Адрес: 680000, г. Хабаровск, ул. Комсомольская, 79 литера «А»,<br/> офис 305 (здание гостиницы «Саппоро»)<br/> Телефон/факс: +7 (914) 203-76-46; +7 (4212) 30-40-62,<br/> +7 (4212)- 24-28-10<br/> Эл. почта: сhernysheva@mcs.su"),

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
        "balloonContent": fillTable('',"Новороссийск","Адрес: 353900 Краснодарский край,<br/> г. Новороссийск, ул. Леднева, 5, оф. 301<br/> Телефон/факс: +7 (8617) 605982, 605983<br/> Эл. почта: Chepelev@mcs.su"),

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
        "balloonContent": fillTable('',"Пос. Врангель","Адрес: 692941, Приморский край,<br/> пос. Врангель-1, ул. Внутрипортовая 19, офис 4<br/> Телефоны: +7 (4236) 665-134, 665-137<br/> Эл. почта: lopatina-vts@vpnet.ru"),

        "clusterCaption": "ООО «ВэдТрансСервис»",
        "hintContent": "Пос. Врангель"
      }
    },
    {
      "type": "Feature",
      "id": 5,
      "geometry": {
        "type": "Point",
        "coordinates": [43.09747430, 131.86492250]
      },
      "properties": {
        "balloonContent": fillTable('',"Владивосток","Адрес: 690065, Россия, Приморский край,<br/> г. Владивосток, ул. Стрельникова, д. 7, офис 702<br/> Тел./факс: +7 (423) 230-10-90, 279-10-58 (доб. 111)<br/> Эл. почта: anklyuchenko@vedtransservis.com"),

        "clusterCaption": "ООО «ВэдТрансСервис»",
        "hintContent": "Владивосток"
      }
    },
    {
      "type": "Feature",
      "id": 6,
      "geometry": {
        "type": "Point",
        "coordinates": [59.57372874, 150.80383850]
      },
      "properties": {
        "balloonContent": fillTable('',"Магадан","Телефоны: +7 (4132) 66-55-83, 63-05-51<br/> Эл. почта: nescom@online.magadan.su<br/>"),

        "clusterCaption": "ООО «Неском»",
        "hintContent": "Магадан"
      }
    },
    {
      "type": "Feature",
      "id": 7,
      "geometry": {
        "type": "Point",
        "coordinates": [31.24454820, 121.47460350]
      },
      "properties": {
        "balloonContent": fillTable('',"Китай","Unit L, 17/Fl., International Shipping & Finance Building,<br/> 720 Pudong Ave., Shanghai, 200120, P.R.China<br/> Tel: 86 21 5036-7917<br/> Fax: 86 21 5186-2626<br/> E-mail: marketing@honrus.com"),

        "clusterCaption": "Honrus Shipping (China) Co., Ltd.",
        "hintContent": "Китай"
      }
    },
    {
      "type": "Feature",
      "id": 8,
      "geometry": {
        "type": "Point",
        "coordinates": [36.13733078, 120.34710100]
      },
      "properties": {
        "balloonContent": fillTable('',"Китай","Shandong RD, Qingdao, China 266001<br/> TEL : 0086-532-5567 1961/2/3/4/5<br/> FAX : 0086-532-5567 1969<br/> PIC – Mr. Alan Jiang<br/> alanjiang@transshine.com<br/>"),

        "clusterCaption": "Trans Shine Int l Forwarding Co.,LTD.",
        "hintContent": "Китай"
      }
    },
    {
      "type": "Feature",
      "id": 9,
      "geometry": {
        "type": "Point",
        "coordinates": [35.90716401, 127.09641800]
      },
      "properties": {
        "balloonContent": fillTable('',"CIS Logistics Co.,Ltd.","Tel: 82-2-725-1773~4; Fax: 82-2-725-1779, 1780<br/> PIC: Mr.Eom<br/> E-mail: dseom@cislogis.com<br/> Tel: 82-2-3276-2004/5; Fax: 82-2-3276-2006<br/> Mobile: 82-10-4541-0965"),

        "clusterCaption": "CIS Logistics Co.,Ltd.",
        "hintContent": "Корея"
      }
    },{
      "type": "Feature",
      "id": 10,
      "geometry": {
        "type": "Point",
        "coordinates": [22.63153689, 120.32434650]
      },
      "properties": {
        "balloonContent": fillTable('',"MAYTRANS INTERNATIONAL CORP.","26-6 NO. 31 HAI-PIEN ROAD KAOHSIUNG, TAIWAN R.O.C.<br/> Tel.: 886-7 336 2189<br/> PIC: Mr. FORD KOU<br/> E-mail: fordk@maytrans.com.tw"),

        "clusterCaption": "MAYTRANS INTERNATIONAL CORP.",
        "hintContent": "Тайвань"
      }
    },{
      "type": "Feature",
      "id": 11,
      "geometry": {
        "type": "Point",
        "coordinates": [13.82674125, 100.56407400]
      },
      "properties": {
        "balloonContent": fillTable('',"Nasa Transport Corp., Ltd.","11895/121 Phahonyothin Road<br/> Ladyao, Chatuchak, Bangkok 10900<br/> Tel.: 66 02 941 0720-8; Fax: 66 02 561 1576, 941 2396<br/> PIC – Ms. Maria Vilma Uttarapong<br/> nasabkk@nasatransport.com"),

        "clusterCaption": "Nasa Transport Corp., Ltd.",
        "hintContent": "Таиланд"
      }
    },{
      "type": "Feature",
      "id": 12,
      "geometry": {
        "type": "Point",
        "coordinates": [13.85329402, 100.58346400]
      },
      "properties": {
        "balloonContent": fillTable('',"Nasco Shipping Co.Ltd.",""),

        "clusterCaption": "Nasco Shipping Co.Ltd.",
        "hintContent": "Таиланд"
      }
    },{
      "type": "Feature",
      "id": 13,
      "geometry": {
        "type": "Point",
        "coordinates": [35.64229614, 139.74864500]
      },
      "properties": {
        "balloonContent": fillTable('',"APEX International Inc","7F1, Toyokuni bldg, 2-4-6 Shiba-Daimon, Minato-Ku, Tokyo, Japan<br/> Tel.: 81-3-5408-3588<br/> PIC: Mr. Steve Ko<br/> E-mail: steve@apexintl.co.jp"),

        "clusterCaption": "APEX International Inc",
        "hintContent": "Япония"
      }
    },{
      "type": "Feature",
      "id": 14,
      "geometry": {
        "type": "Point",
        "coordinates": [10.77677444, 106.66679700]
      },
      "properties": {
        "balloonContent": fillTable('',"HL CARGO VIETNAM","60 Le Quoc Hung Street District 4,<br/> Hochiminh City Vietnam<br/> Tel: +84 8 9406327 (ext. 117);<br/> Direct line: +84 8 826-72-46<br/> Cell. phone: +84 90 382-46-67<br/> E-mail: luu@hlcargo.com, dao1@hotmail.com"),

        "clusterCaption": "HL CARGO VIETNAM",
        "hintContent": "Вьетнам"
      }
    },{
      "type": "Feature",
      "id": 15,
      "geometry": {
        "type": "Point",
        "coordinates": [2.94155310, 101.30675200]
      },
      "properties": {
        "balloonContent": fillTable('',"GULFSHIP AGENCIES SDN. BHD.","GULF PASIR GUDAN, KLANG (MALAYSIA) HEAD OFFICE<br/> NO: 22 & 22A, LORONG PERMAI 1I/KS-05<br/> TAMAN PENDAMARAN PERMAI<br/> 42000 PORT KLANG. SELANGOR, MALAYSIA<br/> Tel: 60-3-31679970 (H/L); Fax: 60-3-31679969 / 31684857<br/> E-mail: gulfship@pd.jaring.my, gulf@po.jaring.my<br/> P.I.C: MR. RAMA/BASIRUN MAMAT/MS. PUA LAN ENG<br/> MS. JANNET/R.S.KUMAR"),

        "clusterCaption": "GULFSHIP AGENCIES SDN. BHD.",
        "hintContent": "Малайзия"
      }
    },{
      "type": "Feature",
      "id": 16,
      "geometry": {
        "type": "Point",
        "coordinates": [-6.23075589, 106.83004350]
      },
      "properties": {
        "balloonContent": fillTable('',"PT. Freight Liner Indonesia","Freight Express Building 3th Floor, 25th<br> Batu Ceper Raya, Jakarta, Indonesia<br> Tel.: (021)-3519088<br> PIC: Mr. Indah<br> E-mail: indah@freightlinerindo.com"),

        "clusterCaption": "PT. Freight Liner Indonesia",
        "hintContent": "Индонезия"
      }
    },{
      "type": "Feature",
      "id": 17,
      "geometry": {
        "type": "Point",
        "coordinates": [24.89616538, 66.99930500]
      },
      "properties": {
        "balloonContent": fillTable('',"INTEROCEAN CARGO SERVICES (PVT.) LTD.","22, West Wharf Road, Karachi – Pakistan<br/> Tel.: +92-21-32310002<br/> PIC: Mr. Mujtaba Hussain<br/> E-mail: mujtaba.hussain@umapk.com<br/>"),

        "clusterCaption": "INTEROCEAN CARGO SERVICES (PVT.) LTD.",
        "hintContent": "Пакистан"
      }
    },{
      "type": "Feature",
      "id": 18,
      "geometry": {
        "type": "Point",
        "coordinates": [21.52634774, 39.18618400]
      },
      "properties": {
        "balloonContent": fillTable('',"K.M. HIGGI EST","AL BOGHDADEYYA WEST P.O. BOX 42507,<br/> JEDDAH 21541 SAUDI ARABIA<br/> Tel: +966 26454711<br/> PIC: Mr. Magdy Mouafy<br/> E-mail: magdi@faisal-higgi.com"),

        "clusterCaption": "K.M. HIGGI EST",
        "hintContent": "Саудовская Аравия"
      }
    },{
      "type": "Feature",
      "id": 19,
      "geometry": {
        "type": "Point",
        "coordinates": [31.15837843, 29.87740950]
      },
      "properties": {
        "balloonContent": fillTable('',"DEMCO SHIPPING & LOGISTICS COMPANY S.A.E.","18 SESOSTRIS STR, P.O. BOX: 227,<br/> ALEXANDRIA 2111, EGYPT<br/> Tel : ++ 203 4874998/4876861/4834902<br/> PIC: Mr. Abouraya<br/> E-mails : demco@demcoshipping.com"),

        "clusterCaption": "DEMCO SHIPPING & LOGISTICS COMPANY S.A.E.",
        "hintContent": "Египет"
      }
    },{
      "type": "Feature",
      "id": 22,
      "geometry": {
        "type": "Point",
        "coordinates": [59.91815364, 30.30557800]
      },
      "properties": {
        "balloonContent": fillTable('',"Санкт-Петербург",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Санкт-Петербург"
      }
    },{
      "type": "Feature",
      "id": 23,
      "geometry": {
        "type": "Point",
        "coordinates": [60.48918502, 26.91555600]
      },
      "properties": {
        "balloonContent": fillTable('',"Котка",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Котка"
      }
    },
    {
      "type": "Feature",
      "id": 25,
      "geometry": {
        "type": "Point",
        "coordinates": [59.42511189, 24.73808900]
      },
      "properties": {
        "balloonContent": fillTable('',"Таллин",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Таллин"
      }
    },{
      "type": "Feature",
      "id": 26,
      "geometry": {
        "type": "Point",
        "coordinates": [56.97186198, 24.12718550]
      },
      "properties": {
        "balloonContent": fillTable('',"Рига",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Рига"
      }
    },{
      "type": "Feature",
      "id": 27,
      "geometry": {
        "type": "Point",
        "coordinates": [55.71620684, 21.16678750]
      },
      "properties": {
        "balloonContent": fillTable('',"Клайпеда",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Клайпеда"
      }
    },{
      "type": "Feature",
      "id": 28,
      "geometry": {
        "type": "Point",
        "coordinates": [52.08839721, 23.71065900]
      },
      "properties": {
        "balloonContent": fillTable('',"Брест",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Брест"
      }
    },{
      "type": "Feature",
      "id": 29,
      "geometry": {
        "type": "Point",
        "coordinates": [53.56520660, 9.98817000]
      },
      "properties": {
        "balloonContent": fillTable('',"Гамбург",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Гамбург"
      }
    },{
      "type": "Feature",
      "id": 30,
      "geometry": {
        "type": "Point",
        "coordinates": [51.92877420, 4.49426250]
      },
      "properties": {
        "balloonContent": fillTable('',"Роттердам",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Роттердам"
      }
    },{
      "type": "Feature",
      "id": 31,
      "geometry": {
        "type": "Point",
        "coordinates": [39.46202705, -0.35856700]
      },
      "properties": {
        "balloonContent": fillTable('',"Валенсия",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Валенсия"
      }
    },{
      "type": "Feature",
      "id": 32,
      "geometry": {
        "type": "Point",
        "coordinates": [41.39487468, 2.14961450]
      },
      "properties": {
        "balloonContent": fillTable('',"Барселона",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Барселона"
      }
    },{
      "type": "Feature",
      "id": 33,
      "geometry": {
        "type": "Point",
        "coordinates": [44.42572970, 8.89938950]
      },
      "properties": {
        "balloonContent": fillTable('',"Генуя",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Генуя"
      }
    },{
      "type": "Feature",
      "id": 34,
      "geometry": {
        "type": "Point",
        "coordinates": [41.00560400, 29.01217450]
      },
      "properties": {
        "balloonContent": fillTable('',"Стамбул",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Стамбул"
      }
    },{
      "type": "Feature",
      "id": 35,
      "geometry": {
        "type": "Point",
        "coordinates": [31.15837843, 29.87740950]
      },
      "properties": {
        "balloonContent": fillTable('',"Александрия",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Александрия"
      }
    },{
      "type": "Feature",
      "id": 36,
      "geometry": {
        "type": "Point",
        "coordinates": [31.25578472, 32.28261250]
      },
      "properties": {
        "balloonContent": fillTable('',"Порт-Саид",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Порт-Саид"
      }
    },{
      "type": "Feature",
      "id": 37,
      "geometry": {
        "type": "Point",
        "coordinates": [21.52634774, 39.18618400]
      },
      "properties": {
        "balloonContent": fillTable('',"Джидда",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Джидда"
      }
    },{
      "type": "Feature",
      "id": 38,
      "geometry": {
        "type": "Point",
        "coordinates": [24.38274110, 54.53326250]
      },
      "properties": {
        "balloonContent": fillTable('',"Абу-Даби",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Абу-Даби"
      }
    },{
      "type": "Feature",
      "id": 39,
      "geometry": {
        "type": "Point",
        "coordinates": [24.89616538, 66.99930500]
      },
      "properties": {
        "balloonContent": fillTable('',"Карачи",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Карачи"
      }
    },{
      "type": "Feature",
      "id": 40,
      "geometry": {
        "type": "Point",
        "coordinates": [19.07649222, 72.88388950]
      },
      "properties": {
        "balloonContent": fillTable('',"Мумбай",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Мумбай"
      }
    },{
      "type": "Feature",
      "id": 41,
      "geometry": {
        "type": "Point",
        "coordinates": [22.32805886, 91.81174750]
      },
      "properties": {
        "balloonContent": fillTable('',"Читагонг",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Читагонг"
      }
    },{
      "type": "Feature",
      "id": 42,
      "geometry": {
        "type": "Point",
        "coordinates": [24.97304193, 83.69585500]
      },
      "properties": {
        "balloonContent": fillTable('',"Белаван",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Белаван"
      }
    },{
      "type": "Feature",
      "id": 43,
      "geometry": {
        "type": "Point",
        "coordinates": [1.46985320, 103.85853750]
      },
      "properties": {
        "balloonContent": fillTable('',"Пасир Гуданг",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Пасир Гуданг"
      }
    },{
      "type": "Feature",
      "id": 44,
      "geometry": {
        "type": "Point",
        "coordinates": [1.34681521, 103.82461250]
      },
      "properties": {
        "balloonContent": fillTable('',"Сингапур",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Сингапур"
      }
    },{
      "type": "Feature",
      "id": 45,
      "geometry": {
        "type": "Point",
        "coordinates": [10.77677444, 106.66679700]
      },
      "properties": {
        "balloonContent": fillTable('',"Хошимин",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Хошимин"
      }
    },{
      "type": "Feature",
      "id": 46,
      "geometry": {
        "type": "Point",
        "coordinates": [22.22433606, 114.06277900]
      },
      "properties": {
        "balloonContent": fillTable('',"Гонконг",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Гонконг"
      }
    },{
      "type": "Feature",
      "id": 47,
      "geometry": {
        "type": "Point",
        "coordinates": [22.63153689, 120.32434650]
      },
      "properties": {
        "balloonContent": fillTable('',"Гаосюн",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Гаосюн"
      }
    },{
      "type": "Feature",
      "id": 48,
      "geometry": {
        "type": "Point",
        "coordinates": [31.24454820, 121.47460350]
      },
      "properties": {
        "balloonContent": fillTable('',"Шанхай",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Шанхай"
      }
    },{
      "type": "Feature",
      "id": 49,
      "geometry": {
        "type": "Point",
        "coordinates": [36.13733078, 120.34710100]
      },
      "properties": {
        "balloonContent": fillTable('',"Циндао",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Циндао"
      }
    },{
      "type": "Feature",
      "id": 50,
      "geometry": {
        "type": "Point",
        "coordinates": [35.14215504, 129.07299450]
      },
      "properties": {
        "balloonContent": fillTable('',"Пусан",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Пусан"
      }
    },{
      "type": "Feature",
      "id": 51,
      "geometry": {
        "type": "Point",
        "coordinates": [35.66544956, 139.66463450]
      },
      "properties": {
        "balloonContent": fillTable('',"Токио",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Токио"
      }
    },{
      "type": "Feature",
      "id": 52,
      "geometry": {
        "type": "Point",
        "coordinates": [42.80517188, 132.89333150]
      },
      "properties": {
        "balloonContent": fillTable('',"Находка",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Находка"
      }
    },{
      "type": "Feature",
      "id": 53,
      "geometry": {
        "type": "Point",
        "coordinates": [43.17270778, 132.02530750]
      },
      "properties": {
        "balloonContent": fillTable('',"Владивосток",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Владивосток"
      }
    },{
      "type": "Feature",
      "id": 54,
      "geometry": {
        "type": "Point",
        "coordinates": [55.91051319, 36.88431800]
      },
      "properties": {
        "balloonContent": fillTable('',"Восточный",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Восточный"
      }
    },{
      "type": "Feature",
      "id": 55,
      "geometry": {
        "type": "Point",
        "coordinates": [46.63291267, 142.78783000]
      },
      "properties": {
        "balloonContent": fillTable('',"Корсаков",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Корсаков"
      }
    },{
      "type": "Feature",
      "id": 56,
      "geometry": {
        "type": "Point",
        "coordinates": [46.96244533, 142.76096550]
      },
      "properties": {
        "balloonContent": fillTable('',"Южно-Сахалинск",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Южно-Сахалинск"
      }
    },{
      "type": "Feature",
      "id": 57,
      "geometry": {
        "type": "Point",
        "coordinates": [49.09199783, 140.27413700]
      },
      "properties": {
        "balloonContent": fillTable('',"Ванино",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Ванино"
      }
    },{
      "type": "Feature",
      "id": 58,
      "geometry": {
        "type": "Point",
        "coordinates": [50.33864197, 127.51260250]
      },
      "properties": {
        "balloonContent": fillTable('',"Благовещенск",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Благовещенск"
      }
    },{
      "type": "Feature",
      "id": 59,
      "geometry": {
        "type": "Point",
        "coordinates": [53.00637327, 158.75617450]
      },
      "properties": {
        "balloonContent": fillTable('',"Петропавловск-Камчатский",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Петропавловск-Камчатский"
      }
    },{
      "type": "Feature",
      "id": 60,
      "geometry": {
        "type": "Point",
        "coordinates": [59.57372874, 150.80383850]
      },
      "properties": {
        "balloonContent": fillTable('',"Магадан",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Магадан"
      }
    },{
      "type": "Feature",
      "id": 61,
      "geometry": {
        "type": "Point",
        "coordinates": [62.15187236, 129.79225750]
      },
      "properties": {
        "balloonContent": fillTable('',"Якутск",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Якутск"
      }
    },{
      "type": "Feature",
      "id": 62,
      "geometry": {
        "type": "Point",
        "coordinates": [58.94922545, 126.25340700]
      },
      "properties": {
        "balloonContent": fillTable('',"Томмот",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Томмот"
      }
    },{
      "type": "Feature",
      "id": 63,
      "geometry": {
        "type": "Point",
        "coordinates": [56.66976959, 124.67161300]
      },
      "properties": {
        "balloonContent": fillTable('',"Нерюнгри",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Нерюнгри"
      }
    },{
      "type": "Feature",
      "id": 64,
      "geometry": {
        "type": "Point",
        "coordinates": [56.57327118, 124.77582250]
      },
      "properties": {
        "balloonContent": fillTable('',"Беркакит",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Беркакит"
      }
    },{
      "type": "Feature",
      "id": 65,
      "geometry": {
        "type": "Point",
        "coordinates": [49.65559671, 117.33314550]
      },
      "properties": {
        "balloonContent": fillTable('',"Забайкальск",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Забайкальск"
      }
    },{
      "type": "Feature",
      "id": 66,
      "geometry": {
        "type": "Point",
        "coordinates": [52.05794291, 113.38118250]
      },
      "properties": {
        "balloonContent": fillTable('',"Чита",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Чита"
      }
    },{
      "type": "Feature",
      "id": 67,
      "geometry": {
        "type": "Point",
        "coordinates": [51.86674220, 107.68443500]
      },
      "properties": {
        "balloonContent": fillTable('',"Улан-Удэ",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Улан-Удэ"
      }
    },{
      "type": "Feature",
      "id": 68,
      "geometry": {
        "type": "Point",
        "coordinates": [52.31521151, 104.27563000]
      },
      "properties": {
        "balloonContent": fillTable('',"Иркутск",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Иркутск"
      }
    },{
      "type": "Feature",
      "id": 69,
      "geometry": {
        "type": "Point",
        "coordinates": [56.02278829, 92.89742450]
      },
      "properties": {
        "balloonContent": fillTable('',"Красноярск",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Красноярск"
      }
    },{
      "type": "Feature",
      "id": 70,
      "geometry": {
        "type": "Point",
        "coordinates": [56.50682347, 84.98203200]
      },
      "properties": {
        "balloonContent": fillTable('',"Томск",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Томск"
      }
    },{
      "type": "Feature",
      "id": 71,
      "geometry": {
        "type": "Point",
        "coordinates": [55.39662409, 86.08778600]
      },
      "properties": {
        "balloonContent": fillTable('',"Кемерово",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Кемерово"
      }
    },{
      "type": "Feature",
      "id": 72,
      "geometry": {
        "type": "Point",
        "coordinates": [55.00081759, 82.95627700]
      },
      "properties": {
        "balloonContent": fillTable('',"Новосибирск",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Новосибирск"
      }
    },{
      "type": "Feature",
      "id": 73,
      "geometry": {
        "type": "Point",
        "coordinates": [53.31841930, 83.69077100]
      },
      "properties": {
        "balloonContent": fillTable('',"Барнаул",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Барнаул"
      }
    },{
      "type": "Feature",
      "id": 74,
      "geometry": {
        "type": "Point",
        "coordinates": [52.51097315, 85.11716550]
      },
      "properties": {
        "balloonContent": fillTable('',"Бийск",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Бийск"
      }
    },{
      "type": "Feature",
      "id": 75,
      "geometry": {
        "type": "Point",
        "coordinates": [55.12276857, 73.37843000]
      },
      "properties": {
        "balloonContent": fillTable('',"Омск",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Омск"
      }
    },{
      "type": "Feature",
      "id": 76,
      "geometry": {
        "type": "Point",
        "coordinates": [57.13726821, 65.54499550]
      },
      "properties": {
        "balloonContent": fillTable('',"Тюмень",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Тюмень"
      }
    },{
      "type": "Feature",
      "id": 77,
      "geometry": {
        "type": "Point",
        "coordinates": [61.29236153, 73.42541650]
      },
      "properties": {
        "balloonContent": fillTable('',"Сургут",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Сургут"
      }
    },{
      "type": "Feature",
      "id": 78,
      "geometry": {
        "type": "Point",
        "coordinates": [55.15336244, 61.39170200]
      },
      "properties": {
        "balloonContent": fillTable('',"Челябинск",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Челябинск"
      }
    },{
      "type": "Feature",
      "id": 79,
      "geometry": {
        "type": "Point",
        "coordinates": [54.72865424, 56.03041250]
      },
      "properties": {
        "balloonContent": fillTable('',"Уфа",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Уфа"
      }
    },{
      "type": "Feature",
      "id": 80,
      "geometry": {
        "type": "Point",
        "coordinates": [55.61801337, 51.84543100]
      },
      "properties": {
        "balloonContent": fillTable('',"Нижнекамск",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Нижнекамск"
      }
    },{
      "type": "Feature",
      "id": 81,
      "geometry": {
        "type": "Point",
        "coordinates": [56.85577004, 53.20274950]
      },
      "properties": {
        "balloonContent": fillTable('',"Ижевск",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Ижевск"
      }
    },{
      "type": "Feature",
      "id": 82,
      "geometry": {
        "type": "Point",
        "coordinates": [58.02286834, 56.23002700]
      },
      "properties": {
        "balloonContent": fillTable('',"Пермь",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Пермь"
      }
    },{
      "type": "Feature",
      "id": 83,
      "geometry": {
        "type": "Point",
        "coordinates": [58.60612724, 49.64352550]
      },
      "properties": {
        "balloonContent": fillTable('',"Киров-Котласский",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Киров-Котласский"
      }
    },{
      "type": "Feature",
      "id": 84,
      "geometry": {
        "type": "Point",
        "coordinates": [55.77025877, 49.10271300]
      },
      "properties": {
        "balloonContent": fillTable('',"Казань",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Казань"
      }
    },{
      "type": "Feature",
      "id": 85,
      "geometry": {
        "type": "Point",
        "coordinates": [53.52198167, 49.48518400]
      },
      "properties": {
        "balloonContent": fillTable('',"Тольятти",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Тольятти"
      }
    },{
      "type": "Feature",
      "id": 86,
      "geometry": {
        "type": "Point",
        "coordinates": [53.32205544, 50.06791650]
      },
      "properties": {
        "balloonContent": fillTable('',"Самара",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Самара"
      }
    },{
      "type": "Feature",
      "id": 87,
      "geometry": {
        "type": "Point",
        "coordinates": [46.35931094, 48.03750850]
      },
      "properties": {
        "balloonContent": fillTable('',"Астрахань",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Астрахань"
      }
    },{
      "type": "Feature",
      "id": 88,
      "geometry": {
        "type": "Point",
        "coordinates": [48.65081500, 44.47330800]
      },
      "properties": {
        "balloonContent": fillTable('',"Волгоград",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Волгоград"
      }
    },{
      "type": "Feature",
      "id": 89,
      "geometry": {
        "type": "Point",
        "coordinates": [51.54004117, 46.00444150]
      },
      "properties": {
        "balloonContent": fillTable('',"Саратов",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Саратов"
      }
    },{
      "type": "Feature",
      "id": 90,
      "geometry": {
        "type": "Point",
        "coordinates": [53.19405474, 45.02989100]
      },
      "properties": {
        "balloonContent": fillTable('',"Пенза",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Пенза"
      }
    },{
      "type": "Feature",
      "id": 91,
      "geometry": {
        "type": "Point",
        "coordinates": [54.20097817, 45.16015550]
      },
      "properties": {
        "balloonContent": fillTable('',"Саранск",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Саранск"
      }
    },{
      "type": "Feature",
      "id": 92,
      "geometry": {
        "type": "Point",
        "coordinates": [56.30450253, 43.84012600]
      },
      "properties": {
        "balloonContent": fillTable('',"Нижний Новгород",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Нижний Новгород"
      }
    },{
      "type": "Feature",
      "id": 93,
      "geometry": {
        "type": "Point",
        "coordinates": [51.69427264, 39.33621100]
      },
      "properties": {
        "balloonContent": fillTable('',"Воронеж",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Воронеж"
      }
    },{
      "type": "Feature",
      "id": 94,
      "geometry": {
        "type": "Point",
        "coordinates": [47.25221300, 39.69359700]
      },
      "properties": {
        "balloonContent": fillTable('',"Ростов-на-Дону",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Ростов-на-Дону"
      }
    },{
      "type": "Feature",
      "id": 95,
      "geometry": {
        "type": "Point",
        "coordinates": [44.72187473, 37.76655350]
      },
      "properties": {
        "balloonContent": fillTable('',"Новороссийск",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Новороссийск"
      }
    },{
      "type": "Feature",
      "id": 96,
      "geometry": {
        "type": "Point",
        "coordinates": [34.70387863, 135.22242950]
      },
      "properties": {
        "balloonContent": fillTable('',"Кобе",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Кобе"
      }
    },{
      "type": "Feature",
      "id": 97,
      "geometry": {
        "type": "Point",
        "coordinates": [35.10949336, 136.91895600]
      },
      "properties": {
        "balloonContent": fillTable('',"Нагоя",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Нагоя"
      }
    },{
      "type": "Feature",
      "id": 98,
      "geometry": {
        "type": "Point",
        "coordinates": [41.04970006, 141.25336800]
      },
      "properties": {
        "balloonContent": fillTable('',"Иокогама",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Иокогама"
      }
    },{
      "type": "Feature",
      "id": 99,
      "geometry": {
        "type": "Point",
        "coordinates": [38.92836501, 121.59903400]
      },
      "properties": {
        "balloonContent": fillTable('',"Далянь",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Далянь"
      }
    },{
      "type": "Feature",
      "id": 100,
      "geometry": {
        "type": "Point",
        "coordinates": [39.92007156, 116.39748250]
      },
      "properties": {
        "balloonContent": fillTable('',"Пекин",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Пекин"
      }
    },{
      "type": "Feature",
      "id": 101,
      "geometry": {
        "type": "Point",
        "coordinates": [39.11494568, 117.22153000]
      },
      "properties": {
        "balloonContent": fillTable('',"Тяньцзинь",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Тяньцзинь"
      }
    },{
      "type": "Feature",
      "id": 102,
      "geometry": {
        "type": "Point",
        "coordinates": [26.06812643, 119.30942100]
      },
      "properties": {
        "balloonContent": fillTable('',"Фучжоу",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Фучжоу"
      }
    }
      ,
      {
      "type": "Feature",
      "id": 103,
      "geometry": {
        "type": "Point",
        "coordinates": [23.36188206, 116.67733450]
      },
      "properties": {
        "balloonContent": fillTable('',"Шаньтоу",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Шаньтоу"
      }}
      ,{
      "type": "Feature",
      "id": 104,
      "geometry": {
        "type": "Point",
        "coordinates": [24.45133263, 118.07933550]
      },
      "properties": {
        "balloonContent": fillTable('',"Сямынь",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Сямынь"
      }},{
      "type": "Feature",
      "id": 105,
      "geometry": {
        "type": "Point",
        "coordinates": [22.63153689, 120.32434650]
      },
      "properties": {
        "balloonContent": fillTable('',"Гаосюн",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Гаосюн"
      }},{
      "type": "Feature",
      "id": 106,
      "geometry": {
        "type": "Point",
        "coordinates": [24.15445415, 120.67091650]
      },
      "properties": {
        "balloonContent": fillTable('',"Тайчжун",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Тайчжун"
      }},{
      "type": "Feature",
      "id": 107,
      "geometry": {
        "type": "Point",
        "coordinates": [28.05983400, 83.77292200]
      },
      "properties": {
        "balloonContent": fillTable('',"Килунг",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Килунг"
      }},{
      "type": "Feature",
      "id": 108,
      "geometry": {
        "type": "Point",
        "coordinates": [23.11336337, 113.25522500]
      },
      "properties": {
        "balloonContent": fillTable('',"Гуанджоу",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Гуанджоу"
      }},{
      "type": "Feature",
      "id": 109,
      "geometry": {
        "type": "Point",
        "coordinates": [23.03706766, 113.11185850]
      },
      "properties": {
        "balloonContent": fillTable('',"Фошань",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Фошань"
      }},{
      "type": "Feature",
      "id": 110,
      "geometry": {
        "type": "Point",
        "coordinates": [25.47471594, 118.77027900]
      },
      "properties": {
        "balloonContent": fillTable('',"Чжуншань",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Чжуншань"
      }},{
      "type": "Feature",
      "id": 111,
      "geometry": {
        "type": "Point",
        "coordinates": [22.54915993, 114.10591600]
      },
      "properties": {
        "balloonContent": fillTable('',"Шеньчжень",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Шеньчжень"
      }},{
      "type": "Feature",
      "id": 112,
      "geometry": {
        "type": "Point",
        "coordinates": [22.31788735, 113.58942550]
      },
      "properties": {
        "balloonContent": fillTable('',"Чжухай",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Чжухай"
      }
    },{
      "type": "Feature",
      "id": 113,
      "geometry": {
        "type": "Point",
        "coordinates": [27.19335498, 112.47211000]
      },
      "properties": {
        "balloonContent": fillTable('',"Яньтьянь",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Яньтьянь"
      }
    },{
      "type": "Feature",
      "id": 114,
      "geometry": {
        "type": "Point",
        "coordinates": [-6.25609701, 106.80923400]
      },
      "properties": {
        "balloonContent": fillTable('',"Джакарта",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Джакарта"
      }
    },{
      "type": "Feature",
      "id": 115,
      "geometry": {
        "type": "Point",
        "coordinates": [-17.37413607, 178.05583600]
      },
      "properties": {
        "balloonContent": fillTable('',"Пенанг",adr),
            "preset": 'islands#circleIcon',
            "iconColor": '#3caa3c',

        "clusterCaption": "Наше представительство",
        "hintContent": "Пенанг"
      }
    }
    
  ]
};


  var op=  {
      "type": "Feature",
      "id": 1,
      "geometry": {
        "type": "Point",
        "coordinates": []
      },
      "properties": {
        "balloonContent": fillTable('',"Нашепредставительство",adr),
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



//   старт функц
    function init (ymaps) {
    	// take curent location
        myMap = new ymaps.Map("map", {
            center: [55.87, 37.66],
            zoom: 4
        });



var objectManager = new ymaps.ObjectManager({
      // Использовать кластеризацию.
      clusterize: true
    });



//            Для работы с сервером розкоментировать 
//jQuery.getJSON('data.json', function (json) {
  objectManager.add(json);  
//});


myMap.geoObjects.add(objectManager);


      
    }

   function fillTable(img,textRigth,textDown){
var res= '<table class="tg"> <tr> <th class="tg-yw4l">'+img+'</th> <th class="tg-yw4l"> '+textRigth+'</th> </tr> <tr> <td class="tg-2zyn" colspan="2">'+textDown+'</td> </tr> </table>';
return res;

     }

 // можно делать похожую функцию
/*     function fillTable(img,textRigth,textDown){
var res= '<table class="tg"> <tr> <th class="tg-yw4l">  <img src="'+img+'" alt="альтернативный текст"></th> <th class="tg-yw4l"> '+textRigth+'</th> </tr> <tr> <td class="tg-2zyn" colspan="2">'+textDown+'</td> </tr> </table>';
return res;

     }*/



