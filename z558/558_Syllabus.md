# Syllabus for GEOL 558 Earth Resource Data Science II: Applications and Machine-Learning

## Course Description:
Hands-on applications (use cases) for Earth resource data science, with examples from the petroleum and minerals industries as well as water resource monitoring and remote-sensing of Earth change. Students are encouraged to provide their own datasets to enable real-world application of the concepts discussed. This course will use `python`, a modern objective programming language utilized in many earth-science applications, as well as Jupyter notebooks for testing and reporting.

While this course will utilize examples from the petroleum industry; any earth scientist will benefit from the geospatial and subsurface data analysis techniques. Applicable fields of earth-science include:
- petroleum geologists, both conventional and unconventional-focused
- economic geologists (mining, ore-deposits, critical minerals)
- geological engineers / engineering geologists
- environmental geologists (e.g., remote-sensing, land-use change)
- hydro-geologists and hydrologists (water resources)
- geomorphologists (sand and water resources)

## Course goals and learning objectives:
- Digitalization of legacy data and integration with modern, digital data (examples using core data from North Sea oilfields)
- Data mining, web-APIs, web-scraping, regular expressions, and scheduled tasks to automatically update a dashboard with web-sourced data (examples using Colorado oil production data, river hydrograph data, EIA energy data)
- Machine-learning, including unsupervised (e.g., clustering), supervised (e.g., decision-trees), and deep-learning (e.g., neural-network) models. Example datasets include well-log data and geochemical core-scanner data.
- Dive into deep learning: methods, utility, interpretability, and pitfalls (examples using well-log data)
- For the final project, students will apply these techniques on their own dataset in order to solve a real-world problem

## Other details

### Prerequisites
GEOL 557 or DSCI 403

### Required Technology:
TBA

### Profile in Canvas:
As part of the learning experience at the Colorado School of Mines, our class will be utilizing online learning resources and experiences through the Canvas learning management system.  In order to help build community in this online learning environment, you are encouraged to upload your profile picture to Canvas.  Photos should be similar to the photos taken for passports or state identification cards.

### Assessments
1.	Weekly quizzes and code reviews (50%)
2.	Final project (50%)

### Useful links
- TBA

# Schedule

## Week 1 - Data Munging
- How to deal with messy, real-world data
- Digitalization of legacy datasets
  - combining with modern data in a sensible way

## Week 2 - Data Mining and web-API development
- automated dashboard updates using web APIs
- intro to web scraping

## Week 3 - Geospatial data
- scrape data from websites to build a GIS project
- image analysis using scikit-image (for satellite imagery)

## Week 4 - Machine-learning for earth-science data
- Unsupervised vs. supervised vs. deep
- Training data and model interpretability
- 80% of the work is building the dataset
- scikit-learn, tensorflow, pytorch introduction

## Week 5 - Unsupervised machine-learning
- Model Architectures
- Example models, including:
   - logistic regression
   - Clustering using:
    - hierarchical methods
    - K-means
    - principal component analysis
    - factor analysis

## Week 6 - Supervised machine-learning
- Classification vs. regression
- Model Architectures and parameters
  - cross-validation
  - gradient descent
  - accuracy vs F1 vs recall vs precision
- Example models, including:
  - random forest
  - decision trees
  - gradient-boosted trees (AdaBoost, XGBoost)

## Week 7 - Deep learning
- Architectures of neural networks
- Example models, including CNN, RNN/LSTM,

## Week 8
Final project, where students munge a real-world dataset and perform a comparative analysis of unsupervised and supervised ML techniques

# Important things

## Expectations of online etiquette or netiquette: (if appropriate)
Here are few do's and don'ts about communicating in your course through emails or in online discussion forums:
-	Do…
  - Ask questions and engage in conversations as often as possible—feel free to contact the instructor via the discussion forum for questions or via email or other communication.
  - Be patient and respectful of others and their ideas and opinions they post online.
  -	Remember to be thoughtful and use professional language. Keep in mind that things often come across differently in written text, so review your writing before posting.
  - Be prepared for some delays in response time, as "virtual" communication tends to be slower than "face-to-face" communication.
  -	Contact the instructor if you feel that inappropriate content or behavior has occurred as part of the course.
 -	Check the syllabus and course policies stated by your instructor to know what to expect about your instructor's turnaround time for responding.
