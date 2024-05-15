import { Component } from '@angular/core';
import { ILink } from '../../interfaces';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  navLinks: ILink[] = [
    { text: 'Dashboard', url: '/' },
    { text: 'Manage', url: '/' },
    { text: 'Pay', url: '/' },
    { text: 'Order', url: '/' },
    { text: 'Services', url: '/' },
    { text: 'Support', url: '/' },
  ]
}
