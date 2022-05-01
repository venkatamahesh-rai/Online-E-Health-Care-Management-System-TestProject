import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment"
import { map, share } from "rxjs/operators";
import { ProductModel } from '../product.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  env = environment

  public get(){
    return this.http.get(this.env.url+"Product").pipe(map((res: ProductModel[])=> res));
  }

  public getById(id: number){
    return this.http.get(this.env.url+"Product/"+id).pipe(map((res: ProductModel)=> res));
  }

  public add(record: ProductModel): Observable<any> {
		return this.http.post(this.env.url+"Product", record, {
			responseType: "text",
		});
	}

  public update(record: ProductModel): Observable<any> {
		return this.http.put(this.env.url+"Product", record, {
			responseType: "text",
		});
	}
  
}
