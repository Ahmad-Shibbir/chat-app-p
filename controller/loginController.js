// get login page
function getLogin (req, res, next){
    res.render("index",{
        title:"Login Chat-app",
    });
}

module.exports = {
    getLogin,
};