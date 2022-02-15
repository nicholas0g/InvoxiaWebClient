Invoxia™ Web Client (UNOFFICIAL)
===========
![](https://img.shields.io/github/stars/nicholas0g/invoxiawebclient.svg) ![](https://img.shields.io/github/forks/nicholas0g/invoxiawebclient.svg)

You can support the development of this software making a donation [here](https://www.paypal.com/paypalme/nicholasgiordano)

If you simple wanna use it you can go [here](https://inv-webv.herokuapp.com/)

    Unofficial client to retrieve location data from Invoxia™ GPS trackers.

Invoxia™ is a company that produces gps traker swhich rely on the LoRa or SigFox
networks. Trackers location can only be accessed through their Android and iOS applications.
This ``unofficil web client`` uses the same API of your smartphone app and gives you ccess to:

- Device list
- Device state
- Device positions

WARNING: Even though direct access to Invoxia™ API is not prohibited in their `terms of use`, it is
not encouraged either: company representatives have already stated that they do not currently consider making the
API opened for all customers and this feature is limited to their `pro tracking offer`.
Therefore, by using ``unofficil web client`` you:

1. Accept to use this direct API access in a reasonable manner by limiting the query rate to the bare minimum required
for your application.

2. Understand that the Invoxia company may take any action they see fit regarding your account if they consider your
usage of their API to be in violation with their terms of use.

`Invoxia`: https://www.invoxia.com/

`terms of use`: https://www.invoxia.com/fr/legal/site/terms


Part of this documentation was written based on [gps-traker](https://gitlab.com/ezlo.picori/gps_tracker)

## Run on you device:

1. `git clone https://github.com/nicholas0g/InvoxiaWebClient.git`
2. `cd InvoxiaWebClient`
3. `npm install`
4. `npm run`
5. go to http://localhost:3000 on your browser

### Requirements
1. nodejs
2. npm

## Just use the software:
Click [here](https://inv-webv.herokuapp.com/)

## Do you want more features?
Open a new issue, make a pull request or consider making a donation [here](https://www.paypal.com/paypalme/nicholasgiordano)
