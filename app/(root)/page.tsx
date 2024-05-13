import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Siva', lastName:"Padmanaban", email:"sivass2703@gmail.com"};
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox type="greeting" title="Welcome" user={loggedIn?.firstName || 'title'} subtext="Access and manage you account and transaction efficiently"  />
            </header>
            RECENT TRANSACTIONS
        </div>
        <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance:"124.50"},{currentBalance:"200.00"}]} />
    </section>
  )
}

export default Home