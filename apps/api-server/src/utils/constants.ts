// constants.ts
export enum UserRolesEnum {
  USER = "user",
  ADMIN = "admin",
}

export const AvailableUserRoles: UserRolesEnum[] = Object.values(UserRolesEnum);
