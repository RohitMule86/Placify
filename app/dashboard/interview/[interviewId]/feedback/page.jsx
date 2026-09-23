"use client"
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import React, { useEffect, useState } from 'react'
import { eq } from 'drizzle-orm'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

function feedback({params}) {

  const router = useRouter();

  const [feedbackList,setFeedbackList]=useState([]);
  const [overallRating, setOverallRating] = useState(0);

  const { interviewId } = React.use(params);

  useEffect(()=>{
      GetFeedback();
    },[interviewId])

  const GetFeedback = async () => {

    console.log("Interview ID:", interviewId)

    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, interviewId))
      .orderBy(UserAnswer.id)

      console.log("Feedback Result:", result)
      setFeedbackList(result);

      const totalRating = result.reduce(
        (sum, item) => sum + Number(item.rating),
        0
      );

      const averageRating = result.length > 0
        ? totalRating / result.length
        : 0;

      setOverallRating(averageRating);
  }

  return (
    <div className='p-10'>

      {feedbackList?.length==0?
      <h2 className='font-bold text-xl text-gray-500'>No Interview Feedback Record Found</h2>
        :
      <>

      <h2 className='text-3xl font-bold text-green-500'>Congratulation!</h2>
      <h2 className='font-bold text-2xl'>Here is your interview feedback</h2>
      <h2 className='text-primary text-lg my-3'>Your overall interview rating: <strong>{overallRating.toFixed(1)}/10</strong></h2>
      <h2 className='text-sm text-gray-500'>Find below interview question with correct answer, your answer and feedback for improvement</h2>
      {feedbackList && feedbackList.map((item, index) => (
        <Collapsible key={index}>
          <CollapsibleTrigger className='p-2 bg-secondary rounded-lg flex justify-between my-2 text-left gap-7 w-full'>
          {item.question} <ChevronsUpDown className='h-5 w-5'/>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className='flex flex-col gap-2'>
              <h2 className='text-gray-500 p-2 border rounded-lg'><strong>Rating:</strong>{item.rating}</h2>
              <h2 className='p-2 border rounded-lg bg-gray-200 text-sm'><strong>Your Answer: </strong>{item.userAns}</h2>
              <h2 className='p-2 border rounded-lg bg-green-200 text-sm'><strong>Correct Answer: </strong>{item.correctAns}</h2>
              <h2 className='p-2 border rounded-lg bg-blue-200 text-sm'><strong>Feedback: </strong>{item.feedback}</h2>
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
      </>}

      <Button onClick={()=>router.replace('/dashboard')}>Go Home</Button>

    </div>
  )
}

export default feedback
