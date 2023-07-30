import { Header } from "./header";
import { Footer } from "./footer";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export const Main = () => {
    const navigate = useNavigate()
    const [arr, setArr] = useState([
        {
            id: 1,
            count: 1,
            text: "Ola",
            date: ""
        }
    ])

    const handleDelete = () => {
        console.log(arr,"123","456","6565465465465")
        //sdfsd
    }

    return (
        <div>
            <Header
                onAdd={(text, cal_date, id) => {
                    let found = false;
                    arr.forEach(item => {
                        if (item.date === cal_date) {
                            item.count += 1;
                            found = true;
                            
                        }
                    });
                    if (!found) {
                        setArr([
                            ...arr,
                            {
                                id,
                                count: 1,
                                text,
                                date: cal_date
                            }
                        ]);
                    }
                }}
            />
            <div>
                {arr.map((item) => (
                    <p onClick={() => { navigate("item") }} key={item.id}>{item.text} - {item.date} {item.count}</p>

                ))}
            </div>
            <Footer handleDelete={handleDelete} />
        </div>
    )
}