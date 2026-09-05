// TALERANG ASSESSMENT — QUESTION BANK
// Source of truth: "210126 MCQ Quiz for All Modules.pdf"
// This file is the single source of truth for all questions, options, and scoring.
// Do NOT edit question text or scores here without checking against the source PDF first.
//
// Structure notes:
// - "type": "single" = pick one option. "multi" = pick any number of options; scores of all selected options are summed.
// - "scored": false means the question is shown to the student but does NOT count toward the module score
//   (used only for 1A-U1, which has no point values in the source document).
// - "displayModule" groups sub-modules for the UI: 1A/1B under "1", 3A/3B under "3", 4A/4B/4C under "4".
// - Module 4B originally had a second Application question in the source PDF, but it was a free-text
//   planning exercise (not multiple choice) and has been intentionally excluded from this digital assessment.
// - Module 3B is numbered Q1 and Q3 in the source PDF (no Q2 exists) — kept as-is per source.
// - Module 5, Understanding Q2 scoring has been corrected: the source PDF had it inverted
//   (good grooming scored 0, poor grooming scored 10). Corrected here so good grooming = 10.

const questionBank = [

  // ===================== MODULE 1A =====================
  {
    id: "1a-u1",
    module: "1A",
    displayModule: "1",
    preWork: "Milestone activity.",
    section: "Assessment of Understanding",
    question: "Has the milestones activity changed in your perception of the team you are working with?",
    type: "single",
    scored: false,
    options: [
      { text: "Yes" },
      { text: "No" }
    ]
  },
  {
    id: "1a-u2",
    module: "1A",
    displayModule: "1",
    section: "Assessment of Understanding",
    question: "What is your most vital take away from the milestones activity?",
    type: "single",
    scored: true,
    options: [
      { text: "Understanding how different people operate. It is important to not judge someone based on first impressions.", score: 10 },
      { text: "It is good to poke and find out about the past from people.", score: 0 },
      { text: "Knowing someone's past experiences does not really make any difference. I still do not feel comfortable working with certain individuals.", score: 0 },
      { text: "Both a and b.", score: 5 }
    ]
  },
  {
    id: "1a-u3",
    module: "1A",
    displayModule: "1",
    section: "Assessment of Understanding",
    question: "You have joined a new team with the organization you work with. Over the course of your tenure, you have been hearing a lot of things about the different members of this team. Do you feel that conducting a milestones session with this team will benefit you by making you less judgmental about the team?",
    type: "single",
    scored: true,
    options: [
      { text: "Yes, it is important to really understand the team members and their behaviors from a neutral perspective.", score: 10 },
      { text: "No, conducting such a session will not benefit the team. Getting down to work and performing in the team is more important. Personal relationships can be built over time.", score: 0 },
      { text: "I am uncertain of what to do.", score: 5 },
      { text: "None of the above.", score: 0 }
    ]
  },
  {
    id: "1a-a1",
    module: "1A",
    displayModule: "1",
    section: "Assessment of Application",
    question: "The organization you are joining has most employees who have a minimum of 10 years of experience. You are their youngest recruit. You observe that most of your colleagues form strong judgemental opinions that create preconceived notions of new clients or new ventures. Your job is to work with your team to ensure that they approach people and tasks with rational and neutral thinking. You will:",
    type: "single",
    scored: true,
    options: [
      { text: "Organize a team meeting and discuss the importance of understanding each other's styles.", score: 5 },
      { text: "Organize a life map session with a prior agenda and meeting invite for the team.", score: 5 },
      { text: "Observe the team and make self-adjustments to fit the team.", score: 0 },
      { text: "Discuss your life map session with the HR and organize a departmental wide session for everyone.", score: 10 },
      { text: "You do not engage in any activity and work on your own.", score: 0 }
    ]
  },

  // ===================== MODULE 1B =====================
  {
    id: "1b-u1",
    module: "1B",
    displayModule: "1",
    preWork: "Starbucks Case Study and discussion session.",
    section: "Assessment of Understanding",
    question: "From the Starbucks case study, what do you think is that most vital element that made the Starbucks success story possible?",
    type: "single",
    scored: true,
    options: [
      { text: "The values that Starbucks was created on made all the difference. Consistently following them brought success.", score: 5 },
      { text: "The original values had only given the base on which Starbucks operates now. It is now just a good business.", score: 0 },
      { text: "The original values have been supplemented with new values and systems that have made this success story possible.", score: 10 },
      { text: "I disagree with all the above.", score: 0 }
    ]
  },
  {
    id: "1b-u2",
    module: "1B",
    displayModule: "1",
    section: "Assessment of Understanding",
    question: "Values are as important for success as hard work and intelligence. An individual with the brightest mind and loads of energy but without a strong value system cannot be successful.",
    type: "single",
    scored: true,
    options: [
      { text: "I agree, without strong values, irrespective of one's capabilities, people cannot create lasting success stories in the world of business.", score: 10 },
      { text: "I disagree, values do not get work done. Individual capabilities and skills are what matter.", score: 0 },
      { text: "I feel that values are important, but they are not the sole criteria for success. Intelligence and skills are equal partners.", score: 5 },
      { text: "I really dont understand.", score: 0 }
    ]
  },
  {
    id: "1b-a1",
    module: "1B",
    displayModule: "1",
    section: "Assessment of Application",
    question: "Imagine you have been promoted to be the CEO of a global departmental store chain. Over the years, the store has acquired a great deal of good will from its customers in the US. However, in the recent monthly reports, you notice that the South-East Asian zone is underperforming. Also, you have received several escalated reports of customer mismanagement and discontent among the employees. Think of an action plan that you will execute in this situation. You will:",
    type: "single",
    scored: true,
    options: [
      { text: "Check with the local management team to understand the root cause and ask them to device new policies.", score: 10 },
      { text: "You consult the regional heads to make policy enforcement for the stores ignoring the feedback.", score: 0 },
      { text: "Get the marketing team to figure out new regional policies based on customer feedback.", score: 5 },
      { text: "Layoff the entire SEA team and hire a new one to follow the same policies with new energy.", score: 0 }
    ]
  },
  {
    id: "1b-a2",
    module: "1B",
    displayModule: "1",
    section: "Assessment of Application",
    question: "While entering into a new work environment, which values do you feel are necessary for an individual to have which will enable them to easily adjust to the new place and system? (Select all that apply)",
    type: "multi",
    scored: true,
    options: [
      { text: "Confidence", score: 5 },
      { text: "Honesty", score: 5 },
      { text: "Dedication", score: 5 },
      { text: "Open-mindedness", score: 5 }
    ]
  },

  // ===================== MODULE 2 =====================
  {
    id: "2-u1",
    module: "2",
    displayModule: "2",
    preWork: "Life Vision session with Guest Speaker. 80th Birthday vision board. Write up on 5 year reunion speech.",
    section: "Assessment of Understanding",
    question: "Should life vision be categorized into just personal, professional and community buckets?",
    type: "single",
    scored: true,
    options: [
      { text: "Yes, these three categories cover every aspect of a person where they can make an impact or create an influence.", score: 10 },
      { text: "No, these categories are limited. Life vision should also entail environmental and nature buckets.", score: 5 },
      { text: "Both the above.", score: 5 },
      { text: "None of the above.", score: 0 }
    ]
  },
  {
    id: "2-u2",
    module: "2",
    displayModule: "2",
    section: "Assessment of Understanding",
    question: "At the end of the vision board activity, you realize that your board does not have as much as the other boards in the group. Does that mean that your life is not going to be successful or fulfilling?",
    type: "single",
    scored: true,
    options: [
      { text: "I disagree, I have to reflect more to truly discover my purpose and goals in life. I just have to find my calling.", score: 10 },
      { text: "Yes. I have no sense of direction for my life. I feel extremely inferior to my colleagues with the thought that I have no vision and goals.", score: 0 },
      { text: "I am unsure.", score: 0 },
      { text: "None of the above.", score: 0 }
    ]
  },
  {
    id: "2-a1",
    module: "2",
    displayModule: "2",
    section: "Assessment of Application",
    question: "While your 5 year reunion speech centered on all the different professional achievements that you have earned, you realize that the 80th birthday board focuses on more than just professional achievements. Also, you realize that while creating the board you were able to connect many of the achievements which previously seemed isolated. How did you come about this realization?",
    type: "single",
    scored: true,
    options: [
      { text: "I was able to connect with the achievements as steps towards my ultimate goals. I saw how each stage contributed towards my learning and growth.", score: 5 },
      { text: "I feel that the events are still isolated, even though I see that many of the achievements are building on each other.", score: 0 },
      { text: "I see that the 5 year achievements as just the base of what I wish to achieve in my future. I saw my ultimate goal and realized what was important at each stage.", score: 10 },
      { text: "I still feel that many of my achievements are isolated. They are things that I wanted to accomplish and I did.", score: 0 }
    ]
  },
  {
    id: "2-a2",
    module: "2",
    displayModule: "2",
    section: "Assessment of Application",
    question: "While doing the life vision activity, you must have found a pattern to your wishes. What according to you is the right time to focus on personal goals, professional goals and community goals? Do they have to follow a fixed pattern?",
    type: "single",
    scored: true,
    options: [
      { text: "The goals should always be professional first, community second and finally personal.", score: 5 },
      { text: "Goals should be such that they bring in aspects from each bucket with connected actions growing on each other.", score: 10 },
      { text: "There should not be any fixed pattern. One should work as it comes.", score: 0 },
      { text: "None of the above.", score: 0 }
    ]
  },

  // ===================== MODULE 3A =====================
  {
    id: "3a-u1",
    module: "3A",
    displayModule: "3",
    preWork: "Elevator pitch activity and video recording activity",
    section: "Assessment of Understanding",
    question: "How is the elevator pitch is different from any other introduction speech that you present?",
    type: "single",
    scored: true,
    options: [
      { text: "It is more focused compared to the introduction speech. The main idea of the elevator pitch is to end the speech with a follow up.", score: 10 },
      { text: "There is no difference. Both the speeches are same. The idea is to make your introduction unique and interesting for the listener.", score: 5 },
      { text: "I am unsure.", score: 0 },
      { text: "None of the above.", score: 0 }
    ]
  },
  {
    id: "3a-u2",
    module: "3A",
    displayModule: "3",
    section: "Assessment of Understanding",
    question: "Of the different components in effective communication, which component is completely in your control and which ones can be unpredictable?",
    type: "single",
    scored: true,
    options: [
      { text: "Everything is in my control. What I say, how I say it and when. Nothing feels unpredictable to me.", score: 5 },
      { text: "The content and the structure of what I am saying is in my control. I decide what to include and how to deliver. However, the setting and the circumstances of the delivery can be unpredictable.", score: 10 },
      { text: "I am not sure.", score: 0 },
      { text: "I feel everything is unpredictable.", score: 0 }
    ]
  },
  {
    id: "3a-a1",
    module: "3A",
    displayModule: "3",
    section: "Assessment of Application",
    question: "Based on the video recording activity, what changes will make your presentation skills better?",
    type: "single",
    scored: true,
    options: [
      { text: "I notice the errors in my posture and hands. I will consciously focus on keeping them more appropriately so that my delivery can become better", score: 5 },
      { text: "I notice that I stammer while speaking without even realizing that. I will focus on making my pace of the speech more moderate so that I can avoid stammering.", score: 5 },
      { text: "From the video I notice all the elements that affected my speech. My posture, my pace, my tone, my body language, my content and my voice modulation.", score: 10 }
    ]
  },
  {
    id: "3a-a2",
    module: "3A",
    displayModule: "3",
    section: "Assessment of Application",
    question: "You have been preparing for your Gala Night speech from weeks now. You know it by heart and have been presenting it to your friends for practice. On the evening of the event, while leaving office, you leave the flash cards behind. You remember that your laptop has the cards saved, but moments before reaching the venue, you discover that the laptop is out of charge. You start to panic. How will you get things in order for yourself and deliver the speech many have been looking forward to?",
    type: "single",
    scored: true,
    options: [
      { text: "Calm myself and remember the main points of the speech. Play it in my mind and structure it accordingly. Even if the context may change.", score: 5 },
      { text: "I will call my office and ask someone to bring me my flash cards. This means delaying the start of the speech. I will ask the organizers to announce the delay and wait for the cards to arrive.", score: 0 },
      { text: "I have practiced the speech enough to remember all the main ideas I will simply deliver the speech focusing on what I remember well and relating it to the crowd.", score: 10 },
      { text: "I will not feel confident enough to deliver the speech without any aid. I will cancel the event and reschedule it for another day.", score: 0 }
    ]
  },

  // ===================== MODULE 3B =====================
  // Note: source PDF numbers these Q1 and Q3 (no Q2 exists) — kept as-is.
  {
    id: "3b-u1",
    module: "3B",
    displayModule: "3",
    preWork: "Cover letter activity and Email activity",
    section: "Assessment of Understanding",
    question: "Does the CODER principle always apply to writing any formal written communication?",
    type: "single",
    scored: true,
    options: [
      { text: "Yes, this principle is quite effective in writing any formal or informal communication. Applying this principle will always help create effective write-ups.", score: 10 },
      { text: "No, this principle is very circumstantial. It does not apply to all formal written communications.", score: 0 },
      { text: "I am not quite sure.", score: 0 },
      { text: "None of the above.", score: 0 }
    ]
  },
  {
    id: "3b-u2",
    module: "3B",
    displayModule: "3",
    section: "Assessment of Understanding",
    question: "The email group activity was to create a formal written message in both the cases, however, you realized that the content and style of the email changes substantially in both the situations. Why do you think that is the case, even though both the emails were intended for professional purposes?",
    type: "single",
    scored: true,
    options: [
      { text: "While one is for a colleague, the other is for a senior member of the team.", score: 10 },
      { text: "I did not find any change in the messaging. The audience does not decide on the content.", score: 0 },
      { text: "I am not quite sure of this.", score: 0 },
      { text: "None of the above.", score: 0 }
    ]
  },
  {
    id: "3b-a1",
    module: "3B",
    displayModule: "3",
    section: "Assessment of Application",
    question: "Years have passed since you started working. It is now 15 years from your first job. This timeline has seen you move from the banking/investment sector to consumer goods to education and now finally social work. However, you wish to get back to mainstream corporate jobs while keeping your philanthropic work alive. You have come upon the perfect job with the CSR division of a leading FMCG. What points will you focus on while writing this cover letter?",
    type: "single",
    scored: true,
    options: [
      { text: "I will focus on the mixture of my experience from social and corporate jobs and contextualize that to the company's focus and growth benefits.", score: 10 },
      { text: "I will focus on the corporate experience. I will not mention the social work experience as this is a corporate job", score: 5 },
      { text: "I will focus only on the social work experience as the main work of the CSR is to focus on social development.", score: 5 },
      { text: "I will mention all my experience to show that I have a long work experience which makes me a suitable candidate for the job.", score: 5 }
    ]
  },
  {
    id: "3b-a2",
    module: "3B",
    displayModule: "3",
    section: "Assessment of Application",
    question: "You have received a hate mail from one of your clients due to a mistake committed by one of your team members. The client is threatening to leave your services and go to the competitor. This will not only mean a loss of business but also reputation for your organizations. Write a pacification email to the client. Please keep in mind that flattery does not work with this client. They are extremely professional and demand similar treatment.",
    type: "single",
    scored: true,
    options: [
      { text: "I will focus on the solution rather than the problem. I will give reassurances of this incident not repeating.", score: 10 },
      { text: "I will bullet out the main points of the incident and inform the client about the various fault points. I will ask the people involved to take responsibility and apologize to the client.", score: 0 },
      { text: "I will forward the case (internally) to the concerned person who created the problem and ask them to respond to the client and take responsibility for the situation.", score: 5 },
      { text: "I will seek help from my manager and draft the email with possible next steps. I will try to focus on mainly the solutions and avoid mentioning the problem or avoid mentioning whose fault it has been.", score: 5 }
    ]
  },

  // ===================== MODULE 4A =====================
  {
    id: "4a-u1",
    module: "4A",
    displayModule: "4",
    preWork: "The Analyst's Dilemma case study and business ethics session",
    section: "Assessment of Understanding",
    question: "Why is it essential to work with ethics in a professional setup?",
    type: "single",
    scored: true,
    options: [
      { text: "Ethics define our basic values. They reflect in our thinking and actions on all fronts in life.", score: 10 },
      { text: "Working ethically at all times is not practical. I need to choose what to do depending on the situation.", score: 0 },
      { text: "Ethics are very subjective and individuals flout someone's ethical boundaries most times.", score: 0 },
      { text: "None of the above.", score: 0 }
    ]
  },
  {
    id: "4a-u2",
    module: "4A",
    displayModule: "4",
    section: "Assessment of Understanding",
    question: "Your value system determines how you think, act and work. Your colleagues say they share similar values, but you can't see them thinking, acting or working like you. Is it important to do something to change the situation?",
    type: "single",
    scored: true,
    options: [
      { text: "Yes. When colleagues share my values they respond to situations like I do.", score: 10 },
      { text: "No. Just because colleagues share my values doesn't mean that they should respond to situations like I do.", score: 5 },
      { text: "I don't know.", score: 0 },
      { text: "None of the above.", score: 0 }
    ]
  },
  {
    id: "4a-a1",
    module: "4A",
    displayModule: "4",
    section: "Assessment of Application",
    question: "You have applied for internships to many organizations. You have been interviewed by two organizations and one of them makes an offer which you accept. On the date of joining, you receive a call from the second organization offering you their internship. What would you choose to do? Why?",
    type: "single",
    scored: true,
    options: [
      { text: "Decline the offer from second organization since I have already committed to the first for internship", score: 10 },
      { text: "Weigh my benefits between two offers and choose the offer that gives me the maximum advantage", score: 0 },
      { text: "I don't know.", score: 0 },
      { text: "Choose the offer that works best for me. If I choose to take the second internship, I will explain to the first organization and apologize.", score: 5 },
      { text: "None of the above", score: 0 }
    ]
  },
  {
    id: "4a-a2",
    module: "4A",
    displayModule: "4",
    section: "Assessment of Application",
    question: "During a team dinner, you overhear colleagues discussing a job offer received from a competitor. This comes at a time when you are about to deliver on a big project that your team has worked on for 6 months. Losing these team members will create a crisis because they have been managing the client relationship in this project. What would you do?",
    type: "single",
    scored: true,
    options: [
      { text: "Tell HR and your supervisor what you have heard so that they take an action against those team members.", score: 0 },
      { text: "Call a team meeting and discuss the issue openly. Reason with them and explain the unethical nature of their decision.", score: 10 },
      { text: "Call the manager from the other organization and give them the downside to hiring the team members.", score: 0 },
      { text: "Do nothing.", score: 0 }
    ]
  },

  // ===================== MODULE 4B =====================
  // Note: source PDF Application Q2 (13-task weekly planning exercise) is a free-text planning
  // exercise, not multiple choice. Excluded from this digital assessment per project decision.
  {
    id: "4b-u1",
    module: "4B",
    displayModule: "4",
    preWork: "Jar activity, weekly planner, SMART goals activity, Prioritization game",
    section: "Assessment of Understanding",
    question: "How do you correlate the jar activity to creating your weekly plan?",
    type: "single",
    scored: true,
    options: [
      { text: "I see a direct correlation between the different sized items put into the jar and the tasks I take on during the week.", score: 10 },
      { text: "I did not see a correlation between the jar activity and my weekly plan.", score: 0 },
      { text: "I know there is a correlation but don't know what exactly.", score: 0 },
      { text: "None of the above.", score: 0 }
    ]
  },
  {
    id: "4b-u2",
    module: "4B",
    displayModule: "4",
    section: "Assessment of Understanding",
    question: "Which two quadrants in the prioritization matrix, do we most often misunderstand?",
    type: "single",
    scored: true,
    options: [
      { text: "Urgent and Important & Not Urgent and Not Important", score: 0 },
      { text: "Urgent and Important & Not Urgent and Important", score: 0 },
      { text: "Not Urgent and Important & Urgent and Not Important", score: 0 },
      { text: "Urgent and Important & Urgent and Not Important", score: 10 }
    ]
  },
  {
    id: "4b-a1",
    module: "4B",
    displayModule: "4",
    section: "Assessment of Application",
    question: "If you realize that you are not able to implement your weekly plan and spend time like you have allocated in your plan, what steps will to take to rework this plan?",
    type: "single",
    scored: true,
    options: [
      { text: "I will honestly analyse if I am following my weekly plan and then take action steps to rectify areas that I am falling short on to my commitments.", score: 10 },
      { text: "I will increase time to activities that are in practice taking more time when compared to my allotted time on the weekly plan and cut short time from other planned commitments.", score: 0 },
      { text: "I will not change anything.", score: 0 },
      { text: "None of the above.", score: 0 }
    ]
  },

  // ===================== MODULE 4C =====================
  {
    id: "4c-u1",
    module: "4C",
    displayModule: "4",
    preWork: "Case study based problem solving activity",
    section: "Assessment of Understanding",
    question: "From Edward de Bono's thinking hats, do circumstances always change the colour of the hat that we use?",
    type: "single",
    scored: true,
    options: [
      { text: "Yes, people work differently in different circumstances. They change their hats as and when the situation demands it.", score: 10 },
      { text: "A mature individual tends to remain unchanged/ stable through different circumstances and does not change hats", score: 0 },
      { text: "I am not quite sure.", score: 0 },
      { text: "None of the above.", score: 0 }
    ]
  },
  {
    id: "4c-u2",
    module: "4C",
    displayModule: "4",
    section: "Assessment of Understanding",
    question: "Which hats are most appropriate for professional thinking and which ones right for personal thinking?",
    type: "single",
    scored: true,
    options: [
      { text: "All the 6 thinking hats can be applied to both professional and personal thinking equally", score: 10 },
      { text: "The thinking hats can only be used in professional thinking when we work in teams", score: 0 },
      { text: "I am not quite sure.", score: 0 },
      { text: "None of the above.", score: 0 }
    ]
  },
  {
    id: "4c-u3",
    module: "4C",
    displayModule: "4",
    section: "Assessment of Understanding",
    question: "Is it always possible to follow the 3 steps of problem solving: 1. breaking it down, 2. asking the \"why\", 3. getting to the root? When can't you use this 3 step process?",
    type: "single",
    scored: true,
    options: [
      { text: "3 steps can be used for solving any problem (professional or personal).", score: 10 },
      { text: "3 steps to problem solving cannot be used to solve personal issues because they can be complicated, involve emotions and cloud one's judgement.", score: 0 },
      { text: "3 steps are not always usable in professional problem solving where other individuals who differ in how they operate are involved.", score: 0 },
      { text: "None of the above.", score: 0 }
    ]
  },
  {
    id: "4c-a1",
    module: "4C",
    displayModule: "4",
    section: "Assessment of Application",
    question: "You are working very hard on a project in office. However in every review meeting your boss finds things to complain about and points out to your incompetence. You start believing that your work on the project is actually sub-standard. Which thinking hats drive your emotional response in this situation? Which thinking hats could help you turn your situation around?",
    type: "single",
    scored: true,
    options: [
      { text: "Blue hat. Black hat", score: 0 },
      { text: "Red hat. Yellow and Green hat", score: 10 },
      { text: "Black hat. White hat", score: 0 },
      { text: "None of the above.", score: 0 }
    ]
  },
  {
    id: "4c-a2",
    module: "4C",
    displayModule: "4",
    section: "Assessment of Application",
    question: "A division in your company (Food and Beverages – Coffee shop) is underperforming. Your board is thinking of closing the division. The coffee shop is very famous for its unique culture and ambience and has always had a strong suit of loyal customers. It financial performance is is hampered by the sub-standard coffee beans it uses and because the staff is ill trained. What can you do to make this venture a viable business?",
    type: "single",
    scored: true,
    options: [
      { text: "Create a report with a stepwise breakdown of the problem. Ensure that my report reflects the root cause and offer solutions based on the 5 whys.", score: 10 },
      { text: "Create a report for the company that lays down information supporting its decision to close the coffee shop.", score: 0 },
      { text: "Let the board do whatever they want to do.", score: 0 },
      { text: "Not really sure.", score: 0 }
    ]
  },

  // ===================== MODULE 5 =====================
  {
    id: "5-u1",
    module: "5",
    displayModule: "5",
    preWork: "Dining etiquettes, grooming and dressing session",
    section: "Assessment of Understanding",
    question: "From the session on dining etiquettes, what is the most important element while sitting at a dinner table? Choose multiple if applicable.",
    type: "multi",
    scored: true,
    options: [
      { text: "Starting with everyone and engaging with them appropriately.", score: 5 },
      { text: "Sitting with the right posture.", score: 5 },
      { text: "Eating with the right cutlery.", score: 5 },
      { text: "Not having inappropriate conversations.", score: 5 }
    ]
  },
  {
    id: "5-u2",
    module: "5",
    displayModule: "5",
    section: "Assessment of Understanding",
    question: "You do not think you should be:",
    type: "single",
    scored: true,
    // NOTE: scoring corrected per project decision — source PDF had this inverted
    // (good grooming scored 0, poor grooming scored 10). Fixed here.
    options: [
      { text: "Regularly bathing and grooming. Ensuring that the clothes are ironed and proper. Keep your hair set and smelling good during any formal/informal meeting.", score: 10 },
      { text: "Bathing if you feel like. Reusing the week old denim from your wardrobe. Keeping your flyaway hairstyle on all the time.", score: 0 },
      { text: "None of the above.", score: 0 },
      { text: "All the above.", score: 0 }
    ]
  },
  {
    id: "5-a1",
    module: "5",
    displayModule: "5",
    section: "Assessment of Application",
    question: "You are attending a team dinner and you are famished. You start eating as soon as the food is served. Your manager and seniors join you. Just when you are about to bite into a particularly large portion, your manager calls out to you. How will you respond?",
    type: "single",
    scored: true,
    options: [
      { text: "You quickly put the food down on the plate and respond to the manager. Complete the conversation and continue eating.", score: 10 },
      { text: "You quickly put the food into your mouth and attempt to chew it while responding to the manager.", score: 0 },
      { text: "You don't respond and continue eating.", score: 0 },
      { text: "None of the above.", score: 0 }
    ]
  },
  {
    id: "5-a2",
    module: "5",
    displayModule: "5",
    section: "Assessment of Application",
    question: "The shower in your bathroom is broken. You had a very long and tiring day in the field and did not bother to wash up before bed. In the morning, you realize that the overhead tank is empty for repairs. You have a board meeting today at office. Which grooming techniques would you use to make yourself presentable?",
    type: "single",
    scored: true,
    options: [
      { text: "I will put on a fresh set of clean and well ironed clothes. Use deodorant and gel my hair to set it.", score: 5 },
      { text: "I will grab all the water bottles in the house and attempt to get my basic hygiene routine done. I will wear fresh set of clean and well ironed clothes and use deodorant to keep any odour away.", score: 10 },
      { text: "My personality always creates a positive impression and I don't need to be in close proximity to anyone during the meeting. I will simply brush and go to the meeting.", score: 0 },
      { text: "I will cancel the meeting.", score: 0 }
    ]
  },

  // ===================== MODULE 6 =====================
  // Note: source PDF has no Assessment of Application section for Module 6 — confirmed intentional.
  {
    id: "6-u1",
    module: "6",
    displayModule: "6",
    preWork: "Excel, Power Point, Resume and Interviewing session",
    section: "Assessment of Understanding",
    question: "Why do we use a PowerPoint presentation? What is the most common mistake made in creating a PowerPoint presentation?",
    type: "single",
    scored: true,
    options: [
      { text: "PowerPoint presentations are used as delivery aids to support information/ learning. We tend to put all the information on slides and use them as a reading aid.", score: 10 },
      { text: "Using the ppt as the look-at medium to engage the audience. We tend to speak too much and confuse the audience.", score: 0 },
      { text: "I am not quite sure of this.", score: 0 },
      { text: "None of the above.", score: 0 }
    ]
  },
  {
    id: "6-u2",
    module: "6",
    displayModule: "6",
    section: "Assessment of Understanding",
    question: "Based on your review of the different resumes, what information is an absolute must in a resume and what need to be kept out?",
    type: "single",
    scored: true,
    options: [
      { text: "Information about work experience and academic achievements is a must, while personal information like hobbies, family, etc. and experience not related to the job can be omitted.", score: 10 },
      { text: "Everything I have done should go into my resume. It is important to present a complete individual to the recruiter.", score: 0 },
      { text: "I am confused.", score: 0 },
      { text: "None of the above.", score: 0 }
    ]
  },
  {
    id: "6-u3",
    module: "6",
    displayModule: "6",
    section: "Assessment of Understanding",
    question: "Why are panel interviews preferred instead of one on one interviews?",
    type: "single",
    scored: true,
    options: [
      { text: "The panel interview tests the individual's ability to face multiple personalities and viewpoints. It gauges how aptly the individual responds to people and perspectives.", score: 10 },
      { text: "Both the interviews are equally effective. The panel interview is quicker, saves time.", score: 0 },
      { text: "Both are different. But I am not sure what the difference is.", score: 5 },
      { text: "None of the above.", score: 0 }
    ]
  }
];

// Module display order and grouping (for the checklist / navigation UI)
const moduleStructure = [
  { id: "1A", parent: "1", label: "Module 1A" },
  { id: "1B", parent: "1", label: "Module 1B" },
  { id: "2",  parent: "2", label: "Module 2" },
  { id: "3A", parent: "3", label: "Module 3A" },
  { id: "3B", parent: "3", label: "Module 3B" },
  { id: "4A", parent: "4", label: "Module 4A" },
  { id: "4B", parent: "4", label: "Module 4B" },
  { id: "4C", parent: "4", label: "Module 4C" },
  { id: "5",  parent: "5", label: "Module 5" },
  { id: "6",  parent: "6", label: "Module 6" }
];

// Export for use in the browser (script tag) and for Node-based tooling if ever needed
if (typeof module !== "undefined" && module.exports) {
  module.exports = { questionBank, moduleStructure };
}
