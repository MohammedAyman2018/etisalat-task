import { Component } from '@angular/core';
import { ILink } from '../../interfaces';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerLinks: ILink[] = [
    { text: 'About us', url: '#' },
    { text: 'Privacy policy', url: '#' },
    { text: 'Code of practice', url: '#' },
    { text: 'Terms & conditions', url: '#' },
    { text: 'Doing business with us', url: '#' },
    { text: 'Careers', url: '#' },
  ]
}
