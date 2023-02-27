import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _historial: string[] = [];
  private apiKey: string ='4AOhHZ4zWqRawP0fj8et5i3nbsbnxcjq';

  get historial(){    
    return [...this._historial];
  }

  buscarGifs (query: string=''){
    query=query.trim().toLowerCase();

    if (query.trim().length===0){
      return;
    }

    if (!this._historial.includes(query)){
      this._historial.unshift(query);
    }

    this._historial = this._historial.splice(0,10);

    console.log(this._historial);
  }
}
