import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.scss']
})
export class TaskCreatorComponent {
  public myForm : FormGroup = new FormGroup({
    title : new FormControl(''),
    desc : new FormControl(''),
    status : new FormControl('')

  })
  status : any =[ "To Do" ,"In Progress", "Done"]
  taskOpen :any = false;
  openForm(){
    this.taskOpen = !this.taskOpen;
  }
  onSubmit(form:FormGroup){
console.log(form.value.title)
console.log(form.value.desc)
console.log(form.value.status)
  }
}
