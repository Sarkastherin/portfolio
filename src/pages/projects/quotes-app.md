---
layout: ../../layouts/MarkdownProjectsLayout.astro
title: App de Cotizaciones y Oportunidades
author: Alumno de Astro
description: "Simplificando la Gestión Comercial y Operativa para la Industria de la Construcción"
resumen: "Desarrollé una aplicación web especializada en gestión de proyectos para empresas del sector construcción y servicios técnicos, con foco inicial en un módulo de cotizaciones completo y escalable."
problems:
  paragraph: "Las empresas constructoras y de servicios técnicos enfrentan desafíos significativos en la gestión de sus oportunidades comerciales:"
  list:
    [
      "Procesos de cotización fragmentados y manuales",
      "Dificultad para mantener un registro centralizado de materiales y precios",
      "Falta de trazabilidad en el ciclo de vida de las oportunidades comerciales",
      "Inconsistencia en la presentación de propuestas a clientes",
    ]
solution:
  paragraph: "Diseñé e implementé una aplicación web que integra:"
  list:
    [
      "Gestión completa de oportunidades: Seguimiento del ciclo de vida comercial desde la identificación hasta el cierre",
      "Módulo de cotizaciones avanzado: Creación detallada con materiales, mano de obra, subcontratos y otros costos",
      "Catálogo de materiales: Gestión centralizada con histórico de precios y categorización jerárquica",
      "Generación de informes personalizados: Exportación en múltiples formatos y con diferentes niveles de detalle",
    ]
tech: [react, vitejs, "tailwindcss", "supabase", "postgresql"]
image:
  url: "/quotes-app-ss/portada.png"
  alt: "Miniatura de los arcos de Astro."
pubDate: 2025-07-10
screenshots:
  [
    {
      url: "/quotes-app-ss/materiales.png",
      alt: "UI Listado de materiales",
      title: "UI: Listado de materiales",
      description: "Interfaz del listado de materiales, visualiza todos los materiales de la base de datos, y busca por descripción"
    },
    {
      url: "/quotes-app-ss/material.png",
      alt: "UI Material",
      title: "UI: Material seleccionado",
      description: "Interfaz para visualizar, editar, eliminar materiales, tambien permite navegar a los precios para su edición."
    },
    {
      url: "/quotes-app-ss/configuraciones.png",
      alt: "UI configuraciones",
      title: "UI: Configuraciones de materiales",
      description: "Interfaz donde el usuario puede agregar, editar, eliminar configuraciones de los materiales"
    },
    {
      url: "/quotes-app-ss/oportunidad-resumen.png",
      alt: "UI Oportunidad",
      title: "UI: Oportunidad Comercial",
      description: "Interfaz de Oportunidad comercial, cuanta con diferentes pestañas para navegar esntre la oportunidad completa. Muestra la pantalla de resumen, con los datos necesario para visualizar el status de la oportunidad"
    },
    {
      url: "/quotes-app-ss/informe.png",
      alt: "UI Informe",
      title: "UI: Informe de Cotización para el cliente",
      description: "Interfaz para generar el Informe que se le enviará al cliente. Tiene diversas confoguraciones para adaptarla a la necesidad o exigencia de información"
    },
  ]
---
