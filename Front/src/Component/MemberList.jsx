import { useEffect, useState } from "react";

import axios from "axios";

export default function MemberList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        getListMember();
    }, []);

    async function getListMember() {
        let data = await axios.get(
            `https://argonautes-back.vercel.app/api/equipiers`
        );
        setList(data.data);
    }

    return (
        <div>
            <h2>Membres de l'équipage</h2>
            <section className="member-list">
                {list.map((equipier) => (
                    <div key={equipier._id} className="member-item">
                        {equipier.name}
                    </div>
                ))}
            </section>
        </div>
    );
}
