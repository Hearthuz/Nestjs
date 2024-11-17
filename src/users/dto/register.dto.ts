import { Role } from 'src/enums/role.enum'

export interface RegisterDTO {
  email: string
  password: string
  firstName: string
  lastName: string
  tel: string
  role: Role
}
