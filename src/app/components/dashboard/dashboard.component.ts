import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../model/student';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  data = inject(DataService)

  studentList: Student[] = []

  students: Student = {
    id: '',
    firstName : '',
    lastName: '',
    age : 0
  }

  ngOnInit(): void {
      this.getAllStudents()
  }

  addStudent() {
    this.data.addStudent(this.students)
    this.students.firstName = '',
    this.students.lastName= '',
    this.students.age = 0
  }

  getAllStudents(){
    this.data.getAllStudents().then((student: Student[]) =>{
      this.studentList = student
    })
  }

  deleteStudent(id: string){
    this.data.deleteStudent(id)
    this.getAllStudents()
  }

  
}
