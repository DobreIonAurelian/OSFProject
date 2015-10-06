var express = require('express');
var router = express.Router();
var appdatacat= require('../Db/categories.json');
var appdataprod= require('../Db/products (2).json');

/* GET home page. */

router.get('/', function(req, res, next) {
	var mygender=[];
	for (var a=0;a<appdatacat.gender.length;a++){
		mygender=mygender.concat(appdatacat.gender[a]);
	}
  res.render('index', {
			title: 'Home',
			universal: mygender
			});
});
/* Get home page with selected gender */
router.get('/:genderid', function(req, res, next) {
	var mygender=[];
	for (var a=0;a<appdatacat.gender.length;a++){
		if (appdatacat.gender[a].id == req.params.genderid){
		mygender=mygender.concat(appdatacat.gender[a]);
		}
	}
  res.render('index', {
			title: 'Products by gender',
			universal: mygender,
			});
});

router.get('/:genderid/:categoryid', function(req, res, next) {
	var mycategory=[];

	for (var a=0;a<appdatacat.gender.length;a++){
		if (appdatacat.gender[a].id == req.params.genderid){
				for (var b=0;b<appdatacat.gender[a].categories.length;b++){
				if (appdatacat.gender[a].categories[b].id == req.params.categoryid){
					mycategory=mycategory.concat(appdatacat.gender[a].categories[b]);
				}
			}
		}
	}
	
	
  res.render('category', {
			title: 'Products by category',
			universal: mycategory
			});
});

router.get('/:genderid/:categoryid/:subcategoryid', function(req, res, next) {
	var myproducts=[];

	for (var a=0;a<appdataprod.Products.length;a++){
		if (appdataprod.Products[a].primary_category_id == req.params.subcategoryid){
				myproducts=myproducts.concat(appdataprod.Products[a]);
				
		}
	}
	
	
  res.render('productlist', {
			title: 'Products list',
			universal: myproducts
			});
});

router.get('/:genderid/:categoryid/:subcategoryid/:productid', function(req, res, next) {
	var myproducts=[];

	for (var a=0;a<appdataprod.Products.length;a++){
		if (appdataprod.Products[a].id == req.params.productid){
				myproducts=myproducts.concat(appdataprod.Products[a]);
				
		}
	}
	
	
  res.render('product', {
			title: 'Product',
			universal: myproducts
			});
});

router.get('/:genderid/:categoryid/:subcategoryid/:productid/:currencyid', function(req, res, next) {
	var myproducts=[];
	var moneda="";
	for (var a=0;a<appdataprod.Products.length;a++){
		if (appdataprod.Products[a].id == req.params.productid){

				myproducts=myproducts.concat(appdataprod.Products[a]);
				moneda=req.params.currencyid.substring(9,12);
		}
	}
	
	
  res.render('product', {
			title: 'Product',
			universal: myproducts,
			moneda:moneda
			});
});



module.exports = router;
