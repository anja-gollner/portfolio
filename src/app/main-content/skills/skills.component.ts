import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from "../../shared/button/button.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule, ButtonComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
