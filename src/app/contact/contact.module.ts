import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactPage } from './contact.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ContactPageRoutingModule } from './contact-routing.module';
import { ViewChild, ElementRef } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// const apiKey = "AIzaSyC16zRdIjbGnsKsuZjGUH5UgltGr1sDiy8";

declare var google: any;

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ContactPage }]),
    ContactPageRoutingModule,
  ],
  declarations: [ContactPage]
})

export class ContactPageModule {

  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;
  center: any = {
    lat: 33.6,
    lng: -117.9,
  };
  
  constructor() {}

  ngOnInit(){
    
  }

  ngAfterViewInit(){
    this.createMap();
  }

  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'capacitor-google-maps',
      element: this.mapRef.nativeElement,
      apiKey: environment.google_maps_api_key,
      config: {
        center: this.center,
        zoom: 13,
      },
    });
  }
}
