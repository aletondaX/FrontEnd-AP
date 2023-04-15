import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  // public educaciones:Educacion[]=[];
  // public editEducacion:Educacion | undefined;
  // public deleteEducacion:Educacion | undefined;

  // constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {
    // this.getEducacion();
  }

  // public getEducacion():void{
  //   this.educacionService.getEducacion().subscribe({
  //     next:(Response: Educacion[]) =>{
  //       this.educaciones=Response;
  //     },
  //     error:(error:HttpErrorResponse) =>{
  //       alert(error.message);
  //     }
  //   })
  // }
}
