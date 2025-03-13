function generateEmail() {
    let name = document.getElementById("prospectName").value;
    let company = document.getElementById("companyName").value;
    let industry = document.getElementById("industry").value;
    let companySize = document.getElementById("companySize").value;
    let responseType = document.getElementById("responseType").value;
    
    let emailContent = "";

    if (!name || !company || !industry) {
        emailContent = "Please enter all required details.";
    } else {
        let subject = "";
        let body = "";

        if (responseType === "positive") {
            subject = `Excited to Partner with ${company}!`;
            body = `Dear ${name},

We are thrilled to hear about your interest in Userorbit! As a leading solution in ${industry}, Userorbit is designed to help businesses like ${company} streamline their customer engagement and increase retention rates.

Given ${companySize} businesses face **scalability challenges**, our platform offers tailored automation that ensures **personalized outreach at scale**.

Let’s set up a quick call to discuss how Userorbit can accelerate your success.

Best,  
[Your Name]`;
        } 
        else if (responseType === "semi-positive") {
            subject = `Still on the Fence? Let's Chat!`;
            body = `Dear ${name},

I understand that choosing the right solution for ${company} in the ${industry} sector can be challenging. 

Userorbit has helped companies like yours optimize outreach with **minimal effort and maximum impact**. If you’re curious, we’d love to show you a demo tailored to your needs.

Would you be open to a quick call next week?

Best,  
[Your Name]`;
        } 
        else if (responseType === "negative") {
            subject = `Userorbit May Not Be the Right Fit – But Here’s Why It Could Be`;
            body = `Dear ${name},

I appreciate your honesty regarding Userorbit. While it may not align with ${company}'s current needs, many of our clients in ${industry} had similar hesitations before seeing the value in **automating their outreach process**.

If your needs ever shift, I’d be happy to reconnect.

Best,  
[Your Name]`;
        } 
        else if (responseType === "semi-negative") {
            subject = `We Get It – But Let’s Stay in Touch!`;
            body = `Dear ${name},

Thanks for your candid feedback. While now might not be the right time for ${company}, we’d love to keep the door open for future collaboration.

Would it be okay to check in again in a few months?

Best,  
[Your Name]`;
        } 
        else {
            subject = `Did You Miss My Last Email?`;
            body = `Dear ${name},

I understand that things get busy at ${company}, but I wanted to follow up on my last email about Userorbit. 

Would you be open to a quick chat, or should I check back in later?

Best,  
[Your Name]`;
        }

        emailContent = `Subject: ${subject}\n\n${body}`;
    }

    document.getElementById("emailContent").innerText = emailContent;
}
