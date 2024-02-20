import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  serverUrl: string = 'api/blogs'

  constructor(private http: HttpClient) { }

  get(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.serverUrl)
  }
}
