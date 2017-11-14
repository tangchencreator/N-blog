module.exports = function (app) {
  app.get('/blog', function (req, res) {
    res.redirect('/blog/posts')
  })
  app.use('/blog/signup', require('./signup'))
  app.use('/blog/signin', require('./signin'))
  app.use('/blog/signout', require('./signout'))
  app.use('/blog/posts', require('./posts'))

  // 404 page
  app.use(function (req, res) {
    if (!res.headersSent) {
      res.status(404).render('404')
    }
  })
}
