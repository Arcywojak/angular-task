import { Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

export class BaseCrudService<T> {

    constructor(@Inject(String) private url: string, protected http: HttpClient) {}

    create(body: T) {
        return this.http.post<T>(this.url, body);
    }

    readOne(id: string): Observable<T> {
        return this.http.get<T>(`${this.url}/${id}`);
    }

    readAll(): Observable<T[]> {
        return this.http.get<T[]>(this.url);
    }

    update(item: T): Observable<T> {
        return this.http.put<T>(this.url, item);
    }

    delete(id: string) {
        return this.http.delete(`${this.url}/${id}`);
    }
}