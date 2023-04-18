import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia.model';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import { ImageExpService } from 'src/app/services/image-exp.service';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  fecha: string = '';
  img: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router, public imageExpService: ImageExpService) { }
  // constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.img = this.imageExpService.urlImg;
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.fecha, this.img);
    this.sExperiencia.save(expe).subscribe(data =>{alert("Experiencia añadida correctamente");
                                                   this.router.navigate(['']);
    }, err => {
      alert("Error al añadir la experiencia");
      this.router.navigate(['']);
    }
    )
    this.imageExpService.clearUrl();
  }

  uploadImage($event: any){
    const name = "experiencia_" + this.nombreE;
    this.imageExpService.uploadImage($event, name)
  }
}