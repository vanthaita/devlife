import React from 'react';

const NavbarAside = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <section className='flex'>
      <aside className='w-20 h-screen border-r-2 border-black flex items-start justify-center bg-transparent fixed'>
        <div className='-rotate-90 mt-20'>
          <h1 className='font-bold text-4xl'>.Devlife</h1>
        </div>
      </aside>
      <main className='flex-1 ml-20'> 
        {children}
      </main>
    </section>
  );
};

export default NavbarAside;