import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: false,
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuVisible: boolean = true;

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
