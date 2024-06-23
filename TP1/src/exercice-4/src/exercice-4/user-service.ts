import type { Prisma, PrismaClient, User } from "@prisma/client";

type FormattedUser = User & {
  /**
   * Format dyanmique `Prénom NOM`
   * @example "Maud ZARELLA"
   */
  name: string;
};

export class UserService {
  constructor(private readonly db: PrismaClient) {}

  /**
   * Récupère plusieurs utilisateurs en base suivant les paramètres fournis
   * @param args 
   * @returns 
   */
  async list(args?: {
    perPage?: number;
    page?: number;
    search?: string;
    order?: "asc" | "desc";
    orderBy?: keyof Prisma.UserOrderByWithRelationInput;
  }) {
    // Pagination
    const perPage = args?.perPage ?? 10;
    const page = (args?.page ?? 1) - 1;

    // Ordonnage des résultats
    const orderBy: Prisma.UserOrderByWithRelationInput = {};
    if (args?.orderBy) orderBy[args?.orderBy] = args?.order ?? "asc";

    return this.db.user
      .findMany({
        // Pagination
        take: perPage,
        skip: perPage * page,
        // Ordonnage
        orderBy,
        // Recherche par nom
        where:
          args?.search === undefined
            ? undefined
            : {
                OR: [
                  { firstName: { contains: args?.search } },
                  { lastName: { contains: args?.search } },
                ],
              },
      })
      // Ajout de la propriété "name"
      .then((records) => records.map(this.format));
  }

  private format(record: User): FormattedUser {
    return {
      ...record,
      name: `${record.firstName} ${record.lastName.toUpperCase()}`,
    };
  }
}
