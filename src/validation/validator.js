const Joi = require('joi');

const docente = Joi.object({
    ID_RFC: Joi.string().required()
    .messages({
        'string.base': 'El ID_RFC debe ser un texto.',
        'any.required': 'El campo ID_RFC es obligatorio.'
    }),
    nombre: Joi.string().required()
    .messages({
        'string.base': 'El nombre debe ser un texto.',
        'any.required': 'El campo nombre es obligatorio.'
    }),
    carrera: Joi.string().required()
    .messages({
        'string.base': 'La carrera debe ser un texto.',
        'any.required': 'El campo carrera es obligatorio.'
    }),
    tecnologico: Joi.string().pattern(/^[0-9a-fA-F]{24}$/, 'MongoDB ObjectId')
    .required()
    .messages({
        'string.base': 'El campo tecnologico debe ser un texto.',
        'string.pattern.name': 'El tecnologico debe ser un ObjectId válido de MongoDB.',
        'any.required': 'El campo tecnologico es obligatorio.'
    }),
    materiasImpartidas: Joi.array().items(Joi.string().pattern(/^[0-9a-fA-F]{24}$/, 'MongoDB ObjectId').messages({
        'string.base': 'Cada elemento de materiasImpartidas debe ser un texto.',
        'string.pattern.name': 'Cada elemento de materiasImpartidas debe ser un ObjectId valido de MongoDB.',
        'any.required': 'El campo materiasImpartidas es obligatorio.'
    }))
    .messages({
        'array.base': 'El campo materiasImpartidas debe ser un array.'
    }),
});

const docenteUpdate = Joi.object({
    ID_RFC: Joi.string()
    .messages({
        'string.base': 'El ID_RFC debe ser un texto.',
    }),
    nombre: Joi.string()
    .messages({
        'string.base': 'El nombre debe ser un texto.',
    }),
    carrera: Joi.string()
    .messages({
        'string.base': 'La carrera debe ser un texto.',
    }),
    tecnologico: Joi.string().pattern(/^[0-9a-fA-F]{24}$/, 'MongoDB ObjectId')
    .messages({
        'string.base': 'El campo tecnologico debe ser un texto.',
        'string.pattern.name': 'El tecnologico debe ser un ObjectId válido de MongoDB.',
        'any.required': 'El campo tecnologico es obligatorio.'
    }),
    materiasImpartidas: Joi.array().items(Joi.string().pattern(/^[0-9a-fA-F]{24}$/, 'MongoDB ObjectId').messages({
        'string.base': 'Cada elemento de materiasImpartidas debe ser un texto.',
        'string.pattern.name': 'Cada elemento de materiasImpartidas debe ser un ObjectId valido de MongoDB.',
        'any.required': 'El campo materiasImpartidas es obligatorio.'
    }))
    .messages({
        'array.base': 'El campo materiasImpartidas debe ser un array.'
    }),
});

const materiaUpdate = Joi.object({
    clave: Joi.string()
    .messages({
        'string.base': 'La clave debe ser un texto.',
    }),
    nombre: Joi.string()
    .messages({
        'string.base': 'El nombre debe ser un texto.',
    }),
    carrera: Joi.string()
    .messages({
        'string.base': 'La carrera debe ser un texto.',
    }),
    descripcion: Joi.string()
    .messages({
        'string.base': 'La descripcion debe ser un texto.',
    }),
    plan: Joi.string()
    .messages({
        'string.base': 'El plan debe ser un texto.',
    })
});

