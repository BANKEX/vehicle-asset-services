var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.end();
});

app.get('/api/v1/vin/:vin', function (req, res) {
	var vin = req.params["vin"];
	var ok = false;
	var msg = "";

	if (vin.length !== 17) {
		msg = "Wrong length";
	}
	else if (!checkVin(vin)) {
		msg = "VIN check failed";
	}
	else {
		ok = true;
		msg = "OK";
	}

  res.json({ vin: vin, ok: ok, msg: msg });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

function checkVin(vin) {
  return validate(vin);

  // source: https://en.wikipedia.org/wiki/Vehicle_identification_number#Example_Code
  function transliterate(c) {
    return '0123456789.ABCDEFGH..JKLMN.P.R..STUVWXYZ'.indexOf(c) % 10;
  }

  function get_check_digit(vin) {
    var map = '0123456789X';
    var weights = '8765432X098765432';
    var sum = 0;
    for (var i = 0; i < 17; ++i)
      sum += transliterate(vin[i]) * map.indexOf(weights[i]);
    return map[sum % 11];
  }

  function validate(vin) {
    if (!vin || vin.length !== 17)
    	return false;
	  
	  return get_check_digit(vin) === vin[8];
  }
}