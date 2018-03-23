var faker = require("faker");

const NUM_USERS = 10;
let users = [];

for(let i=0; i < NUM_USERS; i++) {
    let randomName = faker.name.findName();
    users.push({
        name:randomName
    });
}

// you need to export the information
module.exports = users;