import React, { useState, useEffect } from 'react';
import FlashcardItem from './FlashcardItem'; // Import your FlashcardItem component
import './FlashcardItem.css';

const FlashcardList = ({ category }) => {
  const allFlashcards = [
    {
      "category": "Initiation",
      "question": "	Project Charter",
      "answer": "A formal document that authorizes the project, outlining objectives, scope, stakeholders, and key deliverables. It provides the project manager with the authority to apply organizational resources to project activities."
    },
    {
      "category": "Initiation",
      "question": "Stakeholder Identification",
      "answer": "The process of identifying all individuals, groups, or organizations that could impact or be impacted by the project. This includes understanding their needs and expectations."
    },
    {
      "category": "Initiation",
      "question": "Business Case",
      "answer": "A document that justifies the need for a project, outlining the benefits, costs, risks, and alignment with strategic objectives. It provides the rationale for initiating a project."
    },
    {
      "category": "Initiation",
      "question": "Assumptions Log",
      "answer": "A document that captures all assumptions and constraints identified during the project initiation phase. These assumptions are factors considered to be true without proof during planning."
    },
    {
      "category": "Initiation",
      "question": "Feasibility Study",
      "answer": "An analysis that assesses the practicality and viability of a proposed project, considering factors like cost, time, technology, and legal constraints"
    },
    {
      "category": "Initiation",
      "question": "Project Scope Statement",
      "answer": "A detailed description of the project’s scope, including deliverables, boundaries, and acceptance criteria. It helps in defining what is in scope and out of scope for the project."
    },
    {
      "category": "Initiation",
      "question": "Initial Risk Identification",
      "answer": "The process of identifying potential risks that could affect the project. These risks are documented in a risk register and considered during project planning."
    },
    {
      "category": "Initiation",
      "question": "Product Vision",
      "answer": "A high-level description of the product to be developed, focusing on the value it brings to the customer. It serves as a guide for the project team throughout the agile project lifecycle."
    },
    {
      "category": "Initiation",
      "question": "Epic",
      "answer": "A large user story that cannot be completed in a single iteration or sprint. Epics are broken down into smaller user stories that can be completed within a sprint."
    },
    {
      "category": "Initiation",
      "question": "User Story",
      "answer": "A short, simple description of a feature from the perspective of the user."
    },
    {
      "category": "Initiation",
      "question": "Sprint Goal",
      "answer": "A short statement that describes the purpose of a sprint and what the team aims to achieve during that sprint. It provides direction and focus for the team."
    },
    {
      "category": "Initiation",
      "question": "Backlog Grooming",
      "answer": "The ongoing process of refining the product backlog, ensuring that user stories are clear, detailed, and prioritized. Also known as backlog refinement"
    },
    {
      "category": "Initiation",
      "question": "Definition of Done (DoD)",
      "answer": "A series of activities that use input(s) to produce output(s), utilizing proper tools and techniques."
    },
    {
      "category": "Initiation",
      "question": "What are Project Management Process Groups?",
      "answer": "Group of project management processes achieving specific project objectives."
    },
    {
      "category": "Initiation",
      "question": "What is a Project Management Knowledge Area?",
      "answer": "Area of project management defined by its knowledge requirement."
    },
    {
      "category": "Initiation",
      "question": "What is Tailoring?",
      "answer": "Selection of appropriate project management processes to effectively manage a project."
    },
    {
      "category": "Initiation",
      "question": "What is a Project Management Office?",
      "answer": "A group in the organization responsible for standardization of processes, governance, and facilitation of resources, methodologies, and tools and techniques."
    },
    {
      "category": "Initiation",
      "question": "Who is a Project Manager?",
      "answer": "The person assigned to lead the team responsible for carrying out the project activities."
    },
    {
      "category": "Initiation",
      "question": "Who is a Functional Manager?",
      "answer": "The person assigned to lead the functional activities of the human resources."
    },
    {
      "category": "Initiation",
      "question": "Who is an Operations Manager?",
      "answer": "The person assigned with the responsibility to ensure efficient business operations."
    },
    {
      "category": "Initiation",
      "question": "What is Leadership?",
      "answer": "The knowledge, skills, and behaviors needed to guide, motivate, and direct a team towards attainment of objectives."
    },
    {
      "category": "Initiation",
      "question": "What are Flowcharts?",
      "answer": "The sequence of steps that transforms one or more inputs into one or more outputs."
    },
    
      
      {
        "category": "Planning",
        "question": "Project Management Plan",
        "answer": "A comprehensive document that integrates and consolidates all subsidiary plans and baselines, guiding the execution and control of the project."
      },
      {
        "category": "planning",
        "question": "Scope Management Plan",
        "answer": ": A component of the project management plan that describes how the project scope will be defined, validated, and controlled."
      },
      {
        "category": "Planning",
        "question": "Work Breakdown Structure (WBS)",
        "answer": "A hierarchical decomposition of the total scope of work to accomplish the project objectives and create deliverables. Each level of the WBS represents a smaller, more detailed piece of the project work."
      },
      {
        "category": "Planning",
        "question": "Schedule Management Plan",
        "answer": "A component of the project management plan that establishes the criteria and activities for developing, monitoring, and controlling the project schedule."
      },
      {
        "category": "Planning",
        "question": "Cost Management Plan",
        "answer": "A component of the project management plan that outlines how project costs will be estimated, budgeted, managed, monitored, and controlled."
      },
      {
        "category": "Planning",
        "question": "Quality Management Plan",
        "answer": "A document that describes how the project management team will implement the organization’s quality policy, addressing quality control, assurance, and improvement throughout the project."
      },
      {
        "category": "Planning",
        "question": "Resource Management Plan",
        "answer": "A component of the project management plan that provides guidance on how project resources (human, equipment, materials) will be estimated, acquired, managed, and controlled."
      },
      {
        "category": "Planning",
        "question": "Risk Management Plan",
        "answer": "A component of the project management plan that outlines how risk management activities will be structured and performed, including risk identification, analysis, response planning, and monitoring."
      },
      {
        "category": "Planning",
        "question": "Communication Management Plan",
        "answer": "A component of the project management plan that describes how project communications will be planned, structured, monitored, and controlled."
      },
      {
        "category": "Planning",
        "question": "Stakeholder Engagement Plan",
        "answer": "A component of the project management plan that identifies the strategies and actions required to effectively engage stakeholders throughout the project lifecycle."
      },
      {
        "category": "Planning",
        "question": "Procurement Management Plan",
        "answer": "A component of the project management plan that describes how procurement processes will be managed, including contract management, vendor selection, and procurement strategy."
      },
      {
        "category": "Planning",
        "question": "Change Management Plan",
        "answer": "A plan that defines how changes will be identified, evaluated, and managed throughout the project. It includes processes for change control and impact assessment."
      },
      {
        "category": "Planning",
        "question": "Baseline",
        "answer": "The approved version of a work product that can only be changed through formal change control procedures and is used as a basis for comparison. Common baselines include scope, schedule, and cost baselines."
      },
      {
        "category": "Planning",
        "question": "Performance Measurement Baseline (PMB)",
        "answer": "An integrated scope-schedule-cost plan for the project work against which project execution is compared to measure and manage performance."
      },
      {
        "category": "Planning",
        "question": "Network Diagram",
        "answer": "A graphical representation of the project’s activities and the logical relationships (dependencies) among them. Used to help schedule activities in the correct sequence."
      },
      {
        "category": "Execution",
        "question": "What is Project Quality Management?",
        "answer": "Managing the processes and activities regarding planning, managing and controlling project and product quality requirements."
      },
      {
        "category": "Execution",
        "question": "What are Ishikawa/Fish-Bone diagrams?",
        "answer": "Linking the undesirable effects to the assignable cause upon which the project team should implement corrective actions."
      },
      {
        "category": "Execution",
        "question": "What are Histograms?",
        "answer": "A special form of bar chart that are used to describe the central tendency, dispersion, and shape of a statistical distribution."
      },
      {
        "category": "Execution",
        "question": "What are Scatter Diagrams?",
        "answer": "Plot ordered pairs (X, Y) that seek to explain a change in the dependent variable, Y, in relationship to a change observed in the corresponding independent variable, X."
      },
      {
        "category": "Execution",
        "question": "What are Quality Reports?",
        "answer": "A document that records all quality-related issues escalated by the team, recommendations for the process, corrective actions, and the summary of control quality findings."
      },
      {
        "category": "Execution",
        "question": "What are Test and Evaluation Documents?",
        "answer": "Documents that are inputs to the Control Quality process and are used to evaluate the achievements of quality objectives."
      },
      {
        "category": "Execution",
        "question": "What is Project Resource Management?",
        "answer": "Management of processes to identify, acquire, and manage resources needed for successful completion of the project."
      },
      {
        "category": "Execution",
        "question": "What is a Hierarchical Organization Structure?",
        "answer": "An organizational structure where every entity in the organization, except one, is subordinate to a single other entity."
      },
      {
        "category": "Execution",
        "question": "What is an Organization Breakdown Structure?",
        "answer": "A breakdown structure that demonstrates Organizational Department, Units, teams, etc."
      },
      {
        "category": "Execution",
        "question": "What is Project Communication Management?",
        "answer": "Management of processes to meet Project and Stakeholders' information needs, through development of artifacts and implementation of activities to achieve information exchange."
      },
      {
        "category": "Execution",
        "question": "What is Project Risk Management?",
        "answer": "Management of processes to increase the probability and impact of positive risks and to decrease the probability and impact of negative risks."
      },
      {
        "category": "Execution",
        "question": "What is a Risk Management Plan?",
        "answer": "A plan that describes how risk management activities will be structured and performed."
      },
      {
        "category": "Execution",
        "question": "What is Project Procurement Management?",
        "answer": "Management of processes necessary to purchase or acquire products, services, or results needed from outside the project team."
      },
      {
        "category": "Execution",
        "question": "What is a Scope Baseline?",
        "answer": "A baseline that contains Scope statement, WBS, WBS dictionary."
      },
      {
        "category": "Execution",
        "question": "What is Project Stakeholder Management?",
        "answer": "Management of processes required to identify stakeholders, to analyze their expectations and impact, and to develop strategies for effective engagement."
      },
      {
        "category": "Execution",
        "question": "What is Activity Duration?",
        "answer": "The time in calendar units between start and finish of a scheduled activity."
      },
      {
        "category": "Execution",
        "question": "What are Agreements?",
        "answer": "Any communications or documents that define the initial intentions of the project. E.g., Contract, MoU, SLA, etc."
      },
      {
        "category": "Execution",
        "question": "What are Analytical Techniques?",
        "answer": "Various techniques used to evaluate, analyze, or forecast potential outcomes based on possible variations of the project or environmental variables and their relationship with other variables."
      },
      {
        "category": "Execution",
        "question": "What is a Baseline?",
        "answer": "Approved version of a work product that can be changed only through formal change control procedures and is used as a basis for comparison to actual results."
      },
      {
        "category": "Execution",
        "question": "What is a Business Case?",
        "answer": "A documented economic feasibility study used to establish the validity of a selected component lacking sufficient definition and that is used as a basis for authorization of further project management activities."
      },
      {
        "category": "Execution",
        "question": "What is Business Value?",
        "answer": "The net quantifiable benefit derived from a business endeavor."
      },
      {
        "category": "Execution",
        "question": "What is Change Control?",
        "answer": "A process whereby modifications to documents, deliverables, or baselines associated with the projects are identified, documented, approved, or rejected."
      },
      {
        "category": "Execution",
        "question": "What is a Change Management Plan?",
        "answer": "A component of the Project Management plan that establishes the change control board, documents the extents of authority, and describes how the change control system will be implemented."
      },
      {
        "category": "Execution",
        "question": "What is a Configuration Management Plan?",
        "answer": "A component of the Project Management plan that describes how to identify and account for project artifacts under configuration control, and how to record and report changes to them."
      },
      {
        "category": "Execution",
        "question": "What are Ground Rules?",
        "answer": "Expectations regarding acceptable behavior by project team members."
      },
      {
        "category": "Execution",
        "question": "What are Matrix Organizations?",
        "answer": "Any organization in which the project manager shares responsibilities with the functional managers for assigning priorities and for directing the work of persons assigned to the projects."
      },
      {
        "category": "Execution",
        "question": "What is a Performance Measurement Baseline?",
        "answer": "Integrated scope, schedule, or cost baselines used for comparison to manage, measure, and control project execution."
      },
      {
        "category": "Execution",
        "question": "What is a Risk Breakdown Structure?",
        "answer": "A hierarchical representation of potential sources of risk."
      },
 
   
          {
           "category": "Monitoring & Controlling",
            "question": "What is trend analysis in project management?",
            "answer": "Trend analysis examines project performance over time to determine if performance is improving or deteriorating."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What is rolling wave planning?",
            "answer": "Rolling wave planning is a technique where work to be accomplished in the near term is planned in detail, while work in the future is planned at a high level."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What are control accounts?",
            "answer": "Control accounts are control points established at the work package level, which is one level above the work package."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What does Finish to Start (FS) relationship mean?",
            "answer": "In a Finish to Start (FS) relationship, a successor activity cannot start until a predecessor activity has finished."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "Define Start to Start (SS) relationship.",
            "answer": "In a Start to Start (SS) relationship, a successor activity cannot start until a predecessor activity has started."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What is the meaning of Start to Finish (SF) relationship?",
            "answer": "In a Start to Finish (SF) relationship, a successor activity cannot finish until a predecessor activity has started."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "Explain Finish to Finish (FF) relationship.",
            "answer": "In a Finish to Finish (FF) relationship, a successor activity cannot finish until a predecessor activity has finished."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What are Mandatory Dependencies?",
            "answer": "Mandatory Dependencies are legally or contractually required or inherent in the nature of the work."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What are Discretionary Dependencies?",
            "answer": "Discretionary Dependencies are preferred logic based on knowledge of best practices within a particular application area."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What are External Dependencies?",
            "answer": "External Dependencies are relationships between project activities and non-project activities."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What are Internal Dependencies?",
            "answer": "Internal Dependencies are precedence relationships between project activities that are generally within the project team's control."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What does Leads mean in project scheduling?",
            "answer": "Leads refer to the amount of time a successor activity can be advanced with respect to a predecessor activity."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "Define Lags in project scheduling.",
            "answer": "Lags refer to the amount of time a successor activity will be delayed with respect to a predecessor activity."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What is Analogous Estimating?",
            "answer": "Analogous Estimating is a technique for estimating the duration or cost of an activity or a project using historical data from a similar activity or project."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What is Parametric Estimating?",
            "answer": "Parametric Estimating uses an algorithm to calculate cost or duration based on historical data and project parameters."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What is Three-point Estimating?",
            "answer": "Three-point Estimating is a technique used to estimate cost or duration by applying an average or weighted average of optimistic, pessimistic, and most likely estimates."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "Define Most Likely Estimate.",
            "answer": "The Most Likely Estimate is the activity duration based on analysis of the realistic expectations for the activity."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What is Optimistic Estimate?",
            "answer": "The Optimistic Estimate is the activity duration based on analysis of the best-case scenario for the activity."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What does Pessimistic Estimate mean?",
            "answer": "The Pessimistic Estimate is the activity duration based on analysis of the worst-case scenario for the activity."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What is Bottom-up Estimating?",
            "answer": "Bottom-up Estimating is a method of estimating project duration by aggregating the estimates of the lower-level components of the Work Breakdown Structure (WBS)."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "Explain Critical Path Method (CPM).",
            "answer": "The Critical Path Method is used to estimate the minimum project duration and determine the amount of scheduling flexibility on the logical network paths within the schedule model."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What is Total Float?",
            "answer": "Total Float is the amount of time that a schedule activity can be delayed or extended from its early start date without delaying the project finish date."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "Define Resource Leveling.",
            "answer": "Resource Leveling is a technique in which start and finish dates are adjusted based on resource constraints to balance the demand for resources with the available supply."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What is Resource Smoothing?",
            "answer": "Resource Smoothing adjusts the activities of a schedule model so that the requirements for resources do not exceed predefined limits."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What is What-if Scenario Analysis?",
            "answer": "What-if Scenario Analysis is the process of evaluating scenarios to predict their effects, positively or negatively, on project activities."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "Explain Simulation in project management.",
            "answer": "Simulation involves calculating multiple project durations with different sets of activity assumptions, usually three-point estimates, to account for uncertainty."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What is Schedule Compression?",
            "answer": "Schedule Compression includes techniques used to shorten the project duration without reducing the project scope."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What does Crashing mean in project scheduling?",
            "answer": "Crashing is a technique used to shorten the schedule duration for the least incremental cost by adding resources."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "Define Fast Tracking.",
            "answer": "Fast Tracking is a technique in which phases or activities normally done in sequence are performed in parallel."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What are Bar Charts?",
            "answer": "Bar Charts represent schedule information with activities listed on the vertical axis, dates on the horizontal axis, and durations shown as horizontal bars."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What are Milestone Charts?",
            "answer": "Milestone Charts identify the scheduled start or completion of major deliverables and key external interfaces."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What is Earned Value Analysis?",
            "answer": "Earned Value Analysis is used to assess the magnitude of variation from the original schedule baseline."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What is an Iteration Burndown Chart?",
            "answer": "An Iteration Burndown Chart tracks the work that remains to be completed in the iteration backlog."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "Define Resource Optimization.",
            "answer": "Resource Optimization involves scheduling activities and resources considering both resource availability and project time."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What is a Cost Estimate?",
            "answer": "A Cost Estimate is a quantitative assessment of the likely costs for resources required to complete the activity."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What is Planned Value?",
            "answer": "Planned Value is the authorized budget assigned to scheduled work."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "Define Earned Value.",
            "answer": "Earned Value is a measure of the work performed expressed in terms of the budget authorized to that work."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What is Actual Cost?",
            "answer": "Actual Cost is the realized cost incurred for work performed on an activity during a specific time period."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "What does Cost Variance represent?",
            "answer": "Cost Variance represents the amount of budget deficit or surplus at a given point in time, expressed as the difference between earned value and actual cost."
          },
          {
           "category": "Monitoring & Controlling",
            "question": "Explain Schedule Variance.",
            "answer": "Schedule Variance is a metric that indicates whether the project is behind or ahead compared to the schedule baseline."
          },
          
            {
              "category": "Closing",
              "question": "What is an Imposed Date?",
              "answer": "A fixed date imposed on a schedule activity or schedule milestone, usually in the form of a 'start no earlier than' or 'finish no later than'."
            },
            {
              "category": "Closing",
              "question": "What is an Incentive Fee?",
              "answer": "A set of financial incentives related to cost, schedule, or technical performance of the seller."
            },
            {
              "category": "Closing",
              "question": "What are Influence Diagrams?",
              "answer": "A graphical representation of situations showing causal influences, time ordering of events, and other relationships among variables and outcomes."
            },
            {
              "category": "Closing",
              "question": "What is an Invitation for Bid?",
              "answer": "A Request for Proposal."
            },
            {
              "category": "Closing",
              "question": "What is a Management Reserve?",
              "answer": "An amount of the project budget or project schedule held outside the performance measurement baseline for management control purposes, reserved for unforeseen work within the scope of the project."
            },
            {
              "category": "Closing",
              "question": "What is a Master Schedule?",
              "answer": "A summary level project schedule that identifies the major deliverables, work breakdown structure components, and key schedule milestones."
            },
            {
              "category": "Closing",
              "question": "What is Path Convergence?",
              "answer": "A relationship in which a scheduled activity has more than one predecessor."
            },
            {
              "category": "Closing",
              "question": "What is Path Divergence?",
              "answer": "A relationship in which a scheduled activity has more than one successor."
            },
            {
              "category": "Closing",
              "question": "What are Procurement Audits?",
              "answer": "The review of contract and contracting processes for completeness, accuracy, and effectiveness."
            },
            {
              "category": "Closing",
              "question": "What are RACI Charts?",
              "answer": "A common type of responsibility assignment matrix that uses responsible, accountable, consult, and inform statuses to define the involvement of stakeholders in project activities."
            },
            {
              "category": "Closing",
              "question": "What is Risk Categorization?",
              "answer": "Organization by sources of risk, the area of the project affected, or other useful categories to determine areas of the project most exposed to the effects of uncertainty."
            },
            {
              "category": "Closing",
              "question": "What is a Risk category?",
              "answer": "A group of potential causes of risks."
            },
            {
              "category": "Closing",
              "question": "What is Risk Data Quality Assessment?",
              "answer": "A technique to evaluate the degree to which the data about risks is useful for risk management."
            },
            {
              "category": "Closing",
              "question": "What is Risk Enhancement?",
              "answer": "A risk response strategy whereby the team acts to increase the probability of occurrence or impact of an opportunity."
            },
            {
              "category": "Closing",
              "question": "What is Risk Escalation?",
              "answer": "A risk response strategy whereby the team acknowledges that the risk is outside of its sphere of influence and shifts the ownership of the risks to a higher level of the organization where it is more effectively managed."
            },
            {
              "category": "Closing",
              "question": "What is Risk Exploiting?",
              "answer": "A risk response strategy whereby the team acts to ensure that an opportunity occurs."
            },
            {
              "category": "Closing",
              "question": "What is Risk Exposure?",
              "answer": "An aggregate measure of the potential impact of all risks at any given point in time in a project, program, or portfolio."
            },
            {
              "category": "Closing",
              "question": "What is Risk Mitigation?",
              "answer": "A risk response strategy whereby the team acts to decrease the probability of occurrence or impact of a threat."
            },
            {
              "category": "Closing",
              "question": "Who is the Risk Owner?",
              "answer": "The person responsible for monitoring the risks and for selecting and implementing an appropriate risk response strategy."
            },
            {
              "category": "Closing",
              "question": "What is a Risk Threshold?",
              "answer": "The measure of acceptable variation around an objective that reflects the risk appetite of the organization and stakeholders."
            },
            {
              "category": "Closing",
              "question": "What is Risk Transference?",
              "answer": "A risk response strategy whereby the project team shifts the impact to a third party, together with ownership of the response."
            },
            {
              "category": "Closing",
              "question": "What is a Time and Material Contract?",
              "answer": "A type of contract that is a hybrid contractual agreement containing aspects of both cost-reimbursable and fixed-price contracts."
            },
            {
              "category": "Closing",
              "question": "What is a Threshold?",
              "answer": "A predetermined value of a measurable that represents a limit that requires actions to be taken if reached."
            },
            {
              "category": "Closing",
              "question": "What is the To-Complete Performance Index?",
              "answer": "A measure of the cost performance required to be achieved with the remaining resources to meet a specified management goal, expressed as the ratio of cost to finish the outstanding work to remaining budget."
            },
            {
              "category": "Closing",
              "question": "What is a Trigger Condition?",
              "answer": "An event or situation that indicates that a risk is about to occur."
            },
            {
              "category": "Closing",
              "question": "What is Unanimity?",
              "answer": "The agreement by everyone in the group on a single course of action."
            },
            {
              "category": "Closing",
              "question": "What is the Voice of the Customer?",
              "answer": "A planning technique used to provide products, services, and results that truly reflect customer requirements by translating those customer requirements into the appropriate technical requirements for each phase or project product development."
            },
            {
              "category": "Closing",
              "question": "What is Forming?",
              "answer": "The phase where team members meet and learn about the project and their formal roles and responsibilities."
            },
            {
              "category": "Closing",
              "question": "What is Storming?",
              "answer": "The team begins to address the project work, team decisions, and the project management approach."
            },
            {
              "category": "Closing",
              "question": "What is Norming?",
              "answer": "In this phase, team members begin to work together and adjust their work habits and behaviors to support the team."
            },
            {
              "category": "Closing",
              "question": "What is Performing?",
              "answer": "The team reaching the performing stage works as a well-organized unit. They are interdependent and work through issues smoothly and effectively."
            },
            {
              "category": "Closing",
              "question": "What is Adjourning?",
              "answer": "The team completes work and moves on from the project - this is the project closure phase."
            },
            {
              "category": "Closing",
              "question": "What does 'Lightweight' mean?",
              "answer": "'Lightweight' means that the overhead of the process is kept as small as possible, to maximize the amount of productive time available for getting useful work done."
            },
            {
              "category": "Closing",
              "question": "What are Automated Builds?",
              "answer": "Development of software that is regularly and automatically compiled, built, deployed, and tested."
            },
            {
              "category": "Closing",
              "question": "What is Continuous Integration?",
              "answer": "Integration activity in which development teams input their code into the system several times throughout the day."
            },
            {
              "category": "Closing",
              "question": "What is an Artifact?",
              "answer": "The product backlog, the sprint backlog, and the product increment are the three Scrum artifacts within a project."
            },
            {
              "category": "Closing",
              "question": "What is the Definition of Ready?",
              "answer": "A team's checklist for user-centric requirements that has all the information the team needs to be able to begin working on it."
            },
            {
              "category": "Closing",
              "question": "What is the Definition of Done?",
              "answer": "A team's checklist of all the criteria required to be met so that a deliverable can be considered ready for customer use."
            },
            {
              "category": "Closing",
              "question": "What is DevOps?",
              "answer": "A collection of practices for creating a smooth flow of delivery by improving collaboration between development and operations staff."
            },
            {
              "category": "Closing",
              "question": "What is T-shirt Sizing?",
              "answer": "One of the Story points sizing techniques used to estimate user stories usually in agile projects."
            },
            {
              "category": "Closing",
              "question": "What are Story Points?",
              "answer": "A unit of measurement of the overall effort needed to complete specific requirements of a product backlog item."
            },
             
            ];

            const flashcards = category ? allFlashcards.filter(card => card.category.toLowerCase() === category.toLowerCase()) : allFlashcards;

  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 1;
  const [score, setScore] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Reset state when category changes
    setScore(0);
    setHasAnswered(false);
    setIsFlipped(false);
    setCurrentPage(0); // Reset page to 0 when category changes
  }, [category]);

  useEffect(() => {
    // Store score in local storage
    localStorage.setItem(`score-${category}`, score);
  }, [score, category]);

  const handleNextClick = () => {
    if (!hasAnswered) {
      setShowPopup(true); // Show popup if no response is selected
    } else {
      if ((currentPage + 1) * cardsPerPage < flashcards.length) {
        setCurrentPage(currentPage + 1);
        setIsFlipped(false);
        setHasAnswered(false);
        setShowPopup(false); // Hide popup when moving to the next card
      }
    }
  };

  const handlePreviousClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setIsFlipped(false);
      setHasAnswered(false);
      setShowPopup(false); // Hide popup when moving to the previous card
    }
  };

  const handleKnowClick = () => {
    if (!hasAnswered) {
      setScore(score + 1);
      setHasAnswered(true);
      setShowPopup(false); // Hide popup when a response is selected
    }
    setIsFlipped(true);
  };

  const handleDontKnowClick = () => {
    setIsFlipped(true);
    setHasAnswered(true);
    setShowPopup(false); // Hide popup when a response is selected
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const currentFlashcards = flashcards.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage);

  return (
    <div className="container-full-height">
      <div className="row mb-4">
        {currentFlashcards.map((flashcard, index) => (
          <div key={index} className="col col-md-8 col-lg-6">
            <FlashcardItem
              serialNumber={currentPage * cardsPerPage + index + 1}
              question={flashcard.question}
              answer={flashcard.answer}
              flipped={isFlipped}
              toggleFlip={() => setIsFlipped(!isFlipped)}
            />
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col text-center">
          <div className="btn-container">
            <button
              onClick={handlePreviousClick}
              className="btn-prev-next"
            >
              Previous
            </button>
            <button
              onClick={handleKnowClick}
              className="btn-know"
            >
              I Know This
            </button>
            <button
              onClick={handleDontKnowClick}
              className="btn-dont-know"
            >
              I Don't Know This
            </button>
            <button
              onClick={handleNextClick}
              className="btn-prev-next"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center margin-top-20">
          <h4>Your Score: {score} out of {flashcards.length}</h4>
        </div>
      </div>

      {/* Popup Component */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Please choose a response before moving to the next card.</h2>
            <button onClick={handleClosePopup} className="btn-popup-close">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlashcardList;