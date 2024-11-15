import React from 'react'
import { Tabs } from "antd";
import { useLocation } from 'react-router-dom';

const BookingServices = ({ tabItems }) => {
    console.log(tabItems, "tabItemswwwwwwww")

    const location = useLocation();

    console.log( location.state, "state")

    return (
        <div>
            <div>
                <Tabs defaultActiveKey="1" items={tabItems} />
            </div>
            <div className="text-lg border border-gray-300 rounded-lg text-center py-2 mt-10">
                <p>See all</p>
            </div>
        </div>
    )
}

export default BookingServices