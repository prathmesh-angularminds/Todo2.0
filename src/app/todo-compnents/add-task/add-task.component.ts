import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoserviceService } from 'src/app/services/todoservice.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  // Time Variable Data
  startTimeHr: string = '00';
  startTimeMin: string = '00';
  endTimeHr: string = '00';
  endTimeMin: string = '00';
  startZone: string = "AM";
  endZone: string = "AM";

  // Form
  formData: FormGroup;

  // imp task class
  imp: { 'important1-btn': boolean, "active": boolean } = {
    'important1-btn': true,
    'active': false,
  };

  constructor(private service: TodoserviceService) {}

  ngOnInit(): void {
    this.formData = new FormGroup({
      taskTitle: new FormControl('', [Validators.required]),
      taskDesc: new FormControl('', [
        Validators.required,
        Validators.maxLength(25),
        Validators.maxLength(5),
        Validators.pattern('/S/'),
      ]),
    });
  }

  // function for changing timing
  cntChangeClicked(time: string, hr_min: string, type: string) {
    var cnt1 = parseInt(this.startTimeHr);
    var cnt2 = parseInt(this.startTimeMin);
    var cnt3 = parseInt(this.endTimeHr);
    var cnt4 = parseInt(this.endTimeMin);

    // For start hr
    if (time === 'start' && hr_min === 'hr') {
      if (type === 'inc' && cnt1 + 1 <= 23) {
        cnt1++;
        if (cnt1 <= 9) {
          this.startTimeHr = '0' + cnt1.toString();
        } else {
          this.startTimeHr = cnt1.toString();
        }
      }

      if (type === 'dec' && cnt1 - 1 >= 0) {
        cnt1--;
        if (cnt1 <= 9) {
          this.startTimeHr = '0' + cnt1.toString();
        } else {
          this.startTimeHr = cnt1.toString();
        }
      }
    }

    // For start Min
    if (time === 'start' && hr_min === 'min') {
      if (type === 'inc' && cnt2 + 1 <= 23) {
        cnt2++;
        if (cnt2 <= 9) {
          this.startTimeMin = '0' + cnt2.toString();
        } else {
          this.startTimeMin = cnt2.toString();
        }
      }

      if (type === 'dec' && cnt2 - 1 >= 0) {
        cnt2--;
        if (cnt2 <= 9) {
          this.startTimeMin = '0' + cnt2.toString();
        } else {
          this.startTimeMin = cnt2.toString();
        }
      }
    }

    // For End hr
    if (time === 'end' && hr_min === 'hr') {
      if (type === 'inc' && cnt3 + 1 <= 23) {
        cnt3++;
        if (cnt3 <= 9) {
          this.endTimeHr = '0' + cnt3.toString();
        } else {
          this.endTimeHr = cnt3.toString();
        }
      }

      if (type === 'dec' && cnt3 - 1 >= 0) {
        cnt3--;
        if (cnt3 <= 9) {
          this.endTimeHr = '0' + cnt3.toString();
        } else {
          this.endTimeHr = cnt3.toString();
        }
      }
    }

    // For End Min
    if (time === 'end' && hr_min === 'min') {
      if (type === 'inc' && cnt4 + 1 <= 23) {
        cnt4++;
        if (cnt4 <= 9) {
          this.endTimeMin = '0' + cnt4.toString();
        } else {
          this.endTimeMin = cnt4.toString();
        }
      }

      if (type === 'dec' && cnt4 - 1 >= 0) {
        cnt4--;
        if (cnt4 <= 9) {
          this.endTimeMin = '0' + cnt4.toString();
        } else {
          this.endTimeMin = cnt4.toString();
        }
      }
    }
  }

  // called when submit button is clicked
  onFormSubmit() {

    var newTask = {
      taskTitle: this.formData.value.taskTitle,
      taskDesc: this.formData.value.taskDesc,
      startTime: this.startTimeHr + ":" + this.startTimeMin + " " + this.startZone,
      endTime: this.endTimeHr + ":" + this.endTimeMin + " " + this.endZone, 
      isImp: this.imp['active']
    }

    this.service.addNewTask(newTask)
    this.formData.reset();
    this.imp['active'] = false;
    this.startTimeHr = '00';
    this.startTimeMin = '00';
    this.endTimeHr = '00';
    this.endTimeMin = '00';
  }

  // to add important task tag
  addImportant() {

    this.imp['active'] = !this.imp['active'];

  }
}
