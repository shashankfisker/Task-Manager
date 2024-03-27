import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { addDoc } from 'firebase/firestore';
import { doc, setDoc } from "firebase/firestore"; 
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable, map } from 'rxjs';
@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.scss']
})
export class TaskCreatorComponent implements OnInit {
  myForm: FormGroup<any>;
  status: any = ["To Do", "In Progress", "Done"];
  taskOpen: any = false;
  submitted = true;
  formDataSet: any;
  firestore: Firestore = inject(Firestore)
  updateKey: boolean = false;
  enableKey =false;
  id :any
  constructor(private formBuilder: FormBuilder, private readonly firestoredb: Firestore) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      title: ['', Validators.required],
      desc: ['', Validators.required,],
      status: ['', Validators.required],
    });
    this.formDataSet = collectionData(collection(this.firestoredb, 'taskDetails'), { idField: 'id' }) as Observable<any>;
  }

  openForm() {
    this.taskOpen = !this.taskOpen;
    this.submitted = false; 
    this.updateKey = false;
  }

  onSubmit(form: FormGroup, key:any) {
    if(key == 'Update Task'){
      const data = doc(this.firestoredb, 'taskDetails', this.id);
      setDoc(data, {
        'title': form.value.title,
        'desc': form.value.desc,
        'status': form.value.status,
      })
    }else{
     const data = collection(this.firestore, 'taskDetails');
     addDoc(data, {
      'title': form.value.title,
      'desc': form.value.desc,
      'status': form.value.status,
    })
    }
    this.enableKey =false;
    this.myForm.reset();
    this.submitted = true;
    this.taskOpen = false;
  }

  editData(value: any) {
    this.myForm.setValue({
      'title': value.title,
      'desc': value.desc,
      'status': value.status,
    });
    this.id= value.id;
    this.enableKey =true;
    this.updateKey = true;
    this.taskOpen = !this.taskOpen;
    this.submitted = false;
  }

}

