import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class MyUtilLibService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: MyUtilLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: MyUtilLibService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: MyUtilLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class MyUtilLibComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: MyUtilLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.0", type: MyUtilLibComponent, selector: "my-util-lib", ngImport: i0, template: `
    <form  method="post">
  <div >
    <label for = "username"> <b> Username: </b> </label>
    <input type = "text" placeholder = "Enter Username here" name = "username" style = "margin:10px;" required>
  <br/>
    <label for = "passwd"> <b> Password: </b> </label>
    <input type = "password" placeholder = "Enter Password here" name = "passwd" style = "margin:10px;" required>
  <br/>
     <button type = "submit"> Login </button>
</div>
</form>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: MyUtilLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'my-util-lib', template: `
    <form  method="post">
  <div >
    <label for = "username"> <b> Username: </b> </label>
    <input type = "text" placeholder = "Enter Username here" name = "username" style = "margin:10px;" required>
  <br/>
    <label for = "passwd"> <b> Password: </b> </label>
    <input type = "password" placeholder = "Enter Password here" name = "passwd" style = "margin:10px;" required>
  <br/>
     <button type = "submit"> Login </button>
</div>
</form>
  ` }]
        }] });

class MyUtilLibModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: MyUtilLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.0", ngImport: i0, type: MyUtilLibModule, declarations: [MyUtilLibComponent], exports: [MyUtilLibComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: MyUtilLibModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.0", ngImport: i0, type: MyUtilLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MyUtilLibComponent
                    ],
                    imports: [],
                    exports: [
                        MyUtilLibComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of my-util-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyUtilLibComponent, MyUtilLibModule, MyUtilLibService };
//# sourceMappingURL=my-util-lib.mjs.map
