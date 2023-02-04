import useGetEquipiers from "@/hooks/useGetEquipiers";
import { setEquipier } from "@/library/equipiers";
import { Equipier } from "@/library/interfaces";
import { useState } from "react";
import GetMember from "./GetMember";

export default function SetMember() {
    const [newEquipier, setNewEquipier] = useState<string>("");
    const [equipiers, setEquipiers] = useState<Equipier[]>([]);
    // const equipiers = useGetEquipiers() as Equipier[];

    async function addEquipier() {
        try {
            await setEquipier({ name: newEquipier });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="new-member-form">
                <h2>Ajouter un(e) Argonaute</h2>
                <label htmlFor="name">Nom de l'Argonaute</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Charalampos"
                    onChange={(e) => setNewEquipier(e.target.value)}
                />
                <button onClick={addEquipier}>Envoyer</button>
            </div>
            <GetMember equipiers={equipiers} />
        </>
    );
}
