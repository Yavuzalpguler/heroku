var express = require('express');
var router = express.Router();
var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Hello World!');
});

router.get('/abc', function (req, res, next) {
  var url = 'https://api.github.com/repos/MoovBuddy/moovbuddy-app/dispatches';

  xhr.open('POST', url);

  xhr.setRequestHeader('Accept', 'application/vnd.github.v3+json');
  xhr.setRequestHeader(
    'Authorization',
    'Bearer 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'
  );
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
    }
  };

  var data = '{"event_type":"configuration-check"}';

  xhr.send(data);

  res.send('Finish');
});
module.exports = router;
