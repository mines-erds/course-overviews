# Mines-ERDS

# Resources for building course

## The who-cares argument
- https://www.nature.com/articles/d41586-020-01366-w and https://www.washingtonpost.com/science/rock-samples-arent-archived-or-shared-they-need-to-be-geologists-warn-pointing-to-a-reproducibility-crisis/2020/05/15/aa858e06-953c-11ea-91d7-cf4423d47683_story.html

## Geo-specific courses and datasets
- https://github.com/DataScienceUB/introduction-datascience-python-book
- https://geo-python.github.io/site/
- Datasets
 - https://github.com/yohanesnuwara/open-geoscience-repository
 - https://dataunderground.org
 - https://hackmd.io/iAyNR_TOSguKnlnkrY2Auw
- Dan Buscombe ML tutorials https://twitter.com/magic_walnut/status/1265413642788298752?s=11
- macrostrat api https://dataunderground.org/dataset/macrostrat-geologic-maps/resource/e412b05e-a45e-4809-82ab-5095ac383ddc

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

## Mining data
- https://omf.readthedocs.io/en/latest/ open mining format

## Thin sections
- RockType funded by XStarter http://rocktype.com and https://www.xstarter.io/portfolio
- Virtual_Microscope http://www.ged.rwth-aachen.de/index.php?cat=Virtual_Microscope and https://m-a-p.expert
- thin section resources from Jae Erickson https://elearning.mines.edu/courses/554/modules

## Point clouds and topography data
- https://www.pyvista.org/projects/index.html
- https://github.com/fastscape-lem nice landscape evolution model - create topo with this, then analyze? PyVista integration?
- LandLab https://www.earth-surf-dynam.net/8/379/2020/
- pyBadlands - see this paper https://doi.org/10.1130/G47498.1 and movies in supp data https://gsapubs.figshare.com/articles/Supplemental_Material_How_do_basin_margins_record_long-term_tectonic_and_climatic_changes_/12307454

## Water resources
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
