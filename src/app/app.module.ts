import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchResultListComponent } from './search/search-result-list/search-result-list.component';
import { SearchResultItemComponent } from './search/search-result-item/search-result-item.component';
import { FilteringBlockComponent } from './header/filtering-block/filtering-block.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultListComponent,
    SearchResultItemComponent,
    FilteringBlockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
