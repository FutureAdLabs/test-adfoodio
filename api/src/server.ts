import app from './app'

const port = process.env.NODE_PORT || 4848;

export function run () {

  return app.listen(port, function () {
// Port is forwarded by docker to 80.
    console.log(`Listening on http://localhost:${port}`);
  })
}

if(process.env.NODE_ENV !== 'testing') {
  run();
}