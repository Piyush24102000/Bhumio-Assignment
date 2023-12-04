import React, { useEffect, useState } from 'react';

const Issues = () => {
  let [issues, setIssues] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('http://localhost:5000/getIssues');
        const dataIssues = await response.json();
        setIssues(dataIssues.message)
      } catch (error) {
        console.log(error.message);
      }
    }
    getData()
  }, [])

  console.log(issues)

  return (
    <div className="flex items-center justify-center h-screen">
      <table className="table-auto border border-gray-300 shadow-md">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Issue Summary</th>
            <th className="px-4 py-2">Key</th>
          </tr>
        </thead>
        <tbody>
          {
            issues.map((item) => (
              <tr>
                <td className="border px-4 py-2">{item.summary}</td>
                <td className="border px-4 py-2">{item.key}</td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  );
};

export default Issues;
