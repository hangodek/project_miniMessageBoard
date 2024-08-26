const db = require('../db/queries');
const { Client } = require('pg');
require('dotenv').config();


function createNewUserList(req, res) {
    res.render('createUser', {
        title: "Create New User",
    })
}

async function updateUserForm(req, res) {
    const user = await db.getUserWithId(req.params.id);
    res.render('updateUser', {
        title: 'Update User',
        user: user[0],
    })
}

async function getUserList(req, res) {
    const usernames = await db.getAllUsernames();
    res.render('userList', {
        title: 'User List',
        users: usernames,
    })
}

async function getUser(req, res) {
    const name = '%' + req.query.searchUser + '%';
    const user = await db.getUserWithName(name);
    res.render('userList', {
        title: 'User List',
        users: user,
    })
}

async function createNewUser(req, res) {
    const { firstName, lastName } = req.body;
    const userName = firstName + ' ' + lastName;
    db.insertUsername(userName);
    res.redirect('/');
}

async function updateUser(req, res) {
    const { firstName, lastName } = req.body;
    const newName = firstName + ' ' + lastName;
    db.updateUser(req.params.id, newName);
    res.redirect('/');
}

async function deleteUser(req, res) {
    db.deleteUser(req.params.id);
    res.redirect('/')
}

async function deleteAllUser(req, res) {
    db.deleteAllUser();
    res.redirect('/');
}

module.exports = {
    createNewUserList,
    getUserList,
    updateUserForm,
    getUser,
    createNewUser,
    deleteUser,
    deleteAllUser,
    updateUser,
}