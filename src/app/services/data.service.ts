import { Injectable } from '@angular/core';
import { collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  addStudent(student: Student) {
    const studentRef = doc(collection(db, 'students'))
    return setDoc(studentRef, student)
  }

  async getAllStudents(){
    const snapshot = await getDocs(collection(db, 'students'))
    return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}) as Student)
  }

  // deleteStudent(id: string){
  //   const studentRef = doc(collection(db, 'students'), id)
  //   return deleteDoc(studentRef)
  // }

  async deleteStudent(id: string){
    const studentRef = await getDocs(query(collection(db, 'students'), where('id', '==', id)))
    const docSnap = studentRef.docs[0]
    deleteDoc(docSnap.ref)
  }

}
