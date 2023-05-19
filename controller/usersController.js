// get users page
function getUsers (req, res, next){
    res.render("users",{
        title:"Users Chat-app",
    });
}

module.exports = {
    getUsers,
};