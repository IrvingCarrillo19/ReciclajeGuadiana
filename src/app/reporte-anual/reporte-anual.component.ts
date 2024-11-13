import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlowbiteService } from '../flowbite.service';

@Component({
  selector: 'app-reporte-anual',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './reporte-anual.component.html',
  styleUrl: './reporte-anual.component.css',
})
export class ReporteAnualComponent {
  constructor(private flowbiteService: FlowbiteService) {
    this.flowbiteService.loadFlowbite((flowbite) => {
      console.log('Flowbiteloaded', flowbite);
    });
  }
}
