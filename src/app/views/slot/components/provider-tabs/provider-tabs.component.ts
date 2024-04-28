import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Provider } from '../../../../models/provider.model';

@Component({
  selector: 'app-provider-tabs',
  standalone: true,
  imports: [],
  templateUrl: './provider-tabs.component.html',
  styleUrl: './provider-tabs.component.scss',
})
export class ProviderTabsComponent {
  @Input() providers: Provider[] = [];
  @Input() selectedItem!: string;
  @Output() providerChange = new EventEmitter<{
    value: string;
    tabType: string;
  }>();

  handleProviderChange(value: string) {
    this.providerChange.emit({
      value: value,
      tabType: value === 'all' ? 'all' : 'provider',
    });
  }
}
