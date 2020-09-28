import moment from "moment";

const COVER_DEFAULT = `<p>Dear <%-COMPANYNAME-%> Hiring Team, <br /><br />I am writing to you in response to the open <%-JOBTITLE-%> role at <%-COMPANYNAME-%>.<br /><br />As a seasoned <%-CURRENTJOBTITLE-%> with <%-YEARSOFEXPERIENCE-%> years experience developing diverse web / mobile applications, my skill-set aligns very well with your needs for a new <%-JOBTITLE-%>, and will allow me to make an immediate contribution to <%-COMPANYNAME-%>’s continued success.<br /><br />To quickly introduce myself, <%-PERSONALSUMMARY-%> <br /><br />My technical stack includes cross-platform proficiency (<%-PLATFORMS-%>), fluency in <%-SKILLS_COUNT-%>+ programming languages/frameworks (<%-SKILLS-%>); and advanced knowledge of application development, design patterns, and best practices (<%-KEYWORDS-%>). <br /><br />Attached, you will find high-level summaries of my job duties, software applications, and education history in my resume. I can be reached anytime via my cell phone <%-PHONENUMBER-%> or via email at <%-EMAIL-%>.<br /><br />Thank you for your time and consideration. I look forward to speaking with you about this opportunity.<br /><br />Sincerely,<br /><%-FIRSTNAME-%> <%-LASTNAME-%><br /><br />Email: <%-EMAIL-%><br />Phone: <%-PHONENUMBER-%><br />GitHub: github.com/<%-GITHUBUSERNAME-%><br />Website: <%-WEBSITE-%>

${moment().format("MMMM Do, YYYY")}
</p>`;

const OUTREACH_RECRUITER = `<p>Hello <%-CONTACTNAME-%>! I Hope this email finds you well.<br /><br />I recently came across the job posting for the <%-JOBTITLE-%> and am very excited about the prospect of exploring this opportunity further. As a full-stack software developer, I enjoy learning new technologies up and down the stack with expertise in <%-KEYWORDS-%>.<br /><br />Are you in charge of recruiting for this role? If so, would you be open to a conversation this week or early next to discuss the position, company culture, and how my background could be a fit? Thank you for your time.<br /><br />Best,
</p>`;

const OUTREACH_ENGINEER = `<p>Hello <%-CONTACTNAME-%>,<br /><br />My name is <%-FIRSTNAME-%> <%-LASTNAME-%> and I am also a software engineer in the your area. I came across a job posting for a <%-JOBTITLE-%> role at <%-COMPANYNAME-%> and, based on my research thus far, I believe the position would be a great fit for my skill-set. I would love to speak with you about your experience at <%-COMPANYNAME-%> and better understand the culture, goals, and workflow of the engineering team. <br/><br/>Do you have [15-20] minutes for a phone call in the next week or two? Thank you in advance for your time/consideration. <br/><br/>I look forward to our conversation.<br /><br />Best,
</p>`;

const OUTREACH_EXECUTIVE = `<p>Hello <%-CONTACTNAME-%>,<br /><br />My name is <%-FIRSTNAME-%> <%-LASTNAME-%> and I am extremely interested in your open <%-JOBTITLE-%> role at <%-COMPANYNAME-%>. I am a Full-Stack Software Engineer with extensive knowledge in your company's tech stack and a passion for tackling difficult projects. I would like to speak with you about your vision, pain points, and the ways I can add the most value to <%-COMPANYNAME-%>. Do you have any availability in the next week or two for a conversation? Thanks for your consideration, I look forward to speaking with you.<br /><br />Best,
</p>`;

const OUTREACH_THANKS = `<p>Hello <%-CONTACTNAME-%>,<br /><br />I appreciate you taking the time to speak with me today about the <%-JOBTITLE-%> role at <%-COMPANYNAME-%>.<br /><br />I am very interested in moving forward in your process and hope that I’m able to learn more about your needs and how I can make an immediate impact at <%-COMPANYNAME-%>! As I mentioned, my <%-KEYWORDS-%> expertise will allow me to hit the ground running and become a fantastic asset to your engineering team. Please let me know if I can provide any additional information to help with your decision. <br /><br />Thanks again, 
</p>`;

const OUTREACH_REBUTTAL = `<p>Hello <%-CONTACTNAME-%>,<br /><br />Thanks for getting back to me. <%-COMPANYNAME-%> is absolutely where I'd like to end up. Perhaps my resume doesn't properly represent my technical skill level or programming knowledge. I'd be grateful for the opportunity to complete a coding challenge to demonstrate my skill set. This way you can assess my code and evaluate if it is at the level you need for the position. Can we set that up?<br /><br />Either way, I'd love to connect on the phone to discuss potential future opportunities. Are you available at some point early next week?<br /><br />Thank you for your time and consideration. <br /><br />Best, 
</p>`;

const RESPONSE_INTERESTED = `<p>Hi <%-CONTACTNAME-%>,<br /><br />Thank you for reaching out with this awesome opportunity!<br /><br />I’m interested in the open <%-JOBTITLE-%> role and would like to learn more details about the position.<br /><br />I’ve attached my resume for your review. Would it be possible for us to connect via phone?<br /><br />I look forward to speaking with you!<br /><br />Best,
</p>`;

const RESPONSE_MAYBE = `<p>Hi <%-CONTACTNAME-%><br /><br />Thank you for your InMail.<br /><br />I’m pretty happy in my current role, but I’d be open to discussing this opportunity with you.<br /><br />I’ve attached my resume for your review. Would it be possible for us to connect via phone?<br /><br />I look forward to speaking with you!<br /><br />Best,
</p>`;

const RESPONSE_UNINTERESTED = `<p>Hi <%-CONTACTNAME-%>,<br /><br />Thanks for reaching out to me! I am actively exploring new opportunities, but this particular role isn’t quite what I’m looking for. Do you happen to know of any other opportunities that may be a better fit? If so, I’d love to connect!<br /><br />I’ve attached my resume for your review.<br /><br />I look forward to speaking with you!<br /><br />Best,
</p>`;

export const templates = {
    Cover: {
        Default: COVER_DEFAULT,
    },
    Outreach: {
        Recruiter: OUTREACH_RECRUITER,
        Engineer: OUTREACH_ENGINEER,
        Executive: OUTREACH_EXECUTIVE,
        Thanks: OUTREACH_THANKS,
        Rebuttal: OUTREACH_REBUTTAL,
    },
    Response: {
        Interested: RESPONSE_INTERESTED,
        Maybe: RESPONSE_MAYBE,
        Uninterested: RESPONSE_UNINTERESTED,
    },
};
