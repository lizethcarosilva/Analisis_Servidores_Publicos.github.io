import { Component } from '@angular/core';
import { trigger, transition, style, animate } from "@angular/animations"
import { CommonModule } from "@angular/common"


@Component({
  selector: 'app-herramientas',
  imports: [CommonModule],
  templateUrl: './herramientas.component.html',
  styleUrl: './herramientas.component.scss',
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

export class HerramientasComponent {
  tools = [
    {
      name: "Orange Data Mining",
      description: "Plataforma principal para el análisis visual de datos, preprocesamiento y modelado.",
      icon: "🍊",
      color: "from-orange-500 to-red-500",
      features: ["Preprocesamiento", "Visualización", "Modelado"],
      usage: "Análisis exploratorio inicial y limpieza de datos",
    },
    {
      name: "Python Scripting",
      description: "Para operaciones avanzadas de limpieza y transformación de datos dentro de Orange.",
      icon: "🐍",
      color: "from-blue-500 to-indigo-500",
      features: ["Pandas", "NumPy", "Scikit-learn"],
      usage: "Procesamiento avanzado y algoritmos personalizados",
    },
    {
      name: "Visualización",
      description: "Widgets de Orange para creación de gráficos y tablas interactivas.",
      icon: "📊",
      color: "from-green-500 to-teal-500",
      features: ["Scatter Plot", "Box Plot", "Heatmaps"],
      usage: "Creación de visualizaciones interactivas",
    },
    {
      name: "Modelado",
      description: "Algoritmos para análisis de correlación y patrones en los datos.",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      features: ["Árboles", "Random Forest", "Regresión"],
      usage: "Construcción de modelos predictivos",
    },
  ]

  widgets = [
    {
      category: "Carga y Preparación",
      items: [
        {
          name: "File Widget",
          description: "Carga archivos de datos desde diferentes fuentes",
          usage: "Importar CSV de servidores públicos",
        },
        {
          name: "Data Sample",
          description: "Genera muestras representativas del conjunto de datos",
          usage: "Crear muestra del 70% para optimizar procesamiento",
        },
        {
          name: "Edit Domain",
          description: "Modifica tipos de datos y roles de variables",
          usage: "Definir variables numéricas para cálculos",
        },
      ],
    },
    {
      category: "Limpieza y Transformación",
      items: [
        {
          name: "Python Script",
          description: "Ejecuta código Python personalizado",
          usage: "Limpiar datos y sumar experiencia total",
        },
        {
          name: "Preprocess",
          description: "Aplica transformaciones estándar a los datos",
          usage: "Eliminar valores faltantes",
        },
        {
          name: "Select Rows",
          description: "Filtra filas basado en condiciones específicas",
          usage: "Seleccionar registros con datos completos",
        },
      ],
    },
    {
      category: "Análisis y Modelado",
      items: [
        {
          name: "Tree",
          description: "Construye árboles de decisión",
          usage: "Modelo interpretable de clasificación",
        },
        {
          name: "Random Forest",
          description: "Ensemble de árboles de decisión",
          usage: "Mejorar precisión predictiva",
        },
        {
          name: "Test & Score",
          description: "Evalúa rendimiento de modelos",
          usage: "Validación cruzada y métricas",
        },
      ],
    },
    {
      category: "Visualización",
      items: [
        {
          name: "Data Table",
          description: "Muestra datos en formato tabular",
          usage: "Verificar transformaciones de datos",
        },
        {
          name: "Tree Viewer",
          description: "Visualiza árboles de decisión",
          usage: "Interpretar reglas del modelo",
        },
        {
          name: "Pythagorean Tree",
          description: "Representación visual de Random Forest",
          usage: "Visualizar ensemble de árboles",
        },
      ],
    },
  ]

  pythonLibraries = [
    {
      name: "Pandas",
      description: "Manipulación y análisis de datos estructurados",
      usage: "Limpieza y transformación de DataFrames",
    },
    {
      name: "NumPy",
      description: "Computación numérica y operaciones con arrays",
      usage: "Cálculos matemáticos y manejo de valores nulos",
    },
    {
      name: "Orange.data",
      description: "Estructuras de datos específicas de Orange",
      usage: "Crear tablas y dominios compatibles con Orange",
    },
  ]

  dataSource = {
    name: "datos.gov.co",
    description: "Portal de datos abiertos del gobierno colombiano",
    dataset: "Conjunto de servidores públicos",
    format: "CSV",
    records: "203,817 registros iniciales",
    url: "https://www.datos.gov.co/",
  }
}
