const newman = require('newman');
 require(dotenv).config();
newman.run({
    collection:`https://api.postman.com/collections/35121297-7e1ba5df-d157-4087-a175-4a4188db184f?access_key=${process.env.secretKey}`,
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});