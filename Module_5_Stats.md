# Module 5: Summary and comparative statistics

After successful completion of the module, learners will be able to:

**Design methods for statistical analysis of earth-resource data using numpy and scipy packages**, including:
- Descriptive and summary statistics (e.g., mean, median)
- Comparative statistics (e.g., comparing two datasets)

## Assessments
- asdf

## Nice pages
From the Think Python book guy:
- https://allendowney.blogspot.com/2013/08/are-my-data-normal.html
- https://www.allendowney.com/blog/2019/08/13/watch-your-tail/





- [Statistical significance](https://xkcd.com/882/)
- [Correlation vs. Causality](https://xkcd.com/925/)

- [Oily House Index](https://xkcd.com/2327/)

- [If you pay doctors enough, they bring people back to life](https://twitter.com/amihaiglazer/status/1277769775855235072?s=11)
  - Related to this, see [Linear regression](https://xkcd.com/1725/) and [Curve fitting](https://xkcd.com/2048/) and [Extrapolating](https://xkcd.com/605/)... I could go on, xkcd has more of these

## Distributions, log-normality, and the log10 scale
- 1D distributions
  - normal, log-normal, log10, log2
    - the mean may be meaningless
- CDF, KDE, percentiles, other univariate descriptors
  - operations (* vs @; +=)
    - see page 58 of Python Data Science Handbook by Jake Vanderplas
  - np.max and argmax, percentile

## Comparative statistics
- Using descriptive statistics qualitatively (e.g., comparing distributions)
- Linear regression
- More quantitative methods
  - scipy.interpolate; scipy.stats
  - Parametric t test
  - Non-parametric KS test
