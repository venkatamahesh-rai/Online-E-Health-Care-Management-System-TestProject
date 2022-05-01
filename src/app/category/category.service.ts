import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, share } from "rxjs/operators";
import { Observable } from 'rxjs';
import { CategoryModel } from '../product/category.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  env = environment

  public get(){
    return this.http.get(this.env.url+"Cateogry").pipe(map((res: CategoryModel[])=> res));
  }

  public getById(id: number){
    return this.http.get(this.env.url+"Cateogry/"+id).pipe(map((res: CategoryModel)=> res));
  }

  public add(record: CategoryModel): Observable<any> {
		return this.http.post(this.env.url+"Cateogry", record, {
			responseType: "text",
		});
	}

  public update(record: CategoryModel): Observable<any> {
		return this.http.put(this.env.url+"Cateogry", record, {
			responseType: "text",
		});
	}
  
}
