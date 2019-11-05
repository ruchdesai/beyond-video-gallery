import { NgModule } from '@angular/core';
import { MainLayoutModule } from './../../main-layout/main-layout.module';
import { VideoListRoutingModule } from './video-list-routing.module';
import { VideoListComponent } from './video-list.component';

@NgModule({
    imports: [
        MainLayoutModule.forRoot(),
        VideoListRoutingModule
    ],
    declarations: [VideoListComponent]
})
export class VideoListModule { }
