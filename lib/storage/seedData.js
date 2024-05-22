// 初始种子数据
const { db } = require('@vercel/postgres');
const {users} = require("./place-holder");
const bcrypt = require('bcryptjs');


async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        password Text NOT NULL UNIQUE,
        permission bool NOT NULL
      );
    `;

    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        // 密码加密存储
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, password, permission)
        VALUES (${user.id},${user.name}, ${hashedPassword}, ${user.permission})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );
    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function main() {
  console.log('seed data')
  const client = await db.connect();

  await seedUsers(client);

  await client.end()
}

// 构建种子数据
main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});