// Load data
const friendData = require("../data/friends");

module.exports = function(app) {
    // GET data
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });  
    // POST data
    app.post("/api/friends", function(req, res) {

        // Array to store difference totals
        let totalArr = [];

        // For each in friendData
        for (let x in friendData) {
            // Array to store individual difference values
            let diffArr = [];
            // For each score from user input
            for (i=0;i<req.body.scores.length;i++) {
                // Find absolute difference between each score
                let temp = Math.abs(req.body.scores[i] - parseInt(friendData[x].scores[i]));
                // Add difference to array
                diffArr.push(temp);
            }
            // Get sum of differences
            function getSum(total, num) {
                return total + num;
            }
            // Push to totalArr
            totalArr.push(diffArr.reduce(getSum));
        }

        // Find smallest difference
        // match variable starts one higher than greatest possible difference
        let match = 41;
        let matchNum = null;
        for (let i=0;i<totalArr.length;i++) {
            if (totalArr[i] < match) {
                match = totalArr[i];
                matchNum = i;
            }
        }
        let newFriend = friendData[matchNum];

        // Push new user data to friends.js
        friendData.push(req.body);

        // Return match info
        res.json(newFriend);
    });  
};

