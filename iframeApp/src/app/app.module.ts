import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { IFrameComponent } from './iFrame/iFrame.component';

@NgModule({
  declarations: [	
    IFrameComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [IFrameComponent]
})
export class AppModule { }
