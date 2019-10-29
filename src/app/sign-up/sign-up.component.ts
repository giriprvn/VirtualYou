import { Component, OnInit } from '@angular/core';
import { userModel } from '../model/user';
import { RouterExtensions } from 'nativescript-angular/router';
import { ImageAsset } from 'tns-core-modules/image-asset/image-asset';
import { requestPermissions, takePicture } from 'nativescript-camera';
import { ImageSource } from 'tns-core-modules/image-source/image-source';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  title = 'virtual-You';
  public user: userModel = new userModel();
  public alias: string;
  public saveToGallery: boolean = false;
  public allowsEditing: boolean = false;
  public keepAspectRatio: boolean = true;
  public width: number = 320;
  public height: number = 240;
  public cameraImage: ImageAsset;
  public actualWidth: number;
  public actualHeight: number;
  public scale: number = 1;
  public labelText: string;

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit() {
  }

  captureMe(args) {
    requestPermissions().then(
      () => {
        takePicture({ width: this.width, height: this.height, keepAspectRatio: this.keepAspectRatio, saveToGallery: this.saveToGallery, allowsEditing: this.allowsEditing, cameraFacing: 'front' })
          .then((imageAsset: any) => {
            this.user.imageAsset = imageAsset;
            let that = this;
            let source = new ImageSource();
            source.fromAsset(this.user.imageAsset).then(function (imageSource) {
              that.user.base64StringImage = imageSource.toBase64String('jpg', 100);
            });

            // imageAsset.getImageAsync(function (nativeImage, ex) {
            //     if (ex instanceof Error) {
            //         throw ex;
            //     } else if (typeof ex === "string") {
            //         throw new Error(ex);
            //     }


            //     if (imageAsset.android) {
            //         // get the current density of the screen (dpi) and divide it by the default one to get the scale
            //         that.scale = nativeImage.getDensity() / 500;
            //         that.labelText = that.scale.toString();
            //         that.actualWidth = nativeImage.getWidth();
            //         that.actualHeight = nativeImage.getHeight();
            //     } else {
            //         that.scale = nativeImage.scale;
            //         that.actualWidth = nativeImage.size.width * that.scale;
            //         that.actualHeight = nativeImage.size.height * that.scale;
            //     }
            //     that.labelText = `Displayed Size: ${that.actualWidth}x${that.actualHeight} with scale ${that.scale}\n` +
            //         `Image Size: ${Math.round(that.actualWidth / that.scale)}x${Math.round(that.actualHeight / that.scale)}`;

            //     console.log(`${that.labelText}`);
            // });
          }, (error) => {
            console.log("Error: " + error);
          });
      },
      () => alert('permissions rejected')
    );
  }
  register(){
    this.routerExtensions.navigate(["/home"], { clearHistory: true });
  }
}
