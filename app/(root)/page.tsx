import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Siva'};
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox type="greeting" title="Welcome" user={loggedIn?.firstName || 'title'} subtext="Access and manage you account and transaction efficiently"  />
            </header>
        </div>
    </section>
  )
}

export default Home