- Do NOT…
  - Use inappropriate language—this includes, but is not limited to, the use of curse words, swearing, or language that is derogatory.
  -	Post inappropriate materials—for example, accidentally posting/showing a picture that is not appropriate for the course content.
  -	Post in ALL CAPS, as this is perceived as shouting and avoid abbreviations and informal language ("I'll C U L8R").
  -	Send heated messages even if you are provoked. Likewise, if you should happen to receive a heated message, do not respond to it.
  -	Send an email or post to the entire class, unless you feel that everyone must read it.

## Diversity and Inclusion:
At Colorado School of Mines, we understand that a diverse and inclusive learning environment inspires creativity and innovation, which are essential to the engineering process. We also know that in order to address current and emerging national and global challenges, it is important to learn with and from people who have different backgrounds, thoughts, and experiences.
Our students represent every state in the nation and more than 90 countries around the world, and we continue to make progress in the areas of diversity and inclusion by providing Diversity and Inclusion programs and services to support these efforts. https://www.mines.edu/about/diversity-and-inclusion/

## Disability Support Services:
The Colorado School of Mines is committed to ensuring the full participation of all students in its programs, including students with disabilities. If you anticipate or experience any barriers to learning in this course, please feel welcome to discuss your concerns with me. Students with disabilities may also wish to contact Disability Support Services (DSS) to discuss options to removing barriers in this course, including how to register and request official accommodations. Please visit their website at disabilities.mines.edu for contact and additional information.  If you have already been approved for accommodations through DSS, please meet with me at your earliest convenience so we can discuss your needs in this course.

## Accessibility within Canvas:
Read the Accessibility Statement from Canvas to see how the learning management system at the Colorado School of Mines is committed to providing a system that is usable by everyone. The Canvas platform was built using the most modern HTML and CSS technologies, and is committed to W3C's Web Accessibility Initiative and Section 508 guidelines. https://www.canvaslms.com/accessibility

