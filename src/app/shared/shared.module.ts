import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VideoWidgetComponent } from './video-widget/video-widget.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        VideoWidgetComponent
    ],
    exports: [
        // Modules
        CommonModule,
        HttpClientModule,

        // Components
        VideoWidgetComponent
    ]
})
export class SharedModule { }
