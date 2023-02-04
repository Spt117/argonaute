import { getEquipiers } from "@/library/equipiers";
import { ArrayEquipiers, Equipier } from "@/library/interfaces";
import { useEffect, useMemo, useState } from "react";

export default function useGetEquipiers() {
    const [stateEquipiers, setStateEquipiers] = useState<ArrayEquipiers>(
        [] as Equipier[]
    );

    async function getTheEquipiers() {
        try {
            let data = await getEquipiers();
            setStateEquipiers(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTheEquipiers();
    }, []);

    const equipiers = useMemo(() => stateEquipiers, [stateEquipiers]);

    return equipiers;
}
