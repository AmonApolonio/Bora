import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { CreateActivityComponent } from './create-activity/create-activity.component';

const routes: Routes = [
    {path:'', component: HomeComponent},
    {path: 'search/:searchTerm', component:HomeComponent},
    {path:'tag/:tag', component:HomeComponent},
    {path:'details/:id', component:ActivityDetailsComponent},
    {path:'createActivity', component:CreateActivityComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {

}