import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NotificationModule } from '@carbon/icons-angular/';
import { UserAvatarModule } from '@carbon/icons-angular/';
import { AppSwitcherModule } from '@carbon/icons-angular/';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// carbon-components-angular default imports
import { UIShellModule } from 'carbon-components-angular';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		UIShellModule,
		NotificationModule,
		UserAvatarModule,
		AppSwitcherModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
