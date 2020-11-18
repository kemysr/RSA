// // import express
// const express = require('express');
// const ip = require("ip");
// const cors = require('cors');
// // import packages
// const https = require('https');
// const fs = require('fs');

// // create new express app and assign it to `app` constant
// const app = express();
// app.use(cors());
// // server port configuration
// const PORT = 8080;

// // create a route for the app
// app.get('/', (req, res) => {
  
// //console.dir ( ip.address() );
//   res.send('Hello from ip: '+ip.address() +' and port: '+ PORT+' !');
// });
// app.get('/test', (req, res) => {
//   res.send('Hello Response! Welcome to RSA!');
// });
// // server starts listening the `PORT`
// app.listen(PORT, () => {
//   console.log(`Server running at: http://localhost:${PORT}/`);
// });

// // serve the API with signed certificate on 443 (SSL/HTTPS) port
// const httpsServer = https.createServer({
//   key: fs.readFileSync('/etc/letsencrypt/live/my_api_url/privkey.pem'),
//   cert: fs.readFileSync('/etc/letsencrypt/live/my_api_url/fullchain.pem'),
// }, app);

// httpsServer.listen(443, () => {
//     console.log('HTTPS Server running on port 443');
// });


// import required packages
const express = require('express');
const cors = require('cors');
const https = require('https');
const http = require('http');
const fs = require('fs');
const ip = require("ip");

// const app = express();
// app.use(cors());


//////  http app 1 ///////////////////////////////
// create new express app and assign it to `app` constant
 const httpapp1 = express();
 httpapp1.use(cors());
// server port configuration
const HTTPPORT1 = 8080;

 httpapp1.use(cors());
 // create a route for the app
 httpapp1.get('/', (req, res) => {
    res.send('Hello from ip: '+ip.address() +' and port: '+ HTTPPORT1 +' !');
    console.log('Called : '+ ip.address() +' and port: '+ HTTPPORT1 +' !');
 });
 // another route
 httpapp1.get('/testhttp1', (req, res) => {
   res.send('Hello RSA! Welcome to RSA! from ip: '+ip.address() +' and port: '+ HTTPPORT1 +' !');
   console.log('Called : '+ ip.address() +' and port: '+ HTTPPORT1 +' !');
 });
//////  http app 1 ///////////////////////////////


//////  http app 2 ///////////////////////////////
// create new express app and assign it to `app` constant
const httpapp2 = express();
httpapp2.use(cors());
// server port configuration
const HTTPPORT2 = 8081;

httpapp2.use(cors());
// create a route for the app
httpapp2.get('/', (req, res) => {
   res.send('Hello from ip: '+ip.address() +' and port: '+ HTTPPORT2 +' !');
   console.log('Called : '+ ip.address() +' and port: '+ HTTPPORT2 +' !');
});
// another route
httpapp2.get('/testhttp2', (req, res) => {
  res.send('Hello RSA! Welcome to RSA! from ip: '+ip.address() +' and port: '+ HTTPPORT2 +' !');
  console.log('Called : '+ ip.address() +' and port: '+ HTTPPORT2 +' !');
});
//////  http app 2 ///////////////////////////////

//////  http app 3 ///////////////////////////////
// create new express app and assign it to `app` constant
const httpapp3 = express();
httpapp3.use(cors());
// server port configuration
const HTTPPORT3 = 8082;

httpapp3.use(cors());
// create a route for the app
httpapp3.get('/', (req, res) => {
   res.send('Hello from ip: '+ip.address() +' and port: '+ HTTPPORT3 +' !');
   console.log('Called : '+ ip.address() +' and port: '+ HTTPPORT3 +' !');
});
// another route
httpapp3.get('/testhttp3', (req, res) => {
  res.send('Hello RSA! Welcome to RSA! from ip: '+ip.address() +' and port: '+ HTTPPORT3 +' !');
  console.log('Called : '+ ip.address() +' and port: '+ HTTPPORT3 +' !');
});
//////  http app 3 ///////////////////////////////

