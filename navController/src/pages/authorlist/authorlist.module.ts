import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthorlistPage } from './authorlist';

@NgModule({
  declarations: [
    AuthorlistPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthorlistPage),
  ],
})
export class AuthorlistPageModule {}
