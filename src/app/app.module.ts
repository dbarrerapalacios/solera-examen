import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SharedModule} from './shared/shared.module'
import { AppComponent } from './app.component';
import { CategoriesService } from './services/categories.service';
import { ServicesService } from './services/services.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule
  ],
  providers: [CategoriesService,
  ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
