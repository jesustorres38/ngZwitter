import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImageService } from './servicios/image.service';
import { FinderService } from './servicios/finder.service';
import { FiltroPipe } from './filtros/filtro.pipe';
import { FinderComponent } from './finder/finder.component';
import { ImageDatailFinderComponent } from './image-datail-finder/image-datail-finder.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    GalleryComponent,
    ImageDetailComponent,
    FiltroPipe,
    FinderComponent,
    ImageDatailFinderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ImageService,FinderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
