
# Proyecto: API REST con Redis + MongoDB + Replica-Set

## 👦🏻 Autor:
Armando Jair Ibañez Parra 
C19400437

## 📑 Índice
1. [Introducción](#-introducción)
2. [Link al Repositorio](#-link-al-repositorio)
3. [Modelo de Datos](#️-escenario-de-datos)
4. [Tabla de endpoints](#-Tabla-de-endpoints)
5. [Estructura del Proyecto](#-estructura-del-proyecto)
6. [Código del Backend](#-códigos-backend)
7. [Configuración Docker](#-archivos-docker)
8. [Coleccion de postman](#-Coleccion-de-postman)


## 📋 Introducción
Este proyecto reune tecnologias de backend como bases de datos NoSQL (redis y mongodb), API-Rest (POST, GET, PUT, DELETE) y Contenedores Docker parar crear una aplicacion backend que usa de todo lo aprendido en la materia de NoSQL

## 📂 Link al Repositorio
Puedes acceder al código fuente y archivos de configuración del proyecto en el siguiente enlace: [Repositorio del Proyecto](https://github.com/dev-aj001/mongoose).


## 🗺️ Escenario de Datos
A continuacion se muestran los JSON correspondientes a cada colección requerida para la ejecucion de las consultas
**Nota:** es necesario ejecutar todo el proyecto para ingresar los datos.

### Materias
```Json
[{
  "_id": {
    "$oid": "674e9731e420ddf9651842e9"
  },
  "clave": "ACF-0901",
  "nombre": "Cálculo Diferencial",
  "carrera": "Todas las Carreras",
  "descripcion": "Cálculo Diferencial descripcion",
  "plan": "https://st03.tepic.tecnm.mx/files/asignaturas/ACF-0901_Calculo_Diferencial.pdf"
},
{
  "_id": {
    "$oid": "674e9731e420ddf9651842ea"
  },
  "clave": "ACA-IS10",
  "nombre": "Taller de Ética",
  "carrera": "Todas las Carreras",
  "descripcion": "Taller de Ética descripcion",
  "plan": "https://st03.tepic.tecnm.mx/files/asignaturas/ACA-0907_Taller_de_Etica.pdf"
},
{
  "_id": {
    "$oid": "674e9731e420ddf9651842eb"
  },
  "clave": "ACC-0906",
  "nombre": "Fundamentos de Investigación",
  "carrera": "Sistemas",
  "descripcion": "Taller de Administración descripcion",
  "plan": "https://st03.tepic.tecnm.mx/files/asignaturas/SCH-1024_Taller_de_Administracion.pdf"
},
{
  "_id": {
    "$oid": "674e9731e420ddf9651842ec"
  },
  "clave": "SCD-1011",
  "nombre": "Fundamentos de Programación",
  "carrera": "Sistemas",
  "descripcion": "Fundamentos de Programación descripcion",
  "plan": "https://st03.tepic.tecnm.mx/files/asignaturas/AED-1285_Fundamentos_de_Programacion.pdf"
},
{
  "_id": {
    "$oid": "674e9731e420ddf9651842ed"
  },
  "clave": "AEF-1041",
  "nombre": "Matemáticas Discretas",
  "carrera": "Sistemas",
  "descripcion": "Matemáticas Discretas descripcion",
  "plan": "https://st03.tepic.tecnm.mx/files/asignaturas/AEF-1041_Matematicas_Discretas.pdf"
},
{
  "_id": {
    "$oid": "674e9731e420ddf9651842ee"
  },
  "clave": "SCH-1024",
  "nombre": "Taller de Administración",
  "carrera": "Sistemas",
  "descripcion": "Taller de Administración descripcion",
  "plan": "https://st03.tepic.tecnm.mx/files/asignaturas/SCH-1024_Taller_de_Administracion.pdf"
},
{
  "_id": {
    "$oid": "674e9731e420ddf9651842ef"
  },
  "clave": "AED-1286",
  "nombre": "Programación Orientada a Objetos",
  "carrera": "Sistemas",
  "descripcion": "Programación Orientada a Objetos descripcion",
  "plan": "https://st03.tepic.tecnm.mx/files/asignaturas/AED-1286_Programacion_Orientada_a_Objetos.pdf"
},
{
  "_id": {
    "$oid": "674e9731e420ddf9651842f0"
  },
  "clave": "AED-1026",
  "nombre": "Estructura de Datos",
  "carrera": "Sistemas",
  "descripcion": "Estructura de Datos descripcion",
  "plan": "https://st03.tepic.tecnm.mx/files/asignaturas/AED-1026_Estructura_de_Datos.pdf"
},
{
  "_id": {
    "$oid": "674e9731e420ddf9651842f1"
  },
  "clave": "ARE-1015",
  "nombre": "Fundamentos Teóricos del Diseño I",
  "carrera": "Arquitectura",
  "descripcion": "Fundamentos Teóricos del Diseño I descripcion",
  "plan": "https://st03.tepic.tecnm.mx/files/asignaturas/ARE-1015_Fundamentos_Teoricos_del_Diseno_I.pdf"
},
{
  "_id": {
    "$oid": "674e9731e420ddf9651842f2"
  },
  "clave": "ARC-1009",
  "nombre": "Análisis Proyectual",
  "carrera": "Arquitectura",
  "descripcion": "Análisis Proyectual descripcion",
  "plan": "https://st03.tepic.tecnm.mx/files/asignaturas/ARC-1009_Analisis_Proyectual.pdf"
},
{
  "_id": {
    "$oid": "674e9731e420ddf9651842f3"
  },
  "clave": "ARC-1017",
  "nombre": "Geometría Descriptiva I",
  "carrera": "Arquitectura",
  "descripcion": "Geometría Descriptiva I descripcion",
  "plan": "https://st03.tepic.tecnm.mx/files/asignaturas/ARC-1017_Geometria_Descriptiva_I.pdf"
},
{
  "_id": {
    "$oid": "674e9731e420ddf9651842f4"
  },
  "clave": "ARG-1028",
  "nombre": "Taller de Diseño I",
  "carrera": "Arquitectura",
  "descripcion": "Taller de Diseño I descripcion",
  "plan": "https://st03.tepic.tecnm.mx/files/asignaturas/ARG-1028_Taller_de_Diseno_I.pdf"
},
{
  "_id": {
    "$oid": "674e9731e420ddf9651842f5"
  },
  "clave": "ARH-1037",
  "nombre": "Topografía",
  "carrera": "Arquitectura",
  "descripcion": "Topografía descripcion",
  "plan": "https://st03.tepic.tecnm.mx/files/asignaturas/ARH-1037-Topografia.pdf"
},
{
  "_id": {
    "$oid": "674e9731e420ddf9651842f6"
  },
  "clave": "AEF-1057",
  "nombre": "Química",
  "carrera": "Bioquímica",
  "descripcion": "Química descripcion",
  "plan": "https://st03.tepic.tecnm.mx/files/asignaturas/AEF-1057_Quimica.pdf"
},
{
  "_id": {
    "$oid": "674e9731e420ddf9651842f7"
  },
  "clave": "BQG-1021",
  "nombre": "Química Analítica",
  "carrera": "Bioquímica",
  "descripcion": "Química Analítica descripcion",
  "plan": "https://st03.tepic.tecnm.mx/files/asignaturas/BQG-1021_Quimica_Analitica.pdf"
},
{
  "_id": {
    "$oid": "674e9731e420ddf9651842f8"
  },
  "clave": "BQF-1022",
  "nombre": "Química Orgánica I",
  "carrera": "Bioquímica",
  "descripcion": "Química Orgánica I descripcion",
  "plan": "https://st03.tepic.tecnm.mx/files/asignaturas/BQF-1022_Quimica_Organica_I.pdf"
},
{
  "_id": {
    "$oid": "674e9731e420ddf9651842f9"
  },
  "clave": "AEO-1012",
  "nombre": "Dibujo Asistido por Computadora",
  "carrera": "Bioquímica",
  "descripcion": "Dibujo Asistido por Computadora descripcion",
  "plan": "https://st03.tepic.tecnm.mx/files/asignaturas/AEO-1012_Dibujo_Asistido_por_Computadora.pdf"
},
{
  "_id": {
    "$oid": "674e9731e420ddf9651842fa"
  },
  "clave": "BQW-1006",
  "nombre": "Comportamiento Organizacional",
  "carrera": "Bioquímica",
  "descripcion": "Comportamiento Organizacional descripcion",
  "plan": "https://st03.tepic.tecnm.mx/files/asignaturas/BQW-1006_Comportamiento_Organizacional.pdf"
},
{
  "_id": {
    "$oid": "674e9731e420ddf9651842fb"
  },
  "clave": "ICA-1031",
  "nombre": "Software de ingeniería civil",
  "carrera": "Civil",
  "descripcion": "Software de ingeniería civil descripcion",
  "plan": "https://st03.tepic.tecnm.mx/files/asignaturas/ICA-1031_SOFTWARE_DE_INGENIERIA_CIVIL.pdf"
},
{
  "_id": {
    "$oid": "674e9731e420ddf9651842fc"
  },
  "clave": "ICF-1014",
  "nombre": "Estática",
  "carrera": "Civil",
  "descripcion": "Estática descripcion",
  "plan": "https://st03.tepic.tecnm.mx/files/asignaturas/ICF-1014_ESTATICA.pdf"
},
{
  "_id": {
    "$oid": "674e9731e420ddf9651842fd"
  },
  "clave": "ICC-1023",
  "nombre": "Materiales y procesos constructivos",
  "carrera": "Civil",
  "descripcion": "Materiales y procesos constructivos descripcion",
  "plan": "https://st03.tepic.tecnm.mx/files/asignaturas/ICC-1023_MATERIALES_Y_PROCESOS_CONSTRUCTIVOS.pdf"
},
{
  "_id": {
    "$oid": "674e9731e420ddf9651842fe"
  },
  "clave": "ICT-1033",
  "nombre": "Topografía",
  "carrera": "Civil",
  "descripcion": "Topografía descripcion",
  "plan": "https://st03.tepic.tecnm.mx/files/asignaturas/ICT-1033_TOPOGRAFIA.pdf"
},
{
  "_id": {
    "$oid": "674e9731e420ddf9651842ff"
  },
  "clave": "ICM-1008",
  "nombre": "Dibujo en ingeniería civil",
  "carrera": "Civil",
  "descripcion": "Dibujo en ingeniería civil descripcion",
  "plan": "https://st03.tepic.tecnm.mx/files/asignaturas/ICM-1008_DIBUJO_EN_INGENIERIA_CIVIL.pdf"
},
{
  "_id": {
    "$oid": "674e986c78b7b94ba73cd073"
  },
  "clave": "DWD-2301",
  "nombre": "Bases de Datos NoSQL",
  "carrera": "Sistemas",
  "descripcion": "NoSQL descripción",
  "plan": "https://villahermosa.tecnm.mx/docs/oferta/ingsistemas/especialidades/TECNOLOGIAS_DE_BASE_DE_DATOS/Base_de_Datos_NoSQL.pdf",
  "__v": 0
}]
```
### Docentes
```Json
[{
  "_id": {
    "$oid": "674e7355e420ddf9651842c0"
  },
  "ID_RFC": "XAXX010101000",
  "nombre": "AGUIRRE GONZALEZ ZOILA RAQUEL",
  "carrera": "Sistemas",
  "tecnologico": "674e6df4e420ddf965184287",
  "materiasImpartidas": []
},
{
  "_id": {
    "$oid": "674e7355e420ddf9651842c1"
  },
  "ID_RFC": "XAXX010101001",
  "nombre": "ALVARADO MARES SONIA",
  "carrera": "Sistemas",
  "tecnologico": "674e6df4e420ddf965184287",
  "materiasImpartidas": []
},
{
  "_id": {
    "$oid": "674e7355e420ddf9651842c2"
  },
  "ID_RFC": "XAXX010101002",
  "nombre": "ARCADIA PEÑA JUAN RAUL",
  "carrera": "Sistemas",
  "tecnologico": "674e6df4e420ddf965184287",
  "materiasImpartidas": []
},
{
  "_id": {
    "$oid": "674e7355e420ddf9651842c3"
  },
  "ID_RFC": "XAXX010101003",
  "nombre": "ARJONA VIZCAINO ISRAEL",
  "carrera": "Sistemas",
  "tecnologico": "674e6df4e420ddf965184287",
  "materiasImpartidas": []
},
{
  "_id": {
    "$oid": "674e7355e420ddf9651842c4"
  },
  "ID_RFC": "XAXX010101004",
  "nombre": "BARRIENTOS LUJAN ROCIO GABRIELA",
  "carrera": "Sistemas",
  "tecnologico": "674e6df4e420ddf965184287",
  "materiasImpartidas": []
},
{
  "_id": {
    "$oid": "674e7355e420ddf9651842c5"
  },
  "ID_RFC": "XAXX010101005",
  "nombre": "CASTAÑEDA MONTAÑO ESTEBAN ALEJANDRO",
  "carrera": "Sistemas",
  "tecnologico": "674e6df4e420ddf965184287",
  "materiasImpartidas": []
},
{
  "_id": {
    "$oid": "674e7355e420ddf9651842c6"
  },
  "ID_RFC": "XAXX010101006",
  "nombre": "CEBALLOS MEJIA JOSE DE JESUS",
  "carrera": "Sistemas",
  "tecnologico": "674e6df4e420ddf965184287",
  "materiasImpartidas": []
},
{
  "_id": {
    "$oid": "674e7355e420ddf9651842c7"
  },
  "ID_RFC": "XAXX010101007",
  "nombre": "IBARRA CARLOS FRANCISCO",
  "carrera": "Sistemas",
  "tecnologico": "674e6df4e420ddf965184287",
  "materiasImpartidas": []
},
{
  "_id": {
    "$oid": "674e7355e420ddf9651842c8"
  },
  "ID_RFC": "XAXX010101008",
  "nombre": "MONTES CACERES JORGE SAUL",
  "carrera": "Sistemas",
  "tecnologico": "674e6df4e420ddf965184287",
  "materiasImpartidas": []
},
{
  "_id": {
    "$oid": "674e7355e420ddf9651842c9"
  },
  "ID_RFC": "XAXX010101009",
  "nombre": "OLIVARES VARGAS GERARDO",
  "carrera": "Sistemas",
  "tecnologico": "674e6df4e420ddf965184287",
  "materiasImpartidas": []
},
{
  "_id": {
    "$oid": "674e7355e420ddf9651842ca"
  },
  "ID_RFC": "XAXX010101010",
  "nombre": "PARRA URIAS MA. ELENA",
  "carrera": "Sistemas",
  "tecnologico": "674e6df4e420ddf965184287",
  "materiasImpartidas": []
},
{
  "_id": {
    "$oid": "674e7355e420ddf9651842cb"
  },
  "ID_RFC": "XAXX010101011",
  "nombre": "AGUILERA AGUIRRE SELENE",
  "carrera": "Sistemas",
  "tecnologico": "674e6df4e420ddf965184287",
  "materiasImpartidas": []
},
{
  "_id": {
    "$oid": "674e7355e420ddf9651842cc"
  },
  "ID_RFC": "XAXX010101012",
  "nombre": "ALCANTAR MEDINA KRISTHIAN OMAR",
  "carrera": "Sistemas",
  "tecnologico": "674e6df4e420ddf965184287",
  "materiasImpartidas": []
},
{
  "_id": {
    "$oid": "674e7355e420ddf9651842cd"
  },
  "ID_RFC": "XAXX010101013",
  "nombre": "BUENO CORTES MARIA FABIOLA",
  "carrera": "Sistemas",
  "tecnologico": "674e6df4e420ddf965184287",
  "materiasImpartidas": []
},
{
  "_id": {
    "$oid": "674e7355e420ddf9651842ce"
  },
  "ID_RFC": "XAXX010101014",
  "nombre": "ESPINOSA LEDESMA GEORGINA MARIEN",
  "carrera": "Sistemas",
  "tecnologico": "674e6df4e420ddf965184287",
  "materiasImpartidas": []
},
{
  "_id": {
    "$oid": "674e7355e420ddf9651842cf"
  },
  "ID_RFC": "XAXX010101015",
  "nombre": "FONSECA CANTABRANA ANGEL",
  "carrera": "Sistemas",
  "tecnologico": "674e6df4e420ddf965184287",
  "materiasImpartidas": []
},
{
  "_id": {
    "$oid": "674e7355e420ddf9651842d0"
  },
  "ID_RFC": "XAXX010101016",
  "nombre": "HERNANDEZ CORTEZ MARIA DEL REFUGIO",
  "carrera": "Sistemas",
  "tecnologico": "674e6df4e420ddf965184287",
  "materiasImpartidas": []
},
{
  "_id": {
    "$oid": "674e7355e420ddf9651842d1"
  },
  "ID_RFC": "XAXX010101017",
  "nombre": "HERNANDEZ PINTADO MARCELA RAQUEL",
  "carrera": "Sistemas",
  "tecnologico": "674e6df4e420ddf965184287",
  "materiasImpartidas": []
},
{
  "_id": {
    "$oid": "674e7355e420ddf9651842d2"
  },
  "ID_RFC": "XAXX010101018",
  "nombre": "MONTES CACERES JORGE SAUL",
  "carrera": "Sistemas",
  "tecnologico": "674e6df4e420ddf965184287",
  "materiasImpartidas": []
},
{
  "_id": {
    "$oid": "674e7355e420ddf9651842d3"
  },
  "ID_RFC": "XAXX010101019",
  "nombre": "LEDEZMA MORALES AIDE",
  "carrera": "Sistemas",
  "tecnologico": "674e6df4e420ddf965184287",
  "materiasImpartidas": []
},
{
  "_id": {
    "$oid": "674e7355e420ddf9651842d4"
  },
  "ID_RFC": "XAXX010101020",
  "nombre": "URESTI MELENDEZ JUANA",
  "carrera": "Sistemas",
  "tecnologico": "674e6df4e420ddf965184287",
  "materiasImpartidas": []
},
{
  "_id": {
    "$oid": "674e9c6c1950aaa6373eef4f"
  },
  "ID_RFC": "XAXX010101021",
  "nombre": "SOTO CASTRO LUIS OBED",
  "carrera": "Sistemas",
  "tecnologico": {
    "$oid": "674e6df4e420ddf965184287"
  },
  "materiasImpartidas": [],
  "__v": 0
}]
```

### Aulas
```Json
[{
  "_id": {
    "$oid": "674ea477df4d8cdea5223bb7"
  },
  "clave_aula": "CSC2",
  "edificio": "LC",
  "gruposAtendidos": [],
  "descripcionEquipamiento": "Pantalla, Equipos, Escritorios, Sillas",
  "__v": 0
},
{
  "_id": {
    "$oid": "674ea47adf4d8cdea5223bb9"
  },
  "clave_aula": "LCSG",
  "edificio": "LC",
  "gruposAtendidos": [],
  "descripcionEquipamiento": "Pantalla, Equipos, Escritorios, Sillas",
  "__v": 0
},
{
  "_id": {
    "$oid": "674ea499df4d8cdea5223bbb"
  },
  "clave_aula": "ACISCO",
  "edificio": "LC",
  "gruposAtendidos": [],
  "descripcionEquipamiento": "Pantalla, Equipos,",
  "__v": 0
},
{
  "_id": {
    "$oid": "674ea4a7df4d8cdea5223bbd"
  },
  "clave_aula": "TDM",
  "edificio": "LC",
  "gruposAtendidos": [],
  "descripcionEquipamiento": "Pantalla, Equipos,",
  "__v": 0
},
{
  "_id": {
    "$oid": "674ea4bedf4d8cdea5223bbf"
  },
  "clave_aula": "LCUVP2",
  "edificio": "ED-UVP",
  "gruposAtendidos": [],
  "descripcionEquipamiento": "Pantalla, Equipos,",
  "__v": 2
},
{
  "_id": {
    "$oid": "674ea4d3df4d8cdea5223bc1"
  },
  "clave_aula": "MTI1",
  "edificio": "ED-UVP",
  "gruposAtendidos": [],
  "descripcionEquipamiento": "Pantalla, Equipos,",
  "__v": 0
},
{
  "_id": {
    "$oid": "674ea664cf10603585a50449"
  },
  "clave_aula": "LCSO",
  "edificio": "LC",
  "gruposAtendidos": [],
  "descripcionEquipamiento": "Pantalla, Equipos, Escritorio",
  "__v": 0
}]
```

### Tecnologicos
```Json
[{
  "_id": {
    "$oid": "674e6df4e420ddf965184285"
  },
  "clave_tecnologico": "12DIT0001F",
  "nombre": "Instituto Tecnológico de Acapulco",
  "ubicacion": "Guerrero"
},
{
  "_id": {
    "$oid": "674e6df4e420ddf965184286"
  },
  "clave_tecnologico": "14DIT0001D",
  "nombre": "Instituto Tecnológico de Cd. Guzmán",
  "ubicacion": "Jalisco"
},
{
  "_id": {
    "$oid": "674e6df4e420ddf965184287"
  },
  "clave_tecnologico": "18DIT0002Z",
  "nombre": "Instituto Tecnológico de Tepic",
  "ubicacion": "Nayarit"
},
{
  "_id": {
    "$oid": "674e6df4e420ddf965184288"
  },
  "clave_tecnologico": "18DIT0004X",
  "nombre": "Instituto Tecnológico de Sur de Nayarit",
  "ubicacion": "Nayarit"
},
{
  "_id": {
    "$oid": "674e6df4e420ddf965184289"
  },
  "clave_tecnologico": "18DIT0003Y",
  "nombre": "Instituto Tecnológico de Bahía de Banderas",
  "ubicacion": "Nayarit"
},
{
  "_id": {
    "$oid": "674e6df4e420ddf96518428a"
  },
  "clave_tecnologico": "18DIT0005W",
  "nombre": "Instituto Tecnológico de Norte de Nayarit",
  "ubicacion": "Nayarit"
},
{
  "_id": {
    "$oid": "674e9fbefdec195bf75477b4"
  },
  "clave_tecnologico": "09DIT0001S",
  "nombre": "Instituto Tecnológico de Iztapalapa",
  "ubicacion": "Ciudad de México",
  "__v": 0
}]
```

### Alumnos
```Json
[{
  "_id": {
    "$oid": "6751bb899b34a54ce9457246"
  },
  "ID_CURP": "ABCD0101001",
  "nctrl": "20400706",
  "nombre": "CABRAL MACHUCA ALEJANDRO AARON",
  "carrera": "Sistemas",
  "tecnologico": {
    "$oid": "674e6df4e420ddf965184287"
  },
  "expediente": {
    "promedio": 0,
    "estado": "Activo",
    "semestre": 1,
    "especialidad": "Web",
    "avanceReticular": [
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842e9"
        },
        "estado": "Aprobado",
        "calificacion": 95,
        "evaluacion": "Ordinaria"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ea"
        },
        "estado": "Aprobado",
        "calificacion": 80,
        "evaluacion": "Ordinaria"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842eb"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ec"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ed"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ee"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ef"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842f0"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e986c78b7b94ba73cd073"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      }
    ]
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6751bb939b34a54ce9457249"
  },
  "ID_CURP": "ABCD0101002",
  "nctrl": "20400707",
  "nombre": "CABRERA AVILA EDSON ANTONIO",
  "carrera": "Sistemas",
  "tecnologico": {
    "$oid": "674e6df4e420ddf965184287"
  },
  "expediente": {
    "promedio": 0,
    "estado": "Activo",
    "semestre": 1,
    "especialidad": "Web",
    "avanceReticular": [
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842e9"
        },
        "estado": "Aprobado",
        "calificacion": 98,
        "evaluacion": "Ordinaria"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ea"
        },
        "estado": "Aprobado",
        "calificacion": 98,
        "evaluacion": "Ordinaria"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842eb"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ec"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ed"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ee"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ef"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842f0"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e986c78b7b94ba73cd073"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      }
    ]
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6751bb9d9b34a54ce945724c"
  },
  "ID_CURP": "ABCD0101003",
  "nctrl": "20400727",
  "nombre": "DÍAZ CANALES JOSÉ LINO",
  "carrera": "Sistemas",
  "tecnologico": {
    "$oid": "674e6df4e420ddf965184287"
  },
  "expediente": {
    "promedio": 0,
    "estado": "Activo",
    "semestre": 1,
    "especialidad": "Web",
    "avanceReticular": [
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842e9"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ea"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842eb"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ec"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ed"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ee"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ef"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842f0"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e986c78b7b94ba73cd073"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      }
    ]
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6751bba79b34a54ce945724f"
  },
  "ID_CURP": "ABCD0101004",
  "nctrl": "20400734",
  "nombre": "FLORES FABIAN ISIDRO ANTONIO",
  "carrera": "Sistemas",
  "tecnologico": {
    "$oid": "674e6df4e420ddf965184287"
  },
  "expediente": {
    "promedio": 0,
    "estado": "Activo",
    "semestre": 1,
    "especialidad": "Web",
    "avanceReticular": [
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842e9"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ea"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842eb"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ec"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ed"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ee"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ef"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842f0"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e986c78b7b94ba73cd073"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      }
    ]
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6751bbb29b34a54ce9457252"
  },
  "ID_CURP": "ABCD0101005",
  "nctrl": "20400755",
  "nombre": "HERNANDEZ RODRIGUEZ CESAR URIEL",
  "carrera": "Sistemas",
  "tecnologico": {
    "$oid": "674e6df4e420ddf965184287"
  },
  "expediente": {
    "promedio": 0,
    "estado": "Activo",
    "semestre": 1,
    "especialidad": "Web",
    "avanceReticular": [
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842e9"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ea"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842eb"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ec"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ed"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ee"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ef"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842f0"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e986c78b7b94ba73cd073"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      }
    ]
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6751bbbb9b34a54ce9457255"
  },
  "ID_CURP": "ABCD0101006",
  "nctrl": "C19400437",
  "nombre": "IBAÑEZ PARRA ARMANDO JAIR",
  "carrera": "Sistemas",
  "tecnologico": {
    "$oid": "674e6df4e420ddf965184287"
  },
  "expediente": {
    "promedio": 0,
    "estado": "Activo",
    "semestre": 1,
    "especialidad": "Web",
    "avanceReticular": [
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842e9"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ea"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842eb"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ec"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ed"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ee"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ef"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842f0"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e986c78b7b94ba73cd073"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      }
    ]
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6751bbc59b34a54ce9457258"
  },
  "ID_CURP": "ABCD0101007",
  "nctrl": "20400787",
  "nombre": "OLIVARES BERDUSCO KARLA YAZMIN",
  "carrera": "Sistemas",
  "tecnologico": {
    "$oid": "674e6df4e420ddf965184287"
  },
  "expediente": {
    "promedio": 0,
    "estado": "Activo",
    "semestre": 1,
    "especialidad": "Web",
    "avanceReticular": [
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842e9"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ea"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842eb"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ec"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ed"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ee"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ef"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842f0"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e986c78b7b94ba73cd073"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      }
    ]
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "6751bbcd9b34a54ce945725b"
  },
  "ID_CURP": "ABCD0101008",
  "nctrl": "20400799",
  "nombre": "PLATA CABELLO JOSE MANUEL",
  "carrera": "Sistemas",
  "tecnologico": {
    "$oid": "674e6df4e420ddf965184287"
  },
  "expediente": {
    "promedio": 0,
    "estado": "Activo",
    "semestre": 1,
    "especialidad": "Web",
    "avanceReticular": [
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842e9"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ea"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842eb"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ec"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ed"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ee"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ef"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842f0"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e986c78b7b94ba73cd073"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      }
    ]
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67529ba561343dbc8c448e84"
  },
  "ID_CURP": "ABCD0101009",
  "nctrl": "19400656",
  "nombre": "RAMIREZ ROMERO GERARDO GABRIEL",
  "carrera": "Sistemas",
  "tecnologico": {
    "$oid": "674e6df4e420ddf965184287"
  },
  "expediente": {
    "promedio": 0,
    "estado": "Activo",
    "semestre": 1,
    "especialidad": "Web",
    "avanceReticular": [
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842e9"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ea"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842eb"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ec"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ed"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ee"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ef"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842f0"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e986c78b7b94ba73cd073"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      }
    ]
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67529bae61343dbc8c448e87"
  },
  "ID_CURP": "ABCD0101010",
  "nctrl": "20400812",
  "nombre": "RODRIGUEZ GODINEZ ALAN DANIEL",
  "carrera": "Sistemas",
  "tecnologico": {
    "$oid": "674e6df4e420ddf965184287"
  },
  "expediente": {
    "promedio": 0,
    "estado": "Activo",
    "semestre": 1,
    "especialidad": "Web",
    "avanceReticular": [
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842e9"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ea"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842eb"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ec"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ed"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ee"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ef"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842f0"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e986c78b7b94ba73cd073"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      }
    ]
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67529bb661343dbc8c448e8a"
  },
  "ID_CURP": "ABCD0101011",
  "nctrl": "20400824",
  "nombre": "SANDOVAL GARCIA YAEL ALEJANDRO",
  "carrera": "Sistemas",
  "tecnologico": {
    "$oid": "674e6df4e420ddf965184287"
  },
  "expediente": {
    "promedio": 0,
    "estado": "Activo",
    "semestre": 1,
    "especialidad": "Web",
    "avanceReticular": [
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842e9"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ea"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842eb"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ec"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ed"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ee"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ef"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842f0"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e986c78b7b94ba73cd073"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      }
    ]
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67529bc161343dbc8c448e8d"
  },
  "ID_CURP": "ABCD0101012",
  "nctrl": "19400679",
  "nombre": "TORRES REYES JAIME CAMIL",
  "carrera": "Sistemas",
  "tecnologico": {
    "$oid": "674e6df4e420ddf965184287"
  },
  "expediente": {
    "promedio": 0,
    "estado": "Activo",
    "semestre": 1,
    "especialidad": "Web",
    "avanceReticular": [
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842e9"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ea"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842eb"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ec"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ed"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ee"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ef"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842f0"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e986c78b7b94ba73cd073"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      }
    ]
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67529bc961343dbc8c448e90"
  },
  "ID_CURP": "ABCD0101013",
  "nctrl": "20400833",
  "nombre": "VALDEZ PONCE JOSE ALBERTO",
  "carrera": "Sistemas",
  "tecnologico": {
    "$oid": "674e6df4e420ddf965184287"
  },
  "expediente": {
    "promedio": 0,
    "estado": "Activo",
    "semestre": 1,
    "especialidad": "Web",
    "avanceReticular": [
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842e9"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ea"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842eb"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ec"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ed"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ee"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ef"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842f0"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e986c78b7b94ba73cd073"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      }
    ]
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67529bd661343dbc8c448e93"
  },
  "ID_CURP": "ABCD0101014",
  "nctrl": "20400840",
  "nombre": "VILLELA CASTAÑEDA EDGAR JOEL",
  "carrera": "Sistemas",
  "tecnologico": {
    "$oid": "674e6df4e420ddf965184287"
  },
  "expediente": {
    "promedio": 0,
    "estado": "Activo",
    "semestre": 1,
    "especialidad": "Web",
    "avanceReticular": [
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842e9"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ea"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842eb"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ec"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ed"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ee"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842ef"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e9731e420ddf9651842f0"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      },
      {
        "materia": {
          "$oid": "674e986c78b7b94ba73cd073"
        },
        "estado": "Pendiente",
        "calificacion": 0,
        "evaluacion": "N/A"
      }
    ]
  },
  "__v": 0
}]
```

### Grupos
```Json
[{
  "_id": {
    "$oid": "6751beb79b34a54ce945725f"
  },
  "clave_grupo": "grp-prg-a",
  "materia": {
    "$oid": "674e9731e420ddf9651842ef"
  },
  "docente": {
    "$oid": "674e7355e420ddf9651842c1"
  },
  "estudiantes": [
    {
      "$oid": "6751bb899b34a54ce9457246"
    },
    {
      "$oid": "6751bb939b34a54ce9457249"
    },
    {
      "$oid": "6751bb9d9b34a54ce945724c"
    },
    {
      "$oid": "6751bba79b34a54ce945724f"
    }
  ],
  "aula": {
    "$oid": "674ea47adf4d8cdea5223bb9"
  },
  "horario": "11-12",
  "__v": 0
},
{
  "_id": {
    "$oid": "67529c6461343dbc8c448e97"
  },
  "clave_grupo": "grp-nsql-a",
  "materia": {
    "$oid": "674e986c78b7b94ba73cd073"
  },
  "docente": {
    "$oid": "674e7355e420ddf9651842c8"
  },
  "estudiantes": [
    {
      "$oid": "6751bb899b34a54ce9457246"
    },
    {
      "$oid": "6751bb939b34a54ce9457249"
    },
    {
      "$oid": "6751bb9d9b34a54ce945724c"
    },
    {
      "$oid": "6751bba79b34a54ce945724f"
    }
  ],
  "aula": {
    "$oid": "674ea47adf4d8cdea5223bb9"
  },
  "horario": "7-8",
  "__v": 0
}]
```


## 🔍 Tabla de endpoints



# Endpoints de la API

## Base URL
`localhost:3000/api/`

---

### **Alumnos**
| Método | Ruta                       | Descripción                        |
|--------|----------------------------|------------------------------------|
| GET    | `/alumnos/`                | Obtener todos los alumnos          |
| GET    | `/alumnos/:id`             | Obtener un alumno específico       |
| POST   | `/alumnos/`                | Crear un nuevo alumno              |
| PUT    | `/alumnos/:id`             | Actualizar un alumno               |
| PUT    | `/alumnos/:id/calificar`   | Calificar una materia para un alumno |

---

### **Materias**
| Método | Ruta                       | Descripción                        |
|--------|----------------------------|------------------------------------|
| GET    | `/materias/`               | Obtener todas las materias         |
| GET    | `/materias/:id`            | Obtener una materia específica     |
| POST   | `/materias/`               | Crear una nueva materia            |
| PUT    | `/materias/:id`            | Actualizar una materia             |
| DELETE | `/materias/:id`            | Eliminar una materia               |

---

### **Tecnológicos**
| Método | Ruta                       | Descripción                        |
|--------|----------------------------|------------------------------------|
| GET    | `/tecnologicos/`           | Obtener todos los tecnológicos     |
| GET    | `/tecnologicos/:id`        | Obtener un tecnológico específico  |
| POST   | `/tecnologicos/`           | Crear un nuevo tecnológico         |

---

### **Docentes**
| Método | Ruta                       | Descripción                        |
|--------|----------------------------|------------------------------------|
| GET    | `/docentes/`               | Obtener todos los docentes         |
| GET    | `/docentes/:id`            | Obtener un docente específico      |
| POST   | `/docentes/`               | Crear un nuevo docente (middleware aplicado) |
| PUT    | `/docentes/:id`            | Actualizar un docente (middleware aplicado) |
| DELETE | `/docentes/:id`            | Eliminar un docente                |

---

### **Aulas**
| Método | Ruta                       | Descripción                        |
|--------|----------------------------|------------------------------------|
| GET    | `/aulas/`                  | Obtener todas las aulas            |
| GET    | `/aulas/:id`               | Obtener un aula específica         |
| POST   | `/aulas/`                  | Crear una nueva aula               |
| PUT    | `/aulas/:id`               | Actualizar un aula                 |
| DELETE | `/aulas/:id`               | Eliminar un aula                   |

---

### **Grupos**
| Método | Ruta                       | Descripción                        |
|--------|----------------------------|------------------------------------|
| GET    | `/grupos/`                 | Obtener todos los grupos           |
| GET    | `/grupos/:id`              | Obtener un grupo específico        |
| POST   | `/grupos/`                 | Crear un nuevo grupo               |
| DELETE | `/grupos/:id`              | Eliminar un grupo                  |

---

### **Queries**
| Método | Ruta                       | Descripción                        |
|--------|----------------------------|------------------------------------|
| GET    | `/queries/query1/:id`      | Ejecutar query 1                   |
| GET    | `/queries/query2/:grupoId` | Ejecutar query 2                   |
| GET    | `/queries/query3/:id`      | Ejecutar query 3                   |
| GET    | `/queries/query4/:materiaId` | Ejecutar query 4                   |
| GET    | `/queries/query5/:materiaId` | Ejecutar query 5                   |
| GET    | `/queries/query6/:materiaId` | Ejecutar query 6                   |
| GET    | `/queries/query7/:alumnoId/:horario` | Ejecutar query 7                   |
| GET    | `/queries/query8/:alumnoId` | Ejecutar query 8                   |
| GET    | `/queries/query9/:docenteId` | Ejecutar query 9                   |




## 📁 Estructura del Proyecto
```plaintext
API-2-REDIS-NOE4J/
├── src/
│   ├── config/
│   │   ├── mongo.js
│   │   └── redis.js
│   ├── controllers/
│   │   ├── alumnoController.js
│   │   ├── aulaController.js
│   │   ├── docenteController.js
│   │   ├── grupoController.js
│   │   ├── materiaController.js
│   │   ├── queryController.js
│   │   └── tecnologicoController.js
│   ├── middlewares/
│   │   ├── docenteMiddelware.js
│   │   └── logger.js
│   ├── models/
│   │   ├── alumnoModelo.js
│   │   ├── aulaModelo.js
│   │   ├── docenteModelo.js
│   │   ├── grupoModelo.js
│   │   ├── materiaModelo.js
│   │   └── tecnologicoModelo.js
│   ├── routes/
│   │   ├── alumnoRoutes.js
│   │   ├── aulaRoutes.js
│   │   ├── docenteRoutes.js
│   │   ├── grupoRoutes.js
│   │   ├── materiaRoutes.js
│   │   ├── queryRoutesr.js
│   │   └── tecnologicoRoutes.js
│   ├── validation/
│   │   └── Validator.js
│   └── server.js
├── docker-compose.yml
├── .dockerignore
├── Dockerfile
└── package.json
```

## 💻 Códigos Backend
El backend está desarrollado en Node.js utilizando Express. El código completo se encuentra en la carpeta `src/`. Los controladores gestionan las operaciones principales, los modelos definen las colecciones de mongo con mongoose y las rutas definen los endpoints expuestos.

### server.js
``` js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configuraciones
const {connectDB, disconnectDB} = require('./config/mongo');
const redisClient = require('./config/redis');

const logger = require('./middlewares/logger');

// Rutas
const alumnoRoutes = require('./routes/alumnoRoutes');
const materiaRoutes = require('./routes/materiaRoutes');
const tecnologicoRoutes = require('./routes/tecnologicoRoutes');
const docenteRoutes = require('./routes/docenteRoutes');
const aulaRoutes = require('./routes/aulaRoutes');
const grupoRoutes = require('./routes/grupoRoutes');
const queryRoutes = require('./routes/queryRoutes');

// Middleware
app.use((req, res, next) => logger(req, res, next, redisClient));
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
// Rutas
app.use('/api/alumnos', alumnoRoutes);
app.use('/api/materias', materiaRoutes);
app.use('/api/tecnologicos', tecnologicoRoutes);
app.use('/api/docentes', docenteRoutes);
app.use('/api/aulas', aulaRoutes);
app.use('/api/grupos', grupoRoutes);
app.use('/api/queries', queryRoutes);


const PORT = process.env.PORT || 3000;

connectDB();

process.on('SIGINT', async () => {
    console.log('Cerrando conexión con Redis...');
    await redisClient.disconnect();
    console.log('Conexión con Redis cerrada');
    await disconnectDB();
    process.exit(0); // Finaliza el proceso
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT} \r\n http://localhost:${PORT}`);
});
```

### redis.js
``` js
/** 
 * Archivo para configurar la conexión a Redis.
 * 
 * Exporta el cliente a la base de redis.
 * **/
const redis = require('redis');

// Configuración de Redis
/** 
 * Archivo para configurar la conexión a Redis.
 * 
 * Exporta el cliente a la base de redis.
 * **/

const { REDIS_HOST, REDIS_PORT } = process.env;

const redis = require('redis');

// Configuración de Redis
const redisClient = redis.createClient({
    socket: {
        port: REDIS_PORT,
        host: REDIS_HOST
    }
});

// Manejador de eventos para la conexión
redisClient.on('connect', () => {
    console.log('Conectado a Redis');
});

redisClient.on('error', (err) => {
    console.error('Error en la conexión a Redis:', err);
});

redisClient.connect();


module.exports = redisClient;
```

### alumnoModelo.js
``` js
const mongoose = require("mongoose");

const ExpedienteSchema = new mongoose.Schema(
  {
    promedio: { type: Number, required: true },
    estado: { type: String, required: true },
    semestre: { type: Number, required: true },
    especialidad: { type: String, required: true },
    avanceReticular: [
      {
        materia: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Materia",
          required: true,
        },
        estado: { type: String, required: true },
        calificacion: { type: Number, required: true },
        evaluacion: { type: String, required: true },
      },
    ],
  },
  { _id: false }
);

const AlumnoSchema = new mongoose.Schema({
  ID_CURP: { type: String, required: true, unique: true },
  nctrl: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  carrera: { type: String, required: true },
  tecnologico: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tecnologico",
    required: true,
  },
  expediente: ExpedienteSchema,
});

const Alumno = mongoose.model("Alumno", AlumnoSchema);

module.exports = Alumno;
```

### aulaModelo.js
``` js
const mongoose = require("mongoose");

const AulaSchema = new mongoose.Schema({
  clave_aula: { type: String, required: true, unique: true },
  edificio: { type: String, required: true },
  gruposAtendidos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Grupo"
    },
  ],
  descripcionEquipamiento: { type: String, required: true },
});

const Aula = mongoose.model("Aula", AulaSchema);

module.exports = Aula;

```

### docenteModelo.js
``` js
const mongoose = require("mongoose");

const DocenteSchema = new mongoose.Schema({
  ID_RFC: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  carrera: { type: String, required: true },
  tecnologico: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tecnologico",
    required: true,
  },
  materiasImpartidas: [
    { type: mongoose.Schema.Types.ObjectId,
      ref: "Materia"
    },
  ],
});


const Docente = mongoose.model("Docente", DocenteSchema);

module.exports = Docente;
```

### grupoModelo.js
``` js
const mongoose = require('mongoose');

const GrupoSchema = new mongoose.Schema({
    clave_grupo: { type: String, required: true },
    materia: { type: mongoose.Schema.Types.ObjectId, ref: 'Materia', required: true },
    docente: { type: mongoose.Schema.Types.ObjectId, ref: 'Docente', required: true },
    estudiantes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Alumno', required: true }],
    aula: { type: mongoose.Schema.Types.ObjectId, ref: 'Aula', required: true },
    horario: { type: String, required: true },
});

const Grupo = mongoose.model("Grupo", GrupoSchema);

module.exports = Grupo;
```

### materiaModelo.js
``` js
const mongoose = require('mongoose');

const MateriaSchema = new mongoose.Schema({
    clave: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    carrera: { type: String, required: true },
    descripcion: { type: String, required: true },
    plan: { type: String, required: true }
});

const Materia = mongoose.model("Materia", MateriaSchema);

module.exports = Materia;
```

### tecnologicoModelo.js
``` js
const mongoose = require("mongoose");

const TecnologicoSchema = new mongoose.Schema({
  clave_tecnologico: { type: String, required: true },
  nombre: { type: String, required: true },
  ubicacion: { type: String },
});

const Tecnologico = mongoose.model("Tecnologico", TecnologicoSchema);

module.exports = Tecnologico;
```

Para evirar poner todos los codigos, los siguientes archivos son elaces a los cogidos en el repositorio

### alumnoController.js
[alumnoController.js](http://https://github.com/dev-aj001/mongoose/blob/main/src/controllers/alumnoController.js "alumnoController.js")

### docenteController.js
[docenteController.js](http://https://github.com/dev-aj001/mongoose/blob/main/src/controllers/docenteController.js "docenteController.js")

### grupoController.js
[grupoController.js](http://https://github.com/dev-aj001/mongoose/blob/main/src/controllers/grupoController.js "grupoController.js")

### materiaController.js
[materiaController.js](http://https://github.com/dev-aj001/mongoose/blob/main/src/controllers/materiaController.js "materiaController.js")

### tecnologicoController.js
[tecnologicoController.js](http://https://github.com/dev-aj001/mongoose/blob/main/src/controllers/tecnologicoController.js "tecnologicoController.js")

### aulaController.js
[aulaController.js](https://github.com/dev-aj001/mongoose/blob/main/src/controllers/aulaController.js")

### QueryController.js
Maneja todas las queries requeridas en el caso 02
```js
const Tecnologico = require("../models/tecnologicoModelo");
const Validator = require("../validation/validator");

const getTecnologicos = async (req, res) => {
    try {
        const tecnologicos = await Tecnologico.find();

        res.data = tecnologicos;
        res.status(200).json(tecnologicos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTecnologico = async (req, res) => {
    try {
        const tecnologicos = await Tecnologico.findById(req.params.id);

        res.data = tecnologicos;
        res.status(200).json(tecnologicos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const createTecnologico = async (req, res) => {
    try {
        const { error, value } = Validator.tecnologico.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const tecnologico = await Tecnologico.create(value);

        res.data = tecnologico;
        res.status(201).json(tecnologico);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { 
    getTecnologicos,
    getTecnologico,
    createTecnologico
};
```

### mongo.js
```js
const { MONGO_URI, DATABASE } = process.env;
const mongoose = require ('mongoose');

const connectDB = async () => {
    console.log(MONGO_URI);
    try {
        const db = await mongoose.connect(MONGO_URI, {
            dbName: DATABASE
        });
        console.log('Conexion exitosa a la base de datos : ', db.connection.name);
    } catch (error) {
        console.log('Error en la conexion: ', error);
    }
};

const disconnectDB = async () => {
    try {
        await mongoose.disconnect();
        console.log('Desconectado de la base de datos');
    } catch (error) {
        console.log('Error al desconectar de la base de datos: ', error);
    }
};

module.exports = {connectDB, disconnectDB};
```
### routes/
Cada archivo maneja las rutas de los endponit correspondientes

[alumnoRoutes.js](https://github.com/dev-aj001/mongoose/blob/main/src/routes/alumnoRoutes.js "alumnoRoutes.js")

[aulaRoutes.js](https://github.com/dev-aj001/mongoose/blob/main/src/routes/aulaRoutes.js "aulaRoutes.js")

[docenteRoutes.js](https://github.com/dev-aj001/mongoose/blob/main/src/routes/docenteRoutes.js "docenteRoutes.js")

[grupoRoutes.js](https://github.com/dev-aj001/mongoose/blob/main/src/routes/grupoRoutes.js "grupoRoutes.js")

[materiaRoutes.js](https://github.com/dev-aj001/mongoose/blob/main/src/routes/materiaRoutes.js "materiaRoutes.js")

[queryRoutes.js](https://github.com/dev-aj001/mongoose/blob/main/src/routes/queryRoutes.js "queryRoutes.js")

[tecnologicoRoutes.js](https://github.com/dev-aj001/mongoose/blob/main/src/routes/tecnologicoRoutes.js "tecnologicoRoutes.js")

### /validation
Este archivo maneja la validacion de la entrada de los datos de los endpoints

[validator.js](https://github.com/dev-aj001/mongoose/blob/main/src/validation/validator.js "validator.js")

### /middlewares
[docenteMiddelware.js](https://github.com/dev-aj001/mongoose/blob/main/src/middlewares/docenteMiddelware.js "docenteMiddelware.js")

Este archivo maneja el logger de las peticiones a redis:
[logger.js](https://github.com/dev-aj001/mongoose/blob/main/src/middlewares/logger.js "logger.js")

## 🐳 Archivos docker

### construir la imagen del servidor:
Si desea construir la imagen es necesario tener los archivos `docker-compose.yml` `.dockerignore` y `Dockerfile` en la raiz del proyecto.


#### .dockerignore
``` plaintext
node_modules
npm-debug.log
.env
```

#### Dockerfile
``` docker
FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","start"]
```

### Docker compose
El proyecto se ejecuta a través de contenedores Docker definidos en el archivo `docker-compose.yml`. Incluye los servicios de:

- **API Backend:** Node.js
- **Redis:** Servicio de almacenamiento en memoria para datos rápidos.
- **Neo4j:** Base de datos de grafos.

Para levantar los contenedores, utiliza:
```bash
docker-compose up -d --build
```
o tambien:
```bash
docker compose -f "docker-compose.yml" up -d --build
```

Usa este comando para ver el estado de los servicios levantados:
```bash
docker compose ps
```

Para eliminar todos los servicios, volumenes y redes:
```bash
docker compose down -v
```

La configuración detallada está disponible en el archivo `docker-compose.yml`.

#### docker-compose.yml

```docker
version: '3.8'

services:
# mongo Primary replica set
  mongo01:
    image: mongo
    container_name: mongo01
    command: mongod --replSet replica01 --bind_ip_all
    depends_on:
      - mongo02
      - mongo03
      - mongo04
      - mongo05
    ports:
      - "27017:27017"
    networks:
      - red01
# mongo replica
  mongo02:
    image: mongo
    container_name: mongo02
    command: mongod --replSet replica01 --bind_ip_all
    ports:
      - "27018:27017"
    networks:
      - red01
# mongo replica
  mongo03:
    image: mongo
    container_name: mongo03
    command: mongod --replSet replica01 --bind_ip_all
    ports:
      - "27019:27017"
    networks:
      - red01
# mongo replica
  mongo04:
    image: mongo
    container_name: mongo04
    command: mongod --replSet replica01 --bind_ip_all
    ports:
      - "27020:27017"
    networks:
      - red01
# mongo replica
  mongo05:
    image: mongo
    container_name: mongo05
    command: mongod --replSet replica01 --bind_ip_all
    ports:
      - "27021:27017"
    networks:
      - red01
# redis logger
  redis01:
    image: redis
    container_name: redis01
    ports:
      - "6379:6379"
    networks:
      - red01
    depends_on:
      - mongo01

# build node app
  mongoose-replicaset01:
    build: .
    image: mongoose-replicaset01
    container_name: mongoose-replicaset01
    depends_on:
      - redis01
      - mongo01
    environment:
      - MONGO_URI=mongodb://mongo01,mongo02,mongo03,mongo04,mongo05/?replicaSet=replica01
      - DATABASE=tecnologico
      - REDIS_HOST=redis01
      - REDIS_PORT=6379
    ports:
      - "3000:3000"
    networks:
      - red01
    restart: unless-stopped
  
networks:
  red01:
    driver: bridge
    ipam:
      config:
        - subnet: 172.20.0.0/24
```


## Coleccion de postman:
importa este Json en postman para probar las colecciones de la api:

[collection.json](https://github.com/dev-aj001/mongoose/blob/main/http%20Requests/RESTful%20API%20Avance%20Academico%20del%20TecNM.postman_collection.json "collection.json")