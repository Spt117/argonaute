import { ArrayEquipiers, Equipier } from "@/library/interfaces";

export default function GetMember({
    equipiers,
}: {
    equipiers: ArrayEquipiers;
}): JSX.Element {
    return (
        <>
            <h2>Membres de l'équipage</h2>
            <section className="member-list">
                {equipiers.map((equipier: Equipier) => (
                    <div key={equipier._id} className="member-item">
                        {equipier.name}
                    </div>
                ))}
            </section>
        </>
    );
}
