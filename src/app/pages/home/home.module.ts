import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home.routing.module'
import { APIService } from 'src/app/core/services/api.service'

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, APIService]
})
export class HomeModule {}
