exports.userSignUpValidator = (req, res, next) => {
    //name is not null and between 4 to 10
    req.check('name', "Name is required")
    .notEmpty()
    .isLength({
        min: 2, max: 200
    })
    .withMessage("Name must contain at least 2 characters")
    //email is not null, valid and normalized with regular expression
    req.check('email', 'Email is required')
    .notEmpty()
    .matches(/.+@.+\..+/)
    .withMessage('Email must contain @')
    .isLength({
        min: 4, max: 2000
    })
    //check for password
    req.check('password', "Password is required").notEmpty();
    req.check('password')
    .isLength({min:5})
    .withMessage("Password must contain at least 5 characters")
    .matches(/\d/)
    .withMessage('Password must contain a number')
    //check for errors:
    const errors = req.validationErrors()
    //map throught the errors:
    if(errors){
        const firstError = errors.map((error) => error.msg)[0]
        return res.status(400).json({error: firstError})
        }
    next();
}


exports.hospitalSignUpValidator = (req, res, next) => {
    //name is not null and between 4 to 10
    req.check('hospitalName', "Hospital Name is required")
    .notEmpty()
    .isLength({
        min: 2, max: 200
    })
    .withMessage("Name must contain at least 2 characters")
     //address
     req.check('address', "Address is required")
     .notEmpty()
     .isLength({
         min: 2, max: 200
     })
     .withMessage("Name must contain at least 2 characters")
    //email is not null, valid and normalized with regular expression
    req.check('hospitalEmail', 'Hospital Email must be between 3 to 32 characters')
    .matches(/.+@.+\..+/)
    .withMessage('Email must contain @')
    .isLength({
        min: 4, max: 2000
    })
    //person Name
    req.check('personName', "Person Name is required")
    .notEmpty()
    .isLength({
        min: 2, max: 200
    })
    .withMessage("Person Name must contain at least 2 characters")
     //email is not null, valid and normalized with regular expression
     req.check('personEmail', 'Person Email must be between 3 to 32 characters')
     .matches(/.+@.+\..+/)
     .withMessage('Person Email must contain @')
     .isLength({
         min: 4, max: 2000
     })
    //check for password
    req.check('password', "Password is required").notEmpty();
    req.check('password')
    .isLength({min:8})
    .withMessage("Password must contain at least 8 characters")
    .matches(/\d/)
    .withMessage('Password must contain a number')
    //check for errors:
    const errors = req.validationErrors()
    //map throught the errors:
    if(errors){
        const firstError = errors.map((error) => error.msg)[0]
        return res.status(400).json({error: firstError})
        }
    next();
}

exports.adminSignUpValidator = (req, res, next) => {
    //name is not null and between 4 to 10
    req.check('name', "Name is required")
    .notEmpty()
    .isLength({
        min: 2, max: 200
    })
    .withMessage("Name must contain at least 2 characters")
    //email is not null, valid and normalized with regular expression
    req.check('adminEmail', 'Email must be between 3 to 32 characters')
    .matches(/.+@.+\..+/)
    .withMessage('Email must contain @')
    .isLength({
        min: 4, max: 2000
    })
    //check for password
    req.check('password', "Password is required").notEmpty();
    req.check('password')
    .isLength({min:5})
    .withMessage("Password must contain at least 5 characters")
    .matches(/\d/)
    .withMessage('Password must contain a number')
    //check for errors:
    const errors = req.validationErrors()
    //map throught the errors:
    if(errors){
        const firstError = errors.map((error) => error.msg)[0]
        return res.status(400).json({error: firstError})
        }
    next();
}

exports.passwordResetValidator = (req, res, next) => {
    // check for password
    req.check("newPassword", "Password is required").notEmpty();
    req.check("newPassword")
        .isLength({ min: 4 })
        .withMessage("Password must be at least 6 chars long")
        .matches(/\d/)
        .withMessage("must contain a number")
        .withMessage("Password must contain a number");
 
    // check for errors
    const errors = req.validationErrors();
    // if error show the first one as they happen
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    // proceed to next middleware or ...
    next();
};