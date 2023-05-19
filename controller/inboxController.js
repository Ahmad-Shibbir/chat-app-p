// get users page
function getInbox (req, res, next){
    res.render("Inbox");
}

module.exports = {
    getInbox,
};