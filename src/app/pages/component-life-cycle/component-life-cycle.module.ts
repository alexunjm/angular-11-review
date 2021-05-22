import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentLifeCycleRoutingModule } from './component-life-cycle-routing.module';
import { ComponentLifeCycleComponent } from './component-life-cycle.component';
import { FormsModule } from '@angular/forms';
import { ComponentLifeCycleComponent2 } from './component-life-cycle2.component';

@NgModule({
  declarations: [ComponentLifeCycleComponent, ComponentLifeCycleComponent2],
  imports: [CommonModule, ComponentLifeCycleRoutingModule, FormsModule],
})
export class ComponentLifeCycleModule {}
