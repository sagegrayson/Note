const withAuth = (req, res, next) => {
  // if (!req.session.loggedIn) {
  //   res.redirect("/login");
  // } else {
  next();
  // }
};
//Uncomment this line when pushing
module.exports = withAuth;
