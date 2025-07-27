---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Cómo digitalizar un registro manual con Google Forms + notificaciones por email'
date: 2025-07-18
readingTime: "5 min "
description: "Descubre como transformar registros manuales en formularios digitales con Google Forms, y automatizar correos personalizados usando Apps Script"
tags: ["Google Forms","Google Sheets", "Google Apps Script", "Automatizaciones"]
img:
  url: "/posts/portada-blog-post-1.png"
  alt: "Descripción opcional"
---
En muchas empresas o emprendimientos todavía se utilizan planillas físicas para registrar información como *asistencia, entregas o control de stock*.

A lo largo de estos años, he notado dos problemas fundamentales en el manejo de datos:

Los registros en papel siguen siendo la norma. En más de una ocasión vi cómo llegaban al escritorio con un *post-it* como si fuera un requerimiento formal 😱.

Los registros digitales suelen completarse directamente en un Excel u hoja de cálculo, pero sin ningún tipo de validación. Y cuando sí están bien configurados (con campos de fecha, listas desplegables, etc.), es común que esas configuraciones se alteren o eliminen, comprometiendo la calidad de los datos.

🤓 En este tutorial te muestro cómo transformar ese proceso en uno digital, usando **Google Forms** para capturar la información de forma ordenada, y un toque de **Apps Script** para enviar notificaciones automáticas y personalizadas por correo electrónico.

## 🛠️ ¿Qué necesitas?
- Una cuenta de Google
- Conexión a internet
- Ganas de hacer tu trabajo más fácil y ordenado

## 1️⃣ Crear el formulario en Google Forms
  1. Accede a tu [Google Drive](https://drive.google.com/drive/home) 
  2. En la barra lateral izquierda, dale al botón **|+ Nuevo|**
  3. Baja hasta **Formularios de Google** y abre un formulario en blanco.
  4. Coloca un título (ej: “Registro de recepción de materiales 📦”)
  5. Agrega las preguntas según tu registro. Acá te dejo las que usare en este ejemplo:

|Campo|Tipo de pregunta|
|-|-|
|Número de remito|Respuesta corta|
|Categoría|Lista deplegable|
|Nombre o descripción de producto|Respuesta corta|
|Cantidad|Respuesta corta (con validación numérica)|
|Responsable|Lista deplegable|

📎 *Nota: no uso campo "Fecha" ya que los formularios de Google te cargan en la primera columna la fecha y hora de cuando se envía el formulariolo cual es lo que me interesa en el ejemplo.*

💡 **Tip**: Usa el tipo de pregunta adecuado. Por ejemplo, para la fecha, selecciona “Fecha”, y para tipo de entrega, usa “Desplegable” o “Selección múltiple”.

## 2️⃣ Vincula el formulario a una hoja de cálculo
- En el formulario, haz clic en el icono de hoja verde (Google Sheets).
- Selecciona "Crear hoja de cálculo nueva"
- **Esto será tu base de datos digital, donde se registrará cada respuesta.**

## 3️⃣ Crea un script para enviar un email personalizado
  1. En la hoja de cálculo, ve al menú: Extensiones > Apps Script
  2. Borra el contenido del archivo que aparece y pega este script:

```javascript
//👀 Atención aquí!!
const correo_destinatario = "tucorreo@ejemplo.com" //📧 El correo de la persona que recibirá la notificación
// Función que se activa cuando se envía un formulario
function onFormSubmit(e) {
  enviarNotificacion(e);
}

// Enviar un correo personalizado con los datos ingresados
function enviarNotificacion(e) {
  const hoja = e.source.getActiveSheet(); //Hoja de cálculo vinculada con el formulario
  const fila = hoja.getLastRow(); // Ultima fila de la hoja, para acceder al dato recien agregado.
  const datos = hoja.getRange(fila, 1, 1, hoja.getLastColumn()).getValues()[0]; // datos del formulario enviado

  const fecha = datos[0].toLocaleDateString("es-AR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });  // Columna A = Marca temporal
  const numero_remito = datos[1]; // Columna B = Número de remito
  const categoria = datos[2]; // Columna C = Categoria o tipo de material
  const nombre_material = datos[3];  // Columna D = Nombre o descripción del material
  const cantidad = datos[4];   // Columna E = Tipo de entrega
  const responsable = datos[5]; // Columna F = Responsable
  const observaciones = datos[6] // Columna G = Observaciones

  const destinatario = correo_destinatario; 
  const asunto = `Nuevo registro: ${categoria} - ${fecha}`;
  const mensaje = `
    Hola, se ha registrado una nueva entrega:\n\n
    Responsable: ${responsable}\n
    Fecha: ${fecha}\n
    Remito: ${numero_remito}\n
    Categoría: ${categoria}\n
    Material: ${nombre_material}\n
    Cantidad: ${cantidad}\n
    Observaciones: ${observaciones}\n
  `;

  GmailApp.sendEmail(destinatario, asunto, mensaje);
}
```
#### 🔔 ¿Qué hace este script?
Este pequeño programa se activa automáticamente cada vez que alguien completa el formulario al cual acabas de vincular la hoja de cálculo.

  **Lo que hace es:**
  - Lee los datos nuevos que se acaban de agregar a la hoja de cálculo.
  - Toma la información clave como la fecha, el nombre del material, cantidad, responsable, etc.
  - Envía un correo automático con todos esos datos a una dirección de email que tú defines (por ejemplo, al responsable del área o a ti mismo).

3. Guarda el archivo (Archivo > Guardar), nómbralo como quieras.
4. En la parte superior, al lado de *Depurar*, selecciona la función *onFormSubmit*
5. Luego ve a Activadores,ubicado en la barra lateral izquierda (ícono de reloj ⏰).
6. Dale al boton de la parte inferior **|+ Agregar activador|**:
    - Elegir qué función ejecutar: onFormSubmit
    - Seleccionar el tipo de evento: “Al enviar formulario”
    - Guardar
6. Autoriza el script para que pueda usar Gmail en tu cuenta.

#### 🔐 ¿Por qué hay que dar autorización al script?

Porque el script necesita acceder a tu cuenta de **Google** para poder hacer cosas por ti, como:

- Leer los datos del formulario en tu hoja de cálculo.

- Usar tu cuenta de Gmail para enviar correos automáticos.

Google te pide que confirmes esto para asegurarse de que eres tú quien permite que el script actúe en tu nombre.
Es una forma de proteger tu información y evitar que cualquier código tenga acceso sin tu permiso.

## ✅ Resultado
Cada vez que alguien llene el formulario, recibirás un correo automáticamente con los datos clave.

## 📑 Resumen
Este proceso es ideal si estás comenzando a digitalizar registros, especialmente si trabajas con equipos pequeños o necesitas trazabilidad sin depender de herramientas costosas. ¡Y lo mejor es que puedes replicarlo para muchos otros usos!
## Recursos

🎁 En el link de abajo te dejo acceso a los archivos en **Google Drive**

👉 [Acceder a los archivos](https://drive.google.com/drive/folders/1PO-pO0IE7_asP-uWmiRzLw-4p3wyQTiG?usp=drive_linkk)

💌 Incluye:
- Formulario de Google listo para usar
- Hoja de cálculo conectada
- Script básico cargado y comentado - *está dentro de la Hoja de Cálculo*