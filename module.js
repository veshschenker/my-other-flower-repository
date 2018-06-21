const {
    MongoClient,
    ObjectId
} = require('mongodb');
const url = 'mongodb://192.168.99.100:27017';
const connection = MongoClient.connect(url, { useNewUrlParser:true });

async function getCollection(c) {
    return connection
        .then(client => client.db('employeesApplication'))
        .then(db => db.collectiion(c));
}
exports.getpersons = async function () {
    const coll = await getCollection('employees');
    const employees = await coll.find({}).toArray();
    return employees;
}