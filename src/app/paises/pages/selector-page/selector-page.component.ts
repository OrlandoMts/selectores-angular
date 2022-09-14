import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisService } from '../../service/pais-service.service';
import { map, switchMap, tap } from 'rxjs';
import { PaisResp } from '../../interfaces/selector.interface';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  public regiones: string[] = [];
  public paises: PaisResp[] = [];
  public fronteras: string[] = [];

  miFormulario: FormGroup = this.fb.group( {
    region: ['', Validators.required], //Priimer campo*
    pais: ['', Validators.required],
    fronteras: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private paisService: PaisService) { }


  ngOnInit(): void {
    this.regiones = this.paisService.regiones;

    //Obtener el valor del primer select cuando cambia
    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap( (_) => this.miFormulario.get('pais')?.reset('') ),
        switchMap( (region) => this.paisService.getPaisesPorRegion(region))
      )
      .subscribe(paises => this.paises = paises);

    //Obtener el valor del segundo select cuando cambia
    this.miFormulario.get('pais')?.valueChanges
      .pipe(
        tap( () => this.miFormulario.get('fronteras')?.reset('') ),
        switchMap( (codigo) => this.paisService.getFronteraDePais(codigo)),
      )
      .subscribe( pais => this.fronteras = pais[0]?.borders || []);

  }

  guardar() {
    console.log(this.miFormulario.value);
  }


}
