var express = require('express');
var router = express.Router();
const userController = require('../controller/user')
const asignController = require('../controller/asigndoctor');
const { isAdmin } = require('../middleware/authMidleware');

//asigndoctor
router.post(
  "/add",
  userController.CHECKJWT,
  
  asignController.asignDoctor
);

//allasigndoctor
router.get('/allasign',asignController.allAsign);
//singleasigndoctor
router.get("/getasign/:id", asignController.getAsign);

//editasigndoctor
router.put('/editasign/:id',userController.CHECKJWT,asignController.editAsign);

//deleteasigndoctor
router.delete('/deleteasign/:id',userController.CHECKJWT,asignController.deleteAsign);


module.exports = router;
