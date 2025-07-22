// MainLayout.jsx
import LeftPart from './LeftPart';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';


const MainLayout = () => {
    

    const isAuthenticated = useSelector((state) => state.user.user);
    
    
    console.log("isAuthenticated", isAuthenticated);
    const [authstatus, setAuthStatus] = useState(isAuthenticated); // Simulating auth status
    
    const navigate = useNavigate();
    useEffect(() => {
        if (!authstatus) {  
            navigate('/auth'); // Redirect to auth page if not authenticated
        }   
    }, [authstatus, navigate, isAuthenticated]);

return (
    <div className="min-h-screen w-screen bg-[#f0f2f5] text-gray-900 flex px-4 py-6 gap-4">
      
      {/* Left Content */}
      <aside className="w-[260px] bg-white p-4 rounded-2xl shadow-md">
        <h1 className="text-xl font-semibold mb-4">Twitter</h1>
        <LeftPart />
      </aside>

      {/* Middle Content — full flex without max-width */}
      <main className="flex-1 bg-white p-6 rounded-2xl shadow-md min-h-[80vh]">
        
        <Outlet /> {/* This will render the nested routes */}
      </main>

      {/* Right Content */}
      <aside className="w-[320px] bg-white p-4 rounded-2xl shadow-md">
        <h1 className="text-xl font-semibold">Right Content</h1>
      </aside>

    </div>
  );
}
export default MainLayout;
