import { getEquipiers, setEquipier, setInputByIDtoEmpty } from "@/library/equipiers"
import { Equipier } from "@/library/interfaces"
import { useEffect, useState } from "react"
import DeleteMember from "./DeleteMember"
import GetMember from "./GetMember"
import UpdateMember from "./UpdateMember"

export default function SetMember() {
    const [newEquipier, setNewEquipier] = useState<string>("")
    const [equipiers, setEquipiers] = useState<Equipier[]>([])

    async function addEquipierToState(): Promise<void> {
        try {
            const data = await getEquipiers()
            setEquipiers(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        addEquipierToState()
    }, [])

    async function addEquipier(): Promise<void> {
        try {
            await setEquipier({ name: newEquipier })
        } catch (error) {
            console.log(error)
        } finally {
            addEquipierToState()
            setInputByIDtoEmpty("name")
        }
    }

    return (
        <>
            <div className="new-member-form">
                <h2>Ajouter un(e) Argonaute</h2>
                <label htmlFor="name">Nom de l'Argonaute</label>
                <input id="name" name="name" type="text" placeholder="Charalampos" onChange={(e) => setNewEquipier(e.target.value)} />
                <button onClick={addEquipier}>Envoyer</button>
                <br />
                <br />
                <DeleteMember equipiers={equipiers} addEquipierToState={addEquipierToState} />
                <br />
                <br />
                <UpdateMember equipiers={equipiers} addEquipierToState={addEquipierToState} />
            </div>
            <GetMember equipiers={equipiers} />
        </>
    )
}
