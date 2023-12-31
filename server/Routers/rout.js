const express = require('express');
const router = express.Router();
const { read, list, create, update, remove, login, authen, updatepositionCustomer, updatepositionEmployee, readusername } = require('../controllers/contrller');
const { listcar, readcar, updatecar, createcar, removecar, readcarusername } = require('../controllers/car');
const { createreservetion, readreservetion, listreservetion, updatereservetion, removereservetion, readreservetionId } = require('../controllers/resevertion');
const { readstockcar, liststockcar, createstockcarpart, updatstockcar, removestockcarpart, DeleteStock } = require('../controllers/stockcar');
const { createservice, readservice, listservice, updatesevice, removeservice, readidservice, updatestatusservice, readusernameservice } = require('../controllers/service');

router.get('/member', list);
router.get('/member/:id', read);
router.get('/readusername/:id', readusername);
router.get('/Homecustomer/:id', read);
router.post('/create', create);
router.post('/login',login)
router.post('/authen',authen)
router.put('/Customer/:id', update);
router.put('/positionCustomer/:id', updatepositionCustomer);
router.put('/positionEmployee/:id', updatepositionEmployee);
router.delete('/member/:id', remove);
//CAR
router.get('/car', listcar);
router.get('/carusername/:username', readcarusername);
router.get('/car/:id', readcar);
router.put('/carupdate/:id', updatecar);
router.post('/carcreate', createcar);
router.delete('/carremove/:id', removecar);
//reservetion
router.post('/createreservetion', createreservetion);
router.get('/readreservetion/:id', readreservetion);
router.get('/readreservetionId/:id', readreservetionId);
router.get('/listreservetion', listreservetion);
router.put('/updatereservetion', updatereservetion);
router.delete('/removereservetion/:id', removereservetion);
//stockpart
router.post('/createstock', createstockcarpart);
router.get('/stock/:id', readstockcar);
router.get('/stock', liststockcar);
router.put('/updatestock', updatstockcar);
router.put('/Deletestock', DeleteStock);
router.delete('/removestock/:id', removestockcarpart);

//service
router.post('/createservice', createservice);
router.get('/service/:id', readservice);
router.get('/readusernameservice/:id', readusernameservice);
router.get('/readidervice/:id', readidservice);
router.get('/service', listservice);
router.put('/updateservice', updatesevice);
router.put('/updatestatusservice', updatestatusservice);
router.delete('/removeservice/:id', removeservice);
module.exports = router;