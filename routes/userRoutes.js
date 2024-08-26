const { Router } = require('express');
const userRoutes = Router();
const userController = require('../controller/userController');


userRoutes.get('/', (req, res) => {
    if (req.query.searchUser) {
        userController.getUser(req, res);
    } else {
        userController.getUserList(req, res);
    }
})

userRoutes.get('/create', userController.createNewUserList);
userRoutes.post('/create', userController.createNewUser);

userRoutes.get('/:id/update', userController.updateUserForm);
userRoutes.post('/:id/update', userController.updateUser);

userRoutes.post('/:id/delete', userController.deleteUser);
userRoutes.post('/deleteAll', userController.deleteAllUser);


module.exports = userRoutes;