import { AuthService } from "./auth.service";
import { of } from 'rxjs';

describe('AuthService', () => {
    
    let authService: AuthService
    let mockHttp

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['post', 'get'])
        authService = new AuthService(mockHttp)
    })

    describe('login', () => {
        it('should login', () => {
            var username = "johnpapa"
            var password = "password"

            mockHttp.post.and.returnValue(of({
                id: 1,
                userName: 'johnpapa',
                password: 'password'
            }))
            authService.loginUser(username, password)

            expect(mockHttp.post).toHaveBeenCalledWith('/api/login', {
                username: username,
                password: password
            }, jasmine.any(Object))
        })
    })
})