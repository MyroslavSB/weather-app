import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import {environment} from "../../../environments/environment";

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

  private apiKey: string = environment.api_key;

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedReq = req.clone({
      params: req.params.set('appid', this.apiKey)
    });
    return next.handle(modifiedReq);
  }
}
