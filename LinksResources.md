# Mines-ERDS Resources for building course

This is a messy document, but has lots of good info. Will be updated irregularly.

## Books I will use:

### Open source
- Think Python https://greenteapress.com/wp/think-python-2e/ and https://github.com/AllenDowney/ThinkPython2
- Python for Everybody (remixed from Think Python) http://do1.dr-chuck.com/pythonlearn/EN_us/pythonlearn.pdf and https://www.py4e.com
- Automate the Boring Stuff https://automatetheboringstuff.com
- http://learnpython.org/

### Closed source
- Python for Data Analysis (google "python for data analysis book second edition pdf")
  - github repo https://github.com/wesm/pydata-book
- Python data science handbook (google "python data science handbook pdf")
  - read for free online https://jakevdp.github.io/PythonDataScienceHandbook/
  - github repo for notebooks https://github.com/jakevdp/PythonDataScienceHandbook
- Barcelona book https://github.com/DataScienceUB/introduction-datascience-python-book

## Geo-specific courses and datasets

### Geo-specific courses
- list from Matt Hall https://hackmd.io/@kwinkunks/rkFQOc3KU/edit
- Matt Bauer 1.5 hour video https://www.youtube.com/watch?v=GXMDJSRrKzw
- Pyrcz demos https://github.com/GeostatsGuy/PythonNumericalDemos
- Jesse Pisel https://github.com/jessepisel/energy_analytics/tree/master/Python%20Workflows
- Helsinki course https://geo-python.github.io/site/
- Dan Buscombe ML tutorials https://twitter.com/magic_walnut/status/1265413642788298752?s=11
- macrostrat api https://dataunderground.org/dataset/macrostrat-geologic-maps/resource/e412b05e-a45e-4809-82ab-5095ac383ddc
- Data scrapers
  - New Mexico https://github.com/jessepisel/New-Mexico-Oil-Conservation-Division
  - Colorado https://github.com/jessepisel/cogcc_scraping_python
- CSDMS portal https://csdms.colorado.edu/wiki/Labs_portal

### Datasets
- Wyoming well logs, tops, etc https://sites.google.com/a/wyo.gov/oil-and-gas/prb-study
- DZ data from Magallanes Basin
  - https://doi.org/10.1130/B31757.1 - see "Supplemental Information 2" down at the bottom. 2 tabs in that xls are high throughput and low throughput ages from Tres Pasos
- Pyrcz datasets https://github.com/GeostatsGuy/GeoDataSets
- https://github.com/yohanesnuwara/open-geoscience-repository
- https://dataunderground.org
- https://hackmd.io/iAyNR_TOSguKnlnkrY2Auw
- Netherlands data https://nlog.nl/en/data
- Earth Engine Data on deltas, waves, and tides https://jhnienhuis.users.earthengine.app
- oxygen isotope data https://doi.pangaea.de/10.1594/PANGAEA.917503 and the associated paper https://science.sciencemag.org/content/369/6509/1383
- Kaggle
  - USGS earthquakes https://www.kaggle.com/usgs/earthquake-database
  - Volcanic eruptions https://www.kaggle.com/smithsonian/volcanic-eruptions
  - Landslides after rain https://www.kaggle.com/nasa/landslide-events
    - parsing dates from these three datasets https://www.kaggle.com/rtatman/data-cleaning-challenge-parsing-dates

## Transform 2020
https://transform2020.sched.com

# Applications

