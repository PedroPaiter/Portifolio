import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './pages/test/test.component';



export const routes: Routes = [
    { path: '', redirectTo: 'test', pathMatch: 'full' },
    { path: 'test', component: TestComponent },
    { path: '**', redirectTo: 'test' }
    // Adicione outras rotas conforme necessário
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }