module.exports = {
  HOST: "aws-0-ap-southeast-1.pooler.supabase.com",
  USER: "postgres.jbtmorzfwnvwxolxdulk",
  PASSWORD: "QuocVinh@0905",
  PORT: 6543,
  DB: "postgres",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
