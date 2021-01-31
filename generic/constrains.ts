interface Employee {
    pay(): void;
}

class PartTimeEmployee implements Employee {
    pay() {
        console.log('part time employee pay');
    }
    workPartTime() {
        console.log('working...');
    }
}

class FullTimeEmployee implements Employee {
    pay() {
        console.log('full time employee pay');
    }
    workFullTime() {
        console.log('working...');
    }
}

function pay<T extends Employee>(employee: T) {
    employee.pay();
    return employee;
}

const partTimeEmployee = new PartTimeEmployee();
const fullTimeEmployee = new FullTimeEmployee();

pay(partTimeEmployee).workPartTime();
pay(fullTimeEmployee).workFullTime();
