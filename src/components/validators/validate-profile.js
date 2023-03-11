import Joi from "joi";

const profileSchema = Joi.object({
  firstName: Joi.string().required().messages({
    "string.empty": "first name is required",
    "string.base": "first name must be a string"
  }),
  lastName: Joi.string().required().messages({
    "string.empty": "last name is required",
    "string.base": "last name must be a string"
  }),
  email: Joi.string().email({ tlds: false }).required().messages({
    "string.empty": "email is required",
    "string.email": "email must be a valid email address"
  }),
  mobilePhone: Joi.string().required().length(10).pattern(/^\d+$/).messages({
    "string.empty": "mobile phone is required",
    "string.pattern.base": "mobile phone must be a number",
    "string.length": "mobile phone must be exactly 10 digits",
    "string.base": "mobile must be a string"
  }),
  address: Joi.string().required().messages({
    "string.empty": "address is required",
    "string.base": "address must be a string"
  }),
  lineToken: Joi.string().required().messages({
    "string.empty": "line token is required",
    "string.base": "line token be a string"
  })
});

export default function validateProfile(input) {
  const { error } = profileSchema.validate(input, {
    abortEarly: false
  });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
}

const profileEditSchema = Joi.object({
  firstName: Joi.string().required().messages({
    "string.empty": "first name is required",
    "string.base": "first name must be a string"
  }),
  lastName: Joi.string().required().messages({
    "string.empty": "last name is required",
    "string.base": "last name must be a string"
  }),

  lineToken: Joi.string().required().messages({
    "string.empty": "line token is required",
    "string.base": "line token be a string"
  })
});

export function validateEditProfile(input) {
  const { error } = profileEditSchema.validate(input, {
    abortEarly: false
  });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
}
