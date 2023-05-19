// get users page
function getUsers (req, res, next){
    res.render("user",{
        title:"Users Chat-app",
    });
}

module.exports = {
    getUsers,
};