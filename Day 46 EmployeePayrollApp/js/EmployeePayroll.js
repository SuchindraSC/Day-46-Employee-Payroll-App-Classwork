//UC1
class EmployeePayrollData{
    get id(){ return this._id; }
    set id(id){
        this._id = id;
    }

    get name() {return this._name; }
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect';
    }

    get profilePic(){ return this._profilePic; }
    set profilePic(profilePic){
        this._profilePic = profilePic;
    }

    get gender(){ return this._gender; }
    set gender(gender){
        this._gender = gender;
    }

    get department() { return this._department; }
    set department(department){
        this._department = department;
    }

    get salary() { return this._salary; }
    set salary(salary){
        this._salary = salary;
    }

    get note() { return this._note; }
    set note(note){
        this._note = note;
    }

    get startDate() { return this._startDate; }
    set startDate(startDate){
        this._startDate = startDate;
    }

    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocalDataString("en-US", options);
        return "id='" + this.id +"' name='"+this.name+"' gender='"+this.gender+"' profilePic='"+this.profilePic+"' department='"+this.department+"' salary='"+this.salary+"' startDate='"+this.startDate+"' note='"+this.note+"'";
    }
}





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

//UC5
const resetForm = () => {
    setValue('#name','');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','January');
    setValue('#year','2020');
}

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}
