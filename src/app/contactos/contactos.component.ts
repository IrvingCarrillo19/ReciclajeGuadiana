import { Component, ViewChild, ElementRef,OnInit } from '@angular/core';
import { FlowbiteService } from '../flowbite.service';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import {
  NgApexchartsModule,
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexAnnotations,
  ApexDataLabels,
  ApexNonAxisChartSeries,
  ApexStroke,
  ApexLegend,
  ApexFill,
  ApexTooltip,
  ApexPlotOptions,
  ApexForecastDataPoints,
  ApexResponsive,
  ApexYAxis,
  ApexGrid,
  ApexStates,
  ApexTheme,
} from 'ng-apexcharts';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { error } from 'node:console';
import { response } from 'express';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
;
export type ChartOptions = {
  chart: ApexChart; //tipo de grafica
  annotations: ApexAnnotations;
  colors: string[]; //colores de la grafica
  dataLabels: ApexDataLabels;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries; //datos de la grafica
  stroke: ApexStroke;
  labels: string[];
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  grid: ApexGrid;
  states: ApexStates;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  theme: ApexTheme;
};

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule,FormsModule], //Importando el CommonModule
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css',
})
export class ContactosComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions> | undefined;
  public series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined;

  providers: any[] = []; //array para almacenar los datos del provedor
  nuevoProveedor = {
    nombre:'',
    No_Licencia_ambiental: "",
    domicilio:'',
    telefono:'',
    correo:''
  }
  
  

  constructor(
    private flowbiteService: FlowbiteService,
    @Inject(PLATFORM_ID) private platformId: any,
    private apiService: ApiService //servicio para la comunicacion con la API
  ) {
    this.series = [
      {
        name: 'Organic',
        color: '#1A56DB',
        data: [
          { x: 'Mon', y: 231 },
          { x: 'Tue', y: 122 },
          { x: 'Wed', y: 63 },
          { x: 'Thu', y: 421 },
          { x: 'Fri', y: 122 },
          { x: 'Sat', y: 323 },
          { x: 'Sun', y: 111 },
        ],
      },
      {
        name: 'Social media',
        color: '#FDBA8C',
        data: [
          { x: 'Mon', y: 232 },
          { x: 'Tue', y: 113 },
          { x: 'Wed', y: 341 },
          { x: 'Thu', y: 224 },
          { x: 'Fri', y: 522 },
          { x: 'Sat', y: 411 },
          { x: 'Sun', y: 243 },
        ],
      },
    ];

    this.chartOptions = {
      colors: ['#1A56DB', '#FDBA8C'],
      chart: {
        type: 'bar',
        height: '320px',
        fontFamily: 'Inter, sans-serif',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '70%',
          borderRadiusApplication: 'end',
          borderRadius: 8,
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        style: {
          fontFamily: 'Inter, sans-serif',
        },
      },
      states: {
        hover: {
          filter: {
            type: 'darken',
            value: 1,
          },
        },
      },
      stroke: {
        show: true,
        width: 0,
        colors: ['transparent'],
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -14,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        floating: false,
        labels: {
          show: true,
          style: {
            fontFamily: 'Inter, sans-serif',
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
    };
  }

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      console.log('Flowbiteloaded', flowbite);
    });

    this.loadProveedores(); //carga los datos de los proveedores
  }
  //este va a ser el metodo para mostrar los provedores
  loadProveedores(): void{
    this.apiService.getProveedores().subscribe({
      next: (data: any) =>{
        console.log('provedor: ',data); //muestra los datos de los proveedores en la consola
        this.providers = data; //Asignar los datos a la variable providers
      },
      error: (error) =>{
        console.error('Error fetching providers: ',error); //Manejo de errores si ocurre algun problema
      }
    });
  }
  deleteProvedor(id: number): void{
    this.apiService.deleteProveedor(id).subscribe({
      next: (response) => {
        console.log(response.message);
      },
      error: (err) => {
        console.error('Error eliminando al proveedor: ',err);
      },
      complete: () =>{
        console.log('Operacion de eliminacion completada');
        this.loadProveedores();
      }
    });
  }
 
  
}
