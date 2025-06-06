import { Component } from '@angular/core';
import { trigger, transition, style, animate } from "@angular/animations"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"

@Component({
  selector: 'app-analisis',
  imports: [CommonModule, RouterModule],
  templateUrl: './analisis.component.html',
  styleUrl: './analisis.component.scss',
  animations: [
      trigger("fadeIn", [
        transition(":enter", [
          style({ opacity: 0, transform: "translateY(20px)" }),
          animate("500ms ease-out", style({ opacity: 1, transform: "translateY(0)" })),
        ]),
      ]),
      trigger("slideInUp", [
        transition(":enter", [
          style({ opacity: 0, transform: "translateY(30px)" }),
          animate("600ms ease-out", style({ opacity: 1, transform: "translateY(0)" })),
        ]),
      ]),
    ],
  })
export class AnalisisComponent {
methodology = [
    "Obtención de datos de servidores públicos desde datos.gov.co",
    "Limpieza y preprocesamiento de datos en Orange Data Mining",
    "Selección de variables relevantes para el análisis",
    "Cálculo de experiencia laboral total sumando diferentes tipos de experiencia",
    "Análisis de correlación entre experiencia y nivel jerárquico",
    "Visualización de resultados mediante widgets de Orange",
  ]

  findings = [
    "Existencia de correlación positiva entre experiencia y nivel jerárquico",
    "Variaciones significativas entre diferentes sectores administrativos",
    "Diferencias en patrones según el tipo de nombramiento",
    "Influencia del nivel educativo en la progresión jerárquica",
  ]

  dataProcessing = [
    {
      stage: "Datos Originales",
      records: "203,817",
      description: "Registros iniciales del conjunto de servidores públicos",
    },
    {
      stage: "Después del Muestreo",
      records: "142,672",
      description: "Muestra del 70% para optimizar procesamiento",
    },
    {
      stage: "Después de Limpieza",
      records: "98,450",
      description: "Registros válidos después de eliminar valores nulos",
    },
    {
      stage: "Datos Finales",
      records: "95,230",
      description: "Conjunto final para análisis y modelado",
    },
  ]

  models = [
    {
      name: "Árbol de Decisión",
      accuracy: "78%",
      description: "Modelo interpretable que muestra reglas claras de clasificación",
    },
    {
      name: "Random Forest",
      accuracy: "85%",
      description: "Conjunto de árboles que mejora la precisión predictiva",
    },
    {
      name: "Análisis de Correlación",
      accuracy: "92%",
      description: "Medición directa de la relación entre variables numéricas",
    },
  ]

  variables = [
    {
      category: "Variables Feature",
      items: [
        "Departamento de Nacimiento",
        "Meses de Experiencia Independiente",
        "Nivel Educativo",
        "Clasificación Orgánica",
        "Sector Administrativo",
        "Nivel Entidad",
        "Tipo Entidad",
        "Naturaleza Jurídica",
        "Tipo de Nombramiento",
        "Fecha de Vinculación",
      ],
    },
    {
      category: "Variable Target",
      items: ["Nivel Jerárquico Empleo"],
    },
    {
      category: "Variables Meta",
      items: [
        "Sexo",
        "Meses de Experiencia Público",
        "Meses de Experiencia Privado",
        "Meses de Experiencia Docente",
        "Asignación Básica Salarial",
      ],
    },
  ]
}

