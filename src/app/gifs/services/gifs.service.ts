import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _historial: string[] = [];
  private apiKey: string ='4AOhHZ4zWqRawP0fj8et5i3nbsbnxcjq';

  //TODO: CANBIAR ANY POR SU TIPO CORRESPONDIOENTE
  public resultados: any[] = [];

  get historial(){    
    return [...this._historial];
  }

  constructor ( private http:HttpClient){}

  buscarGifs (query: string=''){
    query=query.trim().toLowerCase();

    if (query.trim().length===0){
      return;
    }

    if (!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
    }


    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=4AOhHZ4zWqRawP0fj8et5i3nbsbnxcjq&q=${query}&limit=10`)
      .subscribe((resp:any) =>{
        console.log(resp);
        this.resultados=resp.data;
      });
  }
}
