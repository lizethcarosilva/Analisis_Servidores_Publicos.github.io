import { Component } from '@angular/core';
import { trigger, transition, style, animate } from "@angular/animations"
import { CommonModule } from "@angular/common"
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-orange',
  imports: [CommonModule,RouterModule],
  templateUrl: './orange.component.html',
  styleUrl: './orange.component.scss',
  animations: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(20px)" }),
        animate("500ms ease-out", style({ opacity: 1, transform: "translateY(0)" })),
      ]),
    ]),
    trigger("slideIn", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateX(-20px)" }),
        animate("500ms 300ms ease-out", style({ opacity: 1, transform: "translateX(0)" })),
      ]),
    ]),
  ],
})
export class OrangeComponent {
  features = [
    "Interfaz visual con arrastrar y soltar",
    "Amplia variedad de widgets para preprocesamiento",
    "Soporte para múltiples técnicas de aprendizaje automático",
    "Integración con Python para extensibilidad",
    "Visualizaciones interactivas de datos",
  ]

  widgets = [
    {
      name: "File Widget",
      description: "Carga y abre archivos de datos para análisis. Primer paso esencial en cualquier flujo de trabajo.",
      usage: "Importar el conjunto de datos de servidores públicos desde datos.gov.co",
    },
    {
      name: "Data Table",
      description: "Visualiza de forma tabular el contenido del conjunto de datos.",
      usage: "Mostrar los 203,817 registros procesados con roles feature, target y meta",
    },
    {
      name: "Data Sample",
      description: "Genera un muestreo del conjunto de datos para agilizar el procesamiento.",
      usage: "Crear muestra del 70% del conjunto de datos original",
    },
    {
      name: "Python Script",
      description: "Permite ejecutar código Python personalizado para manipular datos.",
      usage: "Limpiar datos eliminando valores nulos y sumar experiencia laboral total",
    },
  ]

  dataRoles = [
    {
      role: "Feature (Característica)",
      description: "Variables independientes o atributos que se usan para hacer predicciones",
      examples: ["Departamento de Nacimiento", "Nivel Educativo", "Sector Administrativo"],
    },
    {
      role: "Target (Objetivo)",
      description: "Variable dependiente, es decir, lo que quieres predecir",
      examples: ["Nivel Jerárquico Empleo"],
    },
    {
      role: "Meta (Dato informativo)",
      description: "Columnas que no se usan en el modelo, pero sirven para identificar o describir",
      examples: ["Sexo", "Nombre Entidad", "Asignación Básica Salarial"],
    },
    {
      role: "Skip (Ignorar)",
      description: "Columnas que no se van a usar en absoluto",
      examples: ["Número de Identificación", "Email Oficina", "NIT Entidad"],
    },
  ]
}
