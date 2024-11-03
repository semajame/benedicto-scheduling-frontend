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

//^ COE
import { coeLayoutComponent } from './COE/coe.layout.component';
import { bsceLayout } from './COE/BSCE/bsceLayout.component';
import { bsmeLayout } from './COE/BSME/bsmeLayout.component';
import { bsieLayout } from './COE/BSIE/bsieLayout.component';
import { bseeLayout } from './COE/BSEE/bseeLayout.component';

//^ BSEE
import { ProspectusBseeFirst } from './COE/BSEE/1st-year/prospectus-1st.component';
import { ProspectusBseeSecond } from './COE/BSEE/2nd-year/prospectus-2nd.component';
import { ProspectusBseeThird } from './COE/BSEE/3rd-year/prospectus-3rd.component';
import { ProspectusBseeFourth } from './COE/BSEE/4th-year/prospectus-4th.component';

//^ BSIE
import { ProspectusBsieFirst } from './COE/BSIE/1st-year/prospectus-1st.component';
import { ProspectusBsieSecond } from './COE/BSIE/2nd-year/prospectus-2nd.component';
import { ProspectusBsieThird } from './COE/BSIE/3rd-year/prospectus-3rd.component';
import { ProspectusBsieFourth } from './COE/BSIE/4th-year/prospectus-4th.component';

//^ BSCE
import { ProspectusBsceFirst } from './COE/BSCE/1st-year/prospectus-1st.component';
import { ProspectusBsceSecond } from './COE/BSCE/2nd-year/prospectus-2nd.component';
import { ProspectusBsceThird } from './COE/BSCE/3rd-year/prospectus-3rd.component';
import { ProspectusBsceFourth } from './COE/BSCE/4th-year/prospectus-4th.component';

//^ BSME
import { ProspectusBsmeFirst } from './COE/BSME/1st-year/prospectus-1st.component';
import { ProspectusBsmeSecond } from './COE/BSME/2nd-year/prospectus-2nd.component';
import { ProspectusBsmeThird } from './COE/BSME/3rd-year/prospectus-3rd.component';
import { ProspectusBsmeFourth } from './COE/BSME/4th-year/prospectus-4th.component';

//^ CBM
import { cbmLayoutComponent } from './CBM/cbm.layout.component';
import { bsaLayout } from './CBM/BSA/bsaLayout.component';
import { bshmLayout } from './CBM/BSHM/bshmLayout.component';
import { bshrmLayout } from './CBM/BSHRM/bshrmLayout.component';
import { bsmmLayout } from './CBM/BSMM/bsmmLayout.component';

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

    //^ COE
    coeLayoutComponent,
    bsceLayout,
    bsmeLayout,
    bsieLayout,
    bseeLayout,

    //^ BSEE
    ProspectusBseeFirst,
    ProspectusBseeSecond,
    ProspectusBseeThird,
    ProspectusBseeFourth,

    //^ BSIE
    ProspectusBsieFirst,
    ProspectusBsieSecond,
    ProspectusBsieThird,
    ProspectusBsieFourth,

    //^ BSCE
    ProspectusBsceFirst,
    ProspectusBsceSecond,
    ProspectusBsceThird,
    ProspectusBsceFourth,

    //^ BSME
    ProspectusBsmeFirst,
    ProspectusBsmeSecond,
    ProspectusBsmeThird,
    ProspectusBsmeFourth,

    //^ CBM
    cbmLayoutComponent,
    bsaLayout,
    bshmLayout,
    bshrmLayout,
    bsmmLayout,
  ],
})
export class prospectusModule {}
