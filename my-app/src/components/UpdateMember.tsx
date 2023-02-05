import { ArrayEquipiers, UpdateEquipier } from "@/library/interfaces"
import { useState } from "react"

export default function UpdateMember({ equipiers }: { equipiers: ArrayEquipiers}): JSX.Element {
    const [update, setUpdate] = useState<UpdateEquipier>({
        oldName: "",
        newName: "",
    })

    async function updateEquipierByName(): Promise<void> {
        try {
            const member = equipiers.find((equipier) => equipier.name === update.oldName)
        }
    }

    return (
<>

            <input type="text" placeholder="Ancien nom" onChange={(e) => setUpdate({ ...update, oldName: e.target.value })} id="old" />
            <input type="text" placeholder="Nouveau nom" onChange={(e) => setUpdate({ ...update, newName: e.target.value })} id="new" />
            <button onClick={updateEquipierByName}>Modifier</button>
</>
    )
}
