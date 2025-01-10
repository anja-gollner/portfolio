import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
// import AOS from 'aos';
// import 'aos/dist/aos.css';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  // ngAfterViewInit(): void {

  //   AOS.init({
  //     duration: 2000,
  //     offset: 0,
      
  //   });
  // }
}