const materia = Joi.object({
    clave: Joi.string().required()
    .messages({
        'string.base': 'La clave debe ser un texto.',
        'any.required': 'El campo clave es obligatorio.'
    }),
    nombre: Joi.string().required()
    .messages({
        'string.base': 'El nombre debe ser un texto.',
        'any.required': 'El campo nombre es obligatorio.'
    }),
    carrera: Joi.string().required()
    .messages({
        'string.base': 'La carrera debe ser un texto.',
        'any.required': 'El campo carrera es obligatorio.'
    }),
    descripcion: Joi.string().required()
    .messages({
        'string.base': 'La descripcion debe ser un texto.',
        'any.required': 'El campo descripcion es obligatorio.'
    }),
    plan: Joi.string().required()
    .messages({
        'string.base': 'El plan debe ser un texto.',
        'any.required': 'El campo plan es obligatorio.'
    })
});

const materiaAvanceUpdate = Joi.object({
    _id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/, 'MongoDB ObjectId')
    .required()
    .messages({
        'string.base': 'El _id debe ser un texto.',
        'string.pattern.name': 'El _id debe ser un ObjectId válido de MongoDB.',
        'any.required': 'El campo _id es obligatorio.'
    }),
    // estado computado
    calificacion: Joi.number().min(0).max(100).required()
    .messages({
        'number.base': 'La calificación debe ser un número.',
        'number.min': 'La calificación debe ser al menos 0.',
        'number.max': 'La calificación no puede ser mayor a 100.',
        'any.required': 'El campo calificación es obligatorio.'
    }),
    evaluacion: Joi.string()
    .valid('Ordinaria', 'Reevaluación', 'Especial', 'N/A')
    .required()
    .messages({
        'any.only': 'El estado debe ser uno de los siguientes valores: Ordinaria, Reevaluación, Especial.',
        'any.required': 'El campo estado es obligatorio.'
    }),
});

const alumno = Joi.object({
    ID_CURP: Joi.string().required()
    .messages({
        'string.base': 'El ID_CURP debe ser un texto.',
        'any.required': 'El campo ID_CURP es obligatorio.'
    }),
    nctrl: Joi.string().required()
    .messages({
        'string.base': 'El nctrl debe ser un texto.',
        'any.required': 'El campo nctrl es obligatorio.'
    }),
    nombre: Joi.string().required()
    .messages({
        'string.base': 'El nombre debe ser un texto.',
        'any.required': 'El campo nombre es obligatorio.'
    }),
    carrera: Joi.string().required()
    .messages({
        'string.base': 'La carrera debe ser un texto.',
        'any.required': 'El campo carrera es obligatorio.'
    }),
    tecnologico: Joi.string().required()
    .messages({
        'string.base': 'El tecnologico debe ser un texto.',
        'any.required': 'El campo tecnologico es obligatorio.'
    }),
    expediente: Joi.object({
        // promedio computado
        estado: Joi.string()
        .valid('Activo', 'Baja temporal', 'Baja permanente')
        .required()
        .messages({
            'any.only': 'El estado debe ser uno de los siguientes valores: Activo, Baja temporal, Baja permanente.',
            'any.required': 'El campo estado es obligatorio.'
        }),
        semestre: Joi.number().required()
        .messages({
            'number.base': 'El semestre debe ser un número.',
            'any.required': 'El campo semestre es obligatorio.'
        }),
        especialidad: Joi.string().required()
        .messages({
            'string.base': 'La especialidad debe ser un texto.',
            'any.required': 'El campo especialidad es obligatorio.'
        }),
        // materias computadas
    }).required(),
})
.unknown(false)  // Deshabilita claves adicionales no permitidas
.messages({
  'object.unknown': 'El campo {#label} no está permitido en el esquema de POST alumno.'  // Mensaje personalizado
});

const alumnoUpdate = Joi.object({
    nombre: Joi.string()
    .messages({
        'string.base': 'El nombre debe ser un texto.'
    }),
    expediente: Joi.object({
        // promedio computado
        estado: Joi.string()
        .valid('Activo', 'Baja temporal', 'Baja permanente')
        .messages({
            'any.only': 'El estado debe ser uno de los siguientes valores: Activo, Baja temporal, Baja permanente.',
        }),
        semestre: Joi.number()
        .messages({
            'number.base': 'El semestre debe ser un número.',
        }),
        especialidad: Joi.string()
        .messages({
            'string.base': 'La especialidad debe ser un texto.',
        }),
        // materias computadas
    }),
})
.unknown(false)  // Deshabilita claves adicionales no permitidas
.messages({
  'object.unknown': 'El campo {#label} no está permitido en el esquema de PUT alumno.'  // Mensaje personalizado
});

