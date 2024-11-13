import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlowbiteService } from '../flowbite.service';

@Component({
  selector: 'app-reporte-semestral',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './reporte-semestral.component.html',
  styleUrl: './reporte-semestral.component.css',
})
export class ReporteSemestralComponent {
  constructor(private flowbiteService: FlowbiteService) {
    this.flowbiteService.loadFlowbite((flowbite) => {
      console.log('Flowbiteloaded', flowbite);
    });
  }
}
