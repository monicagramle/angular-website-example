import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
// Components
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SocialComponent } from './social/social.component';
import { PricingBlockComponent } from './pricing/pricing-block/pricing-block.component';

// Modules
import { AppRoutingModule } from './app-routing.module';

// Services
import { ConfigService } from './shared/services/config.service';
import { InMemoryDataService } from './shared/services/in-memory-data.service';
import { DialogComponent } from './shared/services/dialog/dialog.component';

@NgModule({
	declarations: [AppComponent],
	imports: [
		AppRoutingModule,
		BrowserModule,
		HttpClientModule,
		ReactiveFormsModule,
		CommonModule,

		// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
		// and returns simulated server responses.
		// Remove it when a real server is ready to receive requests.
		HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
			dataEncapsulation: false,
			passThruUnknownUrl: true,
		}),
		FooterComponent,
		NavigationComponent,
		NavmenuComponent,
		SocialComponent,
		PricingBlockComponent,
		DialogComponent
	],
	providers: [ConfigService],
	bootstrap: [AppComponent],
})
export class AppModule {}
