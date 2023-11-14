import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { ResourceBasicInfoComponent } from './resource-basic-info/resource-basic-info.component';
import { ResourceTimeComponent } from './resource-time/resource-time.component';
import { ResourceWeekdaysComponent } from './resource-weekdays/resource-weekdays.component';
import { ResourceAddComponent } from './resource-add/resource-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { InputNumberModule } from 'primeng/inputnumber';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IncrDecrInputComponent } from './incr-decr-input/incr-decr-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourceBasicInfoComponent,
    ResourceTimeComponent,
    ResourceWeekdaysComponent,
    ResourceAddComponent,
    IncrDecrInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    InputNumberModule,
    FormsModule,
    BrowserModule,

    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}