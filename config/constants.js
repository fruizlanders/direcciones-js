var dotenv = require('dotenv');

module.exports = () => {
  dotenv.config();
  if(process.env.ENV == 'local'){
    return {
      base_url: 'http://localhost:3000/',
      static_url: 'http://localhost:3000/',
      socket_url: 'ws://localhost:3000/',
      static: 'dev',
      session: true,
      csrf: {
        secret: 'mpt/sr6eS2AlCRHU7DVThMgFTN08pnfSDf/C94eZx7udfm0lvgaYWLYJttYPKzGKDTlXwVU/d2FOxbKkgNlsTw==',
        key: 'csrf_val'
      },
      enterprise_data: {
        facebook: process.env.FACEBOOK,
        instagram: process.env.INSTAGRAM,
        whatsapp: process.env.WHASTAPP,
        phone: process.env.PHONE,
        email_site: process.env.EMAIL_SITE,
        enterprise_name: process.env.ENTERPRISE_NAME,
      }
    };
  }else if(process.env.ENV == 'heroku'){
    return {
      base_url: 'http://heroke.com',
      static_url: 'http://heroke.com',
      socket_url: 'ws://heroke.com',
      static: 'dev',
      session: true,
      csrf: {
        secret: 'mpt/sr6eS2AlCRHU7DVThMgFTN08pnfSDf/C94eZx7udfm0lvgaYWLYJttYPKzGKDTlXwVU/d2FOxbKkgNlsTw==',
        key: 'csrf_val'
      },
      enterprise_data: {
        facebook: process.env.FACEBOOK,
        instagram: process.env.INSTAGRAM,
        whatsapp: process.env.WHASTAPP,
        phone: process.env.PHONE,
        email_site: process.env.EMAIL_SITE,
        enterprise_name: process.env.ENTERPRISE_NAME,
      }
    };
  }else{

  }
}
