if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;


function success() {
require('../../app');
require('../../pages/mapTest/mapTest');
require('../../pages/homepage/homepage');
require('../../pages/index/index');
require('../../pages/mapTest/mapTest');
require('../../pages/charge/charge');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}