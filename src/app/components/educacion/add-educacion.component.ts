import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';
import { ImageEduService } from 'src/app/services/image-edu.service';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {
  nombreE: string = "";
  descripcionE: string = "";
  fecha: string = "";
  img: string = "";

  // constructor(private educacionS: EducacionService, private router: Router) { }
  constructor(private educacionS: EducacionService, private router: Router, public imageEduService: ImageEduService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    this.img = this.imageEduService.urlImg;
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.fecha, this.img);
    this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Educación añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Error al añadir la educación");
        this.router.navigate(['']);
      }
    )
    this.imageEduService.clearUrl();
  }

  uploadImage($event: any){
    const name = "educacion_" + this.nombreE;
    this.imageEduService.uploadImage($event, name)
  }
}