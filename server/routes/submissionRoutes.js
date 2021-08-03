const express = require ('express')
const submissionsController = require('../controllers/submissions/index')
const router = express.Router()



// Get All Submissions
    router.get('/',submissionsController.submissions_index)

// Get Single submissions
    router.get('/:id',submissionsController.submissions_return_single)

// Create
    router.post('/new',submissionsController.submissions_new)

// Export
    router.get('/export/wp/:id',submissionsController.submissions_export)
