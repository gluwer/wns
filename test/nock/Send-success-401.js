exports.setupMockScopes = function (nock) { var scopes = []; var scope; scope = 
nock('https://login.live.com:443')
  .post('/accesstoken.srf', "grant_type=client_credentials&client_id=ms-app%3A%2F%2Fs-1-15-2-145565886-1510793020-2797717260-1526195933-3912359816-44086043-2211002316&client_secret=FF9yfJLxSH3uI32wNKGye643bAZ4zBz7&scope=notify.windows.com")
  .reply(200, "{\"token_type\":\"bearer\",\"access_token\":\"EgAaAQMAAAAEgAAACoAA2j5nv50/LmqoVgh1PLNB5R4VrcKRi7KXUIjORdcUFGa/nlVslWjuJBhF9Tu4l8vvAI5icJaVqjORqZsMwBO7ga5OpTBNvcNtG7bJ0DShrr7ZTzRnA96aLFVC2imwh8cRFPjp0GPsmmqeolSqkm1JeGWPSyW8V5Mz/kIgdfGIEH+JAFoAiQAAAAAAaoEORPVJJFH1SSRR60gEAA0ANjcuMTg1LjE0OC44AAAAAABcAG1zLWFwcDovL3MtMS0xNS0yLTE0NTU2NTg4Ni0xNTEwNzkzMDIwLTI3OTc3MTcyNjAtMTUyNjE5NTkzMy0zOTEyMzU5ODE2LTQ0MDg2MDQzLTIyMTEwMDIzMTYA\",\"expires_in\":86400}", { 'cache-control': 'no-store',
  'content-length': '436',
  'content-type': 'application/json',
  server: 'Microsoft-IIS/7.5',
  ppserver: 'PPV: 30 H: BAYIDSLGN1F37 V: 0',
  date: 'Wed, 20 Feb 2013 03:58:45 GMT',
  connection: 'close' });
scopes.push(scope);scope = 
nock('https://bn1.notify.windows.com:443')
  .post('/?token=AgYAAACFGdWBiRCTypHebfvngI7DuNBXWuGjdiczDOZ7bSgkbCRrD2M1b10CpzCmipzknHbU4nLzapQbooXzJ%2fVwHAfSl%2fWMk8OsetohEVMlsIicoLP99rDg7g2AdENA99DZoAU%3d', "<tile><visual><binding template=\"TileSquareBlock\"><text id=\"1\">http://textParam1.com</text><text id=\"2\">http://textParam2.com</text></binding></visual></tile>")
  .reply(200, "", { 'content-length': '0',
  'x-wns-notificationstatus': 'received',
  'x-wns-msg-id': '45DC47913C88B26E',
  'x-wns-debug-trace': 'BN1WNS2011530',
  date: 'Wed, 20 Feb 2013 03:58:45 GMT' });
scopes.push(scope);scope =
nock('https://bn1.notify.windows.com:443')
  .post('/?token=AgYAAACFGdWBiRCTypHebfvngI7DuNBXWuGjdiczDOZ7bSgkbCRrD2M1b10CpzCmipzknHbU4nLzapQbooXzJ%2fVwHAfSl%2fWMk8OsetohEVMlsIicoLP99rDg7g2AdENA99DZoAU%3d', "<tile><visual><binding template=\"TileSquareBlock\"><text id=\"1\">http://textParam1.com</text><text id=\"2\">http://textParam2.com</text></binding></visual></tile>")
  .reply(401, "", { 'content-length': '0',
    'x-wns-notificationstatus': 'received',
    'x-wns-msg-id': '45DC47913C88B26E',
    'x-wns-debug-trace': 'BN1WNS2011530',
    date: 'Wed, 20 Feb 2013 03:58:45 GMT' });
scopes.push(scope);scope =
nock('https://login.live.com:443')
  .post('/accesstoken.srf', "grant_type=client_credentials&client_id=ms-app%3A%2F%2Fs-1-15-2-145565886-1510793020-2797717260-1526195933-3912359816-44086043-2211002316&client_secret=FF9yfJLxSH3uI32wNKGye643bAZ4zBz7&scope=notify.windows.com")
  .reply(200, "{\"token_type\":\"bearer\",\"access_token\":\"NEWEgAaAQMAAAAEgAAACoAA2j5nv50/LmqoVgh1PLNB5R4VrcKRi7KXUIjORdcUFGa/nlVslWjuJBhF9Tu4l8vvAI5icJaVqjORqZsMwBO7ga5OpTBNvcNtG7bJ0DShrr7ZTzRnA96aLFVC2imwh8cRFPjp0GPsmmqeolSqkm1JeGWPSyW8V5Mz/kIgdfGIEH+JAFoAiQAAAAAAaoEORPVJJFH1SSRR60gEAA0ANjcuMTg1LjE0OC44AAAAAABcAG1zLWFwcDovL3MtMS0xNS0yLTE0NTU2NTg4Ni0xNTEwNzkzMDIwLTI3OTc3MTcyNjAtMTUyNjE5NTkzMy0zOTEyMzU5ODE2LTQ0MDg2MDQzLTIyMTEwMDIzMTYA\",\"expires_in\":86400}", { 'cache-control': 'no-store',
    'content-length': '436',
    'content-type': 'application/json',
    server: 'Microsoft-IIS/7.5',
    ppserver: 'PPV: 30 H: BAYIDSLGN1F37 V: 0',
    date: 'Wed, 20 Feb 2013 03:58:45 GMT',
    connection: 'close' });
scopes.push(scope);scope =
nock('https://bn1.notify.windows.com:443')
  .matchHeader('Authorization', 'Bearer NEWEgAaAQMAAAAEgAAACoAA2j5nv50/LmqoVgh1PLNB5R4VrcKRi7KXUIjORdcUFGa/nlVslWjuJBhF9Tu4l8vvAI5icJaVqjORqZsMwBO7ga5OpTBNvcNtG7bJ0DShrr7ZTzRnA96aLFVC2imwh8cRFPjp0GPsmmqeolSqkm1JeGWPSyW8V5Mz/kIgdfGIEH+JAFoAiQAAAAAAaoEORPVJJFH1SSRR60gEAA0ANjcuMTg1LjE0OC44AAAAAABcAG1zLWFwcDovL3MtMS0xNS0yLTE0NTU2NTg4Ni0xNTEwNzkzMDIwLTI3OTc3MTcyNjAtMTUyNjE5NTkzMy0zOTEyMzU5ODE2LTQ0MDg2MDQzLTIyMTEwMDIzMTYA')
  .post('/?token=AgYAAACFGdWBiRCTypHebfvngI7DuNBXWuGjdiczDOZ7bSgkbCRrD2M1b10CpzCmipzknHbU4nLzapQbooXzJ%2fVwHAfSl%2fWMk8OsetohEVMlsIicoLP99rDg7g2AdENA99DZoAU%3d', "<tile><visual><binding template=\"TileSquareBlock\"><text id=\"1\">http://textParam1.com</text><text id=\"2\">http://textParam2.com</text></binding></visual></tile>")
  .reply(200, "", { 'content-length': '0',
    'x-wns-notificationstatus': 'received',
    'x-wns-msg-id': '45DC47913C88B26E',
    'x-wns-debug-trace': 'BN1WNS2011530',
    date: 'Wed, 20 Feb 2013 03:58:45 GMT' });
scopes.push(scope);return scopes; };