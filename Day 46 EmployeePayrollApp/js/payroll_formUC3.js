//UC3
const save = () => {
    try {
        let EmployeePayrollData = createEmployeePayroll();
    } catch (e){
        return;
    }
}

const createEmployeePayroll = () => {
    let EmployeePayrollData = new EmployeePayrollData();
    try{
        EmployeePayrollData.name = getInputValueById('#name');
    } catch(e){
        setTextValue('.text-error', e);
        throw e;
    }
    EmployeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    EmployeePayrollData.gender = getSelectedValues('[name=gender').pop();
    EmployeePayrollData.department = getSelectedValues('[name=department]').pop();
    EmployeePayrollData.salary = getInputValueById('#salary');
    EmployeePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#id')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
    EmployeePayrollData.date = Date.parse(date);
    alert(EmployeePayrollData.toString());
    return EmployeePayrollData;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getInputElmentValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}
