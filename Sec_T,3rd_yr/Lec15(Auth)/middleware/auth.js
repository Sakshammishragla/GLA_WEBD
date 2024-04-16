const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        //req.isAuthenticated() will return true if user is logged in
        next();
    } else {
        req.flash("success","You need to login first!")
        res.redirect("/login");
    }
}


module.exports=isLoggedIn

