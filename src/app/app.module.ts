/* *********************************************** */
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePT from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventoCreateComponent } from './components/evento/evento-create/evento-create.component';
import { EventoDeleteComponent } from './components/evento/evento-delete/evento-delete.component';
import { EventoReadComponent } from './components/evento/evento-read/evento-read.component';
import { EventoUpdateComponent } from './components/evento/evento-update/evento-update.component';
import { TemaReadComponent } from './components/tema/tema-read/tema-read.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';
import { NavComponent } from './templates/nav/nav.component';
import { EventCrudComponent } from './views/event-crud/event-crud.component';
import { HomeComponent } from './views/home/home.component';
import { ThemeCrudComponent } from './views/theme-crud/theme-crud.component';
import { TemaCreateComponent } from './components/tema/tema-create/tema-create.component';
import { PlaylistCrudComponent } from './views/playlist-crud/playlist-crud.component';
import { MatDialogModule } from '@angular/material/dialog';

import { ReactiveFormsModule } from '@angular/forms';
import { PlaylistCreateComponent } from './components/playlist/playlist-create/playlist-create.component';
import { PlaylistReadComponent } from './components/playlist/playlist-read/playlist-read.component';
import { PlaylistUpdateComponent } from './components/playlist/playlist-update/playlist-update.component';
import { PlaylistDeleteComponent } from './components/playlist/playlist-delete/playlist-delete.component';
import { TemaDeleteComponent } from './components/tema/tema-delete/tema-delete.component';
import { TemaUpdateComponent } from './components/tema/tema-update/tema-update.component';

registerLocaleData(localePT);
/* *********************************************** */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    EventCrudComponent,
    EventoCreateComponent,
    EventoReadComponent,
    EventoUpdateComponent,
    EventoDeleteComponent,
    ThemeCrudComponent,
    TemaReadComponent,
    TemaCreateComponent,
    PlaylistCrudComponent,
    PlaylistCreateComponent,
    PlaylistReadComponent,
    PlaylistUpdateComponent,
    PlaylistDeleteComponent,
    TemaDeleteComponent,
    TemaUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
