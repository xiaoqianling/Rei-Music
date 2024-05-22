import React from 'react';
import {User} from "@/lib/storage/definitions";
import {fetchUsers} from "@/lib/storage/data";

async function Page() {
  const users : User[] = await fetchUsers();
  return (
    <div>
      {users.map(u => u.name)}
    </div>
  );
}

export default Page;