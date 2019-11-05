module.exports = (app, path) => {
  app.get('/', function(req, resp) {
    console.log('Request index');
    resp.sendFile(path.resolve('src/index.html'))
  });
}