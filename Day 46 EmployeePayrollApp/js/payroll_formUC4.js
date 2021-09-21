//UC4

const save = () => {
    try{
        let EmployeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(EmployeePayrollData);
    } catch (e){
        return;
    }
}

function createAndUpdateStorage(EmployeePayrollData){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));

    if(employeePayrollList != undefined){
        employeePayrollList.push(EmployeePayrollData);
    } else{
        employeePayrollList = [EmployeePayrollData]
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))
}