//////  http app 3 ///////////////////////////////
// create new express app and assign it to `app` constant
const httpapp4 = express();
httpapp4.use(cors());
// server port configuration
const HTTPPORT4 = 8083;

httpapp4.use(cors());
// create a route for the app
httpapp4.get('/', (req, res) => {
   res.send('Hello from ip: '+ip.address() +' and port: '+ HTTPPORT4 +' !');
   console.log('Called : '+ ip.address() +' and port: '+ HTTPPORT4 +' !');
});
// another route
httpapp4.get('/testhttp4', (req, res) => {
  res.send('Hello RSA! Welcome to RSA! from ip: '+ip.address() +' and port: '+ HTTPPORT4 +' !');
  console.log('Called : '+ ip.address() +' and port: '+ HTTPPORT4 +' !');
});
//////  http app 3 ///////////////////////////////


////// https app 443 ///////////////////////////////
// create new express app and save it as "app"
const app443 = express();
HTTPSPORT443 = 443;

app443.use(cors());
// create a route for the app
app443.get('/', (req, res) => {
   res.send('Hello from ip: '+ip.address() +' and port: '+ HTTPSPORT443 +' !');
   console.log('Called : '+ ip.address() +' and port: '+ HTTPSPORT443 +' !');
});
// another route
app443.get('/test443', (req, res) => {
  res.send('Hello RSA! Welcome to RSA! from ip: '+ip.address() +' and port: '+ HTTPSPORT443 +' !');
  console.log('Called : '+ ip.address() +' and port: '+ HTTPSPORT443 +' !');
});
//////https  app 443  ///////////////////////////////

///////https  app 8443 ///////////////////////////////
// create new express app and save it as "app"
const app8443 = express();
HTTPSPORT8443 = 8443;

app8443.use(cors());
// create a route for the app
app8443.get('/', (req, res) => {
   res.send('Hello from ip: '+ip.address() +' and port: '+ HTTPSPORT8443 +' !');
   console.log('Called : '+ ip.address() +' and port: '+ HTTPSPORT8443 +' !');
});
// another route
app8443.get('/test8443', (req, res) => {
  res.send('Hello RSA! Welcome to RSA! from ip: '+ip.address() +' and port: '+ HTTPSPORT8443 +' !');
  console.log('Called : '+ ip.address() +' and port: '+ HTTPSPORT8443 +' !');
});
//////https  app 8443  ///////////////////////////////

///////https  app 8444 ///////////////////////////////
// create new express app and save it as "app"
const app8444 = express();
HTTPSPORT8444 = 8444;

app8444.use(cors());
// create a route for the app
app8444.get('/', (req, res) => {
   res.send('Hello from ip: '+ip.address() +' and port: '+ HTTPSPORT8444 +' !');
   console.log('Called : '+ ip.address() +' and port: '+ HTTPSPORT8444 +' !');
});
// another route
app8444.get('/test8444', (req, res) => {
  res.send('Hello RSA! Welcome to RSA! from ip: '+ip.address() +' and port: '+ HTTPSPORT8444 +' !');
  console.log('Called : '+ ip.address() +' and port: '+ HTTPSPORT8444 +' !');
});
//////https  app 8444  ///////////////////////////////

///////https  app 8445 ///////////////////////////////
// create new express app and save it as "app"
const app8445 = express();
HTTPSPORT8445 = 8445;

app8445.use(cors());
// create a route for the app
app8445.get('/', (req, res) => {
   res.send('Hello from ip: '+ip.address() +' and port: '+ HTTPSPORT8445 +' !');
   console.log('Called : '+ ip.address() +' and port: '+ HTTPSPORT8445 +' !');
});
// another route
app8445.get('/test8445', (req, res) => {
  res.send('Hello RSA! Welcome to RSA! from ip: '+ip.address() +' and port: '+ HTTPSPORT8445 +' !');
  console.log('Called : '+ ip.address() +' and port: '+ HTTPSPORT8445 +' !');
});
//////https  app 8444  ///////////////////////////////


