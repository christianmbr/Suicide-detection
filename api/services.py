import pandas as pd
from nltk.tokenize import RegexpTokenizer
from nltk.corpus import stopwords
import pickle
# import nltk
# nltk.download('stopwords')

vocabulary = pickle.load(open('./api/predictionModel/knowledgebase_vocabulary.pkl', 'rb'))
model = pickle.load(open('./api/predictionModel/nlp_model.pkl', 'rb'))

stop_words = stopwords.words("english")
# Stop words adicionales.
stop_words.append('I')
stop_words.append('It')
stop_words.append('The')
stop_words.append('My')
stop_words.append('One')

def cleaningStopwords(string):
  tokenized = RegexpTokenizer(r'\w+').tokenize(string)
  filtered_sent=[]
  for w in tokenized:
    if w not in stop_words:
      filtered_sent.append(w)
  return pd.Series(' '.join(filtered_sent))

def predictModel(text):
  seriesText = cleaningStopwords(text)
  transformedText = vocabulary.transform(seriesText)
  result = model.predict(transformedText)
  
  if (result[0] == 1):
    return 'depression detected'
  return 'you are fine'