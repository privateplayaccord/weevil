        // Initial class generated by: <https://beaufortfrancois.github.io/sandbox/web-bluetooth/generator/>
        // Other references:
        //  * <https://googlechrome.github.io/samples/web-bluetooth/device-info.html>
        //  * <https://googlechrome.github.io/samples/web-bluetooth/reset-energy.html>

        class WeVibe {

          constructor() {
            this.device = null;
            this.onDisconnected = this.onDisconnected.bind(this);
            console.log(":D");
          }

          request() {
            let options = {
                          "filters": [{
                "services": ["0000bb03-0000-1000-8000-00805f9b34fb"]
              }],
              "optionalServices": ["f000bb03-0451-4000-b000-000000000000"]
            };
            return navigator.bluetooth.requestDevice(options)
            .then(device => {
              this.device = device;
              this.device.addEventListener('gattserverdisconnected', this.onDisconnected);
              return device;
            });
          }

          connect() {
            if (!this.device) {
              return Promise.reject('Device is not connected.');
            } else {
              return this.device.gatt.connect();

            }
          }

          readInfo() {
            return this.device.gatt.getPrimaryService("f000bb03-0451-4000-b000-000000000000")
            .then(service => service.getCharacteristic("f000b000-0451-4000-b000-000000000000"))
            .then(characteristic => characteristic.readValue());
          }

          writeCommand(data) {
            return this.device.gatt.getPrimaryService("f000bb03-0451-4000-b000-000000000000")
            .then(service => service.getCharacteristic("f000c000-0451-4000-b000-000000000000"))
            .then(characteristic => characteristic.writeValue(data));
          }

          disconnect() {
            if (!this.device) {
              return Promise.reject('Device is not connected.');
            } else {
              return this.device.gatt.disconnect();
            }
          }

          onDisconnected() {
            console.log('Device is disconnected.');
          }
        }
