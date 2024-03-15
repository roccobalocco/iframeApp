import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FakeLyraXIFrameComponent } from './fake-lyra-xiframe/fake-lyra-xiframe.component';
import { IFrameComponent } from './iFrame/iFrame.component';

const routes: Routes = [
  {path: 'fake', component:FakeLyraXIFrameComponent},
  {path: 'iframes', component:IFrameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
