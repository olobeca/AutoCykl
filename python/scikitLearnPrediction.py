import numpy as np
import pandas as pd
import sklearn
import sys

#wypisywanie danych
df = pd.read_csv('CarPrice_Assignment.csv', delim_whitespace=False, header=0)
#print(df.head())
#print(df.columns)


#analiza danych
#print(df.describe()) #statystyki opisowe
print(df.info()) #typy danych


#wizualizacja danych 

import matplotlib.pyplot as plt
import seaborn as sns 

col_study = ['price', 'horsepower']
sns.pairplot(df[col_study])
plt.show()

