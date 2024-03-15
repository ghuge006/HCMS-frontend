import { Component, OnInit } from '@angular/core';
import { employee } from '../../model/employee.model';
import { employeeService } from '../../services/employee.service';
import { response } from 'express';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  employee: employee[] = [];

  constructor(private employeeService: employeeService) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee(): void {
    this.employeeService.getAllemployee().subscribe(response => this.employee = response);
  }

}
