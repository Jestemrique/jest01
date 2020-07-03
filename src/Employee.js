const axios = require('axios');
module.exports = class Employee {
  constructor(employeeInfo) {
    this.id = employeeInfo.id;
    this.first_name = employeeInfo.first_name;
    this.last_name = employeeInfo.last_name;
    this.email = employeeInfo.email;
  }
  add(employeeInfo) {
    const options = {
      method: 'post',
      data: employeeInfo,
      url: 'http://localhost:3000/employees',
    };
    axios(options);
  }
};
