import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlowbiteService } from '../flowbite.service';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css',
})
export class SideNavComponent {
  constructor(private flowbiteService: FlowbiteService) {
    this.flowbiteService.loadFlowbite((flowbite) => {
      console.log('Flowbiteloaded', flowbite);
    });
  }
}
