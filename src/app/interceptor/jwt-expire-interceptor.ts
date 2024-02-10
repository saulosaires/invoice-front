import {inject, Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest} from "@angular/common/http";
import {tap} from "rxjs";

import {MatSnackBar} from "@angular/material/snack-bar";
import {StorageService} from "../service/storage/storage.service";
import {Router} from "@angular/router";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private storageService:StorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    return next.handle(req).pipe(tap({
      error: (error) => {
        if (error.status === 403) {
          this.storageService.removeItem("user")
          this.storageService.removeItem("token")
          this.router.navigate(['/login']).then(()=>{
          });

        }
      }
    }));
  }
}

export const jwtExpireInterceptor : HttpInterceptorFn = (req,next) =>{

  const token  = inject(StorageService).getItem('token');
  const authReq = req.clone({headers : req.headers.set('Authorization',`Bearer ${token}`)})
  return next(authReq);
};
