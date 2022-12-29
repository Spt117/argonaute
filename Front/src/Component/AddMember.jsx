import { useState } from "react";
import axios from "axios";

export default function AddMember() {
    const [equipier, setEquipier] = useState("");

    function newEquipier() {
        console.log(equipier);
        axios
            .post(`https://argonautes-back.vercel.app/api/equipiers`, {
                name: equipier,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
            });
    }

    return (
        <div>
            <h2>Ajouter un(e) Argonaute</h2>
            {/* <form className="new-member-form"> */}
            <label htmlFor="name">Nom de l'Argonaute</label>
            <input
                id="name"
                name="name"
                type="text"
                placeholder="Charalampos"
                onChange={(e) => setEquipier(e.target.value)}
            />
            <button type="submit" onClick={newEquipier}>
                Envoyer
            </button>
            {/* </form> */}
        </div>
    );
}
