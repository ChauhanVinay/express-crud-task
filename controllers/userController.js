const getAllUsers = (req, res, next) => {
   try {
    res.send('Fetching all users');
  } catch (err) {
    next(err);
  }
}

const addUser = (req, res) => {
    try {
    res.send('Adding a new user');
  } catch (err) {
    next(err);
  }
}

const getUserById = (req, res) => {
   try {
    const { id } = req.params;
    if (!id) {
      const error = new Error('User ID required');
      error.statusCode = 400;
      return next(error);
    }
    res.send(`Fetching user with ID: ${id}`);
  } catch (err) {
    next(err);
  }
}

module.exports = {
    getAllUsers,
    addUser,
    getUserById
}