// get users page
function getInbox (req, res, next){
    res.render("Inbox",{
        title:"Inbox Chat-app",
    });
}

module.exports = {
    getInbox,
};