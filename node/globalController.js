var bodyParser = require('body-parser');
var fs = require("fs");
const fetch = require('node-fetch');
const request = require('request');

// Arquivo que controla as rotas, e os dados que vão para as rotas

module.exports = function(app){

  app.get('/', function(req, res, next){
    
    

    
    const url = "http://localhost:1337/Inicio";
    
    request.get(url, (error, response, body) => {
      let inicio = JSON.parse(body); // guarda o conteudo de artigos na variavel
      

      
            
      
      
      res.render('index', {inicio: inicio}); // renderização
        
   });
  });
  



    app.get('/index', function(req, res, next){

      res.render('index', {}); // renderização
    });
         
          
  
  app.get('/sobre', function(req, res, next){
    

    res.render('sobre', {}); // renderização, note q ta renderizando sem precisar do strapi
  });


  app.get('/contato', function(req, res, next){
    

    res.render('contato', {}); // renderização, note q ta renderizando sem precisar do strapi
  });


  app.get('/primeiro', function(req, res, next){


    res.render('primeiro', {}); // renderização,
  });


  app.get('/equipe', function(req, res, next){


    res.render('equipe', {}); // renderização
  });


  app.get('/servico', function(req, res, next){


    res.render('servico', {}); // renderização
  });


  app.get('/portifolio', function(req, res, next){


    res.render('portifolio', {}); // renderização
  });


  app.get('/blog', function(req, res, next){


    res.render('blog', {}); // renderização
  });

  
} 
