import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-crud',
  templateUrl: './recipe-crud.component.html',
  styleUrls: ['./recipe-crud.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeCrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
