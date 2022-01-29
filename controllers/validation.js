const joi = require("joi");


module.exports.registerValidation = (data) => {
        const schema = joi.object({
            name: joi.string(),
            size: joi.number(),
            color: joi.string(),
            quantity: joi.number(),
            price: joi.number()
        }).unknown();
    
    return schema.validate(data);
}