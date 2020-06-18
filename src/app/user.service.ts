import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor(private http: HttpClient) { }
  posts: string;

  getPosts(): string {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').toPromise().then(posts => {
      this.posts = posts.toString();
      console.log('posts:' + posts);
      console.log('as string' + posts.toString());
    });
    return this.posts;
  }
}
