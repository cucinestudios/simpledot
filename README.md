# simpledot
Just create your .env file and load all your environment variables.

## Install

```bash
npm install simpledot --save
```

## Usage

just require and use .

```javascript
var env = require('simpledot')
```

First create your `.env` file in the root directory of your project. 

Then add variables on new lines in the form of `NAME=VALUE`.

For example:

```dosini
DB_HOST=localhost
DB_USER=cucine
DB_PASS=imeasy
```

Now just use it.

### Example

`env.YOUR_VARIABLE` and that's the way.

```javascript
var env = require('simpledot')
db.connect({
  host: env.DB_HOST,
  username: env.DB_USER,
  password: env.DB_PASS
})
```