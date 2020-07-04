# Mines-ERDS Resources for building course

## Books I will use:

### Open source
- Python for Everybody http://do1.dr-chuck.com/pythonlearn/EN_us/pythonlearn.pdf
- Think Python https://greenteapress.com/wp/think-python/


### Closed source
- Python for Data Analysis (google "python for data analysis book second edition pdf")


## Geo-specific courses and datasets

### General python stuff
- open source Think Python 2nd edition https://github.com/AllenDowney/ThinkPython2
- Wes McKinney https://github.com/wesm/pydata-book
- Barcelona book https://github.com/DataScienceUB/introduction-datascience-python-book
- Python for Everybody open source http://do1.dr-chuck.com/pythonlearn/EN_us/pythonlearn.pdf and https://www.py4e.com

### Geo-specific
- Matt Bauer 1.5 hour video https://www.youtube.com/watch?v=GXMDJSRrKzw
- Pyrcz demos https://github.com/GeostatsGuy/PythonNumericalDemos
- Jesse Pisel https://github.com/jessepisel/energy_analytics/tree/master/Python%20Workflows
- Helsinki course https://geo-python.github.io/site/
- Dan Buscombe ML tutorials https://twitter.com/magic_walnut/status/1265413642788298752?s=11
- macrostrat api https://dataunderground.org/dataset/macrostrat-geologic-maps/resource/e412b05e-a45e-4809-82ab-5095ac383ddc
- Data scrapers
  - New Mexico https://github.com/jessepisel/New-Mexico-Oil-Conservation-Division
  - Colorado https://github.com/jessepisel/cogcc_scraping_python
- Datasets
- Pyrcz datasets https://github.com/GeostatsGuy/GeoDataSets
- https://github.com/yohanesnuwara/open-geoscience-repository
 - https://dataunderground.org
 - https://hackmd.io/iAyNR_TOSguKnlnkrY2Auw
 - Netherlands data https://nlog.nl/en/data
 - Earth Engine Data on deltas, waves, and tides https://jhnienhuis.users.earthengine.app
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
- core data
  - striplog and litholog
  - corebreakout or depstrat for advanced
- seismic and GPR
  - segyio for seismic https://github.com/equinor/segyio
  - GPRpy for GPR data https://github.com/NSGeophysics/GPRPy
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

## Reservoir modeling and petrophysics
- xtgeo https://github.com/equinor/xtgeo
- geostatspy from Michael Pyrcz
- pypetrophysics https://github.com/Japhiolite/pypetrophysics
- petropy https://github.com/toddheitmann/PetroPy

## Mining data
- https://omf.readthedocs.io/en/latest/ open mining format

## Thin sections
- RockType funded by XStarter http://rocktype.com and https://www.xstarter.io/portfolio
- Transform 2020 talk on image recognition https://twitter.com/kwinkunks/status/1271171478940274689?s=20
- Virtual_Microscope http://www.ged.rwth-aachen.de/index.php?cat=Virtual_Microscope and https://m-a-p.expert
- thin section resources from Jae Erickson https://elearning.mines.edu/courses/554/modules

## GIS, topography, and point cloud data
- pyGMT Generic Mapping Toolbox https://www.pygmt.org/latest/
- pyproj projections https://github.com/kwinkunks/notebooks/blob/master/Coordinate_transformations.ipynb
- Post Storm Imagery https://github.com/UNCG-DAISY/psi-collect
- https://www.pyvista.org/projects/index.html
- https://github.com/fastscape-lem nice landscape evolution model - create topo with this, then analyze? PyVista integration?
- LandLab https://www.earth-surf-dynam.net/8/379/2020/
- pyBadlands - see this paper https://doi.org/10.1130/G47498.1 and movies in supp data https://gsapubs.figshare.com/articles/Supplemental_Material_How_do_basin_margins_record_long-term_tectonic_and_climatic_changes_/12307454

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

## theory and examples
- if you cant read that, you better read this https://www.poynter.org/reporting-editing/2015/bloomberg-businessweeks-latest-issue-is-devoted-to-code/
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

## matplotlib and seaborn
- https://matplotlib.org/tutorials/introductory/usage.html#sphx-glr-tutorials-introductory-usage-py
- https://matplotlib.org/tutorials/introductory/pyplot.html#sphx-glr-tutorials-introductory-pyplot-py
- https://seaborn.pydata.org/tutorial/relational.html

## Data-Viz
- what not to do https://twitter.com/pokateo_/status/1265278980887924736?s=11

## Pandas
- https://pandas.pydata.org/pandas-docs/stable/getting_started/tutorials.html
- http://www.datasciencemadesimple.com/index-select-filter-dataframe-pandas-python/
- https://medium.com/dunder-data/selecting-subsets-of-data-in-pandas-6fcd0170be9c

## Spatial stuff
- GeoJSON from a pandas DF https://geoffboeing.com/2015/10/exporting-python-data-geojson/
  - then plot with ipyleaflet https://ipyleaflet.readthedocs.io/en/latest/api_reference/geo_json.html
- http://geopandas.org/mapping.html
- https://scitools.org.uk/cartopy/docs/latest/matplotlib/feature_interface.html

## Colab
- importing data https://towardsdatascience.com/importing-data-to-google-colab-the-clean-way-5ceef9e9e3c8

## Other useful stuff
- regex regular expressions https://docs.python.org/3/howto/regex.html
