import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <div className='hidden md:block h-[100vh] w-[300px] sticky top-0'>
          <Sidebar />
        </div>
        <div className='p-5 w-full md:max-w-[1500px]'>{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
