import {  Input,Component, OnInit, Output, EventEmitter } from '@angular/core';
import { doc, deleteDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-task-showcase',
  templateUrl: './task-showcase.component.html',
  styleUrls: ['./task-showcase.component.scss']
})

export class TaskShowcaseComponent implements OnInit {
  getData :any
  constructor(private readonly firestoredb: Firestore){}
  @Input() enableKey :boolean
  @Input() formDataSet: any;
  @Output() editValue = new EventEmitter<any>();

  ngOnInit(): void {
    this.formDataSet.subscribe( (value :any) => {
      this.getData = value;
      console.log(value)
     });
  }

  onDelete(index :any){
    deleteDoc(doc(this.firestoredb, 'taskDetails',  this.getData[index].id));
  }


  onEdit(index :any){
    this.editValue.emit(this.getData[index]);
  }
}

