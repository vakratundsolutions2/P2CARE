var express = require('express');
var router = express.Router();
const inquaryController = require('../controller/inquary')
const userController = require('../controller/user');
const { isAdmin } = require('../middleware/authMidleware');

//AddComments
router.post("/addcomment", inquaryController.addComment);

//GetAllComment
// router.get('/allcomment', userController.CHECKJWT, isAdmin, inquaryController.allComment);
router.get('/allcomment', inquaryController.allComment);

// UpdateComment
// router.put('/editcomment/:id', userController.CHECKJWT, isAdmin, inquaryController.editComment);
router.put('/editcomment/:id', inquaryController.editComment);

// DeleteComment
// router.put('/deletecomment/:id', userController.CHECKJWT, isAdmin, inquaryController.editComment);
router.delete('/deletecomment/:id', inquaryController.deleteComment);

// SearchComment
// router.put('/searchcomment', userController.CHECKJWT, isAdmin, inquaryController.searchComment);
router.get('/searchcomment', inquaryController.searchComment);
// SearchComment
// router.put('/searchcomment', userController.CHECKJWT, isAdmin, inquaryController.searchComment);
router.get("/getcomment/:id", inquaryController.getComment);

module.exports = router;
