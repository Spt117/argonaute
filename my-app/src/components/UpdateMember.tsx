import { setInputByIDtoEmpty, updateEquipier } from "@/library/equipiers"
import { ArrayEquipiers, UpdateEquipier } from "@/library/interfaces"
import { useState } from "react"

export default function UpdateMember({ equipiers, addEquipierToState }: { equipiers: ArrayEquipiers; addEquipierToState: Function }): JSX.Element {
    const [update, setUpdate] = useState<UpdateEquipier>({
        oldName: "",
        newName: "",
    })

    async function updateEquipierByName(): Promise<void> {
        try {
            const member = equipiers.find((equipier) => equipier.name === update.oldName)
            await updateEquipier({ name: update.newName, _id: member?._id })
            await addEquipierToState()
            setInputByIDtoEmpty("old")
            setInputByIDtoEmpty("new")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div>
                <input type="text" placeholder="Ancien nom" onChange={(e) => setUpdate({ ...update, oldName: e.target.value })} id="old" />
                <br />
                <input type="text" placeholder="Nouveau nom" onChange={(e) => setUpdate({ ...update, newName: e.target.value })} id="new" />
            </div>
            <button onClick={updateEquipierByName}>Modifier</button>
        </>
    )
}
