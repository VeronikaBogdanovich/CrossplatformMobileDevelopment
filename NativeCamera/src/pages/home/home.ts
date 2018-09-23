import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  public furi: string;
  public options: CameraOptions;

  constructor(public camera:Camera) {

      this.options={
      quality:100,
      destinationType: camera.DestinationType.FILE_URI,
      targetWidth:1000,
      targetHeight:1000,
      saveToPhotoAlbum:true,
      encodingType: camera.EncodingType.JPEG
  };

  }
  takePicture(){
   
      this.camera.getPicture(this.options).then(imageuri=>this.furi=imageuri);
  }
    takeFromG(){
        this.camera.getPicture({
            quality:100,
            destinationType: this.camera.DestinationType.FILE_URI,
            targetWidth:1000,
            targetHeight:1000,
            sourceType:2,
            encodingType: this.camera.EncodingType.JPEG
        }).then(imageuri=>this.furi=imageuri);

    }



}
