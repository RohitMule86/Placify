import { Button } from '@base-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'

function InterviewItemCard({interview}) {

    const router = useRouter();
    const onStart=()=>{
        router.push('/dashboard/interview/'+interview?.mockId+'/start')
    }

    const onFeedbackPress=()=>{
        router.push('/dashboard/interview/'+interview.mockId+"/feedback")
    }

  return (
    <div className='border shadow-sm rounded-lg p-3'>
        <h2 className='font-bold text-primary'>{interview?.jobPosition}</h2>
        <h2 className='text-sm text-gray-600'>{interview?.jobExperinece} Years of Experience</h2>
        <h2 className='text-xs text-gray-400'>Created At: {interview.createdAt}</h2>

        <div className='flex justify-between mt-2 gap-5'>
            <Button 
                size="sm" 
                variant="outline" 
                className="rounded-md border border-gray-400 bg-white px-3 py-1 text-xs font-medium hover:bg-gray-100 cursor-pointer w-full"
                onClick={onFeedbackPress}
            >
                Feedback 
            </Button>

            <Button
                size="sm"
                className="rounded-md bg-blue-700 px-3 py-1 text-xs font-medium text-white hover:bg-blue-800 cursor-pointer w-full"
                onClick={onStart}
            >
                Start
            </Button>
        </div>
    </div>
  )
}

export default InterviewItemCard
