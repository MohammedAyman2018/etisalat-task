import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { BootstrapService } from './core/services/bootstrap.service';
import { FooterComponent } from './core/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
  constructor(private bs: BootstrapService,) { }

  ngAfterViewInit() {
    this.initDropDown()
  }

  initDropDown() {
    const dropdowns = document.getElementsByClassName('dropdown');
    Array.from(dropdowns).forEach(dropdown => this.bs.bootstrap.Dropdown.getOrCreateInstance(dropdown));
  }
}
