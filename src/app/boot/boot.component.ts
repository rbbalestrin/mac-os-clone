import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-boot',
  standalone: true,
  imports: [ProgressBarModule],
  templateUrl: './boot.component.html',
  styleUrl: './boot.component.scss',
})
export class BootComponent {
  progressBarValue: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    let interval = setInterval(() => {
      this.progressBarValue =
        this.progressBarValue + Math.floor(Math.random() + 30);
      if (this.progressBarValue >= 100) {
        this.progressBarValue = 100;
        clearInterval(interval);
        this.router.navigate(['/login']);
      }
    }, 1500);
  }
}
