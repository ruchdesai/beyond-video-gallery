import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VideoWidgetComponent } from './video-widget/video-widget.component';
import { DetailsWidgetComponent } from './details-widget/details-widget.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        VideoWidgetComponent,
        DetailsWidgetComponent
    ],
    exports: [
        // Modules
        CommonModule,
        HttpClientModule,

        // Components
        VideoWidgetComponent,
        DetailsWidgetComponent
    ]
})
export class SharedModule { }
