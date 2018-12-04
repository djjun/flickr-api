import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeRoutingModule } from './pages/home/home.routing.module'

const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
