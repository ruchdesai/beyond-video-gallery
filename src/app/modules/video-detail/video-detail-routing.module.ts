import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoDetailComponent } from './video-detail.component';

const routes: Routes = [
    {
        path: '',
        component: VideoDetailComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class VideoDetailRoutingModule { }