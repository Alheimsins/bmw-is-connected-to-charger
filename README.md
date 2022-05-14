[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# bmw-is-connected-to-charger

Answers the question: is my BMW connected to a charger?

# Usage

```JavaScript
import isConnectedToCharger from '@alheimsins/bmw-is-connected-to-charger'

const username = '<connected-drive-username>'
const password = '<connected-drive-password>'

console.log(isConnectedToCharger(username, password)) // => { connected: true, location: '<your-cars-location>' }

```

# Limitations

- If you have multiple cars added to your Connected Drive account, this script will only return the location of the first car.
- To get the location of your car, you need to have your share location permission activated.

# Related

- [calculate-cheapest-charging-schedule](https://github.com/Alheimsins/calculate-cheapest-charging-schedule) Simple module for calculating the cheapest charging schedule for your EV
- [tibber-get-price-info](https://github.com/Alheimsins/tibber-get-price-info) Retrieve price info from tibber for your current subscription

# License

[MIT](LICENSE)

## About

Created with ❤ for [Alheimsins](https://alheimsins.net)

<img src="https://image.ibb.co/dPH08G/logo_black.png" height="150px" width="150px" />
