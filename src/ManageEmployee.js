const Employee = require('./Employee');

(async () => {
  const employeeInfo = {
    id: 6,
    first_name: 'Sebastian',
    last_name: 'Eschweiler',
    email: 'sebastian@codingthesmartway.com',
  };

  const employee = new Employee(employeeInfo);
  employee.add(employeeInfo);
  console.log('done');
})();
