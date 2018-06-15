const SQL = require('sql-template-strings');
const client = require('../db');

const getComments = async function () {
    const query = SQL`
    SELECT 
        *
    FROM
         comments
    `
    const queryResults = await client.query(query)

    return queryResults
}
 

const addComment = async function () {
    const insertQuery = SQL`
    INSERT INTO comments (
        comment_content, 
        comment_author, 
        creation_date 
    ) values (
        ${'blabla_comment_content'}, 
        ${'blabla_comment_author'}, 
        ${'2018-10-20'}
    )
    `
    await client.query(insertQuery)

}
const deleteComment = async function (id) {
    const deleteQuery = SQL`
        DELETE FROM comments WHERE comment_id = ${id}
    `
    await client.query(deleteQuery)

}
const editComment = async function (id, comment_content) {
    const editQuery = SQL`
        UPDATE comments
        SET comment_content = ${comment_content}
        WHERE comment_id = ${id}
    `
    await client.query(editQuery)

}


module.exports = { getComments, addComment, deleteComment, editComment }
