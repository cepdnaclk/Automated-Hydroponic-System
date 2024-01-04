import React, { useEffect, useState } from "react";
import "./pageFive.css";
import Navbar from "../../components/Navbar/Navbar";
import Prototype from "../../Images/prototype.jpg";
import axios from "axios";

function PageFive(){

    const [plants, setPlants] = useState([]);

    useEffect(() => {
        loadPlants();
    },[]);

    const loadPlants = async () => {
        const result = await axios.get("http://localhost:8080/pastStaff/all");
        setPlants(result.data);
    }
*/
    return(
        <>
        <Navbar/>
        <div className="pagefive-container row">
            <div className="page-five-content row">
                <div className="page-five-content-left col">
                    <h2 style={{textAlign: "center" , padding: "20px"}}>System Price</h2>
                    <div className="left-content">
                        <img src={Prototype} id="page-five-prototype-image"/>
                    </div>
                    <div className="price-button-container">
                        <button id="price-button">Rs 40,000.00</button>
                    </div>
                </div>
                <div className="page-five-content-right col">
                    <h2 style={{textAlign: "center" , padding: "20px"}}>Available Plants</h2>
                    {/**
                     * <div className="py-4">
                            <table className="table border shadow">
                            <thead>
                                <tr>
                                <th scope="col">No</th>
                                <th scope="col">Plant Name</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {plants.map((plant, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{plant.name}</td>
                                    </td>
                                </tr>
                                ))
                                }
                            </tbody>
                            </table>
                      </div>
                    */}
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Plant Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Strawberries</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Cucumbers</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td >Tomatoes</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td >Beans</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td >Broccoli</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td >Cauliflower</td>
                            </tr>            
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
        </>
    )

}

export default PageFive;