import Navbar from '@/components/Navbar'
import Post from '@/components/Post'
import { AppTypes } from '@/types'
import React from 'react'
const PostData: AppTypes.Post[] = [
     {
          id: 'post1',
          name: 'Post 1',
          desc: 'This is post 1',
          status: 'public',
          startTime: '10:00',
          startDate: '2022-09-09',
          endTime: '12:00',
          endDate: '2022-09-09',
          point: 10,
          location: 'online',
          numberParticipant: 10,
          faculty: 'Faculty 1',
          category: 'academic',
          stdJoin: ['student 1', 'student 2'],
          testId: 'test1'
     },
     {
          id: 'post2',
          name: 'Post 2',
          desc: 'This is post 2',
          status: 'private',
          startTime: '10:00',
          startDate: '2022-09-09',
          endTime: '12:00',
          endDate: '2022-09-09',
          point: 20,
          location: 'HCM',
          numberParticipant: 10,
          faculty: 'Faculty 2',
          category: 'volunteer',
          stdJoin: ['student 1', 'student 2'],
          testId: 'test2'
     },
     {
          id: 'post3',
          name: 'Post 3',
          desc: 'This is post 3',
          status: 'public',
          startTime: '10:00',
          startDate: '2022-09-09',
          endTime: '12:00',
          endDate: '2022-09-09',
          point: 7,
          location: 'HCM',
          numberParticipant: 10,
          faculty: 'Faculty 3',
          category: 'mentalPhysical',
          stdJoin: ['student 1', 'student 2'],
          testId: 'test3'
     }
]
const Homepage = () => {
     return (
          <div>
               <Post post={PostData} />
          </div>
     )
}

export default Homepage