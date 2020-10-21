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
1. DSCI 403
1. GEOL 557

# Schedule

## Week 1 - Data Munging
- Setting up a project https://github.com/equinor/data-science-template
- How to deal with messy, real-world data
- Digitalization of legacy datasets
  - combining with modern data in a sensible way

## Week 2 - Data Mining and web-API development
- automated dashboard updates using web APIs
- intro to web scraping
  - https://github.com/derrickturk/rrc-scraper
  -

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
- Geochronology data
  - clustering, NMF https://www.sciencedirect.com/science/article/abs/pii/S0012821X19300706
  - mixture modeling, etc.

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
- non geo data_analysis - http://archive.ics.uci.edu/ml/datasets/Census+Income

## Week 7 - Deep learning
- Architectures of neural networks
- Example models, including CNN, RNN/LSTM,
- tensorflow
- pytorch https://pytorch.org/assets/deep-learning/Deep-Learning-with-PyTorch.pdf

## Week 8
Final project, where students munge a real-world dataset and perform a comparative analysis of unsupervised and supervised ML techniques
