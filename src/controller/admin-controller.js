const { successResponse, errorResponse } = require('../utils/response');
const adminService = require('../service/admin-service');

/**
 * @description - This is a class that contains methods for admin
 **/

class adminController {
  /**
   * @description - This method is used to get all admin
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @returns {object} - Returns an object
   * @memberof adminController
   * */
  static async getAllAdmin(req, res) {
    try {
      const { query } = req;
      const admin = await adminService.getAllAdmin(query);
      if (admin.statusCode === 404) {
        return errorResponse(res, admin.statusCode, admin.message);
      }
      return successResponse(
        res,
        admin.statusCode,
        admin.message,
        admin
      );
    } catch (error) {
      return errorResponse(res, 500, error.message);
    }
  }
}

module.exports = adminController;
