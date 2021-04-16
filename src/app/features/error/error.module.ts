import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorRoutes } from './error.routes';
import { NotFoundModule } from './not-found/not-found.module';

@NgModule({
  imports: [NotFoundModule, RouterModule.forChild(errorRoutes)],
})
export class ErrorModule {}
