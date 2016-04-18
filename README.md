PlaytestPlugin
============

## Usage

    cordova plugin add https://github.com/bartjezzz/playtest-phonegap-plugin.git


### Integration
1. Call the startSession() method, with your playtest key and api key, after the device is ready (from js).
2. Call the other Playtest plugin methods as appropriate (from js).

## Example is 

===================================================================================================================================================

			self.log('Playtest Init');
            if (window.plugins && window.plugins.playtest) {
                var ua = navigator.userAgent.toLowerCase();
                var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
                if (isAndroid) {
<!--Android is not yet supported at the moment-->
                } else {
                    window.plugins.playtest.startSession('Your Playtest Key','Your API Key', function () {
                        console.log('Playtest Success!');
                    }, function () {
                        alert('Playtest Error!');
                    });
                }
            }

===================================================================================================================================================

## Contributors

- [Bart van den Berg](https://github.com/bartjezzz)


## License
Apache 2.0
