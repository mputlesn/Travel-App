import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CapePage } from './cape';

@NgModule({
  declarations: [
    CapePage,
  ],
  imports: [
    IonicPageModule.forChild(CapePage),
  ],
})
export class CapePageModule {}
