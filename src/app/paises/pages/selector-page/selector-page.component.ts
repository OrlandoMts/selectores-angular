import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisService } from '../../service/pais-service.service';
import { map,tap } from 'rxjs/operators';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  public regiones: string[] = [];

  miFormulario: FormGroup = this.fb.group( {
    region: ['', Validators.required] //Priimer campo*

  })

  constructor(private fb: FormBuilder, private paisService: PaisService) { }

  ngOnInit(): void {
    this.regiones = this.paisService.regiones;
  }

  guardar() {
    console.log(this.miFormulario.value);

  }

}
