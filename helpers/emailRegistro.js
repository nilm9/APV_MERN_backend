import nodemailer from "nodemailer";

const emailRegistro = async (datos) => {
  var transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const { email, nombre, token } = datos;

  //enviar el email

  const info = await transporter.sendMail({
    from: "APV - Administrador de pacientes de veterianria",
    to: email,
    subject: "Comprueba tu cunta en APV",
    text: "Comprueba tu cunta en APV",
    html: `<p>Hola: ${nombre} , comprueba tu cuenta en APV. </p>
        <p>Tu cuenta ya esta lista, solo debes comprobarla en el siguente enlace: 
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
        </p>
        <p>Si no creaste esta cuenta, puedes ignorar este mensaje</p>       
        
        `,
  });
  console.log("Mensaje enviado: %s", info.messageId);
};

export default emailRegistro;
