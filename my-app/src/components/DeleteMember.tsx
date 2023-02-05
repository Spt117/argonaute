import { deleteEquipier, setInputByIDtoEmpty } from "@/library/equipiers"
import { ArrayEquipiers } from "@/library/interfaces"
import { useState } from "react"

export default function DeleteMember({ equipiers, addEquipierToState }: { equipiers: ArrayEquipiers; addEquipierToState: Function }): JSX.Element {
    const [memberName, setMemberName] = useState<string>("")

    async function deleteEquipierByName(): Promise<void> {
        try {
            // let length = equipiers.length
            // for (let i = 3; i < length; i++) {
            //     deleteEquipier(equipiers[i]._id)
            // }
            const member = equipiers.find((equipier) => equipier.name === memberName)
            await deleteEquipier(member?._id)

            await addEquipierToState()
            setInputByIDtoEmpty("delete")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <input type="text" placeholder="Nom" onChange={(e) => setMemberName(e.target.value)} id="delete" />
            <button onClick={deleteEquipierByName}>Supprimer</button>
        </>
    )
}
