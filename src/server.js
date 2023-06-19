const fastify = require ("fastify");
const path =require ('path');
const swagger = require ("@fastify/swagger");
//const loginRoute = require('./login/')
const userRoute = require('./app/routes');
const cors = require('@fastify/cors');
const helmet = require('@fastify/helmet');
const underPressure = require('@fastify/under-pressure');
const autoload = require('@fastify/autoload');
const swaggerconfig = () => {
  return {
    routePrefix: '/user/public/documentation',
    exposeRoute: true,
    swagger:{
      info: {
        title: ' User Management Service ',
        description: 'A full blown production ready boilerplate to build APIs with Fastify',
        version: '1.0.0'
      },
      schemes: ['http', 'https'],
      consumes: [
        'application/json',
        'application/x-www-form-urlencoded',
        'application/xml',
        'text/xml'
      ],
  produces: [
    'application/json',
    'application/javascript',
    'application/xml',
    'text/xml',
    'text/javascript'
  ],
    }
  }
}
  
const init = async ( config ) => {

    const app = fastify({});
    app.register(require('@fastify/sensible'))
    app.decorate('config', config); // global access of config object
     //app.decorate('static_config',static_config); //global access of static_config object
     app.register(helmet, {
      noCache: true,
      policy: 'same-origin',
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          imgSrc: ["'self'", 'data:'],
          scriptSrc: ["'self' 'unsafe-inline'"]
        }
      }
      });
       // Register the plugins like Knex qury builder, ajv schema validation Etc... 
  app.register(autoload, {
    dir: path.join(__dirname, 'plugins'),
    ignorePattern: /^(__tests__)/
  });
     app.register(swagger,swaggerconfig());
     app.register( userRoute);
    

     try {
      await app.ready(err => { 
        if (err) {
          console.log(err);
          throw err
        }
        app.swagger();

      });
      return app; 
     } catch(error) {
      console.log(error);
     return {};
     }
    };
    
  const run = app => app.listen({
     port: app.config.PORT, host: app.config.HOST 
    }) .then((address) => {
    console.log("Application Started: " + address );
    console.log("swagger URL: "+ address +'/user/public/documentation')
  }).catch (err => {
    console.log ("Server Start Failed " + err );  
  });
 module.exports ={ init ,run }