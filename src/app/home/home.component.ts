import { Component, OnInit } from '@angular/core';
import { takePicture, requestPermissions } from 'nativescript-camera';
import { ImageAsset } from 'tns-core-modules/image-asset';
import { ImageSource, fromFile, fromResource, fromBase64 } from "tns-core-modules/image-source";
import { Router } from '@angular/router';
import { RouterExtensions } from "nativescript-angular/router";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    public title: string = 'virtual-You';
    public alias: string;
    constructor(private routerExtensions: RouterExtensions) { }

    ngOnInit() {
    }


    isAuthenticated() {
        //TODO: API call to validate
    }

    signUp() {
        this.routerExtensions.navigate(["/sign-up"], { clearHistory: true });
    }
}
