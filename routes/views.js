import { Router } from "express";

const router = Router();

router.get('/', function(req, res){
    res.render('pages/index');
});

router.get('/index', function(req, res){
    res.render('pages/index');
});

router.get('/contacto', function(req, res){
    res.render('pages/contacto');
});

router.get('/sobrenos', function(req, res){
    res.render('pages/sobrenos');
});

router.get('/login', function(req, res){
    res.render('pages/login');
})

router.get('/register', function(req, res){
    res.render('pages/register');
})

// ADMINISTRADOR

router.get('/adminprod', function(req, res){
    res.render('pages/adminprod');
})
export default router;