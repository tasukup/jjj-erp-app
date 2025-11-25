import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("journal_details", (table) => {
    table.increments("id").primary();
    table
      .integer("entry_id")
      .unsigned()
      .references("id")
      .inTable("journal_entries")
      .onDelete("CASCADE");
    table
      .integer("account_id")
      .unsigned()
      .references("id")
      .inTable("accounts");
    table.decimal("debit", 14, 2).defaultTo(0);
    table.decimal("credit", 14, 2).defaultTo(0);
    table.decimal("amount", 14, 2).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("journal_details");
}
