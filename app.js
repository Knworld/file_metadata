var express = require('express');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

var app = express();

app.use(express.static(__dirname + '/uploads'));

app.post('/uploads', upload.single('fileupload'), function(req, res, next){
    console.log('server upload ' + req.file.size + " " + req.file.mimetype);
    res.json({size: req.file.size + ' bytes', type: req.file.mimetype});
});

app.listen(process.env.PORT || 8080, function(){});