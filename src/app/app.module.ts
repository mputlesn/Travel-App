import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { MenuPage } from '../pages/menu/menu';
import { JoziPage } from '../pages/jozi/jozi';
import { CapePage } from '../pages/cape/cape';
import { DurbanPage } from '../pages/durban/durban';
import { MpumalangaPage } from '../pages/mpumalanga/mpumalanga';
import { FlashCardComponent } from '../components/flash-card/flash-card';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserDetailsPage,
    MenuPage,
    JoziPage,
    CapePage,
    DurbanPage,
    MpumalangaPage,
    FlashCardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserDetailsPage,
    MenuPage,
    JoziPage,
    CapePage,
    DurbanPage,
    MpumalangaPage,
    FlashCardComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
