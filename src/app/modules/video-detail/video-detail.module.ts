import { NgModule } from '@angular/core';
import { MainLayoutModule } from './../../main-layout/main-layout.module';
import { VideoDetailRoutingModule } from './video-detail-routing.module';
import { VideoDetailComponent } from './video-detail.component';

@NgModule({
    imports: [
        MainLayoutModule.forRoot(),
        VideoDetailRoutingModule
    ],
    declarations: [VideoDetailComponent]
})
export class VideoDetailModule { }
