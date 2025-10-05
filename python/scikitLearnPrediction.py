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
# print(df.info()) #typy danych


#wizualizacja danych 

import matplotlib.pyplot as plt
import seaborn as sns 

#col_study = ['price', 'horsepower']
#sns.pairplot(df[col_study])
#plt.show()

# # pd.options.display.float_format = '{:,.4f}'.format 
# #print(df.corr()) 
# plt.figure(figsize=(12,8))
# sns.heatmap(df.corr(), annot=True, fmt=".2f")
# plt.show()
# nie ma sensu tego pokazaywac bo w danych sa stringi- nazwy aut itp



# sprawdzenie czy dane nie sa puste 
# print(df.isnull().sum()) 



# test danych 

y = df['price'].values
# print(y)
X  = df[['horsepower']].values #podwojne nawiasy zamiast reshape 
# print(X)


from sklearn.linear_model import LinearRegression

model = LinearRegression()
model.fit(X,y)

model.coef_ #wspolczynnik kierunkowy
model.intercept_ #wyraz wolny 


plt.figure(figsize=(12,8))
sns.regplot(data=df, x='horsepower', y='price')
plt.xlabel('horsepower')
plt.ylabel("price")
plt.show()

from sklearn.metrics import r2_score
print(r2_score(y, model.predict(X)))
#jakosc modelu 

