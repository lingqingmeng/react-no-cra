let test = require('tape');
let sinon = require("sinon");


const promisify = query => new Promise((resolve, reject) => {
  query.exec((err, data) => {
    if (err) reject(err);
    else resolve(data);
  });
});

test('resolves promise if a result is returned', t => {
  const exec = sinon.stub();
  promisify({exec}).then(result => {
    t.equal(result, 'foo');
    t.end();
  });
  exec.callArgWith(0, null, 'foo');
});

test('rejects promise if an error happens', t => {
  const exec = sinon.stub();
  promisify({exec}).then(null, err => {
    t.equal(err, 'error');
    t.end();
  });
  exec.callArgWith(0, 'error');
});


test('first wrapper', function (t) {

  setTimeout(function () {
    t.ok(1, 'first test');
    t.end();
  }, 200);

  t.test('second setTimeout', function (t) {
    t.ok(1, 'second test');
    t.end();
  });
});

test('third setTimeout', function (t) {
  setTimeout(function () {
    t.ok(1, 'third test');
    t.end();
  }, 100);
});