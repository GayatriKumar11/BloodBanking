exports.userSignUpValidator = (req, res, next) => {
    //name is not null and between 4 to 10
    req.check('name', "Name is required")
    .notEmpty()
    .isLength({
        min: 2, max: 200
    })
    .withMessage("Name must contain at least 2 characters")
    //email is not null, valid and normalized with regular expression
    req.check('email', "Email is required").notEmpty();
    req.check('email', 'Email must be between 3 to 32 characters')
    .matches(/.+@.+\..+/)
    .withMessage('Email must contain @')
    .isLength({
        min: 4, max: 2000
    })
    //check for password
    req.check('password', "Password is required").notEmpty();
    req.check('password')
    .isLength({min:8})
    .withMessage("Password must contain at least 8 characters")
    .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/)
    .withMessage('Password must contain a number and a special character')
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
    //email is not null, valid and normalized with regular expression
    req.check('hospitalEmail', "Email is required").notEmpty();
    req.check('hospitalEmail', 'Hospital Email must be between 3 to 32 characters')
    .matches(/.+@.+\..+/)
    .withMessage('Email must contain @')
    .isLength({
        min: 4, max: 2000
    })
    //address
    req.check('address', "Address is required")
    .notEmpty()
    .isLength({
        min: 2, max: 200
    })
    .withMessage("Name must contain at least 2 characters")
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
    .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/)
    .withMessage('Password must contain a number and a special character')
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
    req.check('adminEmail', "Email is required").notEmpty();
    req.check('adminEmail', 'Email must be between 3 to 32 characters')
    .matches(/.+@.+\..+/)
    .withMessage('Email must contain @')
    .isLength({
        min: 4, max: 2000
    })
    //check for password
    req.check('password', "Password is required").notEmpty();
    req.check('password')
    .isLength({min:8})
    .withMessage("Password must contain at least 8 characters")
    .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/)
    .withMessage('Password must contain a number and a special character')
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

exports.userSignInValidator = (req, res, next) => {
    //email is not null, valid and normalized with regular expression
    req.check('email', "Email is required").notEmpty();
    req.check('email', 'Email must be between 3 to 32 characters')
    .matches(/.+@.+\..+/)
    .withMessage('Email must contain @')
    .isLength({
        min: 4, max: 2000
    })
    //check for password
    req.check('password', "Password is required").notEmpty();
    req.check('password')
    .isLength({min:8})
    .withMessage("Password must contain at least 8 characters")
    .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/)
    .withMessage('Password must contain a number and a special character')
    //check for errors:
    const errors = req.validationErrors()
    //map throught the errors:
    if(errors){
        const firstError = errors.map((error) => error.msg)[0]
        return res.status(400).json({error: firstError})
        }
    next();
}

exports.hospitalSignInValidator = (req, res, next) => {
    //email is not null, valid and normalized with regular expression
    req.check('hospitalEmail', "Email is required").notEmpty();
    req.check('hospitalEmail', 'Email must be between 3 to 32 characters')
    .matches(/.+@.+\..+/)
    .withMessage('Email must contain @')
    .isLength({
        min: 4, max: 2000
    })
    //check for password
    req.check('password', "Password is required").notEmpty();
    req.check('password')
    .isLength({min:8})
    .withMessage("Password must contain at least 8 characters")
    .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/)
    .withMessage('Password must contain a number and a special character')
    //check for errors:
    const errors = req.validationErrors()
    //map throught the errors:
    if(errors){
        const firstError = errors.map((error) => error.msg)[0]
        return res.status(400).json({error: firstError})
        }
    next();
}

exports.adminSignInValidator = (req, res, next) => {
    //email is not null, valid and normalized with regular expression
    req.check('adminEmail', "Email is required").notEmpty();
    req.check('adminEmail', 'Email must be between 3 to 32 characters')
    .matches(/.+@.+\..+/)
    .withMessage('Email must contain @')
    .isLength({
        min: 4, max: 2000
    })
    //check for password
    req.check('password', "Password is required").notEmpty();
    req.check('password')
    .isLength({min:8})
    .withMessage("Password must contain at least 8 characters")
    .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/)
    .withMessage('Password must contain a number and a special character')
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
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 chars long")
        .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/)
        .withMessage("must contain a number")
        .withMessage("Password must contain a number and a special character");
 
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