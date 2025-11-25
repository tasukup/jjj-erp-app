import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("firms", (table) => {
    table.increments("id").primary();
    table
      .integer("platform_user_id")
      .unsigned()
      .references("id")
      .inTable("platform_users")
      .onDelete("CASCADE");
    table.string("name").notNullable();
    table.string("address");
    table.string("phone");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("firms");
}

