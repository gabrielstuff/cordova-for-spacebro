var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
	
	this.receivedEvent('deviceready');

	var zeroconf = cordova.plugins.zeroconf;

	console.log('cordova is : ');
	console.log(cordova);
	console.log('cordova.plugins is : ');
	console.log(cordova.plugins);
	console.log('cordova.plugins.zeroconf is : ');
	console.log(cordova.plugins.zeroconf);
	// console.log('zeroconf is : ');
	// console.log(zeroconf);

	zeroconf.getHostname(function success(hostname){

	    console.log('The device\'s hostname is : ');
	    console.log(hostname);
	}, function failure(){
    
	    console.log('Device\'s hostname could not be retrieved');
	});
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement =	document.getElementById(id);
        var listeningElement =	parentElement.querySelector('.listening');
        var receivedElement =	parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
