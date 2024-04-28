import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderTabsComponent } from './provider-tabs.component';

describe('ProviderTabsComponent', () => {
  let component: ProviderTabsComponent;
  let fixture: ComponentFixture<ProviderTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProviderTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProviderTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
