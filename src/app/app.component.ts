import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'lab7-angular-complete';

  username = '';
  DoReset() {
    this.username = '';
  }

  loadFeature = 'recipe';
  onNavigate(feature: string) {
    this.loadFeature = feature;
  }
}
