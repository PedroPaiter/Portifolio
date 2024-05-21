import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './pages/test/test.component';
import { HomeComponent } from './pages/home/home.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';



export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'first', component: FirstPageComponent },
    { path: 'test', component: TestComponent },

    { path: '**', redirectTo: 'home' }
    // Adicione outras rotas conforme necessário
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }