import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { STUDENTS } from '../mock-student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students = STUDENTS;

  student: Student = {
    id: 1,
    name: 'Petar Mitic'
  };

  // student = 'Petar Petrovic';
  constructor() { }

  ngOnInit() {
  }

}
