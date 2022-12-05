import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TodoserviceService } from "src/app/services/todoservice.service";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.scss"],
})
export class AddTaskComponent implements OnInit {
  // Date Instance

  currentDate: Date = new Date();

  currentMin: string = "" + this.currentDate.getMinutes();
  currentHr: string = this.currentDate.getHours() + "";
  parseIntDemo = parseInt;

  // Time Variable Data
  startTimeHr: string =
    this.currentDate.getHours() < 10
      ? "0" + this.currentDate.getHours()
      : "" + this.currentDate.getHours();
  startTimeMin: string =
    this.currentDate.getMinutes() < 10
      ? "0" + this.currentDate.getMinutes()
      : "" + this.currentDate.getMinutes();
  endTimeHr: string =
    this.currentDate.getHours() < 10
      ? "0" + this.currentDate.getHours()
      : "" + this.currentDate.getHours();
  endTimeMin: string =
    this.currentDate.getMinutes() < 10
      ? "0" + this.currentDate.getMinutes()
      : "" + this.currentDate.getMinutes();
  isCompleted: boolean = false;

  // Form
  formData: FormGroup;

  // imp task class
  imp: { "important1-btn": boolean; active: boolean } = {
    "important1-btn": true,
    active: false,
  };

  constructor(private service: TodoserviceService) {
    setInterval(() => {
      this.currentDate = new Date();
      console.log(this.currentDate);
      this.startTimeHr =
        this.currentDate.getHours() < 10
          ? "0" + this.currentDate.getHours()
          : "" + this.currentDate.getHours();
      this.startTimeMin =
        this.currentDate.getMinutes() < 10
          ? "0" + this.currentDate.getMinutes()
          : "" + this.currentDate.getMinutes();
      this.endTimeHr =
        this.currentDate.getHours() < 10
          ? "0" + this.currentDate.getHours()
          : "" + this.currentDate.getHours();
      this.endTimeMin =
        this.currentDate.getMinutes() < 10
          ? "0" + this.currentDate.getMinutes()
          : "" + this.currentDate.getMinutes();
    }, 100000);
  }

  ngOnInit(): void {
    if (history.state.cards === undefined) {
      this.formData = new FormGroup({
        taskTitle: new FormControl("", [Validators.required]),
        taskDesc: new FormControl("", [Validators.required]),
      });
    } else {
      this.formData = new FormGroup({
        taskTitle: new FormControl(history.state.cards.taskTitle, [
          Validators.required,
          Validators.maxLength(25),
          Validators.minLength(5),
        ]),
        taskDesc: new FormControl(history.state.cards.taskDesc, [
          Validators.required,
        ]),
      });

      // Setting Hrs
      var cardsData = history.state.cards;
      this.startTimeHr =
        cardsData.startTime.charAt(0) + "" + cardsData.startTime.charAt(1);
      this.startTimeMin =
        cardsData.startTime.charAt(3) + "" + cardsData.startTime.charAt(4);
      this.endTimeHr =
        cardsData.endTime.charAt(0) + "" + cardsData.endTime.charAt(1);
      this.endTimeMin =
        cardsData.startTime.charAt(3) + "" + cardsData.startTime.charAt(4);
      this.isCompleted = false;
    }
  }

  // function for changing timing
  cntChangeClicked(time: string, hr_min: string, type: string) {
    var cnt1 = parseInt(this.startTimeHr);
    var cnt2 = parseInt(this.startTimeMin);
    var cnt3 = parseInt(this.endTimeHr);
    var cnt4 = parseInt(this.endTimeMin);

    // For start hr
    if (time === "start" && hr_min === "hr") {
      if (type === "inc" && cnt1 + 1 < 24) {
        cnt1++;
        if (cnt1 <= 9) {
          this.startTimeHr = "0" + cnt1.toString();
        } else {
          this.startTimeHr = cnt1.toString();
        }
      }

      if (type === "dec" && cnt1 - 1 >= 0) {
        cnt1--;
        if (cnt1 <= 9) {
          this.startTimeHr = "0" + cnt1.toString();
        } else {
          this.startTimeHr = cnt1.toString();
        }
      }
    }

    // For start Min
    if (time === "start" && hr_min === "min") {
      if (type === "inc" && cnt2 + 1 <= 59) {
        cnt2++;
        if (cnt2 <= 9) {
          this.startTimeMin = "0" + cnt2.toString();
        } else {
          this.startTimeMin = cnt2.toString();
        }
      }

      if (type === "dec" && cnt2 - 1 >= 0) {
        cnt2--;
        if (cnt2 <= 9) {
          this.startTimeMin = "0" + cnt2.toString();
        } else {
          this.startTimeMin = cnt2.toString();
        }
      }
    }

    // For End hr
    if (time === "end" && hr_min === "hr") {
      if (type === "inc" && cnt3 + 1 < 24) {
        cnt3++;
        if (cnt3 <= 9) {
          this.endTimeHr = "0" + cnt3.toString();
        } else {
          this.endTimeHr = cnt3.toString();
        }
      }

      if (type === "dec" && cnt3 - 1 >= 0) {
        cnt3--;
        if (cnt3 <= 9) {
          this.endTimeHr = "0" + cnt3.toString();
        } else {
          this.endTimeHr = cnt3.toString();
        }
      }
    }

    // For End Min
    if (time === "end" && hr_min === "min") {
      if (type === "inc" && cnt4 + 1 <= 59) {
        cnt4++;
        if (cnt4 <= 9) {
          this.endTimeMin = "0" + cnt4.toString();
        } else {
          this.endTimeMin = cnt4.toString();
        }
      }

      if (type === "dec" && cnt4 - 1 >= 0) {
        cnt4--;
        if (cnt4 <= 9) {
          this.endTimeMin = "0" + cnt4.toString();
        } else {
          this.endTimeMin = cnt4.toString();
        }
      }
    }
  }

