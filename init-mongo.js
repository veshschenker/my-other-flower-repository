conn = new Mongo();
db = conn.getDB("EmployeeDataBase");
db.employees.insertOne(
    {
        name: "Samuel",
        DOB: "1977",
        age: "40",
        position: 'Clerk'
    }
)
db.employees.insertOne(
    {
        name: "Charles",
        DOB: "1979",
        age: "38",
        position: 'Clerk'
    }
)

db.employees.insertOne(
    {
        name: "Veronicah",
        DOB: "1980",
        age: "37",
        position: 'Clerk'

    }
)