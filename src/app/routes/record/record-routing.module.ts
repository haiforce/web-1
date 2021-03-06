import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordIndexComponent } from './index/index.component';

const routes: Routes = [{ path: 'index', component: RecordIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordRoutingModule {}
