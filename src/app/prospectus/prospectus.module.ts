import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//^ IT
import { ProspectusFirstComponent } from './IT/1st-year/prospectus-1st.component';
import { ProspectusSecondComponent } from './IT/2nd-year/prospectus-2nd.component';
import { ProspectusThirdComponent } from './IT/3rd-year/prospectus-3rd.component';
import { ProspectusFourthComponent } from './IT/4th-year/prospectus-4th.component';

//^ EDUC

import { educLayoutComponent } from './CTE/educ.layout.component';
import { bsedLayout } from './CTE/BSED/bsedLayout.component';

//^ BSED
import { ProspectusBsedFirst } from './CTE/BSED/1st-year/prospectus-1st.component';
import { ProspectusBsedSecond } from './CTE/BSED/2nd-year/prospectus-2nd.component';
import { ProspectusBsedThird } from './CTE/BSED/3rd-year/prospectus-3rd.component';
import { ProspectusBsedFourth } from './CTE/BSED/4th-year/prospectus-4th.component';

//^ BEED
import { beedLayout } from './CTE/BEED/beedLayout.component';
import { ProspectusBeedFirst } from './CTE/BEED/1st-year/prospectus-1st.component';
import { ProspectusBeedSecond } from './CTE/BEED/2nd-year/prospectus-2nd.component';
import { ProspectusBeedThird } from './CTE/BEED/3rd-year/prospectus-3rd.component';
import { ProspectusBeedFourth } from './CTE/BEED/4th-year/prospectus-4th.component';

import { itLayoutComponent } from './IT/it.layout.component';
import { LayoutComponent } from './layout.component';
import { ProspectusRoutingModule } from './prospectus.routing.module';
import { ProspectusComponent } from './prospectus.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ProspectusRoutingModule],
  declarations: [
    ProspectusFirstComponent,
    ProspectusSecondComponent,
    ProspectusThirdComponent,
    ProspectusFourthComponent,
    LayoutComponent,
    ProspectusComponent,
    itLayoutComponent,

    //^ EDUC
    educLayoutComponent,
    bsedLayout,
    beedLayout,

    //^ BSED
    ProspectusBsedFirst,
    ProspectusBsedSecond,
    ProspectusBsedThird,
    ProspectusBsedFourth,

    //^ BEED
    ProspectusBeedFirst,
    ProspectusBeedSecond,
    ProspectusBeedThird,
    ProspectusBeedFourth,
  ],
})
export class prospectusModule {}
