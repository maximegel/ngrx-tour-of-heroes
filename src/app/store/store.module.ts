import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule as NgRxStoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '~environment';
import { StoreHeroModule } from './hero/hero.module';
@NgModule({
  imports: [
    NgRxStoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
          strictActionWithinNgZone: true,
          strictActionTypeUniqueness: true,
        },
      },
    ),
    EffectsModule.forRoot([]),
    StoreHeroModule,
    StoreRouterConnectingModule.forRoot(),
    // TODO: Remove dependency to `environment` by injecting config options in a `forRoot()` method.
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
})
export class StoreModule {}
