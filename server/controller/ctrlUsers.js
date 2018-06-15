const SQL = require('sql-template-strings');
const client = require('../db');

const getUsers = async function () {
    const query = SQL`
    SELECT 
        *
    FROM
         users
    `
    const queryResults = await client.query(query)

    return queryResults
}
 

const addUser = async function () {
    const insertQuery = SQL`
    INSERT INTO users (
        firstname, 
        lastname, 
        email, 
        role, 
        is_admin
    ) values (
        ${'Jovana'}, 
        ${'Bajat'}, 
        ${'jovana.bajat@gmail.com'}, 
        ${'pdg'}, 
        ${true}
    )
    `
    await client.query(insertQuery)

}
const deleteUser = async function (id) {
    const deleteQuery = SQL`
        DELETE FROM users WHERE user_id = ${id}
    `
    await client.query(deleteQuery)

}
const editUser = async function (id, firstname) {
    const editQuery = SQL`
        UPDATE users
        SET firstname = ${firstname}
        WHERE user_id = ${id}
    `
    console.log(editQuery);
    await client.query(editQuery)

}


module.exports = { getUsers, addUser, deleteUser, editUser }
