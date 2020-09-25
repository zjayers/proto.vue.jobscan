const COVER_DEFAULT = `Default Cover Works <$-contactName-$>`;

const OUTREACH_RECRUITER = `Recruiter works`;

const OUTREACH_ENGINEER = `Engineer works`;

const OUTREACH_EXECUTIVE = `Executive works`;

const OUTREACH_THANKS = `Thanks works`;

const OUTREACH_REBUTTAL = `Rebuttal works`;

const RESPONSE_INTERESTED = `Interested works`;

const RESPONSE_MAYBE = `Maybe works`;

const RESPONSE_UNINTERESTED = `Uninterested works`;

export const templates = {
    Cover: {
        Default: COVER_DEFAULT
    },
    Outreach: {
        Recruiter: OUTREACH_RECRUITER,
        Engineer: OUTREACH_ENGINEER,
        Executive: OUTREACH_EXECUTIVE,
        Thanks: OUTREACH_THANKS,
        Rebuttal: OUTREACH_REBUTTAL
    },
    Response: {
        Interested: RESPONSE_INTERESTED,
        Maybe: RESPONSE_MAYBE,
        Uninterested: RESPONSE_UNINTERESTED
    }
};
