import { PrismaClient, type Prisma } from "@prisma/client";
import { test, expect, beforeAll, afterAll, describe, vi } from "vitest";
import { UserService } from "./user-service";

/**
 * Données de test fixes pour contrôler l'output des tests
 */
const TEST_USERS = [
  {
    email: "lin.guini@barilla.it",
    lastName: "Guini",
    firstName: "Lin",
  },
  {
    email: "maud.zarella@email.org",
    lastName: "Zarella",
    firstName: "Maud",
  },
  {
    email: "paul.hicier@nypd.net",
    lastName: "Hicier",
    firstName: "Paul",
  },
] satisfies Prisma.UserCreateInput[];

// Initialise un client prisma en overridant la localisation de la DB SQLite
const prisma = new PrismaClient({
  datasourceUrl: "file:./test.db",
});
// Initialise une instance de UserService
const instanceUser : UserService = {
  db: undefined,
  list: function (args?: { perPage?: number | undefined; page?: number | undefined; search?: string | undefined; order?: "asc" | "desc" | undefined; orderBy?: keyof Prisma.UserOrderByWithRelationInput | undefined; } | undefined): Promise<({ id: number; email: string; name: string | null; } & { name: string; })[]> {
    throw new Error("Function not implemented.");
  },
  format: function (record: { id: number; email: string; name: string | null; }): { id: number; email: string; name: string | null; } & { name: string; } {
    throw new Error("Function not implemented.");
  }
}