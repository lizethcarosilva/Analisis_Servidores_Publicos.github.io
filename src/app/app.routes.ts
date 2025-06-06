import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { OrangeComponent } from './pages/orange/orange.component';
import { AnalisisComponent } from './pages/analisis/analisis.component';
import { HerramientasComponent } from './pages/herramientas/herramientas.component';
import { MineriaComponent } from './pages/mineria/mineria.component';

export const routes: Routes = [

  { path: "", redirectTo: "inicio", pathMatch: "full" },
  { path: "inicio", component: InicioComponent },
  { path: "orange", component: OrangeComponent },
  { path: "analisis", component: AnalisisComponent },
  { path: "herramientas", component: HerramientasComponent },
  { path: "mineria", component: MineriaComponent },
  { path: "**", redirectTo: "inicio" },
];
