import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HomeDetails from "../components/HomeDetails";
import Map from "../components/Map";
export default function Home() {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [home, setHome] = useState([]);
    const [work, setWork] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/auth");
        } else {
            axios.get("http://localhost:8000/getDetails", {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            })
            .then((res) => {
                if (res.status !== 200) {
                    localStorage.removeItem("token");
                    navigate("/auth");
                } else {
                    setEmail(res.data.email);
                    setUserName(res.data.userName);
                    setHome(res.data.home);
                    setFavorites(res.data.favorites);
                    setWork(res.data.work);
                }
            })
            .catch((err) => {
                console.error(err);
                localStorage.removeItem("token");
                navigate("/auth");
            });
        }
    }, [navigate]);
     
   return(
    <section className="home">
        <HomeDetails />
        <Map />
    </section>
   )
}
