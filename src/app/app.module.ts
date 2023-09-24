import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ActivityService } from './services/activity/activity.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TagBarComponent } from './tag-bar/tag-bar.component';
import { ScrollableDirective } from './shared/directives/scrollable.directive';
import { AllTagsBarComponent } from './all-tags-bar/all-tags-bar.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { CreateActivityComponent } from './create-activity/create-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagBarComponent,
    ScrollableDirective,
    AllTagsBarComponent,
    ActivityListComponent,
    ActivityDetailsComponent,
    CreateActivityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ActivityService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }