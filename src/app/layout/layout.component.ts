import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { MainComponent } from '../main/main.component';
import { RouterOutlet } from '@angular/router';
import { ReporteAnualComponent } from '../reporte-anual/reporte-anual.component';
import { ReporteSemestralComponent } from '../reporte-semestral/reporte-semestral.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    RouterOutlet,
    ReporteAnualComponent,
    ReporteSemestralComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
