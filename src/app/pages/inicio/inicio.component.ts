import { Component } from '@angular/core';
import { trigger, transition, style, animate, stagger, query } from "@angular/animations"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"

@Component({
  selector: 'app-inicio',
  imports: [CommonModule, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
 animations: [
    trigger("fadeInStagger", [
      transition("* => *", [
        query(
          ":enter",
          [
            style({ opacity: 0, transform: "translateY(30px)" }),
            stagger(150, [animate("500ms ease-out", style({ opacity: 1, transform: "translateY(0)" }))]),
          ],
          { optional: true },
        ),
      ]),
    ]),
    trigger("scaleIn", [
      transition(":enter", [
        style({ transform: "scale(0.9)", opacity: 0 }),
        animate("400ms 200ms cubic-bezier(0.35, 0, 0.25, 1)", style({ transform: "scale(1)", opacity: 1 })),
      ]),
    ]),
    trigger("slideInLeft", [
      transition(":enter", [
        style({ transform: "translateX(-50px)", opacity: 0 }),
        animate("600ms ease-out", style({ transform: "translateX(0)", opacity: 1 })),
      ]),
    ]),
  ],
})
export class InicioComponent {
 cipasMembers = [
    {
      name: "Lizeth Andrea Caro Silva",

      bio: "Estudiante de Ingeniería de Sistemas con formación diversa en desarrollo de software, programación y tecnologías actuales.",
      photo: "/image/FOTOLIZETHGRIS.jpg",
      skills: ["Bootcamp en Análisis de Datos", "Java", "Python", "Angular"],
    },
    {
      name: "Juan Camilo Giraldo Perdomo",

      bio: "Estudiante",
      photo: "/image/camilo.jpg",
      skills: ["Java"],
    },
    {
      name: "Carlos Stiven Villada Quiceno",

      bio: "Estudiante",
      photo: "/image/foto carlos_edited.jpg",
      skills: ["Java"],
    },
  ]

  advisor = {
    name: "Germán Eduardo Flórez Santos",
    role: "Docente Asesor",
    bio: "Docente de Minería de Datos con más de 10 años de experiencia en análisis de datos.",
    photo: "/image/german.jpg",
    institution: "Universidad Antonio Nariño - Ingeniero de Sistemas",
    area: "Ingeniería de Sistemas - Minería de Datos - 2025",
  }

  projectSections = [
    {
      title: "Orange Data Mining",
      description: "Plataforma de análisis visual de datos y aprendizaje automático",
      route: "/orange",
      icon: "🍊",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Minería de Datos",
      description: "Técnicas y metodologías para descubrir patrones en datos",
      route: "/mineria",
      icon: "⛏️",
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Análisis",
      description: "Resultados y hallazgos del proyecto de investigación",
      route: "/analisis",
      icon: "📊",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Herramientas",
      description: "Tecnologías y software utilizados en el proyecto",
      route: "/herramientas",
      icon: "🛠️",
      color: "from-blue-500 to-cyan-500",
    },
  ]
}
