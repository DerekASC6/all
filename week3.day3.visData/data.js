// // $.ajax({
// //     url: 'https://randomuser.me/api/?results=10',
// //     dataType: 'json',
// //     success: function(data) {
// //       console.log(data);
// //     }
// //   });

//   let data = {
//     "results": [{
//             "gender": "female"
//             , "name": {
//                     "title": "mrs"
//                     , "first": "afet"
//                     , "last": "karadaş"
//             }
//             , "location": {
//                     "street": "5270 bağdat cd"
//                     , "city": "edirne"
//                     , "state": "giresun"
//                     , "postcode": 33254
//                     , "coordinates": {
//                             "latitude": "74.7357"
//                             , "longitude": "14.1688"
//                     }
//                     , "timezone": {
//                             "offset": "+1:00"
//                             , "description": "Brussels, Copenhagen, Madrid, Paris"
//                     }
//             }
//             , "email": "afet.karadaş@example.com"
//             , "login": {
//                     "uuid": "07978d45-4420-43c8-96f8-f25ea042047d"
//                     , "username": "orangezebra242"
//                     , "password": "whitey"
//                     , "salt": "rjdnXF2A"
//                     , "md5": "2f091144189d91d7d8536b1f394bf3ba"
//                     , "sha1": "13cb90b2c1334c1e4dd4dd69dd315a13b34d9fb1"
//                     , "sha256": "fbdbb4e80f110791d4981583eb9b9dcba1e024d4da1a87fb9de9518a504b5b78"
//             }
//             , "dob": {
//                     "date": "1961-10-18T08:15:04Z"
//                     , "age": 57
//             }
//             , "registered": {
//                     "date": "2017-01-08T01:07:27Z"
//                     , "age": 2
//             }
//             , "phone": "(021)-024-8908"
//             , "cell": "(514)-761-0364"
//             , "id": {
//                     "name": ""
//                     , "value": null
//             }
//             , "picture": {
//                     "large": "https://randomuser.me/api/portraits/women/64.jpg"
//                     , "medium": "https://randomuser.me/api/portraits/med/women/64.jpg"
//                     , "thumbnail": "https://randomuser.me/api/portraits/thumb/women/64.jpg"
//             }
//             , "nat": "TR"
//     }, {
//             "gender": "male"
//             , "name": {
//                     "title": "mr"
//                     , "first": "tomothy"
//                     , "last": "banks"
//             }
//             , "location": {
//                     "street": "8673 locust rd"
//                     , "city": "wagga wagga"
//                     , "state": "queensland"
//                     , "postcode": 377
//                     , "coordinates": {
//                             "latitude": "84.4821"
//                             , "longitude": "-174.0907"
//                     }
//                     , "timezone": {
//                             "offset": "+3:00"
//                             , "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
//                     }
//             }
//             , "email": "tomothy.banks@example.com"
//             , "login": {
//                     "uuid": "d826c911-5a70-44e0-867e-7ebf0e821ed2"
//                     , "username": "blueladybug915"
//                     , "password": "stinky"
//                     , "salt": "T7a4Gkh4"
//                     , "md5": "24c9f759686f2f2037de8d2956eb9df5"
//                     , "sha1": "96ec2a3aa87846feb711f2dbf5a9893a89758dde"
//                     , "sha256": "026b4ca0a461ac15a8ded37a181da56094b2e5bfbdd648768e68c8c336042b74"
//             }
//             , "dob": {
//                     "date": "1971-04-20T06:40:08Z"
//                     , "age": 48
//             }
//             , "registered": {
//                     "date": "2017-06-28T04:37:48Z"
//                     , "age": 2
//             }
//             , "phone": "06-9443-8352"
//             , "cell": "0454-964-530"
//             , "id": {
//                     "name": "TFN"
//                     , "value": "484865126"
//             }
//             , "picture": {
//                     "large": "https://randomuser.me/api/portraits/men/85.jpg"
//                     , "medium": "https://randomuser.me/api/portraits/med/men/85.jpg"
//                     , "thumbnail": "https://randomuser.me/api/portraits/thumb/men/85.jpg"
//             }
//             , "nat": "AU"
//     }, {
//             "gender": "female"
//             , "name": {
//                     "title": "miss"
//                     , "first": "kristiane"
//                     , "last": "tsegay"
//             }
//             , "location": {
//                     "street": "voksenkollveien 2983"
//                     , "city": "svinndal"
//                     , "state": "aust-agder"
//                     , "postcode": "0857"
//                     , "coordinates": {
//                             "latitude": "-2.3501"
//                             , "longitude": "146.3581"
//                     }
//                     , "timezone": {
//                             "offset": "+11:00"
//                             , "description": "Magadan, Solomon Islands, New Caledonia"
//                     }
//             }
//             , "email": "kristiane.tsegay@example.com"
//             , "login": {
//                     "uuid": "8fdaf765-e584-497f-9696-07d7da924a0d"
//                     , "username": "redwolf272"
//                     , "password": "simona"
//                     , "salt": "UM1fpQ2X"
//                     , "md5": "e5670766e7051e8d1e449ca1b479b3c5"
//                     , "sha1": "e2cd53efd52dba965c70d531c2d07b43af9770c3"
//                     , "sha256": "a2b40e3b472f78c95426a374380f0fa3df8c1bfe75394666eb76bfe0c3d4578b"
//             }
//             , "dob": {
//                     "date": "1947-06-08T10:17:14Z"
//                     , "age": 72
//             }
//             , "registered": {
//                     "date": "2008-01-31T23:07:27Z"
//                     , "age": 11
//             }
//             , "phone": "65701788"
//             , "cell": "40698645"
//             , "id": {
//                     "name": "FN"
//                     , "value": "08064733541"
//             }
//             , "picture": {
//                     "large": "https://randomuser.me/api/portraits/women/26.jpg"
//                     , "medium": "https://randomuser.me/api/portraits/med/women/26.jpg"
//                     , "thumbnail": "https://randomuser.me/api/portraits/thumb/women/26.jpg"
//             }
//             , "nat": "NO"
//     }, {
//             "gender": "female"
//             , "name": {
//                     "title": "miss"
//                     , "first": "fatma"
//                     , "last": "aybar"
//             }
//             , "location": {
//                     "street": "1419 kushimoto sk"
//                     , "city": "kayseri"
//                     , "state": "mersin"
//                     , "postcode": 49626
//                     , "coordinates": {
//                             "latitude": "57.1089"
//                             , "longitude": "134.6585"
//                     }
//                     , "timezone": {
//                             "offset": "-5:00"
//                             , "description": "Eastern Time (US & Canada), Bogota, Lima"
//                     }
//             }
//             , "email": "fatma.aybar@example.com"
//             , "login": {
//                     "uuid": "8e4f5fc0-1b9d-414b-9cda-f305498b03bd"
//                     , "username": "heavyostrich197"
//                     , "password": "5555"
//                     , "salt": "9Ddg3gli"
//                     , "md5": "de837c75594241933bd33c8288d2261a"
//                     , "sha1": "4c2f2b56dbd558562e8063445dc12d4dc485f860"
//                     , "sha256": "8ffe8237c21fe4c24b241c7db6c78e9480307fd0c63b6be3854bcf511fd856e6"
//             }
//             , "dob": {
//                     "date": "1987-12-23T00:22:25Z"
//                     , "age": 31
//             }
//             , "registered": {
//                     "date": "2010-02-04T20:57:06Z"
//                     , "age": 9
//             }
//             , "phone": "(103)-685-1839"
//             , "cell": "(205)-668-3208"
//             , "id": {
//                     "name": ""
//                     , "value": null
//             }
//             , "picture": {
//                     "large": "https://randomuser.me/api/portraits/women/30.jpg"
//                     , "medium": "https://randomuser.me/api/portraits/med/women/30.jpg"
//                     , "thumbnail": "https://randomuser.me/api/portraits/thumb/women/30.jpg"
//             }
//             , "nat": "TR"
//     }, {
//             "gender": "male"
//             , "name": {
//                     "title": "mr"
//                     , "first": "leevi"
//                     , "last": "wuori"
//             }
//             , "location": {
//                     "street": "6984 pyynikintie"
//                     , "city": "mänttä"
//                     , "state": "tavastia proper"
//                     , "postcode": 65355
//                     , "coordinates": {
//                             "latitude": "58.4771"
//                             , "longitude": "-176.0687"
//                     }
//                     , "timezone": {
//                             "offset": "+9:00"
//                             , "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
//                     }
//             }
//             , "email": "leevi.wuori@example.com"
//             , "login": {
//                     "uuid": "0aeca685-41e9-4720-b237-67f701e12207"
//                     , "username": "heavymeercat435"
//                     , "password": "crusher"
//                     , "salt": "sPWXXXkR"
//                     , "md5": "08460c0b9b010acac08bd5c81b935ec3"
//                     , "sha1": "40f273118c1e9cc6ad08c9d31e9b1f9eda0ecfd9"
//                     , "sha256": "979f4f3bb9783446ad5d3d3eb57e81bf15df4b605b91daa42972b40dd84aed42"
//             }
//             , "dob": {
//                     "date": "1960-12-04T07:20:07Z"
//                     , "age": 58
//             }
//             , "registered": {
//                     "date": "2015-01-25T17:35:22Z"
//                     , "age": 4
//             }
//             , "phone": "09-827-301"
//             , "cell": "043-392-12-28"
//             , "id": {
//                     "name": "HETU"
//                     , "value": "NaNNA091undefined"
//             }
//             , "picture": {
//                     "large": "https://randomuser.me/api/portraits/men/78.jpg"
//                     , "medium": "https://randomuser.me/api/portraits/med/men/78.jpg"
//                     , "thumbnail": "https://randomuser.me/api/portraits/thumb/men/78.jpg"
//             }
//             , "nat": "FI"
//     }]
//     , "info": {
//             "seed": "45c2a8d32461431d"
//             , "results": 5
//             , "page": 1
//             , "version": "1.2"
//     }
// }
// let body= $("body");
// let firstPerson= document.createElement("p");
// firstPerson.innerText=data.results[0].name["first"];
// body.append(firstPerson);

//   console.log(data.results[0].name["first"].[name]);
fetch("https://randomuser.me/api?results=25")
        .then(function(response){
                return response.json();
        })
        .then(function(myJson){
        for(let i=0; i< myJson.results.length;i++){
        console.log(myJson.results[i].name["first"]);

        let title=myJson.results[i].name["title"];
        let first=myJson.results[i].name["first"];
        let last=myJson.results[i].name["last"];
        let gender= myJson.results[i].gender;
        let email= myJson.results[i].email;

        let tr= document.createElement("tr");
        tr.innerHTML=
        "<th>"+ title +"</th>"+
        "<th>"+ first + "</th>"+
        "<th>"+ last + "</th>"+
        "<th>" + gender +"</th>"+
        "<th>"+ email + "</th>";

        document.querySelector("table").appendChild(tr);
        }
});