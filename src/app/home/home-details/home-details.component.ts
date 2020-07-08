import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/course/core/course.service';
import { CourseModel } from 'src/app/course/core/course.model';


@Component({
  selector: 'cm-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit {

  course: CourseModel;  
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id;
    this.courseService.getCourse(id).subscribe(course => {
      this.course = course;
    });
  }
}
