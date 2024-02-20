import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import _ from 'lodash'

import { BlogService } from '../services/blog.service';
import { BlogGroup } from '../models/blog.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  blogs: BlogGroup[] = []

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.chunkBlogs()
  }

  private chunkBlogs() {
    this.blogService.get().pipe(map(blogs => {
      const featured = blogs.slice(0, 2)
      const list = [featured, ..._.chunk(blogs.slice(2, 11), 3)]

      return list
    })).subscribe(blogs => {
      this.blogs = blogs;
    })
  }
}
