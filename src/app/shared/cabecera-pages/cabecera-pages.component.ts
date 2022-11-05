import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {map, filter} from 'rxjs/operators'


@Component({
  selector: 'app-cabecera-pages',
  templateUrl: './cabecera-pages.component.html',
  styleUrls: ['./cabecera-pages.component.css']
})
export class CabeceraPagesComponent implements OnDestroy {

  
 public titulo?:string;
 public tituloSubs$?:Subscription
 
  

  constructor(private router: Router) { 
    this.tituloSubs$ = this.getArguments().subscribe((resp:any) => {
      const title = resp.titulo
      this.titulo = title;
      document.title = `Biocell - ${title}`

    })
  }


  ngOnDestroy(): void {

    this.tituloSubs$?.unsubscribe()
  }

  getArguments(){
    return this.router.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event:ActivationEnd) => event.snapshot.data)
    );
  }



  

}
