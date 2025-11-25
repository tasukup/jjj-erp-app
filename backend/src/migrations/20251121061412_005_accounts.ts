import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("accounts", (table) => {
    table.increments("id").primary();
    table
      .integer("client_id")
      .unsigned()
      .references("id")
      .inTable("clients")
      .onDelete("CASCADE");
    table.string("code").notNullable();  // e.g. 1000
    table.string("name").notNullable();  // e.g. 現金
    table.string("category").notNullable(); // 資産 / 負債 / 費用 など
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("accounts");
}

