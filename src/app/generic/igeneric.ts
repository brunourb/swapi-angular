import { Observable } from 'rxjs';

export interface Igeneric<T,N> {
    post(data : T);
    put(id? : N, data? : T);
    patch(id? : N, data?: T);
    get(): Observable<T[]>; //Array<T>;
    getById(id? : N) : Observable<T>;
    delete(id? : N);
}