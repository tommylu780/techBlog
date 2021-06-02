const { User } = require('../models');

const userData = [{
        username: "Tommy Lu",
        password: "test1"

    },
    {
        username: "user",
        password: "test2"
    },
    {
        username: "user1",
        password: "test3"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;