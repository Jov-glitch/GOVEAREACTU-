import axios from "axios";

export const getPacks = async () =>
    await axios.get("http://localhost:4000/packs");
