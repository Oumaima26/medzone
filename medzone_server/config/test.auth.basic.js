module.exports = {
  env: 'test',
  dbServer: 'http://oumaima:oumaima@localhost',
  db: 'testdb_dicomweb',
  dbPort: process.env.PORT || 5984,
  auth: 'basic',
  logger: false,
};
