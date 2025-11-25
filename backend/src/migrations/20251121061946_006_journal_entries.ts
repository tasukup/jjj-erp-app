import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("journal_entries", (table) => {
    table.increments("id").primary();
    table
      .integer("client_id")
      .unsigned()
      .references("id")
      .inTable("clients")
      .onDelete("CASCADE");
    table.date("date").notNullable();
    table.string("description");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("journal_entries");
}
