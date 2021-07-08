const userCtrl = { 
};

const User = require('../models/User');

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.send(users)

}

userCtrl.createUsers = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json('user created')
}

userCtrl.deleteUsers = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.send('user deleted')
}

module.exports = userCtrl;