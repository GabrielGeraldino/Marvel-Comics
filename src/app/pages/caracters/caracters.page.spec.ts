import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaractersPage } from './caracters.page';

describe('CaractersPage', () => {
  let component: CaractersPage;
  let fixture: ComponentFixture<CaractersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaractersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaractersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
