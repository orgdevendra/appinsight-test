import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: string;
  name: string;
  role: string;
  status: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);

  login(user: User) {
    this.userSubject.next(user);
  }

  logout() {
    this.userSubject.next(null);
  }

  get user$(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  get currentUser(): User | null {
    return this.userSubject.value;
  }
}