## Discrimination, Harassment, and Title IX:
All learning opportunities at Mines, including this course, require a safe environment for everyone to be productive and able to share and learn without fear of discrimination or harassment. Mines’ core values of respect, diversity, compassion, and collaboration will be honored in this course, and the standards in this class are the same as those expected in any professional work environment. (More information can be found here http://inside.mines.edu/UserFiles/File/FacultySenate/Documents/ValuesAndAspirationsStatement2-14-17.pdf) Discrimination or harassment of any type will not be tolerated. As a participant in this course, we expect you to respect your instructor and your classmates. As your instructor, it is my responsibility to foster a learning environment that supports diversity of thoughts, perspectives and experiences, and honors your identities.  To help accomplish this:
- Course rosters are provided to the instructor with the student’s legal name. I will honor your request to address you by a preferred name or gender pronoun. Please advise me of this preference early in the semester so that I may make appropriate changes to my records.
-	If something is said or done in this course (by anyone, including myself) that made you or others feel uncomfortable, or if your performance in the course is being impacted by your experiences outside of the course, please report it to:
  -	Me (if you are comfortable doing so)
  -	Wellness Center - Counseling (https://www.mines.edu/counseling-center/)
  -	Speak Up (https://www.mines.edu/speak-up/) - Anonymous Option
In this course, we will cultivate a community that supports survivors, prevents interpersonal violence, and promotes a harassment free environment. Title IX and Colorado State law protects individuals from discrimination based on sex and gender in educational programs and activities. Mines takes this obligation seriously and is committed to providing a campus community free from gender and sex-based discrimination. Discrimination, including sexual harassment, sexual violence, dating violence, domestic violence, and stalking, is prohibited and will not be tolerated within the Mines campus community. If these issues have affected you or someone you know, you can access the appropriate resources here: http://www.mines.edu/title-ix/. You can also contact the Mines Title IX Coordinator, Camille Torres, at 303.384.2124 or titleix@mines.edu for more information.
It's on us, all of the Mines community, to engineer a culture of respect.

## CARE @ Mines:
If you feel overwhelmed, anxious, depressed, distressed, mentally or physically unhealthy, or concerned about your wellbeing overall, there are resources both on- and off-campus available to you. If you need assistance, please ask for help form a trusted faculty or staff member, fellow student, or any of the resources below. As a community of care, we can help one another get through difficult times. If you need help, reach out. If you are concerned for another student, offer assistance and/or ask for help on their behalf. Students seeking resources for themselves or others should visit care.mines.edu.
Additional suggestions for referrals for support, depending on comfort level and needs include:
-	CARE at Mines: care.mines.edu for various resources and options, or to submit an online “CARE report” about someone you’re concerned about, or email care@mines.edu
-	CASA - https://www.mines.edu/casa/ for academic advising, tutoring, academic support, and academic workshops
-	Counseling Center – https://www.mines.edu/counseling-center/ or students may call 303-273-3377 to make an appointment. There are also online resources for students on the website. Located in the Wellness Center 2nd floor. Located at 1770 Elm St. (photo below)  
-	Health Center - https://www.mines.edu/student-health/ or students may call 303-273-3381 for appointment. Located in Wellness Center 1st floor.
-	Colorado Crisis Services - For crisis support 24 hrs/7 days, either by phone, text, or in person, Colorado Crisis Services is a great confidential resource, available to anyone. http://coloradocrisisservices.org , 1-844-493-8255, or text “TALK” to 38255. Walk-in location addresses are posted on the website.
-	Food and/or Housing - Any student who faces challenges securing their food or housing and believes this may affect their performance in the course is urged to contact the Dean of Students for support. Furthermore, please notify your professor if you are comfortable in doing so. This will enable your professor to provide resources that may be available.
All of these options are available for free for students. The Counseling Center, Health Center, and Colorado Crisis Services are confidential resources. The Counseling Center will also make referrals to off-campus counselors, if preferred.
In an emergency, you should call 911, and they will dispatch a Mines or Golden PD officer to assist.

## Absence Policy:
The Student Absences webpage outlines CSM's policy regarding student absences. It contains information and documents to obtain excused absences. http://inside.mines.edu/Student-Absences

**Note:** All absences that are not documented as excused absences are considered unexcused absences. Faculty members may deny a student the opportunity to make up some or all of the work missed due to unexcused absence(s). However, the faculty members do have the discretion to grant a student permission to make up any missed academic work for an unexcused absence. The faculty member may consider the student's class performance, as well as their attendance, in the decision.

In the case of an absence, the student is responsible for determining what work was missed and for putting forth a good faith effort to review the material on their own.

## Policy on Academic Integrity/Misconduct:
The Colorado School of Mines affirms the principle that all individuals associated with the Mines academic community have a responsibility for establishing, maintaining an fostering an understanding and appreciation for academic integrity. In broad terms, this implies protecting the environment of mutual trust within which scholarly exchange occurs, supporting the ability of the faculty to fairly and effectively evaluate every student’s academic achievements, and giving credence to the university’s educational mission, its scholarly objectives and the substance of the degrees it awards. The protection of academic integrity requires there to be clear and consistent standards, as well as confrontation and sanctions when individuals violate those standards. The Colorado School of Mines desires an environment free of any and all forms of academic misconduct and expects students to act with integrity at all times.

Academic misconduct is the intentional act of fraud, in which an individual seeks to claim credit for the work and efforts of another without authorization, or uses unauthorized materials or fabricated information in any academic exercise. Student Academic Misconduct arises when a student violates the principle of academic integrity. Such behavior erodes mutual trust, distorts the fair evaluation of academic achievements, violates the ethical code of behavior upon which education and scholarship rest, and undermines the credibility of the university. Because of the serious institutional and individual ramifications, student misconduct arising from violations of academic integrity is not tolerated at Mines. If a student is found to have engaged in such misconduct sanctions such as change of a grade, loss of institutional privileges, or academic suspension or dismissal may be imposed.

The complete policy can be found in the Mines’ Policy Library http://inside.mines.edu/POGO-Student

## Grading Policy
UPDATE THIS Describe your grading policy, including what grades will be based upon and the grading schema. The grading policy should be clearly aligned with the learning outcomes. (Note: all courses must have a published, transparent grading policy that students can use to gauge their performance and progress in the class through the course of the semester.)

## Coursework Return Policy
UPDATE THIS Note: all courses must have a published, good-faith policy defining when homework, exams, and other graded coursework will be returned. In general, most work should be returned to students within two weeks, along with suitable materials/feedback that enable students to understand how to improve their learning/performance.

## Expectations for Participation (if appropriate)
UPDATE THIS You are expected to engage in all course activities, tasks, and assignment as an emerging professional. You are expected to spend between ##-## hours on this course each week during out-of-class time, in addition to actively participating during the class-time each week.
