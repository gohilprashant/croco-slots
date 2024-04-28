import { Component, computed, effect, signal } from '@angular/core';
import { HeroImgComponent } from '../../components/hero-img/hero-img.component';
import { CategoryTabsComponent } from './components/category-tabs/category-tabs.component';
import { ProviderTabsComponent } from './components/provider-tabs/provider-tabs.component';
import { SlotsApiService } from '../../services/slots-api.service';
import { Category } from '../../models/category.model';
import { Game } from '../../models/game.model';
import { SlotListComponent } from './components/slot-list/slot-list.component';
import { Provider } from '../../models/provider.model';
import { slotCategories } from '../../services/slot-categories';
import { InfoComponent } from '../../components/info/info.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';

@Component({
  selector: 'app-slot',
  standalone: true,
  templateUrl: './slot.component.html',
  styleUrl: './slot.component.scss',
  imports: [
    HeroImgComponent,
    CategoryTabsComponent,
    ProviderTabsComponent,
    SlotListComponent,
    InfoComponent,
    ErrorMessageComponent,
  ],
})
export class SlotComponent {
  games = signal<Game[]>([]);
  categories = signal<Category[]>(slotCategories);
  providers = signal<Provider[]>([]);
  selectedItem = signal<string>(slotCategories[0].category);
  isLoading = this.slotsApiService.isLoading;
  error = this.slotsApiService.error;

  constructor(private slotsApiService: SlotsApiService) {}

  ngOnInit() {
    this.fetchCategories();
    this.fetchProviders();
  }

  fetchCategories() {
    this.slotsApiService.getCategories().subscribe({
      next: (categories: Category[]) => {
        this.categories.set(categories);
        this.games.set(categories[0].games);
        this.selectedItem.set(categories[0].category);
      },
    });
  }

  fetchProviders() {
    this.slotsApiService.getProviders().subscribe({
      next: (data: Provider[]) => {
        this.providers.set(data);
      },
    });
  }

  fetchSelectedProviderData(providerName: string) {
    this.slotsApiService.getSelectedProvider(providerName).subscribe({
      next: (data: Game[]) => {
        this.games.set(data);
      },
    });
  }

  getGamesForCategory(category: string): any[] {
    const categoryData = this.categories().find((c) => c.category === category);
    return categoryData?.games?.length ? categoryData.games : [];
  }

  getAllCategoryGames() {
    return this.categories().flatMap((category) => category.games);
  }

  handleSelection({ value, tabType }: { value: string; tabType: string }) {
    this.selectedItem.set(value);
    if (tabType === 'category') {
      this.games.set(this.getGamesForCategory(value));
    }
    if (tabType === 'provider') {
      this.fetchSelectedProviderData(value);
    }
    if (tabType === 'all') {
      this.games.set(this.getAllCategoryGames());
    }
  }
}
