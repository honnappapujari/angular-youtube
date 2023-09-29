import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NumbercardComponent } from './numbercard/numbercard.component';
import { GeneratenumberComponent } from './generatenumber/generatenumber.component';
import { SearchComponent } from './search/search.component';
import { ReferenceComponent } from './reference/reference.component';
import { changeBg } from './changeBg.directive';
import { HoverDirective } from './hover.directive';
import { JavascriptComponent } from './javascript/javascript.component';
import { ReactComponent } from './react/react.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    NumbercardComponent,
    GeneratenumberComponent,
    SearchComponent,
    ReferenceComponent,
    changeBg,
    HoverDirective,
    JavascriptComponent,
    ReactComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
