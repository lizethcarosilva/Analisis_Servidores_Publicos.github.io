import { Component } from '@angular/core';
import { trigger, transition, style, animate } from "@angular/animations"
import { CommonModule } from "@angular/common"


@Component({
  selector: 'app-mineria',
  imports: [CommonModule],
  templateUrl: './mineria.component.html',
  styleUrl: './mineria.component.scss',
    animations: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(20px)" }),
        animate("500ms ease-out", style({ opacity: 1, transform: "translateY(0)" })),
      ]),
    ]),
    trigger("slideInLeft", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateX(-30px)" }),
        animate("600ms ease-out", style({ opacity: 1, transform: "translateX(0)" })),
      ]),
    ]),
  ],
})

export class MineriaComponent {
  dataMiningProcess = [
    {
      step: 1,
      title: "Obtención de Datos",
      description: "Descarga del conjunto de datos de servidores públicos desde datos.gov.co en formato CSV",
      tools: ["datos.gov.co", "CSV Export"],
    },
    {
      step: 2,
      title: "Carga en Orange",
      description: "Importación del archivo usando el widget File y configuración de roles de datos",
      tools: ["File Widget", "Data Roles"],
    },
    {
      step: 3,
      title: "Muestreo",
      description: "Creación de muestra del 70% para optimizar el procesamiento (203,817 registros)",
      tools: ["Data Sample Widget"],
    },
    {
      step: 4,
      title: "Limpieza de Datos",
      description: "Eliminación de valores nulos y normalización usando Python Script",
      tools: ["Python Script", "Pandas", "NumPy"],
    },
    {
      step: 5,
      title: "Transformación",
      description: "Suma de experiencia laboral total (pública + privada + docente)",
      tools: ["Python Script", "ContinuousVariable"],
    },
    {
      step: 6,
      title: "Análisis y Modelado",
      description: "Aplicación de algoritmos de machine learning para encontrar correlaciones",
      tools: ["Tree", "Random Forest", "Test & Score"],
    },
  ]

  techniques = [
    {
      name: "Árboles de Decisión",
      description: "Modelos interpretables que muestran reglas de decisión claras",
      application: "Identificar factores que influyen en el nivel jerárquico",
    },
    {
      name: "Random Forest",
      description: "Conjunto de árboles que mejora la precisión y reduce el sobreajuste",
      application: "Predicción robusta del nivel jerárquico basado en experiencia",
    },
    {
      name: "Análisis de Correlación",
      description: "Medición de la relación lineal entre variables numéricas",
      application: "Cuantificar la relación experiencia-nivel jerárquico",
    },
    {
      name: "Visualización de Datos",
      description: "Gráficos interactivos para explorar patrones en los datos",
      application: "Scatter plots, box plots y heatmaps para análisis exploratorio",
    },
  ]

  pythonScripts = [
    {
      title: "Limpieza de Datos",
      description: "Script para eliminar valores nulos y normalizar datos",
      purpose: "Preparar datos para análisis eliminando inconsistencias",
    },
    {
      title: "Suma de Experiencia",
      description: "Cálculo de experiencia laboral total sumando todas las categorías",
      purpose: "Crear variable objetivo para el análisis de correlación",
    },
  ]
}
