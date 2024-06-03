"use server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)


let data;
export const sendEmail = async (formData: FormData
    ) =>{
    const senderEmail = formData.get('senderemail');
    const message = formData.get('message');

    if(!message || typeof message!=='string'|| message.length>5000){
        return {error: 'Invalid message'}
    }
    if(!senderEmail || typeof senderEmail!=='string'|| senderEmail.length>500){
        return {error: 'Invalid message'}
    }
    console.log("Running on server")
    try{
        data = await resend.emails.send(
            {
                from:'onboarding@resend.dev',
                to: 'jalav@iu.edu',
                subject: `Message from ${senderEmail}`,
                reply_to: senderEmail,
                text: message
    
            }
        )
    }
    catch(error){
        
        return {
            error: getErrorMessage(error)
        }
    }

    return {
        data
    }

    
    
}

function getErrorMessage(error: unknown):string {
    let message:string;
    if(error instanceof Error){
        message=error.message
    } else if (error && typeof error === 'object' && 'message' in error){
        message=String(error.message)
    } else if (error && typeof error === 'string'){
        message=error
    }
    else{
        message="Something went wrong"
    }
    return message
}
