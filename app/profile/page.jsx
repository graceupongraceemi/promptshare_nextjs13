'use client'

import { useState, useEffect } from 'react';
import { useSession } from 'next-aut/react'
import { useRouter } from 'next/navigation'

import Profile from '@components/profile'

const Profile = () => {
  return (
    <Profile 
      name='My'
      desc='Welcome to your personalized profile page'
      data={[]}
      handleEdit={}
      handleDelete={}
    />
  )
};

export default Profile;