// Listen both http & https ports
const http1Server = http.createServer( httpapp1);
const http2Server = http.createServer( httpapp2);
const http3Server = http.createServer( httpapp3);
const http4Server = http.createServer( httpapp4);

 //[...app definition...]
// var httpsServer = https.createServer(options, app);

//  httpsServer.listen(PORT, logger.info(`Server listening on port: ${PORT}`));


//  var certificate = fs.readFileSync('filename.pfx', 'utf8');
//  var credentials = {key: 'password', pfx: certificate};
//  dotenv.config({ silent: true });


 //var filename443 = fs.readFileSync('RSACertificates/mytoken.bpglobal.com.pfx', 'utf8');
 
 var password='Beye9liefe5eish6'
 var options443 = {
  pfx: fs.readFileSync('RSACertificates/mytokendev.bpglobal.com.pfx'),
  passphrase: password
};   
var options8443 = {
  pfx: fs.readFileSync('RSACertificates/rsaamisservicedev.bpweb.bp.com.pfx'),
  passphrase: password
};   
var options8444 = {
  pfx: fs.readFileSync('RSACertificates/mytokenservicedev.bpglobal.com.pfx'),
  passphrase: password
};   
var options8445 = {
  pfx: fs.readFileSync('RSACertificates/rsahelpdeskservicedev.bpweb.bp.com.pfx'),
  passphrase: password
};     


const https443Server = https.createServer(options443,app443);
const https8443Server = https.createServer(options8443,app8443);
const https8444Server = https.createServer(options8444,app8444);
const https8445Server = https.createServer(options8445,app8445);
 
// const https443Server = https.createServer(options443,
//   {
//   // key: fs.readFileSync('/etc/letsencrypt/live/my_api_url/privkey.pem'),
//   // cert: fs.readFileSync('/etc/letsencrypt/live/my_api_url/fullchain.pem'),
//   // key: fs.readFileSync('RSACertificates/PEMformat/mytoken.bpglobal.com.key.pem'),
//   cert: fs.readFileSync('RSACertificates/PEMformat/mytoken.bpglobal.com.chain.pem'),
// },
//  app);



// const https8443Server = https.createServer(
//   {
//   key: fs.readFileSync('/etc/letsencrypt/live/my_api_url/privkey.pem'),
//   cert: fs.readFileSync('/etc/letsencrypt/live/my_api_url/fullchain.pem'),
// }, app);

// const https8444Server = https.createServer({
//   key: fs.readFileSync('/etc/letsencrypt/live/my_api_url/privkey.pem'),
//   cert: fs.readFileSync('/etc/letsencrypt/live/my_api_url/fullchain.pem'),
// }, app);

// const https8445Server = https.createServer({
//   key: fs.readFileSync('/etc/letsencrypt/live/my_api_url/privkey.pem'),
//   cert: fs.readFileSync('/etc/letsencrypt/live/my_api_url/fullchain.pem'),
// }, app);


// http1Server.listen(HTTPPORT1, () => {
//     console.log('HTTP Server running on port '+HTTPPORT1);
// });

// http2Server.listen(HTTPPORT2, () => {
//   console.log('HTTP Server running on port '+HTTPPORT2);
// });

// http3Server.listen(HTTPPORT3, () => {
//   console.log('HTTP Server running on port '+HTTPPORT3);
// });
// http4Server.listen(HTTPPORT3, () => {
//   console.log('HTTP Server running on port '+HTTPPORT4);
// });

https443Server.listen(HTTPSPORT443, () => {
    console.log('HTTPS Server running on port 443');
});
https8443Server.listen(HTTPSPORT8443, () => {
  console.log('HTTPS Server running on port 8443');
});
https8444Server.listen(HTTPSPORT8444, () => {
  console.log('HTTPS Server running on port 8444');
});
https8445Server.listen(HTTPSPORT8445, () => {
  console.log('HTTPS Server running on port 8445');
});