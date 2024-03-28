const employee = {
  name: "Bukayo",
  streetAddress: "7",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  const { [key]: deletedEmployee, ...newEmployee } = employee;
  return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
  console.log(employee);
}
