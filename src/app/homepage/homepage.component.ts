import { Component, OnInit } from '@angular/core';
import { GetAllNavbarItemsService } from '../services/get-all-navbar-items.service';
import { GetAllServicesService } from '../services/get-all-services.service';
import { GetAllDoctorsService } from '../services/get-all-doctors.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [
    GetAllNavbarItemsService,
    GetAllServicesService,
    GetAllDoctorsService
  ]
})
export class HomepageComponent implements OnInit {
  allNavBarItems = [];
  allServices = [];
  batchedServices = [];
  allDoctors: [];
  mediaBaseURL: string = `${environment.mediaBaseUrl}`;

  constructor(
    private getAllNavBarItemsService: GetAllNavbarItemsService,
    private getAllServicesService: GetAllServicesService,
    private getAllDoctorsService: GetAllDoctorsService
  ) { }

  ngOnInit() {
    this.getAllNavBarItems();
    this.getAllServices();
    this.getAllDoctors()



  }

  getAllNavBarItems() {
    this.getAllNavBarItemsService.fetchAllNavbarItems().subscribe(
      (res) => {
        switch (res['status']) {
          case 200:
            this.allNavBarItems = res['all_navbar_items'];
            break;
        }
      }, (err) => { console.log(err) }
    )
  }

  getAllServices() {
    this.getAllServicesService.fetchAllServices().subscribe(
      (res) => {
        console.log(res);
        switch(res['status']){
          case 200:
              this.allServices = res['all_services'];
              // console.log(servicesData);
              let numberOfRows = 2;
              let numberOfItemsInEachRow = parseInt((this.allServices.length / numberOfRows).toFixed());
              for (var i = 0; i < 2; i++) {
                if (this.allServices.length >= numberOfItemsInEachRow) {
                  this.batchedServices.push(this.allServices.splice(0, numberOfItemsInEachRow))
                }
                if (this.allServices.length < 3 && this.allServices.length > 0) {
                  this.batchedServices.push(this.allServices);
                  this.allServices = [];
                }
      
              }
            break;
        }
        

        // console.log(this.batchedServices)
      }, (err) => {console.log(err);}
    )
  }

  getAllDoctors() {
    this.getAllDoctorsService.fetchAllDoctors().subscribe(
      doctorsData => {
        console.log(doctorsData)
        console.log(doctorsData['data'])
        this.allDoctors = doctorsData['data'];
        // console.log(doctorsData);

      }
    )
  }

}
