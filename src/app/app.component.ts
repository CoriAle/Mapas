import { Component } from '@angular/core';
import { MapasService } from './services/mapas.service';
import { Marcador } from './interfaces/marcador.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  lat: number = 14.834355;
  lng: number = -91.518305;
  zoom:number= 16;
  marcadorSel: any = null;
  draggable:string= "1";
 constructor(private _ms: MapasService){
 		this._ms.cargarMarcadores();
 }
  clickMapa(evento){
  	console.log(evento);
  	let nuevoMarcador: Marcador = {
  		lat: evento.coords.lat,
  		lng: evento.coords.lng,
  		titulo: "Sin título",
  		draggable: true
  	}
  	this._ms.insertarMarcador(nuevoMarcador);
  }
  clickMarcador(marcador:Marcador, i:number){
  	console.log(marcador, i);
  	this.marcadorSel = marcador;
  	if(this.marcadorSel.draggable)
  		this.draggable = "1"
  	else
  		this.draggable = "0"
  }
  dragEndMarcador(marcador:Marcador, evento){
  	console.log(marcador, evento);
  	let lat = evento.coords.lat;
  	let lng = evento.coords.lng;
  	marcador.lat = lat;
  	marcador.lng = lng;
  	this._ms.guardarMarcadores();
  }
  borrarMarcador(idx:number){
  	this._ms.borrarMarcador(idx);
  	this.marcadorSel = null;
  }
  cambiarDraggable(){
  	console.log(this.draggable);
  	if(this.draggable=="1"){
  		this.marcadorSel.draggable = true;

  	}
  	else{
  		this.marcadorSel.draggable = false;
  	}
  }

}
