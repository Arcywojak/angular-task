import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-maintainer',
  templateUrl: './recipes-maintainer.component.html',
  styleUrls: ['./recipes-maintainer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesMaintainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
