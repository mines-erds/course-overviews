# Syllabus for GEOL 5XX Earth Resource Data Science I: Fundamentals

A hands-on course intended to introduce basic concepts of data science as it pertains to managing surface and subsurface Earth resources, and give examples that can be used in daily geoscience workflows. This course will use python, a modern objective programming language utilized in many earth-science applications, as well as Jupyter notebooks for testing and reporting.

While this course will utilize examples from the petroleum industry; any earth scientist will benefit from the geospatial and subsurface data analysis techniques. Applicable fields of earth-science include:
- petroleum geologists, both conventional and unconventional-focused
- economic geologists (mining, ore-deposits, critical minerals)
- geological engineers / engineering geologists
- environmental geologists (e.g., remote-sensing, land-use change)
- hydro-geologists and hydrologists (water resources)

## Course goals and learning objectives:
- Review of the python programing language for the earth scientist (syntax, data types, libraries, Jupyter notebooks)
- Data structures and data cleaning/munging for legacy and modern geoscience data that is often messy
- Basic and geoscience-specific python libraries for data import, analysis, and visualization, providing hands-on examples using real-world data (e.g., well logs, seismic data, time-series satellite imagery)
- Data exploration and visualization techniques
- Integration of surface and subsurface data with remote sensing, geospatial, and GIS data in the python ecosystem
- Data analysis techniques, including descriptive and comparative statistics, uncertainty, various regression models, and machine-learning (supervised and unsupervised)

**Prerequisites:** None! No prior knowledge of python or other programming languages is necessary

# Schedule

## Week 1 - Introduction
### Theory
- Why not just use Excel?
- Python lets you be more efficient
  - Automation and visualization
  - Open-source and version control

### Coding
- Google Colab intro
  - Variables (e.g., `x=2` or `state="Colorado"`)
  - simple math and text operations
  - import packages
  - follow-along notebooks
- Other things
  - Installing python and environments
  - IDEs (e.g., Atom) and Jupyter notebooks
  - Github integration

## Week 2 - `python` syntax and data types
### Theory
- data types and why they matter
- indexing

### Coding
- 0 not 1!
- array, int, float, str, list, dict, tuple, boolean
  - intro to np.ndarray here too?
- indexing and slicing
- operators (e.g., +, -, \*, /, ==, !=, <, <=)
- loops
  - for i in x,for x in range(), ;
  - pandas loops to pull out variables and plot stuff (for name, group in df.groupby('a'):)
  - projects
    - ??
    - ??

## Week 3 - **data import and munging** with `pandas`
### Theory
- How to deal with messy, real-world data
- indexing and split-apply-combine

### Coding
  - importing data into series, dataframe (index, columns, data)
  - munging (dtypes, NaNs, etc)
  - groupby (agg, sort, mean, etc.)
  - indexing ([ ], loc, iloc)
  - split-apply-combine
  - projects
    - import USGS core data
    - B-hall data and plot striplogs and GR;

## Week 4 - **visualization** with `matplotlib` and `seaborn`
### Theory
- Making beautiful plots that convey information
  - Remove to improve https://gfycat.com/improbablefemalebasenji
  - sns.jointplot(x, y, kind="kde")
- Perceptually uniform colormaps and #endtherainbow

### Coding
- plt, fig, ax, plot, scatter, text, subplot, log axes
- violin, kdeplot, jointplot, pairplot
- projects
  - well log cross plot?
  - others?

## Week 5 - descriptive and statistics with `numpy` and `scipy`
### Theory
- 1D distributions (CDF, kde, percentiles)
  - normal, log-normal, log10, log2
  KSTest and other comparative statistics
- 2D distributions and regressions

### Coding
- operations (* vs @; +=)
- np.max and argmax, percentile
- array stacking, indexing
- scipy.interpolate; scipy.stats
- projects
  - grain size
  - CDF and hist plot of any data and describe distribution with percentiles and an equation
  - cross-plot and regression
  - image analysis?

## Week 6 - geospatial data (geopandas, cartopy)
### Theory
- Projections and lat-long vs UTM
- GIS integration

### Coding
- projections
- cartopy default data (e.g., states, rivers)
- possible projects:
  - pull out lat-long from las files and use geopandas to make shp and plot
  - reproject coordinates

## Week 7 - Machine-learning
### Theory
- Do you need to?
- AI vs. ML: If it is written in Python, it's probably machine learning. If it is written in PowerPoint, it's probably AI https://twitter.com/matvelloso/status/1065778379612282885?s=20
- Unsupervised vs. supervised vs. deep
- Training data and GIGO
- Model interpretability

### Coding
- possible projects:
  - do a simple unsupervised and supervised ML model on brendon hall data
  - spotify CNN?
  - clustering with real-world data? por-perm?

## Week 8
Final project??
