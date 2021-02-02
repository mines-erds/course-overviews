# GEOL 558 Course Outline

**Earth-Resource Data Science II: Applications and Machine-Learning**

An 8 week-long asynchronous online course to apply advanced concepts of data science as it pertains to characterization, extraction, and sustainable development of surface and subsurface Earth resources, and give examples in `python` that can be used in daily geoscience workflows.

The time commitment is approximately 15 hours per week for 8 weeks.

Applicable fields of earth-science include:
- petroleum geologists (conventional and unconventional-focused)
- economic geologists (mining, ore-deposits, critical minerals)
- geological engineers / engineering geologists (construction, tunneling)
- environmental geologists (remote-sensing, land-use change)
- hydro-geologists and hydrologists (water-resources)
- geomorphologists (sand and water resources, landscape evolution)

The only necessary materials will be a computer that you have admin rights to in order to install python and its various packages.

Prerequisites:
- DSCI 403 Introduction to Data Science
- GEOL 557 Earth Resource Data Science I: Fundamentals

---

After successful completion of the course, learners will be able to:

### 1. Synthesize and analyze earth-resource data from multiple sources using python and geoscience domain knowledge, and effectively communicate your results
**Summative assessment:**
- Week 8 documentation and presentation of solo project showing data compilation, analysis, and geoscientific importance

**Formative assessment:**
- Week 1 reflection on 557 project (i.e., What went well, what would you change? What could be better given more skills?)
- Week 1 concept map for final solo project 
- Week 5 synchronous discussion of jamboard

### 2. Create a python package for earth-resource data analysis
**Summative assessments:**
- Week 4 python package creation for automating a repetitive task (group project)

#### Subthemes:
- Installing python, pip/conda, environments, IDEs, CLIs (command-line-interface)
  - Formative assessment: Week 1 and 2 exercises
- Scripts vs. functions and object-oriented programming
  - Formative assessments:
    - Week 2 create a function
    - Week 2 quiz, discussion (when is it worth it to function?), scaffolded notebooks
  - Documentation
    - Formative assessment: Week 2 package reading quiz

### 3. Construct python code to retrieve earth-resource data using APIs (application programming interfaces) and web-scraping algorithms
**Summative assessments:**
- Week 3 dataset creation that tests knowledge of APIs and web-scraping

#### Subtheme:
- APIs and requests
  - Formative assessment: Week 3 quizzes on APIs, requests, and selenium
- Web-scraping ethics
  - Formative assessment: Week 3 quiz on ethics
- What websites can be scraped? 
  - Formative assessment: Week 3 crowd-sourced list of websites that can be scraped


### 4. Develop and implement unsupervised machine-learning models for earth-resource data
**Summative assessments:**
- Week 4 notebook on unsupervised ML techniques (cluster family)

### 5. Develop and implement (i.e., test-and-train) supervised machine-learning models for earth-resource data
**Summative assessments:**
- Week 5 notebook (Supervised ML assignment)

### 6. Analyze and critique machine-learning results for earth-resource data
**Summative assessments:**
- Week 6 test on best practices (including mutliple choice and an essay)

**Formative assessments:**
- Week 6 find good and bad ML examples (with a short essay) to make a crowd-sourced list

#### Subthemes:
- Reproducibiilty
- Quality application of ML (well-log facies as a case study)
- Does your ML stink?
  - Formative assessment: Week 6 quiz on ML stink article
- Week 4 unsession about state of the art data analysis in earth-resource assessment
- Week 6 reflection from the Week 4 unsession results

---

## Weekly schedule

notes - group project makes a package with documentation and demo notebook, solo project gets data and does ML

1. installing python, pip/conda, environments, reflect on 557 project
     - time is split between python install and making a notebook/report
     - notes
        - command line cheat sheet
        - only explain environments

2. reading a package, functions vs scripts, object-oriented programming (class def), learning to be self-sufficient
     - most time is spent learning OOP, accessing methods, building functions, etc.
     - notes
        - packages that dont have documentation - how to read them?
        - how to write clean, commented code (Uncle Bob and 'black') https://youtu.be/7EmboKQH8lM
        - stack overflow should be your best friend!
        - here is how to make and deploy a package on your machine (not on pypi)
        - here is how to download a github package and install it on your machine
        - importance of open-source, and support open-source with code and maybe $$

3. APIs and web scraping (Enverus, macrostrat, EIA, COGCC)
     - most time is spent in notebooks doing stuff
     - notes
        - dont write your own web scraper, but understand basics
        - requests, selenium, direct API (EIA), token (Enverus)
        - live discussion - using html inspect element, etc.
        - ethics: make people check ToS for their website they want

4.  unsup ML
     - most time is spent in notebooks doing stuff
     - XRF from C. Bone thesis, Thomas' Lewis stuff, Cankut, other theses? Could also use https://mrdata.usgs.gov/geochem/about.php or https://www.geochron.org/gettingdata
     - notes
        - PCA, MDS, k-means, DBSCAN
        - discuss multi-dimensional data and how to reduce to a 2d plot (i.e., what are the axes on a PCA plot)
        - Making a package (group project)
          - take a repetitive task and create a function or class or package for it
          - for example, import data from a folder structure, or wrap an API for nightly updates

5. sup ML
     - most time is spent in notebooks doing stuff
     - data to use: Kansas dataset, Fryer and Jobe data, pulse neutron logs,
     - notes
        - saving model as pickle
        - transfer learning (pre-trained model, etc)

6. ML planning/whiteboarding, ML critique, and Start solo project
     - time is split between ML critique (does it pass the sniff test?) and starting final solo project (pulling data, concept map of final project)
     - notes
        - when does it make sense to talk to a real data scientist?
        - when is it worth it to use AWS vs your own machine
        - what models to use depending on data you have (sci-kit learn website)

7. Solo project work
     - most time is spent doing solo project
     - notes
        - could do a half-way update with peer review

8. peer review and wrap up
     - most time is spent peer review, fixing stuff, and final documentation
     - notes
        - collect data and packages and notebooks for open-source
