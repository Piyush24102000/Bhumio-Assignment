import React, { useEffect, useState } from 'react'

const Assignee = () => {
    const [totalCount, setCount] = useState();
    const [data, setObj] = useState({})

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('https://bhumioserver.vercel.app/getAssignee');
                const dataAssignee = await response.json();
                setCount(dataAssignee.message.totalCount);
                setObj(dataAssignee.message.countMap)
            } catch (error) {
                console.log(error.message);
            }
        }
        getData()
    }, [])

    // data['totalCount'] = totalCount
    const dataArray = Object.entries(data);

    return (
        <div className='bg-gray-100 p-8 mt-52'>
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md flex">

                {/* Assignee Section */}
                <div className="w-1/3">
                    <h2 className="text-2xl font-semibold mb-2">Assignee</h2>
                    {dataArray.map(([assignee, count]) => (
                        <p className="text-gray-600" key={assignee}>{assignee}</p>
                    ))}
                </div>

                {/* Count Section */}
                <div className="w-1/3">
                    <h2 className="text-2xl font-semibold mb-2">Count</h2>
                    {dataArray.map(([assignee, count]) => (
                        <p className="text-blue-500 font-semibold" key={assignee}>{count}</p>
                    ))}
                </div>

                {/* Percentage Section */}
                <div className="w-1/3">
                    <h2 className="text-2xl font-semibold mb-2">Percentage</h2>
                    {dataArray.map(([assignee, count]) => (
                        <p className="text-green-500 font-semibold" key={assignee}>{((count / totalCount) * 100).toFixed(2)}%</p>
                    ))}
                </div>
            </div>

            <h1 className='mx-auto mt-4 text-center'>Total: {totalCount}</h1>
        </div >
    )
}

export default Assignee
