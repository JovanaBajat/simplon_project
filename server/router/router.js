const router = require('express').Router();
const { getUsers, addUser, deleteUser, editUser } = require('../controller/ctrlUsers');
const { getComments, addComment, deleteComment, editComment } = require('../controller/ctrlComments');
const { getFeedbacks, addFeedback, deleteFeedback, editFeedback } = require('../controller/ctrlComments');


// USERS

router.get('/users', async (req, res) => {

    let queryResults = null
    try {
        queryResults = await getUsers()
    } catch (error) {
        console.log(error)
        return res.status(500).send(new Error("Erreur dans l'acquisition des utilisateurs", error))
    }

    return res.status(200).send(queryResults.rows)
})

router.post('/users', async (req, res) => {
    try {
        await addUser()
    } catch (error) {
        console.log(error)
        return res.status(500).send(new Error("Erreur", error))
    }

    return res.status(200).send("it worked")

})
router.delete('/users/delete/:id', async (req, res) => {
    try {
        await deleteUser(req.params.id);
    } catch (error) {
        console.log(error)
        return res.status(500).send(new Error("Erreur", error))
    }

    return res.status(200).send("it worked, user deleted")

})
router.put('/users/edit/:id', async (req, res) => {
    try {
        await editUser(req.params.id, req.body.firstname)
    } catch (error) {
        console.log(error)
        return res.status(500).send(new Error("Erreur", error))
    }

    return res.status(200).send("it worked, user edited")

})

// COMMENTS

router.get('/comments', async (req, res) => {

    let queryResults = null
    try {
        queryResults = await getComments()
    } catch (error) {
        console.log(error)
        return res.status(500).send(new Error("Erreur dans l'acquisition des comments", error))
    }

    return res.status(200).send(queryResults.rows)
})

router.post('/comments', async (req, res) => {
    try {
        await addComment()
    } catch (error) {
        console.log(error)
        return res.status(500).send(new Error("Erreur", error))
    }

    return res.status(200).send("it worked")

})
router.delete('/comments/delete/:id', async (req, res) => {
    try {
        await deleteComment(req.params.id);
    } catch (error) {
        console.log(error)
        return res.status(500).send(new Error("Erreur", error))
    }

    return res.status(200).send("it worked, comment deleted")

})
router.put('/comments/edit/:id', async (req, res) => {
    try {
        await editComment(req.params.id, req.body.firstname)
    } catch (error) {
        console.log(error)
        return res.status(500).send(new Error("Erreur", error))
    }

    return res.status(200).send("it worked, comment edited")

})

// FEEDBACKS

router.get('/feedbacks', async (req, res) => {

    let queryResults = null
    try {
        queryResults = await getFeedbacks()
    } catch (error) {
        console.log(error)
        return res.status(500).send(new Error("Erreur dans l'acquisition des feedbacks", error))
    }

    return res.status(200).send(queryResults.rows)
})

router.post('/feedbacks', async (req, res) => {
    try {
        await addFeedback()
    } catch (error) {
        console.log(error)
        return res.status(500).send(new Error("Erreur", error))
    }

    return res.status(200).send("it worked")

})
router.delete('/feedback/delete/:id', async (req, res) => {
    try {
        await deleteFeedback(req.params.id);
    } catch (error) {
        console.log(error)
        return res.status(500).send(new Error("Erreur", error))
    }

    return res.status(200).send("it worked, feedback deleted")

})
router.put('/feedback/edit/:id', async (req, res) => {
    try {
        await editFeedback(req.params.id, req.body.firstname)
    } catch (error) {
        console.log(error)
        return res.status(500).send(new Error("Erreur", error))
    }

    return res.status(200).send("it worked, feedback edited")

})

module.exports = router;
