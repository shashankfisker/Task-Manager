import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeaderComponent } from './component/header/header.component';
import { TaskCreatorComponent } from './component/task-creator/task-creator.component';
import { TaskShowcaseComponent } from './component/task-showcase/task-showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    TaskCreatorComponent,
    TaskShowcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
