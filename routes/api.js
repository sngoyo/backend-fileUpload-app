const express = require('express');
const router = express.Router();
const fileModel = require('./models/fileModel');
const multer = require('multer');
const path = require('path');


//Storage
const Storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
        //cb(null, file.originalname);
    }
});


const upload = multer ({
    storage: Storage
}).single('upfile');


router.post('/fileanalyse', (req, res) => {
    upload(req, res, (err) => {
        if(err) {
            console.log(err);
            return res.status(500).json({ error: 'File upload failed' });
        }
        if(!req.file) {
            console.log(req.file.filename)
            return res.json({error: 'Please send file'});
        }
        else {
            /*
            
            const imageUpload = new fileModel({
                file: req.file.buffer,
                contentType: req.file.mimetype
            });

              imageUpload.save()
                       .then(() => {
                            const { mimetype, size, filename } = req.file;
                            return res.json({'name': filename, 'type': mimetype , 'size': size });
                
                        })
                        .catch((err) => {
                            res.json({err: 'error' })
                        });          
                        */
             const { mimetype, size, filename } = req.file;
             return res.json({'name': filename, 'type': mimetype , 'size': size });
        }
    })
      
})





module.exports = router;