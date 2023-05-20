const { successResponse, errorResponse } = require('../utils/response');
const UserModel = require('../model/user');
const Token = require('../utils/token');

async function isUserAuthenticated(req, res, next) {
  const { authorization } = req.headers;
  // console.log('authorization', authorization);

  if (!authorization) {
    return errorResponse(res, 499, 'Token required');
  }

  // console.log('authorization', authorization.toString().substr(7));
  const token = await Token.decodeToken(authorization.toString().substr(7));

  // console.log('decoded token 11', token);

  if (!token) {
    return errorResponse(res, 498, 'Invalid token');
  }

  // console.log('decoded token id',token.subject);

  const user = await UserModel.findById(token.subject);

  if (!user) {
    return errorResponse(res, 401, 'Invalid user token');
  }

  req.user = user;
  return next();
}

module.exports = {
  isUserAuthenticated,
};
