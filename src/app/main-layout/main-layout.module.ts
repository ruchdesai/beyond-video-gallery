import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule
    ],
    declarations: [
        MainLayoutComponent
    ],
    providers: [],
    exports: [
        // Modules
        SharedModule,
        RouterModule,

        // Components
        MainLayoutComponent
    ]
})
export class MainLayoutModule {
    static forRoot() {
        return {
            ngModule: MainLayoutModule,
        };
    }
}
