import { AnyStyledComponent } from 'styled-components';

export type Resolver<T> = (value: T) => void;

// Export types used across your skills here
export interface SkillData {
  employeeId: string;
  employeeFirstName: string;
  employeeLastName: string;
}

export interface EmployeeData {
  id: string;
  fullName: string;
}

export interface LeaveData {
  startDate: string;
  endDate: string;
}

export interface ChildData {
  firstName: string;
  lastName: string;
  birthDate: string;
}
