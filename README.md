
S4N Test

Para completar la prueba se uso como base Testcafe js integrado con cucumber en la carpeta features
tambien se uso pageobject model que esta bajo la carpeta pageObjects
se pueden ver los escenarios planteados 
para correr las pruebas en local es necesario tener estas consideraciones de dependencias para que 
puedan correr las pruebas correctamente

Node : 12.10.0
npm : 6.11.3
testcafe : 0.20.2
#### instalar dependecias
clonar el repositorio
ir a la carpeta

npm install 

// para correr con chrome
npm run testChrome
// para correr con firefox
npm run testFirefox
// para correr en paralelo
npm run e2e


En local correrian las pruebas de acuerdo al parametro seleccionado 

