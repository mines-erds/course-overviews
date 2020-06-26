# Module 2: `python` syntax and data wrangling

After successful completion of the module, learners will be able to:

**Import, wrangle, and analyze earth-resource data using python syntax, data types, data storage, and common packages (e.g., pandas)**, including:
- Use python syntax to successfully import, analyze, and export data
- Differentiate common data types (e.g., string, float), the importance of selecting the correct data type, and how to manipulate data types
- Apply concepts of indexing and split-apply-combine methods to clean, sort, and distill real-world data

## Assessments
- fill-in-the-blank quiz about syntax, data types, etc.
- Colab notebook about syntax that gets peer-reviewed
- Data wrangling Colab notebook
- Crowd-sourced cheat sheet

## python syntax
- BUILD NOTEBOOK FROM Chapter 3 of Wes McKinney
- 0 not 1
- array, int, float, str, list, dict, tuple, boolean
- indexing and slicing, stacking
- operators (e.g., +, -, \*, /, ==, !=, <, <=)
- loops
  - for i in x,for x in range(), ;
- help using tab completion and `?`, example `'len?`
- creating simple functions `def`

### readings
- Chapter 3 of Wes McKinney
- other good summaries?????????????

## pandas
- Read this https://pandas.pydata.org/pandas-docs/stable/getting_started/10min.html
- TRY THIS http://rcs.bu.edu/examples/python/data_analysis/dataScience.ipynb
- importing data into series, dataframe (index, columns, data), and head(), describe(), etc.
- wrangling (dtypes, NaNs, etc)
- methods (describe, quantile, mean, std, etc)
- groupby vs. value_counts and methods like sort_values, agg, sort, mean, etc.)
- indexing ([ ], loc, iloc)
- split-apply-combine operations
  - df[df['grade'] > 80]
- operations using `apply()` and `lambda`
  - create new column using `apply.function`
- pandas loops to pull out variables and plot stuff (for name, group in df.groupby('a'):)

Also, need to write a notebook that finds weird things like 5576..00 and 5,576.00 and 5576.;00 instead of 5576.00. For a starter, see pg 27 of Henley and Wolf

### readings
- pandas intro online
- datasciencemadesimple website for pandas operations
- books
  - Igual and Segui book has good walk through
  -

## reflection
top 10 one-liners crowd-sourced cheat sheet
