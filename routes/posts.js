
// Dummy post content
var posts = [
  {
    title: "Titanium Oatmeal",
    body: "This stuff will def give you a six pack",
    author: "Eric"
  },
  {
    title: "Best Adventures",
    body: "You will crap your pants",
    author: "Chris"
  }
];

// Routes for Post api
exports.PostApi = function(app) {
  app.get('/api/v1/posts', function(req, res) {
    res.json({"posts": posts});
  });
};