import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoserviceService } from 'src/app/services/todoservice.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  
  // Date Instance
  currentDate: Date = new Date();
  currentMin: string = this.currentDate.getMinutes() < 10 ? "0" + this.currentDate.getMinutes()  : "" + (this.currentDate.getMinutes());
  currentHr: string = this.currentDate.getHours() > 12 ? "0" + (this.currentDate.getHours() - 12)  : "" + (this.currentDate.getHours());
  parseIntDemo = parseInt;

  // Time Variable Data
  startTimeHr: string = this.currentDate.getHours() > 12 ? "0" + (this.currentDate.getHours() - 12)  : "" + (this.currentDate.getHours());
  startTimeMin: string = this.currentDate.getMinutes() < 10 ? "0" + this.currentDate.getMinutes() : "" +this.currentDate.getMinutes();
  endTimeHr: string = this.currentDate.getHours() > 12 ? "0" + (this.currentDate.getHours() - 12)  : "" + (this.currentDate.getHours());
  endTimeMin: string = this.currentDate.getMinutes() < 10 ? "0" + this.currentDate.getMinutes() : "" +this.currentDate.getMinutes();
  startZone: string = "";
  endZone: string = "";

  // Form
  formData: FormGroup;

  // imp task class
  imp: { 'important1-btn': boolean, "active": boolean } = {
    'important1-btn': true,
    'active': false,
  };

  constructor(private service: TodoserviceService) {}

  ngOnInit(): void {

    console.log(typeof(this.currentDate.getHours()))
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
      if (type === 'inc' && cnt1 + 1 <= 12) {
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
      if (type === 'inc' && cnt2 + 1 <= 59) {
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
      if (type === 'inc' && cnt3 + 1 <= 12) {
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
      if (type === 'inc' && cnt4 + 1 <= 59) {
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

  // Set Zone
  setZone(zone: string,type:string) {

    if(zone === "start") {
      this.startZone = type;
    } else {
      this.endZone = type;
    }

    console.log("Start Time",this.startZone)
    console.log("End Time",this.endZone)

  }

  // called when submit button is clicked
  onFormSubmit() {

    var newTask = {
      taskTitle: this.formData.value.taskTitle,
      taskDesc: this.formData.value.taskDesc,
      startTime: this.startTimeHr + ":" + this.startTimeMin + " " + this.startZone,
      endTime: this.endTimeHr + ":" + this.endTimeMin + " " + this.endZone, 
      isImp: this.imp['active'],
      optionBtn: false
    }

    this.service.addNewTask(newTask)
    this.formData.reset();
    this.imp['active'] = false;
    this.startTimeHr = this.currentDate.getHours() > 12 ? "0" + (this.currentDate.getHours() - 12)  : "" + (this.currentDate.getHours());;
    this.startTimeMin = `${this.currentDate.getMinutes()}`;
    this.endTimeHr = this.currentDate.getHours() > 12 ? "0" + (this.currentDate.getHours() - 12)  : "" + (this.currentDate.getHours());;
    this.endTimeMin = `${this.currentDate.getMinutes()}`;
    this.startZone = "";
    this.endZone = "";
  }

  // to add important task tag
  addImportant() {

    this.imp['active'] = !this.imp['active'];

  }
}
