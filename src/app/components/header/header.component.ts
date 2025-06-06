import { Component } from '@angular/core';
import { trigger, transition, style, animate } from "@angular/animations"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"


@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(-20px)" }),
        animate("300ms ease-out", style({ opacity: 1, transform: "translateY(0)" })),
      ]),
    ]),
  ],
})
export class HeaderComponent {
  title = "Análisis de Servidores Públicos"
  subtitle = "Relación entre experiencia laboral y nivel jerárquico"

  navigationItems = [
    { path: "/inicio", label: "Inicio", primary: true },
    { path: "/orange", label: "Orange Data Mining" },
    { path: "/mineria", label: "Minería de Datos" },
    { path: "/analisis", label: "Análisis" },
    { path: "/herramientas", label: "Herramientas" },
  ]
}

