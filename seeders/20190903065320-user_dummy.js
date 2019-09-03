'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: 'manca',
        first_name: 'Manca',
        last_name: 'fi',
        email: 'manca.fi@gmail.com',
        password: '',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'jonnii',
        first_name: 'John',
        last_name: 'Hii',
        email: 'mr.john@gmail.com',
        password: '',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'bambang',
        first_name: 'Bambang',
        last_name: 'choy',
        email: 'choy.bambang@gmail.com',
        password: '',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'anonomouse',
        first_name: 'A',
        last_name: 'Nonim',
        email: 'mr.x@gmail.com',
        password: '',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
