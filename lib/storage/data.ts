// 服务器提供功能

// 查询用户
import {sql} from "@vercel/postgres";
import {User} from "@/lib/storage/definitions";

export async function fetchUsers() {
  try {
    const data = await sql<User>`
        SELECT id,
               name,
               password,
               permission
        FROM users
        ORDER BY name ASC
    `;

    const users = data.rows;
    console.log(users)
    return users;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}