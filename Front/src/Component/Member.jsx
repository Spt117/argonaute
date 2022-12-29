import { useEffect, useState } from "react";

import axios from "axios";

export default function Member() {
    const [equipier, setEquipier] = useState("");
    const [list, setList] = useState([]);
    const api = "https://argonautes-back.vercel.app/api/equipiers";

    useEffect(() => {
        getListMember();
        // eslint-disable-next-line
    }, []);

    // récupérer les équipiers
    async function getListMember() {
        let data = await axios.get(api);
        setList(data.data);
    }

    // ajouter un équipier
    async function newEquipier() {
        await axios.post(api, {
            name: equipier,
        });
        document.querySelector("#name").value = "";
        getListMember();
    }

    return (
        <div>
            <main>
                <div className="new-member-form">
                    <h2>Ajouter un(e) Argonaute</h2>
                    <label htmlFor="name">Nom de l'Argonaute</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Charalampos"
                        onChange={(e) => setEquipier(e.target.value)}
                    />
                    <button onClick={newEquipier}>Envoyer</button>
                </div>
                <h2>Membres de l'équipage</h2>
                <section className="member-list">
                    {list.map((equipier) => (
                        <div key={equipier._id} className="member-item">
                            {equipier.name}
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}
