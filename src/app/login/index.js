
const { LOGIN } =require("./controllers/login-controllers")
const { loginSchema }= require("./schemas/login-schema")

module.exports = async app => {
    app.route({
        method: 'POST',
        url: '/login',
        schema: loginSchema,
        handler:LOGIN
    })
}