  // called when submit button is clicked
  onFormSubmit() {
    // Task is added if the form is valid
    var domElement: any = document.getElementsByClassName("timing-msg");
    var totalMinutes = ((parseInt(this.endTimeHr) -  parseInt(this.startTimeHr)) * 60) +
    (parseInt(this.startTimeMin) > parseInt(this.endTimeMin)
      ? parseInt(this.startTimeMin) - parseInt(this.endTimeMin)
      : parseInt(this.endTimeMin) - parseInt(this.startTimeMin))

    var newTask = {
      taskTitle: this.formData.value.taskTitle,
      taskDesc: this.formData.value.taskDesc,
      startTime: this.startTimeHr + ":" + this.startTimeMin,
      endTime: this.endTimeHr + ":" + this.endTimeMin,
      isImp: this.imp["active"],
      optionBtn: false,
      isCompleted: this.isCompleted,
      completitionTime: {
        totalMinutes: totalMinutes,
        minuteCounter: totalMinutes,
        precentage: 0,
      },
    };

    if (parseInt(this.startTimeHr) > parseInt(this.endTimeHr)) {
      if (parseInt(this.startTimeMin) > parseInt(this.endTimeMin)) {
        domElement[0].innerText = "Start Time is More than End time";
      } else {
        domElement[0].innerText = "Start Time is More than End time";
      }
    } else if (parseInt(this.startTimeHr) === parseInt(this.endTimeHr)) {
      if (parseInt(this.startTimeMin) === parseInt(this.endTimeMin))
        domElement[0].innerText = "Start Time & End Time are same";
      else if (parseInt(this.startTimeMin) > parseInt(this.endTimeMin)) {
        domElement[0].innerText = "Start Time is more than End Time";
      } else if (this.formData.valid) {
        this.service.addNewTask(newTask);
        this.formData.reset();
        this.imp["active"] = false;
        this.isCompleted = false;
        this.startTimeHr =
          this.currentDate.getHours() < 10
            ? "0" + this.currentDate.getHours()
            : "" + this.currentDate.getHours();
        this.startTimeMin =
          this.currentDate.getMinutes() < 10
            ? "0" + this.currentDate.getMinutes()
            : "" + this.currentDate.getMinutes();
        this.endTimeHr =
          this.currentDate.getHours() < 10
            ? "0" + this.currentDate.getHours()
            : "" + this.currentDate.getHours();
        this.endTimeMin =
          this.currentDate.getMinutes() < 10
            ? "0" + this.currentDate.getMinutes()
            : "" + this.currentDate.getMinutes();
        domElement[0].innerText = "";
      } else {
        domElement[0].innerText = "Task Title and Description not given";
      }
    } else if (this.formData.valid) {
      this.service.addNewTask(newTask);
      this.formData.reset();
      this.imp["active"] = false;
      this.isCompleted = false;
      this.startTimeHr =
        this.currentDate.getHours() < 10
          ? "0" + this.currentDate.getHours()
          : "" + this.currentDate.getHours();
      this.startTimeMin =
        this.currentDate.getMinutes() < 10
          ? "0" + this.currentDate.getMinutes()
          : "" + this.currentDate.getMinutes();
      this.endTimeHr =
        this.currentDate.getHours() < 10
          ? "0" + this.currentDate.getHours()
          : "" + this.currentDate.getHours();
      this.endTimeMin =
        this.currentDate.getMinutes() < 10
          ? "0" + this.currentDate.getMinutes()
          : "" + this.currentDate.getMinutes();
      domElement[0].innerText = "";
    } else {
      domElement[0].innerText = "Task Title and Description not given";
    }
  }

  // to add important task tag
  addImportant() {
    this.imp["active"] = !this.imp["active"];
  }
}
