---
layout: ../../layouts/MarkdownProjectsLayout.astro
title: Sistema de Pedidos Técnicos para Planta de Producción
author: Katherin Guerrero
description: "Conectando Producción, Ingeniería y Planificación con una solución accesible y automatizada para la solicitud de piezas."
resumen: "Diseñé un sistema basado en herramientas Google que optimiza el proceso de solicitud de piezas técnicas desde planta, asegurando trazabilidad, claridad en los pedidos y conexión fluida entre sectores."
problems:
  paragraph: "La planta enfrentaba diversos problemas en la gestión de pedidos técnicos para piezas de corte y plegado:"
  list:
    [
      "Los operarios utilizaban un formulario que no permitía seleccionar piezas desde un listado actualizado",
      "Las piezas no siempre tenían código asignado y se describían manualmente, generando ambigüedad",
      "Los pedidos mal formulados causaban retrasos y pérdida de tiempo entre los sectores involucrados",
      "Faltaba conexión y visibilidad entre Producción, Planificación e Ingeniería en el flujo de solicitud"
    ]
solution:
  paragraph: "Desarrollé una solución integral con herramientas sin costo de licencias que resolvió estas limitaciones:"
  list:
    [
      "Registro maestro de piezas en Google Sheets mantenido por Ingeniería, editable en tiempo real",
      "Formulario personalizado con Google Apps Script, alojado en Google Sites, que permite seleccionar piezas exactas desde la base de datos",
      "Sistema automatizado de notificaciones que conecta Producción (solicitante), Planificación (gestor) e Ingeniería (desarrollador)",
      "Visualizador de piezas creado en Looker Studio con buscador, para facilitar que los operarios encuentren el código correcto antes de hacer una solicitud"
    ]
tech: ["google_apps_script", "google_sheets", "looker_studio", "google_sites"]
image:
  url: "/order-management/portada.webp"
  alt: "Miniatura del sistema de pedidos técnicos"
pubDate: 2025-07-16
screenshots:
  [
    {
      url: "/order-management/formulario.webp",
      alt: "Formulario de solicitud de piezas",
      title: "Formulario Dinámico",
      description: "Formulario creado con Google Apps Script, conectado a la base de datos de piezas y accesible desde un Google Site"
    },
    {
      url: "/order-management/hoja-piezas.webp",
      alt: "Google Sheet con listado de piezas",
      title: "Listado de Piezas",
      description: "Base de datos editable de piezas, con códigos actualizados por el sector de Ingeniería"
    },
    {
      url: "/order-management/looker-studio.webp",
      alt: "Visualizador de piezas en Looker Studio",
      title: "Buscador de piezas",
      description: "Visualizador para operarios, que les permite buscar por nombre o descripción y copiar el código correcto"
    }
  ]
---