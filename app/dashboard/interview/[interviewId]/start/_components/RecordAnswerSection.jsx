"use client"

import Webcam from 'react-webcam'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Button } from '@base-ui/react'
import { Mic } from 'lucide-react'
import { toast } from 'sonner'
import { chatSession } from '@/utils/GeminiAIModel'
import { UserAnswer } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { db } from '@/utils/db'
import moment from 'moment'

function RecordAnswerSection({mockInterviewQuestion, activeQuestionIndex, interviewData}) {

  const {user} = useUser();
  const [loading,setLoading]=useState(false);

  const [userAnswer, setUserAnswer] = useState('')
  const [isRecording, setIsRecording] = useState(false)

  const recognitionRef = useRef(null)

  const startSpeechToText = () => {

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition

    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in this browser.')
      return
    }

    const recognition = new SpeechRecognition()

    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = 'en-US'

    recognition.onresult = (event) => {
      let finalTranscript = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript
        }
      }

      if (finalTranscript) {
        setUserAnswer(prev => prev + finalTranscript + ' ')
      }
    }

    recognition.onerror = (event) => {
      console.log('Speech recognition error:', event.error)
      setIsRecording(false)
    }

    recognition.onend = () => {
      setIsRecording(false)
    }

    recognitionRef.current = recognition

    recognition.start()
    setIsRecording(true)
  }

  const stopSpeechToText = () => {

    if (recognitionRef.current) {
      recognitionRef.current.stop()
      recognitionRef.current = null
    }

    setIsRecording(false)
  }

  useEffect(()=>{
    if(!isRecording && userAnswer.length > 10){
      UpdateUserAnswer();
    }
    
  },[userAnswer])

  const StartStopRecording=async()=>{
    if (isRecording) {

      stopSpeechToText()
      
    }
    else {
      startSpeechToText()
    }
  }

  const UpdateUserAnswer=async()=>{
    console.log(userAnswer)
    setLoading(true)

    const feedbackPrompt =
      "Question: " + mockInterviewQuestion[activeQuestionIndex]?.question +
      "\nUser Answer: " + userAnswer +
      "\nBased on the question and user's answer, evaluate the answer." +
      "\nGive a rating from 1 to 10 and provide feedback explaining the quality of the answer and areas for improvement." +
      "\nKeep the feedback concise, around 3 to 5 lines." +
      "\nReturn ONLY valid JSON in this exact format:" +
      '\n{"rating": 1, "feedback": "Your feedback here"}';

    const result = await chatSession.sendMessage(feedbackPrompt);

    const mockJsonResp = result.response.text()
      .replace('```json', '')
      .replace('```', '')
      .trim();

    console.log(mockJsonResp);

    const JsonFeedbackResp=JSON.parse(mockJsonResp);

    const resp=await db.insert(UserAnswer).values({
      mockIdRef:interviewData?.mockId,
      question:mockInterviewQuestion[activeQuestionIndex]?.question,
      correctAns:mockInterviewQuestion[activeQuestionIndex]?.answer,
      userAns:userAnswer,
      feedback:JsonFeedbackResp?.feedback,
      rating:JsonFeedbackResp?.rating,
      userEmail:user?.primaryEmailAddress?.emailAddress,
      createdAt:moment().format('DD-MM-yyyy')
    })

    if(resp){
      toast('User Answer Recorded Successfully!')
      setUserAnswer('');
    }

    setLoading(false);
  }

  return (
    <div className='flex items-center justify-center flex-col'>

      <div className='flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5'>

        <Image
          src={'/webcam.png'}
          width={200}
          height={200}
          className='absolute'
          alt='Webcam'
        />

        <Webcam
          mirrored={true}
          style={{
            height: 300,
            width: '100%',
            zIndex: 10,
          }}
        />

      </div>

      <Button
        disabled={loading}
        className="my-10 px-8 py-3 rounded-full border border-gray-300 bg-white text-gray-800 shadow-sm hover:bg-gray-100 transition-all duration-200 cursor-pointer"
        onClick={StartStopRecording}
      >
        {isRecording ? (
          <span className="flex items-center gap-2 text-red-600">
            <Mic size={18} />
            Stop Recording...
          </span>
        ) : (
          'Record Answer'
        )}
      </Button>

    </div>
  )
}

export default RecordAnswerSection

// "use client"
// import Webcam from 'react-webcam'
// import React, { useEffect, useState } from 'react'
// import Image from 'next/image'
// import { Button } from '@base-ui/react'
// import useSpeechToText from 'react-hook-speech-to-text';
// import { Mic } from 'lucide-react'

// function RecordAnswerSection() {
//   const [userAnswer, setUserAnswer]=useState('');
//     const {
//     error,
//     interimResult,
//     isRecording,
//     results,
//     startSpeechToText,
//     stopSpeechToText,
//   } = useSpeechToText({
//     continuous: true,
//     useLegacyResults: false
//   });

//   useEffect(()=>{
//     results.map((result)=>(
//       setUserAnswer(prevAns=prevAns+result?.transcript)
//     ))
//   },[results])

//     return (
//         <div className='flex items-center justify-center flex-col'>

//             <div className='flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5'>

//                 <Image
//                     src={'/webcam.png'}
//                     width={200}
//                     height={200}
//                     className='absolute'
//                     alt='Webcam'
//                 />

//                 <Webcam
//                     mirrored={true}
//                     style={{
//                         height: 300,
//                         width: '100%',
//                         zIndex: 10,
//                     }}
//                 />

//             </div>

//             <Button variant="outline" className="my-10"
//             onClick={isRecording?stopSpeechToText:startSpeechToText}
//             >
//               {isRecording?
//               <h2 className='text-red-600'>
//                 <Mic/> 'Recording...'
//               </h2>
//               :
              
//               'Record Answer'}</Button>

//               <Button onClick={()=>console.log(userAnswer)}>Show User Answer</Button>
//         </div>
//     )
// }

// export default RecordAnswerSection