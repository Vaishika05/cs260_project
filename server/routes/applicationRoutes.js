//applicationRoutes.js
const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');
const multer = require('multer');

// Define storage engine and destination for uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()) // Define file name (you can customize this)
    }
});

// Initialize Multer with configuration
const upload = multer({ storage: storage });

// Routes
router.post('/createApplication', applicationController.createApplication);
router.get('/getApplicationDetails/:app_number', applicationController.getApplication);
router.post('/addPersonalDetails', upload.fields([{ name: 'user_image', maxCount: 1 }]), applicationController.addPersonalDetails);
router.get('/getPersonalDetails/:app_number', applicationController.getPersonalDetails);

module.exports = router;

  