import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wait-recipe',
  templateUrl: './wait-recipe.component.html',
  styleUrls: ['./wait-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaitRecipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
