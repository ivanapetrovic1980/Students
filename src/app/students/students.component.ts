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
  selectedStudent: Student;

  student: Student = {
    id: 1,
    name: 'Petar Mitic',
    gender: '',
    description: ''
  };

  // student = 'Petar Petrovic';

  onSelectedStudent(student) {
    this.selectedStudent = student;
  }

  constructor() { }

  ngOnInit() {
  }

}
