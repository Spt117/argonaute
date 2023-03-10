export interface Equipier {
    name: string
    _id?: number
}

export type ArrayEquipiers = Equipier[]

export interface UpdateEquipier {
    oldName: string
    newName: string
}

export interface userSchema extends Document {
    email: string
    password: string
}
