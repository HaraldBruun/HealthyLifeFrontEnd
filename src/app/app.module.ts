import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {FrameComponent} from './frame/frame.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './frame/dropdown/dropdown.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';
import { DropdownSkolerComponent } from './frame/dropdown-skoler/dropdown-skoler.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FrameComponent,
    DropdownComponent,
    DropdownSkolerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
