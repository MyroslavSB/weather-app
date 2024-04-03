import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Params} from "@angular/router";
import {environment} from "../../../environments/environment";

export class AbstractHttpComponent {
  protected baseURL = environment.api_url

  constructor(
    protected http: HttpClient
  ) {
  }

  public httpPostRequest(
    url: string,
    body: any = {},
    params: Params = {},
  ): Observable<any> {

    return this.http.post<any>(this.baseURL + url, body, {params});
  }

  public httpGetRequest<ResType>(url: string, params: Params = {}): Observable<ResType> {
    return this.http.get<any>(this.baseURL + url, {params});
  }
}
