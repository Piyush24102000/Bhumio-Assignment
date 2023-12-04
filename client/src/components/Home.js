import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="text-center">
                <img src="./Bhumio.jpg" alt="Company Logo" className="mx-auto mb-4" style={{ maxWidth: '150px' }} />
                <h1 className="text-3xl font-semibold mb-4">Bhumio</h1>
                <div className="space-x-4 mt-9">
                    <Link to="/Assignee" className="bg-blue-500 text-white px-4 py-2 rounded-full">
                        Get Assignees
                    </Link>
                    <Link to="/Issues" className="bg-green-500 text-white px-4 py-2 rounded-full">
                        Get Issues
                    </Link>
                </div>

                {/* Additional Text with Space */}
                <p className="mt-16 text-gray-900 text-2xl">Assignment of Piyush Tale </p>
                <p className=" text-gray-900 text-2xl"> Email -: Piyush20001024@gmail.com </p>
                <p className=" text-gray-900 text-2xl"> Github -: https://github.com/Piyush24102000/Bhumio-Assignment </p>

            </div>
        </div>
    );
};

export default Home;
