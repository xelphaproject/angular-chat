import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent  }      from './chat/chat.component';
import { LoginFormComponent  }      from './login-form/login-form.component';
import { RegisterComponent  }      from './register/register.component';


const routes: Routes = [
  { path: '', redirectTo: '/login-f', pathMatch: 'full' },
  { path: 'chat', component: ChatComponent  },
  { path: 'login-f', component: LoginFormComponent  },
  { path: 'register', component: RegisterComponent  },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes),
  ],
})
export class AppRoutingModule { }
