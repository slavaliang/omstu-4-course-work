// подключение необходимых библиотек
var express = require("express");
var bodyParser = require('body-parser');
var AWS = require("aws-sdk");
const { v4: uuidv4 } = require('uuid');
var file_upload = require("express-fileupload");
var cors = require("cors");

// создание приложения
var app = express();

//подключение политики cors
app.use(cors());
// body-parser для синт.анализа тела node.js
app.use(bodyParser.json());
// file_upload для загрузки файлов
app.use(file_upload());
// создание клиента
const s3 = new AWS.S3({
    accessKeyId: 'YCAJE3kckdvGQvhiT6IFH3G0U',
    secretAccessKey: 'YCOtIhk0j_q9t1HdNHjbjuwYFE-5DB_PApSg4DeJ',
    s3ForcePathStyle: true,
    signatureVersion: 'v4',
    endpoint: new AWS.Endpoint("https://storage.yandexcloud.net")
});

// пишем, куда загружать файлы с формы
app.post('/upload', async (req, res) => {
    await s3.upload({
        Bucket:"urna",
        Body:req.files.image.data,
        Key:uuidv4()
    }).promise(); 
});

app.listen(3000, function () {
        console.log('Example app listening on port 3000!');
    });