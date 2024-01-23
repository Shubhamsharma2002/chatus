const multer = require('multer');

let storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'uploads')
    },
    filename:function(req, file, cb){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})




module.exports = storage = multer({storage:storage});