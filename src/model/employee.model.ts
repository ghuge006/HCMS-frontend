import { department } from "./department.model";
import { role } from "./role.model";

export interface employee {

    EmployeeID: number,
    firstName: string,
    lastName: string,
    gender: string,
    dateOfBirth: string,
    email: string,
    phone: string,
    address: string,
    nationalId: string,
    MaritalStatus: string,
    emergencyContactName: string,
    emergencyContactPhone: string,
    department: department | null,
    position: string,
    skillSet: string,
    employmentStartDate: string,
    employmentEndDate: string | null,
    salary: string,
    employmentStatus: string,
    bankAccNumber: string,
    manager: employee | null,
    role: role | null
}
