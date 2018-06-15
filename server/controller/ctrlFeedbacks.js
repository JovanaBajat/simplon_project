const SQL = require('sql-template-strings');
const client = require('../db');

const getFeedbacks = async function () {
    const query = SQL`
    SELECT 
        *
    FROM
         feedback
    `
    const queryResults = await client.query(query)

    return queryResults
}
 

const addFeedback = async function () {
    const insertQuery = SQL`
    INSERT INTO feedback (
        feedback_title, 
        feedback_content, 
        feedback_author, 
        creation_date 
    ) values (
        ${'blabla_feedback_title'}, 
        ${'blabla_feedback_content'}, 
        ${'blabla_feedback_author'}, 
        ${'2018-10-20'}
    )
    `
    await client.query(insertQuery)

}
const deleteFeedback = async function (id) {
    const deleteQuery = SQL`
        DELETE FROM feedback WHERE feedback_id = ${id}
    `
    await client.query(deleteQuery)

}
const editFeedback = async function (id, feedback_content) {
    const editQuery = SQL`
        UPDATE feedback
        SET feedback_content = ${feedback_content}
        WHERE feedback_id = ${id}
    `
    await client.query(editQuery)

}


module.exports = { getFeedbacks, addFeedback, deleteFeedback, editFeedback }
