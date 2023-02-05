import { Equipier } from "./interfaces.js"

const route: string = "/api/equipiers"

export async function getEquipiers(): Promise<Equipier[]> {
    const data = await fetch(route)
    const equipiers = await data.json()
    return equipiers
}

export async function setEquipier(equipier: Equipier): Promise<void> {
    const newEquipier = await fetch(route, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(equipier),
    })
    const res = await newEquipier.json()
    console.log(res)
}

export async function deleteEquipier(id: number | undefined): Promise<void> {
    const deletedEquipier = await fetch(`/api/${id}`, {
        method: "DELETE",
        body: JSON.stringify(id),
    })
    const res = await deletedEquipier.json()
    console.log(res)
}

export async function updateEquipier(equipier: Equipier): Promise<void> {
    const updatedEquipier = await fetch(`/api/${equipier._id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(equipier),
    })
    const res = await updatedEquipier.json()
    console.log(res)
}

export function setInputByIDtoEmpty(id: string): void {
    const input = document.getElementById(id) as HTMLInputElement
    input.value = ""
}
