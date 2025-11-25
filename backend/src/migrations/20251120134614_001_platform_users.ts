import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("platform_users", (table) => {
    table.increments("id").primary();
    table.string("username").notNullable();
    table.string("email").notNullable().unique();
    table.string("password_hash").notNullable();
    table.string("role").notNullable(); // admin / staff など
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("platform_users");
}


