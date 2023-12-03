const express = require('express');
const router = express.Router();
const { read, list, create, update, remove, login, authen } = require('../controllers/contrller');
const { listcar, readcar, updatecar, createcar, removecar } = require('../controllers/car');
const { createreservetion, readreservetion, listreservetion, updatereservetion, removereservetion } = require('../controllers/resevertion');

router.get('/member', list);
router.get('/member/:id', read);
router.get('/Homecustomer/:id', read);
router.post('/create', create);
router.post('/login',login)
router.post('/authen',authen)
router.put('/Customer/:id', update);
router.delete('/member/:id', remove);
//CAR
router.get('/car', listcar);
router.get('/car/:id', readcar);
router.put('/carupdate/:id', updatecar);
router.post('/carcreate', createcar);
router.delete('/carremove/:id', removecar);
//reservetion
router.post('/createreservetion', createreservetion);
router.get('/readreservetion/:id', readreservetion);
router.get('/listreservetion', listreservetion);
router.put('/updatereservetion', updatereservetion);
router.delete('/removereservetion/:id', removereservetion);

module.exports = router;