## Well-log and seismic data
- well data
  - lasio
  - welly
  - check out this log 'imputer' (Didn't Ross make one too?)
    - https://github.com/mycarta/predict/blob/master/Geoscience_ML_notebook_1.ipynb and https://github.com/mycarta/predict/blob/master/Geoscience_ML_notebook_6.ipynb
  - wellpathpy https://pypi.org/project/wellpathpy/
  - FracPaQ https://github.com/DaveHealy-Aberdeen/FracPaQ
- core data
  - striplog and litholog
  - corebreakout or depstrat for advanced
- seismic and GPR
  - segyio for seismic https://github.com/equinor/segyio
  - GPRpy for GPR data https://github.com/NSGeophysics/GPRPy
  - swiss army knife https://github.com/trhallam/segysak
  - https://www.pygimli.org Geophysical Inversion Modeling Library
- other I/O
  - segy data and open-d-tect, petrel, etc. https://github.com/agile-geoscience/gio/tree/master/notebooks

## Core data
- corebreakout https://github.com/rgmyr/corebreakout
- core scanner data from Thomas Monecke? Maybe this one? https://minalyze.com
- Eagleford from Diana Acero https://www.digitalrocksportal.org/projects/258
- RealPore https://github.com/bfotland/force-hack-2019/tree/5c57f4d9f9b5b5d229144437778785083d789991
- core data preservation
  - BGS core repacking and photos https://youtu.be/HdhrOJGpy2c
  - article in Nature https://www.nature.com/articles/d41586-020-01366-w
    - popular news article https://www.washingtonpost.com/science/rock-samples-arent-archived-or-shared-they-need-to-be-geologists-warn-pointing-to-a-reproducibility-crisis/2020/05/15/aa858e06-953c-11ea-91d7-cf4423d47683_story.html

## Grain size
- SediNet
  - repo https://github.com/MARDAScience/SediNet
  - paper https://onlinelibrary.wiley.com/doi/abs/10.1002/esp.4760
- TERNARY PLOTS https://agilescientific.com/blog/2019/3/21/x-lines-of-python-ternary-diagrams

## Reservoir modeling and petrophysics
- xtgeo https://github.com/equinor/xtgeo
- geostatspy from Michael Pyrcz
- pypetrophysics https://github.com/Japhiolite/pypetrophysics
- petropy https://github.com/toddheitmann/PetroPy

## Mining data
- https://gis.colorado.gov/dnrviewer/Index.html?viewer=drms mining permit data
- https://omf.readthedocs.io/en/latest/ open mining format

## Geochronology
- detritalpy https://onlinelibrary.wiley.com/doi/full/10.1002/dep2.45
- mixture modeling code
- Sam's bayesian stuff
- see Figshare for GSA data, e.g., https://gsapubs.figshare.com/search?q=sharman

## Thin sections
- RockType funded by XStarter http://rocktype.com and https://www.xstarter.io/portfolio
- Transform 2020 talk on image recognition https://twitter.com/kwinkunks/status/1271171478940274689?s=20
- Virtual_Microscope http://www.ged.rwth-aachen.de/index.php?cat=Virtual_Microscope and https://m-a-p.expert
- thin section resources from Jae Erickson https://elearning.mines.edu/courses/554/modules

## Structural geology
- STERONETS https://github.com/joferkington/mplstereonet
- modeling gempy https://www.gempy.org/
- aspg https://github.com/ondrolexa/apsg
- https://app.visiblegeology.com/

## GIS, topography, and point cloud data
- nice tutorial on geospatial plotting https://www.earthdatascience.org/courses/use-data-open-source-python/intro-to-apis/spatial-data-using-apis/
- pyGMT Generic Mapping Toolbox https://www.pygmt.org/latest/
- pyproj projections https://github.com/kwinkunks/notebooks/blob/master/Coordinate_transformations.ipynb
- Post Storm Imagery https://github.com/UNCG-DAISY/psi-collect
- https://www.pyvista.org/projects/index.html
- landscape evolution models
  - CSDMS (runs on Binder) https://github.com/csdms/espin
  - delta RCM https://esurf.copernicus.org/articles/3/67/2015/
  - LSD topotools https://lsdtopotools.github.io
  - https://github.com/fastscape-lem nice landscape evolution model - create topo with this, then analyze? PyVista integration?
  - LandLab https://www.earth-surf-dynam.net/8/379/2020/
  - pyBadlands - see this paper https://doi.org/10.1130/G47498.1 and movies in supp data https://gsapubs.figshare.com/articles/Supplemental_Material_How_do_basin_margins_record_long-term_tectonic_and_climatic_changes_/12307454
  - Fastscape https://fastscape.org/
- relay ramps https://twitter.com/_absrp/status/1284164490787864576?s=11
- OpenTopo tools https://opentopography.org/otsoftware

## Water resources
- hydrology and climatology data for watershed analysis https://hydrodata.readthedocs.io/en/latest/
- USGS data, with notebooks https://twitter.com/hydrobeth/status/1263961044680138753

## Earthquakes
- nice time series data examples in obspy https://github.com/obspy/obspy/wiki
- CNN paper using obspy https://eartharxiv.org/nbmzt

## ML examples and resources
 - models https://twitter.com/seanjtaylor/status/1251043814715711489
 - https://developers.google.com/machine-learning/crash-course/ml-intro
 - https://benanne.github.io/2014/08/05/spotify-cnns.html
- https://d2l.ai/index.html
- sebastianraschka
  - book https://github.com/rasbt/python-machine-learning-book-3rd-edition
  - course https://github.com/rasbt/stat479-machine-learning-fs19
  - paper on model selection https://arxiv.org/pdf/1811.12808.pdf and html https://sebastianraschka.com/blog/2016/model-evaluation-selection-part1.html
  - model examples https://github.com/rasbt/deeplearning-models
- soil science deep learning https://towardsdatascience.com/deep-learning-and-soil-science-part-1-8c0669b18097
- clustering examples sklearn https://scikit-learn.org/stable/modules/clustering.html#adding-connectivity-constraints

# General
- ESPIN course https://github.com/csdms/espin/tree/main/lessons/python
- huge list of things https://github.com/amitness/learning
- 170+ exercises in python https://link.springer.com/book/10.1007%2F978-3-319-14240-1
## theory and examples
- nice thought and code examples https://medium.com/better-programming/9-skills-that-separate-a-beginner-from-an-intermediate-python-programmer-8bbde735c246

## Data types
- https://realpython.com/python-data-types/
- https://realpython.com/python-operators-expressions/

## Loops
- https://www.learnpython.org/en/Loops
- https://realpython.com/python-for-loop/

## Numpy and Scipy
- https://numpy.org/devdocs/user/quickstart.html
- https://docs.scipy.org/doc/scipy/reference/tutorial/index.html

## Stats
- https://github.com/eigenfoo/tests-as-linear nice cheatsheets too

## Colab
- importing data https://towardsdatascience.com/importing-data-to-google-colab-the-clean-way-5ceef9e9e3c8

## Other useful stuff

### Cheatsheets
- all the things https://gto76.github.io/python-cheatsheet/
- pandas https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf
- matplotlib https://github.com/matplotlib/cheatsheets

# 558 links and Stuff
- Excel ML https://www.aapg.org/career/training/in-person/short-courses/details/articleid/56388/excel-based-random-forest-machine-learning-algorithms-programming-and-application
- online course template https://course.spacy.io/ and https://ines.github.io/course-starter-python/
- deep learning interpretation paper https://arxiv.org/pdf/2004.14545.pdf and https://arxiv.org/pdf/1802.01933.pdf
- mycarta
  - ML quiz https://mycarta.wordpress.com/2019/04/26/machine-learning-quiz-part-1-of-3/
  - bits and bobs series
    - https://mycarta.wordpress.com/2019/06/17/geoscience-machine-learning-bits-and-bobs-introduction/
    - https://mycarta.wordpress.com/2019/06/20/geoscience-machine-learning-bits-and-bobs-data-inspection/
    - https://mycarta.wordpress.com/2020/09/19/geoscience-machine-learning-bits-and-bobs-data-completeness/
  - ML methods five articles https://github.com/mycarta/predict/blob/master/README.md
- Good info on ML from CSEG
  - https://csegrecorder.com/editions/issue/2018-01
  - https://csegrecorder.com/articles/view/a-gentle-introduction-to-machine-learning
  - https://csegrecorder.com/articles/view/geochemical-facies-analysis-using-unsupervised-machine-learning
- build a course in python https://ines.github.io/course-starter-python/
- imputation https://github.com/FRI-Energy-Analytics/summer_fellows/blob/master/Feature%20Selection%20-%20Novel%20Viz/ImputationCheatSheet.md
- wtfs per minuite http://reviewthecode.blogspot.com/2016/01/wtf-per-minute-actual-measurement-for.html

# to add to 557
- https://www.firstpythonnotebook.org
- colorbars
  - end the rainbow stuff
  - https://mycarta.wordpress.com/2020/09/17/busting-bad-colormaps-with-python-and-panel/
- well profiles and planning https://well-profile.readthedocs.io/en/latest/
- ML diagram https://scikit-learn.org/stable/tutorial/machine_learning_map/index.html
- reservoir engineering stuff https://github.com/yohanesnuwara#-tutorials-and-courses
- numpy tutuorial https://github.com/rougier/numpy-tutorial
- welly data without local files https://observablehq.com/@justingosses/a-notebook-using-wellio-js-wellioviz-js-for-quick-looks-of-la
- https://xkcd.com/1205/
- https://github.com/jonnymaserati/welleng

# remote sensing
- https://content.sciendo.com/downloadpdf/journals/pcr/50/2/article-p61.pdf
- geospatial https://agilescientific.com/blog/x-lines-of-python-static-basemaps
- remote sensing semi-automated classification https://fromgistors.blogspot.com/2020/11/scp-7-1-0.html
- pyGMT https://github.com/GenericMappingTools/pygmt
- blog https://joemorrison.medium.com
