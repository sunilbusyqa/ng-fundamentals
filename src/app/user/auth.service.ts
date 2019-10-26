import { Injectable } from '@angular/core'
import { IUser } from './user.model'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { tap, catchError } from 'rxjs/operators'
import { of } from 'rxjs'

@Injectable()
export class AuthService {
    public currentUser:IUser

    constructor(private http:HttpClient) {}

    loginUser(userName: string, password: string) {
        // this.currentUser = {
        //     id: 1,
        //     userName: userName,
        //     firstName: 'John',
        //     lastName: 'Papa'
        // }
        let loginInfo = {
            username: userName,
            password: password
        }
        let options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        return this.http.post('/api/login', loginInfo, options)
            .pipe(tap(data => {
                this.currentUser = <IUser> data['user']
            }))
            .pipe(catchError(err => {
                return of(false)
            }))
    }

    checkAuthenticationStatus() {
        this.http.get('/api/currentIdentity')
            // .subscribe(data => {
            //     if (data instanceof Object) {
            //         this.currentUser = <IUser> data
            //     }
            // })
            .pipe(tap(data => {
                if (data instanceof Object) {
                    this.currentUser = <IUser> data
                }
            }))
            .subscribe()
    }

    isAuthenticated() {
        return !!this.currentUser
    }

    updateCurrentUser(firstName:string, lastName:string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName

        let options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }

        return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options)
    }

    logout() {
        let options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }

        return this.http.post('/api/logout', {}, options)
            .pipe(tap(() => {
                this.currentUser = undefined
            }))
    }
}