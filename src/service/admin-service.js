const Admin = require('../model/admin');

/**
 * @description - This is a class that contains methods for admin
 **/

class adminService {
  /**
   * @description - This method is used to get all admin
   * @param {object} query - The query object
   * @returns {object} - Returns an object
   * @memberof adminService
   * */
  static async getAllAdmin(query) {
    // NOTE - this endpoint should only be accessible by the admin but for now, we'll allow anyone to access it
    const { page, limit } = query;
    const options = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(limit, 10) || 10,
      sort: { createdAt: -1 },
    };
    const admin = await adminService.paginate({}, options);
    if (!admin) {
      return {
        statusCode: 404,
        message: 'No admin found',
      };
    }
    return {
      statusCode: 200,
      message: 'admin  retrieved successfully',
      data: admin,
    };
  }

  /**
   * @description - This method is used to create an admin 
   * @param {object} data - The data object
   * @returns {object} - Returns an object
   * @memberof adminService
   * */
  static async createAdmin(data) {
    //const admin = await adminService.createAdmin(data);
    const admin = await Admin.create(data)
    if (!admin) {
      return {
        statusCode: 500,
        message: 'Error creating admin ',
      };
    }
    return {
      statusCode: 201,
      message: 'admin created successfully',
      data: admin,
    };
  }
}

module.exports = adminService;
