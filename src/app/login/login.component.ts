import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { MachineControlsComponent } from '../machine-controls/machine-controls.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, MachineControlsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
