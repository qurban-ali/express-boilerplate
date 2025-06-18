const User = require('../models/user.model');


const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch users', error: err.message });
  }
};


const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).select('name email');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch user', error: err.message });
  }
};



module.exports = {
  getAllUsers,
  getUserById
};