import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import _ from 'lodash';
import { map } from 'rxjs';

import { BlogGroup } from '../models/blog.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive-page',
  templateUrl: './archive-page.component.html',
  styleUrl: './archive-page.component.css'
})
export class ArchivePageComponent implements OnInit {
  blogs: BlogGroup[] = []
  page: number = 0

  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.page = Number(this.activatedRoute.snapshot.queryParamMap.get('page') ?? 1)
    this.activatedRoute.queryParams.subscribe(s => {
      this.chunkBlogs()
    })
  }

  private chunkBlogs() {
    this.blogService.get().pipe(map(blogs => {
      const startIndex = (this.page - 1) * 2;
      const endIndex = startIndex + 2;

      return _.chunk(blogs, 3).slice(startIndex, endIndex)
    })).subscribe(blogs => {
      this.blogs = blogs;
    })
  }

  next() {
    this.router.navigate(['/archive'], { queryParams: { page: ++this.page } })
  }

  previous() {
    this.router.navigate(['/archive'], { queryParams: { page: --this.page } })
  }
}
