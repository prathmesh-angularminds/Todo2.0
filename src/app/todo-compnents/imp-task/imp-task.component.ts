import { Component, OnInit } from "@angular/core";
import { TodoserviceService } from "src/app/services/todoservice.service";
import Lottie from "lottie-web";
@Component({
  selector: "app-imp-task",
  templateUrl: "./imp-task.component.html",
  styleUrls: ["./imp-task.component.scss"],
})
export class ImpTaskComponent implements OnInit {
  completion: number = 0;
  allTask: any[];
  currentTime: Date = new Date();
  parseIntDemo: any;
  constructor(private service: TodoserviceService) {
    this.allTask = this.service.allTask;
    console.log(this.allTask);
    this.parseIntDemo = parseInt;
    setInterval(() => {
      for (var i = 0; i < this.allTask.length; i++) {
        if (
          this.allTask[i].startTime.charAt(0) +
            this.allTask[i].startTime.charAt(0) <
          this.currentTime.getHours()
        ) {
          if (
            (this.allTask[i].completitionTime.totalMinutes - this.allTask[i].completitionTime.minuteCounter) <
            this.allTask[i].completitionTime.totalMinutes
          ) {
            this.allTask[i].completitionTime.minuteCounter =
              this.allTask[i].completitionTime.minuteCounter - 1;
            this.allTask[i].completitionTime.precentage =
              ((this.allTask[i].completitionTime.totalMinutes -
                this.allTask[i].completitionTime.minuteCounter) /
                this.allTask[i].completitionTime.totalMinutes) *
              100;
          } else {
            this.addToCompleted(i);
          }

        }
      }
      this.service.lStorage.setItem("allTask", JSON.stringify(this.allTask));
      this.allTask = JSON.parse(this.service.lStorage.getItem("allTask"));
      //console.log("ndsjd")
    }, 100000);
  }

  ngOnInit(): void {}

  // form showing option div on page
  showOption(index: number) {
    for (var i = 0; i < this.allTask.length; i++) {
      if (index !== i) this.allTask[i].optionBtn = false;
    }

    this.allTask[index].optionBtn = !this.allTask[index].optionBtn;
  }

  onImpTaskDelete(index: number) {
    this.allTask[index].optionBtn = false;
    var deletedTask = this.allTask[index];
    this.allTask.splice(index, 1);
    this.service.deleteTask(this.allTask, "all", deletedTask);
  }

  deleteAll() {
    this.allTask = [];
    this.service.allTaskDelete("all");
  }

  onTaskUpdate(index: number) {
    this.allTask[index].optionBtn = false;
    this.allTask.splice(index, 1);
    this.service.lStorage.setItem("allTask", JSON.stringify(this.allTask));
    this.allTask = JSON.parse(this.service.lStorage.getItem("allTask"));
  }

  // Function add task as completed
  addToCompleted(index: number) {
    this.allTask[index].optionBtn = false;
    this.allTask[index].isCompleted = true;
    this.service.addToCompleted(this.allTask[index]);
    this.allTask.splice(index, 1);
    this.service.lStorage.setItem("allTask", JSON.stringify(this.allTask));
    this.allTask = JSON.parse(this.service.lStorage.getItem("allTask"));
  }
}
