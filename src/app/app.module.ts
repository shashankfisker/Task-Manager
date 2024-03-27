import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeaderComponent } from './component/header/header.component';
import { TaskCreatorComponent } from './component/task-creator/task-creator.component';
import { TaskShowcaseComponent } from './component/task-showcase/task-showcase.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';  


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
    FormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"task-management-89471","appId":"1:278099768411:web:34e8dcb4fbd2bc2a04bb7e","databaseURL":"https://task-management-89471-default-rtdb.firebaseio.com","storageBucket":"task-management-89471.appspot.com","apiKey":"AIzaSyA3m6_cKEwRXlB1PEV4apb6TpgCc4v-uDM","authDomain":"task-management-89471.firebaseapp.com","messagingSenderId":"278099768411"})),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
