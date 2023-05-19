// get users page
function getUsers (req, res, next){
    res.render("Users");
}

module.exports = {
    getUsers,
};