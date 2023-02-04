import { Equipier } from "./interfaces.js";

const route: string = "/api/equipiers";

export async function getEquipiers() {
    const data = await fetch(route);
    const equipiers = await data.json();
    return equipiers;
}

export async function setEquipier(equipier: Equipier) {
    const newEquipier = await fetch(route, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(equipier),
    });
    const res = await newEquipier.json();
    console.log(res);
}
