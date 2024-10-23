export namespace AppTypes{
     export type Role = "student" | "assistant" | "faculty";
     export type Categories = "academic" | "volunteer" | "mentalPhysical";
     export type Point = 3 | 7 | 10 | 20;
     export interface Post{
          id: string
          name: string
          desc: string
          status: boolean
          startTime: string
          startDate: string
          endTime: string
          endDate: string
          point: number
          lcation: string
          numberParticipant: number
          faculty: string
          category: string
          stdJoin?: string[]
          testId?: string
     }
     export interface Student{
          id: string
          name: string
          activities?: string[]
          password: string
          facultyName: string
          trainingPoint: number
          role: Role.student
          position: string
     }
     export interface PointCategory{
          studentId: string
          academic: number
          volunteer: number
          mentalPhysical: number  
          discipline: PointDetail[]
     }
     export interface PointDetail{
          name: string
          point: number
     }
     export interface Test {
          testId: string
          questions: Question[]
          target: number
     }
     export interface Question{
          question: string
          correctOption: string    
          options: Options[]
     }
     export interface Options{
          id: string
          text: string
     }
     export interface ExpiredPost {
          postFields: Post
          expiredAt: Date
     }
     export interface Assistant {
          id: string
          name: string
          email: string
          password: string
          role: string
          facultyName: string     
     }
     export interface Attendees{
          postId: string
          attendees: AttendeeChild[]
     }
     export interface AttendeeChild{
          name: string
          email: string
          postResult: string | number
     }
}