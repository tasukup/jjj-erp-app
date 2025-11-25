import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("client_users", (table) => {
    table.increments("id").primary();
    table
      .integer("client_id")
      .unsigned()
      .references("id")
      .inTable("clients")
      .onDelete("CASCADE");
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("password_hash").notNullable();
    table.string("role").notNullable(); // admin, manager, general など
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("client_users");
}


