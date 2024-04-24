
const isUserLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    }
    else {
        req.flash("success", "You have to login first!")
        res.redirect("/login")
    }
}

const isSeller = (req, res, next) => {

    if (req.user.role == "seller") {
        next()
    }
    else {
        req.flash("success","You do not have permission")
        res.redirect("/products")
    }
}

module.exports = { isUserLoggedIn ,isSeller}