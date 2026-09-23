"use client"

import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { use, useEffect, useState } from 'react';
import QuestionsSection from './_components/QuestionsSection';
import RecordAnswerSection from './_components/RecordAnswerSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function StartInterview({ params }) {

    const { interviewId } = use(params);

    const [interviewData, setInterviewData] = useState();
    const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

    useEffect(() => {
        GetInterviewDetails();
    }, [interviewId]);

    /*
    Used to get interview details by mock id
    */
    const GetInterviewDetails = async () => {
        const result = await db
            .select()
            .from(MockInterview)
            .where(eq(MockInterview.mockId, interviewId));

        if (result.length === 0) {
            console.log("Interview not found");
            return;
        }

        const jsonMockResp = JSON.parse(result[0].jsonMockResp);

        console.log(jsonMockResp);

        setMockInterviewQuestion(jsonMockResp);
        setInterviewData(result[0]);
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                {/* Questions Section */}
                <QuestionsSection
                    mockInterviewQuestion={mockInterviewQuestion}
                    activeQuestionIndex={activeQuestionIndex}
                    setActiveQuestionIndex={setActiveQuestionIndex}
                />

                {/* Video / Audio Recording */}
                <RecordAnswerSection 
                    mockInterviewQuestion={mockInterviewQuestion}
                    activeQuestionIndex={activeQuestionIndex}
                    setActiveQuestionIndex={setActiveQuestionIndex}
                    interviewData={interviewData}
                />

            </div>
            <div className='flex justify-end gap-6'>
                {activeQuestionIndex>0 &&
                <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex-1)}>Previous Question</Button>}
                {activeQuestionIndex!=mockInterviewQuestion?.length-1 &&
                <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex+1)}>Next Question</Button>}
                {activeQuestionIndex==mockInterviewQuestion?.length-1 &&
                
                <Link href={'/dashboard/interview/'+interviewData?.mockId+"/feedback"}>
                <Button>End Interview</Button>
                </Link>}
            </div>
        </div>
    )
}

export default StartInterview