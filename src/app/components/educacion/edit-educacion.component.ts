import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';
// import { ImageEduService } from 'src/app/service/image-edu.service';


@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacion: Educacion = new Educacion("", "", "", "");

  // constructor(private educacionS:EducacionService, private activatedRouter:ActivatedRoute, private router:Router, public imageEduService:ImageEduService) { }
  constructor(private educacionS:EducacionService, private activatedRouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(
      data => {
        this.educacion = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    // this.educacion.img = this.imageEduService.urlImg
    this.educacionS.update(id, this.educacion).subscribe(
      data => {
        alert("Educación actualizada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educación");
        this.router.navigate(['']);
      }
    )
    // this.imageEduService.clearUrl();
  }

  // uploadImage($event:any) {
  //   const id = this.activatedRouter.snapshot.params['id'];
  //   const name = "educacion_" + id;
  //   this.imageEduService.uploadImage($event, name)
  // }
}