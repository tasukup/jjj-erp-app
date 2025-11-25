import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("clients", (table) => {
    table.increments("id").primary();
    table
      .integer("firm_id")
      .unsigned()
      .references("id")
      .inTable("firms")
      .onDelete("CASCADE");
    table.string("name").notNullable();
    table.string("industry");
    table.date("fiscal_year_start");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("clients");
}
