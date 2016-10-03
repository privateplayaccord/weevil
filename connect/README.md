# Weevil Connect

Weevil Connect lets you play with your We-Vibe device the way you want
to: in private.

Because Weevil Connect uses a new in-development web browser feature
called Web Bluetooth to connect to your We-Vibe you will need a recent
browser version.

## Getting started

You will need:

 * Google Chrome/Chromium
     * for Android, ideally, but some desktop OS might also work.
     * Chrome will work with Android Marshmallow onward but you'll need
       Chromium to support Android Lollipop.

 * We-Vibe 4 plus (or compatible device)

If you use the hosted version of Weevil Connect at
<https://privateplayaccord.github.io/weevil/connect/> (convenient but
less private than a local version) then you do not need to configure
more recent versions of Chrome to use Web Bluetooth as it has an
"Origin Trial" token that makes Web Bluetooth available.

Otherwise, you will need to configure your browser to enable Web
Bluetooth via: `chrome://flags/#enable-web-bluetooth`

Depending on your Android version you will also need to enable
Bluetooth and Location services (Location is required in recent
versions to support Bluetooth LE--which is stupid but we don't make
the rules).

## Connecting

 1. Press "Pair Device" and choose your device from the list.
 2. Press "Sync Pulse" to get your device to confirm it's paired, by vibrating.
 3. Press "Sync Pulse" or choose a vibration pattern from the menu
    under "Select mode" as desired.
 4. Press "Read Data" to view the current battery level and device temperature.

## References

 * View support status for other browsers here: <https://github.com/WebBluetoothCG/web-bluetooth/blob/master/implementation-status.md>

 * Chrome feature status: <https://www.chromestatus.com/feature/5264933985976320>

 * More on Web Bluetooth: <https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web>


Brought to you by the Private Play Accord: <http://www.privateplayaccord.com/>