const tecnologico = Joi.object({
    clave_tecnologico: Joi.string().required()
    .messages({
        'string.base': 'La clave_tecnologico debe ser un texto.',
        'any.required': 'El campo clave_tecnologico es obligatorio.'
    }),
    nombre: Joi.string().required()
    .messages({
        'string.base': 'El nombre debe ser un texto.',
        'any.required': 'El campo nombre es obligatorio.'
    }),
    ubicacion: Joi.string()
    .messages({
        'string.base': 'La ubicacion debe ser un texto.'
    }),
});

const grupo = Joi.object({
    clave_grupo: Joi.string().required()
    .messages({
        'string.base': 'La clave_grupo debe ser un texto.',
        'any.required': 'El campo clave_grupo es obligatorio.'
    }),
    materia: Joi.string().required()
    .messages({
        'string.base': 'El materia debe ser un texto.',
        'any.required': 'El campo materia es obligatorio.'
    }),
    docente: Joi.string().required()
    .messages({
        'string.base': 'El idDocente debe ser un texto.',
        'any.required': 'El campo idDocente es obligatorio.'
    }),
    estudiantes: Joi.array().items(Joi.string().required()).required()
    .messages({
        'string.base': 'El estudiantes debe ser un array.',
        'any.required': 'El campo estudiantes es obligatorio.'
    }),
    aula: Joi.string().required()
    .messages({
        'string.base': 'El aula debe ser un texto.',
        'any.required': 'El campo aula es obligatorio.'
    }),
    horario: Joi.string().required()
    .messages({
        'string.base': 'El horario debe ser un texto.',
        'any.required': 'El campo horario es obligatorio.'
    }),
});

const aula = Joi.object({
    clave_aula: Joi.string().required()
    .messages({
        'string.base': 'La clave_aula debe ser un texto.',
        'any.required': 'El campo clave_aula es obligatorio.'
    }),
    edificio: Joi.string().required()
    .messages({
        'string.base': 'El edificio debe ser un texto.',
        'any.required': 'El campo edificio es obligatorio.'
    }),
    gruposAtendidos: Joi.array().items(Joi.string().required()
        .messages({
            'string.base': 'El elemento de gruposAtendidos debe ser un texto.',
            'any.required': 'El campo gruposAtendidos debe tener al menos un elemento.'
        }),
    )
    .messages({
        'array.base': 'El gruposAtendidos debe ser un array.',
    }),
    
    descripcionEquipamiento: Joi.string().required()
    .messages({
        'string.base': 'La descripcionEquipo debe ser un texto.',
        'any.required': 'El campo descripcionEquipo es obligatorio.'
    }),
});

const aulaUpdate = Joi.object({
    clave_aula: Joi.string()
    .messages({
        'string.base': 'La clave_aula debe ser un texto.',
    }),
    edificio: Joi.string()
    .messages({
        'string.base': 'El edificio debe ser un texto.',
    }),
    gruposAtendidos: Joi.array().items(Joi.string()
        .messages({
            'string.base': 'El elemento de gruposAtendidos debe ser un texto.',
        }),
    ),
    descripcionEquipamiento: Joi.string()
    .messages({
        'string.base': 'La descripcionEquipo debe ser un texto.',
    }),
});

module.exports = { 
    alumno,
    materiaAvanceUpdate,
    alumnoUpdate,
    materia,
    materiaUpdate,
    tecnologico,
    docenteUpdate,
    docente,
    aula,
    aulaUpdate,
    grupo
};