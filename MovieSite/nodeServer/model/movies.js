module.exports = {
  async executeQuery(res, query) {
    try {
      let connection = await sql.connect(dbConfig);
      let request = new sql.Request();
      let result = await request.query(query);
      res.json(result);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
};
