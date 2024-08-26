const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function getUserWithId(id) {
    const { rows } = await pool.query('SELECT * FROM usernames WHERE id = ($1)', [id]);
    return rows;
}

async function getUserWithName(name) {
  const { rows } = await pool.query('SELECT * FROM usernames WHERE username LIKE ($1)', [name]);
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function updateUser(id, value) {
    await pool.query('UPDATE usernames SET username = ($2) WHERE id = ($1)', [id, value]);
}

async function deleteUser(id) {
    await pool.query('DELETE FROM usernames WHERE id = ($1)', [id]);
}

async function deleteAllUser() {
  await pool.query('DELETE FROM usernames');
}

async function sendSql(sql) {
    const client = new Client({
        connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
    })
    await client.connect();
    await client.query(sql);
    await client.end();
}

module.exports = {
  getAllUsernames,
  getUserWithId,
  getUserWithName,
  insertUsername,
  deleteUser,
  deleteAllUser,
  updateUser,
  sendSql,
};
