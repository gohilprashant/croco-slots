import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../../../models/category.model';
import { SvgIconComponent } from '../../../../components/svg-icon/svg-icon.component';

@Component({
  selector: 'app-category-tabs',
  standalone: true,
  templateUrl: './category-tabs.component.html',
  styleUrl: './category-tabs.component.scss',
  imports: [SvgIconComponent],
})
export class CategoryTabsComponent {
  @Input() categories: Category[] = [];
  @Input() selectedItem!: string;
  @Output() categoryChange = new EventEmitter<{
    value: string;
    tabType: string;
  }>();

  ngOnInit() {}

  handleCategoryChange(category: string) {
    this.categoryChange.emit({ value: category, tabType: 'category' });
  }
}
