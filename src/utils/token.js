const jwt = require('jsonwebtoken');
const { JWTSECRET } = require('../config/keys');

/**
 * @description - This is a class that generates and verifies tokens
 */
class Token {
  /**
   * @description - This method is used to generate a token
   * @param {object} payload - The payload to be signed
   * @returns {string} - Returns a string
   * @memberof Token
   */
  static generateToken(user) {
    const payload = {
      subject: user.id,
      email: user.email,
    };

    console.log('payload', payload);

    const options = {
      expiresIn: '2h',
    };
    try {
      const token = jwt.sign(payload, 'SECRET', options);
      logger.info('token Successfully created');
      return token;
    } catch (err) {
      logger.error(`Error generating token ${JSON.stringify(err)}`);
      throw new Error(err.message);
    }
  }

  /**
   * @description - This method is used to verify a token
   * @param {string} token - The token to be verified
   * @returns {object} - Returns an object
   * @memberof Token
   */
  static verifyToken(token) {
    try {
      const decoded = jwt.verify(token, 'SECRET');
      logger.info('token Successfully verified');
      return decoded;
    } catch (err) {
      logger.error(`Error verifying token ${JSON.stringify(err)}`);
      throw new Error(err.message);
    }
  }

  /**
   *  @description - This method is used to decode a token
   * @param {string} token - The token to be decoded
   * @returns {object} - Returns an object
   * @memberof Token
   * */

  static decodeToken(token) {
    console.log('decodedtoken', token);
    try {
      const decoded = jwt.decode(token,);
      logger.info('token Successfully decoded');
      console.log('token Decoded Successfully', decoded);
      return decoded;
    } catch (err) {
      logger.error(`Error decoding token ${JSON.stringify(err)}`);
      console.log('token Decoded Error', err)

      throw new Error(err.message);
    }
  }
}

module.exports = Token;
