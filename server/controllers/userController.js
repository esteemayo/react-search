const { StatusCodes } = require('http-status-codes');
const users = require('../users');

exports.getAllUsers = (req, res) => {
  const { q } = req.query;

  const keys = ['first_name', 'last_name', 'email'];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };

  res.status(StatusCodes.OK).json(search(users).splice(0, 10));
};
