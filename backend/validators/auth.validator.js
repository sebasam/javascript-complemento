const { body } = require('express-validator');
const { notify } = require('../routes/auth.routes');

const registerValidator = [
    body('nombre')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ min: 3 }).withMessage('Mínimo 3 caracteres'),
    body('email')
        .notEmpty().withMessage('El Email es obligatorio')
        .isEmail().withMessage('Debes enviar un email válido'),
    body('password')
        .notEmpty().withMessage('La contraseña es obligatoria')
        .isStrongPassword().withMessage('La contraseña debe tener mínimo 8 caracteres, mayúsculas, minúsculas, números y caracter especial.')
];



module.exports = {
    registerValidator
}